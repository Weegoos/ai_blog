<!-- eslint-disable vue/multi-word-component-names -->
<template >
    <div>
        <q-toolbar class="row flex flex-center adds">
     <span class="q-mr-sm addsText">Subscribe to AI Plus</span>
     <div class="">
      <q-btn>
        <span class="addsBtn">&#8593;</span>
      <q-tooltip color="warning-s">Link</q-tooltip>
    </q-btn>
     </div>
    </q-toolbar>
    <q-toolbar class="justify-between bg-dark q-pa-sm">
        <div class="justify-start">
            <img class="avatar q-mr-md" src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            <span class="text-capitalize">Future Tech</span>
        </div>
        <div :class="[$q.screen.width < 600 ? 'mobile-only' : '', 'desktop-only']">
            <q-btn to="/" flat class="text-capitalize">Home</q-btn>
            <q-btn to="/about" flat class="text-capitalize">News</q-btn>
            <q-btn flat class="text-capitalize">Podcasts</q-btn>
            <q-btn flat class="text-capitalize">Resources</q-btn>
        </div>
        <div :class="[$q.screen.width < 600 ? 'mobile-only' : '', 'desktop-only']">
            <q-btn flat class="text-capitalize contactUsBtn">Contact Us</q-btn>
        </div>
        <div :class="[$q.screen.width < 600 ? 'mobile-only' : 'desktop-hide']">
            <q-btn flat round dense icon="menu" class="menu" />
        </div>
    </q-toolbar>
    </div>

</template>

<script>
export default {

}
</script>
<style lang="scss">
.text-capitalize{
  color: white
}
.addsBtn{
  rotate: 45deg;
  font-size: 16px;
  color: #FFD11A
}

.avatar{
  width: 40px;
  vertical-align: middle;
  color: white;
}

.contactUsBtn {
  background-color: $contact-us;
  color: $contact-us-color;
}

.addsText{
  color: $addsColor;
}

.menu{
  color: white;
}
</style>
