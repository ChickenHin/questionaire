<template>
	<div>
		<div class="pop">
			<h2>是否删除此项?</h2>
			<button @click="yes">是</button>
			<button @click="no">否</button>
		</div>
		<div class="mask"></div>
	</div>
	
</template>

<script>
	export default {
		methods: {
			// 子组件向父组件传递数据
			yes() {
				this.$emit('popEvent',true);
			},
			no() {
				this.$emit('popEvent',false);
			}
		}
	}
</script>

<style scoped>
	.mask {
		width: 1280px;
		height: 700px;
		background: #ccc;
		opacity: 0.8;
		position: absolute;
		top: 56px;
		left: 0;
		z-index: 0;
	}
	.pop {
		border: 1px solid #000;
		border-radius: 10px;
		height: 200px;
		width: 300px;
		position: absolute;
		top: 50%;
		left: 50%;
		margin: -100px -150px;
		z-index: 100;

	}
	h2 {
		border-bottom: 1px solid #000;
	}
	button {
		background: #fff;
		border: 1px solid #fc434b;
		border-radius: 5px;
		color: #000;
		cursor: pointer;
		font-size: 16px;
		height: 40px;
		width: 80px;
		margin: 20px 20px;
	}
	button:hover {
		background: #fc434b;
		color: #fff;
	}
</style>