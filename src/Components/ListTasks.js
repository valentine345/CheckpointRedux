import { useSelector } from "react-redux"
import CardTask from "./CardTask"
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ListTasks = ()=>{
    const tasks = useSelector(state=>state.tasks)
    const [filB, setFilB] = useState('ALL')
    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', marginTop:'20px'}}>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={()=>setFilB("ALL")}>All</Button>
                <Button variant="secondary" onClick={()=>setFilB("DONE")}>Done</Button>
                <Button variant="secondary" onClick={()=>setFilB("NOT DONE")}>Not Done</Button>
            </ButtonGroup>
            {/* <button onClick={()=>setFilB("ALL")}>All</button>
            <button onClick={()=>setFilB("DONE")}>Done</button>
            <button onClick={()=>setFilB("NOT DONE")}>Not Done</button> */}
            {
                filB ==="ALL"?
                tasks.map((el,i,t)=> <CardTask el={el} />)
                :
                filB === "DONE"?
                tasks.filter((el,i,t)=>el.isDone === true).map((el,i,t)=> <CardTask el={el} />)
                :
                tasks.filter((el,i,t)=>el.isDone === false).map((el,i,t)=> <CardTask el={el} />)

            }
        </div>
    )
}
export default ListTasks