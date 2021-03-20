import { useState } from "react";
import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransacionModalOpen, setIsNewTransacionModal] = useState(false);

  function handleOpenNewTransacionModal() {
    setIsNewTransacionModal(true);
  }

  function handleCloseNewTransacionModal() {
    setIsNewTransacionModal(false);
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransacionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransacionModalOpen}
        onRequestClose={handleCloseNewTransacionModal}
      />
    </div>
  );
}
