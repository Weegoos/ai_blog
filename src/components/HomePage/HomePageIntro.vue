<!-- eslint-disable indent -->
<template>
  <div class="homePageContainer q-pb-lg vertical-top">
    <q-layout  view="lHh Lpr lFf">
          <q-toolbar :class="[$q.screen.width < 600 ? 'column' : 'q-pb-lg', 'row']" style="align-items: flex-start;">
        <section :class="[$q.screen.width > 600 ? 'column_leftSide col q-mr-lg-auto q-pa-md' : 'column_leftSide_mobile q-pa-sm']">
            <p class="leftSide__intro">Your Journey to Tomorrow Begins Here</p>
            <p class="leftSide__headline">Explore the Frontiers of Artificial Intelligence</p>
            <p class="leftSide__description">Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</p>
          <div class="row">
            <div class="col col_stats q-px-md q-pt-md">
                <p class="statsHeadline">300<span class="plus">+</span></p>
                <p class="statsDescription">Resources available</p>
            </div>
            <div class="col col_stats q-px-md q-pt-md">
                <p class="statsHeadline">12k<span class="plus">+</span></p>
                <p class="statsDescription">Total Downloads</p>
            </div>
            <div class="col col_stats q-px-md q-pt-md">
                <p class="statsHeadline">10k<span class="plus">+</span></p>
                <p class="statsDescription">Active Users</p>
            </div>
          </div>
        </section>
        <section class="col statsCol" style="color: white">
         <div>
          <img class="homePageImg" src="../../assets/abstract.png" alt="">
         </div>
            <div class="userAvatar">
                <span v-for="icons in icon" :key="icons.id" class="icons">
              <img class="avatar" :src="icons.src" alt="">
            </span>
            </div>
            <div class="addInfoForStats">
                <p style="font-size: 30px;">Explore 1000+ resources</p>
                <p style="font-size: 24px; color: #98989A">Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                <q-btn class="text-capitalize q-ml-md" outline  label="Explore Resources"/>
            </div>
        </section>
    </q-toolbar>
   <div class="overallStats">
    <q-toolbar class="overallToolbar" :class="[$q.screen.width < 600 ? 'column' : 'q-m-lg', 'row']">
        <div class="col  q-px-md q-pt-md" :class="[$q.screen.width < 600 ? 'colNews' : 'rowNews']">
            <p class="subcontainerHeadline">Latest News Updates</p>
            <p class="subcontainerDesc">Stay Current</p>
            <p class="subContainerStats">Over 1,000 articles published monthly</p>
        </div>
        <div class="col  q-px-md q-pt-md" :class="[$q.screen.width < 600 ? 'col colNews' : 'col rowNews']">
            <p class="subcontainerHeadline">Expert Contributors</p>
            <p class="subcontainerDesc">Trusted Insights</p>
            <p class="subContainerStats">50+ renowned AI experts on our team</p>
        </div>
        <div class=" q-px-md q-pt-md col" :class="[$q.screen.width < 600 ? 'col colNews' : 'col rowNews']">
            <p class="subcontainerHeadline">Global Readership</p>
            <p class="subcontainerDesc">Worldwide Impact</p>
            <p class="subContainerStats">2 million monthly readers</p>
        </div>
    </q-toolbar>
   </div>
    </q-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      icon: [
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          id: 2,
          src: 'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          id: 3,
          src: 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          id: 4,
          src: 'https://images.unsplash.com/photo-1466112928291-0903b80a9466?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../../css/quasar.variables.scss';
.homePageContainer {
    background-color: #141414;

}
.homePageContainer section {
    display: inline-block !important;
    vertical-align: text-top !important;
    overflow-x: hidden;
}

.col .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
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
.col_stats{
    color: white;
    border: solid #262626 1px;
}
.statsHeadline{
    color: #FFFFFF;
    font-size: 35px;
}
.plus{
    color: #FFD11A;
}
.statsDescription{
    color: #98989A;
}
.col .userAvatar{
    border: solid #262626 1px;
    width: 240px;
    padding: 7px;
    border-radius: 45px;
    text-align: center;
}
.addInfoForStats p{
    position: relative;
    left: 15px;
}
.addInfoForStats .text-capitalize{
    color: #98989A;
    font-size: 21px;
}
.overallStats{
    margin-top: 1rem;
}
.overallToolbar{
    align-items: flex-start;
}
.overallStats .colNews{
   width: 100%;
   border: #262626 1px solid;
    display: block;
}
.rowNews{
   border: #262626 1px solid;
    min-height:50px;

}

.subcontainerHeadline{
    font-size: 25px;
    color: #FFFFFF;
}

.subcontainerDesc, .subContainerStats{
    font-size: 20px;
    color: #7E7E81;
}
</style>
