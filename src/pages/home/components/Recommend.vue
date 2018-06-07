<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
        <img :src="item.imgUrl" alt="" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  data () {
    return {
      // recommendList: [{
      //   id: '001',
      //   imgUrl: 'https://imgs.qunarzz.com/sight/p0/1707/57/5729585581b6732fa3.water.jpg_200x200_85298361.jpg',
      //   title: '大连森林动物园',
      //   desc: '浪漫大连首站，大连森林动物园'
      // },
      // {
      //   id: '002',
      //   imgUrl: 'https://imgs.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_200x200_4ab5da75.jpg',
      //   title: '大连亚圣海洋世界',
      //   desc: '浪漫大连首站，大连森林动物园'
      // },
      // {
      //   id: '003',
      //   imgUrl: 'https://imgs.qunarzz.com/sight/p0/1703/94/944fc059260bd728a3.water.jpg_200x200_742cb84f.jpg',
      //   title: '海昌发现王国',
      //   desc: '浪漫大连首站，大连森林动物园'
      // }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/varibles.styl'

.title {
  margin-top: 0.3125rem;
  line-height: 2.75rem;
  background: #eee;
  text-indent: center;
  font-size: 16px;
  padding-left: 0.3125rem;
}

.item {
  overflow: hidden;
  display: flex;
  height: 6.125rem;

  .item-img {
    width: 5.375rem;
    height: 5.375rem;
    padding: 0.125rem;
  }

  .item-info {
    flex: 1;
    padding: 0.125rem;
    min-width: 0;

    .item-title {
      line-height: 1.5625rem;
      font-size: 1rem;
      ellipsis: ellipsis();
    }

    .item-desc {
      line-height: 1.875rem;
      color: #ccc;
      ellipsis: ellipsis();
    }

    .item-button {
      line-height: 1.25rem;
      margin-top: 0.16rem;
      background: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.6rem;
      color: $whiteTextColor;
      width: 5.375rem;
    }
  }
}
</style>
