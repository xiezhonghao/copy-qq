<template>
  <div class="chat">
  <header>
    <ul>
      <li v-on:click="chatwin"><消息</li>
      <li>{{msg}}{{index}}</li>
      <li>资料</li>
    </ul>
  </header>

  <content>
  </content>

  <footer>
    <input type="text"><span>发送</span>
  </footer>
  </div>
</template>

<script>


  export default {
    props: ['msg','index'],
    methods:{
      chatwin:function (evt) {
        this.$dispatch('child-msg1')
      }
    },
  }
</script>

<style>
  .chat{ width: 100%;height: 100%;position: absolute; left: 0; top: 0; z-index:55;}

  .chat header{width: 100%; background-color: #2a81d9; height: 50px;}
  .chat header li{ display:inline-block;list-style: none;width: 31%;text-align: center;line-height: 50px;}
  .chat header li:nth-child(1){text-align: left; margin-left: 10px;}
  .chat header li:nth-child(3){text-align: right;}

  .chat content{width: 100%;height:calc(100% - 95px); overflow-y: auto; display: block; background-color: white;}

  .chat footer{ width: 100%; height:45px;background-color: #2a81d9;}
  .chat footer input{ margin:10px; background-color: white;width:calc(100% - 100px);border-radius:10px; line-height: 25px; font-size: 16px;}
  .chat footer span{ width:50px; height:25px;margin: 10px; display: inline-block;background-color: white;border-radius:5px; text-align: center;}
</style>
