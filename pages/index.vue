<template>

<div>
    <main>
        <section>
            <div class="home-banner">
                <div class="navbar-ua hide-tab" id="navbar-bigscreen">
                    <a class="navbar-ua__link navbar-inpage" id="aboutlink"  href="#" > About us </a>
                    <a class="navbar-ua__link navbar-inpage" id="ourgoalslink"  href="#" > Our goals </a>
                    <a class="navbar-ua__link" href="#"> Support us </a>
                </div>

                <div class="navbar-ua show-nav-small" style="display: none;">
                    <div class="dropdown__ua">

                        <i class="fa fa-bars dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false"> </i>
                        <ul class="dropdown-menu dropdown-menu-right navbar-ua-dropdown-menu">
                            <li class="dropdown__list">
                                <!-- <%# link_to 'About us', '#', class: 'dropdown_links'  %> -->
                                <a class="dropdown_links navbar-inpage" id="aboutlink" href="#"> About us </a>

                            </li>
                            <li class="dropdown__list">
                                <!-- <%# link_to 'Our goals', '#', class: 'dropdown_links' %> -->
                                <a class="dropdown_links navbar-inpage" id="ourgoalslink" href="#"> Our goals </a>

                            </li>
                            <li class="dropdown__list">
                                <a class="navbar-ua__link" href="#"> Support us </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="home-banner__content">
                    <!-- <%= image_tag "qmul-logo-white-small.png", class: "home-banner__logo"  %> -->
                    <h1 class="home-banner__title">  <span class="home-banner__title-main"> Queen Mary </span>  <span class="home-banner__title-sub"> Ukrainian Society  </span> </h1>
                </div>
            </div>
        </section>

        <section class="about-us" id="about">
            <div class="text-center">
                <h2 class="heading-secondary"> About us </h2>
            </div>
            <div class="box">
                <div class="about-us__flex">
                    <div class="about-us__item-1">
                        <div class="about-us__description">
                            <div class="about-us__img-h3">
                                <!-- <%= image_tag 'book.png', class: 'about-us__image-small' %> -->
                                <h3 class="about-us__h3"> OUR UNIVERSITY </h3>
                            </div>
                            <p class="about-us__text">
                                Queen Mary University of London is a member of Russell Group Association and belongs to TOP-10 universities in London. The
                                notable alumni of our university are recognised within the business and economics fields all over the world.
                            </p>
                        </div>
                    </div>

                    <div class="about-us__item-2 hide-phone">
                        <div class="about-us__image">
                            <!-- <%= image_tag 'qmul-logo-blue.png', class: 'about-us__qmul' %> -->
                        </div>
                    </div>

                </div>

                <div class="about-us__flex">
                    <div class="about-us__item-3 hide-phone">
                        <div class="about-us__image">
                            <!-- <%= image_tag 'logo-qmus.png', class: 'about-us__society' %> -->
                        </div>
                    </div>

                    <div class="about-us__item-4">
                        <div class="about-us__description">
                            <div class="about-us__img-h3">
                                <!-- <%= image_tag 'people.png', class: 'about-us__image-small' %> -->
                                <h3 class="about-us__h3"> UKRAINIAN SOCIETY </h3>
                            </div>
                            <p class="about-us__text">
                                The activities organised by our society specifically contribute to the raise of awareness of the Ukrainian heritage internationally.
                                Furthermore, we allow students from all over the world to become familiar with the Ukrainian culture, customs, history and
                                political development.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section class="our-goals" id="ourgoals">
            <div class="text-center">
                <h2 class="heading-secondary"> Our goals </h2>
            </div>
            <div class="box">
                <div class="row">

                    <div class="row-eq">
                        <div class="col-xs-12 col-md-6" align="center">
                            <div class="card card__blue">
                                <!-- <%= image_tag 'science_y.png', class: 'card__logo' %> -->
                                <p class="card__btn-like card__text_y"> Academic development </p>
                                <p class="card__text card__text_y">
                                    We organise lectures with the speakers from a range of academic areas. These provide an educational basis as the students
                                    learn from the older generations.
                                </p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-6" align="center">
                            <div class="card card__yellow">
                                <!-- <%= image_tag 'globe_b.png', class: 'card__logo' %> -->
                                <p class="card__btn-like card__text_b"> General development </p>
                                <p class="card__text card__text_b">
                                    Our society regularly organises joint events with other societies, which is an amazing opportunity for our members to communicate
                                    and network with the individuals from different countries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>


    <footer class="footer">
        <div class="box">
            <div class="footer__content">
                <!-- <%= image_tag 'qmul-logo-blue-small.png', class: 'footer__logo hide-tab' %> -->
                <ul class="footer__list">
                    <li class="footer__list-item footer__list-item-1"> <a href="#"> About us </a> </li>
                    <li class="footer__list-item footer__list-item-2"> <a href="#"> Our goals </a> </li>
                    <li class="footer__list-item"> <a href="#"> Sponsors </a> </li>
                    <li class="footer__list-item"> <a href="#"> Support us </a> </li>
                </ul>
                <div class="footer__links">
                <a target="_blank" href="https://www.facebook.com/QueenMaryUkrainianSociety/" class="footer__links-facebook"><i class="fa fa-facebook-square" aria-hidden="true"></i> </a>
                <a target="_blank" href="https://www.instagram.com/qm_ukr_soc/" class="footer__links-instagram"> <i class="fa fa-instagram" aria-hidden="true"></i> </a>
                <a target="_blank" href="https://www.linkedin.com/company/queenmaryukrainiansociety/" class="footer__links-linkedin"> <i class="fa fa-linkedin" aria-hidden="true"></i> </a>
                </div>
            </div>
        </div>
    </footer>

  <!-- <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        ua-society-vue
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section> -->
</div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
