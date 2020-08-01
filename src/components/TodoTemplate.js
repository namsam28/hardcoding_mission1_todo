import React from "react";
import "./TodoTemplate.scss";

class TodoTemplate extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <main className="todo-template">
                <header className="header">
                    <h1>Todo List 만들기(클래스형)</h1>
                </header>
                {children}
            </main>
        );
    }
}

export default TodoTemplate;
