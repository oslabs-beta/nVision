import '../styles/globals.css';
import { FrontendTracer } from '../utils/frontendTracer';

export const metadata = {
  title: 'nVision demo app',
  description: 'created by nVision',
};

if (typeof window !== 'undefined') {
  FrontendTracer();
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>{children}</main>
      </body>
    </html>
  );
}
