import { setupWorker } from 'msw'
import { handlers } from './handlers'
// This configures a Service Worker with the giv en request handlers.
export const worker = setupWorker(...handlers)