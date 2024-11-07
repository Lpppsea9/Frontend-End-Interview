import { createPopper } from "@popperjs/core";

export function getPadding(el) {
	const style = window.getComputedStyle(el, null);
	const paddingLeft = Number.parseInt(style.paddingLeft, 10) || 0;
	const paddingRight = Number.parseInt(style.paddingRight, 10) || 0;
	const paddingTop = Number.parseInt(style.paddingTop, 10) || 0;
	const paddingBottom = Number.parseInt(style.paddingBottom, 10) || 0;
	return {
		left: paddingLeft,
		right: paddingRight,
		top: paddingTop,
		bottom: paddingBottom,
	};
}

const renderContent = (target, parent) => {
	const tooltipContent = document.createElement("div");
	const arrowContent = document.createElement("div");
	arrowContent.className = "ellipsis-tooltip-arrow";
	arrowContent.setAttribute("data-popper-arrow", "true");
	tooltipContent.innerText = target.dataset.title;
	tooltipContent.setAttribute("role", "tooltip");
	tooltipContent.appendChild(arrowContent);
	tooltipContent.className = "ellipsis-tooltip";
	parent.setAttribute("aria-describedby", "tooltip");
	parent.appendChild(tooltipContent);
	return {
		tooltipContent,
	};
};

export function useEllipsisPopper(options = {}) {
	const handleCellMouseEnter = (event) => {
		const target = event.target;
		const parent = target.parentNode;
		// console.log("target", event.target);
		// console.log("parentNode", target.parentNode);
		console.log("scrollWidth", parent.scrollWidth);
		console.log("clientWidth", parent.clientWidth);

		let range = document.createRange();
		range.setStart(target, 0);
		range.setEnd(target, target.childNodes.length);
		const rangeWidth = range.getBoundingClientRect().width;
		range.detach();
		const { left, right } = getPadding(target);
		const horizontalPadding = left + right;
		if (Math.floor(rangeWidth + horizontalPadding) > target.clientWidth) {
			const { tooltipContent } = renderContent(target, parent);
			const popperInstance = createPopper(parent, tooltipContent, {
				placement: options.placement ?? "top",
				modifiers: [
					{
						name: "offset",
						options: {
							offset: [0, 8],
						},
					},
				],
			});

			const removePopper = () => {
				console.log("移除监听");
				popperInstance.destroy();
				parent.removeChild(tooltipContent);
				parent.removeAttribute("aria-describedby");
				target.removeEventListener("mouseleave", removePopper);
			};

			target.addEventListener("mouseleave", removePopper);
		}
	};

	return {
		handleCellMouseEnter,
	};
}
