<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000
      },
      swiperList: [{
        id: '001',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1806/1c/4847ea66072c7b02.jpg_750x200_c32457fb.jpg'
      }, {
        id: '002',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/98/0a2e0bd8eb0c0802.png_750x200_0a34d4a8.png'
      }, {
        id: '003',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg'
      }, {
        id: '004',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1805/b6/2330c92270c7e802.jpg_750x200_425e2121.jpg'
      }, {
        id: '005',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1709/39/b98fdb3ee7478e02.jpg_750x200_be64b756.jpg'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 26.25%;
  background: #ccc;

  .swiper-img {
    width: 100%;
  }
}
</style>
