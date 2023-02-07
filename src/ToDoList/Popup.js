import React from 'react'





function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className="popup-inner">
                <div className="close-btn">
                    <button onClick={() => { props.trigger(false) }}>
                        Save!
                </button>
                </div>
                {props.children}
            </div>
        </div>
    ) : "";
}



export default Popup