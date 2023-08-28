export async function register() {
  console.log('registered');
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./instrumentation.node');
    console.log('tracing')
  }
}