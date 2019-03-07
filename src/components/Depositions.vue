<template>
  <div id="Depositions" style="padding-top:30px;">
    <carousel-3d>
      <slide v-for="(quote, index) in quotes" :index="index" :key="index">
          <div style="height:10px"></div>
          <v-img contain style="marign:auto; background:rgba(0,0,0,0);" :src="images.quoteSymbol"  width="auto" height="80px"/>
          <div style="padding:10px 10px 10px 10px;text-align:center">{{quote.text}} </div>
          <div style="text-align:center">{{quote.author}} </div>
          <div style="text-align:center">{{quote.company}} </div>
          <div style="text-align:center">{{quote.office}} </div>
        
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
    name:"Depositions",
    components:{
        Carousel3d,
        Slide
    },
    data(){
        return{
            quotes:[
                {
                text:"A plataforma é uma ótima ideia e minha sugestão seria permitir que quem precisa de ajuda possa conversar e abrir-se sem o medo de revelar sua identidade, mas obter a ajuda.",
                author: "Nome dela",
                company:"Google Inc",
                office: "Diretora jurídica"},
                {
                text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud",
                author: "Elifas Kassim Holodniak",
                company:"Gestalt Open Innovation",
                office: "CEO"},
                {
                text:"A plataforma é uma ótima ideia e minha sugestão seria permitir que quem precisa de ajuda possa conversar e abrir-se sem o medo de revelar sua identidade, mas obter a ajuda.",
                author: "Nome dela",
                company:"Google Inc",
                office: "Diretora jurídica"},
                {
                text:"A plataforma é uma ótima ideia e minha sugestão seria permitir que quem precisa de ajuda possa conversar e abrir-se sem o medo de revelar sua identidade, mas obter a ajuda.",
                author: "Nome dela",
                company:"Google Inc",
                office: "Diretora jurídica"},
                {
                text:"A plataforma é uma ótima ideia e minha sugestão seria permitir que quem precisa de ajuda possa conversar e abrir-se sem o medo de revelar sua identidade, mas obter a ajuda.",
                author: "Nome dela",
                company:"Google Inc",
                office: "Diretora jurídica"},
                {
                text:"A plataforma é uma ótima ideia e minha sugestão seria permitir que quem precisa de ajuda possa conversar e abrir-se sem o medo de revelar sua identidade, mas obter a ajuda.",
                author: "Nome dela",
                company:"Google Inc",
                office: "Diretora jurídica"},
                {
                text:"A plataforma é uma ótima ideia e minha sugestão seria permitir que quem precisa de ajuda possa conversar e abrir-se sem o medo de revelar sua identidade, mas obter a ajuda.",
                author: "Nome dela",
                company:"Google Inc",
                office: "Diretora jurídica"},
            ],
            images:{
                quoteSymbol: require("@/assets/img/4.png")
            }
        }
    }


}
</script>

<style>
</style>
