import React from "react";
import { MdEdit } from "react-icons/md";
import "./TodoListItem.scss";

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);

        //state 초기화
        const { id, title, isChecked } = this.props.data;
        this.state = {
            isEditMode: false,
            id: id,
            title: title,
            isChecked: isChecked,
        };

        //전달된 이벤트 적용
        const { onRemove, onEdit } = this.props;
        this.onRemove = onRemove;
        this.onEdit = onEdit;
    }

    onToggle = (id) => {
        const { onToggle } = this.props;
        const { isEditMode, isChecked } = this.state;

        //수정모드가 아닐 때만, 현재 컴포넌트 체크값 설정, 이벤트 실행
        if (!isEditMode) {
            onToggle(id);
            this.setState({ isChecked: !isChecked });
        }
    };

    onClick = () => {
        const { isEditMode } = this.state;
        this.setState({ isEditMode: !isEditMode });
        // if (this.editBoxWrap.classList.contains("editmode")) {
        //     this.editBox.value = title;
        //     this.editBox.focus();
        //     this.editBox.setSelectionRange(
        //         this.editBox.value.length,
        //         this.editBox.value.length
        //     );
        // }
    };

    onChange = (e) => {
        this.editBox.style.height = this.editBox.scrollHeight + "px";
        //console.log(e.target.value.replace("\r\n", "<br />"));
        this.setState({ title: e.target.value });
    };

    onBlur = (e) => {
        const { id, title } = this.state;
        this.onEdit(id, title);

        this.setState({ isEditMode: false });

        console.log(e);

        //버튼이 아닌 다른곳을 클릭했을 때 isEditMode가 서로 각각 실행되면서 중복됨
        //<div contenteditable=true>를 사용할수 없다.
        //리액트에서 state변경과 충돌을 방어하고자 draft.js를 사용 권장(수동으로 boolean처리) https://draftjs.org/
    };

    componentDidUpdate() {
        const { title } = this.state;
        if (this.editBoxWrap.classList.contains("editmode")) {
            this.editBox.value = title;
            this.editBox.focus();
            this.editBox.setSelectionRange(
                this.editBox.value.length,
                this.editBox.value.length
            );
        }
    }

    render() {
        //const { isEditMode } = this.state;
        const { id, title, isChecked, isEditMode } = this.state;
        return (
            <li className="todo-item">
                <div
                    className={`todo-title ${isChecked ? "isChecked" : ""} ${
                        isEditMode ? "editmode" : ""
                    }`}
                    onClick={() => this.onToggle(id)}
                    ref={(ref) => (this.editBoxWrap = ref)}
                >
                    <span>{title}</span>
                    <textarea
                        type="text"
                        readOnly={!isEditMode}
                        ref={(ref) => (this.editBox = ref)}
                        onChange={(e) => this.onChange(e)}
                        onBlur={(e) => this.onBlur(e)}
                    ></textarea>
                </div>
                <button className="todo-update" onClick={() => this.onClick()}>
                    <MdEdit />
                </button>
                <button
                    className="todo-delete"
                    onClick={() => this.onRemove(id)}
                >
                    삭제
                </button>
            </li>
        );
    }
}

export default TodoListItem;
