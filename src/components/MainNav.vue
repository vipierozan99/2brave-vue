<template>
  <div id="MainNav">
    <v-toolbar color="Black" class="hidden-sm-and-down" dark fixed app>
      <v-toolbar-title>
        <v-layout justify-start row>
          <v-flex xs4>
            <v-btn height="60px" dark >
            <v-card class="backLogozinho">
              <v-img height="40px" width="30px" src="https://firebasestorage.googleapis.com/v0/b/hackathon-law.appspot.com/o/Logo2brave.jpg?alt=media&token=d17ff5c8-7b84-4e43-aa1b-1bab97fbebcb"></v-img>
            </v-card>
              <div style="margin-left:15px">2BRAVE</div>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-scroll-to="{el:'#HowItWorks',offset:-50}">Como funciona?</v-btn>
        <v-btn flat v-scroll-to="{el:'#AboutUs',offset:-50}">Sobre nós</v-btn>
        <v-btn flat v-scroll-to="{el:'#Depositions',offset:-50}">Depoimentos</v-btn>
        <v-btn flat v-scroll-to="{el:'#HowItWorks',offset:-50}">Apoio</v-btn>
        <v-btn flat v-scroll-to="{el:'#Contact',offset:-50}">Contato</v-btn>

      </v-toolbar-items>
    </v-toolbar>

    <div class="hidden-md-and-up">
      <v-expansion-panel dark>
        <v-expansion-panel-content>
          <div slot="header" style="width:100%">
            <v-layout row wrap style="width:100%">
              <v-flex>
              <v-btn height="60px" dark>
              <v-card class="backLogozinho">
                <v-img height="40px" width="30px" src="https://firebasestorage.googleapis.com/v0/b/hackathon-law.appspot.com/o/Logo2brave.jpg?alt=media&token=d17ff5c8-7b84-4e43-aa1b-1bab97fbebcb"></v-img>
              </v-card>
                <div style="margin-left:15px">2BRAVE</div>
              </v-btn>
             
              </v-flex >
            </v-layout>
            
          </div>
          <v-card>
            <v-btn flat v-scroll-to="{el:'#HowItWorks',offset:-10}">Como funciona?</v-btn>
            <v-btn flat v-scroll-to="{el:'#AboutUs',offset:-10}">Sobre nós</v-btn>
            <v-btn flat v-scroll-to="{el:'#Depositions',offset:-10}">Depoimentos</v-btn>
            <v-btn flat v-scroll-to="{el:'#HowItWorks',offset:-10}">Apoio</v-btn>
            <v-btn flat v-scroll-to="{el:'#Contact',offset:-10}">Contato</v-btn>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
  </div>
</template>

<script>

export default {
  name: "MainNav",
  data() {
    return {
      drawer: null,
      
    };
  },
  props: {
    source: String
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  },
  
};
</script>

<style>
.logo {
  width: 50%;
  height: 100%;
}
.backLogozinho {
  border-radius: 20px 0px 20px 0px;
  -moz-border-radius: 20px 0px 20px 0px;
  -webkit-border-radius: 20px 0px 20px 0px;
  border: 0px solid #000000;
  background: rgba(255, 255, 255, 1);
  background: -moz-linear-gradient(
    left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 51%,
    rgba(5, 5, 5, 1) 51%,
    rgba(5, 5, 5, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(255, 255, 255, 1)),
    color-stop(51%, rgba(255, 255, 255, 1)),
    color-stop(51%, rgba(5, 5, 5, 1)),
    color-stop(100%, rgba(5, 5, 5, 1))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 51%,
    rgba(5, 5, 5, 1) 51%,
    rgba(5, 5, 5, 1) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 51%,
    rgba(5, 5, 5, 1) 51%,
    rgba(5, 5, 5, 1) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 51%,
    rgba(5, 5, 5, 1) 51%,
    rgba(5, 5, 5, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 51%,
    rgba(5, 5, 5, 1) 51%,
    rgba(5, 5, 5, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#050505', GradientType=1 );
  width: 30px;
  height: 40px;
}


.theme--dark.v-expansion-panel .v-expansion-panel__container {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  background-color: #212121;
  color: #fff;
}
.theme--dark.v-sheet {
  background-color: #424242;
  border-color: #424242;
  color: #fff;
}

</style>
