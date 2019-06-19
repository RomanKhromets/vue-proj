
<template>
  <div>
    <NavigationBar/>
		<div class="wrap">
			<h2 class="title">{{ comments.title }}</h2>
			<p class="body">{{ comments.comment }}</p>
		</div>	
    <BackBlock/>
    <FooterSection/>
  </div>
</template>

<script>
	
import NavigationBar from '../components/NavigationBar.vue';
import FooterSection from '../components/FooterSection.vue';
import BackBlock from '../components/BackBlock.vue';
	
import axios from 'axios';
	
export default {
	components: {
		NavigationBar,
		BackBlock,
		FooterSection
	  },
	data () {
		return {
			id: (function() {
						var pathname = location.pathname,
								arr = pathname.split("/"),
								id = arr[arr.length-1];
						return id;
					})(),
			comments: ""
		}
	},
	mounted() {
		axios
		  .get('http://5ceafdae0c871100140bf7dc.mockapi.io/api/comments/comments/' + this.id)
		  .then(response => (this.comments = response.data))
			.catch(error => console.log(error))
	}
}
</script>

<style scoped>
	.wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.title , .body {
		max-width: 1024px;
		width: 75%;
		color: rgba(51, 51, 51, 0.7);
		font-family: sofiaproMedium;
		text-align: justify;
	}
	.title {
		font-size: 28px;
	}
	.body {
		font-size: 18px;
	}
</style>

