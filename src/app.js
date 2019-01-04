import React from "react";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Content from "./components/content/content.js";
import Modal from "./components/modal/modal.js";

const App = () => {
  return (
    <>
      <Header />
      <Modal />
      <Content />
      <Footer>
        <div>&copy; 2018 Code Fellows</div>
      </Footer>
    </>
  );
};

export default App;

