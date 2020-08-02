import React from "react";
import { MdEdit } from "react-icons/md";
import "./TodoListItem.scss";

class TodoListItem extends React.Component {
    // componentDidMount() {
    //     const { data } = this.props;
    //     this.setState({ ...data });
    // }

    render() {
        const { onToggle, onRemove } = this.props;
        const { id, title, isChecked } = this.props.data;

        return (
            <li className="todo-item">
                <span
                    className={`todo-title ${isChecked && "isChecked"}`}
                    onClick={() => onToggle(id)}
                >
                    {title}
                </span>
                <button className="todo-update">
                    <MdEdit />
                </button>
                <button className="todo-delete" onClick={() => onRemove(id)}>
                    삭제
                </button>
            </li>
        );
    }
}

export default TodoListItem;
