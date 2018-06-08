<template>
  <div>
    <router-link class="header-abs" to="/" tag="div" v-show="showAbs">
      <span class="iconfont header-abs-back">&#xe624;</span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link to='/'>
        <span class="iconfont header-fixed-back">&#xe624;</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top >= 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header-abs {
  position: absolute;
  left: 0.3rem;
  top: 0.3rem;
  width: 2.3rem;
  height: 2.3rem;
  line-height: 2.3rem;
  text-align: center;
  border-radius: 3rem;
  background: rgba(0, 0, 0, 0.5);

  .header-abs-back {
    color: $whiteTextColor;
    font-size: 1rem;
    font-weight: bold;
  }
}

.header-fixed {
  position: fixed;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: $whiteTextColor;
  background: $bgColor;
  font-size: 1rem;
  left: 0;
  top: 0;
  width: 100%;

  .header-fixed-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 3rem;
    text-align: center;
    font-size: 1rem;
    color: $whiteTextColor;
  }
}
</style>
