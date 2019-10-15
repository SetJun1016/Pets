<template>
  <header>
    <div class="h80">
      <div class="container-fluid bg-dark position-fixed w-100 z-index h80">
        <div class="navbar navbar-expand-md navbar-dark p-0 my_navbar z-index">
          <!-- 1.最前面不折叠不隐藏的菜单-->
          <a class="navbar-brand font32 my_brand py-0" href="">Chinese Bully</a>
          <!-- 2.折叠之后出现的按钮，小屏显示-->
          <button class="navbar-toggler" data-toggle="collapse" data-target="#content"><span
              class="navbar-toggler-icon"></span>
          </button>
          <!-- 3.折叠的导航，小屏折叠，大屏横向-->
          <div id="content" class="collapse navbar-collapse bg-dark">
            <ul class="navbar-nav ">
              <li class="nav-item ml-3">
                <a class="nav-link font16 text-white letter-spacing" href="#">HOME</a>
              </li>
              <li class="nav-item  ml-3">
                <a class="nav-link font16 text-white letter-spacing" href="#bread">BREAD</a>
              </li>
              <li class="nav-item  ml-3">
                <a class="nav-link font16 text-white letter-spacing " href="#web">WEB 1905</a>
              </li>
              <li class="nav-item ml-3">
                <a class="nav-link font16 text-white letter-spacing " href="#dog">DOG SHOW</a>
              </li>
              <li class="nav-item  ml-3">
                <a class="nav-link font16 text-white letter-spacing d-md-none d-lg-block" href="#ser">SERVICE</a>
              </li>
              <li class="nav-item ml-3">
                <a class="nav-link font16 text-white letter-spacing d-md-none d-lg-block" href="#con">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
  export default {

  }
</script>
<style scoped>
    .h80 {
      height: 80px;
    }
    .my_brand{
        color:#BBC202 !important ;
        float: left!important;
    }
    .my_navbar{
        height:80px;
        padding-left: 15px;
        padding-right: 15px;
        margin-left: 42.5px;
        margin-right: 42.5px;
    }
    .letter-spacing{
        letter-spacing:1px;
    }
</style>