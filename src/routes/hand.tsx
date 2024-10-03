import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hand')({
  component: () => <div>Hello /hand!</div>,
})
