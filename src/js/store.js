import { ampsData } from '../data/amps'
import { cabsData } from '../data/cabs'
import { micsData } from '../data/mics'
import { fxsData } from '../data/fxs'
import { presetsData } from '../data/presets'

// Define Store initial value
export const gigboardHintsStore = {
	page: 'homePage',
	ampsData,
	cabsData,
	micsData,
	fxsData,
	presetsData
}