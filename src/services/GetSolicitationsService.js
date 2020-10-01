import getPrayersStorage from '../storage/GetPrayersStorage';

class GetSolicitationsService {
    async get() {
			try {
        const solicitationsList = await getPrayersStorage('ask');
        
        return Object.values(solicitationsList.val());
			} catch (error) {
				console.log("service", error);
			}
    }
}

export default new GetSolicitationsService();