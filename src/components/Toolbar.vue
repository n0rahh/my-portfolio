<template>
  <v-app-bar>
    <v-container class="d-flex">
        <v-img
          src="../assets/temp-logo.svg"
          max-height="30"
          max-width="60"
        />
        <v-spacer />
        <div class="buttons">
          <v-btn 
            v-for="(item, i) in navigationList" 
            :key="i"
          >
           {{ item }}
          </v-btn>
        </div>
        <v-spacer />
        <div class="options d-flex">
          <div class="options-switch d-flex align-center">
            <input type="checkbox" id="toggle">
            <label for="toggle" class="button"></label>
          </div>
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
                  v-for="(lang, i) in langs"
                  :key="`l${i}`"
                  @click="changeLang(lang)"
                >
                  {{ lang }}
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
      </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Toolbar',
  data() {
    return {
      currentLang: 'EN',
      open: false,
      navigationList: [
        this.$t('TOOLBAR.NAVIGATION.MAIN_PAGE'),
        this.$t('TOOLBAR.NAVIGATION.PROJECT'),
        this.$t('TOOLBAR.NAVIGATION.SKILLS'),
        this.$t('TOOLBAR.NAVIGATION.ABOUT'),
        this.$t('TOOLBAR.NAVIGATION.CONTACT'),
      ],
      langs: [
        this.$t('TOOLBAR.LANG.LONG_LANGS.ENG'),
        this.$t('TOOLBAR.LANG.LONG_LANGS.POL'),
        this.$t('TOOLBAR.LANG.LONG_LANGS.UKR'),
      ],
    };
  },
  methods: {
    changeLang(lang) {
      switch(lang) {
      case 'English':
        this.currentLang = this.$t('TOOLBAR.LANG.SHORT_LANGS.ENG');
        break;
      case 'Polski':
        this.currentLang = this.$t('TOOLBAR.LANG.SHORT_LANGS.POL');
        break;
      case 'Українська':
        this.currentLang = this.$t('TOOLBAR.LANG.SHORT_LANGS.UKR');
        break;
      default:
        this.currentLang = this.$t('TOOLBAR.LANG.SHORT_LANGS.ENG');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#toggle {
  display: none;
}

.button {
  display: inline-block;
  width: 60px;
  height: 25px;
  background-color: #fff;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  &::after {
    content: url('../assets/icons/sun.svg');
    width: 30px;
    height: 30px;
    background-color: #e03c3c;
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, .25);
    position: absolute;
    top: -2.5px;
    left: 0;
    display: grid;
    place-content: center;
    line-height: 0;
    transition: 1s;
    transform: 1s ease-in;
  }
}

#toggle:checked + .button {
  &::after {
    content: url('../assets/icons/moon.svg');
    background-color: #28309b;
    transform: translateX(30px) rotate(360deg);
  }
}

.lang-btn {
  cursor: pointer;
}
</style>