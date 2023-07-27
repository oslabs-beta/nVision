export async function register() {
  console.log('registered');
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const {startTrace} = await import('@nvision/trace');
    startTrace();
  }
}
