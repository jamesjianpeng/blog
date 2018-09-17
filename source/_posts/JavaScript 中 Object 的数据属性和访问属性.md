---
title: JavaScript Object 的数据属性和访问属性
date: 2018-02-01 13:41:42
tags: JavaScript
---

---
### Object 的数据属性

  1. Object 有四个数据属性
      * configurable：默认是 false，不可以进行 delete 等操作
      * enumerable：默认是 false，不可枚举，不可使用 for in 或者 Object,keys 获取 key
      * writable：默认是 false，不可编辑，不可重新赋值
      * value：默认是 undefined

  2. Object 有两个访问器属性
      * get
      * set

  3. 当使用访问器属性的时候， writable 和 value 属性不能存在（它们之间的关系是互斥）
      * 使用 set 就表示这个属性可写
      * 使用 get 就是获取到 value 的值

### configurable：默认是 false，不可以进行 delete 等操作

```js
      var person = {};
      Object.defineProperty(person, 'name', {
          value: 'james'
      });
      delete person.name;
      console.log(person.name); // james

      var animal = {};
      Object.defineProperty(animal, 'name', {
          configurable: false, // 默认就是 false，不可删除
          value: 'dog'
      });
      delete animal.name;
      console.log(animal.name); // dog
```

### enumerable：默认是 false，不可枚举，不可使用 for in 或者 Object,keys 获取 key

```js
      var person = {};
      Object.defineProperty(person, 'name', {
          value: 'james'
      });
      console.log(Object.keys(person)) // []


      var animal = {};
      Object.defineProperty(animal, 'name', {
          enumerable: false, // 默认就是  false，不可以枚举
          value: 'dog'
      });
      console.log(Object.keys(animal)) // []
```

### writable：默认是 false，不可编辑，不可重新赋值

```js
      var person = {};
      Object.defineProperty(person, 'name', {
          value: 'james'
      });
      person.name = 'Lili';
      console.log(person.name); // james

      var animal = {};
      Object.defineProperty(animal, 'name', {
          writable: false, // 默认就是 false，不可编辑
          value: 'dog'
      });
      animal.name = 'cat';
      console.log(animal.name); // dog
```

### value：默认是 undefined

```js
    var person = {};
    Object.defineProperty(person, 'name', {});
    console.log(person.name); // undefined

    var animal = {};
    Object.defineProperty(animal, 'name', {
        value: undefined
    });
    console.log(animal.name); // undefined
```

### 访问器属性：get 和 set

```js
    var logo = {}, outState, num = 0;
    Object.defineProperty(logo, 'state', {
        get() {
            num++;
            return outState
        },
        set(value) {
            outState = value;
        }
    })


    console.log(logo.state); // undefined
    console.log(outState); // undefined
    console.log(num); // 1

    logo.state = true;
    console.log('logo.state = true', logo.state); // true
    console.log('logo.state = true', outState); // true
    console.log('logo.state = true', num); // 2
```

参考文献：

* 《JavaScript 高级程序设计》 第三版
