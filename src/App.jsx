import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
