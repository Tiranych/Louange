import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from '../global/routes';

import './Modal.css';

import CLOSE from '../../../public/images/global/modal/Close.svg';

import DONEX64 from '../../../public/images/global/modal/DoneX64.svg';
import DONEX96 from '../../../public/images/global/modal/DoneX96.svg';

const Modal = ({ active, setActive }) => {
    const [formFilled, setFormFilled] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormFilled(true);
    }

    return (
        <div className={active ? "modal_window modal_window__active" : "modal_window"} onClick={() => { setActive(false) }}>
            <div className="modal__content" onClick={(e) => { e.stopPropagation() }}>
                <button className="modal__close-btn" onClick={() => { setActive(false) }}>
                    <img src={CLOSE} alt="CloseBtn" />
                </button>
                {!formFilled &&
                    <>
                        <p className="modal__title">Обсудить проект</p>
                        <p className="modal__text">Заполните короткую форму обратной связи, и наши менеджеры свяжутся с вами в ближайшее время</p>
                        <form onSubmit={handleSubmit} className="modal__form">
                            <input className="modal__input" type="text" name="text" placeholder="Ваше имя" required />
                            <input className="modal__input" type="email" name="email" autoComplete="off" placeholder="Ваш e-mail" required />
                            <textarea className="modal__input modal__textarea" name="textarea" placeholder="Опишите ваш проект" required></textarea>
                            <div className="modal__row">
                                <input type="checkbox" className="modal__checkbox" name="checkbox" id="checkbox" required />
                                <label htmlFor="checkbox"></label>
                                <p className="modal__info">
                                    Я согласен с <Link className="modal__link" to={ROUTES.PRIVACY_POLICY}>политикой обработки персональных данных</Link> и
                                    даю <Link className="modal__link" to={ROUTES.PRIVACY_POLICY}>согласие</Link> на обработку своих персональных данных
                                </p>
                            </div>
                            <button className="modal__submit-btn" type="submit">Отправить заявку</button>
                        </form>
                    </>
                }
                {formFilled &&
                    <>
                        <p className="modal__title">Ваша заявка отправлена</p>
                        <p className="modal__text">Спасибо за вашу заявку! Ожидайте — наши менеджеры свяжутся с вами в самое ближайшее время!</p>
                        <div className="modal__img">
                            <picture >
                                <source srcSet={DONEX64} media="(max-width: 700px)" />
                                <img src={DONEX96} alt="Done" />
                            </picture>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Modal;