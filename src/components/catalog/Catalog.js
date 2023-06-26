
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from './catalogSlice';
import { fetchCatalog, fetchCatalogPopular } from './catalogSlice';
import { updateItem } from "../basket/basketSlice"
import { useState } from 'react';

import Navigation from '../navigation/Navigation';
import Buttons from '../buttons/Buttons';
import CatalogItem from '../catalogItem/CatalogItem';
import Spinner from '../spinner/Spinner';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';

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
        setPosition(1194 * pageNumber - 1194)
    }

    const nextPageOnArrow = (e) => {
        if (e.currentTarget.className === 'buttons__arrow-back' && currentPage > 1) {
            setCurrentPage(currentPage => currentPage - 1)
            setPosition(position => position - 1194)
        }
        if (e.currentTarget.className === 'buttons__arrow-next' && currentPage < totalPages) {
            setCurrentPage(currentPage => currentPage + 1)
            setPosition(position => position + 1194)
        }
    }

    const updateData = () => {

        switch (data) {
            case 'шоколад':
                dispatch(fetchCatalog())
                dispatch(fetchCatalogPopular())
                dispatch(setCategory(2))
                break;
            case 'тарталетки':
                dispatch(fetchCatalog(1))
                dispatch(fetchCatalogPopular(3))

                break;
        }
    }
    const addItem = (title, id, amount, value, tartlets) => {
        const item = {
            title,
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
                    img={item.image}
                    compound={item.composition}
                    title={item.title}
                    price={item.price}
                    key={item.id}
                    description={item.description}
                    addItem={(amount, value, img, title) => addItem(title, item.id, amount, value, img)}
                />
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
        const blocks = []
        for (let i = 0; i < goodsList.length; i += 3) {
            const blockItems = goodsList.slice(i, i + 3);
            console.log(blockItems)
            const block = (
                <div className='items-wrap' key={Math.floor(Math.random() * 100) + 1}>
                    {blockItems.map((item, i) => {
                        return (
                            <CatalogItem
                                img={item.image}
                                compound={item.composition}
                                title={item.title}
                                price={item.price}
                                key={item.id}
                                description={item.description}
                                addItem={(amount, value, img, title) => addItem(title, item.id, amount, value, img)}
                            />
                        )
                    })}
                </div>

            );
            blocks.push(block);
        }
        return (
            <>
                {blocks}
            </>
        )
    }

    const goodsList = renderItems(goods)
    const popularList = renderPopularItems(popularGoods)

    return (
        <>
            <Breadcrumbs location={window.location.pathname} />
            <Navigation title={data} />
            <div className="catalog-products">
                <div className="catalog__body">
                    {goodsList}
                </div>
                <div className="catalog-products__button-shell">
                    <div className="catalog-products__button">
                        <div className="technical"></div>
                        <a href="/main/catalog">весь ассортимент</a>
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