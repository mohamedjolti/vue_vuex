<template>
  <div id="app">
    <nav>
      <router-link class="link"  to="/hello">Hello</router-link>
      <router-link class="link"   to="/Child">Child</router-link>
      <router-link class="link"  to="/">Home</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav .link{
  margin-right: 20px;
}
</style>
