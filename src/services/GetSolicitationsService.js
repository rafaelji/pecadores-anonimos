import getSolicitationsStorage from '../storage/GetSolicitationsStorage';

class GetSolicitationsService {
    async get(type) {
			try {
        const solicitationsList = await getSolicitationsStorage(type);
        
        return Object.values(solicitationsList.val());
			} catch (error) {
				console.log("service", error);
			}
    }
}

export default new GetSolicitationsService();