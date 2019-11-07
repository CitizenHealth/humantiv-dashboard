import { useState, useEffect } from 'react';
import { 
	getTotalUsers, 
	getTotalMedit,
	getDeviceStats,
	getJourneyStats
} from '../network/api';
import {
	devicesAdapter,
	journeyAdapter
} from '../utils/adapters'

const useFetch = () => {
	const [users, setUsers] = useState(null);
	const [medit, setMedit] = useState(null);
	const [devices, setDevices] = useState(null);
	const [journeys, setJourneys] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchData();
	}, []);

	const reFetch = () => {
		fetchData();
	};

	const fetchData = async () => {
		setLoading(true);
		const dUsers = await getTotalUsers();
		const dMedit = await getTotalMedit();
		const dDevices = await getDeviceStats();
		const dJourneys = await getJourneyStats();
		setUsers(dUsers);
		setMedit(dMedit);
		setDevices(devicesAdapter(dDevices));
		setJourneys(journeyAdapter(dJourneys));
		setLoading(false);
	};

	return [users, medit, devices, journeys, loading, reFetch];
};



export {
	useFetch
}