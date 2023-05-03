import './basket.css'
// import { goodsSelector, deleteItem } from '../catalog/catalogSlice';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemInBusket, updateSum, basketSelector } from '../basket/basketSlice'
import BasketItem from '../basketItem/BasketItem';
import { Link } from 'react-router-dom';

export const sumFunction = (data) => {
    // const dispatch = useDispatch()
    
    let sum = 0
    for (let i = 0; i < data.length; i++) {
        sum += data[i].totalSum
    }
    return sum
    // dispatch(updateSum(sum))

}
const Basket = () => {
    const sum = useSelector(state => state.basket.sum)
    
    const newItemsFromBasket = useSelector(basketSelector)
    const dispatch = useDispatch()

    // const sss = sumFunction(newItemsFromBasket)
    // console.log(sss)

    useEffect(() => {
        dispatch(updateSum(sumFunction(newItemsFromBasket)))
        // dispatch(updateBusket(newItemsFromBasket))
    }, [newItemsFromBasket])

    
    const onDeleteItem = (id) => {
        dispatch(deleteItemInBusket(id))
        // dispatch(deleteItem(id))
    }
    function renderItems(data) {
        const item = data.map((item, i) => {
            return (
                <BasketItem
                    onDeleteItem={(id) => onDeleteItem(id)}
                    img={item.img}
                    name={item.name}
                    id={item.id}
                    amount={item.amount}
                    value={item.value}
                    key={item.id} />
            )
        })
        return (
            <>
                {item}
            </>
        )
    }

    const basketList = renderItems(newItemsFromBasket)

    return (
        <>
            <div className='navigation'>
                <Breadcrumbs />
                <div className="navigation__sections">
                    <h1 className="catalog__title">ВАШ ЗАКАЗ</h1>
                </div>
            </div>
            {(sum === 0) ?
                <div className='empty-basket'>
                    <h2 className='empty-basket__title'>Ваша корзина пуста</h2>
                    <Link to='/main/catalog' type='button' className='empty-basket__button'>
                        Вернуться в каталог
                    </Link>
                </div> :
                <div className="basket">
                    {basketList}
                    <div className="basket__ordering">
                        <p className="basket__ordering-price">
                            Сумма заказа:
                            <span className="basket__ordering-value">{sum}</span>
                            <span className="basket__ordering-currency">BYN</span>
                        </p>
                        <div className="technical"></div>
                        <Link className="basket__ordering-button" to="/main/basket/ordering">ОФОРМИТЬ</Link>
                    </div>
                </div>
            }
        </>
    )
}

export default Basket;