<template>
  <v-app>
      <div class="hidden-sm-and-down" style="height:56px"></div>
      <MainNav></MainNav>
      <FirstHero/>
      <HowItWorks/>
      <AboutUs/>
      <Depositions/>
      <Contact/>
      <MainFooter/>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import MainNav from "@/components/MainNav"
import FirstHero from "@/components/FirstHero"
import HowItWorks from "@/components/HowItWorks"
import AboutUs from "@/components/AboutUs"
import Depositions from "@/components/Depositions"
import Contact from "@/components/Contact"
import MainFooter from "@/components/MainFooter"



export default {
  name: 'App',
  components: {
    MainNav,
    FirstHero,
    HowItWorks,
    AboutUs,
    Depositions,
    Contact,
    MainFooter
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
.app{
  font: Hero
}
  
</style>
