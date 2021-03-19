// import moment from 'momnet'
import React,{useState} from 'react'
import dynamic from 'next/dynamic'

const Timeone =dynamic(import("../components/timeone"))

function Time(){
    const [nowTime,setTime] = useState(Date.now())//把方法变成异步

    const changeTime = async () =>{
        const moment = await import('moment')//等待monent加载完成
        setTime(moment.default(Date.now()).format())
    }
    return(
        <>
            <div>显示时间为:{nowTime}</div>
            <Timeone />
            <div><button onClick={changeTime}>改变时间格式</button></div>
        </>
    )
}
export default Time