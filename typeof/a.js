function typeOf(obj){
    // let res = Object.prototype.toString.call(obj).split(' ')[1]

    // console.log(obj,Object.prototype.toString.call(obj)
    // ,Object.prototype.toString.call(obj).split(' '),res,res.length)
    // //substring() 方法用于提取字符串中介于两个指定下标之间的字符
    // res = res.substring(0,res.length -1).toLowerCase()
    
    console.log(Object.prototype.toString.call(obj).slice(8, -1).toLowerCase())
}
typeOf([])