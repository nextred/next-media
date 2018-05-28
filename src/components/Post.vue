<template>
  <div class="hello">
    <h2> {{post.post_title}} </h2>
    <div class="img-div">
      <img v-bind:src="post.image_url">
      <div> Le {{post.post_date}} </div>
    </div>
    <div class="content">
        <p v-html = "post.post_content"></p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Post',
  props: ['post'],
  data () {
    return {
      
    }
  },
  methods: {
    
  },
  computed: {
     
    },

  
  mounted () {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .img-div img{
      height: 150px;
      width: 100%;
  }
  .img-div{
    font-size: 16px;
  }
  .content{
      padding: 10px;
  }
</style>


