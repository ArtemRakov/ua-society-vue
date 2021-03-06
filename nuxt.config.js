module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ua-society-vue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" }
    ]
  },

  modules: [
    // Simple usage
    '@nuxtjs/bootstrap-vue'
  ],

  css: [
    // Load a Node.js module directly (here it's a Sass file)
    // CSS file in the project
    // '@/assets/css/main.css',
    // SCSS file in the project
    '@/assets/stylesheets/application.scss'
  ],


  /*
  ** Customize the progress bar color
  */
  loading: { color: '#52ACFF' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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
