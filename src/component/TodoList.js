import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const addTodo = (todo) => {
		const newTodos = [todo, ...todos];
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}
		setTodos(newTodos);
	};
	const removeTodo = (id) => {
		const removeArray = [...todos].filter((todo) => todo.id !== id);
		setTodos(removeArray);
	};
	const updateTodo = (todoid, newValue) => {
		if (!newValue.text || /^\s*$/.test(newValue.text)) {
			return;
		}
		setTodos((prev) =>
			prev.map((item) => (item.id === todoid ? newValue : item))
		);
	};

	const completeTodos = (id) => {
		let updatedeTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setTodos(updatedeTodos);
	};
	return (
		<div>
			<h1>what's the plan for today ?</h1>
			<TodoForm
				onSubmit={addTodo}
				className="todo-container"
			></TodoForm>
			<Todo
				todos={todos}
				completeTodo={completeTodos}
				removeTodo={removeTodo}
				updateTodo={updateTodo}
			></Todo>
		</div>
	);
};

export default TodoList;
