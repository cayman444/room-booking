import { useParams } from 'react-router-dom'

export function RoomDetailPage() {
  const { roomId } = useParams<{ roomId: string }>()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-foreground">Детали переговорной</h1>
      <p className="mt-2 text-muted">ID комнаты: {roomId}</p>
    </div>
  )
}
