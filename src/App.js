import {Provider } from 'react-redux';
import Head from './Component/Head'
import Body from './Component/Body'
import store from './utils/store'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css';
import MainContainer from './Component/MainContainer';
import WatchPage from './Component/WatchPage';

const approuter= createBrowserRouter([
    {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>,
      },
      {
        path:"watch",
        element:<WatchPage/>, 
      }
    ]

  }
])
function App() {
  return (
    <div className="">
      <Provider store={store}>
      <Head/>
      <RouterProvider router={approuter}/>
      </Provider>
    </div>
  );
}

export default App;



/* 
Header
Body
  Sidebar
  MainContainer
  ButtonList
  VideoCard


*/
