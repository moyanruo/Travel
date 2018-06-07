<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" :alt="item.title" class="item-img">
        </div>
        <div class="item-info">
          <div class="item-title">{{item.title}}</div>
          <div class="item-desc">{{item.desc}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [{
        id: '001',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/b7/8a08a1023062b3.jpg_r_640x214_d7cb475c.jpg',
        title: '最赞的海滨浴场',
        desc: '跳进海里，享受铺天盖地的清凉吧'
      }, {
        id: '002',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/7f/fa4eb0ca72409d.jpg_r_640x214_2f2a860e.jpg',
        title: '大连必游TOP10',
        desc: '爱上北方的碧海蓝天'
      }, {
        id: '003',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1507/6b/70d17d828d87e1.jpg_r_640x214_6a995270.jpg',
        title: '周末游首选',
        desc: '当地人经常出没的地方'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title {
  margin-top: 0.3125rem;
  line-height: 2.75rem;
  background: #eee;
  text-indent: center;
  font-size: 16px;
  padding-left: 0.3125rem;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 33.9%;
}

.item-img {
  width: 100%;
}

.item-info {
  padding: 0.125rem;

  .item-title {
    line-height: 1.5625rem;
    font-size: 0.875rem;
    ellipsis: ellipsis();
  }

  .item-desc {
    line-height: 1.875rem;
    color: #ccc;
    ellipsis: ellipsis();
    font-size: 0.875rem;
  }
}
</style>
