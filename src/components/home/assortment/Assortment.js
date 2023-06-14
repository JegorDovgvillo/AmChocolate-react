import { useSelector } from "react-redux";
import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import './assortment.css'
import { fetchCatalogMain } from "../../catalogMain/catalogMainSlice";
import Buttons from "../../buttons/Buttons";

const Assortment = () => {
    const dispatch = useDispatch()
    const [position, setPosition] = useState(0)
    const reviews = useSelector(state => state.catalog.goods)
    const [disabled, setDisabled] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage] = useState(3)

    const lastIndex = currentPage * perPage
    const firstIndex = lastIndex - perPage
    const current = reviews.slice(firstIndex, lastIndex)
    const totalPages = Math.ceil(reviews.length / perPage)
    const elems = useSelector(state => state.catalogMain.elems)
    useEffect(() => {
        dispatch(fetchCatalogMain())
    }, [])
    const nextPageOnButton = (pageNumber) => {
        setCurrentPage(pageNumber)
        setPosition(1268 * pageNumber - 1268)
    }

    const nextPageOnArrow = (e) => {
        if (e.currentTarget.className === 'buttons__arrow-back' && currentPage > 1) {
            setCurrentPage(currentPage => currentPage - 1)
            setPosition(position => position - 1268)
        }
        if (e.currentTarget.className === 'buttons__arrow-next' && currentPage < totalPages) {
            setCurrentPage(currentPage => currentPage + 1)
            setPosition(position => position + 1268)
        }
    }
    function renderNameOfGoods(data) {
        const item = data.map((item, i) => {
            return (
                <li key={i} className="navigation-list__item">
                    <a className="list-item" href="./src/pages/Catalog-chocolate/catalog-chocolate.html">{item.name}</a>
                </li>
            )
        })
        return (
            <ul className="navigation-list-menu">
                {item}
            </ul>
        )
    }

    function renderCards(data) {
        const item = data.map((item, i) => {
            ++i
            return (
                <div className="card" key={i} style={{ marginRight: (i !== 0 && i % 3 == 0) ? '180px' : '16px' }}>
                    <h1 className="card__title">{item.name}</h1>
                    <img className="card__img" src={item.image} alt="cards1" />
                    <div className="card-body">
                        <p className="card__text">От <span>20</span> <i>BYN</i></p>
                        <div className="btn-body menu-card__btn">
                            <div className="technical menu-technical"></div>
                            <a href="./src/pages/Catalog-chocolate/catalog-chocolate.html">Заказать</a>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div style={{ right: `${position}px` }}
                className="assortment-cards">
                {item}
            </div>
        )
    }
    const cards = renderCards(elems)
    const barItem = renderNameOfGoods(elems)
    return (
        <div className="assortment">
            <div className="assortment-container">
                <nav className="navbar ">
                    <div className="container-fluid-assortment">
                        <h2 className="navbar__title">АССОРТИМЕНТ</h2>
                        <div className="category">
                            <h3 className="category__title">Категории</h3>
                            <svg className="category__triangle-menu" width="15" height="12" viewBox="0 0 21 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.3489 1.25L10.5 11.2457L1.65112 1.25L19.3489 1.25Z" stroke="#121011" />
                            </svg>
                            <p>Тарталетки</p>
                        </div>
                        {/* <ul className="navigation-list-menu">
                            <li className="navigation-list__item">
                                <a className="list-item" href="./src/pages/Catalog-chocolate/catalog-chocolate.html">Шоколад</a>
                            </li>
                            <li className="navigation-list__item">
                                <a className="list-item" href="./src/pages/catalog-tartlets/catalog-tartlets.html">Тарталетки</a>
                            </li>
                            <li className="navigation-list__item">
                                <a className="list-item" href="./src/pages/catalog-cookie/catalog-cookie.html">Печенье</a>
                            </li>
                            <li className="navigation-list__item">
                                <a className="list-item" href="./src/pages/catalog-caramel/catalog-caramel.html">Карамель</a>
                            </li>
                            <li className="navigation-list__item">
                                <a className="list-item" href="./src/pages/catalog-eclairs/catalog-eclairs.html">Эклеры</a>
                            </li>
                            <li className="navigation-list__item">
                                <a className="list-item" href="./src/pages/catalog-truffle/catalog-truffle.html">Трюфель</a>
                            </li>
                        </ul> */}
                        {barItem}
                    </div>
                </nav>
                <div className="assortment-cards">
                    {cards}
                </div>
                <div className="scroll-buttons-menu">
                    <button className="menu-arrow-back">
                        <img src="../../images/стрелка назад.png" />
                    </button>
                    <span className="scroll-buttons__position-first menu-position">1</span>
                    <span className="scroll-buttons__position-separator">/</span>
                    <span className="scroll-buttons__position-second menu-position-last">6</span>
                    <button className="menu-arrow-next">
                        <img src="../../images/стрелка.png" />
                    </button>
                </div>
                <Buttons nextPageOnArrow={nextPageOnArrow}
                    disabled={disabled}
                    currentPage={currentPage}
                    perPage={perPage}
                    totalVacancies={reviews.length}
                    nextPageOnButton={nextPageOnButton} />
            </div>
        </div>
    )
}


export default Assortment;