<template>
    <div id="first-hero" style="background-color:black;padding-top:30px">
        
            <v-layout row wrap >
                <v-flex sm7>
                    <v-layout style="width:80%;margin:auto;">
                        <v-flex sm4>
                            <v-img style="marign:auto" :src="images.logo"  width="100%" height="100%"/>
                        </v-flex>
                        <v-flex sm8>
                            <h1 class="display-4" style="margin:auto">2BRAVE</h1>
                        </v-flex>
                    </v-layout>
                    <div style="width:80%;margin:auto">
                        A informação é o primeiro passo para
                        tomar uma decisão. Somos uma
                        plataforma humanizada que te ajuda a
                        encontrar informação jurídica com uma
                        mulher advogada de forma 100% anônima.
                    </div>
                </v-flex>
                <v-flex sm5>
                    <v-img style="margin:auto" width="70%" height="70%" :src="images.woman"/>
                </v-flex>
            </v-layout>
        
             
    </div>
    
</template>

<script>
export default {
    name:"FirstHero",
    data(){
        return{
            images:{
                woman: require("@/assets/img/1.png"),
                logo: require("@/assets/img/5.png")

            }
        }
    }


}
</script>

<style>
#first-hero{
    color:white
}

</style>
