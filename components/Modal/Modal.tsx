'use client';

import { useRouter } from 'next/navigation';
import css from './Modal.module.css';

//===========================================================================

interface ModalProps {
  children: React.ReactNode;
}

//===========================================================================

function Modal({ children }: ModalProps) {
  const router = useRouter();
  const close = () => router.back();

  return (
    <div className={css.backdrop} onClick={close}>
      <div className={css.dialog} onClick={e => e.stopPropagation()}>
        {children}
        <button className={css.close} onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
