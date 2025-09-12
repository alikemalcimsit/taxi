import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Canonical normalizasyon: www kaldır, http -> https (production'da)
export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = url.host.toLowerCase();

  let changed = false;

  // www kaldır
  if (host.startsWith('www.')) {
    url.hostname = host.replace(/^www\./, '');
    changed = true;
  }

  // http -> https
  if (url.protocol === 'http:' && process.env.NODE_ENV === 'production') {
    url.protocol = 'https:';
    changed = true;
  }

  if (changed) {
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next|.*\.(?:png|jpg|jpeg|gif|svg|webp|ico|txt|xml|json)).*)'
  ]
};
