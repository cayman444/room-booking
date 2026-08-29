import { CalendarCheck } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { ROUTES_PATHS } from '@/shared/config/routes'
import { Burger } from './Burger'
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
    <header className="border-border bg-card sticky top-0 z-40 h-18 border-b px-6 py-4.5 md:px-10">
      <div className="flex h-full items-center justify-between gap-4 md:gap-12">
        <Link to={ROUTES_PATHS.ROOMS} className="flex items-center gap-3">
          <div className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-[10px] shadow-sm">
            <CalendarCheck className="size-4.5 stroke-3" />
          </div>
          <h2 className="text-foreground text-xl font-extrabold tracking-tight">BookRoom</h2>
        </Link>
        <nav className="hidden md:block">
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
        <div className="hidden md:block">
          <UserCard />
        </div>
        <Burger />
      </div>
    </header>
  )
}
