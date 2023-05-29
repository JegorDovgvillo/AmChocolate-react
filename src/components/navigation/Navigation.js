import './navigation.css'

const Navigation = ({title}) => {
    
    
    
    return (
        <>
            <div className="navigation">
                <div className="navigation__sections">
                    <h1 className="catalog__title">{title.toUpperCase()}</h1>
                    <svg className="triangle" width="21" height="12" viewBox="0 0 21 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.3489 1.25L10.5 11.2457L1.65112 1.25L19.3489 1.25Z" stroke="#121011" />
                    </svg>
                </div>
                <div className="selections">
                    <a className="selections__item" href="#">Шоколад</a>
                    <a className="selections__item" href="../catalog-cookie/catalog-cookie.html">Печенье</a>
                    <a className="selections__item" href="../catalog-eclairs/catalog-eclairs.html">Эклеры</a>
                    <a className="selections__item" href="../catalog-tartlets/catalog-tartlets.html">Тарталетки</a>
                    <a className="selections__item" href="../catalog-caramel/catalog-caramel.html">Карамель</a>
                    <a className="selections__item" href="../catalog-truffle/catalog-truffle.html">Трюфель</a>
                    <a className="selections__item" href="">Круасаны</a>
                    <a className="selections__item" href="">Булочки</a>
                    <a className="selections__item" href="">Пироги</a>
                </div>
            </div>
            <div className="category">
                <h3 className="category__title">Категории</h3>
                <svg className="category__triangle" width="15" height="12" viewBox="0 0 21 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.3489 1.25L10.5 11.2457L1.65112 1.25L19.3489 1.25Z" stroke="#121011" />
                </svg>
                <p>Изделия в шоколаде</p>
            </div>
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
    )
}

export default Navigation;