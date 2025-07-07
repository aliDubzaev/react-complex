import Header from "./components/header/header";
import Main from "./components/main/main";
import Features from "./components/features/features";
import Map from "./components/map/map";
import Views from "./components/views/views";
import Presentation from "./components/presentation/presentation";
import Cluster from "./components/cluster/cluster";
import Lobby from "./components/lobby/lobby";
import Flats from "./components/flats/flats";
import Finishing from "./components/finishing/finishing";
import Interior from "./components/interior/interior";
import Inteco from "./components/inteko/inteco";
import Banks from "./components/banks/banks";
import Footer from "./components/footer/footer";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestIntro from "./components/test/TestIntro";
import TestMain from "./components/test/TestMain";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Features />
      <Map />
      <Views />
      <Presentation />
      <Cluster />
      <Lobby />
      <Flats />
      <Router>
      <Routes>
        <Route path="/" element={<TestIntro />} />
        <Route path="/test/*" element={<TestMain />} />
      </Routes>
      </Router>
      <Finishing />
      <Interior />
      <Inteco />
      <Banks />
      <Footer />
    </div>
  );
}

export default App;
