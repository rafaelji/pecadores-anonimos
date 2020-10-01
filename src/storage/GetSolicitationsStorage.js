import firebase from './Api';

const GetSolicitationsStorage = async (type) => {
	try {
		const database = firebase.database();
		return database.ref('prayers').once('value');
	} catch (error) {
		console.log('storage', error);
	}
};

export default GetSolicitationsStorage;