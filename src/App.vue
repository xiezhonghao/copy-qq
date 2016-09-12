<template>
  <div id="app" :style="{left:personleft+'px'}">

    <header>
      <em v-on:click="profile"><</em>
      <span>{{msg}}</span>
      <he></he>
    </header>

    <person></person>

    <div  class="bg" v-if="personplay" v-on:click="profile"></div>


    <div class="content">
      <contentnews v-if="display1"></contentnews>
      <contentfriends v-if="display2"></contentfriends>
      <contentcir v-if="display3"></contentcir>
    </div>

    <footer>
      <ul>
        <li v-on:click="newsClick">消息</li>
        <li v-on:click="friendClick">联系人</li>
        <li v-on:click="dynamicClick">朋友圈</li>
      </ul>
    </footer>

  </div>
</template>

<script>
  import person from './components/person'
  import he from './components/he'
  import contentnews from './components/contentnews'
  import contentfriends from './components/contentfriends'
  import contentcir from './components/contentcir'
  import Vue from 'vue'

export default {
  components: {
    person:person,
    he:he,
    contentnews:contentnews,
    contentfriends:contentfriends,
    contentcir:contentcir,
  },
  data () {
    return {
      personplay:false,
      sign:'<',
      personleft:0,
      msg:'联系人',
      display1:false,
      display2:true,
      display3:false
    }
  },
  methods:{
    newsClick: function () {
      this.display1 = true;
      this.display2 = false;
      this.display3 = false;
      this.msg='消息'
    },
    friendClick: function () {
      this.display1 = false;
      this.display2 = true;
      this.display3 = false;
      this.msg='联系人'
    },
    dynamicClick: function () {
      this.display1 = false;
      this.display2 = false;
      this.display3 = true;
      this.msg='动态'
    },
    profile:function () {
      if(this.personleft===0){
        this.personleft=250;
        this.sign='>'
        this.personplay=true;
      }else {
        this.personleft=0;
        this.sign='<';
        this.personplay=false;
      }
    }
  }
}
</script>
<style>

  *{margin: 0;padding: 0;}
  body{overflow: hidden;}
  #app{ width:100%; height: 100%; position: absolute; }



  header{ width: 100%; background-color: #2a81d9; height: 50px;}
  header em{display: block;width: 20px; height: 20px; border-radius: 50%; background-color: #fffdfe;top: 20px;left: 20px;position: absolute;font-weight:bolder; font-size: 21px; text-align: center;}


  header span{display:block;position:absolute;line-height: 50px; font-size: 20px; left: 43%; color: #fff}

  .bg{  width: 100%;  height:100%;  background-color: chocolate;  filter:alpha(opacity=10); -moz-opacity:0.1;  opacity:0.1;  position: absolute;  top: 0;left: 0;z-index: 8; }

  .content{width: 100%;height:calc(100% - 110px); overflow-y: auto;}

  footer{ height: 59px;width: 100%;border-top: 1px black solid;}
  footer  ul li{display:inline-block;list-style: none;height: 59px;  width: 32%;text-align: center;line-height: 59px;}

</style>
