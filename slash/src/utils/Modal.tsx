import React, { useEffect, useRef, ReactNode } from 'react';
import PropTypes from 'prop-types';
import Transition from './Transition';

interface ModalProps {
  children: ReactNode;
  id?: string;
  ariaLabel?: string;
  show: boolean;
  handleClose: () => void;
}

function Modal({ children, id, ariaLabel, show, handleClose }: ModalProps) {
  const modalContent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }) => {
      if (show && modalContent.current && !modalContent.current.contains(target as Node)) {
        handleClose();
      }
    };

    const keyHandler = ({ keyCode }: { keyCode: number }) => {
      if (show && keyCode === 27) {
        handleClose();
      }
    };

    document.addEventListener('click', clickHandler);
    document.addEventListener('keydown', keyHandler);

    return () => {
      document.removeEventListener('click', clickHandler);
      document.removeEventListener('keydown', keyHandler);
    };
  }, [show, handleClose]);

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 z-50 bg-white bg-opacity-75 transition-opacity blur"
        show={show}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />

      {/* Modal dialog */}
      <Transition
        id={id}
        className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabel}
        show={show}
        enter="transition ease-out duration-200"
        enterStart="opacity-0 scale-95"
        enterEnd="opacity-100 scale-100"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100 scale-100"
        leaveEnd="opacity-0 scale-95"
      >
        <div className="bg-white overflow-auto max-w-6xl w-full max-h-full" ref={modalContent}>
          {children}
        </div>
      </Transition>
    </>
  );
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
  id: PropTypes.string,
  ariaLabel: PropTypes.string,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
