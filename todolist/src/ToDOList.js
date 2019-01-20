import React, {Component} from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:[]
    };
    this.addItem = this.addItem.bind(this);
    }
    addItem(e){
        if (this.inputElement.value !== ""){
            var newItem = {
                text: this.inputElement.value,
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }
        this.inputElement.value = "";
        console.log(this.state.items);
        e.preventDefault();
    }
    render() {
        return(
            <div className="ToDoList_main">
            <div className="header">
            <form onSubmit={this.addItem}>
                <input
                ref={(a) => this.inputElement = a}
                placeholder="Enter Task"></input>
                <button type="submit">Add</button>
            </form>
            </div>
            <TodoItems entries = {this.state.items} />
            </div>
        );
    }
}
export default TodoList;