<template>
  <div class="news" >
    <Hello v-for="item in items"  :msg="item.peoplemsg" :index="$index"></Hello>

  </div>
</template>

<script>
  import Hello from './newsdelet'

  export default {
    components: {
      Hello,
    },
    data () {
      return {
        items: [
          { peoplemsg: '王宝强' },
          { peoplemsg: '姚明' },
          { peoplemsg: '易建联' },
          { peoplemsg: '周琦' },
          { peoplemsg: '王哲林' },
          { peoplemsg: '女排' },
          { peoplemsg: '男排' },
          { peoplemsg: '男篮' },
          { peoplemsg: '女篮' },
          { peoplemsg: '张继科' }
        ]
      }
    },
    events: {
      'child-del': function (index) {
        this.items.splice(index,1);
        console.log(index)
      }
    }
  }
</script>
