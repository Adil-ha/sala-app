
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from "react-redux";
import store from "./store";
import { RouterProvider } from 'react-router-dom';
import router from './routes/app-routing.jsx';

createRoot(document.getElementById('root')).render(

 
    <Provider store={store}>
      <RouterProvider router = {router}/>
    </Provider>
)
