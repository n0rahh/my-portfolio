<template>
  <v-container
    fluid
    class="px-0"
  >
    <v-form ref="form">
      <v-text-field
        ref="name"
        v-model="name"
        :label="$t('FORM.LABEL.NAME')"
        :rules="[rules.name]"
        :error-messages="errorMessages.name"
        :placeholder="$t('FORM.PLACEHOLDER.NAME')"
        variant="outlined"
      />
      <v-text-field
        ref="email"
        v-model="email"
        class="mt-2"
        :label="$t('FORM.LABEL.EMAIL')"
        :rules="[rules.email]"
        :error-messages="errorMessages.email"
        aria-required
        placeholder="johndoe@gmail.com"
        variant="outlined"
        @keydown.space.prevent
      />
      <v-textarea
        ref="content"
        v-model="content"
        class="mt-2"
        :label="$t('FORM.LABEL.MESSAGE')"
        :rules="[rules.content]"
        :error-messages="errorMessages.content"
        :placeholder="$t('FORM.PLACEHOLDER.MESSAGE')"
        variant="outlined"
      />
      <v-file-input
        ref="fileInput"
        :label="$t('FORM.LABEL.FILE')"
        variant="underlined"
        :show-size="1024"
        type="file"
        accept="application/pdf"
        @change="handleFileChange"
      />
      <v-row class="d-flex align-center">
        <v-col
          sm="1"
          cols="2"
        >
          <v-checkbox
            v-model="terms"
            hide-details
            :class="{
              'text-error': !isValid && isBtnClicked,
            }"
          />
        </v-col>
        <v-col
          cols="6"
          :class="{
            'px-0': $vuetify.display.smAndDown,
          }"
        >
          <v-label
            :class="{
              'text-error': !isValid && isBtnClicked,
            }"
          >
            {{ $t('FORM.LABEL.TERMS_CHECKBOX') }}
            <a
              class="ml-2"
              :href="`/${currentLocale}/policy`"
            >
              {{ $t('FORM.LABEL.TERMS') }}
            </a>
          </v-label>
        </v-col>
      </v-row>
      <div class="action d-flex justify-end">
        <v-btn
          class="send-button"
          :class="{
            'success': isValid,
            'error': !isValid
          }"
          @click="sendForm"
        >
          <span
            class="send-button_text p1"
          >
            {{ $t('FORM.SEND_BUTTON') }}
          </span>
          <v-icon
            class="send-button_icon-success"
            size="x-large"
            icon="mdi-check"
          />
          <v-icon
            class="send-button_icon-error"
            size="x-large"
            icon="mdi-close"
          />
        </v-btn>
      </div>
    </v-form>
    <v-snackbar
      v-model="notify"
      :color="isSuccess ? 'green' : 'red'"
    >
      {{ notifyMessage }}
    </v-snackbar>
  </v-container>
</template>

<script>
import GetLocale from '@/locales/helpers/get-locale';

export default {
  name: 'EmailForm',
  data() {
    return {
      name: '',
      email: '',
      content: '',
      notify: false,
      isSuccess: false,
      file: null,
      fileBase64: null,
      terms: false,
      isValid: false,
      isBtnClicked: false,
      errorMessages: {
        name: [],
        email: [],
        content: [],
      },
      rules: {
        name: (v) => !!v?.trim() || this.$t('FORM.RULES.NAME'),
        email: (v) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v) || this.$t('FORM.RULES.EMAIL'),
        content: (v) => !!v?.trim() || this.$t('FORM.RULES.MESSAGE'),
      }, 
      notifyMessage: null,
    };
  },
  computed: {
    currentLocale() {
      return GetLocale.currentLocale;
    },
  },
  methods: {
    async validateForm() {
      this.errorMessages.name = await this.$refs.name.validate();
      this.errorMessages.email = await this.$refs.email.validate();
      this.errorMessages.content = await this.$refs.content.validate();
      this.isValid = !this.errorMessages.name.length && !this.errorMessages.email.length && !this.errorMessages.content.length && this.terms;
    },
    handleFileChange(event) {
      const file = this.$refs.fileInput.files[0];
      this.file = event.target.files[0];
      
      this.readFileContent(file);
    },
    readFileContent(file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.fileBase64 = reader.result.split(',')[1];
      };
      reader.readAsDataURL(file);
    },
    resetErrorMessages() {
      this.errorMessages.name = [];
      this.errorMessages.email = [];
      this.errorMessages.content = [];
      this.file = null;
      this.fileBase64 = null;
      this.isValid = false;
      this.isBtnClicked = true;
      this.showNotify(this.$t('FORM.NOTIFY.ERROR', false));
    },
    showNotify(message, type) {
      this.isSuccess = type;
      this.notify = true;
      this.notifyMessage = message;
    },
    async sendForm() {
      this.isValid = false;

      if(this.file?.size > 1024 * 1024 * 5) {
        this.showNotify(this.$t('FORM.NOTIFY.FILE_SIZE'), false);
        this.file = null;
        this.fileBase64 = null;
        return;
      }
      this.isBtnClicked = true;

      await this.validateForm();

      if (this.isValid) {
        await this.$http.post('/sendEmail', {
          name: this.name,
          email: this.email,
          message: this.content,
          attachment: this.fileBase64,
          attachmentType: this.file?.type,
          attachmentSize: this.file?.size,
        }).then((response) => {
          if(response.data === 'ERROR') {
            this.resetErrorMessages();
            return;
          }
          this.showNotify(this.$t('FORM.NOTIFY.SUCCESS'), true);
          this.terms = false;
          this.file = null;
          this.$refs.form.reset();
          this.isBtnClicked = false;
        }).catch(() => {
          this.resetErrorMessages();
          this.isBtnClicked = false;
        });
      } else {
        this.terms = false;
        this.resetErrorMessages();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.send-button {
  position: relative;
  right: 0;
  height: 60px;
  width: 180px;
  background-color: $deep-blue;
  color: $white;
  border: none;
  border-radius: 8px;
  transition: all .5s;
  &_icon-success {
    opacity: 0;
  }
  &_icon-error {
    opacity: 0;
  }
}

.send-button *{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity .25s;
}

.success {
  &:focus {
    width: 30px;
    background-color: $success;
    border-radius: 50%;
    .send-button_text {
      opacity: 0;
    }
    .send-button_icon-success {
      opacity: 1;
      transition-delay: .5s;
    }
  }
}

.error {
  &:focus {
    width: 30px;
    background-color: $error;
    border-radius: 50%;
    .send-button_text {
      opacity: 0;
    }
    .send-button_icon-error {
      opacity: 1;
      transition-delay: .5s;
    }
  }
}

.text-error {
  color: $error;
}
</style>