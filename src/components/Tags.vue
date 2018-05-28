
<template>
  <div class="tag-container">
    <div v-if="isLoaded">
        <div v-for="post of posts" class="post-container" @click="displayPost(post)" v-if="posts !== null">
            <div v-if="posts">
                <h4 style="color: red; margin-left: 10px;">
                    <span v-for="cat in post.categories"> {{cat.name}}   </span>
                </h4>
                <p>
                    <img :src="post.image_url" alt="Norway" >
                    {{post.post_title}} 
                </p>
                <p v-html="post.post_excerpt">
                </p>
            </div>
        </div>
        <div  v-if="posts === null">
            <h2 style="padding-top: 550px; color: red;">No post contains this word</h2>
        </div>
    </div>
    <div v-if="!isLoaded" style="text-align: center; margin-top: 50px;">
        <i class="fa fa-circle-o-notch fa-spin" style="font-size:24px"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: ['slug'],
  data () {
    return {
      posts: {},
      isLoaded: false
    }
  },

  methods: {
    displayPost(post){
        this.$router.push('/posts/search/tag/' + this.$route.params.word + '/' + post.ID + '/' + post.post_name);
    }
  },
  mounted () {
    this.$http.get('http://my-website.next/api/posts/search/tag/'+ this.$route.params.word).
      then(response => {(this.posts = response.data), (this.isLoaded = true)});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .post-container{
    border: green 1px solid;
    min-height: 200px;
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
  .tag-container{
      padding-top: 70px;
  }

</style>
