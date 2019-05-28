<template>
  <div class="footer-section">
		<div class="separator"></div>
		<div class="footer-wrap">
			<div class="footer-contacts">
				<h5>{{ mail }}</h5>
				<h5>{{ tel }}</h5>
			</div>
			<p class="copyright">Copyright © 2019 Test All Rights Reserved.</p>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			mail: "mail@mailtest.com",
			tel: "+30-6977664062"
		}
	}
}
</script>

<style scoped>
	h5 {
		margin: 0;
	}
	.footer-section {
		margin-top: -1px;
		background-color: #1d1e25;
		height: 102px;
		display: flex;
		flex-direction: column;
	}
	.separator {
		border: 1px solid #4a4d5e;
		width: 90%;
		align-self: center;
	}
	.footer-contacts {
		font-family: sofiaproLight;
    font-size: 18px;
    color: #fff;
    opacity: 0.75;
    line-height: 1.875;
    font-weight: 100;
    margin-top: 25px;
	}
	.copyright {
		font-size: 14px;
		font-family: sofiaproRegular;
		color: rgb(74, 77, 94);
		align-self: flex-end;
	}
	.footer-wrap {
		display: flex;
		width: 90%;
		justify-content: space-between;
		align-self: center;
	}
	
	@media (max-width: 550px){
		.copyright {
			margin-top: 25px;
			margin-left: 15px;
			text-align: center;
			line-height: 1.875;
		}
	}
	@media (min-width: 1441px){
		.footer-section {
			max-width: 2400px;
			margin: 0 auto;
		}
	}
</style>
