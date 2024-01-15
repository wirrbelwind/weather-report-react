import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from 'app'
import 'app/providers/localization'
import { ChakraProvider } from 'app/providers/chakra'
import { ReduxProvider } from 'app/providers/redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
