import { CalendarCheck, DoorOpen, Menu } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ROUTES_PATHS } from '@/shared/config/routes'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/shared/ui'
import { UserCard } from './UserCard'

const NAV_ITEMS = [
  {
    link: ROUTES_PATHS.ROOMS,
    label: 'Переговорные',
    icon: DoorOpen,
  },
  {
    link: ROUTES_PATHS.BOOKINGS,
    label: 'Мои бронирования',
    icon: CalendarCheck,
  },
] as const

export const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu className="text-foreground hover:bg-accent size-6 md:hidden" />
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          <SheetHeader className="border-border border-b pb-4">
            <SheetTitle>
              <Link
                to={ROUTES_PATHS.ROOMS}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
              >
                <div className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-[10px] shadow-sm">
                  <CalendarCheck className="size-4.5 stroke-3" />
                </div>
                <span className="text-foreground text-xl font-extrabold tracking-tight">
                  BookRoom
                </span>
              </Link>
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map(({ link, label, icon: Icon }) => (
              <NavLink
                key={label}
                to={link}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-primary/10 text-primary shadow-xs'
                      : 'text-muted hover:bg-accent hover:text-foreground'
                  }`
                }
              >
                <Icon className="size-5 stroke-2" />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="border-border border-t pt-4">
          <div className="text-subtle mb-3 text-xs font-bold tracking-wider uppercase">
            Текущий пользователь
          </div>
          <UserCard />
        </div>
      </SheetContent>
    </Sheet>
  )
}
