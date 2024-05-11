import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import ToDoItem from '../ToDoItem.tsx/ToDoItem';
import './ToDoList.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const ToDoList = () => {
  const todoList = useSelector((state: RootState) => state.todos.value);

  const activeTodos =
    todoList &&
    todoList.filter(
      (item: { id: number; todoText: string; completed: boolean }) => {
        return item.completed == false;
      }
    );

  const CompletedTodos =
    todoList &&
    todoList.filter(
      (item: { id: number; todoText: string; completed: boolean }) => {
        return item.completed == true;
      }
    );

  useEffect(() => {
    todoList && localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="todolist">
      <Tabs
        defaultActiveKey="all"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="all" title="All" className="tabs">
          {todoList.map(
            (
              todo: { id: number; todoText: string; completed: boolean },
              index: number
            ) => (
              <>
                {console.log('todo', todo)}
                <ToDoItem key={index} todo={todo}></ToDoItem>
              </>
            )
          )}
        </Tab>
        <Tab eventKey="active" title="Active" className="tabs">
          {activeTodos.map(
            (
              todo: { id: number; todoText: string; completed: boolean },
              index: number
            ) => (
              <ToDoItem key={index} todo={todo}></ToDoItem>
            )
          )}
        </Tab>
        <Tab eventKey="completed" title="Completed" className="tabs">
          {CompletedTodos.map(
            (
              todo: { id: number; todoText: string; completed: boolean },
              index: number
            ) => (
              <ToDoItem key={index} todo={todo}></ToDoItem>
            )
          )}
        </Tab>
      </Tabs>
    </div>
  );
};

export default ToDoList;
