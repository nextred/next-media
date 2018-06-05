<template>
  <div class="post-details">
   <swiper :options="swiperOption" class="swiper-box" ref="mySwiper1" @slideChange="onSwipe">
      <swiper-slide v-for="(slide, index) in posts" :key="index" class="swiper-item">
        <post :post="slide"></post>
        <div class="related">
          <h2>Related posts</h2>
          <related-posts :post_id="slide.ID"></related-posts>
        </div>
      </swiper-slide>
      <div class="share-div">
        <social-net :url="url" :title="title"></social-net>
      </div>
   </swiper>
   
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Post from './Post'
import RelatedPosts from './RelatedPosts'
import SocialNet from './SocialNet'


export default {
  name: 'PostDetails',
  props: ['postList'],
  components: {
    swiper,
    swiperSlide,
    'post': Post,
    'related-posts': RelatedPosts,
    'social-net': SocialNet
  },
  data () {
    return {
      posts: [],
      swiperOption: {
          direction: 'horizontal',
          slidesPerView: 1,
          spaceBetween: 30,
          mousewheel: true,
          loop: true,
          autoHeight: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
    }
  },
  methods: {
    onSwipe(){
      var itemId = this.swiper.activeIndex;
      window.scrollTo(0, 0)
       window.history.replaceState(null, null, '../' + this.posts[itemId].ID + '/' + this.posts[itemId].post_title);
    },
    goToTop(){
      window.scrollTo(0, 0); 
    }
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper1.swiper
      },
      url() {
        return window.location.href
      },
      title() {
        return "sfsdsdsdds";
      }
    },
  mounted () { 
    var currentIndex;
    this.$http.get('http://my-website.next/api/posts/'+ this.$route.params.cat).
      then(response => {(this.posts = response.data), 
            (currentIndex = response.data.map(function(x) {return x.ID }).indexOf(Number(this.$route.params.id))),
            (this.swiper.slideTo(currentIndex, 1000, false))});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .post-details{
      margin-top: 100px;
  }
  .up-chevron{
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 1;
  }

  .related{
    margin-top: 20px;
    border-top: 2px green solid;
  }

  .related h2{
    color: red;
    weight: bold;
  }
  .share-div{
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 3;
  }
</style>


