import React, { useContext, useState } from 'react';
import {  Modal } from 'antd';
import { GlobalContext } from '../../context';
const Popup = () => {

  const {showPopup,setShowPopup}=useContext(GlobalContext)
  return (
    <>

      <Modal
        title="Item Already Added"
        centered
        open={showPopup}
        onOk={() => setShowPopup(false)}
        onCancel={() => setShowPopup(false)}
        className='w-screen h-screen flex items-center justify-center'
      >
        <p>This item is already present in cart you can increase it's quantity in cart</p>
      
      </Modal>

    </>
  );
};
export default Popup;