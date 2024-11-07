<template>
	<div class="child-sec-wrap">
		<span>Child-Second——{{ widget.name }}</span>
		<button @click="btnClick">Button</button>
		<div style="text-align: left">基本类型 字符串 Str: {{ childSecStr }}</div>
		<div style="text-align: left">基本类型 数字 Num: {{ childSecNum }}</div>
		<div style="text-align: left">引用类型 数组 Arr: {{ childSecArr }}</div>
		<div style="text-align: left">引用类型 对象 Obj: {{ childSecObj }}</div>
	</div>
</template>
<script setup>
import { defineModel, nextTick, ref } from "vue";
const props = defineProps({
	widget: {
		type: Object,
	},
});

const childSecStr = defineModel("bindStr", { type: String });
const childSecNum = defineModel("bindNum", { type: Number });
const childSecArr = defineModel("bindArr", { type: Array });
const childSecObj = defineModel("bindObj", { type: Object });

const childSecArr2 = ref([
	{
		name: "lpp",
		age: 22,
	},
	{
		name: "lkk",
		age: 23,
	},
]);

const btnClick = () => {
	childSecStr.value = "子组件Str";

	childSecNum.value = 999;

	childSecArr.value = childSecArr.value.map((n) => {
		return {
			...n,
			attr: "kkk",
		};
	});

	const res = {
		data: {
			fileId: "ll",
			taskId: "ooo",
		},
	};
	const p = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 1000);
	});
	p.then(() => {
		console.log("cc", childSecObj.value);
		// childSecObj.value = {
		// 	...childSecObj.value,
		// 	...res.data,
		// };
		// childSecObj.value.fileId = "kk";
		// childSecObj.value.taskId = "kk2";
		childSecObj.value = { name: "pp" };

		console.log("cc2", childSecObj.value);
		nextTick(() => {});
	});

	childSecArr2.value = childSecArr2.value.map((n) => {
		return {
			...n,
			attr: "kkk",
		};
	});

	console.log("childSecStr", childSecStr.value);
	console.log("childSecNum", childSecNum.value);
	console.log("childSecArr", childSecArr.value);
	console.log("childSecObj", childSecObj.value);
	setTimeout(() => {
		// console.log("SchildSecObj", childSecObj.value);
	});

	// console.log("childSecArr2", childSecArr2.value);
};
</script>
<style scoped>
.child-sec-wrap {
	/* position: absolute; */
	/* width: 90%;
	height: 400px;
	top: 50%;
	left: 50%;
	margin-top: -200px;
	/* margin-left: -45%; */
	background-color: lavender;
	/* width: 80%;
	left: 50%;
	margin-left: -40%;
	
	bottom: 0; */
	margin-bottom: 10px;
}
</style>
