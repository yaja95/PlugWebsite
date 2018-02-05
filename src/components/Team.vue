<template>
  <div>
    <section>
      <v-parallax src='static/purp.jpg' height="350">
        <v-layout column align-center justify-center class="white--text">
          <h1 class=" white--text darken mb-2 display-3" @click="">Meet Our Team</h1>
          <h4 class=" white--text headline mb-3 text-xs-center"><em>"Our goal is to take Social Event Sharing to the next level
               by creating an inclusive application that not only manages the social aspect of events, but the financial aspect
               of events as well."</em>
          </h4>

                        
        </v-layout>
      </v-parallax>
    </section>
<section>
    <v-container fluid grid-list-md class="grey lighten-4">
        <v-layout row wrap>
          <v-flex
            v-bind="{ [`xs${card.flex}`]: true }"
            v-for="card in cards"
            :key="card.title"
          >
            <v-card>
              <v-card-media
                :src="card.src"
                height="300px"
              >
                <v-container fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                         <v-card-title class="display-1 white--text pl-5 pt-5" v-text="card.title">
              <!--<div class="display-1 pl-5 pt-5">Ali Conners</div>-->
            </v-card-title>
                      <!--<span class="headline white--text" v-text="card.title"></span>-->
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-actions class="purple accent-4 ">
                <!--<v-spacer></v-spacer>-->
                <v-btn icon class="text-xl-center">
                  <v-icon>phone</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mail</v-icon>
                </v-btn>
               <!-- <v-btn icon>
                  <v-icon>share</v-icon>
                </v-btn>-->
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</section>

    <section>
      <v-parallax src='static/purp.jpg' height="300">
        <v-layout column align-center justify-center class="white--text">
          <!--<img src="assets/vuetify.png" alt="Vuetify.js">-->

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
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: [],
      cards: [
        { title: 'Max Mehlbaum', src: 'static/blue.jpg', flex: 6 },
        { title: 'Hans Stoetzer', src: 'static/section.jpg', flex: 6 },
        { title: 'Ajay Williams', src: 'static/section.jpg', flex: 6 },
        { title: 'Nicholas Yurco', src: 'static/purp.jpg', flex: 6 }
      ],
      items: [
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'></span>  Description of Opportunity One will go here from DB?", text: 'Summer' },
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity Two will go here from DB?", text: 'Fall' },
        { active: true, title: 'Opportunity One', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity One will go here from DB?", text: 'Spring' },
        { active: true, title: 'Opporunity Two', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity Two will go here from DB?", text: 'Winter' },
        { active: true, title: 'Opportunity One', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity One will go here from DB?" },
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity Two will go here from DB?" },
        { active: true, title: 'Opportunity One', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity One will go here from DB?" },
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity Two will go here from DB?" },
        { active: true, title: 'Opportunity One', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity One will go here from DB?" },
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity Two will go here from DB?" },
        { active: true, title: 'Opportunity One', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity One will go here from DB?" },
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity Two will go here from DB?" },
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity Two will go here from DB?" },
        { active: true, title: 'Opportunity One', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity One will go here from DB?" },
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity Two will go here from DB?" }
      ],
      a1: [],
      items2: [
        { active: true, avatar: 'static/Me.JPG', title: 'Ajay Williams', subtitle: "<span class='grey--text text--darken-3'></span>  Description of Scholar will go here from DB?", text: 'Summer' },
        { active: true, avatar: 'static/Me.JPG', title: 'Ajay Williams', subtitle: "<span class='grey--text text--darken-3'></span>  Description of Scholar will go here from DB?", text: 'Summer' },
        { active: true, avatar: 'static/Me.JPG', title: 'Ajay Williams', subtitle: "<span class='grey--text text--darken-3'></span>  Description of Scholar  will go here from DB?", text: 'Summer' },
        { active: true, avatar: 'static/Me.JPG', title: 'Ajay Williams', subtitle: "<span class='grey--text text--darken-3'></span>  Description of Scholar  will go here from DB?", text: 'Summer' },
        { active: true, avatar: 'static/Me.JPG', title: 'Ajay Williams', subtitle: "<span class='grey--text text--darken-3'></span>  Description of Scholar  will go here from DB?", text: 'Summer' },
        { active: true, avatar: 'static/Me.JPG', title: 'Ajay Williams', subtitle: "<span class='grey--text text--darken-3'></span>  Description of Scholar  will go here from DB?", text: 'Summer' },
        { active: true, avatar: 'static/Me.JPG', title: 'Ajay Williams', subtitle: "<span class='grey--text text--darken-3'></span>  Description of Scholar  will go here from DB?", text: 'Summer' },
        { active: true, avatar: 'static/Me.JPG', title: 'Ajay Williams', subtitle: "<span class='grey--text text--darken-3'></span>  Description of Scholar  will go here from DB?", text: 'Summer' },
        { active: true, avatar: 'static/Me.JPG', title: 'Ajay Williams', subtitle: "<span class='grey--text text--darken-3'></span>  Description of Scholar  will go here from DB?", text: 'Summer' },
        { active: true, avatar: 'static/Me.JPG', title: 'Ajay Williams', subtitle: "<span class='grey--text text--darken-3'></span>  Description of Scholar  will go here from DB?", text: 'Summer' }
      ],
      categories: [
        { text: 'Summer' },
        { text: 'Fall' },
        { text: 'Spring' },
        { text: 'Internship' },
        { text: 'On-Campus' },
        { text: 'Off-Campus(local)' },
        { text: 'Off-Campus(non-local)' },
        { text: 'Paid' },
        { text: 'Unpaid' },
        { text: 'Course Credit' },
        { text: 'Study Away' }
      ],
      dialog: false,
      dialog2: false
    }
  },
  methods: {

    // ///////Method to filter the various events by the selector values\\\\\\\\\\\\\\\\\\\\\\\
    add () {
      var green
      green = this.dialog
      return green
    },
    toggle (index) {
      const i = this.selected.indexOf(index)

      if (i > -1) {
        this.selected.splice(i, 1)
      } else {
        this.selected.push(index)
      }
    }
  }
}
</script>

