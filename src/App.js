import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Rootlayout from './rootlayout/rootlayout';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Lifestyle from './components/lifestyle.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Rootlayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='lifestyle' element={<Lifestyle/>}></Route>
      <Route path='about' element={<About/>}></Route>
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
