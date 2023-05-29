import Navigation from '../navigation/Navigation';
import Buttons from '../buttons/Buttons';
import CatalogItem from '../catalogItem/CatalogItem';
import Spinner from '../spinner/Spinner';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket } from './catalogSlice';
import { fetchCatalog, fetchCatalogPopular } from './catalogSlice';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import { updateItem } from "../basket/basketSlice"

// import './catalog.css'

const Catalog = ({ data }) => {

    const dispatch = useDispatch()
    const position = useSelector(state => state.buttons.position)
    const loadingStatus = useSelector(state => state.catalog.loadingStatus)
    const goods = useSelector(state => state.catalog.goods)
    const popularGoods = useSelector(state => state.catalog.popularGoods)
    useEffect(() => {
        updateData()
    }, [])

    const updateData = () => {

        switch (data) {
            case 'шоколад':
                dispatch(fetchCatalog())
                dispatch(fetchCatalogPopular())
                break;
            case 'тарталетки':
                dispatch(fetchCatalog())
                dispatch(fetchCatalogPopular())
                break;
        }
    }
    const addItem = (name, id, amount, value,tartlets) => {
        console.log(tartlets)
        const item = {
            name,
            img: tartlets,
            id,
            amount,
            value,
            totalSum: amount * value
        }
        // dispatch(addToBasket(item))
        dispatch(updateItem(item))

    }
    if (loadingStatus === 'loading') {
        return <Spinner />
    }

    const stylePosition = `${position}px`;
    function renderPopularItems(popularGoodsList) {
        const itemsPopular = popularGoodsList.map((item, i) => {
            return (
                <CatalogItem
                    name={item.name}
                    key={item.id}
                    description={item.description}
                    addItem={(amount, value, img) => addItem(item.name, item.id, amount, value, img)} />
            )
        })
        return (
            <div style={{ right: stylePosition }}
                className="catalog__popular">
                {itemsPopular}
            </div>
        )
    }

    // const slideBack = () => {
    //     setSlide(slide => 'firstSlide')
    //     setDisabled(disabled => !disabled)
    // }
    // const slideNext = () => {
    //     setDisabled(disabled => !disabled)
    //     setSlide(slide => 'secondSlide')
    // }

    function renderItems(goodsList) {
        const items = goodsList.map((item, i) => {
            return (
                <CatalogItem
                    img={item.thumbnail}
                    name={item.name}
                    key={item.id}
                    description={item.description}
                    addItem={(amount, value, img) => addItem(item.name, item.id, amount, value, img)}

                />
            )
        })
        return (
            <div className="catalog__body" >
                {items}
            </div>
        )
    }
    const goodsList = renderItems(goods)
    const popularList = renderPopularItems(popularGoods)

    return (

        <div className="catalog-product">
            <Breadcrumbs location={window.location.pathname} />
            <Navigation title={data} />
            <div className="catalog__body">
                {goodsList}
                <div className="catalog__body-shell-button">
                    <div className="catalog__body-item">
                        <div className="technical"></div>
                        <a href="../Catalog-main/catalog-main.html">весь ассортимент</a>
                    </div>
                </div>
            </div>
            <h1 className="popular-title">ПОПУЛЯРНЫЕ ДЕСЕРТЫ</h1>
            {popularList}
            <Buttons />
        </div>

    )
}

export default Catalog;