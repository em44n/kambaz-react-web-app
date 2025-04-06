import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import { useState } from "react";
import AssignmentDeleter from "./AssignmentDeleter";
import * as assignmentsClient from "./client";

export default function AssignmentControlButtons({ assignmentId }: { assignmentId: string }) {
  const dispatch = useDispatch();
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     const removeAssignment = async (assignmentId: string) => {
      await assignmentsClient.deleteAssignment(assignmentId);
      dispatch(deleteAssignment(assignmentId));
    };

  const handleDelete = () => {
    removeAssignment(assignmentId);
  };

  return (
    <div className="float-end">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4 ms-4" />
      <FaTrash className="text-danger ms-4" onClick={handleShow} />
      <AssignmentDeleter show={show} handleClose={handleClose} dialogTitle="Are you sure you want to delete this assignment?"
            deleteAssignment={handleDelete}/>
    </div>
  );
}
