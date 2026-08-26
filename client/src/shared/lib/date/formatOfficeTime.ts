export function formatOfficeTime(timezone?: string): string {
  if (!timezone) return '--'

  try {
    const timeStr = new Intl.DateTimeFormat('ru-RU', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(new Date())

    const tzShort = timezone.includes('Moscow') ? 'MSK' : timezone.split('/')[1] || timezone

    return `${timeStr} ${tzShort}`
  } catch {
    return '---'
  }
}
