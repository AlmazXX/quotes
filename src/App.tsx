import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import Add from "./containers/Quotes/Add";

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container">
        <Routes>
          <Route path="/"element={<Home/>} />
          <Route path="/quotes"element={<Home/>} />
          <Route path="/quotes/add"element={<Add/>} />
          <Route path="*"element={<div className="row mt-3"><h4>Not found!</h4></div>} />
        </Routes>
      </main>
    </>
  );
}

export default App;