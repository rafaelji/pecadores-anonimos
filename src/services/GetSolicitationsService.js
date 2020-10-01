import getPrayersStorage from '../storage/GetPrayersStorage';

class GetSolicitationsService {
    async get() {
			try {
        const solicitationsList = await getPrayersStorage('ask');
        
        if(solicitationsList.val()) {
          return Object.values(solicitationsList.val());
        }

        return [];
			} catch (error) {
				console.log("service", error);
			}
    }
}

export default new GetSolicitationsService();