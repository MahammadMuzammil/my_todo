import { Component } from "react";
import TodoItem from "../TodoItem";
import { v4 as uuidv4 } from 'uuid'
import { Popup } from 'reactjs-popup'

import './index.css'
class Home extends Component {
    state = {
        todoList: [],
        taskInput: '',
        dateInput: '',
        dateErrMsg: 'Choose Date!!',
        showDateErrMsg: false,
        taskErrMsg: 'Enter Task',
        showTaskErrMsg: false,
        selectedDate: ''
    }

    getTodoListFromLocalStorage = () => {
        const stringifiedList = localStorage.getItem('list')
        const parsedList = JSON.parse(stringifiedList)
        if (parsedList === null) {
            this.setState({ todoList: [] })
        }
        else {
            this.setState({ todoList: parsedList })
        }


    }

    componentDidMount() {
        this.getTodoListFromLocalStorage()
    }

    deleteTodo = (id) => {
        this.setState(prevState => ({ todoList: prevState.todoList.filter(eachTodo => eachTodo.id !== id) }))
    }
    changeDate = (e) => {
        this.setState({ dateInput: e.target.value ,selectedDate:''})
    }
    changeTask = (e) => {
        this.setState({ taskInput: e.target.value })
    }
    validateTask = () => {
        if (this.state.taskInput === '') {
            this.setState({ showTaskErrMsg: true })
            return false
        }
        this.setState({ showTaskErrMsg: false })
        return true
    }

    validateDate = () => {
        if (this.state.dateInput === '') {
            this.setState({ showDateErrMsg: true })
            return false
        }
        this.setState({ showDateErrMsg: false })
        return true
    }
    changeStatus = (id) => {

        this.setState(prevState => ({
            todoList: prevState.todoList.map(eachTodo => {
                if (eachTodo.id === id) {
                    return {
                        ...eachTodo,
                        ischecked: !eachTodo.ischecked
                    }
                } else {
                    return eachTodo
                }
            })
        }))
    }
    

    addTask = () => {
        const { taskInput, dateInput } = this.state
        const taskValidation = this.validateTask()
        const dateValidation = this.validateDate()
        if (taskValidation && dateValidation) {

            const newTask = {
                id: uuidv4(),
                task: taskInput,
                date: dateInput,
                ischecked: false

            }
            this.setState(prevState => ({ todoList: [...prevState.todoList, newTask], taskInput: '' }))
        }


    }
    saveTodolist = () => {
        const { todoList } = this.state
        localStorage.setItem('list', JSON.stringify(todoList))
    }
  
    render() {
        const { todoList, showDateErrMsg, showTaskErrMsg, dateErrMsg, taskErrMsg, taskInput, selectedDate ,dateInput} = this.state
        console.log(todoList)
const filteredList= todoList.filter(eachTodo=>eachTodo.date===dateInput)


        return (
            <div className="background">
                

                    <h1 className="main-heading">
                        Create
                        <span className="main-heading-span">
                            Your Daily Schedule
                        </span>

                    </h1>
                    
                
                <div className="input-container">
                    <div className="align">
                        <p className="choose">Choose Date:</p>
                        <input type="date" className="dateEl" onChange={this.changeDate} />
                        {showDateErrMsg && <p className="errMsg">{dateErrMsg}</p>}
                    </div>
                    <div className="task-input-container">
                        <input type="text" className="task-input" value={taskInput} onChange={this.changeTask} placeholder="Enter your Task" />
                        {showTaskErrMsg && <p className="errMsg">{taskErrMsg}</p>}

                    </div>
                    <button className="add-btn" onClick={this.addTask}>Add</button>
                </div>

                <h1>My Tasks</h1>

                 <ul className="tasks-container">
                    {filteredList.map(eachTodo => <TodoItem key={eachTodo.id} todoitem={eachTodo} changeStatus={this.changeStatus} deleteTodo={this.deleteTodo} />)}

                </ul>

                <div className="btn">
                    <button className="save-btn" onClick={this.saveTodolist} >Save</button>

                </div>
            </div>
        )
    }

}
export default Home

