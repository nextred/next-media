
<template>
  <div class="hello">
    <div v-for="post of posts" class="post-container" @click="displayPost(post)" v-if="isLoaded">
      <p >
        <img :src="post.image_url" alt="Norway" >
          {{post.post_title}} 
      </p>
      <p v-html="post.post_excerpt">
      </p>
    </div>
    <div v-if="!isLoaded" style="text-align: center; margin-top: 50px;">
        <i class="fa fa-circle-o-notch fa-spin" style="font-size:24px"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: ['slug'],
  data () {
    return {
      posts: {},
      isLoaded: false
    }
  },

  methods: {
    displayPost(post){
        this.$router.push('/category/' + this.slug + '/' + post.ID + '/' + post.post_name);
    }
  },
  mounted () {
    this.$http.get('http://my-website.next/api/posts/'+ this.slug).
      then(response => {(this.posts = response.data), (this.isLoaded = true)});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .post-container{
    border: green 1px solid;
    min-height: 150px;
    margin: 15px;
  }

  p img{
    float: right;
    margin-left:15px;
    width:40%; 
    height: 100px;
  }

  p{
    padding: 10px;
    text-align: justify;
    font-weight: bold;
  }

</style>
