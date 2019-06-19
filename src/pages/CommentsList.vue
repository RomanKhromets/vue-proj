
<template>
  <div>
    <NavigationBar/>
		<h1 class="block-head">Comments</h1>
		<div class="container">
			<div>
				<ul class="comment-list">
					<li class="comment-item" :key="comment.id" v-for="comment in commentsAPI">
						<div class="comment_wrap">
							<h3 class="comment-title"> {{ comment.title }} </h3>
							<p class="comment-body">{{ comment.comment }}</p>
						</div>
						<button class="btn-details" @click="viewDetails(comment.id)">Read more</button>
						<div class="trash" :class="trashSize" @click="deleteData(comment.id)" :key="comment.id" >
							<img src="../../public/assets/icons/trash.svg" alt="delete">
						</div>
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
			commentsAPI : [],
			trashSize: ""
		}
	},
	mounted() {
		axios
		  .get('http://5ceafdae0c871100140bf7dc.mockapi.io/api/comments/comments')
		  .then(response => (this.commentsAPI = response.data))
			.catch(error => console.log(error))
	},
	updated: function(){
			axios
		  .get('http://5ceafdae0c871100140bf7dc.mockapi.io/api/comments/comments')
		  .then(response => (this.commentsAPI = response.data))
			.catch(error => console.log(error))
	},
	methods: {
		deleteData: function(id) {
			axios
		  .delete('http://5ceafdae0c871100140bf7dc.mockapi.io/api/comments/comments/' + id)
		  .then(alert("your comment deleted"))
			.then()
			.catch(error => console.log(error))		
		},
		viewDetails: function(id) {
			this.$router.push("comments/" + id)
		}
	}
}
</script>

<style scoped>
	.container {
		max-width: 1600px;
		flex-wrap: wrap;
		margin: auto;
	}	
	.comment-list {
		padding: 0;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		align-items: stretch;
		list-style-type: none;
	}
	.comment-title, .comment-body {
		color: rgba(51, 51, 51, 0.7);
		font-family: sofiaproMedium;
		text-align: justify;
	}
	.comment-title {
		font-size: 18px;
	}
	.comment-body {
		font-size: 14px;
		overflow: hidden;
	}
	li.comment-item {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: 3px;
		background-color: rgb(255, 255, 255);
		box-shadow: 6.5px 11.258px 30px 0px rgba(17, 21, 24, 0.04);
		width: 350px;
		min-height: 250px;
		margin: 15px;
		padding: 20px;
		position: relative;
	}
	.btn-details {
		margin-top: 18px;
		border: 1px solid rgb(96, 227, 161);
		border-radius: 3px;
		background-color: rgb(96, 227, 161);
		width: 150px;
		height: 55px;
		font-size: 12px;
		font-family: sofiaproMedium;
		font-weight: bold;
		text-align: center;
		cursor: pointer;
	}
	.block-head {    
		text-align: center;
		color: rgb(17, 21, 24);
		font-family: sofiaproMedium;
		line-height: 1.029;
		font-size: 55px;
		font-weight: bold;
	}
	.trash {
		width: 50px;
		position: absolute;
    bottom: 23px;
    right: 36px;
		cursor: pointer;
	}
/*
	.select {
		width: 65px;
	}
*/
	@media (max-width: 768px) {
		.block-head {
			font-size: 35px;
		}
	}	
	@media (max-width: 1260px) {
		.comment-list {
			max-width: 930px;
			margin: auto;
			justify-content: space-between;
		}
		.comment-item {
			display: flex;
			justify-content: center;
		}
	}
	@media (max-width: 1260px) {
		.comment-list {
			justify-content: center;
		}
	}
</style>

