<template>
  <div>
    <div class="image" v-for="meme in memes" v-bind:key="meme._id">
      <router-link :to="{name: 'meme', params: {id: meme._id, created: meme.created, path: meme.path}}">
        <img :src="meme.path" />
      </router-link>
    </div>
  </div>
</template>

<style scoped>
img{
  width: 600px;
}
</style>

<script>
export default{
  name: "MemeGallery",
  props: {
    memes: Array
  }
}
</script>
