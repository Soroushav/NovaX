import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />} path="*">
            {/* <Route path="dashboard" element={<Dashboard/>}></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
