<template>
  <div class="home">
    <img alt="Vue logo" class="border border-dark" src="../assets/img/heroStatistics2.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="col-lg-8 col-md-10">
                    <a href="https://blog.iconfinder.com/excellent-halloween-sets-159c7266eab5">
                        <img src="https://cdn.iconfinder.com/static/img/logo/white.svg?d0036af2c3" alt="Iconfinder logo in white" height="70">
                    </a>

                    <div class="my-4">
                        
    <form action="/search/" class="search-form">
        <div class="input-group">
            <input class="form-control form-control-lg border-0 flexdatalist flexdatalist-set" type="search" name="q" placeholder="Search for icons e.g. computer, facebook, folder..." value="" autofocus="" data-url="/ajax/autocomplete/?json=true" data-search-in="value" data-min-length="2" data-max-shown-results="10" data-keyword-param-name="input" tabindex="-1" style="position: absolute; top: -14000px; left: -14000px;"><input type="text" class="form-control form-control-lg border-0 flexdatalist-alias flex1" name="flexdatalist-q" id="flex1" placeholder="Search for icons e.g. computer, facebook, folder..." autocomplete="off">
            <div class="input-group-append">
                <button class="btn btn-primary btn-lg px-4 border-0" type="submit">
                    
    <svg width="24" height="24" class="ui-icon align-text-bottom text-white">
        <use xlink:href="/static/icons.svg?c6d62d416f#magnify"></use>
    </svg>

                </button>
            </div>
        </div>

        
            <input type="hidden" name="from" value="homepage">
        </form>
<div class="filter-list pt-2"></div></div>
                </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
img {
  width: 80px;
}

</style>
