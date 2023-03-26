<template>
  <div class="options-lang ml-4 d-flex align-center">
    <v-menu 
      v-model="open"
      offset-y
    >
      <template #activator="{ props }">
        <div
          v-bind="props"
          class="lang-btn"
        >
          {{ currentLang }} {{ open ? '▴' : '▾' }}
        </div>
      </template>
      <v-list class="pa-0 mt-2">
        <v-list-item
          v-for="(lang, i) in availableLocales"
          :key="`l-${i}`"
          @click="changeLang(lang)"
        >
          {{ $t(`TOOLBAR.LANGS.${lang.toUpperCase()}`) }}
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import GetLocale from '@/locales/helpers/get-locale';
import SetLocale from '@/locales/helpers/set-locale';

export default {
  data() {
    return {
      currentLang: '',
      open: false,
    };
  },
  computed: {
    availableLocales() { 
      return GetLocale.supportedLocales;
    },
  },
  mounted() {
    this.setCurrentLang();
  },
  methods: {
    changeLang(lang) {
      SetLocale.switchLanguage(lang);

      this.currentLang = lang.toUpperCase();
      
      try {
        this.$router.replace({ 
          params: {
            lang: lang,
          }, 
        });
      } catch(err) {
        console.log(err);
        this.$router.push('/');
      }
    },

    setCurrentLang() {
      setTimeout(() => {
        this.currentLang = localStorage.getItem('locale').toUpperCase();
      }, 100);
    },
  },
};
</script>

<style lang="scss" scoped>
.lang-btn {
  cursor: pointer;
}
</style>
