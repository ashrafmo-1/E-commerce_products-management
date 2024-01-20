import './btn.css'
function Btns(props) {
    return (
        <div className={'btn-1'}>
            <button className={'button'} onClick={props.click}> {props.content} <div> {props.icon} </div> </button>
        </div>
    );
}

export default Btns;