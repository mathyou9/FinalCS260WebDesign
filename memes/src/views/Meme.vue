<template>
<div class="Meme">
  <single-meme :memes="memes" />
</div>
</template>

<script>
import SingleMeme from "@/components/SingleMeme.vue"
export default {
  name: 'Meme',
  components: {
    SingleMeme,
  },
  computed: {
    memes() {
      return this.$store.state.memes;
    }
  },
  async created() {
    await this.$store.dispatch("getOneMeme", this.$route.params.id);
  }
}
</script>
