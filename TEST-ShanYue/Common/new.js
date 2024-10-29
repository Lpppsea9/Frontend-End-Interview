/* 
new一个实例的过程中发生了什么，举例构造函数 
  function (name, age) {
    // const this = {}
    this.name = name;
    this.age = age;
    // return this
  };
可以理解为这个构造函数的属性 name 和 age 隐式的赋给this这个对象
然后返回this
执行new 操作符的时候, 实例会继承这个构造函数的属性
理解成三步:
1.以构造器的prototype属性为原型，创建新对象
2.将新对象和调用参数传给构造器并且执行
3.如果构造器没有手动返回对象，则返回第一步创建的对象, 如果有，则舍弃第一步创建的新对象，返回手动return的对象
*/

let Parent = function (name, age) {
	this.name = name;
	this.age = age;
	// return {
	// 	like: "run",
	// };
};

const myNew = function (Parent, ...args) {
	const instance = Object.create(Parent.prototype);
	const result = Parent.apply(instance, args);
	return typeof result === "object" ? result : instance;
};
