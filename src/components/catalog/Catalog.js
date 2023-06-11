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
import { useState } from 'react';
import tartlets from '../../images/tartlets.png'
import './catalog.css'


const Catalog = ({ data }) => {

    const dispatch = useDispatch()
    const [position, setPosition] = useState(0)
    const [disabled, setDisabled] = useState(true)
    const loadingStatus = useSelector(state => state.catalog.loadingStatus)
    const goods = useSelector(state => state.catalog.goods)
    const popularGoods = useSelector(state => state.catalog.popularGoods)

    const [currentPage, setCurrentPage] = useState(1)
    const [perPage] = useState(3)

    const lastIndex = currentPage * perPage
    const firstIndex = lastIndex - perPage
    const current = popularGoods.slice(firstIndex, lastIndex)
    const totalPages = Math.ceil(popularGoods.length / perPage)
    useEffect(() => {
        updateData()
    }, [])

    const nextPageOnButton = (pageNumber) => {
        setCurrentPage(pageNumber)
        setPosition(415 * pageNumber - 415)
    }

    const nextPageOnArrow = (e) => {
        if (e.currentTarget.className === 'buttons__arrow-back' && currentPage > 1) {
            setCurrentPage(currentPage => currentPage - 1)
            setPosition(position => position - 415)
        }
        if (e.currentTarget.className === 'buttons__arrow-next' && currentPage < totalPages) {
            setCurrentPage(currentPage => currentPage + 1)
            setPosition(position => position + 415)
        }
    }

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
    const addItem = (name, id, amount, value, tartlets) => {
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

    function renderPopularItems(popularGoodsList) {
        const itemsPopular = popularGoodsList.map((item, i) => {
            return (
                <CatalogItem
                    name={item.name}
                    key={item.id}
                    description={item.description}
                    addItem={(amount, value, tartlets) => addItem(item.name, item.id, amount, value, tartlets)} />
            )
        })
        return (
            <div style={{ right: `${position}px` }}
                className="catalog__popular">
                {itemsPopular}
            </div>
        )
    }

    function renderItems(goodsList) {
        const items = goodsList.map((item, i) => {
            return (
                <CatalogItem
                    name={item.name}
                    key={item.id}
                    description={item.description}
                    addItem={(amount, value, img) => addItem(item.name, item.id, amount, value, img)}

                />
            )
        })
        return (
            <>
                {items}
            </>
        )
    }
    const goodsList = renderItems(goods)
    const popularList = renderPopularItems(goods)

    return (
        <>
            <Breadcrumbs location={window.location.pathname} />
            <Navigation title={data} />
            <div className="catalog-products">
                <div className="catalog__body">
                    {goodsList}
                    <div className="catalog__body-item-shell-button">
                        <div className="catalog__body-item">
                            <div className="technical"></div>
                            <a href="../Catalog-main/catalog-main.html">весь ассортимент</a>
                        </div>
                    </div>
                </div>
                <h1 className="popular-title">ПОПУЛЯРНЫЕ ДЕСЕРТЫ</h1>
                {popularList}
                <Buttons nextPageOnArrow={nextPageOnArrow}
                    disabled={disabled}
                    currentPage={currentPage}
                    perPage={perPage}
                    totalVacancies={popularGoods.length}
                    nextPageOnButton={nextPageOnButton} />
            </div>
        </>
    )
}

export default Catalog;