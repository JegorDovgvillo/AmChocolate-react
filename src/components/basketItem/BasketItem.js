import { useState } from "react"
import { updateItem } from "../basket/basketSlice"
import { useDispatch } from "react-redux"

const BasketItem = ({ title, id, value, amount, img, onDeleteItem }) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(amount)
    const [cost, setCost] = useState(value)

    const onChangeAmount = (e) => {
        if (e.target.value === '+') {
            setQuantity(quantity => quantity + 1)
            const item = {
                title,
                id,
                amount: quantity + 1,
                value,
                totalSum: (quantity + 1) * cost
            }
            dispatch(updateItem(item))

        } else if (e.target.value === '-' && quantity !== 1) {
            setQuantity(quantity => quantity - 1)
            const item = {
                title,
                id,
                amount: quantity - 1,
                value,
                totalSum: (quantity - 1) * cost
            }
            dispatch(updateItem(item))
        }

    }

    return (
        <div className="basket__item" >
            <div className="items-info">
                <div className="image">
                    <img className="product-image" src={img} />
                </div>
                <div className="items-info__name">
                    <h3>{title}</h3>
                    <span className="units">(1шт.)</span>
                </div>
                <div className="items-info__technical">
                    <div className="items-info__currency">
                        <span className="value">{value}</span>
                        <span className="currency">BYN</span>
                    </div>
                    <div className="items-info__operation">
                        <input type="button" className="minus" value="-"
                            onClick={onChangeAmount}
                        />
                        <span className="amount">{quantity}</span>
                        <input type="button" className="plus" value="+"
                            onClick={onChangeAmount}
                        />
                    </div>
                    <div className="total-sum">
                        <img className="items-info__cross" src="../../images/крестик.png" onClick={() => onDeleteItem(id)} />
                        <div>
                            <span className="sum">{quantity * cost}</span>
                            <span className="valuta">Byn</span>
                        </div>
                        <span className="all-amount">{quantity} шт.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BasketItem;