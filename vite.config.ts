import { fileURLToPath, URL } from 'node:url'
import { defineConfig, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createHtmlPlugin } from 'vite-plugin-html';
import viteCompression from 'vite-plugin-compression';

function handleBase(mode: string) {
  if (mode === "production") return "//";
  else if (mode === "staging") return "//";
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {

  const config: UserConfig = {
    base: handleBase(mode),
    // server: {
    //   allowedHosts: true,
    // },
    plugins: [vue(),
    // 壓縮插件(.gz)
    viteCompression(),
    // ejs 插件設定
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: '',
          description: '',
          twitter_description: '',
          keywords: '',
          url: '',
          image: ''
        }
      }
    })],
    optimizeDeps: {
      include: ["@udn-digital-center/common-components > vue-scrollto"],
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    css: {
      preprocessorOptions: {
        scss: { additionalData: `@import "@/styles/mixins.scss";` },
      },
    },
  }

  return config
})