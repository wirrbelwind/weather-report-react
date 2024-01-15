import { WeatherType } from '../types/WeatherType'
import { IconType } from 'react-icons'
import { WiDaySunny } from "react-icons/wi";
import { WiDayCloudyWindy } from "react-icons/wi";
import { WiDayThunderstorm } from "react-icons/wi";
import { WiFog } from "react-icons/wi";
import { WiRaindrops } from "react-icons/wi";
import { WiRainWind } from "react-icons/wi";
import { WiNightRainWind } from "react-icons/wi";
import { WiNightThunderstorm } from "react-icons/wi";

export const iconsMap: Record<WeatherType, IconType> = {
	'0-19': WiDaySunny,
	'20-29': WiDayCloudyWindy,
	'30-39': WiDayThunderstorm,
	'40-49': WiFog,
	"50-59": WiRaindrops,
	'60-69': WiRainWind,
	"70-79": WiNightRainWind,
	'80-100': WiNightThunderstorm
} as const
