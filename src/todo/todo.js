import './todo.css';

const Todo = props => {
    return (
        <li onClick={props.todoClick} className={`${props.classStyle}`}>
                {/*<input type="checkbox"*/}
                {/*       // defaultChecked={checked}*/}
                {/*       onClick={props.onCheck}*/}
                {/*/>*/}
            {props.children}
            <p className="close"><button onClick={props.onRemove}>Delete</button></p>
        </li>

    );
};

export default Todo;