<template>
    <div id="first-hero" style="background-color:black;padding-top:30px;max-height:600px">
        <v-layout row wrap style="height:100%">
            <v-flex sm7 style="height:100%">
                <v-layout style="height: 40%;max-width:600px;margin:auto;">
                    <v-flex sm5>
                        <v-img contain style="marign:auto; background:rgba(0,0,0,0)" :src="images.logo"  width="auto" height="90%"/>
                    </v-flex>
                    <v-flex sm7 style="padding-top: 10%">
                        <h1 class="display-4" style="margin:auto; text-align:center;"><u >2</u> <u class="font-weight-thin">BRAVE</u> </h1>
                        <div class="body-1" style="margin:auto; text-align:center; color:gray">
                            CONSULTA JURÍDICA DE MULHERES POR MULHERES
                        </div>
                    </v-flex>
                </v-layout>
                <div class="hidden-sm-and-up" style="height:50px"></div>
                <div class="headline" style="max-width:600px;margin:auto;color:silver;padding:0 0 20px 2.5%">
                    A informação é o primeiro passo para
                    tomar uma decisão. Somos uma
                    plataforma humanizada que te ajuda a
                    encontrar informação jurídica com uma
                    mulher advogada de forma 100% anônima.
                    <br class="hidden-sm-and-down">
                    <v-btn small>Saiba Mais</v-btn>
                </div>
            </v-flex>
            <v-flex sm5 style="height:100%">
                <v-img contain style="margin:auto" width="auto" height="100%" :src="images.woman"/>
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
