import React, { useState } from "react";
import Modal from "react-modal";
import "../style-pro.scss";

export default function Project1() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the dialog box
  const openModal = () => {
    setIsModalOpen(true);
    console.log("clicked");
  };

  // Function to close the dialog box
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="pro-comp h-96 rounded-3xl cursor-pointer" onClick={!isModalOpen && openModal}>
      <div className="card h-96 ">
        <h1>AI Glasses</h1>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Hello, this is a dialog box!</h2>
        <img className="h-8 absolute top-3 right-3 cursor-pointer" onClick={closeModal} src="src\assets\cross-icon.png" alt="cross-icon" />
      </Modal>
    </div>
  );
}
