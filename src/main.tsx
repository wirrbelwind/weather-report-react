import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from 'app'
import 'app/providers/localization'
import { ChakraProvider } from 'app/providers/chakra'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
