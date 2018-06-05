
<template>
  <div class="hello">
    <div v-for="post of posts" class="post-container" @click="displayPost(post)" v-if="isLoaded">
      <p >
        <img v-lazy="post.image_url" alt="Norway" >
          {{post.post_title}} 
      </p>
      <p v-html="post.post_excerpt">
      </p>
    </div>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    <div v-if="!isLoaded" style="text-align: center; margin-top: 50px;">
        
    </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: 'Home',
  props: ['slug'],
  components: {
    InfiniteLoading,
  },
  data () {
    return {
      posts: {},
      isLoaded: false,
      pageIndex: 0
    }
  },

  methods: {
    displayPost(post){
      this.$router.push('/category/' + this.slug + '/' + post.ID + '/' + post.post_name);
    },
    infiniteHandler($state){
      if(this.pageIndex < 3){
        setTimeout(() => {
          this.$http.get('http://my-website.next/api/posts/' + this.slug + '/' + this.pageIndex).
            then(response =>{(this.posts = this.posts.concat(response.data)), ($state.loaded())} )} 
            , 1000);
        this.pageIndex = this.pageIndex + 1;
      }else{
        $state.complete();
      }    
    },
    isEmpty(list){
      
        this.posts = this.posts.concat(list);
        $state.loaded();
    
    }
  },
  mounted () {
    this.$http.get('http://my-website.next/api/posts/'+ this.slug + '/0').
      then(response => {(this.posts = response.data), (this.isLoaded = true)});
    this.pageIndex += this.pageIndex;
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
