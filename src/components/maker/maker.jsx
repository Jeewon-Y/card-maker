import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../../service/auth_service';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
    const [cards, setCards] = useState([
        {
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
        {
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
        {
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
    ]);
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

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards} />
                <Preview cards={cards} />
            </div>
            <Footer/>
        </section>
    );
};

export default Maker;