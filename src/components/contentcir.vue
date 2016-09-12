<template>
  <div class="dynamic">
    <p v-for="item in items">
      {{ parentMessage }}{{ $index +1}}
    </p>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        parentMessage: '朋友圈动态',
        items:6
      }
    }
  }
</script>
<style>
   .dynamic p{  height: 100px; width: 100%; text-align: center;line-height: 100px;border-bottom:#000 1px solid;}
</style>
