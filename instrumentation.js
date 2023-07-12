export async function register() {
  console.log('registered');
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./instrumentation.node');
    console.log('tracing')
  }
}

// import { registerOTel } from '@vercel/otel'

// export function register() {
//   registerOTel('next-app')
// }
