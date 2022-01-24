<template>
<!--  <div class="hello">
    <h1>{{msg}}</h1>
  </div>-->
  <div>
    <router-link to="/">首页</router-link>|
    <router-link to="/hi">Hi页面</router-link>
  </div>
</template>

<script>
export default {
  name: "Hi",
  data() {
    return{
      msg: "Hi, i am linst"
    }
  },
}
</script>

<style scoped>

</style>
