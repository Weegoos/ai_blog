<!-- eslint-disable indent -->
<template>
<div><homePageIntro /></div>
</template>

<script>
import homePageIntro from '../components/HomePage/HomePageIntro.vue'
export default {
  components: {
    homePageIntro
  },
  data () {}
}
</script>

<style lang="scss">
@import '../css/quasar.variables.scss';

.homePageContainer {
    background-color: $homePageBackground;

}

.homePageContainer q-layout {
    overflow-x: hidden;
    // overflow-y: scroll;
}

.homePageContainer section {
    display: inline-block;
    vertical-align: text-top;
    overflow-x: hidden;
}

.col .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: relative;
    left: 50px;
}

.homePageImg {
    width: auto;
    height: 400px;
}

.column_leftSide .leftSide__intro {
    color: #666666;
    font-size: 26px;
}

.column_leftSide .leftSide__headline {
    font-size: 66px;
    color: #FFFFFF;
}

.column_leftSide .leftSide__description {
    font-size: 22px;
    color: #7e7e81;
}

.column_leftSide_mobile .leftSide__intro {
    color: #666666;
    font-size: 18px;
}

.column_leftSide_mobile .leftSide__headline {
    font-size: 30px;
    color: #FFFFFF;
}

.column_leftSide_mobile .leftSide__description {
    font-size: 19px;
    color: #7e7e81;
}
</style>
