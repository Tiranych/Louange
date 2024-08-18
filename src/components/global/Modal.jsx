import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Modal.css';

const Modal = ({ active, setActive }) => {
    const [formFilled, setFormFilled] = useState(false);

    return (
        <div className={active ? "modal_window modal_window__active" : "modal_window"} onClick={() => { setActive(false) }}>
            <div className="modal__content" onClick={(e) => { e.stopPropagation() }}>
                <button className="modal__close-btn" onClick={() => { setActive(false) }}>
                    <img src="./images/global/modal/Close.svg" alt="" />
                </button>
                {!formFilled &&
                    <>
                        <p className="modal__title">Обсудить проект</p>
                        <p className="modal__text">Заполните короткую форму обратной связи, и наши менеджеры свяжутся с вами в ближайшее время</p>
                        <form className="modal__form">
                            <input className="modal__input" type="text" name="text" placeholder="Ваше имя" required />
                            <input className="modal__input" type="email" name="email" autoComplete="off" placeholder="Ваш e-mail" required />
                            <textarea className="modal__input modal__textarea" name="textarea" placeholder="Опишите ваш проект" required></textarea>
                            <div className="modal__row">
                                <input type="checkbox" className="modal__checkbox" name="checkbox" id="checkbox" required />
                                <label htmlFor="checkbox"></label>
                                <p className="modal__info">
                                    Я согласен с <Link className="modal__link" to={`privacy-policy`}>политикой обработки персональных данных</Link> и
                                    даю <Link className="modal__link" to={`privacy-policy`}>согласие</Link> на обработку своих персональных данных
                                </p>
                            </div>
                            <button onClick={() => { setFormFilled(true) }} className="modal__submit-btn" type="submit">Отправить заявку</button>
                        </form>
                    </>
                }
                {formFilled &&
                    <>
                        <p className="modal__title">Ваша заявка отправлена</p>
                        <p className="modal__text">Спасибо за вашу заявку! Ожидайте — наши менеджеры свяжутся с вами в самое ближайшее время!</p>
                        <div className="modal__img">
                            <picture >
                                <source srcSet="./images/global/modal/DoneX64.svg" media="(max-width: 700px)" />
                                <img src="./images/global/modal/DoneX96.svg" alt="" />
                            </picture>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Modal;