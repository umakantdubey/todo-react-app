import React from 'react'
const TodoForm = ({handlesubmit,todo,settodo,edit}) => {
    return (
        <div>
        <form class="form-group" className="todoform" onSubmit={handlesubmit}>
  <input type="text" value={todo} onChange={(e)=>{
settodo(e.target.value);
  }} >

  </input>
  <button class="btn btn-success"  type="submit">{edit?"edit":"Go"}</button>
</form>
            
        </div>
    )
}

export default TodoForm
