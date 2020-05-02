import React from "react"

function TodoItem(props) {
    return(
        <div className="todoItem boxShadow">
            <label class="checkbox">
            
                <input id={props.item.id} type="checkbox" checked={props.item.completed} onChange={() => props.chekChange(props.item.id)}/>
                <span class="checkbox_icon">
                    <label for={props.item.id} class="text">{props.item.text}</label>
                </span>
                
            </label>
        </div>
    )
}

export default TodoItem