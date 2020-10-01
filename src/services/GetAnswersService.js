import getPrayersStorage from '../storage/GetPrayersStorage';

class GetAnswersService {
    async get() {
			try {
        const answersList = await getPrayersStorage('thank');
        
        if(answersList.val()) {
          return Object.values(answersList.val());
        }

        return [];
			} catch (error) {
				console.log("service", error);
			}
    }
}

export default new GetAnswersService();