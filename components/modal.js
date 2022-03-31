import { useState } from 'react'

const styles = {
  modalBody: `absolute border h-screen w-screen top-0 left-0 bg-gray-100 flex items-center justify-center`,
  modalContainer: `bg-white p-10 rounded-lg border`,
}

const Modal = ({ showModalValue = true }) => {
  const [showModal, setShowModal] = useState(showModalValue)

  if (showModal) {
    return (
      <div className={styles.modalBody}>
        <div className={styles.modalContainer}>
          <div className='cursor-pointer' onClick={() => setShowModal(false)}>
            <small>Close &times;</small>
          </div>
          <div>Modal container</div>
        </div>
      </div>
    )
  }

  return <div></div>
}

export default Modal
