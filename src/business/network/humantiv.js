import axios from 'axios';

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
export default axios.create({
//	baseURL: 'https://us-central1-health-score-6740b.cloudfunctions.net/',
	proxy: true,
	headers: {
		'Access-Control-Allow-Origin': '*'
	}
});