# http 模块

## 什么是客户端、服务器
在网络节点中，负责消费资源的电脑，叫做客户端;负责对外提供网络资源的电脑，叫做服务器。

http模块是Node.js 官方提供的、用来创建web服务器的模块。通过 http模块提供的`http.createServer()`方法，就能方便的把一台普通的电脑，变成一台Web 服务器，从而对外提供 Web资源服务。
如果要希望使用http模块创建Web服务器，则需要先导入它:
```javascript
const http = require('http')
```
## 创建基本 Web 服务器
```javascript
const http = require('http')

// 创建 web 服务器实例
const server = http.createServer()

// 为服务器实例绑定 request 事件，监听客户端的请求
server.on('request', function (req, res) {
  const url = req.url
  const method = req.method
  const str = `Your request url is ${url}, and request method is ${method}`
  console.log(str)

  // 设置 Content-Type 响应头，解决中文乱码的问题
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  // 向客户端响应内容
  res.end(str)
})

server.listen(8080, function () {
  console.log('server running at http://127.0.0.1:8080')
})
```
## 实现简陋路由效果
```javascript
const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  const url = req.url
  // 设置默认的响应内容为 404 Not found
  let content = '<h1>404 Not found!</h1>'
  // 判断用户请求的是否为 / 或 /index.html 首页
  // 判断用户请求的是否为 /about.html 关于页面
  if (url === '/' || url === '/index.html') {
    content = '<h1>首页</h1>'
  } else if (url === '/about.html') {
    content = '<h1>关于页面</h1>'
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end(content)
})

server.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})
```
