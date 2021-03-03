使用http 可以直接引用：require('http');
Node.js 的 HTTP API 都是非常底层的。它仅进行流处理和消息解析。它将消息解析为消息头和消息体，但不会解析具体的消息头或消息体。处理重复的消息头可参考message.headers。

