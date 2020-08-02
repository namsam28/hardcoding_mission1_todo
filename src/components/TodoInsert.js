import React from "react";
import "./TodoInsert.scss";

class TodoInsert extends React.Component {
    state = {
        inputValue: "",
    };

    onChange(e) {
        this.setState({ inputValue: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const { onInsert } = this.props;
        const { inputValue } = this.state;
        inputValue !== "" && onInsert(inputValue);
        this.setState({ inputValue: "" });
        return false;
    }

    render() {
        const { inputValue } = this.state;
        return (
            <form className="todo-insert" onSubmit={(e) => this.onSubmit(e)}>
                <input
                    type="text"
                    autoFocus
                    onChange={(e) => this.onChange(e)}
                    value={inputValue}
                />
                <button type="button" onClick={(e) => this.onSubmit(e)}>
                    추가
                </button>
            </form>
        );
    }
}

export default TodoInsert;
