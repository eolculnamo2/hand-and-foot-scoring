import * as React from "react";

interface PasswordRecoveryProps {
  isOpen: boolean;
}

const PasswordRecovery = ({ isOpen }: PasswordRecoveryProps) => {
  const modalRef = React.useRef<Nullable<HTMLDivElement>>(null);
  React.useEffect(() => {
    if (modalRef.current) {
      window.M.Modal.init(modalRef.current);
      const modalInstance = window.M.Modal.getInstance(modalRef.current);
      modalInstance.open();
    }
  }, [isOpen]);

  return (
    <div ref={modalRef} className="modal">
      <div className="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">
          Agree
        </a>
      </div>
    </div>
  );
};

export default PasswordRecovery;
