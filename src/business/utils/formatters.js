import numeral from 'numeral';

const formatMoney = (amount) => {
	return numeral(amount).format('(0.0 a)');
}

const formatCount = (count) => {
	return numeral(count).format('0 a');
}

export {
	formatMoney,
	formatCount
}