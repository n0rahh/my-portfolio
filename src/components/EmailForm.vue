<template>
  <v-container fluid>
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
        :label="$t('FORM.LABEL.FILE')"
        variant="underlined"
        :show-size="1024"
      />
      <v-checkbox
        v-model="terms"
        :class="{
          'text-error': !isValid && isBtnClicked,
        }"
        :label="$t('FORM.LABEL.TERMS_CHECKBOX')"
      />
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
  </v-container>
</template>

<script>
export default {
  name: 'EmailForm',
  data() {
    return {
      name: '',
      email: '',
      content: '',
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
    };
  },
  methods: {
    async validateForm() {
      this.errorMessages.name = await this.$refs.name.validate();
      this.errorMessages.email = await this.$refs.email.validate();
      this.errorMessages.content = await this.$refs.content.validate();
      this.isValid = !this.errorMessages.name.length && !this.errorMessages.email.length && !this.errorMessages.content.length && this.terms;
    },
    async sendForm() {
      this.isBtnClicked = true;
      await this.validateForm();

      if (this.isValid) {
        console.log('SUCCESS');
        this.terms = false;
        this.$refs.form.reset();
        this.isBtnClicked = false;
      } else {
        console.log('ERROR');
        this.errorMessages.name = [];
        this.errorMessages.email = [];
        this.errorMessages.content = [];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.send-button {
  position: relative;
  right: 0;
  height: 60px;
  width: 110px;
  background-color: #202231;
  color: #fff;
  border: none;
  border-radius: 8%;
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
    background-color: #44c08a;
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
    background-color: #ff0000;
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
  color: red;
}
</style>