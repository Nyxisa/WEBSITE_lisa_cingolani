import { fileURLToPath, URL } from 'node:url'

import { resolve, dirname } from 'node:path'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,}, //fix error flag
  plugins: [vue(), Pages(), VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/i18n/locales/**'), // provide a path to the folder where translation data is stored
    })],
    assetsInclude: ['**/*.mov'], //ajout de la prise en charge des fichiers .mov
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    target: "ES2022", //ajout du build target
  },
})
