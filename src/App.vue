<template>
  <v-app>
  
      <!--<v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          :to="item.url"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>-->
    <!--</v-navigation-drawer>-->
  <v-tabs dark icons grow>
      <v-tabs-bar class="purple accent-4">
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tabs-item
          v-for="(item, i) in items"
          :key="i"
          
          :to="item.url"
        >
        <v-icon v-html="item.icon"></v-icon>
          {{item.title}}
          
          
        </v-tabs-item>
        <!--
        <v-menu :nudge-width="100" left bottom>
          <v-tabs-item slot="activator">
            Menu
            <v-icon>arrow_drop_down</v-icon>
          </v-tabs-item>
          <v-list class="grey lighten-3">
            <v-list-tile
              tag="a"
              v-for="n in 4"
              :key="n"
              @click=""
            >
              Item {{ n }}
            </v-list-tile>
            
          </v-list>
        </v-menu>-->
      </v-tabs-bar>
  </v-tabs>



    <main>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
      <router-view/>
        </v-slide-y-transition>
      </v-container>
    </v-content>
    </main>
   <v-footer class="purple accent-4" app>
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
            
              Made with
              <v-icon class="red--text">favorite</v-icon>
              by <a class="white--text" href="https://vuetifyjs.com" target="_blank">PlugCoin</a>
              and <a class="white--text" href="https://github.com/vwxyzjn">Ajay Williams</a>
              <span>&copy; 2018</span>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {icon: 'home', title: 'Home', url: '/'},
         {icon: 'info', title: 'About', url: '/home'},
          {icon: 'whatshot', title: 'FAQ'},
          {icon: 'language', title: 'Partners', url: '/partners'},
          {icon: 'people', title: 'Team', url: '/team'}
          // { icon: 'home', title: 'TrueHome'}
      ]
    }
  }
}
</script>
