// import useMarvelService from "../../services/MarvelService";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import tartlets from '../../images/tartlets.png'
import Spinner from "../spinner/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { fetchCatalog } from "../catalog/catalogSlice";
import './catalog-main.css'

const CatalogMain = () => {
    const loadingStatus = useSelector(state => state.catalogMain.loadingStatus)
    const elems = useSelector(state => state.catalogMain.elems)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchCatalog())
    }, [])

    function renderItem(data) {

        const rndItems = data.map((item, i) => {
            return (
                <div className="catalog__body-item" key={item.id}>
                    <div className="catalog__body-tecnical">
                        <h3>Булочки</h3>
                        <img src={tartlets} alt="" />
                        <div className="items-info">
                            <div className="items-info__currency">
                                <span className="currency">От</span>
                                <span className="value">5</span>
                                <span className="currency">BYN</span>
                            </div>
                            <div className="technical"></div>
                            <Link to="/main/catalog/chocolate">заказать</Link>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="catalog__body">
                {rndItems}
                <div className="catalog__body-item">
                    <div className="technical-elem"></div>
                    <a href="../Catalog-main/catalog-main.html">Главная страница</a>
                </div>
            </div>
        )
    }
    if (loadingStatus === 'loading') {
        return <Spinner />
    }
    const items = renderItem(elems)

    return (
        <>
            <Breadcrumbs location={window.location.pathname} />
            {items}
        </>

    )
}

export default CatalogMain;