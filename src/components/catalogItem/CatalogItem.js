
import { useState } from 'react';
import tartlets from '../../images/tartlets.png'
import basket from '../../images/basket.svg'

const CatalogItem = ({ name, description, value = 10, compound, addItem, img }) => {

    const [amount, setAmount] = useState(1)


    const [disabled, setDisabled] = useState(true)
    const [activeInfo, setActiveInfo] = useState('')

    const onChangeAmount = (e) => {

        if (e.target.value === '+') {
            setAmount(amount => amount + 1)
            setDisabled(disabled => false)
        } else {
            setAmount(amount => amount - 1)
        }
        if (e.target.value === '-' && amount == 2) {
            setDisabled(disabled => true)
        }
    }

    const showDescription = () => {
        if (activeInfo === '') {
            setActiveInfo(activeInfo => activeInfo + ' activeInfo')
        } else {
            setActiveInfo('')
        }
    }

    return (
        <>
            <div className={'catalog__body-shell' + activeInfo} >
                <div className={"catalog__body-item" + activeInfo}>
                    <div className="catalog__body-header-group">
                        <h3>{name}</h3>
                        {/* <img className="cross" src="../../images/крестик.png" /> */}
                    </div>
                    <div className="image">
                        <img className={"image-on-click product-image" + activeInfo}
                            src={img}
                            alt=""
                            onClick={showDescription} />
                    </div>
                    <div className={"items-info" + activeInfo}>
                        <div className="items-info__currency">
                            <span className="value">{value}</span>
                            <div className="items-info__apiece">
                                <span className="currency">BYN</span>
                                <span className="units">(1шт.)</span>
                            </div>
                            <button className="basket-adaptate"
                                onClick={() => {
                                    addItem(amount, value, img)
                                    setAmount(1)
                                }}>
                                <img src={basket} /></button>
                        </div>
                        <div className="items-info__operation" >
                            <input type="button"
                                className="minus"
                                value="-"
                                disabled={disabled}
                                onClick={(event) => onChangeAmount(event)} />
                            <span className="amount">{amount}</span>
                            <input type="button"
                                className="plus"
                                value="+"
                                onClick={(event) => onChangeAmount(event)} />
                            <button className="basket-desktop" onClick={() => {
                                addItem(amount, value, img)
                                setAmount(1)
                            }}>
                                <img src={basket} />
                            </button>
                        </div>
                    </div>
                    <div className={"items-info__operation-onclick" + activeInfo}>
                        <h4>Описание:</h4>
                        <p>{description}</p>
                        <h4>Состав:</h4>
                        <p>Крем лимонный, лимонный сок, мука пшеничная в/с, мука миндальная,
                            масло сливочное 82%, сахарная пудра, вода питьевая.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatalogItem;