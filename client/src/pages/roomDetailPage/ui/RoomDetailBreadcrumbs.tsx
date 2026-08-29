import { Link, useSearchParams } from 'react-router-dom'
import type { Room } from '@/entities/rooms'
import { ROUTES_PATHS } from '@/shared/config'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/shared/ui'

interface RoomDetailBreadcrumbsProps {
  room: Room
}

export const RoomDetailBreadcrumbs = ({ room }: RoomDetailBreadcrumbsProps) => {
  const [searchParams] = useSearchParams()

  return (
    <Breadcrumb>
      <BreadcrumbList className="text-muted text-sm">
        <BreadcrumbItem>
          <BreadcrumbLink asChild className="hover:text-foreground">
            <Link to={{ pathname: ROUTES_PATHS.ROOMS, search: searchParams.toString() }}>
              Переговорные
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <span className="text-muted">{room.office.name || 'Офис'}</span>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-foreground font-semibold">
            Комната '{room.name || '...'}'
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
