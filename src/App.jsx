import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Mainlayout />}>
    <Route index element={<HomePage />} />
    <Route path="/JobsPage" element={<JobsPage />} />
  </Route>
  )
)

const App = () => {

  return <RouterProvider router={router} />
}

export default App