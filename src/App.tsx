import { Route, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";

const router = createBrowserRouter([
  {path:"/",
element:<Layout/>,
children:[]
}
])
function App() {

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App
