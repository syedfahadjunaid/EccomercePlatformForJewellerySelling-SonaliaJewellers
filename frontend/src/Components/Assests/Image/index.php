<?php include('header.php');?>
<style>
@media screen and (min-width: 1024px) {
   .banner{
        height: 700px;
    }
}
</style>
        <section style="margin-top: -26px !important;">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="http://localhost/test/admin/Upload/HomeSliders/<?php echo $slider[0]['id'];?>/<?php echo $slider[0]['image1'];?>" class="d-block w-100 banner" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                      <h2 class="display-1 fw-bold px-2 px-md-5 text-center mx-auto col-lg-12 mt-md-0" data-aos="fade-up" data-aos-delay="1000"><?php echo $slider[0]['name'];?></h2>
                    <br><a style="border-radius:20px;" href="<?php echo base_url('search-by-menus/5');?>" class="btn btn-dark bor1 btn-dark-chunky text-white mx-1 w-100 w-md-auto mb-2 mb-md-0"><span>Shop Now <i class="ri-arrow-right-line align-middle fw-bold"></i></span></a>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="http://localhost/test/admin/Upload/HomeSliders/<?php echo $slider[0]['id'];?>/<?php echo $slider[0]['image2'];?>" class="d-block w-100 banner"  alt="...">
                 
                     <div class="carousel-caption d-none d-md-block">
                         <h2 class="display-1 fw-bold px-2 px-md-5 text-center mx-auto col-lg-12 mt-md-0" data-aos="fade-up" data-aos-delay="1000"><?php echo $slider[0]['name'];?></h2>
                   <br> <a style="border-radius:20px;" href="<?php echo base_url('search-by-menus/4');?>" class="btn btn-dark bor1 btn-dark-chunky text-white mx-1 w-100 w-md-auto mb-2 mb-md-0"><span>Shop Now <i class="ri-arrow-right-line align-middle fw-bold"></i></span></a>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="http://localhost/test/admin/Upload/HomeSliders/<?php echo $slider[0]['id'];?>/<?php echo $slider[0]['image3'];?>" class="d-block w-100 banner"  alt="...">
                 
                  <div class="carousel-caption d-none d-md-block">
                      <h2 class="display-1 fw-bold px-2 px-md-5 text-center mx-auto col-lg-12 mt-md-0" data-aos="fade-up" data-aos-delay="1000"><?php echo $slider[0]['name'];?></h2>
                      
                    <br><a style="border-radius:20px;" href="<?php echo base_url('search-by-menus/1');?>" class="btn btn-dark bor1 btn-dark-chunky text-white mx-1 w-100 w-md-auto mb-2 mb-md-0"><span>Shop Now <i class="ri-arrow-right-line align-middle fw-bold"></i></span></a>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
        </div>

        <section style="margin-top: 3rem !important;">
        <div class="container-fluid" >
            <div class="row g-5">
                <div class="col-12 col-md-6 d-none d-lg-inline-block" data-aos="fade-right">
                    <div class="m-0">
                        <p class="small fw-bolder text-uppercase tracking-wider mb-2 text-muted">RAXEDO NEW YORK
                        </p>
                        <h4 style="font-size: 24px;" class="display-5 fw-bold mb-6">Are you ready to take yourself to next level? Let's get it done with RAXEDO's collection of high-performance sports and activewear.</h4>
                        
                        <div class="px-8 position-relative">
        
                            <!-- Swiper-->
                            <div class="swiper-container swiper-linked-carousel-small">
                            
                                <!-- Add Pagination -->
                                <div class="swiper-pagination-blocks mb-4">
                                    <div class="swiper-pagination-custom"></div>
                                </div>
                            
                                <div class="swiper-wrapper">
                             <?php foreach($latest_products as $product) { ?>
                                    <!-- Swiper Slide-->
                                    <div class="swiper-slide overflow-hidden">
                                        <!-- Card-->
                                        <!-- Card Product-->
                                        <div class="card position-relative w-100 h-100 card-listing hover-trigger">
                                            <div class="card-header">
                                                <picture  style="cursor: pointer;" onClick="window.location.href='<?php echo base_url("products/product/".$product->id);?>';" class="position-relative overflow-hidden d-block bg-light">
                                                    <img class="w-100 img-fluid position-relative z-index-10"  style="height: 100% !important;" title="" src="<?php echo ADMINBASEURL.'/Upload/Products/'.$product->id.'/'.$product->image;?>" alt="Bootstrap 5 Template by Pixel Rocket">
                                                </picture>
                                                <div class="card-actions">
                                                    <?php if(isset($_SESSION['email'])){
                                                         $t = $this->db->where('product_id',$product->id)->where('user_id',$_SESSION['id'])->count_all_results('wishlist');
                                                         if($t>0){?>
                                                         <i name="add_wishlist" class="add_wishlist ri-heart-fill ri-lg " aria-hidden="true" data-productid="<?php echo $product->id;?>" data-user_id="<?php echo $_SESSION['id'];?>" ></i>
                                                         
                                                         <?php }else{?>
                                            
                                                        <i name="add_wishlist" class="add_wishlist ri-heart-line ri-lg " aria-hidden="true" data-productid="<?php echo $product->id;?>" data-user_id="<?php echo $_SESSION['id'];?>" ></i>
                                                        
                                                        <?php }
                                                        }else{ ?>
                                                        
                                                        <i onclick="swal({
                                                        title: 'NEED A SIGNED IN',
                                                        text: 'Please login your account and add in your wishlist',
                                                        icon: 'warning',
                                                        buttons: true,
                                                        dangerMode: true,
                                                        })
                                                        .then((willDelete) => {
                                                        if (willDelete) {
                                                        window.location.href='<?php echo base_url("user-login");?>'
                                                        } else {
                                                        swal('Its Okay, No Issue');
                                                        }
                                                        });" class="ri-heart-line ri-lg" ></i>
                                                        
                                                        <?php } ?>
                                                    
                                                </div>
                                            </div>
                                             <a class="text-decoration-none" href="<?php echo base_url('products/product/'.$product->id);?>">
                                            <div class="card-body px-0 text-center">
                                               
                                                <p class="mb-0 mx-2 mx-md-4 fs-p text-decoration-none d-block text-center"><?php echo sentenceCase(substr($product->name,0,25))."...";?></p>
                                                     <small><?php echo sentenceCase(substr($product->keywords,0,30)."...");?></small>
                                                   
                                                     <p class="fw-bolder m-0 mt-2"><i class="fa fa-inr" aria-hidden="true"></i> <?php echo $product->price;?> &nbsp;&nbsp;<s style="font-size:12px;" class="lh-1 me-2"><span class="fw-bolder m-0"><i class="fa fa-inr" aria-hidden="true"></i><?php echo $product->price;?></span></s></p>
                                                      
                                            </div>
                                            </a>
                                        </div>
                                        <!--/ Card Product-->
                                        <!--/ Card-->
                                    </div>
                                    <!-- / Swiper Slide-->
                            
                                 <?php } ?>  
                            
                                </div>
                            </div>                                <!-- /Swiper-->
        
                            <!-- Swiper Arrows -->
                            <div
                                class="swiper-prev-linked position-absolute top-50 start-0 mt-n8 cursor-pointer transition-all opacity-50-hover">
                                <i class="ri-arrow-left-s-line ri-2x"></i></div>
                            <div
                                class="swiper-next-linked position-absolute top-50 end-0 me-3 mt-n8 cursor-pointer transition-all opacity-50-hover">
                                <i class="ri-arrow-right-s-line ri-2x"></i></div>
                            <!-- / Swiper Arrows-->
        
                        </div>
                    </div>
                </div>
                <div class="col-md-6" data-aos="fade-left">
                    <div class="w-100 h-100">
        
                        <!-- Swiper-->
                        <div class="swiper-container h-100 swiper-linked-carousel-large">
                        
                            <div class="swiper-wrapper h-100">
                        
                                <!-- Swiper Slide-->
                                <div class="swiper-slide">
                                    <div class="row g-3">
                                        
                                        <?php foreach($products4_1 as $product) { ?>
                                        <div class="col-12 col-md-6">
                                            <!-- Card Product-->
                                            <div class="card position-relative w-100 h-100 card-listing hover-trigger">
                                                <div class="card-header">
                                                    <picture  style="cursor: pointer;" onClick="window.location.href='<?php echo base_url("products/product/".$product->id);?>';" class="position-relative overflow-hidden d-block bg-light">
                                                        <img class="w-100 img-fluid position-relative z-index-10 " title="" src="<?php echo ADMINBASEURL.'/Upload/Products/'.$product->id.'/'.$product->image;?>" alt="<?php echo $product->name;?>">
                                                    </picture>
                                                    <div class="card-actions">
                                                         <?php if(isset($_SESSION['email'])){
                                                         $t = $this->db->where('product_id',$product->id)->where('user_id',$_SESSION['id'])->count_all_results('wishlist');
                                                         if($t>0){?>
                                                         <i name="add_wishlist" class="add_wishlist ri-heart-fill ri-lg " aria-hidden="true" data-productid="<?php echo $product->id;?>" data-user_id="<?php echo $_SESSION['id'];?>" ></i>
                                                         
                                                         <?php }else{?>
                                            
                                                        <i name="add_wishlist" class="add_wishlist ri-heart-line ri-lg " aria-hidden="true" data-productid="<?php echo $product->id;?>" data-user_id="<?php echo $_SESSION['id'];?>" ></i>
                                                        
                                                        <?php }
                                                        }else{ ?>
                                                        
                                                        <i onclick="swal({
                                                        title: 'NEED A SIGNED IN',
                                                        text: 'Please login your account and add in your wishlist',
                                                        icon: 'warning',
                                                        buttons: true,
                                                        dangerMode: true,
                                                        })
                                                        .then((willDelete) => {
                                                        if (willDelete) {
                                                        window.location.href='<?php echo base_url("user-login");?>'
                                                        } else {
                                                        swal('Its Okay, No Issue');
                                                        }
                                                        });" class="ri-heart-line ri-lg" ></i>
                                                        
                                                        <?php } ?>
                                                        
                                                    </div>
                                                </div>
                                                  <a class="text-decoration-none" href="<?php echo base_url('products/product/'.$product->id);?>">
                                                <div class="card-body px-0 text-center">
                                                   
                                                    <p class="mb-0 mx-2 mx-md-4 fs-p text-decoration-none d-block text-center"><?php echo sentenceCase(substr($product->name,0,25))."...";?></p>
                                                         <small><?php echo sentenceCase(substr($product->keywords,0,30)."...");?></small>
                                                        <p class="fw-bolder m-0 mt-2"><i class="fa fa-inr" aria-hidden="true"></i> <?php echo $product->price;?> &nbsp;&nbsp;<s style="font-size:12px;" class="lh-1 me-2"><span class="fw-bolder m-0"><i class="fa fa-inr" aria-hidden="true"></i><?php echo $product->price+100;?></span></s></p>
                                                       
                                                </div>
                                                </a>
                                            </div>
                                            <!--/ Card Product-->
                                        </div>
                                        <?php } ?>
                                    </div>
                                </div>
                                <!-- /Swiper Slide-->
                        
                                <!-- Swiper Slide-->
                                <div class="swiper-slide">
                                    <div class="row g-3">
                                        <?php foreach($products4_2 as $product) { ?>
                                        <div class="col-12 col-md-6">
                                            <!-- Card Product-->
                                            <div class="card position-relative w-100 h-100 card-listing hover-trigger">
                                                <div class="card-header">
                                                    <picture  style="cursor: pointer;" onClick="window.location.href='<?php echo base_url("products/product/".$product->id);?>';" class="position-relative overflow-hidden d-block bg-light ">
                                                        <img class="w-100 img-fluid position-relative z-index-10 " title="" src="<?php echo ADMINBASEURL.'/Upload/Products/'.$product->id.'/'.$product->image;?>" alt="<?php echo $product->name;?>">
                                                    </picture>
                                                    <div class="card-actions">
                                                        <?php if(isset($_SESSION['email'])){
                                                         $t = $this->db->where('product_id',$product->id)->where('user_id',$_SESSION['id'])->count_all_results('wishlist');
                                                         if($t>0){?>
                                                         <i name="add_wishlist" class="add_wishlist ri-heart-fill ri-lg " aria-hidden="true" data-productid="<?php echo $product->id;?>" data-user_id="<?php echo $_SESSION['id'];?>" ></i>
                                                         
                                                         <?php }else{?>
                                            
                                                        <i name="add_wishlist" class="add_wishlist ri-heart-line ri-lg " aria-hidden="true" data-productid="<?php echo $product->id;?>" data-user_id="<?php echo $_SESSION['id'];?>" ></i>
                                                        
                                                        <?php }
                                                        }else{ ?>
                                                        
                                                        <i onclick="swal({
                                                        title: 'NEED A SIGNED IN',
                                                        text: 'Please login your account and add in your wishlist',
                                                        icon: 'warning',
                                                        buttons: true,
                                                        dangerMode: true,
                                                        })
                                                        .then((willDelete) => {
                                                        if (willDelete) {
                                                        window.location.href='<?php echo base_url("user-login");?>'
                                                        } else {
                                                        swal('Its Okay, No Issue');
                                                        }
                                                        });" class="ri-heart-line ri-lg" ></i>
                                                        
                                                        <?php } ?>
                                                       
                                                    </div>
                                                </div>
                                                  <a class="text-decoration-none" href="<?php echo base_url('products/product/'.$product->id);?>">
                                                <div class="card-body px-0 text-center">
                                                   
                                                    <p class="mb-0 mx-2 mx-md-4 fs-p text-decoration-none d-block text-center"><?php echo sentenceCase(substr($product->name,0,25)."...");?></p>
                                                         <small><?php echo sentenceCase(substr($product->keywords,0,30)."...");?></small>
                                                        <p class="fw-bolder m-0 mt-2"><i class="fa fa-inr" aria-hidden="true"></i> <?php echo $product->price;?> &nbsp;&nbsp;<s style="font-size:12px;" class="lh-1 me-2"><span class="fw-bolder m-0"><i class="fa fa-inr" aria-hidden="true"></i><?php echo $product->price+100;?></span></s></p>
                                                       
                                                </div>
                                                </a>
                                            </div>
                                            <!--/ Card Product-->
                                        </div>
                                        <?php } ?>
                                    </div>
                                </div>
                                <!-- /Swiper Slide-->
                        
                                <!-- Swiper Slide-->
                                <div class="swiper-slide">
                                    <div class="row g-3">
                                        <?php foreach($products4_3 as $product) { ?>
                                        <div class="col-12 col-md-6">
                                            <!-- Card Product-->
                                            <div class="card position-relative w-100 h-100 card-listing hover-trigger">
                                                <div class="card-header">
                                                    <picture  style="cursor: pointer;" onClick="window.location.href='<?php echo base_url("products/product/".$product->id);?>';" class="position-relative overflow-hidden d-block bg-light">
                                                        <img class="w-100 img-fluid position-relative z-index-10" title="" src="<?php echo ADMINBASEURL.'/Upload/Products/'.$product->id.'/'.$product->image;?>" alt="<?php echo $product->name;?>">
                                                    </picture>
                                                    <div class="card-actions">
                                                       <?php if(isset($_SESSION['email'])){
                                                         $t = $this->db->where('product_id',$product->id)->where('user_id',$_SESSION['id'])->count_all_results('wishlist');
                                                         if($t>0){?>
                                                         <i name="add_wishlist" class="add_wishlist ri-heart-fill ri-lg " aria-hidden="true" data-productid="<?php echo $product->id;?>" data-user_id="<?php echo $_SESSION['id'];?>" ></i>
                                                         
                                                         <?php }else{?>
                                            
                                                        <i name="add_wishlist" class="add_wishlist ri-heart-line ri-lg " aria-hidden="true" data-productid="<?php echo $product->id;?>" data-user_id="<?php echo $_SESSION['id'];?>" ></i>
                                                        
                                                        <?php }
                                                        }else{ ?>
                                                        
                                                        <i onclick="swal({
                                                        title: 'NEED A SIGNED IN',
                                                        text: 'Please login your account and add in your wishlist',
                                                        icon: 'warning',
                                                        buttons: true,
                                                        dangerMode: true,
                                                        })
                                                        .then((willDelete) => {
                                                        if (willDelete) {
                                                        window.location.href='<?php echo base_url("user-login");?>'
                                                        } else {
                                                        swal('Its Okay, No Issue');
                                                        }
                                                        });" class="ri-heart-line ri-lg" ></i>
                                                        
                                                        <?php } ?>
                                                    </div>
                                                </div>
                                              <a class="text-decoration-none" href="<?php echo base_url('products/product/'.$product->id);?>">
                                                <div class="card-body px-0 text-center">
                                                    
                                                    <p class="mb-0 mx-2 mx-md-4 fs-p text-decoration-none d-block text-center"><?php echo sentenceCase(substr($product->name,0,25)."...");?></p>
                                                         <small><?php echo sentenceCase(substr($product->keywords,0,30)."...");?></small>
                                                        <p class="fw-bolder m-0 mt-2"><i class="fa fa-inr" aria-hidden="true"></i> <?php echo $product->price;?> &nbsp;&nbsp;<s style="font-size:12px;" class="lh-1 me-2"><span class="fw-bolder m-0"><i class="fa fa-inr" aria-hidden="true"></i><?php echo $product->price+100;?></span></s></p>
                                                       
                                                </div>
                                                </a>
                                            </div>
                                            <!--/ Card Product-->
                                        </div>
                                        <?php } ?>
                                    </div>
                                </div>
                                <!-- /Swiper Slide-->
                        
                            </div>
                        </div>                            <!-- / Swiper-->
        
                    </div>
                </div>
            </div>
            <br>
           <br>
        </div>
        </section>
        <?php  if(count($banner1)>0){ ?>
        <section class="position-relative">
        <h2 class="text-center display-5 fw-bold mb-3"><?php echo $banner1[0]['section_head'];?></h2>
                <center><hr style="width:70%;"></center>
        <h5 class="text-center mb-4"><?php echo $banner1[0]['section_description'];?></h5>

        
        <div class="w-100 h-100 bg-img-cover bg-pos-center-center hotspot-container" style="background-image: url(<?php echo ADMINBASEURL.'/Upload/HomeBanners/'.$banner1[0]['id'].'/'.$banner1[0]['image'];?>);">
           
         
            <div class="container py-lg-8 position-relative z-index-10 d-flex align-items-center" data-aos="fade-left">
                <div class="py-8 d-flex justify-content-end align-items-start align-items-lg-end flex-column col-lg-4 text-lg-end">
                    <p class="small fw-bolder text-uppercase tracking-wider mb-2 text-muted"><?php echo $banner1[0]['subtitle'];?></p>
                    <h2 class="display-5 fw-bold mb-3"><?php echo $banner1[0]['title'];?></h2>
                    <p class="lead d-none d-lg-block"><?php echo $banner1[0]['description'];?></p>
                    <a style="border-radius:20px;" href="<?php echo base_url('search-by-menus/1');?>" class="btn btn-dark bor1 btn-dark-chunky text-white mx-1 w-100 w-md-auto mb-2 mb-md-0"><span>Shop Now <i class="ri-arrow-right-line align-middle fw-bold"></i></span></a>

                </div>
            </div>
       
            
        </div>
      
        </section>
        
        <?php } ?>
        <div class="container-fluid">
            
    	  <div class="row ">
    		<div class="new-arrival ">
    		     <h2 class="text-center display-5 fw-bold mb-3 mt-3">BE BOLD, BE FEARLESS, BE RAXEDO</h2>
    		             <center><hr style="width:70%;"></center>
        <h5 class="text-center mb-4">Unleash your limits and achieve your goals with RAXEDO's Innovative and functional designs, perfect for any activity. <br>
Let's get it done, no matter the challenge, with RAXEDO's durable and versatile sports and activewear.

</h5>
        
               <div class="arrival-product">
                <div class="owl-carousel owl-theme" id="popular-product">
                       <?php foreach($products4_1 as $product){?>
                                  
                                  
                                    <div class="card position-relative h-100 card-listing hover-trigger" style="width:100%;">
                                                    <div class="card-header">
                                                        <picture  style="cursor: pointer;" onClick="window.location.href='<?php echo base_url("products/product/".$product->id);?>';" class="position-relative overflow-hidden d-block bg-light">
                                                            <img class="w-100 img-fluid position-relative z-index-10"  src="<?php echo ADMINBASEURL.'/Upload/Products/'.$product->id.'/'.$product->image;?>" alt="">
                                                        </picture>
                                                            <picture style="cursor: pointer;" onClick="window.location.href='<?php echo base_url("products/product/".$product->id);?>';" class="position-absolute z-index-20 start-0 top-0 hover-show bg-light img_width">
                                                                <img class="w-100 img-fluid" title="<?php echo $product->name;?>" src="<?php echo ADMINBASEURL.'/Upload/Products/'.$product->id.'/'.$product->image1;?>" alt="">
                                                            </picture>
                                                        <div class="card-actions">
                                                            <?php if(isset($_SESSION['email'])){
                                                                 $t = $this->db->where('product_id',$product->id)->where('user_id',$_SESSION['id'])->count_all_results('wishlist');
                                                                 if($t>0){?>
                                                                 <i name="add_wishlist" class="add_wishlist ri-heart-fill ri-lg " aria-hidden="true" data-productid="<?php echo $product->id;?>" data-user_id="<?php echo $_SESSION['id'];?>" ></i>
                                                                 
                                                                 <?php }else{?>
                                                    
                                                                <i name="add_wishlist" class="add_wishlist ri-heart-line ri-lg " aria-hidden="true" data-productid="<?php echo $product->id;?>" data-user_id="<?php echo $_SESSION['id'];?>" ></i>
                                                                
                                                                <?php }
                                                                }else{ ?>
                                                                
                                                                <i onclick="swal({
                                                                title: 'NEED A SIGNED IN',
                                                                text: 'Please login your account and add in your wishlist',
                                                                icon: 'warning',
                                                                buttons: true,
                                                                dangerMode: true,
                                                                })
                                                                .then((willDelete) => {
                                                                if (willDelete) {
                                                                window.location.href='<?php echo base_url("user-login");?>'
                                                                } else {
                                                                swal('Its Okay, No Issue');
                                                                }
                                                                });" class="ri-heart-line ri-lg" ></i>
                                                                
                                                                <?php } ?>
                                       
                                                           
                                                        </div>
                                                    </div>
                                                      <a class="text-decoration-none" href="<?php echo base_url('products/product/'.$product->id);?>">
                                                    <div class="card-body px-0 text-center">
                                                        
                                                        <p class="mb-0 mx-2 mx-md-4 fs-p text-decoration-none d-block text-center"><?php echo sentenceCase(substr($product->name,0,25))."...";?>
                                                        </p>
                                                            <small><?php echo sentenceCase(substr($product->keywords,0,30)."...");?></small>
                                                            <p class="fw-bolder m-0 mt-2"><i class="fa fa-inr" aria-hidden="true"></i> <?php echo $product->price;?>   &nbsp;&nbsp;<s style="font-size:12px;" class="lh-1 me-2"><span class="fw-bolder m-0"><i class="fa fa-inr" aria-hidden="true"></i><?php echo $product->price+100;?></span></s></p>
                                                           
                                                    </div>
                                                    </a>
                                                </div>             
                                  
                       <?php } ?>
                             
                      
                      </div>   
               </div>
            </div>
    	</div>
        </div>
        
        <br>
       <?php  if(count($banner2)>0){ ?>
        <section class="position-relative">
        <h2 class="text-center display-5 fw-bold mb-3"><?php echo $banner2[0]['section_head'];?></h2>
                <center><hr style="width:70%;"></center>
        <h5 class="text-center mb-4"><?php echo $banner2[0]['section_description'];?></h5>

        
        <div class="w-100 h-100 bg-img-cover bg-pos-center-center hotspot-container" style="background-image: url(<?php echo ADMINBASEURL.'/Upload/HomeBanners/'.$banner2[0]['id'].'/'.$banner2[0]['image'];?>);">
           
           
            <div class="container py-lg-8 position-relative z-index-10 d-flex align-items-center" data-aos="fade-left">
                <div class="py-8 d-flex justify-content-end align-items-start align-items-lg-end flex-column col-lg-4 text-lg-end">
                    <p class="small fw-bolder text-uppercase tracking-wider mb-2 text-muted"><?php echo $banner2[0]['subtitle'];?></p>
                    <h2 class="display-5 fw-bold mb-3"><?php echo $banner2[0]['title'];?></h2>
                    <p class="lead d-none d-lg-block"><?php echo $banner2[0]['description'];?></p>
                     <a style="border-radius:20px;" href="<?php echo base_url('search-by-menus/1');?>" class="btn btn-dark bor1 btn-dark-chunky text-white mx-1 w-100 w-md-auto mb-2 mb-md-0"><span>Shop Now <i class="ri-arrow-right-line align-middle fw-bold"></i></span></a>
                </div>
            </div>
        
            
        </div>
       
        </section>
        
        <?php } ?>
        <br>
<br>
        
        
        <section class="position-relative bg-dark">
       
        
        <div class=" py-lg-10">
            <div class="container text-white py-4 py-md-6">
                <div class="row g-5 align-items-center">
                    <div class="col-12 col-lg-4 justify-content-center d-flex justify-content-lg-start"
                        data-aos="fade-right" data-aos-delay="250">
                        <h3 class="fs-1 fw-bold mb-0 lh-1"><i class="ri-timer-flash-line align-bottom"></i>SALE ALERT<br><br>
                        <p class="" style="font-size: 28px;">Let’s Get Active with RAXEDO NEW YORK
</p><p class="">Performance Gear for the Win. Sale Happening Now!</p></h3>
                        
                       
                    </div>
                    <div class="col-12 col-lg-4 d-flex justify-content-center flex-column" data-aos="fade-up"
                        data-aos-delay="250">
                        <a href="<?php echo base_url('search-by-menus/2');?>"
                            class="btn btn-white border border-dark flex-grow-1 me-2 text-dark my-1"><span>
                                Men</span></a>
                        <a href="<?php echo base_url('search-by-menus/3');?>"
                            class="btn btn-white border border-dark flex-grow-1 me-2 text-dark my-1"><span>
                                Women</span></a>
                        <a href="<?php echo base_url('search-by-menus/4');?>"
                            class="btn btn-white border border-dark flex-grow-1 me-2 text-dark my-1"><span>
                                Unisex</span></a>
                        <a href="<?php echo base_url('search-by-menus/5');?>"
                            class="btn btn-white border border-dark flex-grow-1 me-2 text-dark my-1"><span>
                                View All</span></a>
                    </div>
                    <div class="col-12 col-lg-4 text-center text-lg-end" data-aos="fade-left"
                        data-aos-delay="250">
                        <p class="lead fw-bolder">Discount applied to products at checkout.</p>
                        <a class="text-white fw-bolder text-link-border border-2 border-white align-self-start pb-1 transition-all opacity-50-hover"
                            href="<?php echo base_url('search-by-menus/5');?>">Exclusions apply. Learn more <i
                                class="ri-arrow-right-line align-bottom"></i></a>
                    </div>
                </div>
            </div>
        </div>
        
        </section>
        
        <section>
        <div class="container">
            <br>
            <br>
            <h2 class="fs-1 fw-bold mb-3 text-center mb-5">Customer Latest Reviews</h2>
           
                <div class="row g-3">
                     <div class="col-md-4 offset-md-4">
                         <!-- Review Modal-->
                           <?php if(isset($_SESSION['email'])){ 
                           
                                $this->db->where('id',$_SESSION['id']);
                                
                                $query = $this->db->get('company_reviews');
                                
                                if ($query->num_rows() == 0){?>
                                
                                     <center>
                                <button type="button" class="btn btn-dark hover-lift-sm hover-boxshadow disable-child-pointer" data-bs-toggle="offcanvas" data-bs-target="#offcanvasReview" aria-controls="offcanvasReview">
                                Write A Review <i class="ri-discuss-line align-bottom ms-1"></i>
                            </button>
                            </center>
                                <?php 
                                }else{ ?>
                                 <center>
                                <button type="button" onclick="swal({
                                              title: 'already submitted',
                                              text: 'You have already submitted, Thank You again !',
                                              icon: 'warning',
                                              buttons: true,
                                              dangerMode: true,
                                            })
                                            .then((willDelete) => {
                                              if (willDelete) {
                                               
                                              }
                                            });"  class="btn btn-success hover-lift-sm hover-boxshadow disable-child-pointer" >You have submitted<i class="fa fa-check" aria-hidden="true"></i>
                            </button>
                            </center>
                                    
                               <?php
                               }
                             ?>
                           
                           
                           
                           <?php }else { ?>
                           
                          <center>
                                <button type="button" onclick="swal({
                                              title: 'NEED A SIGNED IN',
                                              text: 'Please login and write your review',
                                              icon: 'warning',
                                              buttons: true,
                                              dangerMode: true,
                                            })
                                            .then((willDelete) => {
                                              if (willDelete) {
                                                window.location.href='<?php echo base_url("user-login");?>'
                                              }
                                            });"  class="btn btn-warning hover-lift-sm hover-boxshadow disable-child-pointer" >Write A Review <i class="ri-discuss-line align-bottom ms-1"></i>
                            </button>
                          </center>
                           
                           <?php } ?>
                           
                     </div>
                 </div>
                <div class="row g-3" style="padding-top:20px;">
               <?php if(isset($reviews)){
                   foreach($reviews as $review){?>
               
                <div class="col-12 col-lg-4" data-aos="fade-left" data-aos-delay="150">
                    <div class="bg-light p-4 d-flex h-100 justify-content-start align-items-center flex-column text-center">
                        <p class="fw-bolder lead">
                       <?php echo $review->name;?></p>
                        <p class="mb-3"><?php echo substr($review->comment,0,80)." ...";?></p>
                        <small class="text-muted d-block mb-2 fw-bolder"><?php echo $review->date_now;?></small>
                         <small class="text-muted d-block mb-2 fw-bolder"><?php echo $review->location;?></small>
                        <!-- Review Stars Small-->
                        <div class="rating position-relative d-table">
                            <div class="position-absolute stars" style="width: <?php echo $review->rating*20;?>%">
                                <i class="ri-star-fill text-dark mr-1"></i>
                                <i class="ri-star-fill text-dark mr-1"></i>
                                <i class="ri-star-fill text-dark mr-1"></i>
                                <i class="ri-star-fill text-dark mr-1"></i>
                                <i class="ri-star-fill text-dark mr-1"></i>
                            </div>
                            <div class="stars">
                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                                <i class="ri-star-fill mr-1 text-muted opacity-25"></i>
                            </div>
                        </div>        </div>
                </div>
                <?php }
               } 
               ?>
            </div>
        </div>
        </section>
        
        </section>
        
        
        <div class="offcanvas offcanvas-end d-none" tabindex="-1" id="offcanvasReview">
        <div class="offcanvas-header d-flex align-items-center">
        <h5 class="offcanvas-title" id="offcanvasReviewLabel">Leave A Review for Company</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
        <!-- Review Form -->
          <div class="form-group mb-3 mt-2">
            <label class="form-label" for="formReviewName">Your Name*</label>
            <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" value="<?php  if(isset($user[0])){ echo $user[0]['fname']." ".$user[0]['lname'];}?>">
          </div>
          <div class="form-group mb-3 mt-2">
            <?php if(isset($_SESSION['email'])){ ?>
          
            <input type="hidden" class="form-control" id="user_id" name="user_id"  value="<?php if(isset($user[0])){ echo $user[0]['id'];}?>">
            
            <?php } ?>
          </div>
          <div class="form-group mb-3 mt-2">
               <label class="form-label" for="location">Your State Location</label>
            <select  class="form-control" id="location" name="location" >
                <option value="">Select your State</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Orissa">Orissa</option>
                <option value="Pondicherry">Pondicherry</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttaranchal">Uttaranchal</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="West Bengal">West Bengal</option>
                
                </select>
          </div>
          <div class="form-group mb-3 mt-2">
            <label class="form-label" for="formReviewTitle">Select one*</label>
            <select  class="form-control" id="rate" name="rate" >
                <option value="">Select Stars</option>
                <option value="1">Bad (1 Stars)</option>
                <option value="5">Best (5 Stars)</option>
                <option value="4">Very Good (4 Stars)</option>
                <option value="3">Good (3 Stars)</option>
                <option value="2">Okay (2 Stars)</option>
                </select>
          </div>
          <div class="form-group mb-3 mt-2">
            <label class="form-label" for="comment">Your Review*</label>
            <textarea class="form-control" name="comment" id="comment" cols="30" rows="3"
              placeholder="Write Your Review" ></textarea>
          </div>
          <button type="write_reveiw" name="" id="write_reveiw" class="btn btn-dark hover-lift hover-boxshadow">Submit Review</button>
        
        </div>
        </div>
        
        
        <script>
        $(document).ready(function(){
        
            $("#stopscrollwheel").bind("wheel", function() {
                return false;
            });
        
             $('#write_reveiw').click(function(){
                var name = $('#name').val();
                var user_id = $('#user_id').val();
                var rate = $('#rate').val();
                var location = $('#location').val();
                var comment = $('#comment').val();
                
              if(name ==""){
                    
               swal("Enter Your Name", "Enter your name", "warning");
               
                }else if(user_id ==""){
                    
               swal("Your are not logged In", "Please Relogin to your account try again", "warning");
                
                }else if(location ==""){
                    
                swal("Select Your Location", "Please select your state location", "warning");
                 
                }else if(rate ==""){
                    
                swal("Select your stars", "Select your Stars", "warning");
                
                }else if(comment ==""){
                    
                swal("Please Write Few Words", "Please write few words about product", "warning");
                 
                }else{
                    
                    
                   $.ajax({
                    url:"<?php echo site_url('User/Company_Review');?>",
                    method:"POST",
                    data:{name: name, user_id: user_id, rate: rate, comment:comment,location:location},
                    success:function(data)
                    {
                        if(data!=0){
                            
                            swal("Your Review has been submitted", "Thank your writing review", "success");
                             setTimeout(SlipFunction, 1500);
                            function SlipFunction() {
                                swal.close();
                                window.location.reload();
                                
                            }
                            
                            
                        }else{
                            swal("You have submit already", "You have already submitted a review.", "warning");
                             setTimeout(myGreeting, 1500);
                            function myGreeting() {
                                swal.close();
                                
                            }
                            
                        }
                        
                        
                    }
                   });
                }
             });
        
        
        });
        </script>
        
          <script>
    $('.owl-carousel').owlCarousel({
      nav: true,
      navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"]
     
    });
  </script>
  
          <script>
        $(document).ready(function() {
      

            $('#popular-product').owlCarousel({
                loop: true,
                margin: 30,
                responsiveClass: true,
                autoplay: true,
                center: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true,
                        dots: false,
                    },
                    600: {
                        items: 2,
                        nav: true,
                        dots: false,
                    },
                    1000: {
                        items: 4,
                        nav: true,
                        dots: false,
                    },
                    1200: {
                        items: 4,
                        dots: false,
                        nav: true

                    },
                    1600: {
                        items: 6,
                        dots: false,
                        nav: true

                    }
                }
            });

           
        });
    </script>
        <style>
            .titlebar {
              overflow: hidden;
            }
            .titlebar .next-back {
              float: right;
              margin: 12px 0;
            }
            .titlebar .next-back span a {
              font-size: 12px;
              text-transform: uppercase;
              font-family:uppercase;
              color: #222222;
            }
            .titlebar .next-back span a:hover {
              text-decoration: none;
              color: #888888;
            }
            .titlebar .next-back span {
              border-right: 1px solid #000;
              padding: 0 8px 0 5px;
              display: inline-block;
              line-height: 10px;
            }
            .titlebar .next-back span:last-child {
              border-right: none;
              padding-right: 0;
            }
          
            .carousel {
              margin-bottom: 0;
              padding: 0 0 30px 0;
            }
            
            .arrival-product .arrival-item ul {
              margin: 0;
              padding: 0;
            }
            .arrival-product .arrival-item ul li {
              float: left;
              list-style: none;
              width: 23%;
              overflow: hidden;
              margin-right: 2.6%;
            }
            .arrival-product .arrival-item ul li:last-child {
              margin-right: 0;
            }
        </style>
   <?php 
function sentenceCase($string) { 
    $sentences = preg_split('/([.?!]+)/', $string, -1,PREG_SPLIT_NO_EMPTY|PREG_SPLIT_DELIM_CAPTURE); 
    $newString = ''; 
    foreach ($sentences as $key => $sentence) { 
        $newString .= ($key & 1) == 0? 
            ucfirst(strtolower(trim($sentence))) : 
            $sentence.' '; 
    } 
    return trim($newString); 
}
?>


   <?php include('footer.php');?>