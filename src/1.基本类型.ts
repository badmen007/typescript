
//  有很多的内置类型 dom promise 还有很多的基础类型 -> 自定义一些其他的类型
// 一切从安全的角度考虑 尽可能的避免any, 写了any就是不检测了 但是有点时候还是要写any的

// 这个类型为什么是小写的而不是大写的？ 那就要区分什么是基础类型什么是包装类型
// 大写的是类类型 描述的是实例
// 1.string
let str: string = "abc";
// 1.number
let num: number = 123;
// 1.boolean
let bool: boolean = true;

// 4.ts中还有数组类型 什么叫数组？ 数组真是的概念是存储一类类型的东西
let arr1: number[] = [1, 2, 3, 4, 5];
let arr2: (number | string)[] = [1, 2, 3, 4, 5]; // 联合类型

let arr3: Array<number | string> = ['a', 1, 2, 3];

// 5.元组 就是固定长度固定类型的一个数组
// 是个数组可以push pop 等  但是不能取超过数组长度的索引 
let tuple: [number, string] = [1, 's'] // 取值的时候只能通过已经有的属性取值

console.log(tuple.length)

// 6.枚举类型(有多组值组成的，都可以用枚举)
// 枚举的值 会根据第一个的值来递增
// 当加入了const之后 编译就不会生成新的对象 ...
const enum ROLE {
  USER,
  ADMIN='a',
  MANAGER='b'
}

console.log(ROLE.ADMIN) // 常量枚举 不会重新生成新的对象

// null / undefined
let n1: undefined = undefined; 
let n2: null = null; 
// 在默认的情况下 只能null给null, undefined 给 undefined 

// 7.void 表示的是空, undefined 也是空, 所以undefined 可以赋值给void
function sum(): void { 
  return undefined
}

// 8.never 永远无法到达的, 一般标识never都是用户自己来标识的, 告诉代码无法执行
// never是任何类型的子类型, 可以赋值给任何类型
function fn(): never {
  throw new Error()
}

// 可以用never来实现完整性保护

// 我们的需求是计算图形的面积 方形

type IRant = {
  width: number,
  height: number, 
  kind: 'rant'
}
type ISquare = {
  width: number,
  kind: 'square'
}

let rant: IRant = {width: 100, height: 20, kind: 'rant'}
let square = {width: 100, kind: 'square'}
// obj: rant | square 这样写不行因为 表示的是值 而不是类型

function validate(obj: never){}
function getArea(obj: IRant | ISquare) {
  if(obj.kind === 'rant') {
    return obj.width * obj.height
  }
  if(obj.kind === 'square') {
    return obj.width * obj.width
  }
  validate(obj) // 可以用于完整性保护， 来保证代码的健壮性。 永远无法到达才会走到never
}

// 9. 原始类型 symbol、 bigInt

let s1 = Symbol();
let s2 = Symbol();
// console.log(s1 === s2)  // false

// 10.非原始类型

// object

function create(target: object) {}
create({});
create([]);

// 11.any任意类型，一旦写了any之后 那任何的校验都会失效， 如果默认不给类型的话就是any类型

// 字符串 数字 布尔  数组 元组 枚举 null undefined void never object any (symbol bigInt)


export {};