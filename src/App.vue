<template>
  <div id="nav">
    <router-link :to="{name: 'TasksList'}">Tasks</router-link> |
    <router-link :to="{name: 'About'}">About</router-link>
  </div>
  <router-view/>
</template>

<style>
div{
    border: 1px solid blue;
  width: 95%;
  margin: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  border: 1px solid brown;
  width: 80%;
  margin: auto;
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
