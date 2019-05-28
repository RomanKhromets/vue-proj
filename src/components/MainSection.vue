<template>
	<div>
		<div class="txt-section">
			<h1>{{ headline }}</h1>
  	</div>
		<div class="img-section"></div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			headline: "Lorem Ipsum is simply dummy text of the printing and typesettin industry",
			image: "./assets/main-section-img.png"
		}
	}
}
</script>

<style scoped>
	.txt-section{
		margin-top: 67px;
		display: -ms-flexbox;
		margin-left: 187px;
		display: flex;
		max-width: 775px;
	}
	
	h1 {
		margin: 0px;
		height: 297px;
		font-size: 54px;
		font-family: sofiaproRegular;
		font-weight: bold;
		color: rgb(17, 21, 24);
		line-height: 1.1em;
		font-size: 64px;
	}

	.img-section {
		height: 470px;
		max-width: 2400px;
		background-image: url("../../public/assets/main-section-img.png");
		background-color: #efe0da;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center; 
	}
	
	@media (max-width: 1024px){
		.txt-section {
			text-align: center;
			width: 700px;
			margin: 67px auto;
		}
		h1 {
			font-size: 45px;
		}
	}
	
	@media (max-width: 768px){
		.txt-section {
			margin-top: 67px;
			width: 70%;
		}
		h1 {
			font-size: 35px;
			height: 220px;
		}
	}
	
	@media (max-width: 375px){
		.txt-section h1 {
			font-size: 31px;
		}
	}
	@media (min-width: 1441px) {
		.txt-section {
			width: 775px;
    	margin: 67px auto;
		}
		.img-section {
			margin: auto;
		}
	}
</style>
