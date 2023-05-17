import React, { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
	const [input, setInput] = useState(props.edit ? props.edit.value : "");
	const handelChange = (e) => {
		setInput(e.target.value);
	};
	const handelSubmit = (e) => {
		e.preventDefault();
		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});
		setInput("");
	};

	const inputRef = useRef(null);
	useEffect(() => {
		inputRef.current.focus();
	});

	return (
		<form
			className="todo-form"
			onSubmit={handelSubmit}
		>
			{props.edit ? (
				<>
					<input
						type="text"
						placeholder="Update your todo"
						name="text"
						className="todo-input edit"
						value={input}
						onChange={handelChange}
						ref={inputRef}
					></input>
					<button className="todo-button edit"> Update </button>
				</>
			) : (
				<>
					<input
						type="text"
						placeholder="Add new Todo"
						name="text"
						className="todo-input"
						value={input}
						onChange={handelChange}
						ref={inputRef}
					></input>
					<button className="todo-button"> Add Todo </button>{" "}
				</>
			)}
		</form>
	);
};

export default TodoForm;
