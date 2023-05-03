import './delivery.css'

const Delivery = () => {

    return (
        <div className="catalog">
            <div className="navigation">
                <div className="breadcrumb">
                    <ol className="breadcrumb__list" itemscope itemtype="https://schema.org/BreadcrumbList">
                        <li className="breadcrumb__list-item" itemprop="itemListElement" itemscope
                            itemtype="https://schema.org/ListItem">
                            <a itemprop="item" href="../main-page/index.html">
                                <span itemprop="name">Главная</span>
                            </a>
                            <meta itemprop="position" content="1" />
                        </li>
                        <li className="breadcrumb__list-item" itemprop="itemListElement" itemscope
                            itemtype="https://schema.org/ListItem">
                            <span itemprop="name">Доставка и оплата</span>
                            <meta itemprop="item" content="2" />
                            <meta itemprop="position" content="2" />
                        </li>
                    </ol>
                </div>
            </div>
            <div className="delivery">
                <h1>Доставка и оплата</h1>
                <h2>Принимаем заказы через сайт ежедневно с 8:00 до 21:00.</h2>
                <h3>Доставка осуществяется на следующий день.</h3>
                <h5 className="delivery__min-payment">Минимальная сумма заказа 20 BYN.</h5>
                <h5>Как заказать:</h5>
                <ul>
                    <li>
                        Выберите товар и добавьте его в корзину.
                    </li>
                    <li>
                        Заполните и отправьте специальную форму, предложенную системой.
                    </li>
                    <li>
                        В случае возникновения любых вопрсов звоните по телефону +375 (29) 444 55 55
                    </li>
                </ul>
                <h5>Способ оплаты:</h5>
                <p>
                    Наличными или банковской карточкой при получении.
                </p>
                <h5>Стоимость доставки:</h5>
                <p>
                    Стоимость доставки составляет 15% от суммы заказа.
                </p>
                <div className="delivery__button">
                    <div className="technical"></div>
                    <a href="../Catalog-main/catalog-main.html">Перейти в каталог</a>
                </div>
            </div>
        </div>
    )
}
export default Delivery;