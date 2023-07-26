import React, { useState, useRef, Component } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./style-pro.scss";
import CarouselComp from "./CarouselComp";

export default function Project1({
  name,
  images,
  features,
  live,
  github,
  video,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const el = useRef()
  // Modal.setAppElement(el)
  // Function to open the dialog box
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the dialog box
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const dummyFunc = () => {};

  const modalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(8px)", // Apply the glass morphism effect here
    },
    content: {
      position: "absolute",
      height: "85%",
      width: "70%",
      margin: "auto",
      backgroundColor: "rgba(255, 255, 255, 0.5)", // Adjust the opacity of the modal content here
      borderRadius: "8px",
      padding: "20px",
      overflow: "hidden",
    },
  };

  return (
    <div
      className="pro-comp h-96 rounded-3xl cursor-pointer"
      onClick={!isModalOpen ? openModal : dummyFunc}
    >
      <div className="card h-96 ">
        <h1>AI Glasses</h1>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={modalStyles}
        // className="modal-content"
        // overlayClassName="modal-overlay"
      >
        <div className="grid-container">
          <div className="image">
            <CarouselComp images={images} />
          </div>
          <div className="content">
            <div className="flex justify-center items-center mt-7 mb-5">
              <p className="text-center font-extrabold text-5xl underline">
                {name}
              </p>
            </div>

            <div className="ml-12 leading-7">
              {features.map((item, index) => (
                <div key={index} className="flex">
                  <img
                    className="h-5"
                    src="src\assets\bullet-point.png"
                    alt="*"
                  />
                  <p className="font-bold whitespace-normal ml-2" key={index}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
                ml-8 mt-5"
              >
                GitHub
              </button>
            </a>
            {live && (
              <a href={live} target="_blank" rel="noopener noreferrer">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
                ml-8 mt-5"
                >
                  Live Demo
                </button>
              </a>
            )}
            <a href={video} target="_blank" rel="noopener noreferrer">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
                ml-8 mt-5"
              >
                Video
              </button>
            </a>
          </div>
        </div>

        <img
          className="h-8 absolute top-3 right-3 cursor-pointer"
          onClick={closeModal}
          src="src\assets\cross-icon.png"
          alt="cross-icon"
        />
      </Modal>
    </div>
  );
}