import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Task_Form from './Task_Form'
import Api_Calling from './Api_Calling'



createRoot(document.getElementById('root')).render(

  <StrictMode>

    <Api_Calling />



  </StrictMode>,
)

