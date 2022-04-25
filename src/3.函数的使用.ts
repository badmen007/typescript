
// 写函数的时候也要添加类型 1) 给函数本身添加类型 2. 函数参数添加类型 3. 函数的返回值添加类型

// 函数申明方式有两种表达申明的方式 const fn = function() {}

// 如果在函数里标识 返回值需要用 => 来标识
// 这里一般我们不需要给函数本身添加蕾西格尼，因为函数表达式可以自动推导
const sum = (a: string, b: string): string => a + b;

function defaultFn(a = '', ...args: number[]) {

}

function defaultFn1(this: IThis, a='', b?: string) { // 可选参数 不写问号的话就是必传选项
  arguments
}
const obj = { name: 'xz'};
type IThis = typeof obj;
defaultFn1.call(obj, 'a')

// 1. this类型要进行申明   2. 我们不再使用arguments(用的时候就是取length) 3.设置？来表述属性是否是必传的

// 什么叫函数的重载 ？  参数的不同对应的逻辑就不同
// ts的函数重载指代的就是类型，和代码没有关系
function toArray(val: number): number[]
function toArray(val: string): string[]
function toArray(val: string | number) : string[] | number[] { // 只要实现的参数是父类型就好 
  if( typeof val === 'string') {
    return val.split('')
  }else {
    return val.toString().split('').map(Number);
  }
}
// 一个函数 给定不同的参数希望根据传入的参数类型 来做相应的逻辑 这里就用到了函数的重载 
// 'abc' -> ['a', 'b', 'c']
// 123 -> [1, 2, 3]
toArray(123)
toArray('124')

export {}