import React,{useState} from 'react';
import './App.module.css';
import styles from './App.module.css';
import 'antd/dist/antd.css';
import {Button, Input, Checkbox} from "antd";


function App(){

    const [todos, setTodos]=useState([{id:1, value:"buy milk",resolved:false},
        {id:2, value:"hi",resolved:false}]);
    const [input, setInput]=useState("");
    console.log(todos);


  return (
    <div className={styles.container}>
      <div className={styles.content}>

          <div className={styles.inputContainer}>
              <Input value={input} onChange={(event)=>{setInput(event.target.value)}}/>
              <Button
                  type="primary"
                  className={styles.actionButton}
                  onClick={addTodo}> + Add </Button>
          </div>

          {todos.map(todo=>(
              <ToDoItem key={todo.id} id={todo.id} value={todo.value} resolved={todo.resolved} toggle={toggle}/>))}


    </div>
    </div>
  );
    function addTodo(){
        const todo=input;
        const newId=todos.length === 0 ? 0 : todos[todos.length-1].id + 1;
        const newTodos=[...todos,{id:newId, value:input, resolved:false}];
        setTodos(newTodos);
    }

    function ToDoItem(props){
        const {id, value, toggle, resolved} =props;

        return (<div className={styles.listContainer} onClick={()=>toggle(id)}>
            <div className={styles.listItem}>
                <Checkbox checked={resolved}/>
                <h2 className={styles.todoTitle}>{value}</h2>

            </div>
        </div>)
    }
    function toggle(id){
        const index=todos.findIndex(todo=>todo.id===id);

        let todo=todos[index];
        todo={...todo, resolved: !todo.resolved};

        const newTodos=[...todos];
        newTodos[index]=todo;

        setTodos(newTodos);

    }
}



export default App;
