<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="showIcons">
      <!-- slides -->
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class='icon-img-content' :src="item.iconUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
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
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: '.swiper-pagination',
        loop: true
        // autoplay: 5000
      }
      // iconList: [{
      //   id: '001',
      //   iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
      //   desc: '热门景点'
      // },
      // {
      //   id: '002',
      //   iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
      //   desc: '必游榜单'
      // },
      // {
      //   id: '003',
      //   iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
      //   desc: '踏青赏花'
      // },
      // {
      //   id: '004',
      //   iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
      //   desc: '一日游'
      // },
      // {
      //   id: '005',
      //   iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
      //   desc: '动植物园'
      // },
      // {
      //   id: '006',
      //   iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
      //   desc: '故宫'
      // },
      // {
      //   id: '007',
      //   iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
      //   desc: '主题乐园'
      // },
      // {
      //   id: '008',
      //   iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png',
      //   desc: 'Q+精选'
      // },
      // {
      //   id: '009',
      //   iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
      //   desc: '演出'
      // },
      // {
      //   id: '010',
      //   iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
      //   desc: '自然风光'
      // },
      // {
      //   id: '011',
      //   iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
      //   desc: '名胜古迹'
      // },
      // {
      //   id: '012',
      //   iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/dd/cce1231836f10a02.png',
      //   desc: '周边游'
      // },
      // {
      //   id: '013',
      //   iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
      //   desc: '城市风光'
      // },
      // {
      //   id: '014',
      //   iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
      //   desc: '游乐场'
      // }]
    }
  },
  computed: {
    // 计算属性
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showIcons () {
      return this.iconList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}
.wrapper >>> .swiper-pagination-bullet-active {
  background: bue;
}

.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;

  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0.625rem;
      right: 0;
      bottom: 1.375rem;
      box-sizing: border-box;
      padding: 0.625rem;

      .icon-img-content {
        display: block;
        margin: 0 atuo;
        height: 100%;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 1.375rem;
      line-height: 1.375rem;
      text-align: center;
      color: $darkTextColor;
      font-size: 14px;
    }
  }
}
</style>
