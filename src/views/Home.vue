<template>
    <div>
        <my-header></my-header>
        <div class="container-fluid mt-5 mb-5">
            <div class="carousel " id="lunbo" data-ride="carousel">
                <!-- 1.轮播图片-->
                <div class="carousel-inner ">
                    <div class="carousel-item active">
                        <img src="img/banner1.jpg" class="w-100 h-330" alt="" />
                        <div class="caption d-sm-none d-lg-block font18">
                            <h2 class="text-center mt-3">Myths and Facts About Pit Bulls</h2>
                            <hr>
                            <p class="mb-3 px-3">At vero eos et accusam et justo duo dolores et ea rebum. Consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                aliquyam erat.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="img/banner2.jpg" class="w-100 h-330 banner_position" alt="" />
                        <div class="caption d-sm-none d-lg-block font18 z-index_">
                            <h2 class="text-center mt-3">Myths and Facts About Pit Bulls</h2>
                            <hr>
                            <p class="mb-3 px-3">At vero eos et accusam et justo duo dolores et ea rebum. Consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                aliquyam erat.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="img/banner3.jpg" class="w-100 h-330" alt="" />
                        <div class="caption font18 d-sm-none d-lg-block z-index_">
                            <h2 class="text-center mt-3">Myths and Facts About Pit Bulls</h2>
                            <hr>
                            <p class="mb-3 px-3">At vero eos et accusam et justo duo dolores et ea rebum. Consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                aliquyam erat.
                            </p>
                        </div>
                    </div>
                </div>
                <!-- 2.左右箭头-->
                <a data-slide="prev" href="#lunbo" class="carousel-control-prev ">
                    <span class="carousel-control-prev-icon "></span>
                </a>
    
                <a data-slide="next" href="#lunbo" class="carousel-control-next ">
                    <span class="carousel-control-next-icon "></span>
                </a>
                <!-- 3.轮播指示器-->
            </div>
        </div>
        <!-- 尾部 -->
        <my-footer></my-footer>
    </div>

</template>

<script>
    export default {

    }
</script>

<style>
    body {
	    background-image: url("/img/bg.jpg");
	    background-size: cover;
	    background-attachment: fixed;
    }
    .h-330 {
        height: 494px;
    }
    /* .mt-6 {
        margin-top: 50px;
    } */
    .carousel-control-prev,
    .carousel-control-next{
        width: 4%;
        height: 20%;
        background-color: #333333;
        border-radius: 0.25rem;
        top:40%;
    }
    .caption{
        display: inline-block;
        z-index:2;
        /*position:absolute;*/
        background: rgba(0,0,0, .6);
        width:50%;
        border-radius:0.75rem;
        color:white;
    }

    .banner_position{
        position: relative;
    }
    .caption{
        position: absolute;
        z-index: 2;
        top:60%;
        right:10%;
    }

    .z-index {
	    z-index: 10;
    }
</style>