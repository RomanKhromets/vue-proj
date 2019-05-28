<template>
	<div class="comment-wrap">
		<div id="writeComment" class="write-comment-section">
			<div>
				<p class="title-comment">Write comment <span class="separator"></span></p>
			</div>
			<form>
				<input class="inp-title" v-model="title" maxlength="35" placeholder="Title"><br>
				<textarea class="inp-comment" v-model="comment"  maxlength="400" placeholder="Your comment" ></textarea><br>
				<button class="btn">Send</button>
			</form>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			title: null,
			comment: null
		}
	}
}
</script>

<style scoped>
	.write-comment-section{
		background-color: #1d1e25;
		height: 90vh;
		max-height: 900px;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}
	.title-comment{
		margin: 0;
		margin-top: -145px;
    margin-left: -58px;
		font-size: 50px;
		font-family: sofiaproMedium;
		color: #fff;
		font-weight: 200;
		width: 180px;
		line-height: 1;
	}
	
	.separator{
		width: 71px;
		position: relative;
    top: 35px;
    display: block;
    border-bottom: 5px solid #f9d10d;
	}
	
	.inp-title {
		box-sizing: border-box;
		border: 1px solid #60e3a1;
	 	border-radius: 3px;
		width: 590px;
		height: 53px;
		font-size: 16px;
		font-family: sofiaproLight;
		color: #fff;
		background-color: rgba(0,0,0,0);
		padding: 15px;
	}
	
	.inp-comment {
		box-sizing: border-box;
		border: 1px solid #60e3a1;
	 	border-radius: 3px;
		width: 590px;
		margin: 15px 0;
		padding: 15px;
		height: 150px;
		font-size: 16px;
		font-family: sofiaproLight;
		background-color: rgba(0,0,0,0);
		color: #fff;
		resize: none;
		overflow: hidden;
	}
	
	::placeholder {
		color: #60e3a1;
	}
	
	.btn {
		margin: 0;
		font-family: sofiaproLight;
		font-size: 16px;
		color: rgb(29, 30, 37);;
		background-color: #60e3a1;
		line-height: 3.312;
		text-align: center;
		width: 150px;
		height: 55px;
		border-radius: 3px;
		border: 1px;
		cursor: pointer;
	}
	
	@media (max-width: 950px){
		.inp-comment, .inp-title {
			width: 360px;
		}
	}
	@media (max-width: 690px){
		.write-comment-section{
			flex-direction: column;
		}
		.title-comment{
			margin: 20px 0;
		}
		form{
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.separator {
			margin-bottom: 40px;
		}
	}
	@media (max-width: 425px){
		.inp-comment, .inp-title {
			width: 290px;
		}
	}	
	@media (min-width: 1441px){
		.write-comment-section {
			max-width: 2400px;
			margin: auto;
		}
	}
</style>
