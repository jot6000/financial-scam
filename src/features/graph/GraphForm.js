import { useState } from "react"

export default function GraphForm(props){
    const [name,setName] = useState('')
    const [xname,setxName] = useState('')
    const [yname,setyName] = useState('')
    const [cords,setcords] = useState([{x:0,y:0}])

    const addCords=(e)=>{
        e.preventDefault()
        cords.push({x:0,y:0})

        var temp = JSON.parse(JSON.stringify(cords))

        setcords(temp)
    }

    return(
        <form>
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
            <input value={xname} onChange={(e)=>setxName(e.target.value)} placeholder="X Axis Name"/>
            <input value={yname} onChange={(e)=>setyName(e.target.value)} placeholder="Y Axis Name"/>
            {cords.map((cord)=>
                <div>
                    <input type='number' value={cord.x} placeholder="x"/>
                    <input type='number' value={cord.y} placeholder="y"/>
                </div>
            )}
            <button onClick={(e)=>addCords(e)}>+</button>
            
        </form>
    )
}