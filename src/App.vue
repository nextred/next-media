<template>
  <div id="app">
    <div class="logo">
      <button type="button" @click="openNav()" id="open-butt">
        <i class="fa fa-reorder"></i>
      </button>
      <h2>NEXTMEDIA</h2>
    </div>

    <div id="mySidenav" class="sidenav">
      <div class="close-div">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav">
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
  methods: {
    openNav(){
      document.getElementById("mySidenav").style.width = "100%";
    },
    closeNav(){
      document.getElementById("mySidenav").style.width = "0";
    }
  },
  mounted () {
    
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
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 3; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: rgb(0,0,0); /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

.sidenav .closebtn {
    position: fixed;
    top: 15px;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    color: white;
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

.close-div{
  width: 100%;
  height: 40px;
  background-color: rgba(0,0,0,0.8);
}

.logo{
  position: fixed;
  top: 0px;
  background-color: black;
  width: 100%;
  padding-left: 10px;
  z-index: 2;
}
</style>
