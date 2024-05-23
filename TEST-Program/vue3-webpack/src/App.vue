<template>
	<div>
		<!-- 多文件上传 -->
		<span>多文件上传：</span>
		<input type="file" name="file" @change="fileChange" multiple />
		<span v-for="item in fileMutiList">{{ item.name }}</span>
		<hr />
		<!-- 切片上传 -->
		<span>切片上传：</span>
		<input type="file" name="file" @change="fileChange" />
		<hr />

		<button @click="submit">提交</button>
		<!-- <button @click="increment">button</button> -->
		<button @click="testBtn">测试按钮</button>
		<hr />
		<img style="width: 200px" :src="imgSrc" alt="imgAlt" />
	</div>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";

const count = ref(0);
let imgSrc = ref("");
const fileMutiList = ref([]);
let _fileObj = null;
// 测试按钮
function testBtn() {
	console.log(new File(["ppp"], "aa.text"));
}
// 文件上传
function fileChange(e) {
	// let file = e.target.files[0];
	// console.log(file);
	// if (file.size > 10 * 24 * 24) {
	// 	alert("文件不能大于10M");
	// }
	// if (file.type !== "video/mp4") {
	// 	alert("必须是mp4");
	// }
	// 转成blob对象
	// let sliceBlob = new Blob([file]).slice(0, 2000);
	// let silceFile = new File([sliceBlob], "fff.png");
	// const fr = new FileReader();
	// fr.readAsDataURL(silceFile);
	// fr.onload = function () {
	// 	console.log("fr", fr);
	// 	const frRes = fr.result;
	// 	imgSrc.value = frRes;
	// };
	// 怎么做缩略图，文本预览
	// 多文件上传
	/*if (e.target.files.length > 0) {
		fileMutiList.value.push(e.target.files[0]);
	} else {
		fileMutiList.concat(e.target.files);
	}*/
	// 切片上传
	_fileObj = e.target.files[0];
}

// 文件提交
async function submit() {
	// 多文件上传
	/* fileMutiList.value.forEach((item) => {
		let _formData = new FormData();
		_formData.append(item.name + "file", item);
		axios.post("/xxx", _formData);
	}); */
	// 切片上传
	let siz;
}
</script>
<style></style>
