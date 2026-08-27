import { useParams } from 'react-router-dom'

export function RoomDetailPage() {
  const { roomId } = useParams<{ roomId: string }>()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-foreground text-2xl font-bold">Детали переговорной</h1>
      <p className="text-muted mt-2">ID комнаты: {roomId}</p>
    </div>
  )
}
