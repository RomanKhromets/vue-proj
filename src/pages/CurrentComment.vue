
<template>
  <div>
    <NavigationBar/>
		<h1 class="block-head">Comment</h1>
    <BackBlock/>
    <FooterSection/>
  </div>
</template>

<script>
	
import NavigationBar from '../components/NavigationBar.vue';
import FooterSection from '../components/FooterSection.vue';
import BackBlock from '../components/BackBlock.vue';
	
//import Vue from 'vue';
	
//import axios from 'axios';
	
export default {
	components: {
		NavigationBar,
		BackBlock,
		FooterSection
	  },
	data () {
		return {
			
		}
	}
}
</script>

<style scoped>
	
</style>

