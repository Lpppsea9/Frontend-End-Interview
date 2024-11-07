<template>
	<div style="padding: 30px; background-color: powderblue">
		<a-table bordered :columns="columns" :dataSource="data" :pagination="false">
		</a-table>

		<div
			style="
				width: 200px;
				background-color: cadetblue;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			"
		>
			<EllipsisPopper text="TTTEEEXXXTTTssssssssssssssss"></EllipsisPopper>
		</div>

		<button @click="handleClick">Button</button>
	</div>
</template>

<script setup>
import EllipsisPopper from "../packages/fm-ellipsis-popper/index.vue";
import { computed, ref, onMounted } from "vue";

const columns = ref([
	{
		title: "Name",
		dataIndex: "name",
		sorter: true,
		ellipsis: true,
	},
	{
		title: "Borrow",
		dataIndex: "borrow",
		sorter: true,
		ellipsis: true,
	},
	{
		title: "Repayment",
		dataIndex: "repayment",
		sorter: true,
		// ellipsis: true,
		width: 130,
	},
]);
const data = ref([
	{
		key: "1",
		name: "John Brown",
		borrow: 10,
		repayment: "测试111测试test",
	},
	{
		key: "2",
		name: "Jim Green",
		borrow: 100,
		repayment: "测试111测试tes",
	},
	{
		key: "3",
		name: "Joe Black",
		borrow: 10,
		repayment: 10,
	},
	{
		key: "4",
		name: "Jim Red",
		borrow: 75,
		repayment: 45,
	},
]);
</script>
