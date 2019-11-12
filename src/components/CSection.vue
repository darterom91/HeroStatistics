<template>
  <div class="bgSection">
    <div class="container p-2">
    <!-- <div><button @click="loadData">sads</button></div> -->
      <div v-for="(hero, index) in heros" :key="index">
        <div class="bgRow row justify-content-center p-2" v-if="Name == hero.nameHero">
          <div class="row col-12 col-sm-8 col-md-6 bg-primary justify-content-center text-center text-light p-2">
            <div class="col-12 bg-dark text-center border border-light"><h1 class="text-uppercase text-warning p-2">{{hero.nameHero}}</h1></div>
            <div class="embHeros bg-dark border border-light col-12 p-4"><img class="col-10 bg-light border border-light p-2 " :src=hero.image.emblem></div>
            <div class="row col-12 bg-dark border border-light p-2 mb-2">
              <div class="col-4 p-2">Intelligence</div>
              <div class="col-4 p-2">Strength</div>
              <div class="col-4 p-2">Speed</div>
              <div class="col-4 p-2">{{hero.powerstats.intelligence}}</div>
              <div class="col-4 p-2">{{hero.powerstats.strength}}</div>
              <div class="col-4 p-2">{{hero.powerstats.speed}}</div>
              <div class="col-4 p-2">Durability</div>
              <div class="col-4 p-2">Power</div>
              <div class="col-4 p-2">Combat</div>
              <div class="col-4 p-2">{{hero.powerstats.durability}}</div>
              <div class="col-4 p-2">{{hero.powerstats.power}}</div>
              <div class="col-4 p-2">{{hero.powerstats.combat}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {{getNewHero()}}
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      Name: '',
      heros:[]
    }
  },
  async created() {
    try {
      const res = await axios.get('http://localhost:3000/heros');
      this.heros = res.data;
      console.log(this.heros);
    } catch (e) {
      console.error(e);
    }
  },
  computed: {
    newHero () {
      console.log('computed');
        return this.$store.state.heroName;
      }
  },methods: {
    getNewHero(){
      this.Name = this.newHero;
      console.log('getNewHero: '+this.Name);
      this.loadData(this.Name);
    },
    loadData(param){
      
    },
  }
}
</script>

<style scoped>
  .bgSection {
    background-image: url("../assets/img/67276.jpg");
    background-position: bottom;
    background-attachment: fixed;
    background-size: cover;
  }
</style>