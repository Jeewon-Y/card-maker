import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../../service/auth_service';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService }) => {
    const [cards, setCards] = useState({
        '1': {
            id: '1',
            name: 'Jeewon1',
            company: 'University of British Columbia',
            theme: 'colorful',
            title: 'Sessional Lecturer',
            email: 'jeewon.yoo@ubc.ca',
            message: 'go for it',
            fileName: 'jeewon',
            fileURL: null
        },
        '2': {
            id: '2',
            name: 'Jeewon2',
            company: 'University of British Columbia',
            theme: 'light',
            title: 'Sessional Lecturer',
            email: 'jeewon.yoo@ubc.ca',
            message: 'go for it',
            fileName: 'jeewon',
            fileURL: null
        },
        '3': {
            id: '3',
            name: 'Jeewon3',
            company: 'University of British Columbia',
            theme: 'dark',
            title: 'Sessional Lecturer',
            email: 'jeewon.yoo@ubc.ca',
            message: 'go for it',
            fileName: 'jeewon',
            fileURL: null
        }
    });

    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(()=> {
        authService.onAuthChange(user => {
            if(!user) {
                history.push('/');
            }
        });
    });

    // const addCard = card => {
    //     const updated = [...cards, card];
    //     setCards(updated);
    // };

    const createOrUpdateCard = card => {
        setCards(cards => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
        });
    };

    const deleteCard = card => {
        setCards(cards => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
        });
    };

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor 
                    FileInput={FileInput}
                    cards={cards} 
                    addCard={createOrUpdateCard} 
                    updateCard={createOrUpdateCard} deleteCard={deleteCard} 
                />
                <Preview cards={cards} />
            </div>
            <Footer/>
        </section>
    );
};

export default Maker;