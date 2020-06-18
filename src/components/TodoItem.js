import React, { Component } from 'react';
import './TodoItem.css';
import checkImg from '../images/check.svg';
import checkCompleteImg from '../images/check-complete.svg';

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
        let url = checkImg;
        if(item.isComplete){
            url = checkCompleteImg;
        }
        return (
            <div className={className}>
                <img src={url} width={30} onClick={onClick} />
                <p>{item.content}</p>
            </div>
        );
    }
}

export default TodoItem;