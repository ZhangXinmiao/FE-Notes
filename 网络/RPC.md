首先要知道IPC(Inter Process Communication)进程间通信,进程间通信又分为两种类型:
- LPC(Local Procedure Call)本地过程调用
- RPC(Remote Procedure Call)远程过程调用

远程调用需要解决的问题：
1、服务端如何能够知道哪个函数？
RPC调用中客户端和服务端都维护着一个call id和函数的映射关系，远程调用的时候就需要带上调用函数的call id
2、客户端如何把参数传给远程函数
首先进程不是一个，同时客户端和服务端使用的语言也可能不同，所以需要序列化和反序列化。比如：客户端发送时序列化为字节流，传输到服务端后，服务端再来做反序列化
3、网络传输
只要能够把函数的call id和序列化的字节流传输给服务端，都可以作为传输层：TCP、UPD、HTTP2（gRPC）

参考：
- [知乎](https://www.zhihu.com/question/25536695)