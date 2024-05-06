<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="footerContainer q-pa-sm row">
    <section :class="[$q.screen.width < 600 ? 'row navleft' : 'justify-between row navInline']">
      <div class="col">
      <q-btn class="footerHeadline" no-caps flat label="Home" />
      <div >
        <q-btn class="footerBtn" no-caps flat label="Features" />
      <q-btn class="footerBtn" no-caps flat label="Blogs" />
      <q-btn class="footerBtn" no-caps flat label="Resources" />
      <q-btn class="footerBtn" no-caps flat label="Testimonials" />
      <q-btn class="footerBtn" no-caps flat label="Contact Us" />
      <q-btn class="footerBtn" no-caps flat label="Newsletter" />
      </div>
    </div>
    <div class="nav col">
      <q-btn class="footerHeadline" no-caps flat label="News" />
      <div class="">
        <q-btn class="footerBtn" no-caps flat label="Trending Stories" />
      <q-btn class="footerBtn" no-caps flat label="Featured Videos" />
      <q-btn class="footerBtn" no-caps flat label="Technology" />
      <q-btn class="footerBtn" no-caps flat label="Health" />
      <q-btn class="footerBtn" no-caps flat label="Politics" />
      <q-btn class="footerBtn" no-caps flat label="Environment" />
      </div>
    </div>
    </section>
    <section :class="[$q.screen.width < 600 ? 'row navleft' : 'row navInline']">
      <div class="col">
        <q-btn class="footerHeadline" no-caps flat label="Blogs" />

          <q-btn class="footerBtn" no-caps flat label="Quantum Computing" />
          <q-btn class="footerBtn" no-caps flat label="AI Ethics" />
          <q-btn class="footerBtn" no-caps flat label="Space Exploration" />
          <q-btn class="footerBtn" no-caps flat label="Biotechnology" />
          <q-btn class="footerBtn" no-caps flat label="Renewable Energy" />
          <q-btn class="footerBtn" no-caps flat label="Biohacking" />
      </div>
        <div class="navRight col">
          <q-btn class="footerHeadline" no-caps flat label="Podcasts" />
          <q-btn class="footerBtn" no-caps flat label="AI Revolution" />
          <q-btn class="footerBtn" no-caps flat label="AI Revolution New" />
          <q-btn class="footerBtn" no-caps flat label="TechTalk AI" />
          <q-btn class="footerBtn" no-caps flat label="AI Conversations" />
        </div>
    </section>
  <section class="">
    <div class="col">
      <q-btn class="footerHeadline" no-caps flat label="Resources" />
      <q-btn class="footerBtn" outline  no-caps flat label="Whitepapers" />
      <q-btn class="footerBtn" no-caps flat label="Ebooks" />
      <q-btn class="footerBtn" no-caps flat label="Reports" />
      <q-btn class="footerBtn" no-caps flat label="Research Papers" />
    </div>
  </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footerContainer {
  background-color: #262626;
  color: #FFFFFF;
}

.footerContainer .footerHeadline{
  font-size: 20px;
  font-weight: 500;
}

.footerBtn{
  color: #666666;
  display: block;
  /* width: 200px; */
  /* text-align: start;
  border: teal solid 1px; */
}

div{
  overflow-x: hidden;
}

.navleft{
  width: 400px;
}

.navInline{
  width: 820px;
}
</style>
