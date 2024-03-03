import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from 'app'
import 'app/providers/localization'
import { GlobalProvider, allProviders } from 'app/providers'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalProvider providers={allProviders}>
    <App />
  </GlobalProvider>
)
