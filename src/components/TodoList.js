import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

class TodoList extends React.Component {
    state = {
        data: [],
    };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data: this.props.data,
    //         onToggle: this.props.onToggle,
    //     };
    // }

    // componentDidMount() {
    //     this.setState({ data: this.props.data, onToggle: this.props.onToggle });
    // }

    render() {
        const { data, onToggle, onRemove } = this.props;
        return (
            <ul className="todo-list">
                {data.map((item) => {
                    return (
                        <TodoListItem
                            key={item.id}
                            data={item}
                            onToggle={onToggle}
                            onRemove={onRemove}
                        />
                    );
                })}
            </ul>
        );
    }
}

export default TodoList;
