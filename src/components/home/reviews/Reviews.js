import Buttons from '../../buttons/Buttons';
import { fetchCatalog, fetchCatalogPopular } from '../../catalog/catalogSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import img from '../../../images/clients-main-img.png'
import './reviews.css'

const Reviews = () => {
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

    useEffect(() => {
        updateData()
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

    const updateData = () => {
        dispatch(fetchCatalog())
    }


    function renderReviews(data) {

        const reviews = data.map((item, i) => {
            ++i
            
            return (
                <div className="card" style={{ marginRight: (i !== 0 && i % 3 == 0) ? '180px' : '16px' }}>
                    <div className="card-body">
                        <p className="card__review">
                            Я уже постоянный клиент.
                            Каждое утро покупаю что-то вкусненькое. Всегда очень вкусно и
                            все свежее. Клиентоориентированность на высшем уровне, такое
                            редко встретишь
                        </p>
                        <div className="card-address">
                            <div className="card-address__img">
                                <img src="/images/clients-icon.png" />
                            </div>
                            <p className="card-address__text">Немига 3</p>
                        </div>
                        <div className="card-info">
                            <p className="card-info__text">Алина</p>
                            <div className="card-info__date">10.08.2022</div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div style={{ right: `${position}px` }}
                className="reviews-card">
                {reviews}
            </div>
        )
    }

    const reviewsItems = renderReviews(reviews)
    return (
        <div className="reviews">
            <div className="reviews-container">
                <h1 className="reviews-container__title" id="reviews">ЧТО ГОВОРЯТ НАШИ КЛИЕНТЫ?</h1>
                {reviewsItems}
                {/* <div className="scroll-buttons-reviews">
                    <button className="reviews-arrow-back">
                        <img src="../../images/стрелка назад.png" />
                    </button>
                    <span className="scroll-buttons__position-first reviews-position">1</span>
                    <span className="scroll-buttons__position-separator">/</span>
                    <span className="scroll-buttons__position-second menu-position-last">12</span>
                    <button className="reviews-arrow-next">
                        <img src="../../images/стрелка.png" />
                    </button>
                </div> */}
                <Buttons nextPageOnArrow={nextPageOnArrow}
                    disabled={disabled}
                    currentPage={currentPage}
                    perPage={perPage}
                    totalVacancies={reviews.length}
                    nextPageOnButton={nextPageOnButton} />
                <div className='reviews-container__img'>
                    <img src={img} />
                </div>
            </div>
        </div>
    )
}


export default Reviews;