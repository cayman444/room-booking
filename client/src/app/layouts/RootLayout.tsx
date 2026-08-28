import { Outlet } from 'react-router-dom'
import { Toaster } from '@/shared/ui'
import { Header } from '@/widgets/header'

export function RootLayout() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <Toaster />
    </div>
  )
}

