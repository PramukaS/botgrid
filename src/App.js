import { Routes, Route, BrowserRouter } from "react-router-dom";
import UploadContentPage from "./pages/UploadContentPage/UploadContentPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="uploadContent" element={<UploadContentPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
