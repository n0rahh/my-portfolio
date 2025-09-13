<template>
  <v-container
    fluid
    class="px-0"
  >
    <v-form
      ref="formRef"
      @submit.prevent="sendEmail"
    >
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            ref="nameRef"
            v-model="name"
            label="Name"
            :rules="[rules.name]"
            :error-messages="errorMessages.name"
            placeholder="John Doe"
            variant="outlined"
            @input="validateName"
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            ref="emailRef"
            v-model="email"
            label="Email"
            :rules="[rules.email]"
            :error-messages="errorMessages.email"
            placeholder="johndoe@gmail.com"
            variant="outlined"
            @keydown.space.prevent
            @input="validateEmail"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          class="d-flex flex-column"
        >
          <v-textarea
            ref="contentRef"
            v-model="content"
            class="mt-2"
            label="Message"
            :rules="[rules.content]"
            :error-messages="errorMessages.content"
            placeholder="Enter your message"
            variant="outlined"
            @input="validateContent"
          />

          <v-file-input
            v-model="file"
            ref="fileInputRef"
            label="File"
            variant="underlined"
            :show-size="1024"
            type="file"
            accept="application/pdf"
            @change="handleFileChange"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          class="d-flex align-center"
        >
          <v-checkbox
            v-model="terms"
            hide-details
            :class="{
              'text-error': !isValid && isBtnClicked,
            }"
          />
          <v-label
            class="ml-2"
            :class="{
              'text-error': !isValid && isBtnClicked,
              'd-flex flex-column align-start': $vuetify.display.smAndDown,
            }"
          >
            <span>Terms and Conditions</span>
            <a
              :class="{
                'ml-2': $vuetify.display.mdAndUp,
              }"
              href="/policy"
            >
              Privacy Policy
            </a>
          </v-label>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          class="py-0 d-flex justify-end align-center"
        >
          <v-btn
            class="send-button"
            :loading="isSending"
            type="submit"
          >
            <span>Send</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-form>

    <v-snackbar
      v-model="notify"
      :color="isSuccess ? 'green' : 'red'"
    >
      {{ notifyMessage }}
    </v-snackbar>
  </v-container>
</template>

<script setup>
  import { ref, nextTick } from 'vue';
  import { http } from '@/plugins/http';

  const name = ref('');
  const email = ref('');
  const content = ref('');
  const notify = ref(false);
  const isSuccess = ref(false);
  const file = ref(null);
  const fileBase64 = ref(null);
  const terms = ref(false);
  const isValid = ref(false);
  const isBtnClicked = ref(false);
  const notifyMessage = ref(null);
  const isSending = ref(false);

  const errorMessages = ref({
    name: [],
    email: [],
    content: [],
  });

  const formRef = ref(null);
  const nameRef = ref(null);
  const emailRef = ref(null);
  const contentRef = ref(null);
  const fileInputRef = ref(null);

  const rules = {
    name: (v) => !!v?.trim() || 'Name is required',
    email: (v) =>
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v) || 'Valid email address required',
    content: (v) => !!v?.trim() || 'Message is required',
  };

  const validateName = () => {
    const res = rules.name(name.value);
    errorMessages.value.name = res === true ? [] : [res];
  };
  const validateEmail = () => {
    const res = rules.email(email.value);
    errorMessages.value.email = res === true ? [] : [res];
  };
  const validateContent = () => {
    const res = rules.content(content.value);
    errorMessages.value.content = res === true ? [] : [res];
  };

  const validateForm = async () => {
    validateName();
    validateEmail();
    validateContent();

    isValid.value =
      !errorMessages.value.name.length &&
      !errorMessages.value.email.length &&
      !errorMessages.value.content.length &&
      terms.value;
  };

  const handleFileChange = () => {
    const selectedFile = fileInputRef.value.files[0];
    file.value = selectedFile;
    readFileContent(selectedFile);
  };

  const readFileContent = (f) => {
    const reader = new FileReader();
    reader.onload = () => {
      fileBase64.value = reader.result.split(',')[1];
    };
    reader.readAsDataURL(f);
  };

  const resetErrorMessages = () => {
    errorMessages.value.name = [];
    errorMessages.value.email = [];
    errorMessages.value.content = [];
    isValid.value = false;
    isBtnClicked.value = true;
    showNotify('Something went wrong. Please try again later.', false);
  };

  const showNotify = (message, type) => {
    isSuccess.value = type;
    notify.value = true;
    notifyMessage.value = message;
  };

  const sendEmail = async () => {
    isBtnClicked.value = true;
    await validateForm();

    if (isValid.value) {
      isSending.value = true;
      const payload = {
        name: name.value,
        email: email.value,
        message: content.value,
        fileBase64: fileBase64.value,
      };

      try {
        const response = await http.post('/contact', payload);
        if (response.status !== 200) {
          throw new Error('Failed to send email');
        }
        showNotify('Your message has been sent successfully!', true);

        name.value = '';
        email.value = '';
        content.value = '';
        file.value = null;
        fileBase64.value = null;
        terms.value = false;
        isBtnClicked.value = false;

        await nextTick();
        formRef.value.resetValidation();
      } catch (error) {
        resetErrorMessages();
      } finally {
        isSending.value = false;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @use '@/styles/colors.scss' as *;

  .send-button {
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
