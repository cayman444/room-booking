import { MyBookingsList } from '@/widgets/myBookingsList'

export function MyBookingsPage() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-10">
      <div className="flex items-center justify-between">
        <h1 className="text-foreground text-[28px] font-extrabold tracking-tight">
          Мои бронирования
        </h1>
      </div>
      <MyBookingsList />
    </div>
  )
}
