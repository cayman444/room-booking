import { RoomCardSkeleton } from '@/entities/rooms'

export function RoomsLoading() {
  return (
    <div className="p-6 md:p-10">
      <h2 className="text-foreground mb-8 text-[22px] font-extrabold">Загрузка переговорных...</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <RoomCardSkeleton key={index} />
        ))}
      </div>
    </div>
  )
}
