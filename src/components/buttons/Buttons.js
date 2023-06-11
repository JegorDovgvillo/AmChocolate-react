
import arrowNext from '../../images/arrowNext.png'
import arrowBack from '../../images/arrowBack.png'
import './buttons.css'


const Buttons = ({ perPage, totalVacancies, nextPageOnButton, currentPage, nextPageOnArrow, disabled }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalVacancies / perPage); i++) {
        pageNumbers.push(i)
    }
    // const slider = (e) => {
    //     switch (e.target.className) {
    //         case "scroll-buttons__second":
    //             dispatch(setDisabled(!disabled))
    //             dispatch(setPosition(position + 415))
    //             break;
    //         case "scroll-buttons__first":
    //             dispatch(setDisabled(!disabled))
    //             dispatch(setPosition(position + 415))
    //             break;
    //         case "arrow-back":
    //         case "scroll-buttons__arrow-back":
    //             dispatch(setDisabled(!disabled))
    //             dispatch(setPosition(position - 415))
    //             break;
    //         case "arrow-next":
    //         case "scroll-buttons__arrow-next":
    //             dispatch(setDisabled(!disabled))
    //             dispatch(setPosition(position + 415))
    //             break;
    //         default:
    //             break;
    //     }
    // } 


    return (
        <div className="buttons" >
            <button
                className="buttons__arrow-back"
                disabled={(currentPage === pageNumbers[0]) ? disabled : null}
                onClick={(e) => nextPageOnArrow(e)}
            >
                <img className="arrow-back" src={arrowBack} />
            </button>
            {/* <span className="scroll-buttons__position-first">1</span>
            <span className="scroll-buttons__position-separator">/</span>
            <span className="scroll-buttons__position-second">4</span> */}
            {
                pageNumbers.map(number => (
                    <button className={(currentPage === number) ? 'button-item active' : 'button-item'} type='button'
                        key={number}
                        onClick={() => nextPageOnButton(number)}>
                        <p>{number}</p>
                    </button>
                ))
            }
            <button
                className="buttons__arrow-next"
                onClick={(e) => nextPageOnArrow(e)}
                disabled={(currentPage === pageNumbers[pageNumbers.length - 1]) ? disabled : null}
            >
                <img className="arrow-next" src={arrowNext} />
            </button>
        </div>
    )
}

export default Buttons;