<script>
    import { Swiper, SwiperSlide } from "swiper/svelte";
  
    // Import Swiper styles
    import "swiper/css";
  
    import "swiper/css/pagination";
    import "swiper/css/navigation";
    import "./style.css";
  
  
    // import required modules
    import { Pagination, Navigation } from "swiper";
  </script>
  <Swiper
  slidesPerView={1}
  spaceBetween={10}
  pagination={{
    clickable: true,
  }}
  breakpoints={{
    "640": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "780": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "1024": {
      slidesPerView: 4,
      spaceBetween: 60,
    },
    "1900": {
      slidesPerView: 5,
      spaceBetween: 60,
    },
  }}
  navigation={true}
  modules={[Pagination, Navigation]}
  class="mySwiper"
>


    <SwiperSlide>     
           <div class="card w-80 bg-base-100 shadow-xl hover:bg-red-500 transition-colors duration-500  xl:w-80 lg:w-80 md:w-80  sm:w-full sm2:w-full">
       
          
        <figure><img src=https://res.cloudinary.com/moteefe/image/upload/c_fill,h_233,q_auto:best,w_259/c_fill,fl_no_overflow,h_233,l_artwork:image:wc7g0brziysifwr2tsdq,w_233/fl_layer_apply.no_overflow,g_xy_center,x_130,y_117/c_fit,g_north_west,h_480,l_v1542652109:mockup:image:lcoyya7ozkjzkrig0f0t,w_480,x_-117,y_-195/b_rgb:ed1c24/f_auto/dpr_1.0,f_auto,q_auto:sensitive/1px.png
 alt="Shoes" /></figure>

        <div class="card-body">
          <div class="rating rating-sm">
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
          </div>
          <h2 class="card-title">
            Shoes!
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div> 
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    
    </SwiperSlide>



    <SwiperSlide>        <div class="card w-80 bg-base-100 shadow-xl hover:bg-red-500 transition-colors duration-500  xl:w-80 lg:w-80 md:w-80  sm:w-full sm2:w-full">
       
          
        <figure><img src=https://res.cloudinary.com/moteefe/image/upload/c_fill,h_233,q_auto:best,w_259/c_fill,fl_no_overflow,h_233,l_artwork:image:wc7g0brziysifwr2tsdq,w_233/fl_layer_apply.no_overflow,g_xy_center,x_130,y_117/c_fit,g_north_west,h_480,l_v1542652109:mockup:image:lcoyya7ozkjzkrig0f0t,w_480,x_-117,y_-195/b_rgb:ed1c24/f_auto/dpr_1.0,f_auto,q_auto:sensitive/1px.png
 alt="Shoes" /></figure>

        <div class="card-body">
          <div class="rating rating-sm">
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
          </div>
          <h2 class="card-title">
            Shoes!
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div> 
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    
    </SwiperSlide>



    <SwiperSlide>        <div class="card w-80 bg-base-100 shadow-xl hover:bg-red-500 transition-colors duration-500  xl:w-80 lg:w-80 md:w-80  sm:w-full sm2:w-full">
       
          
        <figure><img src=https://res.cloudinary.com/moteefe/image/upload/c_fill,h_233,q_auto:best,w_259/c_fill,fl_no_overflow,h_233,l_artwork:image:wc7g0brziysifwr2tsdq,w_233/fl_layer_apply.no_overflow,g_xy_center,x_130,y_117/c_fit,g_north_west,h_480,l_v1542652109:mockup:image:lcoyya7ozkjzkrig0f0t,w_480,x_-117,y_-195/b_rgb:ed1c24/f_auto/dpr_1.0,f_auto,q_auto:sensitive/1px.png
 alt="Shoes" /></figure>

        <div class="card-body">
          <div class="rating rating-sm">
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
          </div>
          <h2 class="card-title">
            Shoes!
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div> 
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    
    </SwiperSlide>



    <SwiperSlide>        <div class="card w-80 bg-base-100 shadow-xl hover:bg-red-500 transition-colors duration-500  xl:w-80 lg:w-80 md:w-80  sm:w-full sm2:w-full">
       
          
        <figure><img src=https://res.cloudinary.com/moteefe/image/upload/c_fill,h_233,q_auto:best,w_259/c_fill,fl_no_overflow,h_233,l_artwork:image:wc7g0brziysifwr2tsdq,w_233/fl_layer_apply.no_overflow,g_xy_center,x_130,y_117/c_fit,g_north_west,h_480,l_v1542652109:mockup:image:lcoyya7ozkjzkrig0f0t,w_480,x_-117,y_-195/b_rgb:ed1c24/f_auto/dpr_1.0,f_auto,q_auto:sensitive/1px.png
 alt="Shoes" /></figure>

        <div class="card-body">
          <div class="rating rating-sm">
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
          </div>
          <h2 class="card-title">
            Shoes!
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div> 
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    
    </SwiperSlide>




    <SwiperSlide>        <div class="card w-80 bg-base-100 shadow-xl hover:bg-red-500 transition-colors duration-500  xl:w-80 lg:w-80 md:w-80  sm:w-full sm2:w-full">
       
          
        <figure><img src=https://res.cloudinary.com/moteefe/image/upload/c_fill,h_233,q_auto:best,w_259/c_fill,fl_no_overflow,h_233,l_artwork:image:wc7g0brziysifwr2tsdq,w_233/fl_layer_apply.no_overflow,g_xy_center,x_130,y_117/c_fit,g_north_west,h_480,l_v1542652109:mockup:image:lcoyya7ozkjzkrig0f0t,w_480,x_-117,y_-195/b_rgb:ed1c24/f_auto/dpr_1.0,f_auto,q_auto:sensitive/1px.png
 alt="Shoes" /></figure>

        <div class="card-body">
          <div class="rating rating-sm">
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
          </div>
          <h2 class="card-title">
            Shoes!
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div> 
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    
    </SwiperSlide>





    <SwiperSlide>        <div class="card w-80 bg-base-100 shadow-xl hover:bg-red-500 transition-colors duration-500  xl:w-80 lg:w-80 md:w-80  sm:w-full sm2:w-full">
       
          
        <figure><img src=https://res.cloudinary.com/moteefe/image/upload/c_fill,h_233,q_auto:best,w_259/c_fill,fl_no_overflow,h_233,l_artwork:image:wc7g0brziysifwr2tsdq,w_233/fl_layer_apply.no_overflow,g_xy_center,x_130,y_117/c_fit,g_north_west,h_480,l_v1542652109:mockup:image:lcoyya7ozkjzkrig0f0t,w_480,x_-117,y_-195/b_rgb:ed1c24/f_auto/dpr_1.0,f_auto,q_auto:sensitive/1px.png
 alt="Shoes" /></figure>

        <div class="card-body">
          <div class="rating rating-sm">
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
          </div>
          <h2 class="card-title">
            Shoes!
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div> 
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    
    </SwiperSlide>




    <SwiperSlide>        <div class="card w-80 bg-base-100 shadow-xl hover:bg-red-500 transition-colors duration-500  xl:w-80 lg:w-80 md:w-80  sm:w-full sm2:w-full">
       
          
        <figure><img src=https://res.cloudinary.com/moteefe/image/upload/c_fill,h_233,q_auto:best,w_259/c_fill,fl_no_overflow,h_233,l_artwork:image:wc7g0brziysifwr2tsdq,w_233/fl_layer_apply.no_overflow,g_xy_center,x_130,y_117/c_fit,g_north_west,h_480,l_v1542652109:mockup:image:lcoyya7ozkjzkrig0f0t,w_480,x_-117,y_-195/b_rgb:ed1c24/f_auto/dpr_1.0,f_auto,q_auto:sensitive/1px.png
 alt="Shoes" /></figure>

        <div class="card-body">
          <div class="rating rating-sm">
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
          </div>
          <h2 class="card-title">
            Shoes!
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div> 
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    
    </SwiperSlide>



    <SwiperSlide>        <div class="card w-80 bg-base-100 shadow-xl hover:bg-red-500 transition-colors duration-500  xl:w-80 lg:w-80 md:w-80  sm:w-full sm2:w-full">
       
          
        <figure><img src="https://res.cloudinary.com/moteefe/image/upload/c_fill,h_233,q_auto:best,w_259/c_fill,fl_no_overflow,h_233,l_artwork:image:wc7g0brziysifwr2tsdq,w_233/fl_layer_apply.no_overflow,g_xy_center,x_130,y_117/c_fit,g_north_west,h_480,l_v1542652109:mockup:image:lcoyya7ozkjzkrig0f0t,w_480,x_-117,y_-195/b_rgb:ed1c24/f_auto/dpr_1.0,f_auto,q_auto:sensitive/1px.png
" alt="Shoes" /></figure>

        <div class="card-body">
          <div class="rating rating-sm">
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
          </div>
          <h2 class="card-title">
            Shoes!
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div> 
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    
    </SwiperSlide>


    <SwiperSlide>        <div class="card w-80 bg-base-100 shadow-xl hover:bg-red-500 transition-colors duration-500  xl:w-80 lg:w-80 md:w-80  sm:w-full sm2:w-full">
       
          
        <figure><img src=https://res.cloudinary.com/moteefe/image/upload/c_fill,h_233,q_auto:best,w_259/c_fill,fl_no_overflow,h_233,l_artwork:image:wc7g0brziysifwr2tsdq,w_233/fl_layer_apply.no_overflow,g_xy_center,x_130,y_117/c_fit,g_north_west,h_480,l_v1542652109:mockup:image:lcoyya7ozkjzkrig0f0t,w_480,x_-117,y_-195/b_rgb:ed1c24/f_auto/dpr_1.0,f_auto,q_auto:sensitive/1px.png
 alt="Shoes" /></figure>

        <div class="card-body">
          <div class="rating rating-sm">
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
          </div>
          <h2 class="card-title">
            Shoes!
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div> 
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    
    </SwiperSlide>





  </Swiper>

