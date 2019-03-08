<template>
    <div id="HowItWorks" style="padding-top:30px;">
        <h1 class="display-3" style="text-align:center">FUNCIONA ASSIM</h1>
        <v-layout row wrap style="width:70%; margin:auto;align-content: flex-start; padding-bottom:20px">
            <v-flex sm4 style=" height:500px; padding-top:30px">
                <v-img contain style="marign:auto; background:rgba(0,0,0,0)" :src="images.logo"  width="auto" height="40%"/>
                <div style="margin:auto;padding:50px;text-align:center;">
                    <h3>ME AJUDE</h3>
                    <b>Mulheres</b> que sofreram
                    qualquer tipo de
                    violência e querem
                    saber quais são os
                    seus direitos entram
                    anônimamente na
                    plataforma.
                </div>
            </v-flex>
            <v-flex sm4 style=" height:500px; padding-top:30px">
                <v-img contain style="marign:auto; background:rgba(0,0,0,0)" :src="images.logo"  width="auto" height="40%"/>
                <div style="margin:auto;padding:50px;text-align:center">
                    <h3>ESTOU AQUI</h3>
                    <b>Advogadas voluntárias</b> se cadastram com seu
                    registro OAB e passam
                    por um treinamento
                    para atender esses
                    mulheres, também de
                    forma anônima.
                </div>
            </v-flex>
            <v-flex sm4 style=" height:500px; padding-top:30px">
                <v-img contain style="marign:auto; background:rgba(0,0,0,0)" :src="images.logo"  width="auto" height="40%"/>
                <div style="margin:auto;padding:50px;text-align:center">
                    <h3>CONSULTA</h3>
                    <b> Lorem ipsum dolor </b>
                    sit amet,
                    consectetuer
                    adipiscing elit, sed
                    diam nonummy
                    nibh euismod
                    tincidunt ut.
                </div>
            </v-flex>
        </v-layout>

    </div>
</template>

<script>
export default {
    name:"HowItWorks",
    data(){
        return{
            images:{
                logo: require("@/assets/img/5.png")

            }
        }
    }


}
</script>

<style>

</style>
