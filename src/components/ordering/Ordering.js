import { useSelector, useDispatch } from 'react-redux';
import { basketSelector, deleteItemInBusket, updateSum, clearBasket } from '../basket/basketSlice'
import { sumFunction } from '../basket/Basket';
import { useEffect, useState } from 'react';
import { Formik, Field, Form, useField, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup'

import './ordering.css'

export const MyInput = ({ ...props }) => {
    const [field, meta] = useField(props)
    return (
        <>
            <input {...props} {...field} />
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    )
}
const Ordering = () => {
    const items = useSelector(basketSelector)
    const sum = useSelector(state => state.basket.sum)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [delivery, setDelivery] = useState('')

    useEffect(() => {
        dispatch(updateSum(sumFunction(items)))
        if (items.length == 0) {
            navigate('/main/catalog')
        }
    }, [items])

    const onDeleteItem = (id) => {
        dispatch(deleteItemInBusket(id))
    }
    const deliveryBlock = (delivery === 'Самовывоз') ?
        <>
            <h4>3. Адрес заведения</h4>
            <Field class="institution-address" name="institutionAddress" as='select' >
                <option disabled='disabled' value="" >Выберите адрес заведения</option>
                <option value="г. Минск, ул. Немига, д. 3" >г. Минск, ул. Немига, д. 3</option>
                <option value="п. Солнечный,  ул. Сосновая, д. 2 ">п. Солнечный,  ул. Сосновая, д. 2 </option>
            </Field>
            <ErrorMessage className='error' name='institutionAddress' component='div' />
        </>
        :
        <>
            <h4>3. Адрес доставки</h4>
            <MyInput type='text' name='city' placeholder='Город' /><br />
            <MyInput type='text' name='street' placeholder='Улица' /><br />
            <MyInput type='text' name='house' placeholder='Дом' />
            <MyInput type='text' name='housing' placeholder='Корпус' />
            <MyInput type='text' name='porch' placeholder='Подъезд' />
            <MyInput type='text' name='floor' placeholder='Этаж' />
            <MyInput type='text' name='flat' placeholder='Квартира' />
        </>
    const payment = (delivery === 'Самовывоз') ?
        <>
            <label >
                <MyInput type='radio' name='payment' className="payment" value='true' />
                <span className="payment-text">Оплата курьеру</span>
            </label>
        </>
        :
        <>
            <label >
                <MyInput type='radio' name='payment' className="payment" value='true' />
                <span className="payment-text">Оплата при получении</span>
            </label>
        </>
    function itemsRender(data) {
        const item = data.map((item, i) => {

            return (
                <div className="ordering__item" id={item.id} key={item.id}>

                    <div className="ordering-items-info">
                        <div className="ordering-items-info__name">
                            <img className='sumbnail' src={item.img} />
                            <h3>{item.title}</h3>
                        </div>
                        <div className="ordering-items-info__technical">
                            <div className="ordering-items-info__total-sum">
                                <img className="ordering-items-info__cross" src="../../images/крестик.png"
                                    onClick={() => onDeleteItem(item.id)} />
                                <div>
                                    <span className="sum">{item.totalSum}</span>
                                    <span className="valuta">Byn</span>
                                    <span className="all-amount-adaptate">{item.amount}</span>
                                </div>
                                <span className="all-amount">{item.amount}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <>
                {item}
            </>
        )
    }
    const goods = itemsRender(items)
    const telRegExp = /^(\+?375\-?|8\-?0)(17|25|29|33|44)\-?[1-9]\d{2}(\-?\d{2}){2}$/
    return (
        <Formik
            initialValues={
                {
                    name: '',
                    tel: '',
                    email: '',
                    delivery: '',
                    city: '',
                    street: '',
                    house: '',
                    housing: '',
                    porch: '',
                    floor: '',
                    flat: '',
                    institutionAddress: '',
                    date: '',
                    comment: '',
                    payment: false,
                    data: ''
                }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required('Обязательное поле'),
                tel: Yup.string()
                    .matches(telRegExp, 'Введите корректный телефон')
                    .required('Обязательное поле'),
                email: Yup.string()
                    .email('Введите корректную почту')
                    .required('Обязательное поле'),
                delivery: Yup.string()
                    .required('Необходимо выбрать один вариант'),
                city: delivery === 'Самовывоз' ? null : Yup.string().required('Обязательное поле'),
                street: delivery === 'Самовывоз' ? null : Yup.string().required('Обязательное поле'),
                institutionAddress: delivery === 'Самовывоз' ? Yup.string().required('Выберите адрес заведения') : null,
                date: Yup.string()
                    .required('Обязательное поле'),
                payment: Yup.boolean()
                    .oneOf([true], 'Необходимо подтверждение'),
            })}
            onSubmit={values => {
                values.data = { items }
                console.log(JSON.stringify(values, null, 2))
                dispatch(clearBasket())
                navigate('/main/catalog')
            }}

        >
            <div className='catalog'>
                <Form>
                    <ol>
                        <li>
                            <h4>1. Контактные данные</h4>
                            <MyInput type='text' name='name' placeholder='Ваше имя' className="name" /><br />
                            <MyInput type='tel' name='tel' placeholder='Ваш номер телефона' className="tel" /><br />
                            <MyInput type='email' name='email' placeholder='Электронный адресс' className="email" />
                        </li>
                        <li>
                            <h4>2. Способ доставки</h4>
                            <label>
                                <MyInput type='radio' name='delivery' className="pickup" value="Самовывоз" onClick={() => setDelivery('Самовывоз')} />
                                <span onClick={() => setDelivery('Самовывоз')}>Самовывоз</span><br />
                            </label>
                            <label>
                                <MyInput type='radio' name='delivery' className="courier-delivery" value="Доставка курьером" onClick={() => setDelivery('Доставка курьером')} />
                                <span onClick={() => setDelivery('Доставка курьером')} className="delivery-method-text">Доставка курьером</span>
                            </label>
                        </li>
                        <li className="delivery-address">
                            {deliveryBlock}
                        </li>
                        <li>
                            <h4 className="time">4. Время доставки</h4>
                            <MyInput type='text' name='date' placeholder='Желаемая дата и время доставки' />
                        </li>
                        <li>
                            <h4>5. Коментарий к заказу</h4>
                            <Field as='textarea' placeholder=" Напишите коментарий" name="comment" />
                        </li>
                        <li>
                            <h4>6. Способ оплаты</h4>
                            {payment}
                        </li>
                    </ol>
                    <div>
                        <div className="technical"></div>
                        <button className="submission" type="submit">
                            <p>
                                Заказать
                            </p>
                        </button>
                    </div>
                </Form>
                <div className="ordering-basket">
                    {goods}
                    <div className="ordering-basket__bill">
                        <p className="ordering-basket__price">
                            Сумма заказа:
                            <span className="ordering-basket__value">{sum}</span>
                            <span className="ordering-basket__currency">BYN</span>
                        </p>
                        <p className="ordering-basket__total">
                            Итоговая сумма:
                            <span className="ordering-basket__total-value">{(delivery === 'Самовывоз') ? sum : `${sum + (sum * 15 / 100)}`}</span>
                            <span className="ordering-basket__total-currency">BYN</span>
                        </p>
                    </div>
                </div>
            </div>
        </Formik>
    )
}
export default Ordering;