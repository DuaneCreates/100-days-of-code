import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */

  css: [
    '@/assets/css/tailwind.css',
    'animate.css',
    'aos/dist/aos.css',
    'github-markdown-css/github-markdown.css',
    'vue-slider-component/theme/antd.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/vue-awesome.js',
    '~plugins/vue-cleave.js',
    '~plugins/vue-markdown.js',
    '~plugins/vue-slider.js',
    '~plugins/day-components.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^vue-awesome/],
    postcss: [require('tailwindcss')('./tailwind.js'), require('autoprefixer')],

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
