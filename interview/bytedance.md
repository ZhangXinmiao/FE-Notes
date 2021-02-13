1. 如何改变dom解析顺序（defer、async、prefetch、preload）
2. CI/CD
3. 考察prototype、this指向
   ```
    var A = function () { this.value = 1 }
    A.prototype.value = 2
    var a = new A()
    var b = {value: 4}
    var B = A.bind(b)
    var c = {value: 5}
    var C = B.bind(c)
    var value = 3
    A()
    B()
    C()

    console.log(value)   // 1
    console.log(a.value) // 1
    console.log(b.value) // 1 
    console.log(c.value) // 5
   ```
4. 实现promise.allsettled
5.  