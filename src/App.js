import React from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import "./App.scss";

class App extends React.Component {
    state = {
        data: [],
        nextId: 4,
    };

    constructor(props) {
        super(props);

        this.state.data = [
            { id: 1, title: "클래스형으로 만들기", isChecked: true },
            { id: 2, title: "컴포넌트 분리하기", isChecked: false },
            {
                id: 3,
                title: "최상위 앱에서 만든 함수, 하위 컴포넌트에 전달",
                isChecked: false,
            },
        ];
    }

    onToggle = (id) => {
        const { data } = this.state;
        const updateData = data.map((data) => {
            return data.id === id
                ? { ...data, isChecked: !data.isChecked }
                : data;
        });
        this.setState({ data: updateData });
    };

    onRemove = (id) => {
        const { data } = this.state;
        const updateData = data.filter((data) => data.id !== id);
        this.setState({ data: updateData });
    };

    onInsert = (value) => {
        const { data, nextId } = this.state;
        const nextData = {
            id: nextId,
            title: value,
            isChecked: false,
        };

        this.setState({ data: data.concat(nextData), nextId: nextId + 1 });
    };

    componentDidMount() {
        console.log(this.state);
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        const { data } = this.state;

        return (
            <div className="App">
                <TodoTemplate>
                    <TodoInsert onInsert={this.onInsert} />
                    <TodoList
                        data={data}
                        onToggle={this.onToggle}
                        onRemove={this.onRemove}
                    />
                </TodoTemplate>
            </div>
        );
    }
}

export default App;
