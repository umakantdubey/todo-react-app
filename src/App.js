import React,{useState} from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import Todolist from './components/Todolist'
const App = () => {
const [todo, settodo] = useState("")
const [todolist, settodolist] = useState([])
const [edit, setedit] = useState(0)
const handlesubmit=(e)=>{
  e.preventDefault();
if(edit)
{
  const edittodo=todolist.find((i)=>i.id===edit);
  const updatetodo=todolist.map((t)=>t.id===edittodo.id
            ?(t={id:t.id,todo}):
            {id:t.id,todo:t.todo});

            settodolist(updatetodo);
            setedit(0);
            settodo("");
            return;

}


  if(todo!==""){
//settodolist([{id:`${todo}-${Date.now()}`,todo},...todolist])
settodolist([{id:Math.random(),todo},...todolist]);
settodo("");
  }
}

const handledelete=(id)=>{
  const deletetodo=todolist.filter((t)=>t.id!==id);
  settodolist([...deletetodo]);
}
const handleupdate=(id)=>{
const update=todolist.find((t)=>t.id===id);
settodo(update.todo);
setedit(id);
}
  return (
    <div className="App">
    <div className="container">

<h1>Todo List App</h1>

<TodoForm  
 handlesubmit={handlesubmit} 
 todo={todo} 
 settodo={settodo}
  edit={edit} 

  />
   <Todolist 
   todolist={todolist}
   handleupdate={handleupdate}
   handledelete={handledelete}
   />
    </div>
    </div>
  )
}

export default App
