<template>
  <v-app>
      <div class="hidden-sm-and-down" style="height:56px"></div>
      <MainNav></MainNav>
      <FirstHero/>
      <HowItWorks/>
      <AboutUs/>
      <Depositions/>
      <Contact/>
   
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



export default {
  name: 'App',
  components: {
    MainNav,
    FirstHero,
    HowItWorks,
    AboutUs,
    Depositions,
    Contact
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
