<template>
	<div class="comment-wrap">
		<div id="writeComment" class="write-comment-section">
			<div>
				<p class="title-comment">Write comment <span class="separator"></span></p>
			</div>
			<form>
				<input class="inp-title" v-model="postTitle" maxlength="50" placeholder="Title">
				<textarea class="inp-comment" v-model="postBody" maxlength="400" placeholder="Your comment"></textarea>

				<input type="button" @click="createPost" value="Send" class="btn" v-show="( postTitle.trim().length > 0 && postBody.trim().length > 0 )" />

				<input type="button" @click="disabledClick" value="Send" class="btn-disabled" v-show="!( postTitle.trim().length > 0 && postBody.trim().length > 0 )" />
			</form>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		data() {
			return {
				postTitle: "asd",
				postBody: "asd",
				checkForm: function() {
					var title = document.querySelector(".inp-title"),
						body = document.querySelector(".inp-comment"),
						form = document.querySelector("form");

					if (this.postTitle.trim().length < 1 && form.firstElementChild == title) {
						title.style.border = "2px solid red";
						form.insertBefore(createAlertMsg("title"), title);
					}

					if (this.postBody.trim().length < 1 && body.previousElementSibling == title) {
						body.style.border = "2px solid red";
						form.insertBefore(createAlertMsg("Comment body"), body);
					}

					function createAlertMsg(fieldName) {
						var parDiv = document.createElement("div");
						parDiv.style.height = "35px";
						parDiv.innerHTML = "<h4 style='color: red; font-family: sofiaproMedium; letter-spacing: 1.6px; line-height: 10px'>Please input " + fieldName + " field</h4>";
						return parDiv;
					}
				}
			}
		},
		computed: {
			getGoToComsElem: function() {
				console.log("getGoToComsElem function is work");
			}
		},
		methods: {
			createPost: function() {
				axios
					.post('http://5ceafdae0c871100140bf7dc.mockapi.io/api/comments/comments', {
						title: this.postTitle,
						comment: this.postBody
					})
					.then((response) => {
						alert('Your comment has been successfully submitted');
						this.postTitle = "",
						this.postBody = "";
					var gotoBtn = document.createElement("div");
					var form = document.querySelector("form");
					
					gotoBtn.innerHTML="<button>Go To Comments</button>";
					form.appendChild(gotoBtn);
					})
					.catch((e) => {
						console.error(e);
						alert('Something wrong :(');
					});
			},
			disabledClick: function() {
				//			alert("Please, input all the data");
				this.checkForm();
			}
		},
		watch: {
			postTitle: function() {
				var title = document.querySelector(".inp-title"),
					form = document.querySelector("form");

				if (this.postTitle.trim().length < 1) {
					return;
				}

				title.style.border = "1px solid #60e3a1";

				if (form.firstElementChild !== title) {
					title.previousElementSibling.remove();
				}
			},
			postBody: function() {
				var body = document.querySelector(".inp-comment"),
					title = document.querySelector(".inp-title");

				if (this.postBody.trim().length < 1) {
					return;
				}

				body.style.border = "1px solid #60e3a1";

				if (body.previousElementSibling !== title) {
					body.previousElementSibling.remove();
				}
			}
		}
	}

</script>

<style scoped>
	.write-comment-section {
		background-color: #1d1e25;
		height: 90vh;
		max-height: 900px;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}

	form {
		display: flex;
		flex-direction: column;
	}

	.title-comment {
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

	.separator {
		width: 71px;
		position: relative;
		top: 35px;
		display: block;
		border-bottom: 5px solid #f9d10d;
	}

	.inp-title {
		box-sizing: border-box;
		margin: 15px 0 0 0;
		border: 1px solid #60e3a1;
		border-radius: 3px;
		width: 590px;
		height: 53px;
		font-size: 16px;
		font-family: sofiaproLight;
		color: #fff;
		background-color: rgba(0, 0, 0, 0);
		padding: 15px;
	}

	.inp-title-danger {
		border: 1px solid red;
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
		background-color: rgba(0, 0, 0, 0);
		color: #fff;
		resize: none;
		overflow: hidden;
	}

	.inp-comment-danger {
		border: 1px solid red;
	}

	::placeholder {
		color: #60e3a1;
	}

	.btn {
		margin: 0;
		font-family: sofiaproLight;
		font-size: 16px;
		color: rgb(29, 30, 37);
		background-color: #60e3a1;
		line-height: 3.312;
		text-align: center;
		width: 150px;
		height: 55px;
		border-radius: 3px;
		border: 1px;
		cursor: pointer;
	}

	.btn-disabled {
		margin: 0;
		font-family: sofiaproLight;
		font-size: 16px;
		color: #fff;
		background-color: #3c3e4c;
		line-height: 3.312;
		text-align: center;
		width: 150px;
		height: 55px;
		border-radius: 3px;
		border: 1px;
		cursor: pointer;
	}

	@media (max-width: 950px) {

		.inp-comment,
		.inp-title {
			width: 360px;
		}
	}

	@media (max-width: 690px) {
		.write-comment-section {
			flex-direction: column;
		}

		.title-comment {
			margin: 20px 0;
		}

		form {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.separator {
			margin-bottom: 40px;
		}
	}

	@media (max-width: 425px) {

		.inp-comment,
		.inp-title {
			width: 290px;
		}
	}

	@media (min-width: 1441px) {
		.write-comment-section {
			max-width: 2400px;
			margin: auto;
		}
	}

</style>
