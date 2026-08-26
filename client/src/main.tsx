import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Button } from './shared/ui/button'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>Hello</div>
    <Button>Button</Button>
  </StrictMode>,
)
