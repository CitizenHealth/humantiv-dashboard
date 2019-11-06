import humantiv from './humantiv';

const getTotalUsers = async () => {
	const response = await humantiv.get('/adminGetNumberUsers')
	return response.data; 
}

const getTotalMedit  = async () => {
	const response = await humantiv.get('/adminSetTotalMeditStat')
	return response.data; 
}

export {
	getTotalUsers,
	getTotalMedit
}