<template>
	<div class="wrap-nav">
		<div class="nav">
			<div class="logo"><img :src="image" :alt="logo"/></div>
			<ul>
				<li @click="updateRouterPath"><router-link class="link" to="/#about">About us</router-link></li>
				<li @click="updateRouterPath"><router-link class="link" to="/#writeComment"> Write comment</router-link></li>
				<li><router-link class="link" to="/comments"> Comments </router-link></li>
			</ul>
		</div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			image: "../assets/logo.png",
			logo: "Logotype"
		}
	},
	methods: {
		updateRouterPath: function() {
			this.$router.push("/")
		}
	}
}
</script>

<style scoped>
.nav {
	display: flex;
	justify-content: space-between;
	max-width: 1440px;
	margin-top: 49px;
	margin-left: 50px;
	margin-right: 50px;
	align-items: center;
}
ul {
	margin-top: 0;
	list-style-type: none;
	padding: 0;
	line-height: 55px;
}
li {
	display: inline-block;
	margin: 8px 0 0 40px;
}
li:hover {
	margin-top: -3px;
	border-top: 3px solid rgb(249, 209, 13);
	line-height: 55px;
}
.link {
	display: block;
	font-size: 14px;
	font-family: sofiaproRegular;
	font-weight: 600;
	color: rgb(17, 21, 24);
	text-decoration: none;
	text-transform: uppercase;
	transition-duration: 3s;
}

@media (max-width: 768px){
	li{
		margin: 8px 4px 0 10px;
	}
}
@media (max-width: 550px){
	.nav {
		margin: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.logo {
		display: none;
	}
}
@media (max-width: 320px) {
	.nav {
		margin: 0;
	}
}
@media (min-width: 1441px) {
	.nav {
		max-width: 1440px;
		margin-left: auto;
		margin-right: auto;
		width: 1440px;
	}
	.wrap-nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
}  
</style>


