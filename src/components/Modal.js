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
}) => {
    return (
        <div
            className={classNames({
                modal: true,
                modal_closed: isClosed,
            })}
        >
            <div className="modal__container">
                <h3 className="modal__title">{title}</h3>
                <div className="modal__contant">{children}</div>
                <div className="modal__btn-wrapper">
                    <button className="modal__btn" onClick={btnHandler}>
                        {buttonName}
                    </button>
                </div>
                <button className="modal__close" onClick={closeBtnHandler}>
                    x
                </button>
            </div>
        </div>
    )
}

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string,
    isClosed: PropTypes.bool,
    buttonName: PropTypes.string,
    btnHandler: PropTypes.func.isRequired,
    closeBtnHandler: PropTypes.func.isRequired,
}

Modal.defaultProps = {
    isClosed: true,
    buttonName: 'Book',
}

export default Modal
