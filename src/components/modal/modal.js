import React from "react";

const Modal = props => {
  return (
    <>
      <div class="container">
        <p>
          <a href="#modal" class="btn go">
            Instructions
          </a>
        </p>
      </div>

      <div id="modal">
        <div class="modal-content">
          <div class="header">
            <h2>Modal Heading</h2>
          </div>
          <div class="copy">
            <p>
              This will eventually contain instructions about how to play the
              game. For not it is just meing set up to make sure everything is
              working properly and that it looks good.
            </p>
          </div>
          <div class="cf footer">
            <a href="close" class="btn">
              Close
            </a>
          </div>
        </div>
        <div class="overlay" />
      </div>
    </>
  );
};

export default Modal;
