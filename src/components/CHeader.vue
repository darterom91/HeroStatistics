<template>
  <div class="bgHeader bg-dark pb-5">
    <!-- <div class="container navNormal">
      <img src="@/assets/img/heroStatistics2.png" alt="">
      <ul class="menuNav text-light p-0 py-2">
        <li class=" m-0"><a to="/">Home</a></li>
        <li class=" "> | </li>
        <li class=" m-0"><a to="/guia">Guia</a></li>
      </ul>
      <div class="input-group row  justify-content-center">
        <input type="text" class="form-control bg-dark text-light col-10 col-md-4" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <div class="input-group-append">
          <button class="input-group-text bg-warning px-4" id="basic-addon2"><i class="fas fa-search"></i></button>
        </div>
      </div>
    </div> -->
    <div class="container navNormal">
      <div class="row justify-content-center m-2">
        <div>
          <img src="@/assets/img/heroStatistics2.png" alt="">
        </div>
      </div>
      <div class="row justify-content-center m-2">
        <div class="col-12 col-md-8">
          <form class="input-group ">
            <input type="text" class="form-control bg-dark text-light" v-model="heroName" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
            <div class="input-group-append">
              <button type="submit" class="input-group-text bg-warning px-4" @click="newHero" id="basic-addon2"><i class="fas fa-search"></i></button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="navRes">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heroName: ''
    }
  },methods: {
    newHero(){
      this.$store.commit('newHero', this.heroName);
      this.heroName = '';
    }
  },
}
</script>

<style scoped>
  .bgHeader {
    height: 300px;
    background-image: url("../assets/img/fondoHeros.jpg");
    background-position: center;
    background-size: cover;
  }
  .navNormal {
    text-align: center;
  }
  img {
    width: 300px;
  }
  .menuNav {
    font-size: 20px;
    font-weight: bold;
    padding: 0;
    margin: 0;
  }
  .menuNav > li {
    display: inline;
    list-style: none;
  }
</style>