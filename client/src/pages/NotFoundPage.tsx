import { Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES_PATHS } from '@/shared/config'
import { Button } from '@/shared/ui'

export function NotFoundPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-10 text-center">
      <h1 className="text-primary text-[120px] font-extrabold">404</h1>
      <h2 className="text-foreground mt-3 text-[28px] font-extrabold">Страница не найдена</h2>
      <p className="text-muted mt-3 max-w-md">
        Запрашиваемая страница не существует, была удалена или перенесена на другой адрес.
      </p>
      <div className="mt-8">
        <Button asChild size={'lg'}>
          <Link to={ROUTES_PATHS.ROOMS} className="flex items-center gap-2">
            <Home className="size-4.5 stroke-3" />
            <span>Вернуться к переговорным</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
