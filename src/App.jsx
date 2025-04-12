import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Github from "./components/Github"
import Error from "./components/Error"

// define routing
const routing = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "about",
        element : <About/>
      },
      {
        path : "contact",
        element : <Contact/>
      },
      {
        path : "github",
        element : <Github/>,
        loader : async ()=> {
       let userData = await  fetch(
            'https://api.github.com/users/Naru32'
        )
        return userData.json()
        }
      },{
        path : "*",
        element : <Error/>
      }
    ]
  }
])

// Router provider is inbuilt component that is used to enable routing in your react app, basically it is used to connect router object(that we have built using createBrowserRouter() ex. routing) with react app
// we have special prop called router we have to pass this routing in router prop
function App() {
  return (
    <>
      <div className="h-screen w-auto max-w-full bg-[#e5e5e5]">
       <RouterProvider router={routing}  fallbackElement={<div>Loading...</div>}/>
      </div>
    </>
  )
}

export default App
