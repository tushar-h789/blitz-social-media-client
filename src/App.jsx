import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Registration from "./pages/registration";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home";
import Login from "./pages/login";
import RootLayout from "./components/RootLayout";
import "swiper/css"
import CreatePostPopUp from "./components/HomeComponents/PostHome/createPostPopup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<RootLayout/>}>
      <Route path="/" element={<Home />}></Route>
      </Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
    <CreatePostPopUp/>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
