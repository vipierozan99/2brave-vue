<template>
  <v-app>
      <div class="hidden-sm-and-down" style="height:56px"></div>
      <MainNav></MainNav>
      <FirstHero/>
      <HowItWorks/>
      
   
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import MainNav from "@/components/MainNav"
import FirstHero from "@/components/FirstHero"
import HowItWorks from "@/components/HowItWorks"

export default {
  name: 'App',
  components: {
    MainNav,
    FirstHero,
    HowItWorks
  },
  data () {
    return {
      //
    }
  }
}
</script>
