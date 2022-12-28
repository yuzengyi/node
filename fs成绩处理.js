//导入fs模块
const fs = require( 'fs')
//调用fs.readFile()读取文件的内容
fs.readFile('成绩.txt','utf8',function(err,dataStr){
    //判断是否读取成功
    if (err) {
        return console.log('读取文件失败!' + err. message)
    }
    //console.log('读取文件成功!' + dataStr)
    //先把成绩的数据，按照空格进行分割
    const arrOld = dataStr.split(' ')
    console.log(arrOld)
    //循环分割后的数组，对每一项数据，进行字符串的替换操作
    arrNew = []
    arrOld.forEach(item =>{
        arrNew.push(item.replace('=',': '))
    })
    console.log(arrNew)
    // 4.3把新数组中的每一项，进行合并，得到一个新的字符串
    const newStr = arrNew.join('\r\n')
    console.log(newStr)
    // 调用fs.writeFile()方法，把处理完毕的成绩，写入到新文件中
    fs.writeFile('成绩-ok.txt',newStr,function(err){
        if (err) {
            return console.log('写入文件失败!' + err.message)
        }
        console.log('成绩写入成功!')
    })
})