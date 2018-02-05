
<template>
   <div>
   <v-app dark>
    
    <main>
      <section>
        <v-parallax src='static/blue.jpg' height="350">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <!--<img src="assets/vuetify.png" alt="Vuetify.js">-->
            <h1 class="white purple--text mb-2 display-3">Yaja's Domain</h1>
            <div class="white purple--text headline mb-3 text-xs-center">Welcome</div>
            <!--<v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Get Started
            </v-btn>-->
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Ajay Williams</h2>
              <span class="subheading">
                <em>Spreading positivity through smiles</em> 
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">F</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Faith</div>
                    </v-card-title>
                    <v-card-text>
                                Trust in that which you can't see
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">H</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Hope</div>
                    </v-card-title>
                    <v-card-text>
                      Believe that things will work out because of your faith
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">favorite</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Love</div>
                    </v-card-title>
                    <v-card-text>
                      The greatest of the three; do all things in love and you'll never 
                      be broke a day of your life
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src='static/blue.jpg' height="350">
          <v-layout column align-center justify-center>
            <div class="white headline purple--text mb-3">Go out on a limb; that's where the fruit is</div>
            
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="#/GPA"
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Designer info</div>
                </v-card-title>
                <v-card-text>
                  Ajay Williams is a senior Computer Science Major at Furman University.
                  He is a tight end for the varsity football team at Furman. 
                  This a website he created that has multiple functions located in the nav drawer.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact him</div>
                </v-card-title>
                <v-card-text>
                  Methods of Contact
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>252-363-2465</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Greenville, US</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>ajay.williams@furman.edu</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <v-footer class="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              Made with
              <v-icon class="red--text">favorite</v-icon>
              by <a class="white--text" href="mailto:ajay.williams@furman.edu" target="_blank">Ajay </a>
              aka <a class="white--text" href="mailto:ysmailliw@gmail.com">Yaja</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </main>
  </v-app>
 </div>
 
  
    </template>
    
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
 <script src="https://unpkg.com/vuetify/dist/vuetify.js"></script>
    <script>
        export default {
          name: 'home',
          data () {
            return {
              msg: 'Welcome to the domain that is Yaja'
            }
          }
        }
    </script>


