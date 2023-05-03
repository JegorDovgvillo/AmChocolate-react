
import arrowNext from '../../images/arrowNext.png'
import arrowBack from '../../images/arrowBack.png'
import { useDispatch, useSelector } from 'react-redux';
import { setDisabled, setPosition } from './buttonsSliice';

const Buttons = (props) => {
    const dispatch = useDispatch()
    const position = useSelector(state => state.buttons.position)
    const disabled = useSelector(state => state.buttons.disabled)

    const slider = (e) => {
        switch (e.target.className) {
            case "scroll-buttons__second":
                dispatch(setDisabled(!disabled))
                dispatch(setPosition(position + 415))
                break;
            case "scroll-buttons__first":
                dispatch(setDisabled(!disabled))
                dispatch(setPosition(position + 415))
                break;
            case "arrow-back":
            case "scroll-buttons__arrow-back":
                dispatch(setDisabled(!disabled))
                dispatch(setPosition(position - 415))
                break;
            case "arrow-next":
            case "scroll-buttons__arrow-next":
                dispatch(setDisabled(!disabled))
                dispatch(setPosition(position + 415))
                break;
            default:
                break;
        }
    } 


    return (
        <div className="scroll-buttons" >
            <button
                className="scroll-buttons__arrow-back"
                onClick={(e) => slider(e)}
                disabled={disabled}>
                <img className="arrow-back" src={arrowBack} />
            </button>
            <span className="scroll-buttons__position-first">1</span>
            <span className="scroll-buttons__position-separator">/</span>
            <span className="scroll-buttons__position-second">4</span>
            <input
                disabled={disabled}
                type="button"
                className={"scroll-buttons__first"}
                value="1"
                onClick={(e) => slider(e)} />
            <input
                disabled={!disabled}
                type="button"
                className="scroll-buttons__second"
                value="2"
                onClick={(e) => slider(e)} />
            <button
                className="scroll-buttons__arrow-next"
                onClick={(e) => slider(e)}
                disabled={!disabled}>
                <img className="arrow-next" src={arrowNext} />
            </button>
        </div>
    )
}

export default Buttons;