// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
// import W from '../components/W'
import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import '../static/test.css'


const Home = () => {
  function gotoA(){
    // Router.push('/a?name=按钮')
    Router.push({
      pathname:"/a",
      query:{
        name:'按钮'
      }
    })
  }

  Router.events.on('routeChangeStart',(...args)=>{
    console.log('1.routeChangeStart->路由开始变化,参数为:',...args)
  })
  Router.events.on('routerChangeComplete',(...args)=>{
    console.log('routeChangeComplete->路由结束变化,参数为:',...args)
  })
  Router.events.on('beforeHistoryChange',(...args)=>{
    console.log('3,beforeHistoryChange->在改变浏览器 history之前触发,参数为:',...args)
  })
  Router.events.on('hashChangeStart',(...args)=>{
    console.log('5,hashChangeStart->hash跳转开始时执行,参数为:',...args)
  })
  Router.events.on('hashChangeComplete',(...args)=>{
    console.log('6,hashChangeComplete->hash跳转完成时,参数为:',...args)
  })

  return(
    <>
      <div>我是首页</div>
      <div>
        <Link href='/a?name=haha'>
          <a>
            <span>去A页面</span>
            <span>前端博客</span>
          </a>
        </Link>
      </div>
      <div><Link href="/b"><a>去b页面</a></Link></div>
      <div>
        <button onClick={gotoA}>去A页面</button>
      </div>
      <div>
         <Link href="#c"><a>hash跳转</a></Link>
      </div>
      <div>
         <Link href="/c"><a>c</a></Link>
      </div>
      <div>
         <Link href="/time"><a>time</a></Link>
      </div>
      <div>
         <Link href="/header"><a>header</a></Link>
      </div>
    </>
  )
}

export default Home


// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//         <W>按钮</W>
//       </Head>

//     </div>
//   )
// }
