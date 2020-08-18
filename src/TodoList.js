import React from 'react';
import {Todo} from './Todo';

export default class TodoList extends React.Component{

    constructor(props){
        super(props);
        
    }

    numberList(){
        const numb = this.props.todoList;
        const list = numb.map((number) => {
            return (<li key={number.toString()}>
                {number.text}
            </li>);
        });
        return list;
    }

    render(){
        
        return (
        <ul>
            {this.numberList()}
        </ul>
        );
    }


}