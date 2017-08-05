<template>
  <nav>
    <ul>
      <li><h3>问卷管理</h3></li>
      <li><router-link to="/list"><h4>我的问卷</h4></router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  background: #fff;
  border-bottom: 2px solid #ccc;
  height: 40px;
}

h3 {
  color: #fc434b;
  font-weight: normal;
  margin: 0;
  padding: 7px 0;
}

h4 {
  font-weight: normal;
  margin-top: 10px;
}

a {
  color: #000;
  cursor: pointer;
  text-decoration: none;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-left: 60px;
  height: 40px;
}

li {
  float: left;
  margin: 0 30px;
  height: 40px;
}
</style>
