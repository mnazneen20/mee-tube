import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Searchpage from "./Pages/Searchpage";
import SingleVideo from "./Pages/SingleVideo";
import Contextprovider from "./Context/Contextprovider";

function App() {
  return (
    <Contextprovider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos/:videoId" element={<SingleVideo />} />
          <Route path="/searchresults/:queryterm" element={<Searchpage />} />
        </Routes>
      </BrowserRouter>
    </Contextprovider>
  );
}

export default App;