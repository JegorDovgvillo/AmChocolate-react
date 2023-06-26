
import { Formik, Form } from 'formik';
import { MyInput } from '../../ordering/Ordering';

import question from '../../../images/question.png'

import './questions.css'

const Questions = () => {
    const tel = /^(\+?375\-?|8\-?0)(17|25|29|33|44)\-?[1-9]\d{2}(\-?\d{2}){2}$/

    return (
        <Formik
            initialValues={{
                name: '',
                tel: ''
            }}
            validate={values => {
                const errors = {};
                if (!tel.test(values.tel)) {
                    errors.tel = 'Некорректный номер!'
                }
                if (!values.name) {
                    errors.name = 'Заполните поле!'
                }
                return errors
            }}
            onSubmit={values => {
                console.log(JSON.stringify(values, null, 2))
            }}
        >
            {({ isSubmitting }) => (
                <section className="questions">
                    <div className="questions-container">
                        <div className="questions-content">
                            <h2 className="questions__title">Остались вопросы?</h2>
                            <p className="questions__text">
                                Заполните форму и мы свяжемся с вами<br />
                                в самое ближайшее время
                            </p>

                            <Form>
                                <MyInput className="question-input" type="text" name="name" placeholder="Ваше имя" />
                                <MyInput className="question-input" type="tel" name="tel" placeholder="Ваш номер телефона" />

                                <div className='button'>
                                    <div className="questions-technical"></div>
                                    <button type="submit" className=" questions__button" disabled={isSubmitting}>
                                        <p>Заказать звонок</p>
                                    </button>
                                </div>
                            </Form>

                            <p className="question-text">
                                Нажимая кнопку «Заказать звонок» вы соглашеетесь с политикой
                                <br />
                                <span>обработки персональных данных.</span>
                            </p>
                        </div>
                        <div className="questions-image">
                            <img src={question} alt="" />
                        </div>
                    </div>
                </section>
            )}
        </Formik>
    )
}

export default Questions;