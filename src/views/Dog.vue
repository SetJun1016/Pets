<template>
    <div>
        <my-header></my-header>
        <div class="bg-white p-10" id="dog">
            <div class="container">
                <div>
                    <h2 class="font45 text-center">Dog Show</h2>
                    <hr>
                    <p class="font16 text-center mt-2">Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <div class="row mx-0">
                    <div class="col-lg-8 px-0">
                        <div class="row px-0">
                            <div class="col-md-6 col-sm-12">
                                <a href="#">
                                    <img class="w-100" src="img/12.jpg" alt="">
                                </a>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12">
                                <div class="ml-lg-2 mr-lg-3">
                                    <a class="font30 hover" href="#">Lorem ipsum</a>
                                    <div class="fontcolor">
                                        By
                                        <a class="reset" href="#"> Danny</a>
                                        on April 14, 2015
                                    </div>
                                    <p class="colorreset">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                        diam
                                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Consetetur
                                        sadipscing
                                        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                        erat.
                                    </p>
                                </div>
                            </div>
                            <div class="row mx-0">
                                <div class="col-lg-4 col-md-4 col-sm-12">

                                    <a href="#"><img class="w-75" src="img/13.jpg" alt="">
                                    </a>
                                    <a class="font20 d-block" href="">Lorem ipsum </a>

                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-12">

                                    <a href="#">
                                        <img class="w-75" src="img/15.jpg" alt="">
                                    </a>
                                    <a class="font20 d-block" href="#">Lorem ipsum </a>
                                </div>
                                <div class=" col-lg-4 col-md-4 col-sm-12">

                                    <a href="#"><img class="w-75 
    	                                    0" src="img/14.jpg" alt="">
                                    </a>
                                    <a class="font20 d-block" href="#">Lorem ipsum </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-12 col-sm-12 px-sm-0 px-lg-3 h-400">
                        <a href="#">
                            <img class="img_reset" src="img/16.jpg" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .h-400 {
        height: 450px;
    }
    .p-10 {
        padding: 10px;
    }
    hr{
      /* size:4px;   */
        width: 90px;
        margin:0 auto;
        border-top: 4px solid black;
    
    }
    a{
        color: #333333;
        text-decoration: none;
    }
    a:hover{
        opacity: 0.9;
        text-decoration:none;
        color:#BBC202;
    }
    a:active{
        text-decoration: underline #337ab7;
        color:#337ab7;  
    }
    a:focus{
        text-decoration: underline #337ab7;
        color:#337ab7;  
     }
     .reset{
        color:#076BA5;
     }
     .fontcolor{
        color:#888888;
     }
     .colorreset{
        color:#333333;
     }
     /* .ml-5{ */
         /* margin-left:8rem; */
     /* } */
     .img_reset{
        width:100%;
        height:95%;
     }
</style>