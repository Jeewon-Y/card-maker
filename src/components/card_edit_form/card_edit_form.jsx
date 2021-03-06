import React from 'react';
import { useRef } from 'react/cjs/react.development';
import Button from '../button/button';
import Card from '../card/card';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const {
        name,
        company,
        title,
        email,
        message,
        theme,
        fileName,
        fileURL,
    } = card;

    const onFileChange = file => {
        updateCard({
            ...card,
            fileName: file.name,
            fileURL: file.url,
        })
    }

    const onChange = (event) => {
        if(event.currentTarget == null){
            return;
        }
        else {
            event.preventDefault();
            updateCard({
                ...card, [event.currentTarget.name]: event.currentTarget.value,
            })
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        deleteCard(card);
    };

    return (
        <form className={styles.form}>
            <input 
                className={styles.input} 
                type="text" 
                name="name" 
                ref={nameRef}
                value={name}
                onChange={onChange} 
            />

            <input 
                className={styles.input} 
                type="text" 
                name="company" 
                ref={companyRef}
                value={company}
                onChange={onChange} 
            />
            <select 
                className={styles.select} name="theme" 
                ref={titleRef}
                value={theme}
                onChange={onChange}
            >
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>

            <input 
                className={styles.input} type="text" 
                name="title" 
                ref={emailRef}
                value={title}
                onChange={onChange} 
            />
            
            <input 
                className={styles.input} 
                type="text" 
                name="email" 
                ref={messageRef}
                value={email}
                onChange={onChange} 
            />
            
            <textarea 
                className={styles.textarea} name="message" 
                ref={themeRef}
                value={message}
                onChange={onChange}
            >
            </textarea>

            <div className={styles.fileInput}>
                <FileInput name={fileName} onFileChange={onFileChange} />
            </div>

            <Button name={'Delete'} onClick={onSubmit} />

        </form>
    );
};

export default CardEditForm;