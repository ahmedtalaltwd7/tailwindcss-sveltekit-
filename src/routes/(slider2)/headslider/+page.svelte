<script>
    import { Swiper, SwiperSlide } from "swiper/svelte";
  
    // Import Swiper styles
    import "swiper/css";
  
    import "swiper/css/effect-fade";
    import "swiper/css/navigation";
    import "swiper/css/pagination";
  
    import "./style.css";
  
    // import required modules
    import { EffectFade, Navigation, Pagination } from "swiper";
  </script>
  
  <Swiper
    spaceBetween={30}
    effect={"fade"}
    navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[EffectFade, Navigation, Pagination]}
    class="mySwiper"
  >
    <SwiperSlide
      ><img src="https://i.picsum.photos/id/1080/900/400.jpg?hmac=wiM1u2rRjgJyR44Bo2Sx0zzIN4GF_Rp383pJPLaf6GA" /></SwiperSlide
    ><SwiperSlide
      ><img src="https://i.picsum.photos/id/1080/900/400.jpg?hmac=wiM1u2rRjgJyR44Bo2Sx0zzIN4GF_Rp383pJPLaf6GA" /></SwiperSlide
    ><SwiperSlide
      ><img src="https://i.picsum.photos/id/1080/900/400.jpg?hmac=wiM1u2rRjgJyR44Bo2Sx0zzIN4GF_Rp383pJPLaf6GA" /></SwiperSlide
    ><SwiperSlide
      ><img src="https://i.picsum.photos/id/1080/900/400.jpg?hmac=wiM1u2rRjgJyR44Bo2Sx0zzIN4GF_Rp383pJPLaf6GA" /></SwiperSlide
    >
  </Swiper>