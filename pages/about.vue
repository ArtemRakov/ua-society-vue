<template>
    <div>
        <navbar class="navbar-white"></navbar>
        <section>
            <div class="about-header">
                <div class="about-header__animation"></div>
                <div class="about-header__text-box">
                    <p class="about-header__text">  We help students from all over the world to become familiar with the  <span style="color: #FFE32C;"> Ukrainian </span> culture, customs, history and political development.  </p>
                </div>

                <div class="about-header__img">
                    &nbsp;
                </div>
            </div>
        </section>

        <section class="about-mission">
             <div class="text-center">
                <h2 class="heading-secondary"> our mission </h2>
            </div>
            <div class="container">
                <div class="about-mission__box">
                    <p class="about-mission__text">
                        Queen Mary University of London is a member of Russell Group Association and belongs to TOP-10 universities in London. The notable alumni of our university are recognised within the business and economics fields all over the world. Aside from the organization of social events, <span style="text-decoration: underline;"> contributing to the popularisation of the  Ukrainian culture </span>. We also aim to engage our students academically. 
                    </p>
                    <p class="about-mission__text">
                        The activities organised by our society specifically contribute to the raise of  awareness of the Ukrainian heritage internationally. Furthermore, we allow students from all over the world to become familiar with the Ukrainian culture, customs, history and political development. 
                    </p>
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


        <section class="contact-us">
            <div class="box">
                <div class="contact-us__card">
                    
                </div>
            </div>
        </section>
    </div>    
</template>

<script>
import Navbar from '../components/Navbar'

export default {
    components: {
        Navbar
    }
}
</script>

<style>



</style>
