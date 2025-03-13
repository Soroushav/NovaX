import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Search from "./pages/Search";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
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
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
