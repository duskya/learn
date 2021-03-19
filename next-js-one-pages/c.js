import React,{useState} from 'react'
function C(){

    const [color,setColor] = useState('blue')
    const changeColor =()=>{
        setColor(color=='blue'?'red':'blue')
    }

    return(
        <>
            <div>
                c
            </div>
            <div><button onClick={changeColor}>改变颜色</button></div>
            <style jsx>
                {`
                    div{color:${color};}
                    
                `}
            </style>
        </>
    )
}
export default C