import { useSelector, useDispatch } from 'react-redux';
import { basketSelector, deleteItemInBusket, updateSum,clearBasket } from '../basket/basketSlice'
import { sumFunction } from '../basket/Basket';
import { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import { useNavigate } from 'react-router-dom';
import './ordering.css'


const MyInput = ({ ...props }) => {
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
console.log(items)


    useEffect(() => {
        dispatch(updateSum(sumFunction(items)))
        if (items.length == 0) {
            navigate('/main/catalog')
        }
    }, [items])

    const onDeleteItem = (id) => {
        dispatch(deleteItemInBusket(id))
    }

    function itemsRender(data) {
        const item = data.map((item, i) => {
            return (
                <div className="ordering__item" id={item.id} key={item.id}>

                    <div className="ordering-items-info">
                        <div className="ordering-items-info__name">
                            <img className='sumbnail' src={item.img} />
                            <h3>{item.name}</h3>
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
                    date: '',
                    comment: '',
                    payment: false,
                    data: ''
                }}
            onSubmit={values =>   {
                values.data={items}
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
                                <MyInput type='radio' name='delivery' className="pickup" value="Самовывоз" />
                                <span>Самовывоз</span><br />
                            </label>
                            <label>
                                <MyInput type='radio' name='delivery' className="courier-delivery" value="Доставка курьером" />
                                <span className="delivery-method-text">Доставка курьером</span>
                            </label>
                        </li>
                        <li className="delivery-address">
                            <h4>3. Адрес доставки</h4>
                            <MyInput type='text' name='city' placeholder='Город' /><br />
                            <MyInput type='text' name='street' placeholder='Улица' /><br />
                            <MyInput type='text' name='house' placeholder='Дом' />
                            <MyInput type='text' name='housing' placeholder='Корпус' />
                            <MyInput type='text' name='porch' placeholder='Подъезд' />
                            <MyInput type='text' name='floor' placeholder='Этаж' />
                            <MyInput type='text' name='flat' placeholder='Квартира' />
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
                            <MyInput type='radio' name='payment' className="payment" value="Оплата курьеру" />
                            <span className="payment-text">Оплата курьеру</span>
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
                <div className="basket">
                    {goods}
                    <div className="basket__ordering">
                        <p className="basket__ordering-price">
                            Сумма заказа:
                            <span className="basket__ordering-value">{sum}</span>
                            <span className="basket__ordering-currency">BYN</span>
                        </p>
                        <p className="basket__ordering-all">
                            Итоговая сумма:
                            <span className="basket__ordering-value-all">{sum}</span>
                            <span className="basket__ordering-currency-all">BYN</span>
                        </p>
                    </div>
                </div>
            </div>
        </Formik>


        // <div className='catalog'>
        //     <form>
        //         <ol>
        //             <li>
        //                 <h4>1. Контактные данные</h4>
        //                 <input type="text" className="name" placeholder="Ваше имя" name="text" /><br />
        //                 <input type="tel" className="tel" placeholder="Ваш номер телефона" name="tel" /><br />
        //                 <input type="email" className="mail" placeholder="Электронный адресс" name="email" />
        //             </li>
        //             <li>
        //                 <h4>2. Способ доставки</h4>
        //                 <input type="radio" name="Способ доставки" className="pickup" value="Самовывоз" required />
        //                 <span>Самовывоз</span><br />
        //                 <input type="radio" name="Способ доставки" className="courier-delivery" value="Доставка курьером"
        //                     required />
        //                 <span className="delivery-method-text">Доставка курьером</span>
        //             </li>
        //             <li className="delivery-address">
        //                 <h4>3. Адрес доставки</h4>
        //                 <input type="text" placeholder="Город" required name="Город" /><br />
        //                 <input type="text" placeholder="Улица" required name="Улица" /><br />
        //                 <input type="text" placeholder="Дом" required name="Дом" />
        //                 <input type="text" placeholder="Корпус" name="Корпус" />
        //                 <input type="text" placeholder="Подъезд" required name="Подъезд" />
        //                 <input type="text" placeholder="Этаж" required name="Этаж" />
        //                 <input type="text" placeholder="Квартира" required name="Квартира" />
        //             </li>
        //             <li>
        //                 <h4 className="time">4. Время доставки</h4>
        //                 <input type="text" required name="Желаемая дата и время доставки"
        //                     placeholder="Желаемая дата и время доставки" />
        //             </li>
        //             <li>
        //                 <h4>5. Коментарий к заказу</h4>
        //                 <textarea placeholder=" Напишите коментарий" name="коментарий к заказу"></textarea>
        //             </li>
        //             <li>
        //                 <h4>6. Способ оплаты</h4>
        //                 <input className="payment" type="radio" name="Способ оплаты" value="Курьеру" required />
        //                 <span className="payment-text">Оплата курьеру</span>
        //             </li>

        //         </ol>
        //         <div>
        //             <div className="technical"></div>
        //             <button className="submission" type="submit">
        //                 <p>
        //                     Заказать
        //                 </p>
        //             </button>
        //         </div>

        //     </form>
        //     <div className="basket">
        //         {goods}
        //         <div className="basket__ordering">
        //             <p className="basket__ordering-price">
        //                 Сумма заказа:
        //                 <span className="basket__ordering-value">{sum}</span>
        //                 <span className="basket__ordering-currency">BYN</span>
        //             </p>
        //             <p className="basket__ordering-all">
        //                 Итоговая сумма:
        //                 <span className="basket__ordering-value-all">{sum}</span>
        //                 <span className="basket__ordering-currency-all">BYN</span>
        //             </p>
        //         </div>
        //     </div>
        // </div>
    )
}
export default Ordering;