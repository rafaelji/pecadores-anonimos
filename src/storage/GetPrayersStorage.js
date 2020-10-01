import firebase from './Api';

const GetPrayersStorage = async (type) => {
	try {
		const database = firebase.database();
		return database.ref('prayers').orderByChild('type').equalTo(type).once('value');
	} catch (error) {
		console.log('storage', error);
	}
};

export default GetPrayersStorage;