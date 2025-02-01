'use client';
import * as React from 'react';
import { HeroUIProvider } from '@heroui/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function Providers({ children }: { readonly children: React.ReactNode }) {
	return (
		<HeroUIProvider>
			<NextThemesProvider
				attribute='class'
				defaultTheme='system'
			>
				{children}
			</NextThemesProvider>
		</HeroUIProvider>
	);
}
