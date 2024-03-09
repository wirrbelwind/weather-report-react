import { Link, LinkProps } from "@chakra-ui/react"
import { GiTornado } from "react-icons/gi"

interface LinkWithLogoProps extends Omit<LinkProps, 'href' | 'children'> {

}

export const LinkWithLogo = (props: LinkWithLogoProps) => {
	return (
		<Link
			href="/"
			{...props}
		>
			<GiTornado size="3rem" />
		</Link>
	)
}