import { useState, useEffect } from 'react';
import { 
	getTotalUsers, 
	getTotalMedit 
} from '../network/api'

const useFetch = () => {
	const [users, setUsers] = useState(null);
	const [medit, setMedit] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchData();
	}, []);

	const reFetch = () => {
		fetchData();
	};

	const fetchData = async () => {
		setLoading(true);
		const data = await getTotalUsers();
		const medit = await getTotalMedit();
		setUsers(data);
		setMedit(medit);
		setLoading(false);
	};

	return [users, medit, loading, reFetch];
};



export {
	useFetch
}