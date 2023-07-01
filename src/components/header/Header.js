import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import basketBlack from '../../images/basketBlack.svg'

import './header.css'
import './headerAdaptate.scss'

const Header = () => {

    const { ids } = useSelector(state => state.basket)
    return (
        <div className="header">
            <div className="wrapper">
                <header className="burger">
                    <div className="burger__conteiner">
                        <div className="burger__body">
                            <div className="burger__cross">
                                <span></span>
                            </div>
                            <nav className="burger__menu">
                                <ul className="burger__list">
                                    <li className="header__list-item">
                                        <NavLink className="link" to="../main-page/index.html#about">О Нас</NavLink>
                                    </li>
                                    <li className="header__list-item">
                                        <NavLink className="link" href="../Catalog-main/catalog-main.html">Ассортимент</NavLink>
                                    </li>
                                    <li className="header__list-item">
                                        <NavLink className="link" href="../main-page/index.html#news">Новинк</NavLink>
                                    </li>
                                    <li className="header__list-item">
                                        <NavLink className="link" href="../main-page/index.html#reviews">Отзывы</NavLink>
                                    </li>
                                    <li className="header__list-item">
                                        <NavLink className="link" href="../main-page/index.html#contacts" target="_blank">Контакты</NavLink>
                                    </li>
                                    <li className="header__list-item">
                                        <NavLink className="link" href="../delivery/delivery.html" target="_blank">Доставка и
                                            оплата</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
            <div className="header__logo">
                <NavLink href="../main-page/index.html">
                    <svg width="139" height="125" viewBox="0 0 105 107" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="logo">
                        <g clipPath="url(#clip0_1153_5364)">
                            <path
                                d="M66.4198 20.8652L64.4129 20.3896L64.0912 22.5139C64.0768 22.6092 63.2872 27.806 62.3695 33.8233L61.3371 40.605L57.8909 20.3896L55.9992 20.7415C52.8264 21.3307 49.9495 22.8438 47.3605 24.6843L47.3444 20.1394C47.3444 20.1394 46.2895 20.1292 45.5278 20.1453C30.456 20.4565 18.1116 35.0162 17.2427 52.8631H13.5869V56.8804H17.2368C17.701 67.8288 21.9577 77.3385 29.0832 83.1888L29.3067 83.3725L31.6117 80.2481L31.2402 79.9615C25.041 74.8698 21.3171 66.5353 20.8642 56.8804H34.7245C34.9157 60.2541 35.5182 63.5918 36.5186 66.8197L40.0688 65.2631C39.2549 62.5346 38.7553 59.7221 38.5796 56.8804H43.7363V80.3381H47.3621V29.8039C49.5346 27.7562 52.002 25.9929 54.7985 25.1519L60.2125 56.9093H62.7512L67.5514 25.3737C77.489 28.9431 84.4038 40.7968 84.4038 54.3388C84.4038 63.5126 79.6674 74.2383 73.3615 80.1565L75.6664 83.3703L75.8632 83.185C82.9206 76.5608 88.2504 64.5646 88.2504 54.3372C88.2526 37.9504 79.0703 23.8712 66.4198 20.8652ZM43.7363 52.8631H38.5309C38.7544 45.5109 40.6101 39.072 43.7363 34.2042V52.8631ZM43.7363 27.8574C38.2945 33.6348 34.955 42.4632 34.666 52.8631H20.877C21.6896 38.0436 31.4134 24.9757 43.7363 23.8878V27.8574Z"
                                fill="#121011" />
                            <path
                                d="M11.855 27.8602C8.95612 25.4081 5.45901 27.3482 5.31214 27.4317L5.15615 27.5206L5.09397 27.6894C5.03554 27.8501 3.69706 31.6118 6.60077 34.0661C7.60263 34.9124 8.79852 35.1722 9.89204 35.1722C11.5688 35.1722 13.0011 34.5589 13.0981 34.5166L13.3254 34.4164L13.379 34.1743C13.4186 34.0035 14.3015 29.9278 11.855 27.8602ZM11.2203 28.6101C12.249 29.48 12.5363 30.8716 12.5733 32.0173C11.7516 30.5598 10.1713 28.6669 7.26975 27.7547C8.36112 27.5099 9.88775 27.4842 11.2203 28.6101ZM12.1997 33.4759C10.8333 33.2 7.88833 32.1903 6.32739 28.5121C10.2137 29.442 11.7012 32.1737 12.1997 33.4759ZM7.23544 33.3152C5.88623 32.1748 5.66217 30.6648 5.72864 29.5491C7.12823 32.3033 9.30025 33.5471 10.8837 34.1058C9.75481 34.2761 8.31824 34.2316 7.23544 33.3173V33.3152Z"
                                fill="#121011" />
                            <path
                                d="M99.9125 27.6865L99.8503 27.5178L99.6943 27.4294C99.5475 27.3442 96.053 25.4015 93.1515 27.8579C90.705 29.9255 91.5878 34.0006 91.6264 34.1736L91.68 34.4157L91.9073 34.5153C92.0043 34.5582 93.435 35.1715 95.1134 35.1715C96.2063 35.1715 97.4028 34.9112 98.4046 34.0649C101.31 31.609 99.9699 27.8456 99.9125 27.6865ZM93.7861 28.6067C95.1359 27.4663 96.663 27.4953 97.7528 27.746C94.8378 28.6565 93.2501 30.5575 92.4305 32.0187C92.4653 30.873 92.7526 29.4803 93.7861 28.6067ZM98.6785 28.5087C97.1181 32.1842 94.1731 33.1966 92.8068 33.4725C93.3053 32.1735 94.7928 29.437 98.6785 28.5087ZM97.7721 33.3139C96.6898 34.2272 95.2527 34.2716 94.127 34.104C95.7105 33.5448 97.8793 32.301 99.2805 29.5473C99.3443 30.6625 99.1202 32.1735 97.7721 33.3139Z"
                                fill="#121011" />
                            <path
                                d="M13.3854 73.4327L13.3318 73.1863L13.1007 73.0851C12.9399 73.0144 9.08046 71.3619 6.50749 73.5425C3.55928 76.0338 4.9176 79.8539 4.9771 80.0157L5.04035 80.1871L5.20116 80.2771C5.29336 80.3306 6.67419 81.0982 8.40988 81.0982C9.66632 81.1091 10.884 80.6639 11.8368 79.8454C14.3202 77.744 13.4245 73.6079 13.3854 73.4327ZM7.14859 74.3042C8.24532 73.3754 9.70388 73.3309 10.8505 73.5007C9.2461 74.0664 7.0446 75.3219 5.62624 78.1072C5.56513 76.9759 5.79724 75.4462 7.14859 74.3042ZM12.1873 74.1435C11.6813 75.4638 10.1718 78.2395 6.22607 79.1817C7.81006 75.4494 10.8006 74.4226 12.1873 74.143V74.1435ZM11.1919 79.0821C9.8218 80.239 8.27212 80.2101 7.16628 79.9562C10.1252 79.0312 11.7338 77.1029 12.569 75.6176C12.5325 76.782 12.2415 78.1951 11.1919 79.0815V79.0821Z"
                                fill="#121011" />
                            <path
                                d="M98.3853 73.5463C95.8456 71.401 92.0483 73.0251 91.888 73.0958L91.6613 73.1959L91.6077 73.4381C91.5696 73.6105 90.6862 77.6862 93.1327 79.7532C94.0725 80.5621 95.2747 81.0017 96.5151 80.99C98.2245 80.99 99.5855 80.2332 99.6777 80.1812L99.8342 80.0923L99.8959 79.9235C99.9511 79.7639 101.289 76.0005 98.3853 73.5463ZM97.7506 74.2961C99.0998 75.4365 99.3239 76.9465 99.2574 78.0617C97.8584 75.3085 95.6864 74.0648 94.1034 73.5055C95.2323 73.3379 96.6684 73.3818 97.7506 74.2961ZM98.6587 79.1013C94.7724 78.1731 93.2849 75.4387 92.7864 74.1376C94.1528 74.4129 97.0977 75.4253 98.6587 79.1013ZM93.7657 79.0033C92.7376 78.1335 92.4498 76.7424 92.4128 75.5961C93.2345 77.0541 94.8148 78.9465 97.7163 79.8587C96.6233 80.1041 95.0983 80.1292 93.7657 79.0033Z"
                                fill="#121011" />
                            <path
                                d="M16.2574 20.2878C15.7439 19.7486 15.3782 19.1825 15.1602 18.5893C14.9422 17.9962 14.8707 17.4263 14.9458 16.8796C15.0185 16.3401 15.1866 15.8177 15.4421 15.3369C15.7045 14.8479 16.0445 14.4045 16.4488 14.0241C17.0406 13.4503 17.7537 13.0165 18.5356 12.7546L19.9545 14.2448C19.2598 14.2887 18.6199 14.5887 18.0349 15.1447C17.5118 15.6414 17.2116 16.2157 17.1344 16.8678C17.0572 17.5198 17.3049 18.1469 17.8773 18.749C18.3909 19.2885 18.9605 19.5231 19.5862 19.4528C20.212 19.3824 20.7837 19.1016 21.3016 18.6102C21.9548 17.9896 22.2957 17.3358 22.3243 16.6487L23.7834 18.1823C23.2572 19.4812 22.277 20.5452 21.025 21.1765C20.5406 21.4143 20.019 21.5671 19.4828 21.628C18.9467 21.6894 18.3968 21.6093 17.8329 21.3875C17.2689 21.1658 16.7438 20.7992 16.2574 20.2878Z"
                                fill="#121011" />
                            <path
                                d="M25.0908 7.77851L26.923 6.60547L31.3646 13.5334L29.5346 14.7064L27.8407 12.0641L25.2677 13.7123L26.9616 16.3551L25.1294 17.5282L20.6835 10.6003L22.5157 9.42721L24.2166 12.0797L26.7895 10.431L25.0908 7.77851Z"
                                fill="#121011" />
                            <path
                                d="M33.2332 11.4717C32.2233 10.9718 31.5036 10.1544 31.0741 9.01957C30.6445 7.88473 30.6445 6.7956 31.0741 5.75218C31.5029 4.7109 32.3734 3.94315 33.6856 3.44894C34.9978 2.95472 36.1593 2.95615 37.1699 3.45322C38.179 3.95315 38.8986 4.77053 39.3285 5.90537C39.7584 7.04021 39.7584 8.12934 39.3285 9.17276C38.8997 10.214 38.029 10.9818 36.7164 11.476C35.4038 11.9702 34.2427 11.9688 33.2332 11.4717ZM37.2905 8.44483C37.4963 7.91491 37.4784 7.33106 37.2369 6.6933C36.9953 6.05553 36.6222 5.60577 36.1176 5.34402C35.612 5.08263 35.0364 5.07371 34.391 5.31724C33.7457 5.56078 33.3202 5.94804 33.1147 6.47904C32.9085 7.00861 32.9264 7.59245 33.1683 8.23057C33.4103 8.8687 33.7835 9.31845 34.2881 9.57985C34.7931 9.84124 35.3684 9.85016 36.0142 9.60663C36.6599 9.36309 37.0853 8.97582 37.2905 8.44483Z"
                                fill="#121011" />
                            <path
                                d="M41.0727 5.64996C40.9495 4.91578 40.9632 4.24195 41.114 3.62846C41.2648 3.01498 41.5244 2.50255 41.8929 2.09118C42.2551 1.68466 42.6867 1.34568 43.1676 1.09008C43.6589 0.831255 44.1889 0.653625 44.7371 0.564082C45.5489 0.419182 46.3829 0.45817 47.1777 0.678172L47.5191 2.70663C46.9195 2.35418 46.2212 2.24509 45.4243 2.37936C44.7132 2.49898 44.143 2.8068 43.7138 3.3028C43.2846 3.7988 43.139 4.45763 43.2769 5.2793C43.4002 6.01383 43.741 6.52662 44.2992 6.81765C44.8573 7.10868 45.4883 7.19527 46.1919 7.07743C47.0806 6.92817 47.7291 6.57679 48.1372 6.0233L48.4888 8.11228C47.8062 8.5818 47.0267 8.89207 46.208 9.02019C45.6523 9.11715 45.085 9.12817 44.5259 9.05286C43.9912 8.97919 43.4732 8.81432 42.9944 8.56543C42.5152 8.31547 42.1043 7.94159 41.7616 7.44381C41.4188 6.94602 41.1892 6.34807 41.0727 5.64996Z"
                                fill="#121011" />
                            <path
                                d="M50.6716 7.25728C49.9254 6.41419 49.5681 5.38558 49.5995 4.17147C49.631 2.95736 50.0419 1.94947 50.8324 1.1478C51.6261 0.34613 52.7246 -0.0356014 54.1279 0.00260736C55.5313 0.0408162 56.6059 0.481467 57.3517 1.32456C58.0971 2.16837 58.4534 3.19715 58.4205 4.4109C58.3877 5.62466 57.9767 6.63255 57.1876 7.43458C56.3972 8.23589 55.3003 8.61762 53.8969 8.57977C52.4936 8.54192 51.4185 8.10109 50.6716 7.25728ZM55.5715 5.99103C55.9628 5.57859 56.1679 5.03171 56.1869 4.35038C56.2058 3.66905 56.0307 3.11163 55.6615 2.67812C55.2928 2.24461 54.7635 2.01857 54.0738 2C53.3841 1.98143 52.8434 2.17783 52.4518 2.5892C52.0587 3.00164 51.8535 3.54871 51.8364 4.23039C51.8192 4.91208 51.9942 5.4695 52.3612 5.90265C52.73 6.33616 53.2592 6.5622 53.9489 6.58077C54.6386 6.59934 55.1795 6.40276 55.5715 5.99103Z"
                                fill="#121011" />
                            <path
                                d="M61.4078 0.8125L63.5338 1.27583L62.1937 7.41959L65.8709 8.22304L65.4576 10.1176L59.6539 8.85242L61.4078 0.8125Z"
                                fill="#121011" />
                            <path
                                d="M67.9459 11.0041L65.8832 10.1444L72.0375 3.79443L74.2084 4.69913L74.0256 13.5371L71.9624 12.6801L72.0262 11.3062L68.8797 9.99176L67.9459 11.0041ZM71.8499 6.7474L70.1538 8.61303L72.1082 9.4272L72.2412 6.9097C72.2574 6.6226 72.2995 6.33755 72.3671 6.05804C72.2157 6.30284 72.0426 6.53355 71.8499 6.7474Z"
                                fill="#121011" />
                            <path
                                d="M77.8401 6.3667L83.6411 9.95547L82.6194 11.6052L80.6489 10.3861L77.3367 15.7296L75.4869 14.5855L78.7991 9.23879L76.8157 8.01378L77.8401 6.3667Z"
                                fill="#121011" />
                            <path
                                d="M85.6732 11.5103L90.1351 15.4108L88.8958 16.8265L86.072 14.3577L85.2433 15.3042L87.8018 17.5405L86.5689 18.947L84.0104 16.7108L83.1275 17.7194L86.0044 20.2369L84.7656 21.6525L80.2506 17.7054L85.6732 11.5103Z"
                                fill="#121011" />
                            <path
                                d="M16.9377 87.7953C17.4362 87.2426 17.9722 86.8346 18.5458 86.5714C19.1194 86.3082 19.6825 86.1931 20.2354 86.2259C20.7791 86.2565 21.3131 86.3835 21.8124 86.6009C22.3207 86.8254 22.7892 87.1307 23.1997 87.505C23.8176 88.0507 24.3052 88.728 24.6266 89.4869L23.2484 91.0145C23.1512 90.3264 22.8028 89.712 22.2032 89.1714C21.6671 88.689 21.0709 88.4342 20.4144 88.407C19.7579 88.3799 19.1515 88.6749 18.5951 89.2919C18.0948 89.8454 17.9045 90.4309 18.0242 91.0483C18.1439 91.6657 18.4681 92.2135 18.9966 92.6916C19.6666 93.2947 20.3456 93.5842 21.0335 93.5599L19.6157 95.1314C18.8238 94.8884 18.0964 94.4711 17.4871 93.9102C17.0651 93.5356 16.7035 93.0982 16.415 92.6134C16.1406 92.1498 15.9478 91.6425 15.8452 91.1136C15.7427 90.5841 15.7806 90.0306 15.9589 89.4531C16.1372 88.8757 16.4635 88.3231 16.9377 87.7953Z"
                                fill="#121011" />
                            <path
                                d="M30.3177 92.7542L32.1713 93.893L27.8611 100.901L26.0069 99.763L27.6509 97.0891L25.0452 95.4892L23.4012 98.1641L21.5476 97.0248L25.8579 90.0144L27.712 91.1532L26.0616 93.8367L28.6673 95.4367L30.3177 92.7542Z"
                                fill="#121011" />
                            <path
                                d="M31.779 101.576C31.3369 100.54 31.323 99.4508 31.7372 98.3081C32.1513 97.1655 32.86 96.3386 33.8631 95.8276C34.8662 95.3155 36.0276 95.2977 37.3473 95.7741C38.6671 96.2504 39.547 97.0085 39.9873 98.0484C40.4297 99.0839 40.4437 100.173 40.0291 101.316C39.6146 102.458 38.9059 103.285 37.9032 103.796C36.8997 104.308 35.7383 104.326 34.419 103.85C33.0996 103.373 32.2196 102.615 31.779 101.576ZM36.8284 101.917C37.3287 101.649 37.6959 101.194 37.93 100.552C38.1641 99.9111 38.1737 99.3271 37.9589 98.8004C37.7445 98.2726 37.3136 97.8914 36.666 97.6568C36.0185 97.4222 35.4431 97.4388 34.94 97.7066C34.4379 97.9748 34.0707 98.4296 33.8384 99.0709C33.6061 99.7122 33.5965 100.296 33.8095 100.823C34.0239 101.35 34.4549 101.732 35.1024 101.967C35.7499 102.202 36.3253 102.185 36.8284 101.917Z"
                                fill="#121011" />
                            <path
                                d="M41.5214 101.724C41.6368 100.989 41.8634 100.354 42.2011 99.8203C42.5388 99.2864 42.9473 98.8824 43.4265 98.6081C43.8988 98.3369 44.4158 98.1521 44.9531 98.0623C45.5013 97.973 46.0603 97.973 46.6084 98.0623C47.4236 98.181 48.2018 98.481 48.8855 98.9402L48.5671 100.972C48.1093 100.448 47.4814 100.124 46.6834 99.9992C45.9687 99.8874 45.3301 99.9995 44.7676 100.336C44.2052 100.672 43.8585 101.25 43.7277 102.07C43.612 102.806 43.7728 103.4 44.2102 103.853C44.6476 104.306 45.2193 104.588 45.9255 104.698C46.8164 104.838 47.5429 104.709 48.105 104.314L47.777 106.403C46.4256 106.778 44.9839 106.649 43.7202 106.041C43.2364 105.802 42.7974 105.482 42.4225 105.094C42.0469 104.706 41.7757 104.222 41.6088 103.64C41.4419 103.059 41.4128 102.42 41.5214 101.724Z"
                                fill="#121011" />
                            <path
                                d="M51.1299 105.877C50.3334 105.081 49.9142 104.076 49.8724 102.863C49.8306 101.649 50.1795 100.618 50.9193 99.7688C51.659 98.9196 52.7311 98.4711 54.1355 98.4233C55.5399 98.3754 56.6395 98.7491 57.4342 99.5444C58.2308 100.34 58.65 101.345 58.6918 102.559C58.7336 103.773 58.3846 104.804 57.6449 105.653C56.9052 106.502 55.834 106.95 54.4314 106.998C53.0287 107.046 51.9283 106.673 51.1299 105.877ZM55.9425 104.312C56.308 103.876 56.479 103.317 56.4554 102.636C56.4319 101.955 56.2228 101.409 55.8283 100.999C55.4352 100.589 54.8931 100.396 54.2019 100.42C53.5108 100.444 52.9832 100.674 52.619 101.109C52.2535 101.545 52.0825 102.104 52.106 102.785C52.1296 103.467 52.3387 104.012 52.7332 104.422C53.1263 104.832 53.6684 105.025 54.3595 105.001C55.0507 104.978 55.5783 104.747 55.9425 104.309V104.312Z"
                                fill="#121011" />
                            <path
                                d="M59.6931 98.141L61.819 97.6755L63.165 103.818L66.8416 103.015L67.2571 104.909L61.4545 106.179L59.6931 98.141Z"
                                fill="#121011" />
                            <path
                                d="M70.9289 103.663L68.8614 104.511L68.728 95.6734L70.9043 94.781L77.0226 101.164L74.9551 102.012L74.0288 100.994L70.8727 102.289L70.9289 103.663ZM70.6829 97.8947L70.8014 100.412L72.76 99.6087L71.0774 97.7356C70.8862 97.5208 70.7145 97.2893 70.5644 97.0441C70.6295 97.324 70.6692 97.6092 70.6829 97.8963V97.8947Z"
                                fill="#121011" />
                            <path
                                d="M73.2242 93.8062L79.052 90.2629L80.0609 91.9197L78.0813 93.1232L81.3511 98.4952L79.4921 99.6253L76.2234 94.254L74.2336 95.4634L73.2242 93.8062Z"
                                fill="#121011" />
                            <path
                                d="M79.8486 89.6298L84.3513 85.7732L85.5762 87.2007L82.7282 89.641L83.5473 90.5961L86.1278 88.385L87.3451 89.8033L84.7646 92.0144L85.6378 93.0321L88.5394 90.5457L89.7648 91.9732L85.2085 95.8753L79.8486 89.6298Z"
                                fill="#121011" />
                            <path
                                d="M8.23404 61.3085V63.5415L-0.00109863 60.3095V57.9586L8.23297 54.7266V56.9596L6.93897 57.4299V60.8382L8.23404 61.3085ZM2.79969 59.3459L5.17595 60.1917V58.0764L2.79969 58.9227C2.52813 59.0178 2.24865 59.0886 1.96455 59.1343C2.24875 59.1795 2.52828 59.2503 2.79969 59.3459Z"
                                fill="#121011" />
                            <path
                                d="M-0.00109863 46.2876V44.2302H8.23404V46.4049H3.85837L6.56375 48.1677V49.4136L3.84658 51.1769H8.23404V53.3516H-0.00109863V51.2958L3.85837 48.7928L-0.00109863 46.2876Z"
                                fill="#121011" />
                            <path
                                d="M96.7665 46.4301V44.197L105.001 47.4296V49.78L96.7665 53.0125V50.7789L98.0605 50.3092V46.9004L96.7665 46.4301ZM102.201 48.3932L99.8251 47.5464V49.6621L102.201 48.8158C102.472 48.7196 102.752 48.6479 103.036 48.6016C102.752 48.5569 102.472 48.4872 102.201 48.3932Z"
                                fill="#121011" />
                            <path
                                d="M105.001 61.4514V63.5083H96.7665V61.3341H101.142L98.4368 59.5708V58.3249L101.154 56.5621H96.7665V54.3875H105.001V56.4443L101.141 58.9479L105.001 61.4514Z"
                                fill="#121011" />
                            <path
                                d="M34.6489 83.1951C34.849 82.838 35.1349 82.6386 35.5065 82.5968C35.8782 82.555 36.2713 82.6493 36.6858 82.8796C37.1765 83.1528 37.5411 83.4874 37.7799 83.8834L37.2706 84.794C37.0841 84.3712 36.7562 84.0337 36.287 83.7816C35.9654 83.6077 35.7611 83.5993 35.6743 83.7564C35.632 83.8314 35.6432 83.9257 35.707 84.0387C35.7835 84.1681 35.8773 84.2865 35.9857 84.3906C36.1188 84.5263 36.2441 84.6693 36.361 84.8191C36.4859 84.976 36.5995 85.1416 36.7008 85.3146C36.8048 85.4977 36.859 85.7049 36.8582 85.9154C36.8573 86.126 36.8014 86.3327 36.696 86.515C36.2672 87.2802 35.5524 87.3838 34.5518 86.8256C34.004 86.5203 33.5863 86.1373 33.2986 85.6767L33.8228 84.7377C34.0685 85.241 34.4645 85.6557 34.956 85.9247C35.1565 86.0365 35.3102 86.0975 35.417 86.1079C35.4647 86.1151 35.5135 86.107 35.5563 86.0846C35.5991 86.0623 35.6337 86.0269 35.655 85.9836C35.709 85.8872 35.6888 85.7658 35.5944 85.6194C35.4831 85.4512 35.3576 85.2927 35.2192 85.1459C35.0596 84.9729 34.9093 84.7916 34.7689 84.6027C34.625 84.4075 34.5328 84.179 34.5009 83.9386C34.4655 83.6812 34.5176 83.4193 34.6489 83.1951Z"
                                fill="#121011" />
                            <path d="M38.8654 84.0999L39.9064 84.5594L38.1674 88.4942L37.1265 88.0352L38.8654 84.0999Z"
                                fill="#121011" />
                            <path
                                d="M40.5356 89.4049L39.4512 89.0583L40.7613 84.9607L41.7862 85.288L42.639 88.1531C42.6784 87.9763 42.7429 87.7476 42.8326 87.4669L43.3686 85.7925L44.4519 86.1386L43.1424 90.2367L42.1169 89.9094L41.2625 87.0497C41.2232 87.2282 41.1592 87.4552 41.0706 87.7305L40.5356 89.4049Z"
                                fill="#121011" />
                            <path
                                d="M44.7441 88.4744C44.7985 88.1227 44.9248 87.7859 45.115 87.4851C45.2771 87.2269 45.5007 87.0129 45.7658 86.8621C46.0156 86.7245 46.2878 86.6321 46.5698 86.5895C46.8572 86.5468 47.1495 86.551 47.4355 86.6018C47.861 86.6712 48.2654 86.8351 48.6191 87.0812L48.4358 88.1407C48.2007 87.8632 47.8751 87.6884 47.4591 87.6163C47.116 87.5476 46.7596 87.6047 46.4551 87.777C46.1571 87.948 45.9709 88.2473 45.8966 88.6747C45.8301 89.059 45.9093 89.3711 46.1341 89.611C46.3588 89.851 46.6549 90.0029 47.0223 90.0668C47.4868 90.1475 47.8676 90.0867 48.1646 89.8842L47.9743 90.9731C47.2648 91.1577 46.5124 91.0785 45.8569 90.7503C45.6059 90.6214 45.3791 90.4502 45.1863 90.2441C44.9867 90.0272 44.8446 89.7636 44.7731 89.4776C44.6897 89.1494 44.6798 88.8069 44.7441 88.4744Z"
                                fill="#121011" />
                            <path
                                d="M49.4065 86.9692L52.5027 87.116L52.456 88.0978L50.4963 88.0052L50.4652 88.6619L52.2405 88.7459L52.1944 89.7219L50.4191 89.6378L50.3859 90.3373L52.3821 90.4321L52.3354 91.414L49.2028 91.2656L49.4065 86.9692Z"
                                fill="#121011" />
                            <path
                                d="M54.8393 87.5161C55.2366 87.1589 55.7372 86.9372 56.2689 86.883C56.721 86.8294 57.108 86.8907 57.43 87.0667C57.7519 87.2428 57.939 87.5486 57.9912 87.9843C58.0114 88.1457 57.9992 88.3096 57.9553 88.4663C57.9103 88.6223 57.8351 88.7679 57.7339 88.8949C57.6396 89.0159 57.5371 89.1304 57.4273 89.2377C57.3113 89.3482 57.1895 89.4525 57.0622 89.5499C56.6613 89.8617 56.434 90.0517 56.3804 90.1199C56.3541 90.1459 56.3384 90.1809 56.3364 90.2179L58.2597 89.9897L58.3734 90.933L55.1572 91.3143L55.0987 90.8199C55.0763 90.6458 55.0846 90.469 55.1234 90.2977C55.1531 90.1564 55.1991 90.0191 55.2606 89.8885C55.3328 89.7552 55.4248 89.6337 55.5335 89.528C55.6256 89.4296 55.7231 89.3365 55.8256 89.2489C55.8915 89.1954 56.0036 89.108 56.1628 88.9859L56.248 88.9206C56.278 88.8959 56.3434 88.8483 56.4442 88.7765C56.545 88.7047 56.6104 88.6554 56.6404 88.6292C56.6704 88.6029 56.7122 88.5622 56.7653 88.5065C56.8115 88.4624 56.8455 88.407 56.8639 88.3458C56.8764 88.2907 56.8792 88.2337 56.8719 88.1776C56.8678 88.1219 56.8486 88.0683 56.8164 88.0225C56.7842 87.9768 56.7403 87.9406 56.6892 87.9179C56.5614 87.8637 56.4208 87.847 56.2839 87.8696C55.8036 87.9271 55.3643 88.1546 54.9658 88.552L54.8393 87.5161Z"
                                fill="#121011" />
                            <path
                                d="M59.8496 90.1296C59.4383 89.8118 59.1552 89.343 59.0005 88.7231C58.8458 88.1031 58.8749 87.5564 59.0879 87.0829C59.3023 86.6101 59.7233 86.295 60.3508 86.1375C60.9783 85.9801 61.4981 86.0604 61.9101 86.3786C62.3214 86.696 62.6045 87.1649 62.7592 87.7852C62.9139 88.4054 62.8846 88.9521 62.6713 89.4253C62.4569 89.8988 62.0359 90.2139 61.4084 90.3707C60.7809 90.5274 60.2613 90.4471 59.8496 90.1296ZM61.1704 89.4167C61.6871 89.2874 61.8479 88.8354 61.6528 88.0605C61.4577 87.2856 61.1023 86.9626 60.5866 87.0915C60.0695 87.2208 59.9087 87.6728 60.1042 88.4477C60.2997 89.2226 60.6551 89.5447 61.1704 89.414V89.4167Z"
                                fill="#121011" />
                            <path
                                d="M64.6155 88.7948C64.1652 88.5363 63.8214 88.1101 63.5842 87.5162C63.3469 86.9224 63.3017 86.3768 63.4486 85.8793C63.5961 85.3815 63.9714 85.0125 64.5742 84.7722C65.1771 84.5318 65.7029 84.5411 66.1518 84.8C66.6021 85.0593 66.9458 85.4855 67.1831 86.0786C67.4204 86.6717 67.4654 87.2174 67.3182 87.7155C67.171 88.2154 66.7966 88.5847 66.1952 88.8232C65.5938 89.0617 65.0672 89.0523 64.6155 88.7948ZM65.8275 87.9099C66.3228 87.7121 66.4219 87.2424 66.125 86.5007C65.828 85.759 65.4321 85.4867 64.9371 85.6838C64.4422 85.8817 64.3432 86.3514 64.6402 87.0931C64.9371 87.8348 65.3329 88.1071 65.8275 87.9099Z"
                                fill="#121011" />
                            <path
                                d="M68.661 82.9039L69.6258 82.3613L70.8936 84.611L71.376 84.34L71.829 85.1434L71.3465 85.415L71.6789 86.0042L70.7408 86.5318L70.409 85.9426L68.5581 86.9812L68.1051 86.1777L68.661 82.9039ZM69.955 85.1381L69.3546 84.0722L69.0925 85.6255L69.955 85.1381Z"
                                fill="#121011" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1153_5364">
                                <rect width="105" height="107" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </NavLink>
            </div>
            <ul className="header__list">
                <li className="header__list-item">
                    <NavLink className="link" to="" style={({ isActive }) => ({ color: isActive ? '#198d9b' : '#232134' })}>О Нас</NavLink>
                </li>
                <li className="header__list-item">
                    <NavLink className="link" to="/main/catalog" style={({ isActive }) => ({ color: isActive ? '#198d9b' : '#232134' })}>Ассортимент</NavLink>
                </li>
                <li className="header__list-item">
                    <NavLink className="link" to="../main-page/index.html#news" style={({ isActive }) => ({ color: isActive ? '#198d9b' : '#232134' })}>Новинки</NavLink>
                </li>
                <li className="header__list-item">
                    <NavLink className="link" to="/" style={({ isActive }) => ({ color: isActive ? '#198d9b' : '#232134' })}>Отзывы</NavLink>
                </li>
                <li className="header__list-item">
                    <NavLink className="link" to="/sss" style={({ isActive }) => ({ color: isActive ? '#198d9b' : '#232134' })}>Контакты</NavLink>
                </li>
                <li className="header__list-item">
                    <NavLink className="link" to="main/delivery" style={({ isActive }) => ({ color: isActive ? '#198d9b' : '#232134' })}>Доставка и оплата</NavLink>
                </li>
            </ul>
            <div>
                <NavLink to="/main/basket" className="main-basket">
                    <img src={basketBlack} alt="корзина" />
                </NavLink>
                <div className="number-of-position">{ids.length}</div>
            </div>
        </div>
    )
}

export default Header;