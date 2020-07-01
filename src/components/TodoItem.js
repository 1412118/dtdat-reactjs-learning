import React, { Component } from 'react';
import './TodoItem.css';
import checkImg from '../images/check.svg';
import checkCompleteImg from '../images/check-complete.svg';
import deleteImg from '../images/close.svg';

let classNames = require('classnames');

class TodoItem extends Component{
    render(){
        let {item, onCheckClick, onDelClick} = this.props;
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
                <img src={url} width={30} onClick={onCheckClick} />
                <p>{item.content}</p>
                <img className="delImg" src={deleteImg} width={13} onClick={onDelClick}/>
            </div>
        );
    }
}

export default TodoItem;