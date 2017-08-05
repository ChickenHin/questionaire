<template>
	<div>
		<header>
			<input type="text" v-model="newData.title">
		</header>
		<section v-for="(que, qindex) in newData.content" class="main">
			<div class="ques">
				<button @click="delQues(qindex)" class="delbtn">删除问题</button>	
				<span v-show="que.required == true" class="required">*</span>
				<span>Q{{qindex+1}}</span>
				<span v-if="que.type=='radio'">单选题</span>
				<span v-if="que.type=='checkbox'">多选题</span>
				<span v-if="que.type=='textarea'">文本题</span>
				<input type="text" v-model="que.question" class="question">
				
			</div>
				<div class="ans" v-if="que.type!='textarea'">
				<div v-for="(ans,aindex) in que.options" class="options">
					<span class="index">({{aindex+1}})</span>
					<input type="text" v-model="ans.answer" class="answer">
					<button @click="delOpt(qindex,aindex)">删除选项</button>
				</div>
				<button @click="addOpt(qindex)" class="addbtn">添加选项</button>
				</div>
				<div v-else>
					<textarea name="" id="" cols="30" rows="10"></textarea>
				</div>
		</section>
		<section>
			<div class="addblock">
				<div v-show="selectFlag" class="typebtn">
					<button @click="addQues('radio')">单选题</button>
					<button @click="addQues('checkbox')">多选题</button>
					<button @click="addQues('textarea')">文本题</button>
				</div>
				
				<button @click="selectFlag = !selectFlag" class="addque">添加问题</button>
			</div>
		</section>
		<section>
			<div>
				<button @click="releaseQues(index, newData)" class="relbtn"><router-link to="/list">发布问卷</router-link></button>
				<button @click="saveQues(index, newData)" class="savebtn"><router-link to="/list">保存问卷</router-link></button>
			</div>
		</section>
				
	</div>
</template>

<script>
	import Data from '../data.js'
	export default {
		data() {
			return {
				newData: [],
				index: 0,
				selectFlag: false
			}
		},
		methods: {
			// 删除选项
			delOpt(index1, index2) {
				this.newData.content[index1].options.splice(index2, 1);
			},
			// 添加选项
			addOpt(index) {
				this.newData.content[index].options.push({answer: "新增选项", num: 0});
			},
			// 删除问题
			delQues(index) {
				this.newData.content.splice(index, 1);
			},
			// 添加问题
			addQues(stype) {
				let newJson = {};
				newJson.type = stype;
				newJson.required = true;
				if(stype == "radio") {
					newJson.question = "问题（单选）";
					newJson.options = [{answer: "选项一", num: 0},{answer: "选项二", num: 0}];
				} else if(stype == "checkbox") {
					newJson.question = "问题（多选）";
					newJson.options = [{answer: "选项一", num: 0},{answer: "选项二", num: 0}];
				} else {
					newJson.question = "问题（文本）";
					newJson.options = [];
				}
				this.newData.content.push(newJson);
				this.selectFlag = false;
			},
			// 保存问卷
			saveQues(index, data) {
				Data.update(index, data);
			},
			// 发布问卷
			releaseQues( index, data) {
				data.state = 1;
				Data.update(index, data);
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
		border-style: none;
	}
	header {
		margin-top: 60px;	
	}
	header input {
		border-bottom: 2px solid #ccc;
		font-size: 24px;
		height: 40px;
		text-align: center;
		width: 700px;
	}
	section {
		text-align: left;
		width: 700px;
		margin: 0 auto;
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
	.options button {
		background: #fff;
		border: 1px solid #000;
		color: #000;
		height: 24px;
		width: 65px;
	}
	.options button:hover {
		background: #000;
		color: #fff;
		cursor: pointer;
	}
	.addbtn,
	.delbtn {
		background: #fff;
		border: 1px solid #000;
		border-radius: 5px;
		color: #000;
	}
	.addbtn:hover,
	.delbtn:hover {
		background: #fc434b;
		border: 1px solid #fc434b;
		color: #fff;
		cursor: pointer;
	}
	.addbtn {
		margin-left: 120px;
	}
	.delbtn {
		margin-left: 20px;
	}
	.addblock {
		width: 700px;
	}
	.addque {
		background: #fff;
		border: 2px solid #fc434b;
		border-radius: 10px;
		color: #000;
		font-size: 24px;
		height: 80px;
		width: 150px;
		margin: 40px 275px;
	}
	.addque:hover {
		background: #fc434b;
		color: #fff;
		cursor: pointer;
	}
	.typebtn {
		width: 250px;
		margin: 40px auto;
	}
	.typebtn button {
		background: #fff;
		border: 2px solid #fc434b;
		border-radius: 5px;
		color: #000;
		font-size: 16px;
		height: 40px;
		width: 80px;
	}
	.typebtn button:hover {
		background: #fc434b;
		color: #fff;
		cursor: pointer;
	}
	.main {
		border-bottom: 1px solid #000;
		padding: 40px 0;
	}
	.relbtn,
	.savebtn {
		background: #000;
		color: #fff;
		float: right;
		height: 30px;
		width: 80px;
		margin-bottom: 20px;
	}
	.relbtn:hover,
	.savebtn:hover {
		cursor: pointer;
	}
	.relbtn {
		margin-left: 20px;
	}
</style>