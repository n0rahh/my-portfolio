<template>
  <v-container
    fluid
    class="px-0"
  >
    <v-form ref="form">
      <div
        v-if="isSending"
        class="loading-overlay"
      />
      <div class="d-flex align-center">
        <v-text-field
          ref="name"
          v-model="name"
          class="mr-4"
          label="Name"
          :rules="[rules.name]"
          :error-messages="errorMessages.name"
          placeholder="John Doe"
          variant="outlined"
        />
        <v-text-field
          ref="email"
          v-model="email"
          class="ml-4"
          label="Email"
          :rules="[rules.email]"
          :error-messages="errorMessages.email"
          placeholder="johndoe@gmail.com"
          variant="outlined"
          @keydown.space.prevent
        />
      </div>
      <v-textarea
        ref="content"
        v-model="content"
        class="mt-2"
        label="Message"
        :rules="[rules.content]"
        :error-messages="errorMessages.content"
        placeholder="Enter your message"
        variant="outlined"
      />
      <v-file-input
        ref="fileInput"
        label="File"
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
            Terms and Conditions
            <a
              class="ml-2"
              href="/policy"
            >
              Privacy Policy
            </a>
          </v-label>
        </v-col>
      </v-row>
      <div class="action d-flex justify-end align-center">
        <v-btn class="send-button">
          <v-progress-circular
            v-if="isSending"
            indeterminate
            model-value="20"
          />
          <span v-else>Send</span>
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
          name: (v) => !!v?.trim() || 'Name is required',
          email: (v) =>
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v) ||
            'Valid email address required',
          content: (v) => !!v?.trim() || 'Message is required',
        },
        notifyMessage: null,
        isSending: false,
      };
    },
    methods: {
      async validateForm() {
        this.errorMessages.name = await this.$refs.name.validate();
        this.errorMessages.email = await this.$refs.email.validate();
        this.errorMessages.content = await this.$refs.content.validate();
        this.isValid =
          !this.errorMessages.name.length &&
          !this.errorMessages.email.length &&
          !this.errorMessages.content.length &&
          this.terms;
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
        this.isValid = false;
        this.isBtnClicked = true;
        this.showNotify('Something went wrong. Please try again later.', false);
      },
      showNotify(message, type) {
        this.isSuccess = type;
        this.notify = true;
        this.notifyMessage = message;
      },
    },
  };
</script>

<style lang="scss" scoped>
  @use '@/styles/colors.scss' as *;

  .send-button {
    position: relative;
    right: 0;
    height: 60px;
    width: 180px;
    color: $white;
    border: 1px solid $aqua-neon;
    font-size: 20px;
    border-radius: 8px;
    transition: all 0.5s;
    background-color: transparent;
  }

  .text-error {
    color: $error;
  }
</style>
