<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f8f8f7;
}

.el-button {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-weight: 700;
}
.el-table {
  background-color: transparent;
  tr {
    color: #34495e;
    background-color: transparent;
  }
}

</style>
