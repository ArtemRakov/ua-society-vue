<template>
    <div>
        <div class="navbar-ua" id="navbar-bigscreen">
            <div>
                <nuxt-link to='/'> <img src="~/assets/images/logo-qmus.png" alt="logo" class="navbar-ua__logo"> </nuxt-link>
            </div>

            <div class="navbar-ua__links hide-tab">
                <nuxt-link class="navbar-ua__link navbar-inpage" id="aboutlink"  to="/about" > About us </nuxt-link>
                <nuxt-link class="navbar-ua__link" to="#"> Our team </nuxt-link>
                <nuxt-link class="navbar-ua__link" to="#"> Contact us</nuxt-link>
                <nuxt-link class="navbar-ua__link" to="#"> Sponsors </nuxt-link>
                
                <div class="languages" v-if="$route.name === 'index'">
                    <div v-on-clickaway="awayFromLanguages" @click="languagesDropdown = !languagesDropdown" class="languages__dropdown" >
                        <img src="~/assets/images/uk.png" alt="uk flag" class="languages__img" >
                        <span class="caret"></span>
                    </div>

                    <ul class="dropdown-menu-right languages__menu" v-if="languagesDropdown">
                        <li class="dropdown__list">
                            <nuxt-link class="languages__links navbar-inpage" id="aboutlink" to="/about">  <img src="~/assets/images/uk.png" alt="uk flag" class="languages__img" > English </nuxt-link>
                        </li>
                        <li class="dropdown__list">
                            <nuxt-link class="languages__links navbar-inpage" to="#"> <img src="~/assets/images/ukraine.png" alt="ua flag" class="languages__img" > Ukraine </nuxt-link>
                        </li>
                        <li class="dropdown__list">
                            <nuxt-link class="languages__links navbar-inpage" to="#"> <img src="~/assets/images/russia.png" alt="ru flag" class="languages__img" > Russia </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="show-nav-small" style="display: none;">
                <div class="dropdown__ua">
                    <i v-on-clickaway="awayFromDropdown" @click="dropdownOpen = !dropdownOpen" class="fa fa-bars dropdown-toggle-ua"> </i>
                    
                    <ul v-if="dropdownOpen" class="dropdown-menu-right navbar-ua-dropdown-menu">
                        <li class="dropdown__list">
                            <nuxt-link class="dropdown_links navbar-inpage" id="aboutlink" to="/about"> About us </nuxt-link>
                        </li>
                        <li class="dropdown__list">
                            <nuxt-link class="dropdown_links navbar-inpage" to="#"> Our team </nuxt-link>
                        </li>
                        <li class="dropdown__list">
                            <nuxt-link class="dropdown_links navbar-inpage" to="#"> Contact us </nuxt-link>
                        </li>
                        <li class="dropdown__list">
                            <nuxt-link class="dropdown_links navbar-inpage" to="#"> Sponsors </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
    mixins: [clickaway],
    data() {
        return {
            dropdownOpen: false,
            languagesDropdown: false
        }   
    },
    methods: {
        awayFromDropdown() {
            this.dropdownOpen = false
        },
        awayFromLanguages() {
            this.languagesDropdown = false
        }
    }
}
</script>

<style>

</style>
