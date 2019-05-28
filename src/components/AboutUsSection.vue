<template>
  <div class="card-section">
		<ul id="about" class="card_wrap">
			<li class="card" v-for="item in items">
				<div class="card-img"> <img :src="item.icon" :alt="heading"/> </div>
				<h1 class="card-heading">{{ item.heading }}</h1>
					<ul class="card-txt">
					<li class="card-str" v-for="val in item.list"> {{ val }}</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	
	export default {
		
		data () {
			return {
				heading: "item.heading",
				items: [ 
					{	icon: "./assets/about-us/img1.png",
						heading: "Who we are",
					 	list: [ 
							"It is a long established fact that a reader will be distracted",
							"The readable content of a page when looking at its layout",
							"The point of using Lorem Ipsum",
							"As opposed to using 'Content here, content here'."
						]
					},
					{
						icon: "./assets/about-us/img2.png",
						heading: "What we do",
					 	list: [ 
							"Many desktop publishing packages and web page",
							"There are many variations of passages of Lorem Ipsum available, but the majority have",
							"Various versions have evolved over the years, sometimes by accident'."
						]
					},
					{
						icon: "./assets/about-us/img3.png",
						heading: "Technology",
					 	list: [ 
							"The point of using Lorem Ipsum",
							"As opposed to using 'Content here, content here'",
							"Contrary to popular belief, Lorem Ipsum is not simply random text.",
							"A Latin professor at Hampden-Sydney College in Virginia"
						]
					}
				]
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.card-section {
		background-color: #f7f7f7;
	}
	.card {
		max-width: 260px;
		min-height: 310px;
    list-style-type: none;
	}
	.card_wrap {
    display: flex;
		align-items: center;
    margin: 0;
    padding: 0;
    max-width: 1225px;
    width: 100%;
		height: 100vh;
    justify-content: space-around;
}
	.card-heading{
		font-size: 34px;
    font-family: sofiaproRegular;
    color: rgb(16, 20, 23);
    font-weight: bold;
    margin: 20px 0;
	}
	.card-section {
    display: flex;
    justify-content: center;
	}
	.card-img{
		height: 35px;
		display: flex;
		justify-content: flex-start;
		align-items: baseline;
	}
	.card-str {
		padding: 0px;
		margin-left: 15px;
    font-size: 16px;
    font-family: sofiaproRegular;
    color: rgb(16, 20, 23);
	}
	.card-txt{
		padding: 0;
		list-style-type: disc;
		display: flex;
		flex-direction: column;
    justify-content: space-between;
    min-height: 180px;
	}
	@media (max-width: 950px){
		.card_wrap {
/*			display: flex;*/
			flex-direction: column;
			height: 100%;
		}
		.card {
			width: 40%;
			max-width: 300px;
			text-align: center;
			margin-top: 25px;
			margin-bottom: 25px;
		}
		.card-img {
			justify-content: center;
    	height:auto;
		}
		img {
			width: 70px;
    	height: auto;
		}
	}
	@media (max-width: 550px){
		.card {
			width: 80%;
		}
	}
	@media (max-width: 550px){
		.card-section {
			max-width: 2400px;
			margin: auto;
		}
	}
	@media (min-width: 1441px){
		.card-section {
			max-width: 2400px;
			margin: 0 auto;
		}
	}
</style>
