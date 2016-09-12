<template>


  <i v-on:click="addfriend">+</i>
  <ul v-if="display">
    <li v-for="item in items">
      {{item.message}}
    </li>
  </ul>

  <div  class="bg" v-if="display" v-on:click="addfriend"></div>



</template>

  <script>


  export default{
    data(){
      return{
        display:false,
        items:
          [
            {message:'多人聊天'},
            {message:'加为好友'},
            {message:'扫一扫'},
            {message:'付款'}
          ]
      }
    },
    methods:{
      addfriend:function () {
        this.display=!this.display;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  i{ width: 40px; height: 40px; position:absolute;right: 20px;top:10px;font-size: 30px;color: #ffffff;font-weight: bolder; display: block;}

  header ul{ position: absolute; right: 10px; width: 70px; background-color: white; list-style: circle;top: 37px;z-index: 10;padding-left: 30px;}
  header ul li{height: 25px;}


  .bg{  width: 100%;  height:100%;  background-color: chocolate;  filter:alpha(opacity=10); -moz-opacity:0.1;  opacity:0.1;  position: absolute;  top: 0;left: 0;z-index: 8; }
</style>
