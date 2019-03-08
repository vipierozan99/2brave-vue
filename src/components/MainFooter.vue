<template>
    <div id="MainFooter">
        <v-layout row wrap>
            <v-flex sm3 class="hidden-sm-and-down">   
                <v-layout style="height: 70%;margin:auto;margin-top:30px">
                    <v-flex sm5>
                        <v-layout align-center style="height:100%">
                            <v-img contain style="marign:auto; background:rgba(0,0,0,0)" :src="images.logo"  width="auto" height="70%"/>
                        </v-layout>
                    </v-flex>
                    <v-flex sm7 align-center style="align-items:center">
                        <v-layout align-center style="height:100%">
                            <h1 class="display-2"><u >2</u> <u class="font-weight-thin">BRAVE</u> </h1>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex sm6 id="centerFooter">
                <v-layout justify-space-around="" style="height: 70%;margin:auto;margin-top:30px;color:silver">
                    <v-flex sm3>
                        <div style="text-align:center">CONTATO</div>
                        <br>
                        <div style="text-align:center">+55 47 3056-6806</div>
                        <div style="text-align:center">+55 47 99719-5669</div>
                        <br>
                        <div style="text-align:center">contato@2brave.org</div>
                        <br>
                        <div style="text-align:center">Rua 902, número 975</div>
                        <div style="text-align:center">Balneário Camboriú/SC</div>


                    </v-flex>
                    <v-flex sm3 class="hidden-sm-and-down" style="text-align:center">
                        <span>2BRAVE</span>
                        <br>
                        <br>
                        <v-btn flat style="padding:15px;margin:0 0 0 0; height:15px;color:silver" v-scroll-to="{el:'#HowItWorks',offset:-30}">Como funciona?</v-btn><br>
                        <v-btn flat style="padding:15px;margin:0 0 0 0; height:15px;color:silver" v-scroll-to="{el:'#AboutUs',offset:-30}">Sobre nós</v-btn><br>
                        <v-btn flat style="padding:15px;margin:0 0 0 0; height:15px;color:silver" v-scroll-to="{el:'#Depositions',offset:-30}">Depoimentos</v-btn><br>
                        <v-btn flat style="padding:15px;margin:0 0 0 0; height:15px;color:silver" v-scroll-to="{el:'#HowItWorks',offset:-30}">Apoio</v-btn><br>
                        <v-btn flat style="padding:15px;margin:0 0 0 0; height:15px;color:silver" v-scroll-to="{el:'#Contact',offset:-30}">Contato</v-btn><br>                                                      

                    </v-flex>
                    <v-flex sm3 style="text-align:center">
                        <span>NOS ACOMPANHE</span>
                        <div style="height:24px"></div>
                        <div style="width:24px;margin:auto;margin-bottom:16px"><v-img :src="images.facebook" width="auto" height="24px" contain></v-img></div>
                        <div style="width:24px;margin:auto;margin-bottom:16px"><v-img :src="images.instagram" width="auto" height="24px" contain></v-img></div>
                        <div style="width:24px;margin:auto;margin-bottom:16px"><v-img :src="images.twitter" width="auto" height="24px" contain></v-img></div>
                        <div style="width:24px;margin:auto;margin-bottom:16px"><v-img :src="images.linkedin" width="auto" height="24px" contain></v-img></div>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex sm3 class="hidden-sm-and-down">
                <v-layout align-center style="height:100%">
                    <h1 style="margin:auto">POWERED BY GESTALT</h1>
                </v-layout>
            </v-flex>

        </v-layout>
    </div>
</template>

<script>
export default {
    name:"MainFooter",
    data(){
        return{
            images:{
                logo: require("@/assets/img/5.png"),
                facebook: require("@/assets/img/facebook.png"),
                instagram: require("@/assets/img/instagram.png"),
                twitter: require("@/assets/img/twitter.png"),
                linkedin: require("@/assets/img/linkedin-box.png"),

            }
        }
    }


}
</script>

<style>
#MainFooter{
    background-color: rgb(37, 37, 37);
    color: white

}
#centerFooter > v-layout{
    border-left: thick solid white;
    border-right: thick solid white;
}

</style>
