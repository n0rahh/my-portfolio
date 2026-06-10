import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [
    vue(),
    // styles.configFile switches Vuetify to per-component sass compilation, so
    // only the styles of components actually used end up in the CSS bundle
    // (the precompiled vuetify/styles ships the entire framework).
    vuetify({
      autoImport: true,
      styles: { configFile: "src/styles/vuetify-settings.scss" },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        quietDeps: true,
      },
    },
  },
  server: {
    port: 3000,
  },
});
