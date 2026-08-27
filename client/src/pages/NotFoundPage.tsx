import { Link } from 'react-router-dom'
import { Button } from '@/shared/ui'

export function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-foreground text-6xl font-extrabold">404</h1>
      <h2 className="text-foreground mt-4 text-xl font-bold">Страница не найдена</h2>
      <p className="text-muted mt-2 max-w-md text-sm">
        Запрашиваемая страница не существует или была перемещена.
      </p>
      <div className="mt-6">
        <Button asChild>
          <Link to="/rooms">Вернуться к переговорным</Link>
        </Button>
      </div>
    </div>
  )
}
