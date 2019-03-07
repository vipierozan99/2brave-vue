<template>
    <div id="AboutUs" style="background-color:black;padding-top:30px;">
        <v-layout row wrap style="margin: 0 10px 30px 10px;align-items:flex-start;align-content:flex-start;">
            <v-flex sm6 >
                <div class="title font-weight-light" style="text-align:center;padding:30px 0 90px 0;color:silver">
                    <h2 class="display-2" style="color:white">SOBRE NÓS</h2>
                    <br>
                    <span style="line-height:1.5">
                        Nascemos com um propósito: ajudar mulheres vítimas de
                        qualquer tipo de violência o que fazer com os seus direitos...
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis autem vel eum iriure dolor in hendrerit
                        in vulputate velit esse molestie consequat, vel illum
                        dolore eu feugiat nulla facilisis at vero eros et accumsan
                        et iusto odio dignissim qui blandit praesent luptatum
                        zzril delenit augue duis dolore te feugait nulla facilisi.
                        Lorem ipsum dolor sit amet, cons ectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi
                    </span>
                </div>
                <div class="title font-weight-light" style="text-align:center;padding:0 0 30px 0;color:silver">
                    <h2 class="display-2" style="color:white">PLATAFORMA 2BRAVE</h2>
                    <br>
                    <span style="line-height:1.5">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi
                        enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea
                        commodo consequat. Duis autem vel eum iriure dolor
                        in hendrerit in vulputate velit esse molestie
                        consequat, vel illum dolore eu feugiat nulla facilisis at
                        vero eros et accumsan et iusto odio dignissim qui
                    </span>
                </div>
            </v-flex>
            <v-flex sm6 >
                <v-img contain style="marign:auto; background:rgba(0,0,0,0)" :src="images.postIt"  width="auto" height="380px"/>
                <div class="title font-weight-light" style="text-align:center;padding:30px 0 30px 0;color:silver">
                    <h2 class="display-2" style="color:white">COMO AJUDAMOS?</h2>
                    <br>
                    <span style="line-height:1.5">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi
                        enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea
                        commodo consequat. Duis autem vel eum iriure dolor
                        in hendrerit in vulputate velit esse molestie
                        consequat, vel illum dolore eu feugiat nulla facilisis at
                        vero eros et accumsan et iusto odio dignissim qui
                        blandit praesent luptatum zzril delenit augue duis
                        dolore te feugait nulla facilisi.   
                    </span>
                </div>
            </v-flex>
        </v-layout>
    </div>
    
</template>

<script>
export default {
    name:"AboutUs",
    data(){
        return{
            images:{
                postIt: require("@/assets/img/6.png"),
            }
        }
    }


}
</script>

<style>
#AboutUs{
    color:white
}

</style>
