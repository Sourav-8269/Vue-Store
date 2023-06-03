import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          // Update the asset URLs configuration as needed
          // For example, if you have images in your Vue templates
          // and want to enable HMR for those images, use the following:
          img: ['src', 'data-src'],
        },
      },
    }),
    quasar(),
  ],
  server: {
    // Enable HMR
    hmr: true,
  },
})
