import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../Redux/Actions"

const AddTask = ()=>{
    const [title, setTitle]= useState ('')
    const dispatch = useDispatch()
    const handleAdd =()=>{
        dispatch(addTask({title, isDone: false, id:Math.random()}))
        setTitle('')

    }
    return(
        <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center', marginTop: '20px'}}>
            <input value={title} type="text" onChange={(e)=>setTitle(e.target.value)}/>
            <button onClick={handleAdd}><img src="https://static.vecteezy.com/system/resources/previews/009/362/738/non_2x/tick-icon-accept-approve-sign-design-free-png.png" alt="not found" style={{width:'20px'}}/></button>
        </div>
    )
}
export default AddTask