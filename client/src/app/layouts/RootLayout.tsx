import { Outlet } from 'react-router-dom'
import { useRealtime } from '@/shared/lib/realtime'
import { Toaster } from '@/shared/ui'
import { Header } from '@/widgets/header'

export function RootLayout() {
  useRealtime()

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
