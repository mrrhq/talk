<script setup lang="ts">
import YakMap from './YakMap.vue'

const colors = {
  vue: '#34ba67',
  nuxt: '#00DC82',
  vite: '#454ce1',
  unjs: '#982',
  ts: '#007ACC',
  vscode: '#007ACC',
  vitesse: '#895',
  slidev: '#2ae',
  vitest: '#82ba34',
  unplugin: '#525',
}

const primary = [
{
    name: 'aimai',
    display: '爱买票票',
    x: 0,
    y: 0,
    color: '',
    shape: 'circle',
  },
  {
    name: 'wechatapp',
    display: '微信小程序',
    from: ['aimai'],
    color: colors.vue,
  },
  {
    name: 'uniapp',
    display: 'uni-app',
    from: ['wechatapp'],
    color: colors.nuxt,
  },
  {
    name: 'uni-helper',
    display: 'Uni Helper',
    from: ['uniapp'],
    deps: ['vscode'],
    color: colors.nuxt,
    shape: 'circle',
  },
  {
    name: 'nuxt',
    display: 'Nuxt',
    from: ['aimai'],
    color: colors.nuxt,
  },
  {
    name: 'unjs',
    display: 'UnJS',
    from: ['nuxt'],
    color: colors.unjs,
  },
  {
    name: 'ofetch',
    display: 'ofetch',
    from: ['unjs'],
    color: colors.unjs,
  },
  {
    name: 'vue',
    display: 'Vue.js',
    from: ['nuxt', 'uniapp'],
    color: colors.vue,
  },
  {
    name: 'hammerjs',
    display: 'Hammer.js',
    from: ['seat-area'],
    color: colors.ts
  },
  {
    name: 'seat-area',
    display: '选座插件',
    from: ['aimai'],
    color: colors.ts
  },
  {
    name: 'vite',
    display: 'Vite',
    from: ['vue'],
    color: colors.vite,
  },
  {
    name: 'vite-plugin-patch-env',
    display: 'Vite Plugin Patch Env',
    from: ['vite'],
    color: colors.vite,
  },
  {
    name: 'unplugin',
    display: 'Unplugin',
    from: ['vite'],
    color: colors.unplugin,
  },
  {
    name: 'unplugin-preprocessor-directives',
    display: 'Unplugin Preprocessor Directives',
    from: ['unplugin'],
  },
  {
    name: 'vite-plugin-conditional-compile',
    display: 'Vite Plugin Conditional Compile',
    from: ['vite'],
    color: colors.vite,
  },
  {
    name: 'unplugin-compression',
    display: 'Unplugin Compression',
    from: ['unplugin', 'zzip'],
    color: colors.unplugin,
  },
  {
    name: 'vscode',
    display: 'VSCode',
    color: colors.vscode,
  },
  {
    name: 'vscode-markdown-alert',
    display: 'VSCode Markdown Alert',
    from: ['vscode'],
    color: colors.vscode,
  },
  {
    name: 'zzip',
    display: 'Zzip',
    deps: ['unjs'],
    color: colors.unjs,
  },
  {
    name: 'unplugin-notifier',
    display: 'Unplugin Notifier',
    from: ['unplugin'],
    color: colors.unplugin,
  },
  {
    name: 'vitesse-uni-app',
    display: 'Vitesse Uni App',
    from: ['uniapp'],
    deps: [
      'vite-plugin-uni-pages',
      'unocss-preset-uni',
      'vite-plugin-uni-layouts',
      'vite-plugin-uni-manifest',
    ],
  },
  {
    name: 'vite-plugin-uni-pages',
    display: 'Vite Plugin Uni Pages',
    from: ['vite', 'uni-helper'],
    color: colors.nuxt,
  },
  {
    name: 'unocss-preset-uni',
    display: 'Unocss Preset Uni',
    from: ['uni-helper'],
    color: colors.nuxt,
  },
  {
    name: 'axios-adapter',
    display: 'Axios Adapter',
    from: ['uni-helper'],
    color: colors.nuxt,
  },
  {
    name: 'vite-plugin-uni-layouts',
    display: 'Vite Plugin Uni Layouts',
    from: ['vite', 'uni-helper'],
    color: colors.nuxt,
  },
  {
    name: 'vite-plugin-uni-manifest',
    display: 'Vite Plugin Uni Manifest',
    from: ['vite', 'uni-helper'],
    color: colors.nuxt,
  },
  {
    name: 'vite-plugin-uni-platform',
    display: 'Vite Plugin Uni Platform',
    from: ['vite', 'uni-helper'],
    color: colors.nuxt,
  },
  {
    name: 'uni-env',
    display: 'Uni Env',
    from: ['unjs', 'uni-helper'],
    color: colors.nuxt,
  }
]

const secondary = [

]

const all = [
    ...primary,
    ...secondary
]

const data = {
    all,
    primary,
    poisitions: []
}
</script>

<template>
  <YakMap :isEditing="true" :data="data" />
</template>