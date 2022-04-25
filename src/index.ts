
// 类型断言 有些属性我们并不知道是什么类型， 那这个时候我们就可以采用断言的形式

let n: number | string; // 联合类型只能取到公共的方法  就是number和 string 共同的方法

//n = 1; // 根据赋得值进行推断

// as 语法 就是强制断言是什么类型

let ele:HTMLElement | null = document.getElementById('app');

// 表示有值 再去取值 
// ele?.style
(ele as HTMLElement).style.background = 'red'

// ! ts的符号 非空断言
let ele1: HTMLElement = document.getElementById('app')!;
(<HTMLElement>ele).style.background = 'red';

// 类型断言的三种方式 as、 !、 <HTMLElement>ele


// 类型还可以是字面量的
type IDirection = 'up' | 'down' | 'left' | 'right';  // 枚举拿到的是值  这种联合类型拿到的是类型
let direction: IDirection = 'down'

// 补充说明 联合类型 是并集么？ ts中就是并集

type Person1 = {name: string, handsome: string}
type Person2 = {name: string, height: string}

type Person3 = Person1 | Person2; // 可以是Person1 和Person2
type Person4 = Person1 & Person2;

let person1: Person1 = {name: 'zs', handsome: 'shi'};
let person2: Person2 = {name: 'xz', height: 'xz'}

let person3: Person3 = person1;

let person4: Person4 = {name: 'xz', handsome: 'ss', height: 'sss'};

export {};