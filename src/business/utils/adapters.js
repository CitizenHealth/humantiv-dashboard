import { SharedColors } from '../../resources'

const _setColor = (journey) => {
	switch (journey) {
		case "energy":
			return SharedColors.darkRed;
		case "immunity":
			return SharedColors.blue;
		case "performance":
			return SharedColors.darkYellow;
		case "longevity":
			return SharedColors.darkGreen;
		default:
			return SharedColors.grey;
	}
}

const devicesAdapter = data => (
	Object.keys(data).map( device => {
		return {
			name: device,
			value: data[device],
			color: SharedColors.blue
		}
	})
);

const journeyAdapter = data => (
	Object.keys(data).map( journey => {
		return {
			name: journey,
			value: data[journey],
			color: _setColor(journey)
		}
	})
);

export {
	devicesAdapter,
	journeyAdapter
};