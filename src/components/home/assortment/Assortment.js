import { useSelector } from "react-redux";
import { useEffect } from 'react'
import { useDispatch } from "react-redux";
import './assortment.css'
import { fetchCatalogMain } from "../../catalogMain/catalogMainSlice";


const Assortment = () => {
    const dispatch = useDispatch()
    const elems = useSelector(state => state.catalogMain.elems)
    useEffect(() => {
        dispatch(fetchCatalogMain())
    }, [])

    function renderNameOfGoods(data) {
        const item = data.map((item, i) => {
            return (
                <li className="navigation-list__item">
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
            return (
                <div className="card">
                    <h1 className="card__title">{item.name}</h1>
                    <img className="card__img" src="/images/cards/card1.png" alt="cards1" />
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
            <>
                {item}
            </>
        )
    }
    const cards = renderCards(elems)
    const barItem = renderNameOfGoods(elems)
    return (
        <section className="assortment">
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
                    {/* <div className="card">
                        <h1 className="card__title">Шоколад</h1>
                        <img className="card__img" src="/images/cards/card1.png" alt="cards1" />
                        <div className="card-body">
                            <p className="card__text">От <span>20</span> <i>BYN</i></p>
                            <div className="btn-body menu-card__btn">
                                <div className="technical menu-technical"></div>
                                <a href="./src/pages/Catalog-chocolate/catalog-chocolate.html">Заказать</a>
                            </div>
                        </div>
                    </div> */}
                    {/* <div data-aos="flip-right" data-aos-easing="linear" data-aos-duration="1500" className="card second-card"
                    >
                        <h1 className="card__title">Тарталетки</h1>
                        <img className="card__img" src="/images/cards/card2.png" alt="cards2" />
                        <div className="card-body">
                            <p className="card__text">От <span>5</span> <i>BYN</i></p>
                            <div className="btn-body menu-card__btn">
                                <div className="technical menu-technical"></div>
                                <a href="./src/pages/catalog-tartlets/catalog-tartlets.html">Заказать</a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-right" data-aos-easing="linear" data-aos-duration="1500" className="card third-card"
                    >
                        <h1 className="card__title">Печенье</h1>
                        <img className="card__img" src="/images/cards/card3.png" alt="cards3" />
                        <div className="card-body">
                            <p className="card__text">От <span>10</span> <i>BYN</i></p>
                            <div className="btn-body menu-card__btn">
                                <div className="technical menu-technical"></div>
                                <a href="./src/pages/catalog-cookie/catalog-cookie.html">Заказать</a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-right" data-aos-easing="linear" data-aos-duration="1500" className="card fourth-card"
                    >
                        <h1 className="card__title">Печенье</h1>
                        <img className="card__img" src="/images/cards/card3.png" alt="cards3" />
                        <div className="card-body">
                            <p className="card__text">От <span>10</span> <i>BYN</i></p>
                            <div className="btn-body menu-card__btn">
                                <div className="technical menu-technical"></div>
                                <a href="./src/pages/catalog-cookie/catalog-cookie.html">Заказать</a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-right" data-aos-easing="linear" data-aos-duration="1500" className="card fifth-card"
                    >
                        <h1 className="card__title">Печенье</h1>
                        <img className="card__img" src="/images/cards/card3.png" alt="cards3" />
                        <div className="card-body">
                            <p className="card__text">От <span>10</span> <i>BYN</i></p>
                            <div className="btn-body menu-card__btn">
                                <div className="technical menu-technical"></div>
                                <a href="./src/pages/catalog-cookie/catalog-cookie.html">Заказать</a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-right" data-aos-easing="linear" data-aos-duration="1500" className="card sixth-card"
                    >
                        <h1 className="card__title">Печенье</h1>
                        <img className="card__img" src="/images/cards/card3.png" alt="cards3" />
                        <div className="card-body">
                            <p className="card__text">От <span>10</span> <i>BYN</i></p>
                            <div className="btn-body menu-card__btn">
                                <div className="technical menu-technical"></div>
                                <a href="./src/pages/catalog-cookie/catalog-cookie.html">Заказать</a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-right" data-aos-easing="linear" data-aos-duration="1500" className="card seventh-card"
                    >
                        <h1 className="card__title">Печенье</h1>
                        <img className="card__img" src="img/cards/card3.png" alt="cards3" />
                        <div className="card-body">
                            <p className="card__text">От <span>10</span> <i>BYN</i></p>
                            <div className="btn-body menu-card__btn">
                                <div className="technical menu-technical"></div>
                                <a href="#!">Заказать</a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-right" data-aos-easing="linear" data-aos-duration="1500" className="card eighth-card"
                    >
                        <h1 className="card__title">Печенье</h1>
                        <img className="card__img" src="img/cards/card3.png" alt="cards3" />
                        <div className="card-body">
                            <p className="card__text">От <span>10</span> <i>BYN</i></p>
                            <div className="btn-body menu-card__btn">
                                <div className="technical menu-technical"></div>
                                <a href="#!">Заказать</a>
                            </div>
                        </div>
                    </div> */}
                    {/* <div data-aos="flip-right" data-aos-easing="linear" data-aos-duration="1500" className="card ninth-card"
                    >
                        <h1 className="card__title">Печенье</h1>
                        <img className="card__img" src="img/cards/card3.png" alt="cards3" />
                        <div className="card-body">
                            <p className="card__text">От <span>10</span> <i>BYN</i></p>
                            <div className="btn-body menu-card__btn">
                                <div className="technical menu-technical"></div>
                                <a href="#!">Заказать</a>
                            </div>
                        </div>
                    </div> */}
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
                <div className="menu__counter">
                    <button className="menu-arrow-back">
                        <img src="../../images/стрелка назад.png" />
                    </button>
                    <input type="button" value="1" className="menu__counter__value menu-page-first active" />
                    <input type="button" value="2" className="menu__counter__value menu-page-second" />
                    <input type="button" value="3" className="menu__counter__value menu-page-third" />
                    <button className="arrow menu-arrow" id="show-prev-btn">
                        <img src="../../images/стрелка.png" id="news" />
                    </button>
                </div>
            </div>
        </section>
    )
}


export default Assortment;