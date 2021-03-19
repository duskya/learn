import {withRouter} from 'next/router'
import Link from 'next/link'
import axios from 'axios'

const A = ({router,list}) =>{
    return(
        <>
            <div>{router.query.name}传过来的数值,获取的数据{list}</div>
            <Link href="/"><a>返回首页</a></Link>
        </>
    )
}

A.getInitialProps = async ()=>{
    const promise =new Promise((resolve)=>{
            axios('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then(
                (res)=>{
                    console.log('远程数据结果：',res)
                    resolve(res.data.data)
                }
            )
    })
    return await promise
}

export default withRouter(A)

// export default ()=>(
//     <>
//         <div>A   </div>
//         <Link href="/"><a>返回首页</a></Link>
//     </>
// )