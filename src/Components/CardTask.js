import { useDispatch } from "react-redux"
import { deleteTask, editDone } from "../Redux/Actions"

const CardTask =({el})=>{
    const dispatch = useDispatch()
    return(
        <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center', marginTop: '20px'}}>
            <h2 className={el.isDone && "ligne"}>{el.title}</h2>
            {/* <h3>{el.isDone ? "TRUE" : "FALSE"}</h3> */}
            <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
                <button onClick={()=>dispatch(editDone(el.id))}><img src="https://cdn-icons-png.flaticon.com/512/8683/8683794.png" alt="not found" style={{width:'20px'}}/></button>
                <button onClick={()=>dispatch(deleteTask(el.id))}><img src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" alt="not found" style={{width:'20px'}}/></button>
            </div>
        
        </div>
    )
}
export default CardTask