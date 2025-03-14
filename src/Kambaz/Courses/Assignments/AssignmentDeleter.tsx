import { Modal, Button } from "react-bootstrap";

export default function AssignmentDeleter({ show, handleClose, dialogTitle, deleteAssignment}: {
 show: boolean; handleClose: () => void; dialogTitle: string;
 deleteAssignment: () => void; }) {
 return (
  <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
    <Modal.Title>{dialogTitle}</Modal.Title>
   </Modal.Header>
   <Modal.Body>
    <Button variant="secondary" onClick={handleClose}> Cancel </Button>
    <Button variant="primary"
     onClick={() => {
      deleteAssignment();
      handleClose();
     }} > Yes </Button>
   </Modal.Body>
  </Modal>
);}
