<!-- eslint-disable indent -->
<template>
  <div class="homePageContainer">
    <q-layout  view="lHh Lpr lFf">
          <q-toolbar :class="[$q.screen.width < 600 ? 'column' : 'q-pb-lg', 'row']">
        <section :class="[$q.screen.width > 600 ? 'column_leftSide col q-mr-lg-auto' : 'column_leftSide_mobile q-pa-sm']">
            <p class="leftSide__intro">Your Journey to Tomorrow Begins Here</p>
            <p class="leftSide__headline">Explore the Frontiers of Artificial Intelligence</p>
            <p class="leftSide__description">Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</p>
          <div class="row">
            <div class="col">batyr</div>
            <div class="col"></div>
            <div class="col"></div>
          </div>
        </section>
        <section class="col" style="color: white">
         <div>
          <img class="homePageImg" src="../../assets/abstract.png" alt="">
         </div>
            <span v-for="icons in icon" :key="icons.id">
              <img class="avatar" :src="icons.src" alt="">
            </span>
        </section>
    </q-toolbar>
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

.homePageContainer q-layout {
    overflow-x: hidden;
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
