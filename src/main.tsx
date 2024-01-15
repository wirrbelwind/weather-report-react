import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from 'app'
import 'app/providers/localization'
import { ChakraProvider } from 'app/providers/chakra'
import { ReduxProvider } from 'app/providers/redux'
import { IconsProvider } from 'app/providers/icons'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <IconsProvider>
        <ReduxProvider>
          <App />
        </ReduxProvider>
      </IconsProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
