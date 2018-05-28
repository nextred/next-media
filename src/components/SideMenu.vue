<template>
  <div class="side-menu">
    <div class="container" @click="displayPost">
        <img :src="menu.featured_post_image" alt="Norway" style="width:95%; height: 250px" >
        <div class="centered">
            <span style="color: rgba(1,1,1,0.5)"> A LA UNE ... </span><br/><br />
            {{menu.featured_post.post_title}}
        </div>
    </div>
    <div class="tags" style="margin-top: 50px">
    </div>
    <div class="tags">
        <a v-for="tag of menu.hashtags">
            {{tag.name}}
        </a>
    </div>

    <div class="categories tags">
        <a v-for="category of menu.categories" @click="goTo(category.name)">
            {{category.name}}
        </a>
    </div>

    <div class="search tags">
        <div class="search-wrapper">
            <input type="text" v-model="search" placeholder=" Search ..."/>
            <a @click="searchWord" class="search-butt"><i class="fa fa-search" style="font-size:36px;color:red"></i></a>
        </div>
    </div>

    <div class="account">
        <a><i class="fa fa-user-circle" style="font-size:36px"></i>
            Mon Compte/Créer un compte
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  data () {
    return {
        menu: {},
        search: ''
    }
  },
  methods: {
      goTo(slug){
        //window.history.replaceState(null, null, slug);
        this.$parent.closeNav();
        this.$router.push('/category/' + slug);
      },
      displayPost(){
          window.scrollTo(0, 0); 
          this.$router.push('/category/sport/' + this.menu.featured_post.ID + '/' + this.menu.featured_post.post_name)
          this.$parent.closeNav();
      },
      searchWord(){
          if(this.search !== ''){
            this.$router.push('/posts/search/' + this.search);
            this.$parent.closeNav();
          }
      }
  },
  mounted () {
      this.$http.get('http://my-website.next/test2').
      then(response => this.menu = response.data);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .side-menu{
        color: white;
        overflow-y: scroll;
        z-index: 1;
        padding: 40px;
    }

    .container {
        position: relative;
        text-align: center;
        color: white;
    }

    .centered {
        position: absolute;
        top: 65%;
        left: 35%;
        transform: translate(-50%, -50%);
        font-weight: bold;
        font-size: 22px;
        font-family: "Comic Sans MS", cursive, sans-serif;
    }

    span{
        font-size: 16px;
    }

    .tags a{
        font-size: 20px;
        padding: 30px;
    }

    .tags{
        border-bottom: white 1px solid;
        padding: 15px;
    }
    input[type=text] {
        width: 160px;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        background-image: url('../../static/images/searchicon.png');
        background-position: 10px 10px; 
        background-repeat: no-repeat;
        padding: 12px 20px 12px 40px;
        -webkit-transition: width 0.4s ease-in-out;
        transition: width 0.4s ease-in-out;
        }

    input[type=text]:focus {
        width: 100%;
        height: 60px;
    }

    .account{
        padding: 10px;
        font-size: 24px;
        font-weight: bold;
    }
    .search-butt{
       
    }
</style>
