<script setup>
defineProps({
    linksContent: {
        type: Array,
        required: true
    },
    ulClass: {
        type: String,
        required: true
    },
    itemClass: {
        type: String,
        required: true
    },
    linkClass: {
        type: String,
        required: true
    },
    link: {
      type: String,
      required: false
    },
    isSocial: {
      type: Boolean,
      required: false
    }
})
</script>

<template>
    <div>
      <ul :id="link" :class="ulClass">
          <li @mouseover="increaseImg" :class="itemClass" v-for="link in linksContent">
              <a class="section-social__link" href="#">
                  <img class="section-social__img mr-1" :src="link.img"/>
                  {{ link.text }}
              </a>
          </li>
      </ul>
    </div>
</template>

<style scoped>
  .small-img {
    height: 30px;
    width: 30px;
  }
  
  ul {
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    flex-grow: 1;
    display:flex;
    margin:0;
    padding:0;
  }
  
  ul li {
    list-style:none;
    margin:0 5px;
  }
  
  ul li a .fa {
    font-size: 40px;
    color: #262626;
    line-height:80px;
    transition: .5s;
    padding-right: 14px;
  }
  
  ul li a span {
    padding:0;
    margin:0;
    position:absolute;
    top: 30px;
    color: #262626;
    letter-spacing: 4px;
    transition: .5s;
  }
  
  ul li a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width:210px;
    height:80px;
    background: linear-gradient(to top left, var(--brand-dark-shades) 0%, var(--brand-light-accent) 100%);
    text-align:left;
    padding-left: 20px;
    transition:.5s;
    box-shadow: 20px 20px 10px rgba(0,0,0,.5);
  }
 
  ul li a:hover {
    transform: translate(-20px, -15px);
    z-index: 3;
    box-shadow: -50px 50px 50px rgba(0,0,0,.5);
  }
  
  ul li:hover .fa {
    color:var(--brand-light-shades);
  }
  
  ul li:hover span {
    color:var(--brand-light-shades);
  }
  
  ul li:hover a{
    background: var(--brand-color);
  }

  ul li:hover .section-social__img {
    height: 45px;
    width: 45px;
  }

  ul li:hover .section-social__link {
    color: var(--brand-dark-shades);
  }

  ul li:hover a:before{
    background:  var(--brand-dark-accent);
  }
  ul li:hover a:after{
    background:  var(--brand-light-accent);
  }
  
</style>
