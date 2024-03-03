import { ButtonGroup, IconButton } from "@chakra-ui/react"
import { HiMiniViewColumns } from "react-icons/hi2"
import { DaysView } from "../types/DaysView"
import { VscThreeBars } from "react-icons/vsc"

interface DaysViewOptionsProps {
	view: DaysView
	changeView: (newView: DaysView) => void
}

export const DaysViewOptions = (props: DaysViewOptionsProps) => {
	const {
		view,
		changeView
	} = props

	return (
		<ButtonGroup size='lg' isAttached variant='outline'>
			<IconButton
				aria-label='Show days as columns'
				icon={<HiMiniViewColumns />}
				onClick={() => changeView('columns')}
				bg={view === 'columns' ? 'Highlight' : 'unset'}
				_hover={{
					bg: view === 'columns' ? 'Highlight' : 'unset'
				}}
			/>
			<IconButton
				aria-label='Show days as rows'
				icon={<VscThreeBars />}
				onClick={() => changeView('rows')}
				bg={view === 'rows' ? 'Highlight' : 'unset'}
				_hover={{
					bg: view === 'rows' ? 'Highlight' : 'unset'
				}}
			/>
		</ButtonGroup>
	)
}