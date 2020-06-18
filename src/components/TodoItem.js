import React, { Component } from 'react';
import './TodoItem.css'
let classNames = require('classnames');

class TodoItem extends Component{
    render(){
        let {item, onClick} = this.props;
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
                <input className="cb-btn" 
                        type="checkbox" 
                        id={item.id} 
                        onClick={onClick}/>
                <p>{item.content}</p>
            </div>
        );
    }
}

export default TodoItem;