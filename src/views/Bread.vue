<template>
    <div>
        <my-header></my-header>
        <div class="bg-white">
            <div class="container p-90" id="bread">
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-center font45 letter mt-4 mb-2">Bread</h1>
                        <hr class="hr p-0">
                        <p class="letter-1 text-center mb-0">The beautiful puppy Liuliundefineds birth diary</p>
                    </div>
                    <ul class="web-ul clearfix">
                        <li>
                            <div class="web-m img-8">
                                <div class="web-content-wrap">
                                    <div class="web-content">
                                        <div class="web-content-front img-8"></div>
                                        <div class="web-content-back">
                                            <h3 class="font20 mt-5 letter text-white">Li-Li</h3>
                                            <hr class="hr p-0 mt-4 border-top-1 max">
                                            <p><a class="text-secondary font14" href="">More Details</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="web-m img-9">
                                <div class="web-content-wrap">
                                    <div class="web-content">
                                        <div class="web-content-front img-9"></div>
                                        <div class="web-content-back">
                                            <h3 class="font20 mt-5 letter text-white">A-Fame</h3>
                                            <hr class="hr p-0 mt-4 border-top-1 max">
                                            <p><a class="text-secondary font14" href="">More Details</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="web-m img-10">
                                <div class="web-content-wrap">
                                    <div class="web-content">
                                        <div class="web-content-front img-10"></div>
                                        <div class="web-content-back">
                                            <h3 class="font20 mt-5 letter text-white">Narrow</h3>
                                            <hr class="hr p-0 mt-4 border-top-1 max">
                                            <p><a class="text-secondary font14" href="">More Details</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="web-m img-11">
                                <div class="web-content-wrap">
                                    <div class="web-content">
                                        <div class="web-content-front img-11"></div>
                                        <div class="web-content-back">
                                            <h3 class="font20 mt-5 letter text-white">Cathedral</h3>
                                            <hr class="hr p-0 mt-4 border-top-1 max">
                                            <p><a class="text-secondary font14" href="">More Details</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
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
    .p-90 {
        padding:90px 10px;
    }
    .letter {
    	letter-spacing: 2px;
    }
    .letter-1 {
    	letter-spacing: 1px;
    }
    .line-h {
    	line-height: 1.1;
    }
    .hr {
    	margin: 10px auto;
    	max-width: 90px;
    	border: 0px;
    	border-top: solid 4px;
    	text-align: center;
    }
    .max {
    	max-width: 120px;
    }
    .web-ul {
    	margin: 20px 0 0 0;
    	padding: 0;
    	list-style: none;
    	display: block;
    	text-align: center;
    	width: 100%;
    }

    .web-ul:after,
    .web-m:before {
    	content: '';
        display: table;
    }

    .web-ul li {
    	width: 220px;
    	height: 220px;
    	display: inline-block;
    	margin: 20px;
    }


    .web-m {
    	width: 100%;
    	height: 100%;
    	border-radius: 50%;
    	position: relative;
    	box-shadow: 0 1px 2px rgba(0,0,0,0.1);
    	cursor: default;
    }

    .web-content-wrap{
    	position: absolute;
    	width: 180px;
    	height: 180px;
    	border-radius: 50%;
    	perspective: 800px;
    	transition: all 0.4s ease-in-out;

    	top: 20px;
    	left: 20px;
    	background: #f9f9f9 url(/img/bg.jpg);
    	box-shadow: 
    		0 0 0 20px rgba(255,255,255,0.2), 
    		inset 0 0 3px rgba(115,114, 23, 0.8);

    }

    .web-content{
    	position: absolute;
    	width: 180px;
    	height: 180px;
    	border-radius: 50%;
    	transition: all 0.4s ease-in-out;
    	transform-style: preserve-3d;

    }

    .web-content > div {
    	display: block;
    	position: absolute;
    	width: 100%;
    	height: 100%;
    	border-radius: 50%;
    	background-position: center center;
    	backface-visibility: hidden;
    }

    .web-content .web-content-back {
    	transform: rotate3d(0,1,0,180deg);
    	background: #000;
    }

    .img-8 {
    	background-image: url("/img/8.jpg");
    }

    .img-9 { 
    	background-image: url("/img/9.jpg");
    }

    .img-10 { 
    	background-image: url("/img/10.jpg");
    }

    .img-11 { 
    	background-image: url("/img/11.jpg");
    }

    .font14 {
    	font-size: 14px;
    }

    .web-content p a:hover {
    	color: rgba(255,242,34, 0.8) !important;
    }

    .web-m:hover .web-content-wrap {
    	box-shadow: 
    		0 0 0 0 rgba(255,255,255,0.8), 
    		inset 0 0 3px rgba(115,114, 23, 0.8);
    }
    /* 实现翻转 */
    .web-m:hover .web-content {
    	transform: rotate3d(0,1,0,-180deg);
    }
    /* 按钮的样式 */
    .btn-b2c202 {
    	background: #b2c202;
    }
    .px20 {
    	padding-left: 20px;
    	padding-right: 20px;
    }

    .py10 {
    	padding-top: 10px;
    	padding-bottom: 10px;
    }
</style>