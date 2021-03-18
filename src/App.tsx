import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Dashboard />
    </div>
  );
}
