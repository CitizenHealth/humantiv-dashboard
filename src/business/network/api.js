import humantiv from './humantiv';

const getTotalUsers = async () => {
	const response = await humantiv.get('/adminGetNumberUsers')
	return response.data; 
}

const getTotalMedit  = async () => {
	const response = await humantiv.get('/adminSetTotalMeditStat')
	return response.data; 
}

const getDeviceStats  = async () => {
	const response = await humantiv.get('/adminGetSourcesStats')
	return response.data; 
}

const getJourneyStats  = async () => {
	const response = await humantiv.get('/adminGetJourneyStats')
	return response.data; 
}

export {
	getTotalUsers,
	getTotalMedit,
	getDeviceStats,
	getJourneyStats
}