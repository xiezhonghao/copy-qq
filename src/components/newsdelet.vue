<template>
  <div  class="swiper-container" v-on:touchstart="sliderstart"  v-on:touchmove="slidermove" v-on:touchend="sliderfinal"  >
    <div class="swiper-wrapper" :style="{left:move+'px',backgroundColor:'color'}" v-on:click="chatwin">
      <div class="swiper-slide">{{msg}}</div>
      <span v-on:click="delet">删除</span>
    </div>
  </div>

  <div class="chat"  v-if="chatcon">
    <header>
      <ul>
        <li v-on:click="chatwin"><消息</li>
        <li>{{msg}}</li>
        <li>资料</li>
      </ul>
    </header>

    <content><p v-for="chat in chats"><em>{{chat.text}}</em><span>我</span></p></content>

    <footer>
      <input type="text" v-model="newchat"><span v-on:click="addchat">发送</span>
    </footer>
  </div>


</template>

<script>


  export default {
    props: ['msg','index'],
    data () {
      return {
        color:'',
        newchat:'',
        chats:[],
        chatcon:false,
        startx: 0,
        move: 0,
      }
    },
    methods:{
      addchat:function () {
        var text = this.newchat.trim();
        if(text){
          this.chats.push({text:text});
          this.newchat=''
        }
      },
      sliderstart:function (evt) {
        this.startx = evt.changedTouches[0].pageX;

      },
      slidermove:function (evt) {
        let final = evt.changedTouches[0].pageX;
        let  movex = final - this.startx;
        if(movex>0){
          movex=0;
        }else if(movex<-40){
          movex=-40;
        }
        this.move=movex;
        this.color='blue';
      },
      sliderfinal:function (evt) {
        var evt=evt||event;
        if(this.move>10||(this.move>-10&&this.move<0)){
          this.move=0;
        }else if(this.move<-10||(this.move>0&&this.move<10)){
          this.move=-40;
        }

      },
      delet:function () {
        this.$dispatch('child-del', this.index)
      },
      chatwin: function () {
        this.chatcon=!this.chatcon;
      }
    },
  }
</script>

<style >
  .swiper-container{  width:100%;border-bottom: 1px black solid; height: 60px;  line-height: 60px;  position: relative;overflow:hidden;}
  .swiper-wrapper { width:calc(100% + 40px); height: 60px;position: absolute; }
 .swiper-slide{  display: inline-block;width: calc(100% - 44px); height: 100%;}
  .swiper-wrapper span{ display: inline-block; width: 40px; height: 60px;  background-color: coral;  text-align: center;}


  .chat{ width: 100%;height: 100%;position: absolute; left: 0; top: 0; z-index:55;}

  .chat header{width: 100%; background-color: #2a81d9; height: 50px;}
  .chat header li{ display:inline-block;list-style: none;width: 31%;text-align: center;line-height: 50px;}
  .chat header li:nth-child(1){text-align: left; margin-left: 10px;}
  .chat header li:nth-child(3){text-align: right;}

  .chat content{width: 100%;height:calc(100% - 95px); overflow-y: auto; display: block; background-color: white; background: silver}
  .chat content span{width:25px;height:25px; display: inline-block;background-color: black;color: white;border-radius: 50%;text-align: center;margin-left: 5px;}
  .chat content p{height: 30px;line-height: 30px;margin-right: 5px;margin-top: 5px;text-align: right;}
  .chat content p em{background-color: white;}

  .chat footer{ width: 100%; height:45px;background-color: #2a81d9;}
  .chat footer input{ margin:10px; background-color: white;width:calc(100% - 100px);border-radius:10px; line-height: 25px; font-size: 16px;outline: none;}
  .chat footer span{ width:50px; height:25px;margin: 10px; display: inline-block;background-color: white;border-radius:5px; text-align: center;}
</style>
