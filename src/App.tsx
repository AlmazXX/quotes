import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Add from "./containers/Quotes/Add";
import Edit from "./containers/Quotes/Edit";
import Quotes from "./containers/Quotes/Quotes";

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container">
        <Routes>
          <Route path="/"element={<Quotes/>} />
          <Route path="/quotes"element={<Quotes/>} />
          <Route path="/quotes/:id"element={<Quotes/>} />
          <Route path="/quotes/:id/edit"element={<Edit/>} />
          <Route path="/quotes/add"element={<Add/>} />
          <Route path="*"element={<div className="row mt-3"><h4>Not found!</h4></div>} />
        </Routes>
      </main>
    </>
  );
}

export default App;