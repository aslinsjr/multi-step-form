import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './pages/ErrorPage.jsx'
import PersonalInfo from './pages/PersonalInfo.jsx'
import SelectPlan from './pages/SelectPlan.jsx'
import FinishingUp from './pages/FinishingUp.jsx'
import PickAddOns from './pages/PickAddOns.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PersonalInfo/>
      },
      {
        path: "/selectPlan",
        element: <SelectPlan/>
      },
      {
        path: "/pickAddOns",
        element: <PickAddOns/>
      },
      {
        path: "/finishingUp",
        element: <FinishingUp/>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
