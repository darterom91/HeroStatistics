<template>
  <div class="fondo bg-light">
    <div class="container py-5">
      <h2 class="text-center mb-0">Guia SuperHeros</h2>
      <div class="border border-light m-1 bg-dark text-light p-2" v-for="(hero, index) in heros" :key="index">
        <div class="row d-flex bg m-1 text-center">
          <div class="txtInfo col-6 col-sm-6 col-md-4 p-2">{{hero.idHero}}</div>
          <div class="txtInfo col-6 col-sm-6 col-md-4 p-2">{{hero.nameHero}}</div>
          <div class="txtInfo col-12 col-sm-12 col-md-4 p-2">{{hero.biography.publisher}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      heros: []
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
}
</script>

<style scoped>
  .fondo {
    background-image: url("../assets/img/67276.jpg");
    background-position: bottom;
    background-attachment: fixed;
    background-size: cover;
  }

  .container.py-5 > h2{
    color: yellow;
    font-weight: bold;
  }
  div.txtInfo{
    color: black;
    font-weight: bold;
    text-align: center;
    border: 1px solid black;
    background-color: white;
  }
</style>