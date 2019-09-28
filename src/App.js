import React from 'react';
import './App.module.css';
import styles from './App.module.css';
import 'antd/dist/antd.css';
import {Button, Input, Checkbox} from "antd";


function App(){
    const todos=[1,2,3,4,5,6,7,8,9,10];

  return (
    <div className={styles.container}>
      <div className={styles.content}>

          <div className={styles.inputContainer}>
              <Input/>
              <Button type="primary" className={styles.actionButton}> +Add </Button>
          </div>

          {todos.map(()=> <ToDoItem/>)}


    </div>
    </div>
  );
}
function ToDoItem(){
    return (<div className={styles.listContainer}>
        <div className={styles.listItem}>
            <Checkbox/>
            <h2 className={styles.todoTitle}>Buy Milk</h2>

        </div>
    </div>)
}


export default App;
