<template>
	<div class="back-block-wrapper">
		<p class="back-block-msg">{{ backMsg }}</p>
		<button class="back-btn" @click="goHome"> <img class="btn-img" src="../../public/assets/backBlock/arrow-back.png"/> <p>Back to homepage</p></button>
	</div>
</template>

<script>

export default {
	data() {
		return {
			backMsg : "Lorem Ipsum is text of the typesetting industry"
		}
	},
	methods: {
		goHome() {
			this.$router.push("/");
		}
	},
}
</script>
<style scoped>
	.back-block-wrapper {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 50px 0
	}
	.back-block-msg {
		color: rgba(17, 21, 24, 0.502);
		font-size: 20px;
		font-weight: bold;
		font-family: sofiaproMedium; 
	}
	.back-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 210px;
		height: 55px;
		border: 1px solid rgb(96, 227, 161);
		border-radius: 3px;
		background-color: rgba(0,0,0,0);
		font-size: 14px;
		font-weight: bold;
		font-family: sofiaproLight; 
		color: rgb(29, 30, 37);
	}
	.btn-img {
		margin-right: 10px;
	}

</style>



