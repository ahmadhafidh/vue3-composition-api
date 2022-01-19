<template>
  <div class="view">
    <router-view />
  </div>
  <div id="menu">
    <router-link to="/">Home</router-link> | <router-link to="/belah-ketupat">Belah Ketupat</router-link> |
    <router-link to="/trapesium">Trapesium</router-link> |
    <router-link to="/jajar-genjang">Jajar Genjang</router-link>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.view {
  height: 320px;
}

#menu {
  padding: 30px;
  background: #fafafa;
}

#menu a {
  font-weight: bold;
  color: #2c3e50;
}

#menu a.router-link-active {
  color: #42b983;
  margin-top: 60px;
}
.wrapper {
  width: 100%;
}
.form-control {
  margin: 0 auto;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control input {
  margin-top: 7px;
}

.result {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 350px;
}
</style>
