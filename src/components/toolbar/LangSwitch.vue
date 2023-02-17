<template>
  <div class="options-lang ml-4 d-flex align-center">
    <v-menu 
      v-model="open"
      offset-y
    >
      <template v-slot:activator="{ props }">
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
export default {
  data() {
    return {
      currentLang: 'EN',
      open: false,
    };
  },
  computed: {
    availableLocales() { 
      return this.$i18n.availableLocales;
    },
  },
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
      this.currentLang = lang.toUpperCase();
      document.querySelector('html').setAttribute('lang', lang);
    },
  },
};
</script>

<style lang="scss" scoped>
.lang-btn {
  cursor: pointer;
}
</style>
