import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchCatalogMain } from "./catalogMainSlice";

import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Spinner from "../spinner/Spinner";

import './catalogMain.css'

const CatalogMain = () => {
    const loadingStatus = useSelector(state => state.catalogMain.loadingStatus)
    const elems = useSelector(state => state.catalogMain.elems)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchCatalogMain())
    }, [])

    function renderItem(data) {

        const mainCatalogItems = data.map((item, i) => {
            return (
                <div className="catalog-body__item" key={i}>
                    <div className="catalog-body__item-tecnical">
                        <h3>{item.name}</h3>
                        <img src={item.image} alt={item.name} />
                        <div className="item-info">
                            <div className="item-info__currency">
                                <span className="item-info__currency-from">От</span>
                                <span className="item-info__value">5</span>
                                <span className="item-info__valuta">BYN</span>
                            </div>
                            <div className="technical"></div>
                            <Link to="/main/catalog/tartlets">заказать</Link>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <>
                {mainCatalogItems}
            </>
        )
    }

    if (loadingStatus === 'loading') {
        return <Spinner />
    }
    const items = renderItem(elems)
    return (
        <>
            <Breadcrumbs location={window.location.pathname} />
            <h2 className="catalog-title">Ассортимент</h2>
            <div className="catalog-body">
                {items}
            </div>
        </>

    )
}

export default CatalogMain;