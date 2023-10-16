<template>
  <div class="carousel">
    <swiper :options="swiperOptions" @slideChange="handleSlideChange">
      <swiper-slide v-for="(item, index) in items" :key="index">
        <!-- Contenido de cada diapositiva (slide) -->
        <img :src="item.image" alt="Slide Image">
        <h2>{{ item.title }}</h2>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 1,
      },
      items: [
        {
          title: 'Slide 1',
          image: require('@/assets/images/HeaderImage.jpg'),
        },
        {
          title: 'Slide 2',
          image: require('@/assets/images/DefaultUser.jpg'),
        },
        {
          title: 'Slide 3',
          image: require('@/assets/images/HeaderImage.jpg'),
        },
      ],
      activeSlide: 0,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    handleSlideChange() {
      // Obtén el índice de la diapositiva activa
      const activeIndex = this.$refs.mySwiper.swiper.activeIndex;

      // Activa el temporizador para cambiar a la siguiente diapositiva después de 3 segundos
      setTimeout(() => {
        this.$refs.mySwiper.swiper.slideTo(activeIndex + 1);
      }, 3000);
    },
  },
};
</script>

<style scoped>
.carousel {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

/* Estilos adicionales según tu diseño */
</style>
