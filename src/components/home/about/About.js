import about1 from '../../../images/about1.png'
import './about.css'
import arrowNext from '../../../images/arrowNext.png'
import arrowBack from '../../../images/arrowBack.png'

const About = () => {


    return (
        <section className="about">
            <div className="about-container">

                <div className="about__content">
                    <h2 className="about__title" id="about">О НАС</h2>
                    <p className="about__text">
                        <span>AM CHOCOLATE</span> - минская сеть кондитерских. На
                        протяжении 18-ти лет мы готовим различные десерты для людей с
                        разными вкусами, но одинаково серьезными требованиями к
                        качеству.
                    </p>
                    <p className="about__text">
                        С каждым днем мы меняемся к лучшему. Каждый наш рецепт
                        проработан до мелочей. Что делает наши изделия особенными и
                        неповторимыми. Об этом говорят наши многочисленные отзывы.
                    </p>
                    <p className="about__text">
                        Все наши продукты мы готовим с любовью исключительно из
                        качественных и натуральных ингредиентов.
                    </p>
                    <div className="btn-body btn-about">
                        <div className="technical technical-about"></div>
                        <a href="./src/pages/Catalog-main/catalog-main.html">Перейти в каталог</a>
                    </div>
                </div>
                <div className="about__image">
                    <h2 className="about__title-technical">О НАС</h2>
                    <div className="about__image-one ">
                        <img width="590" height="425" src="/images/sliderImages/1.jpg" className="main-image" alt="" />
                    </div>
                    <div className="about-slider" id="slide">
                        <img className="slide-item img1" src={about1} width=" 90" height="57" alt="" />
                        <img className="slide-item img2" src="/images/about2.png" width="120" height="77" alt="" />

                        <img className="arrow-back" src={arrowBack} />

                        <img className="slide-item img3 active-image" src="/images/about3.png" width="107" height="142" alt="" />

                        <img className="arrow-next" src={arrowNext} />

                        <img className="slide-item img4" src="/images/about4.png" width="120" height="77;" alt="" />
                        <img className="slide-item img5" src="/images/about5.png" width="90" height="57" alt="" />
                    </div>
                    {/* <div className="scroll-buttons">
                            <button className="scroll-buttons__arrow-back">
                                <img src={arrowBack} className="adaptate-arrow-back" />
                            </button>
                            <span className="scroll-buttons__position-first">3</span>
                            <span className="scroll-buttons__position-separator">/</span>
                            <span className="scroll-buttons__position-second">5</span>
                            <button className="scroll-buttons__arrow">
                                <img src={arrowNext} className="adaptate-arrow-next" />
                            </button>
                        </div> */}
                </div>

            </div>
        </section>
    )
}

export default About;