import 'vuetify/styles';

import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

// SVG icons (@mdi/js) instead of the full @mdi/font icon font —
// only the icons actually used end up in the bundle.
export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: '#48eed6',
          secondary: '#03b298',
          background: '#0a0f1e',
          surface: '#111827',
          error: '#ff5252',
          success: '#44c08a',
        },
      },
    },
  },
});
