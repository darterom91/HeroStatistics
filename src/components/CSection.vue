<template>
  <div class="bg-light text-center text-dark">
    <!-- <div><button @click="loadData">sads</button></div> -->
    <h1>C Section</h1>
    {{getNewHero()}}
    {{Name}}
    
  </div>
</template>

<script>
import axios from 'axios';
window.axios = require('axios');
export default {
  data() {
    return {
      Name: '',
      heros:[]
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

</style>