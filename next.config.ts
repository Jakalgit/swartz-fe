import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	async headers() {
		return [
			{
				source: "/_next/static/css/(.*)", // Отключаем кеш для CSS
				headers: [{ key: "Cache-Control", value: "no-store, no-cache, must-revalidate" }],
			},
			{
				source: "/_next/static/(.*)", // Отключаем кеш для JS и других статических файлов
				headers: [{ key: "Cache-Control", value: "no-store, no-cache, must-revalidate" }],
			},
		];
	},
};

module.exports = withNextIntl(nextConfig);
