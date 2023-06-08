

import './questions.css'

const Questions = () => {


    return (
        <section className="questions">
            <div className="container container-md container-sm">
                <div className="d-flex-question justify-content-around">
                    <div data-aos="fade-down-right" data-aos-easing="linear" data-aos-duration="1000" className="questions-content">
                        <h2 className="questions__title">Остались вопросы?</h2>
                        <p className="questions__text">
                            Заполните форму и мы свяжемся с вами в самое ближайшее время
                        </p>
                        <form action="!#" method="post" encType="multipart/form-data">
                            <input className="question-input" type="text" name="Имя пользователя" placeholder="Ваше имя" required />
                            <input className="question-input" type="tel" name="Номер телефона пользователя"
                                placeholder="Ваш номер телефона" />
                            <div>
                                <div className="technical questions-technical"></div>
                                <button type="submit" className=" questions__button">
                                    <p>Заказать звонок</p>
                                </button>
                            </div>
                        </form>

                        <p className="question-text">
                            Нажимая кнопку «Заказать звонок» вы соглашеетесь с политикой
                            <br />
                            <span>обработки персональных данных.</span>
                        </p>
                    </div>
                    <div data-aos="fade-down-left" data-aos-easing="linear" data-aos-duration="1000" className="questions-image">
                        <img src="/images/question.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Questions;