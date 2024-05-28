/* 实现eventBus */
class EventBus {
	constructor() {
		this.eventObj = {};
	}
	on = (eventName, callback) => {
		if (!this.eventObj[eventName]) {
			this.eventObj[eventName] = [];
		}
		this.eventObj[eventName].push(callback);
	};
	emit = (eventName, ...params) => {
		if (this.eventObj[eventName]) {
			this.eventObj[eventName].forEach((handler) => {
				handler(...params);
			});
		}
	};
	off = (eventName, callback) => {
		if (!this.eventObj[eventName]) {
			return new Error("事件无效");
		}
		if (!callback) {
			delete this.eventObj[eventName];
		} else {
			const index = this.eventObj[eventName].indexOf(callback);
			if (index === -1) {
				return new Error("不存在该绑定事件");
			}
			this.eventObj[eventName].splice(index, 1);
			if (this.eventObj[eventName].length === 0) {
				delete this.eventObj[eventName];
			}
		}
	};

	once = (eventName, callback) => {
		const cb = (...args) => {
			callback(...args);
			this.off(eventName, cb);
		};
		this.on(eventName, cb);
	};
}

const eventbus = new EventBus();
const aFn = () => {
	console.log("触发 x2 第二");
};

eventbus.on("x1", (val) => {
	console.log("触发 x11", val);
});

eventbus.on("x2", () => {
	console.log("触发 x2 第一");
});

eventbus.on("x2", aFn);

eventbus.off("x2", aFn);
eventbus.once("x3", (val) => {
	console.log("bb", val);
});
eventbus.emit("x3", "pp");
eventbus.emit("x3", "pp");
