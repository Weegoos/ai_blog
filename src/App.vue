<template>
 <div>
  <div>
  <headerComponent />
 </div>
 <div class="pages">
  <router-view />
 </div>
 <div>
  <footerComponent />
 </div>
 </div>
</template>

<script>
import headerComponent from 'pages/Header.vue'
import footerComponent from 'pages/Footer.vue'

export default {
  components: {
    headerComponent,
    footerComponent
  },
  setup () {
    return {
      menuList: [
        {
          id: 1,
          label: 'batyr'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import 'css/quasar.variables.scss';
.adds{
  background-color: #141414;
}
</style>
