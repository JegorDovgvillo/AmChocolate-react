
import './reviews.css'

const Reviews = () => {


    return (
<section className="reviews">
                <div className="container container-md container-sm">
                    <h1 className="reviews__title" id="reviews">ЧТО ГОВОРЯТ НАШИ КЛИЕНТЫ?</h1>

                    <div className="reviews-card">
                        <div className="card first">
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

                        
                    </div>
                    <div className="scroll-buttons-reviews">
                        <button className="reviews-arrow-back">
                            <img src="../../images/стрелка назад.png" />
                        </button>
                        <span className="scroll-buttons__position-first reviews-position">1</span>
                        <span className="scroll-buttons__position-separator">/</span>
                        <span className="scroll-buttons__position-second menu-position-last">12</span>
                        <button className="reviews-arrow-next">
                            <img src="../../images/стрелка.png" />
                        </button>
                    </div>
                    <div className="menu__counter">
                        <button className="reviews-arrow-back">
                            <img src="../../images/стрелка назад.png" />
                        </button>
                        <input type="button" value="1" className="menu__counter__value reviews-first-page active" />
                        <input type="button" value="2" className="menu__counter__value reviews-second-page" />
                        <input type="button" value="3" className="menu__counter__value reviews-third-page" />
                        <input type="button" value="4" className="menu__counter__value reviews-fourth-page" />
                        <input type="button" value="5" className="menu__counter__value reviews-fifth-page" />
                        <input type="button" value="6" className="menu__counter__value reviews-sixth-page" />
                        <button className="arrow reviews-arrow" id="show-prev-btn">
                            <img src="../../images/стрелка.png" />
                        </button>
                    </div>



                    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="card-image">
                        <img src="/images/clients-main-img.png" alt="" className="card-image__img" />
                    </div>
                </div>
            </section>
    )
}


export default Reviews;