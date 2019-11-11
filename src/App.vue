<template>
  <div id="app">
    <CHeader/>
    <CSection/>
    <Guia/>
    <CFooter/>
  </div>
</template>

<script>
import CHeader from '@/components/CHeader.vue';
import CSection from '@/components/CSection.vue';
import Guia from '@/components/Guia.vue'
import CFooter from '@/components/CFooter.vue';
export default {
  components: {
    CHeader,
    CSection,
    Guia,
    CFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
