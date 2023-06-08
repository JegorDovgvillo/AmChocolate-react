
import { useState } from 'react';

import basket from '../../images/basket.svg'
import tartlets from '../../images/tartlets.png'

import './catalogItem.css'

const CatalogItem = ({ name, description, value = 10, compound, addItem }) => {

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
            <div className={'catalog__body-item-shell' + activeInfo} >
                <div className={"catalog__body-item" + activeInfo}>
                    <div className="catalog__body-item-header-group">
                        <h3>{name}</h3>
                        {/* <img className="cross" src="../../images/крестик.png" /> */}
                    </div>
                    <div>
                        <img className={"image-on-click catalog__body-item-image" + activeInfo}
                            src={tartlets}
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
                                    addItem(amount, value, tartlets)
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
                                addItem(amount, value, tartlets)
                                setAmount(1)
                            }}>
                                <img src={basket} />
                            </button>
                        </div>
                    </div>
                    <div className={"items-info__operation_onclick" + activeInfo}>
                        <div>
                            <h4>Описание:</h4>
                            <p>{description}</p>
                            <h4>Состав:</h4>
                            <p>Крем лимонный, лимонный сок, мука пшеничная в/с, мука миндальная,
                                масло сливочное 82%, сахарная пудра, вода питьевая.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatalogItem;