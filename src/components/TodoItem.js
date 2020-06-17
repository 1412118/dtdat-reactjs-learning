import React, { Component } from 'react';
import './TodoItem.css'
let classNames = require('classnames');

class TodoItem extends Component{
    render(){
        let item = this.props.item;
        /* Solution 1: */
        // let className = 'TodoItem';
        // if(item.isComplete){
        //     className += ' TodoItem-complete'
        // }
        /* Solution 2: install classnames npm */
        let className = classNames(
            'TodoItem', 
            {'TodoItem-complete': item.isComplete}
        );
        return (
            <div className={className}>
                <p>{item.content}</p>
            </div>
        );
    }
}

export default TodoItem;