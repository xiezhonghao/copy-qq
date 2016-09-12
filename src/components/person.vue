<template>
  <div class="person">
    <span>头像</span>
    <ul>
    <li v-for="item in items">{{msg}}</li>
    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        msg:'个人资料',
        items:5
      }
    }
  }
</script>
<style>
  .person{  width:250px;  height: 100%;  position: absolute;background-color: ghostwhite;  left: -250px; top: 0; z-index: 10; }
  .person span{display: block; width: 100px; height: 100px; background-color: darkgoldenrod;color: white; border-radius: 50%;line-height: 100px; font-size: 40px; text-align: center;left: 20px; margin: 20px;}
  .person li{ height: 50px; border-bottom: 1px solid #444444; width: 200px; line-height: 40px; font-size: 25px;}
</style>
