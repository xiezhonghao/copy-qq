<template>
  <div class="frinend" >
    <h4 v-on:click="dis1">我的好友</h4>
    <ul id="gf"  v-if="display1" >
      <li v-for="item in items2">
        {{ parentMessage2 }} {{ $index +1}}
      </li>
    </ul>
    <h4 v-on:click="dis2">我的企业</h4>
    <ul id="com" v-if="display2" >
      <li v-for="item in items3">
        {{ parentMessage3 }}{{ $index +1}}
      </li>
    </ul>
    <h4 v-on:click="dis3">黑名单</h4>
    <ul id="person" v-if="display3" >
      <li v-for="item in items4">
        {{ parentMessage4 }}{{ $index +1}}
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        parentMessage2: '好友',
        parentMessage3: '公司',
        parentMessage4: '坏人',
        items2:18,
        items3:15,
        items4:5,
        display1:false,
        display2:false,
        display3:false
      }
    },
    methods:{
      dis1:function () {
        this.display1=!this.display1;
      },
      dis2:function () {
        this.display2=!this.display2;
        console.log(1);
      },
      dis3:function () {
        this.display3=!this.display3;
      }

    }
  }
</script>

<style>
  .content .frinend h4{ height:30px; font-size:22px;  line-height:30px; background:url(../img/ico1.gif) no-repeat left #63f7ff; padding-left:10px;}
  .content .frinend li{ height:24px;border-bottom:#000 1px solid; padding-left:10px; line-height:24px; }
</style>
