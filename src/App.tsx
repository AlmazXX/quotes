import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Add from "./containers/Add/Add";
import Edit from "./containers/Edit/Edit";
import Home from "./containers/Home/Home";

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
          <Route path="/quotes/:category"element={<Home/>} />
          <Route path="/quotes/:id/edit"element={<Edit/>} />
          <Route path="/quotes/add"element={<Add/>} />
          <Route path="*"element={<div className="row mt-3"><h4>Not found!</h4></div>} />
        </Routes>
      </main>
    </>
  );
}

export default App;