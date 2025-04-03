import { MetadataRoute } from 'next';
import { SITE_URL, LOCALES } from '@/consts/locales';

const pages = [
	'',
	'/contacts',
	'/products',
	'/about', '/about/team', '/about/partners', '/delivery-and-payment']; // Только главная страница

export default function sitemap(): MetadataRoute.Sitemap {
	return LOCALES.flatMap((locale) =>
		pages.map((page) => ({
			url: `${SITE_URL}/${locale}${page ? `/${page}` : ''}`,
			lastModified: new Date().toISOString(),
		}))
	);
}