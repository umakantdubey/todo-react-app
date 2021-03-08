import React from 'react'

const Todolist = ({todolist,handleupdate,handledelete}) => {
    return (
        <ul className="alltodo">
    {
      todolist.map((t)=>(
        <li className="singletodo"> 
   <span className="todotext" key={t.id}>{t.todo}</span>
  <button class="btn btn-success" onClick={()=>handleupdate(t.id)}>edit task</button>
  <button class="btn btn-danger" onClick={()=>handledelete(t.id)}>delete task</button>
  </li>

      ))
 }
</ul>
    )
}

export default Todolist
