export const prerender = true;
import { inject } from '@vercel/analytics';

if (import.meta.env.VITE_ENV === 'production') {
	inject();
}
