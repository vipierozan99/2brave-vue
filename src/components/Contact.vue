<template>
    <div id="Contact" :style="{'background-image': 'url(' +images.background+ ')', 'background-color':'black'}">
        <h1 class="display-3" style="text-align:center">FALE CONOSCO</h1>
        <div class="headline" style="margin:auto; text-align:center; color:gray">
            (47) 3056-6806 | (47) 99719-5669
        </div>
        <div class="headline" style="margin:auto; text-align:center; color:gray">
            Rua 902, 975 | Balneário Camboriú/SC | CEP 88330-596
        </div>
        <div style="height:200px"></div>
        <div class="title" style="margin:auto; text-align:center; color:gray">
            Estamos aguardando o seu contato!
        </div>

        <v-form v-model="valid">
            <v-container>
                <v-text-field
                    solo
                    v-model="name"
                    label="Nome"
                    required
                ></v-text-field>
            
                <v-text-field
                    solo
                    v-model="email"
                    label="E-mail"
                    required
                ></v-text-field>

            
                <v-text-field
                    solo
                    v-model="subject"
                    label="Assunto"
                    required
                ></v-text-field>

                <v-textarea
                    solo
                    v-model="text"
                    label="Mensagem"
                    required
                ></v-textarea>
                <v-layout justify-end>
                    <v-flex sm2 style="text-align:right">
                        <v-btn>ENVIAR</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-form>
        
    </div>
</template>

<script>
export default {
    name:"Contact",
    data(){
        return{
            name: null,
            email:null,
            subject:null,
            text: null,
            images:{
                background: require("@/assets/img/2.png")
            }
        }
    }
}
</script>

<style>
#Contact{
    color:white
}

</style>
