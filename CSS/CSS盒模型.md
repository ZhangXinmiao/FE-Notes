CSS盒模型有两种模式：标准模式和怪异模式，这和```<DOCTYPE html>```有关,正常声明了就会以标准模式计算元素宽度
- 标准盒模型：元素的宽高 = content (只包含content的宽和高)
- 怪异模式：元素的宽高 = content宽高 + padding + border
- 元素宽高的极端模式可以通过：```box-sizing:content-box（默认）/border-box```来切换