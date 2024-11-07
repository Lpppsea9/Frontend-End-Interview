<template>
	<div class="child-wrap">
		<span>Child</span>
		<button @click="btnClick">Button</button>
		<div style="text-align: left">基本类型 字符串 Str: {{ childStr }}</div>
		<div style="text-align: left">基本类型 数字 Num: {{ childNum }}</div>
		<div style="text-align: left">引用类型 数组 Arr: {{ childArr }}</div>
		<div style="text-align: left">引用类型 对象 Obj: {{ childObj }}</div>

		<!-- <div>childArr2:{{ childArr2 }}</div> -->

		<!-- 循环组件 -->
		<template v-for="item in childSecList" :key="item.key">
			<ChildSec
				:widget="item"
				v-model:bindStr="childStr"
				v-model:bindNum="childNum"
				v-model:bindArr="childArr"
				v-model:bindObj="childObj"
			>
			</ChildSec>
		</template>
	</div>
</template>
<script setup>
import { defineModel, ref } from "vue";
import ChildSec from "./ChildSec.vue";

const childStr = defineModel("bindStr", { type: String });
const childNum = defineModel("bindNum", { type: Number });
const childArr = defineModel("bindArr", { type: Array });
const childObj = defineModel("bindObj", { type: Object });
// const childSecList = ref([
// 	{ key: "a", name: "孙组件a" },
// 	{ key: "b", name: "孙组件b" },
// 	{ key: "c", name: "孙组件c" },
// ]);
const childSecList = ref([]);
for (let i = 0; i < 50; i++) {
	childSecList.value.push({
		key: i,
		name: `组件${i}`,
	});
}

const childArr2 = ref([
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
	childStr.value = "子组件Str";

	childNum.value = 999;

	childArr.value = childArr.value.map((n) => {
		return {
			...n,
			attr: "kkk",
		};
	});

	const res = {
		data: {
			X: 1,
			Y: 2,
		},
	};
	childObj.value = {
		...childObj.value,
		...res.data,
	};

	childArr2.value = childArr2.value.map((n) => {
		return {
			...n,
			attr: "kkk",
		};
	});

	console.log("childStr", childStr.value);
	console.log("childNum", childNum.value);
	console.log("childArr", childArr.value);
	console.log("childObj", childObj.value);
	setTimeout(() => {
		console.log("SchildObj", childObj.value);
	});

	// console.log("childArr2", childArr2.value);
};
</script>
<style scoped>
.child-wrap {
	position: absolute;
	width: 90%;
	/* height: 400px; */
	top: 50%;
	left: 50%;
	margin-top: -200px;
	margin-left: -45%;
	background-color: papayawhip;
}
</style>
