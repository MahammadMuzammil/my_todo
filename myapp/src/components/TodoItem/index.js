import './index.css'
import { MdDelete } from "react-icons/md";

const TodoItem=(props)=>{

const  {todoitem,changeStatus,deleteTodo} = props
const {task,date,id,ischecked,} = todoitem
const handleOnclick=()=>{
    changeStatus(id)
}

const handleDelete=()=>{
deleteTodo(id)
}

    return(
        <li className='todo-item'>
                <div className='label-item-container'>
                <label className = {`label-item ${ischecked && 'active'}`}  htmlFor={id} onClick={handleOnclick}  >{task}</label>
                <input type='checkbox' id ={id} className='checkbox' checked={ischecked}  />
                </div>
                <button onClick={handleDelete} className='deleteBtn'> <MdDelete/> </button>
        </li>
    )

}
export default TodoItem







