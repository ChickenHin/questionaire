<template>
	<div class="container">
		<button class="new"><router-link to="./new">新建问卷</router-link></button>
		<table border="1">
			<thead>
				<th>
					<input type="checkbox">全选
					<button>全部删除</button>
				</th>
				<th>标题</th>
				<th>时间</th>
				<th>状态</th>
				<th>操作</th>
			</thead>
			<tbody>
				<tr v-for="(val,index) in json">
					<td><input type="checkbox"></td>
					<td>{{val.title}}</td>
					<td>{{val.time}}</td>
					<td v-if="val.state==0">未发布</td>
					<td v-if="val.state==1">已发布</td>
					<td v-if="val.state==2">已结束</td>
					<td>
						<p><button><router-link :to="{name: 'edit', params: {id: index}}">编辑</router-link></button></p>
						<p><button @click="btnDel(index)">删除</button></p>
						<p><button><router-link :to="{name: 'do', params: {id: index}}">查看</router-link></button></p>
					</td>
				</tr>
			</tbody>
		</table>
		<!-- 弹出确认框 -->
		<pop v-show="popFlag" @popEvent="popDel"></pop>
	</div>
</template>

<script>
	import Data from '../data.js'
	import pop from './Pop.vue'

	export default {
		data() {
			return {
				json: [],	//缓存中的数据
				index1: 0,
				popFlag: false	//浮出层显示
			}
		},
		methods: {
			btnDel(index) {
				this.index1 = index;
				this.popFlag = true;
			},
			// 父组件接受data回调函数
			// 是否确认删除
			popDel(data) {
				this.popFlag = false;
				if(data) {
					Data.del(this.index1);
					this.json = Data.show();
				}
			}
		},
		mounted() {
			this.json = Data.show();
		},
		components: {
			pop
		}
	} 
</script>

<style scoped>
	.container {
		width: 602px;
		margin: 40px auto;
	}
	.new {
		background: #fff;
		border: 2px solid #fc434b;
		border-radius: 5px;
		font-size: 14px;
		float: right;
		height: 30px;
		width: 80px;
		margin: 0 10px 10px 0;
	}
	.new:hover {
		background: #fc434b;
		color: #fff;
		cursor: pointer;
	}
	table {
		border-collapse: collapse;
		width: 600px;
	}
	th {
		height: 40px;
	}
	th button {
		background: #fff;
		border: 1px solid #000;
		border-radius: 5px;
		color: #000;
		cursor: pointer;
		margin-left: 10px;
	}
	th button:hover {
		background: #000;
		color: #fff;
	}
	td {
		height: 90px;
	}
	td button {
		background: #fff;
		border: 1px solid #000;
		border-radius: 5px;
		cursor: pointer;
		color: #000;
		width: 80px;
	}
	td button:hover {
		background: #000;
		color: #fff;
	}
	a {
		color: #000;
		text-decoration: none;
		
	}
	a:hover {
		color: #fff;
	}
</style>