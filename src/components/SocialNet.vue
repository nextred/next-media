<template>
  <div class="social-net">
    <social-sharing :url="url"
                      :title="title"
                      description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
                      quote="Vue is a progressive framework for building user interfaces."
                      hashtags="vuejs,javascript,framework"
                      twitter-user="vuejs"
                      inline-template>
  <div>
      <network network="facebook">
        <i class="fa fa-facebook"></i>
      </network>
      <network network="twitter">
        <i class="fa fa-twitter"></i>
      </network>
      <network network="whatsapp">
        <i class="fa fa-whatsapp"></i>
      </network>
      <network network="pinterest">
        <i class="fa fa-pinterest"></i>
      </network>
  </div>
</social-sharing>
  </div>
</template>

<script>
export default {
  name: 'SocialNet',
  props: ['url', 'title'],
  data () {
    return {
    }
  },
  methods: {

  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   
</style>
