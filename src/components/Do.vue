<template>
	<div>
		<header>
			<h3>{{newData.title}}</h3>
		</header>
		<section v-for="(que, qindex) in newData.content" class="main">
			<div class="ques">
				<span v-show="que.required == true" class="required">*</span>
				<span>Q{{qindex+1}}</span>
				<span v-if="que.type=='radio'">单选题</span>
				<span v-if="que.type=='checkbox'">多选题</span>
				<span v-if="que.type=='textarea'">文本题</span>
				<span class="question">{{que.question}}</span>
				
			</div>
				<div class="ans" v-if="que.type!='textarea'">
				<div v-for="(ans,aindex) in que.options" class="options">
					<span class="index">({{aindex+1}})</span>
					<label for="answer" v-if="que.type=='radio'"><input type="radio" name="answer" class="answer"></label>
					<label for="answer" v-if="que.type=='checkbox'"><input type="checkbox" name="answer" class="answer"></label>
					{{ans.answer}}
				</div>
				</div>
				<div v-else>
					<textarea name="" id="" cols="30" rows="10"></textarea>
				</div>
		</section>
		<button>提交</button>
	</div>
</template>

<script>
	import Data from '../data.js'
	export default {
		data() {
			return {
				newData: {},
				index: 0,
			}
		},
		mounted() {
			let datas = Data.show();
			let id = this.$route.params.id;
			this.index = id;
			this.newData = datas[id];
		}
	}
</script>

<style scoped>
	a {
		color: #fff;
		text-decoration: none;
	}
	button {
		background: #fff;
		border: 1px solid #fc434b;
		border-radius: 5px;
		color: #000;
		height: 30px;
		width: 60px;
	}
	button:hover {
		background: #fc434b;
		color: #fff;
		cursor: pointer;
	}
	header {
		width: 700px;
		margin: 20px auto;	
	}
	header h3 {
		border-bottom: 2px solid #ccc;
		font-size: 24px;
		height: 40px;
		text-align: center;
		width: 700px;
	}
	section {
		border-bottom: 1px solid #000;
		text-align: left;
		width: 700px;
		margin: 0 auto;
		padding: 30px 0;
	}
	section:last-of-type {
		border: none;
	}
	input {
		border: none;
	}
	textarea {
		height: 150px;
		width: 400px;
		margin: 20px 20px;
	}
	.required {
		color: #fc434b;
	}
	.question {
		font-size: 16px;
		margin-left: 10px;
		width: 500px;
	}
	.options {
		font-size: 16px;
		margin: 20px 20px;
	}
	.answer {
		font-size: 16px;
		margin-left: 10px;
	}
</style>