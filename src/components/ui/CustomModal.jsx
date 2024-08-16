import React, { useState } from 'react'
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    // overlay: {
    //     backgroundColor: `rgba(0, 0, 0, ${(pathname?.includes('tippingarena') && isIos) ? 0.9 : 0.5})`,
    //     backdropFilter: `blur(${blurValue}px)`,
    //     zIndex: 102
    // },
};

const CustomModal = ({ isOpen, closeModal, children }) => {
    Modal.setAppElement('body');

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            overlayClassName="custom-modal--overlay"
            style={{
                overlay: {
                    backgroundColor: `rgba(0, 0, 0, 0.5})`,
                    backdropFilter: `blur(2px)`,
                    zIndex: 102
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                }
            }}
        >
            {children}
        </Modal>
    )
}

export default CustomModal