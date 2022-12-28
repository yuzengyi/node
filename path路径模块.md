# path 路径模块

## 什么是path路径模块
path模块是Node.js 官方提供的、用来处理路径的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理需求。
例如:
* `path.join()`方法，用来将多个路径片段拼接成一个完整的路径字符串
* `path.basename()`方法，用来从路径字符串中，将文件名解析出来

如果要在JavaScript 代码中，使用path模块来处理路径，则需要使用如下的方式先导入它:
```javascript
const path = require('path')
```
### 路径拼接 `path.join()`
`path.join([...paths])`
参数解读：
* `...paths <string> `路径片段序列
* 返回值:` <string>`
```javascript
const path = require('path')
const fs = require('fs')

// 注意 ../ 会抵消前面的路径
// ./ 会被忽略
const pathStr = path.join('/a', '/b/c', '../../', './d', 'e')
console.log(pathStr) // \a\d\e

fs.readFile(path.join(__dirname, './files/1.txt'), 'utf8', function (err, dataStr) {
  if (err) {
    return console.log(err.message)
  }
  console.log(dataStr)
})
```
### 获取路径中的文件名`path.basename()`
使用`path.basename()`方法，可以获取路径中的最后一部分，经常通过这个方法获取路径中的文件名，语法格式如下:
```javascript
path.basename(path[, ext])
```
参数解读:
* `path <string>`必选参数，表示一个路径的字符串
* `ext <string>`可选参数，表示文件扩展名
* 返回: `<string>`表示路径中的最后一部分
```javascript
const path = require('path')

const fpath = '/a/b/c/index.html'

const fext = path.extname(fpath)
console.log(fext) // .html
```


