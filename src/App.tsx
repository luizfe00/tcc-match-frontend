import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PublicRoutes } from "./routes/PublicRoutes";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const router = createBrowserRouter(PublicRoutes);

  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
