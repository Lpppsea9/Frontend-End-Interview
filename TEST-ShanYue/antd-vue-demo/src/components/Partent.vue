<template>
	<div class="parent-wrap">
		<span>Parent</span>
		<button @click="btnClick">Button</button>
		<div style="text-align: left">基本类型 字符串 str: {{ str }}</div>
		<div style="text-align: left">基本类型 数字 num: {{ num }}</div>
		<div style="text-align: left">引用类型 数组 arr: {{ arr }}</div>
		<div style="text-align: left">引用类型 对象 obj: {{ obj }}</div>
		<div style="text-align: left">引用类型 对象 obj2: {{ obj2 }}</div>

		<div>
			<Child
				v-model:bindStr="str"
				v-model:bindNum="num"
				v-model:bindArr="arr"
				v-model:bindObj="obj"
			></Child>
		</div>
	</div>
</template>
<script setup>
import { reactive, ref } from "vue";
import Child from "./Child.vue";

const str = ref("父组件默认Str");

const num = ref(10);

const arr = ref([
	{
		name: "lpp",
		age: 22,
	},
	{
		name: "lkk",
		age: 23,
	},
]);

const obj = ref({
	name: "lppp",
	like: ["run", "eat"],
	fileId: null,
	taskId: null,
});

let obj2 = reactive({
	name: "oo",
});

const btnClick = () => {
	str.value = "子组件Str";

	num.value = 999;

	arr.value = arr.value.map((n) => {
		return {
			...n,
			attr: "kkk",
		};
	});

	// obj.value = obj.value.map((n) => {
	// 	return {
	// 		...n,
	// 		attr: "kkk",
	// 	};
	// });

	obj2 = { ppp: "ppp" };

	console.log("str", str.value);
	console.log("num", num.value);
	console.log("arr", arr.value);
	console.log("obj", obj.value);
};
</script>
<style scoped>
.parent-wrap {
	position: relative;
	background-color: powderblue;
	height: 100%;
	width: 100%;
}
</style>
