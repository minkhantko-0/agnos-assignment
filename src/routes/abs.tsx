import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/abs')({
  component: () => <div>Hello /abs!</div>,
})
