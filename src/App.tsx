import React, { useState } from "react";
import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";

import Modal from "react-modal";

import { TransactionsProvider } from "./hooks/useTransactions";

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
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransacionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransacionModalOpen}
        onRequestClose={handleCloseNewTransacionModal}
      />
    </TransactionsProvider>
  );
}
