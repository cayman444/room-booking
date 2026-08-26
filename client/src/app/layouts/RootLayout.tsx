import { Outlet } from 'react-router-dom'

export function RootLayout() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
