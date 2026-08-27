import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import * as React from 'react'
import { DayPicker, getDefaultClassNames } from 'react-day-picker'
import { cn } from '@/shared/lib/utils'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  modifiersClassNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-4 font-sans select-none', className)}
      classNames={{
        root: cn('w-fit bg-card', defaultClassNames.root),
        months: cn('relative flex flex-col gap-4 md:flex-row', defaultClassNames.months),
        month: cn('flex w-full flex-col gap-3', defaultClassNames.month),
        month_caption: cn(
          'flex h-7 w-full items-center justify-center text-sm font-bold text-foreground capitalize',
          defaultClassNames.month_caption,
        ),
        nav: cn(
          'absolute inset-x-0 top-0 flex w-full items-center justify-between',
          defaultClassNames.nav,
        ),
        button_previous: cn(
          'h-7 w-7 p-0 text-muted hover:text-foreground hover:bg-accent rounded-lg cursor-pointer transition-colors flex items-center justify-center',
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          'h-7 w-7 p-0 text-muted hover:text-foreground hover:bg-accent rounded-lg cursor-pointer transition-colors flex items-center justify-center',
          defaultClassNames.button_next,
        ),
        month_grid: cn('w-full border-collapse space-y-1', defaultClassNames.month_grid),
        weekdays: cn('flex justify-between', defaultClassNames.weekdays),
        weekday: cn(
          'w-8 text-center text-[11px] font-bold uppercase text-subtle tracking-wider',
          defaultClassNames.weekday,
        ),
        weeks: cn('flex flex-col gap-1', defaultClassNames.weeks),
        week: cn('flex w-full justify-between gap-1', defaultClassNames.week),
        day: cn(
          'relative flex h-8 w-8 items-center justify-center p-0 text-sm font-medium text-foreground',
          defaultClassNames.day,
        ),
        day_button: cn(
          'h-8 w-8 p-0 text-sm font-medium rounded-lg hover:bg-accent hover:text-foreground transition-colors cursor-pointer flex items-center justify-center',
          defaultClassNames.day_button,
        ),
        selected: cn(
          'bg-primary text-primary-foreground font-bold hover:bg-primary-hover rounded-lg [&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary-hover',
          defaultClassNames.selected,
        ),
        today: defaultClassNames.today,
        outside: cn('text-slate-300 opacity-40', defaultClassNames.outside),
        disabled: cn(
          'text-slate-300 opacity-30 cursor-not-allowed pointer-events-none',
          defaultClassNames.disabled,
        ),
        hidden: cn('invisible', defaultClassNames.hidden),
        ...classNames,
      }}
      modifiersClassNames={{
        selected:
          'bg-primary text-primary-foreground font-bold hover:bg-primary-hover rounded-lg [&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary-hover',
        ...modifiersClassNames,
      }}
      components={{
        Chevron: ({ orientation, className: chevronClassName }) => {
          if (orientation === 'left') {
            return <ChevronLeftIcon className={cn('size-4', chevronClassName)} />
          }
          return <ChevronRightIcon className={cn('size-4', chevronClassName)} />
        },
      }}
      {...props}
    />
  )
}

export { Calendar }
