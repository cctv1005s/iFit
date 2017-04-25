/**
 * 继承自NoteView，用于编辑一个Note
 */
import React from 'react';
import NoteView from './NoteView.js';
import NoteManager from './NoteManager.js';

export default class EditNoteView extends NoteView{
    onYes(){
        var ele = this.props.ele;
        ele.text = this.state.text;
        //保存一个NoteView
        NoteManager.save(ele);
        this.props.onEnd();
    }

    onCancel(){
        this.props.onEnd();
    }

    componentWillMount(){
        this.state.text = this.props.ele.text;
    }
}