export const mapConfig: {
	center: [number, number] //TODO create type for coords, bounds
	zoom: number
	minZoom: number
	maxBounds: [number, number][]
	maxBoundsViscosity: number
	doubleClickZoom: boolean
	zoomControl: boolean
} = {
	center: [51.509865, -0.118092],
	zoom: 3,
	minZoom: 2,
	maxBounds: [
		[-85, -180],
		[85, 180]
	],
	maxBoundsViscosity: 1.0,
	doubleClickZoom: false,
	zoomControl: false
}
export const MAP_PROVIDER_URL = 'https://tile.openstreetmap.org'
