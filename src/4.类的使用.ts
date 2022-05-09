
// 类 1. 类中的属性定义 实例属性 原型属性  原型方法 静态方法(主要目的就是声明类中的this)

class Circle {
  public _r!: number; //表示的是非空断言
  // this上申明的属性 必须要提前声明
  constructor(public x: number,public y: number, r?: number) { // 如果你不想把这个属性挂到实例上的话  那就不用public 
    this.x = x;
    this.y = y;
    if(r !== undefined) {
      this._r = r;
    }
  }
}
// 通过修饰符直接将传递的属性绑定到this上 public
let circle = new Circle(1, 2, 3);

// 属性修饰符 有四种 public(公开的) private(自己访问) protected(自己和自己的孩子可以访问) readonly(只读属性)
// 这些修饰符只是针对ts编写代码时的效果 后面编译成js之后就消失了 readonly在构造函数中可以随意修改(初始化) 在其他的地方就不能修改

/* class Animal {
  constructor(public name: string) {} // 加了这个关键字 就行相当于给this上赋值了  构造函数中赋值都是初始化
}
class Cat extends Animal{
  constructor(public age: number, name: string) {
    super(name)
  }
}

const cat = new Cat(100, 'Top'); */

// 类中依旧可以使用原型属性、方法

class Animal {
  constructor(public name: string) {} 
  public eat(): void {  // 父类的void标识不关心子类的返回值
    // return '父类eat'
  }
  static drink = 'xxxx'
  static sleep() {
    console.log('sleep');
  }
}
class Cat extends Animal{
  constructor(public age: number, name: string) {
    super(name)
  }
  get a() { // 属性访问器 定义的原型方法 
    return 1
  }
  public eat(): string {
    super.eat();
    return '子类eat'
  }
}
const cat = new Cat(12, 'xz');
// 我们这样通过public定义的属性是实例的属性还是原型的属性 ?
// super 在构造函数和静态方法中都 指代的是父类  在原型方法中 指代的是父类的原型

// 很少写类的继承  现在都是函数的组合

// 父类的静态方法就是static 声明的 可以被子类继承  无论是属性还是方法
// 静态方法是类调用  普通的就是实例调用
Cat.drink
Cat.sleep

export {};