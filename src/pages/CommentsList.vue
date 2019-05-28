
<template>
  <div>
    <NavigationBar/>
		<h1 class="block-head">Comments</h1>
		<div class="container">
			<div>
				<ul class="comment-list">
					<li class="comment-item" :key="comment.id" v-for="comment in commentsAPI">
						<h3 class="comment-title"> {{ comment.title }} </h3>
						<p class="comment-body">{{ comment.comment }}</p>
						<button class="btn-details">Read more</button>
					</li>
				</ul>
			</div>
		</div>
    <BackBlock/>
    <FooterSection/>
  </div>
</template>

<script>
	
import NavigationBar from '../components/NavigationBar.vue';
import FooterSection from '../components/FooterSection.vue';
import BackBlock from '../components/BackBlock.vue';
	
import Vuex from 'vuex';
import Vue from 'vue';
	
import axios from 'axios';
	
	export default {
  components: {
    NavigationBar,
		BackBlock,
		FooterSection
  },
	data () {
		return{
			commentsAPI : null
		}
	},
	mounted() {
    axios
      .get('http://5ceafdae0c871100140bf7dc.mockapi.io/api/comments/comments')
      .then(response => (this.commentsAPI = response.data));
  }
}
	
</script>

<style scoped>
	.comment-list {
		list-style-type: none;
	}
	.comment-title, .comment-body {
		color: rgba(51, 51, 51, 0.7);
		font-family: sofiaproMedium;
	}
	.comment-title {
		font-size: 18px;
	}
	.comment-body {
		font-size: 14px;
	}
	.btn-details {
		border: 1px solid rgb(96, 227, 161);
		border-radius: 3px;
		background-color: rgb(96, 227, 161);
		width: 150px;
  	height: 55px;
		font-size: 12px;
		font-family: sofiaproMedium;
		font-weight: bold;
		text-align: center;
	}
	.block-head {
		color: rgb(17, 21, 24);
		font-family: sofiaproMedium;
		line-height: 1.029;
		font-size: 55px;
		font-weight: bold;
	}
</style>




