<template>
  <div id="app">
    <div class="logo">
      <button type="button" @click="openNav()" id="open-butt">
        <i class="fa fa-reorder"></i>
      </button>
      <h2>NEXTMEDIA</h2>
    </div>

    <div id="mySidenav" class="sidenav">
      <div id="close-div">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav" id="close-butt">
          <i class="fa fa-remove"></i> 
        </a>
      </div>

      <div>
        <side-menu></side-menu>
      </div>
    </div>

    <div>
      <router-view/>
    </div>
     <div @click="goToTop" class="up-chevron" v-bind:class="{'show-up': (scrollY > 350), 'hide-up': (scrollY < 350)}">
        <i class="fa fa-chevron-circle-up" style="font-size:48px;color:red"></i>
     </div>
  </div>
</template>

<script>
import SideMenu from './components/SideMenu'
export default {
  name: 'App',
  components: {
    SideMenu,
    'side-menu': SideMenu
  },
  data (){
    return {
      scrollY: 0
    }
  },
  methods: {
    openNav(){
      document.getElementById("mySidenav").style.width = "90%";
      document.getElementById("close-div").style.display = "block";

    },
    closeNav(){
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("close-div").style.display = "none";
      window.scrollTo(0, 0);
    },
    goToTop(){
      window.scrollTo(0, 0); 
    },
    handleScroll(){
       this.scrollY = window.scrollY;
    }
  },
  mounted () {
    
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}

.sidenav {
    height: 90%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 3; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: rgba(0,0,0, 0.8); /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    -webkit-transition: 0.5s;
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
    transform: translate3d(0,0,0);
}

.sidenav .closebtn {
    position: fixed;
    top: 15px;
    right: 5px;
    font-size: 36px;
    margin-left: 50px;
    color: white;
    z-index: 3;
    background-color: red;
    width: 40px;
    text-align: center;
    border-radius: 25px;
}

.@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
}

#open-butt{
  font-size: 22px;
  display: inline-block;
  color: red;
  background-color: white;
}

h2{
  display: inline-block;
  margin-left: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: red;
}

#close-div{
  width: 100%;
  height: 40px;
  background-color: rgba(0,0,0,0.8);
  display: none;
}

.logo{
  position: fixed;
  top: 0px;
  background-color: black;
  width: 100%;
  padding-left: 10px;
  z-index: 2;
}
.show-up{
    display: block;
  }
  .hide-up{
    display: none;
  }
  .up-chevron{
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 1;
  }
</style>
