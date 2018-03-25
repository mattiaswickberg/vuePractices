<template>
  <div id="app">
  <div>
    <h1>
      Hubbabubba
      </h1>
    </div>
  <div id="globalNav">
    <h1>This should be a global navigation bar</h1>
  </div>
    <div id="localNav">
    <h1>This should be a local navigation bar</h1>
  </div>
  <div id="routerView">
    <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 80%;
}

#routerView {
  width:80%;
  background-color: bisque;
}

#globalNav {

}

#localNav {
  float: left;
  height: 80%;
  width: 10%;
  background-color: aquamarine;
}
</style>
