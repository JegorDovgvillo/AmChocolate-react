
import './novelties.css'

const Novelties = () => {


    return (
        <section className="news" id="tartlets">
                <div className="container container-md container-sm">
                    <nav className="navbar navbar-expand-lg navbar-news">
                        <div className="container-fluid-new">
                            <h2 className="navbar__title">НОВИНКИ</h2>
                            <div className="category">
                                <h3 className="category__title">Категории</h3>
                                <svg className="category__triangle-new" width="15" height="12" viewBox="0 0 21 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.3489 1.25L10.5 11.2457L1.65112 1.25L19.3489 1.25Z" stroke="#121011" />
                                </svg>
                                <p>Тарталетки</p>
                            </div>
                            <ul className="navigation-list-new">
                                <li className="navigation-list__item">
                                    <a className="list-item" href="./src/pages/catalog-tartlets/catalog-tartlets.html">Тарталетки</a>
                                </li>
                                <li className="navigation-list__item">
                                    <a className="list-item" href="./src/pages/Catalog-chocolate/catalog-chocolate.html">Шоколад</a>
                                </li>
                                <li className="navigation-list__item">
                                    <a className="list-item" href="./src/pages/catalog-eclairs/catalog-eclairs.html">Эклеры</a>
                                </li>
                            </ul>
                            <div className="collapse navbar-collapse">
                                <div className="navbar-nav">
                                    <a className="nav-link nav-link__news tartlets-card active-card" href="#tartlets">Тарталетки</a>
                                    <a className="nav-link nav-link__news chocolate-card"
                                        href="/Catalog-chocolate/catalog-chocolate.html">Шоколад</a>
                                    <a className="nav-link nav-link__news eclairs-card"
                                        href="./src/pages/catalog-eclairs/catalog-eclairs.html">Эклеры</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="d-flex-new justify-content-around">
                        <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className="news__image">
                            <div className="news__image-one">
                                <h2 className="news__subtitle">Тарталетка лимон</h2>
                                <div className="image-container">
                                    <img src="/images/DSC_5333.png" alt="" className="news-main-image" />
                                </div>
                            </div>
                            <div className="news__image-two">
                                <div className="news__image__slider">
                                    <img src="/images/news1.png" alt="" className="news__image-item news-img1" />
                                    <button className="arrow left-arrow__news" id="show-next-btn">
                                        <img className="arrow-back news-arrow-back" src="../../images/стрелка назад.png" />
                                    </button>
                                    <div className="image">
                                        <img src="/images/news3.png" alt="" className="news__image-item-item news-img2 news-active-img" />
                                    </div>
                                    <button className="arrow right-arrow__news" id="show-prev-btn">
                                        <img className="arrow-next news-arrow-next" src="../../images/стрелка.png" />
                                    </button>
                                    <img src="/images/news2.png" alt="" className="news__image-item news-img3" />
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000" className="news__content">
                            <h2 className="news__subtitle">Тарталетка лимон</h2>
                            <p className="news__subtext">Цена <span className="units">(1 шт.)</span></p>
                            <div className="news__price">
                                <div className="news__price-content">
                                    <p className="news__price__text">5</p>
                                    <span>BYN</span>
                                </div>
                                <div className="news__counter">
                                    <button className="news__counter__btn minus">-</button>
                                    <input readOnly type="text" value="1" className="news__counter__value amount" />
                                    <button className="news__counter__btn plus">+</button>
                                </div>
                                <div className="news__price-img">
                                    <img src="/images/news__box.png" className="basket-desktop" alt="news__box" />
                                </div>
                            </div>
                            <h2 className="news-content__title">Описание</h2>
                            <p className="news-content__text">
                                Изделие из песочного теста с начинкой из лимонного заварного
                                крема.
                            </p>
                            <h2 className="news-content__title">Состав:</h2>
                            <p className="news-content__text">
                                Крем лимонный, лимонный сок, мука пшеничная, мука миндальная,
                                масло сливочное 82%, сахарная пудра, вода питьевая.
                            </p>
                            <div className="btn-body btn-news">
                                <div className="technical technical-news"></div>
                                <a href="#!">Купить</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Novelties;