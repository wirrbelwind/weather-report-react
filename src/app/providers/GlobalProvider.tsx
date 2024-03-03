import { PropsWithChildren } from 'react'
import { ProviderProps } from './ProviderProps'

interface GeneralProviderProps extends PropsWithChildren {
	providers: React.FC<ProviderProps>[]
}

export const GlobalProvider = ({ children, providers }: GeneralProviderProps) => {
	if (providers.length === 1) {
		const [LastProvider] = providers
		
		return (
			<LastProvider>
				{children}
			</LastProvider>
		)
	}

	const [Provider] = providers

	return (
		<GlobalProvider providers={providers.slice(1)}>
			<Provider>{children}</Provider>
		</GlobalProvider>
	)
}
