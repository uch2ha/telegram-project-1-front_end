import React, { useEffect, useState } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css';
const Form = () => {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [subject, setSubject] = useState('physical');
    const { tg } = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Send',
        });
    }, []);

    useEffect(() => {
        if (!country || !city) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, city]);

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    };

    const onChangeCity = (e) => {
        setCity(e.target.value);
    };

    const onChangeSubject = (e) => {
        setSubject(e.target.value);
    };
    return (
        <div className={'form'}>
            <h3>Enter your info</h3>
            <input
                value={country}
                onChange={onChangeCountry}
                className={'input'}
                type='text'
                placeholder={'Country'}
            />
            <input
                value={city}
                onChange={onChangeCity}
                className={'input'}
                type='text'
                placeholder={'City'}
            />
            <select
                value={subject}
                onChange={onChangeSubject}
                className={'select'}
            >
                <option value={'physical'}>physical</option>
                <option value={'legal'}>legal</option>
            </select>
        </div>
    );
};

export default Form;
