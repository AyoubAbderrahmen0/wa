import React, { Component } from 'react'

export default class Profile extends Component {
    state={Tasks:[{id:"1",name:"Task 1",isDone:false},
        {id:"2",name:"Task 2",isDone:true},
        {id:"3",name:"Task 3",isDone:false},
        {id:"4",name:"Task 4",isDone:false}
    ],
  newTask:""}
  render() {
    const doneTask=(id)=>{
        this.setState({Tasks:this.state.Tasks.map(task=>task.id==id?{...task,isDone:!task.isDone}:task)})
    }
    const deleteTask=(id)=>{
      this.setState({Tasks:this.state.Tasks.filter(task=>task.id!=id)})
    }
    const addTask=()=>{
      this.setState({Tasks:[...this.state.Tasks,{id:Math.random(),name:this.state.newTask,isDone:false}],newTask:""})
    }
    return (
      <div>
        <input 
        value={this.state.newTask}
        onChange={(e)=>this.setState({newTask:e.target.value})}/>
        <button onClick={()=>addTask()}>add new task</button>
        {this.state.Tasks.map(task =>
            <div key={task.id} style={{display:"flex",justifyContent:"space-around",border:"solid",margin:"10px"}}>
                <p>{task.name}</p>
                <button style={{background:task.isDone?"green":"red"}} onClick={()=>doneTask(task.id)}>{task.isDone?"Done":"UnDone"}</button>
                <button onClick={()=>deleteTask(task.id)}>delete</button>
            </div>
        )}
      </div>
    )
  }
}
