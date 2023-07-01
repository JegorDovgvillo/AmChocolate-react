import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { fetchCatalogMain } from "../catalogMain/catalogMainSlice";

import './navigation.css'
import './navigationAdaptate.scss'

const Navigation = ({ title }) => {

    const [active, setActive] = useState('')
    const titleList = useSelector(state => state.catalogMain.elems)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCatalogMain())
    }, [])

    const navigaationList = (title === 'шоколад') ?
        <>
            <ul className="navigation-list">
                <li className="navigation-list__item">
                    <a className="list-item" href="#">Изделия в шоколаде</a>
                </li>
                <li className="navigation-list__item">
                    <a className="list-item" href="../Catalog-mendiant/catalog-mendiant.html">Мендиант</a>
                </li>
                <li className="navigation-list__item">
                    <a className="list-item" href="../Catalog-spoon/catalog-spoon.html">Шоколад на ложке</a>
                </li>
                <li className="navigation-list__item">
                    <a className="list-item" href="../Catalog-lolipop/catalog-lolipop.html">Лолипоп</a>
                </li>
                <li className="navigation-list__item">
                    <a className="list-item" href="../Catalog-nuts/catalog-nuts.html">Шоколад с орехом</a>
                </li>
            </ul>
        </>
        :
        null

    const viewList = () => {
        if (active === "") {
            setActive('active')
        } else {
            setActive('')
        }
    }

    function renderSelectionItem(data) {
        const item = data.map((item, i) => {
            return (
                <a className="selections__item" href="">{item.name}</a>
            )
        })
        return (
            <div className={'selections ' + active} >
                {item}
            </div>
        )
    }
    const selectionItems = renderSelectionItem(titleList)

    return (
        <>
            <div className="navigation">
                <div className="navigation__sections">
                    <h2 className='catalog__title'>{title.toUpperCase()}</h2>
                    <svg className="triangle" width="21" height="12" viewBox="0 0 21 12" fill="none"
                        onClick={viewList}
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.3489 1.25L10.5 11.2457L1.65112 1.25L19.3489 1.25Z" stroke="#121011" />
                    </svg>
                </div>
                {selectionItems}
            </div>
            <div className="category">
                <h3 className="category__title">Категории</h3>
                <svg className="category__triangle" width="15" height="12" viewBox="0 0 21 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={viewList}>
                    <path d="M19.3489 1.25L10.5 11.2457L1.65112 1.25L19.3489 1.25Z" stroke="#121011" />
                </svg>
                {selectionItems}
            </div>
            {navigaationList}
        </>
    )
}

export default Navigation;