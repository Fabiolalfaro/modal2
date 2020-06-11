import React from 'react';
import Modal from 'react-modal';

const IntModal = ({nombre,correo, celular, desplegar, closeModal}) => {


    return(

              <Modal isOpen={desplegar} onRequestClose={closeModal} >
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div>
                        <label>NOMBRE:{nombre}</label>
                    </div>
                    <div>
                        <label>CORREO:{correo}</label>
                    </div>
                    <div>
                        <label>COMPAÑIA:{celular}</label>
                    </div>  
                </div>
              </Modal>

    )


}

export default IntModal;