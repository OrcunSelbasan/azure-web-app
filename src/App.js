import "./App.css";
import TopDrawer from "./components/elements/Drawers";
import CustomDataTable from "./components/elements/Tables";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <TopDrawer />
      <CustomDataTable />
      <header className="App-header">
        <p>
          Assignment 2 by <code style={{ color: "orange" }}>Team5</code>
        </p>
      </header>
    </div>
  );
}

export default App;
