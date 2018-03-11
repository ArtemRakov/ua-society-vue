<template>

<div>
    <main>
        <section>
            <div class="home-banner">
                <navbar> </navbar>

                <div class="home-banner__content">
                     <img src="~/assets/images/qmul-logo-white-small.png" class="home-banner__logo">
                    <h1 class="home-banner__title">  <span class="home-banner__title-main"> Queen Mary </span>  <span class="home-banner__title-sub"> Ukrainian Society  </span> </h1>

                    <a href="#" class="home-banner__btn"> JOIN US </a>
                </div>
            </div>
        </section>

        <section class="about-us" id="about">
            <div class="text-center">
                <h2 class="heading-secondary"> who we are </h2>
            </div>
            <div class="box">
                <div class="about-us__flex">
                    <div class="about-us__item-1">
                        <div class="about-us__description">
                            <div class="about-us__img-h3">
                                <img src="~/assets/images/book.png" class="about-us__image-small">
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
                            <img src="~/assets/images/qmul-logo-blue.png" class="about-us__qmul">
                        </div>
                    </div>

                </div>

                <div class="about-us__flex">
                    <div class="about-us__item-3 hide-phone">
                        <div class="about-us__image">
                            <img src="~/assets/images/logo-qmus.png" class="about-us__society">
                            <!-- <%= image_tag 'logo-qmus.png', class: 'about-us__society' %> -->
                        </div>
                    </div>

                    <div class="about-us__item-4">
                        <div class="about-us__description">
                            <div class="about-us__img-h3">
                                <img src="~/assets/images/people.png" class="about-us__image-small">
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

            <div class="text-center">
                <nuxt-link to="/about" class="btn-text"> Read more &#8594; </nuxt-link>
            </div>
        </section>

        <section class="our-goals" id="ourgoals">
            <div class="text-center">
                <h2 class="heading-secondary"> Our goals </h2>
            </div>
            <div class="box">
                <div class="row">

                    <div class="row-eq">
                        <div class="col-xs-12 col-lg-6" align="center">
                            <div class="card card__blue">
                                <img src="~/assets/images/science_y.png" class="card__logo">
                                <!-- <%= image_tag 'science_y.png', class: 'card__logo' %> -->
                                <p class="card__btn-like card__text_y"> Academic development </p>
                                <p class="card__text card__text_y">
                                    We organise lectures with the speakers from a range of academic areas. These provide an educational basis as the students
                                    learn from the older generations.
                                </p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-lg-6" align="center">
                            <div class="card card__yellow">
                                <img src="~/assets/images/globe_b.png" class="card__logo">
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
        
        <AppFooter> </AppFooter>
    </main>

</div>
</template>

<script>
import Navbar from '../components/Navbar';
import AppFooter from '../components/AppFooter';

export default {
    components: {
        Navbar,
        AppFooter
    }
}
</script>

<style>

</style>
