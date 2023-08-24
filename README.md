# nodeuuid
将html中的node节点生成其唯一标识 uuid ，不污染html本身。
将页面中的所有node节点，生成其在当前页面的唯一标识字符串uuid。

# 原理
原理： 当前节点的nodeName + 当前节点在父节点下，属于第几个 tagName ，然后追个向父级进行取，将node本身+父级+父父级+.... 拼接在一起

# 快速测试
运行 demo.html 即可
运行后控制台输出：
````
----------------
uuid : HTML1_BODY1_DIV1_P1
<p>哈喽</p>​
----------------
uuid : HTML1_BODY1_DIV1_P2
<p>世界</p>​
````