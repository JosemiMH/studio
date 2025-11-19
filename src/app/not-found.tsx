
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="flex-grow flex items-center justify-center text-center px-4 py-24">
      <div>
        <h1 className="text-9xl font-extrabold text-primary tracking-widest">404</h1>
        <div className="bg-foreground text-background px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <p className="mt-4 text-lg text-muted-foreground">Sorry, the page you are looking for does not exist.</p>
        <Button asChild className="mt-8">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </main>
  );
}
