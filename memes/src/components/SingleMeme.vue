<template>
  <div>
    <img :src="memes.path" />
  </div>
</template>

<style scoped>
img{
  width: 600px;
}
</style>

<script>
export default{
  name: "SingleMeme",
  props: {
    memes: Object
  }
}
</script>
