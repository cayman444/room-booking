import { Check, Info, LoaderCircle, TriangleAlert, X, XCircle } from 'lucide-react'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

export const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group pointer-events-auto"
      style={
        {
          '--width': '480px',
          '--normal-width': '480px',
          '--z-index': 99999,
          zIndex: 99999,
          pointerEvents: 'auto',
        } as React.CSSProperties
      }
      position="top-center"
      closeButton
      icons={{
        success: (
          <div className="bg-available-bg text-primary flex size-9 shrink-0 items-center justify-center rounded-full">
            <Check className="text-primary size-5 stroke-[2.5]" />
          </div>
        ),
        error: (
          <div className="bg-occupied-bg text-destructive flex size-9 shrink-0 items-center justify-center rounded-full">
            <X className="text-destructive size-5 stroke-[2.5]" />
          </div>
        ),
        info: (
          <div className="bg-accent text-primary flex size-9 shrink-0 items-center justify-center rounded-full">
            <Info className="text-primary size-5 stroke-2" />
          </div>
        ),
        warning: (
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <TriangleAlert className="size-5 stroke-2 text-amber-600" />
          </div>
        ),
        loading: <LoaderCircle className="text-primary size-5 animate-spin" />,
        close: (
          <XCircle className="text-subtle hover:text-foreground size-3.5 stroke-3 transition-colors" />
        ),
      }}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            'bg-card text-foreground border border-primary data-[type=error]:border-destructive rounded-xl p-5 sm:p-5 shadow-lg shadow-black/10 w-full max-w-[92vw] sm:w-[480px] flex items-center gap-4 font-sans pointer-events-auto',
          content: 'flex-1 flex flex-col justify-center min-w-0',
          title: 'text-foreground font-extrabold leading-tight',
          description: 'text-muted text-sm mt-1 break-words',
          closeButton:
            'order-last ml-auto !static !transform-none !bg-transparent !text-subtle hover:!text-foreground !border-none !p-0 !cursor-pointer flex items-center justify-center shrink-0 pointer-events-auto',
          actionButton:
            'bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-lg pointer-events-auto',
          cancelButton:
            'bg-muted text-muted text-xs font-semibold px-3 py-1.5 rounded-lg pointer-events-auto',
        },
      }}
      {...props}
    />
  )
}
