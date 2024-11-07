<template>
	<div
		style="display: inline"
		class="ellipsis"
		:data-title="text"
		@mouseenter="handleCellMouseEnter"
	>
		<span class="t-span">{{ text }}</span>
	</div>

	<!-- <div
		ref="divRef"
		id="divDom"
		style="width: 100px; height: 100px; background-color: palegreen"
	>
		{{ obj }}
	</div> -->
</template>

<script setup>
import { nextTick, onMounted, ref } from "vue";
import { useEllipsisPopper, getPadding } from "./hooks";

defineProps({
	text: {
		type: String,
		required: true,
	},
});

const divRef = ref(null);
const obj = ref({});
const theme = ref({ color: "red" });
// onMounted(() => {
// 	const divDom = document.getElementById("divDom");
// 	obj.value = getPadding(divDom);
// 	setTimeout(() => {
// 		divDom.style.paddingLeft = "20px";
// 	}, 1000);
// });

const { handleCellMouseEnter } = useEllipsisPopper({ placement: "bottom" });
</script>
<style>
.t-span {
	color: v-bind("theme.color");
}
.ellipsis-tooltip {
	z-index: 10;
	display: inline-block;
	background: #333333;
	color: #ffffff;
	padding: 5px 10px;
	font-size: 13px;
	border-radius: 4px;
}

.ellipsis-tooltip-arrow,
.ellipsis-tooltip-arrow::before {
	position: absolute;
	width: 6px;
	height: 6px;
	background: inherit;
}

.ellipsis-tooltip-arrow {
	visibility: hidden;
}

.ellipsis-tooltip-arrow::before {
	visibility: visible;
	content: "";
	transform: rotate(45deg);
}

.ellipsis-tooltip[data-popper-placement^="top"] > .ellipsis-tooltip-arrow {
	bottom: -3px;
}

.ellipsis-tooltip[data-popper-placement^="bottom"] > .ellipsis-tooltip-arrow {
	top: -3px;
}

.ellipsis-tooltip[data-popper-placement^="left"] > .ellipsis-tooltip-arrow {
	right: -3px;
}

.ellipsis-tooltip[data-popper-placement^="right"] > .ellipsis-tooltip-arrow {
	left: -3px;
}
</style>
