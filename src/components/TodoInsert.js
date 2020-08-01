import React from "react";
import "./TodoInsert.scss";

class TodoInsert extends React.Component {
    render() {
        return (
            <form className="todo-insert">
                <input type="text" autoFocus />
                <button type="button">추가</button>
            </form>
        );
    }
}

export default TodoInsert;
