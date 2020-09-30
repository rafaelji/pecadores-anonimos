import firebase from './Api';

const sendPray = async (prayData) => {
	try {
		const database = firebase.database();
		await database.ref(`prayers`).set(prayData);
	} catch (error) {
		console.log('storage', error);
	}
};

export default sendPray;