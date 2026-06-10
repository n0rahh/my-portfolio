<template>
  <v-container
    fluid
    class="px-0"
  >
    <v-form
      ref="formRef"
      @submit.prevent="submit"
    >
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="form.name"
            label="Name"
            :rules="[rules.name]"
            placeholder="John Doe"
            variant="outlined"
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="form.email"
            label="Email"
            :rules="[rules.email]"
            placeholder="johndoe@gmail.com"
            variant="outlined"
            @keydown.space.prevent
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          class="d-flex flex-column"
        >
          <v-textarea
            v-model="form.message"
            class="mt-2"
            label="Message"
            :rules="[rules.message]"
            placeholder="Enter your message"
            variant="outlined"
          />

          <v-file-input
            v-model="file"
            label="File"
            variant="underlined"
            :show-size="1024"
            accept="application/pdf"
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
            :class="{ 'text-error': showTermsError }"
            aria-label="Terms and Conditions"
          />
          <v-label
            class="ml-2"
            :class="{
              'text-error': showTermsError,
              'd-flex flex-column align-start': $vuetify.display.xs,
            }"
          >
            <span>I have read and agree to the&nbsp;</span>
            <router-link to="/policy">Privacy Policy</router-link>
          </v-label>
        </v-col>
      </v-row>

      <v-row :class="{ 'mt-8': $vuetify.display.smAndDown }">
        <v-col
          cols="12"
          class="py-0 d-flex justify-end align-center"
        >
          <v-btn
            class="send-button"
            :loading="isSending"
            type="submit"
            :block="$vuetify.display.smAndDown"
          >
            Send
          </v-btn>
        </v-col>
      </v-row>
    </v-form>

    <v-snackbar
      v-model="snackbar.visible"
      :color="snackbar.success ? 'success' : 'error'"
    >
      {{ snackbar.message }}
    </v-snackbar>
  </v-container>
</template>

<script setup>
  import { computed, reactive, ref, watch } from 'vue';

  import { sendContactForm } from '@/api/portfolio';

  const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const formRef = ref(null);
  const form = reactive({ name: '', email: '', message: '' });
  const file = ref(null);
  const fileBase64 = ref(null);
  const terms = ref(false);
  const submitted = ref(false);
  const isSending = ref(false);
  const snackbar = reactive({ visible: false, success: false, message: '' });

  const rules = {
    name: (v) => !!v?.trim() || 'Name is required',
    email: (v) => EMAIL_PATTERN.test(v) || 'Valid email address required',
    message: (v) => !!v?.trim() || 'Message is required',
  };

  const showTermsError = computed(() => submitted.value && !terms.value);

  watch(file, (value) => {
    const selected = Array.isArray(value) ? value[0] : value;
    if (!selected) {
      fileBase64.value = null;
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      fileBase64.value = reader.result.split(',')[1];
    };
    reader.readAsDataURL(selected);
  });

  const notify = (message, success) => {
    snackbar.message = message;
    snackbar.success = success;
    snackbar.visible = true;
  };

  const resetForm = () => {
    form.name = '';
    form.email = '';
    form.message = '';
    file.value = null;
    fileBase64.value = null;
    terms.value = false;
    submitted.value = false;
    formRef.value.resetValidation();
  };

  const submit = async () => {
    if (isSending.value) return;
    submitted.value = true;

    const { valid } = await formRef.value.validate();
    if (!valid || !terms.value) return;

    isSending.value = true;
    try {
      await sendContactForm({
        name: form.name,
        email: form.email,
        message: form.message,
        fileBase64: fileBase64.value,
      });
      notify('Your message has been sent successfully!', true);
      resetForm();
    } catch {
      notify('Something went wrong. Please try again later.', false);
    } finally {
      isSending.value = false;
    }
  };
</script>

<style lang="scss" scoped>
  @use '@/styles/tokens.scss' as *;

  .send-button {
    height: 60px;
    width: 180px;
    color: $white;
    border: 1px solid $aqua-neon;
    font-size: 20px;
    border-radius: $radius-sm;
    transition: all 0.5s;
    background-color: transparent;
  }

  .text-error {
    color: $error;
  }
</style>
