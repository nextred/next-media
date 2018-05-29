<template>
  <div class="Home">
    <div>
      <ul>
          <li><a @click = "goTo(0)" v-bind:class="{'active': (itemId === 0)}">Sport</a></li>
          <li><a @click = "goTo(1)" v-bind:class="{'active': (itemId === 1)}">Politique</a></li>
          <li><a @click = "goTo(2)" v-bind:class="{'active': (itemId === 2)}">Culture</a></li>
      </ul>
    </div>
     
    <div> 
      <swiper :options="swiperOption" class="swiper-box" ref="mySwiper" @slideChange="onSwipe">
          <swiper-slide class="swiper-item">
            <category slug="sport"></category>
          </swiper-slide>

          <swiper-slide class="swiper-item">
            <category slug="politique"></category>
          </swiper-slide>

          <swiper-slide class="swiper-item">
            <category slug="culture"></category>
          </swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>
       
      </swiper>
      <div @click="goToTop" class="up-chevron" v-bind:class="{'show-up': (scrollY > 350), 'hide-up': (scrollY < 350)}">
        <i class="fa fa-chevron-circle-up" style="font-size:48px;color:red"></i>
      </div>

    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Category from './Category'



export default {
  name: 'Home',
  components: {
    swiper,
    swiperSlide,
    'category': Category
  },
  data () {
    return {
      posts: {},
      itemId: 0,
      scrollY: 0,
      swiperOption: {
          direction: 'horizontal',
          slidesPerView: 1,
          spaceBetween: 30,
          mousewheel: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
    }
  },
  methods: {
    onSwipe(){
      var tabs = ['sport', 'politique', 'culture']
      window.history.replaceState(null, null, tabs[this.swiper.activeIndex])
      this.itemId = this.swiper.activeIndex;
      window.scrollTo(0, 0)
    },
    goTo(index){
      this.swiper.slideTo(index, 1000, false);
      this.itemId = index;
    },
    goToTop(){
      window.scrollTo(0, 0); 
    },
    handleScroll(){
       this.scrollY = window.scrollY;
    }
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
  mounted () {
    var tabs = ['sport', 'politique', 'culture']
    var index = tabs.indexOf(this.$route.params.slug);
    this.swiper.slideTo(index, 1000, false)
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: black;
    position: fixed;
    top: 65px;
    width: 100%;
    border-top: white 1px solid;
    z-index: 2;
  }

  li {
      float: left;
      height: 50px;
  }

  li a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
  }

  li a:hover:not(.active) {
      background-color: #111;
  }

  .active {
      border-bottom: red 5px solid
  }

  .swiper-box{
    margin-top: 130px;
  }
  .up-chevron{
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 3;
  }
  .show-up{
    display: block;
  }
  .hide-up{
    display: none;
  }
</style>


