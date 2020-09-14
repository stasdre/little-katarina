import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Modal = ({
    children,
    isClosed,
    title,
    buttonName,
    btnHandler,
    closeBtnHandler,
    hideBtn,
    hideTitle,
}) => {
    return (
        <div
            className={classNames({
                modal: true,
                modal_closed: isClosed,
            })}
        >
            <div className="modal__container">
                {!hideTitle ? <h3 className="modal__title">{title}</h3> : null}
                <div className="modal__contant">{children}</div>
                {!hideBtn ? (
                    <div className="modal__btn-wrapper">
                        <button className="modal__btn" onClick={btnHandler}>
                            {buttonName}
                        </button>
                    </div>
                ) : null}
                <button className="modal__close" onClick={closeBtnHandler}>
                    x
                </button>
            </div>
        </div>
    )
}

Modal.propTypes = {
    children: PropTypes.any.isRequired,
    title: PropTypes.string,
    isClosed: PropTypes.bool,
    buttonName: PropTypes.string,
    btnHandler: PropTypes.func.isRequired,
    closeBtnHandler: PropTypes.func.isRequired,
    hideBtn: PropTypes.bool,
    hideTitle: PropTypes.bool,
}

Modal.defaultProps = {
    isClosed: true,
    buttonName: 'Book',
    hideTitle: false,
    hideBtn: false,
}

export default Modal
