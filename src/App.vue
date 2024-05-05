<template>
 <div>
  <div>
  <headerComponent />
 </div>
 <div class="pages">
  <router-view />
 </div>
 </div>
</template>

<script>
import headerComponent from 'pages/Header.vue'

export default {
  components: {
    headerComponent
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
