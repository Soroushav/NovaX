import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Movies from "./pages/Movies";
import Series from "./pages/Series";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            index
            element={<Navigate replace to="dashboard"></Navigate>}
          ></Route>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="movies/:moviesId" element={<Movies />} />
          <Route path="series/:seriesId" element={<Series />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
