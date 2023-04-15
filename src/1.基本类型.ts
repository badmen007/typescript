// 学习ts就是学习ts中的类型

// 常见的类型   基础类型、高级类型 有了这两种类型就能写出自己的类型

// TS中冒号后面的是类型  等号后面的是值

// ts的类型是从安全的角度出发的
// ts是在开发的时候检测的
// 不是所有的变量都需要类型推导，只有在无法推断的时候才需要去编写类型

let name: string = 'xz';
let age: number = 10;
let male: boolean = true;

// 类型大小写的区别是什么？ 原始数据类型，都采用小写的类型 
let s1:string = 'abc';
// let s2: string = new String('xz')

// let s3: String = new String('xz')
// let s4: String = 'xz'

// 在ts中 大写的类型 可以描述实例 new String() 
// 包装器对象 

// 1. 数组类型：[] 数组是多个相同类型数据的集合  js数组元素可以是任意的
// ts中有两种方式可以标注数组类型

let arr1: number[] = [1,2,3];
let arr2: Array<number> = [1,2,3];
let arr3: (string | number)[] = [1, 2, 3, "a", "b", "c"];


// 2. 元组
// 元组是多个不同类型数据的集合
let tuple: [string, number, boolean] = ['a', 1, true];

// 只能添加已经存在的类型
//tuple.push({}) // 报错 类型“{}”的参数不能赋给类型“string | number | boolean”的参数

// 3. 枚举类型 - 也就是说这个枚举类型就是一个对象，在不赋值的情况下，默认第一个值为0，后面的值依次递增
// 枚举类型是一组有名字的常量集合
// 枚举类型的值是只读的
// 枚举类型的值是从0开始的 - 递增的

// 枚举类型的值可以是字符串
// 枚举类型的值可以是数字
// 枚举类型的值可以是字符串和数字

// 反举 通过值获取到名字

enum USER_ROLE {
  USER,
  ADMIN,
  SUPER_ADMIN
}

let a = USER_ROLE.ADMIN;

// 常量枚举 会在编译的时候被移除 不能反举 直接将值拿出来
// 应用的场景是什么？ 状态码、接口的定义、权限、标识位
const enum USER_ROLE2 {
  USER,
  ADMIN,
  SUPER_ADMIN
}

// 4. null undefined

const n: null = null;
const u: undefined = undefined;


// 5. void  没有任何类型就是空类型 函数的返回值可以用void来标识
// void类型的变量只能赋值为undefined和null

// 6. never 类型 代表永远不会有返回值的类型 是任何类型的子类型 never意味着值不可能存在

// a. 函数无法到达的终点 
function whileTrue(): never {
  while(true) {}
}               
// b. 抛出异常
function throwError(msg: string): never {
  throw new Error(msg);
}
// c. 死循环


// 7. object 除了基本类型以外的类型
// object类型的变量只能赋值为对象类型

let obj: object = {a: 1};
// obj.a = 2; // 报错 不能将类型“{ a: number; }”分配给类型“object”

// 8. symbol  es6中新增的类型
// symbol类型的变量只能赋值为symbol类型

let s: symbol = Symbol();

// 9. bigint  es2020中新增的类型
// bigint类型的变量只能赋值为bigint类型

// let b: bigint = 10n; // 报错 不能将类型“10”分配给类型“bigint”

// string number boolean symbol bigint null undefined void never object

// any 任意类型 任何类型都可以赋值给any类型 写了any之后所有的类型校验都消失了， 如果一个变量在声明的时候没有赋值的话也是any类型
// any类型的变量可以赋值给任何类型

let a1: any = 1;
a1 = 'a';
a1 = true;

// unknown 未知类型 任何类型都可以赋值给unknown类型 但是unknown类型的变量不能赋值给其他类型
// unknown类型的变量可以赋值给any类型

let a2: unknown = 1;
a2 = 'a';
a2 = true;

export {}