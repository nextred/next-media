
<template>
  <div class="related-container">
    <div v-if="isLoaded">
      <swiper :options="swiperOption" class="swiper-box" ref="mySwiper4" @slideChange="onSwipe" v-if="posts !== null">
        <swiper-slide v-for="(slide, index) in posts" :key="index" class="swiper-item">
            <div > 
                <img :src="slide.image_url" />
                <h3><b> {{slide.post_title}} </b><a @click="displayPost(slide)"> (Read more ...)</a></h3>
            </div>
        </swiper-slide>
        <br />
        <br />
        
      </swiper>
    </div>
    <div v-if="!isLoaded" style="text-align: center; margin-top: 50px;">
        <i class="fa fa-circle-o-notch fa-spin" style="font-size:24px"></i>
    </div>

  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Related',
  props: ['post_id'],
  components: {
    swiper,
    swiperSlide,
  },
  data () {
    return {
      posts: [],
      isLoaded: false,
      swiperOption: {
          direction: 'horizontal',
          slidesPerView: 2,
          spaceBetween: 30,
          mousewheel: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
        }
    }
  },

  methods: {
    onSwipe(){
    },
    displayPost(post){
        this.$router.push('/category/' + post.categories[0].name+ '/' + post.ID + '/' + post.post_name);
        window.scrollTo(0, 0)
    }
  },

  computed: {
      swiper() {
        return this.$refs.mySwiper4.swiper
      }
    },

  mounted () {
    this.$http.get('http://my-website.next/api/posts/related/'+ this.post_id).
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
  .search-container{
      padding-top: 70px;
  }
  img{
      height: 150px;
      width: 100%;
  }

</style>
