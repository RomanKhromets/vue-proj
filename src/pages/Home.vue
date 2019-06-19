<template>
  <div>
    <NavigationBar/>
    <MainSection/>
    <AboutUsSection/>
    <WriteComment/>
    <FooterSection/>
  </div>
</template>

<script>

import NavigationBar from '../components/NavigationBar.vue';
import MainSection from '../components/MainSection.vue';
import AboutUsSection from '../components/AboutUsSection.vue';
import WriteComment from '../components/WriteComment.vue';
import FooterSection from '../components/FooterSection.vue';

export default {
  components: {
	NavigationBar,
	MainSection,
	AboutUsSection,
	WriteComment,
	FooterSection
  }
}
</script>