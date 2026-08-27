import { CalendarCheck } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { ROUTES_PATHS } from '@/shared/config/routes'
import { UserCard } from './UserCard'

const NAV_LIST = [
  {
    label: 'Переговорные',
    link: ROUTES_PATHS.ROOMS,
  },
  {
    label: 'Мои бронирования',
    link: ROUTES_PATHS.BOOKINGS,
  },
] as const

export function Header() {
  return (
    <header className="border-border bg-card sticky top-0 z-40 h-18 border-b px-10 py-4.5">
      <div className="flex h-full items-center justify-between gap-12">
        <Link to={ROUTES_PATHS.ROOMS} className="flex items-center gap-3">
          <div className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-xl shadow-sm">
            <CalendarCheck className="size-4.5" />
          </div>
          <h2 className="text-foreground text-xl font-extrabold tracking-tight">BookRoom</h2>
        </Link>
        <nav>
          <ul className="flex items-center gap-6 md:gap-8">
            {NAV_LIST.map(({ link, label }) => (
              <li key={label}>
                <NavLink
                  to={link}
                  className={({ isActive }) =>
                    `flex h-18 items-center border-b-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'border-primary text-primary'
                        : 'text-muted hover:text-foreground border-transparent'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <UserCard />
      </div>
    </header>
  )
}
