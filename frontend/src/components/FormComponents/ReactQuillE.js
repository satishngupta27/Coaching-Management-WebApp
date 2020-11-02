import { Field,ErrorMessage } from 'formik'
import React from 'react'
import TextError from './TextError'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

function ReactQuillE(props) {
    const {label,name,...rest}=props
    return (
        <div className='formcontrol'>
            <label htmlFor={name}>{name}</label>
            <ReactQuill id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={TextError}/>
            
        </div>
    )
}

export default ReactQuillE
