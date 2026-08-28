import { Link } from 'react-router-dom'
import type { Room } from '@/entities/rooms'
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
  return (
    <Breadcrumb>
      <BreadcrumbList className="text-muted text-sm">
        <BreadcrumbItem>
          <BreadcrumbLink asChild className="hover:text-foreground">
            <Link to="/rooms">Переговорные</Link>
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
