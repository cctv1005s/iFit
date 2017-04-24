/**
 * 继承自NoteView，用于创建一个Note
 */
import React ,{Component} from 'react';
import NoteView from './NoteView.js';
import NoteManager from './NoteManager.js';

export default class CreateNoteView extends NoteView{
    onYes(){
        NoteManager.add({
            text:this.state.text,
            type:this.props.type,
            date:new Date().getTime()
        });
        this.state.text = "";
        this.props.onEnd();
    }

    onCancel(){
        this.state.text = "";
        this.props.onEnd();
    }
}