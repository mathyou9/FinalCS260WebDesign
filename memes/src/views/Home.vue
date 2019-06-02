<template>
<div class="home">
  <meme-gallery :memes="memes" />
</div>
</template>

<script>
import MemeGallery from "@/components/MemeGallery.vue"
export default {
  name: 'home',
  components: {
    MemeGallery,
  },
  computed: {
    memes() {
      return this.$store.state.memes;
    }
  },
  async created() {
    await this.$store.dispatch("getAllMemes");
  }
}
</script>
