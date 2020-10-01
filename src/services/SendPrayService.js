import sendPrayStorage from '../storage/SendPrayStorage';
import { v4 as uuidv4 } from 'uuid';

class SendPrayService {
    async send(prayData) {
			try {
        const data = { 
          uuid: uuidv4(),
          name: prayData.name && prayData.name.trim().lenght > 0 ? prayData.name : 'Anônimo',
          type: prayData.type,
          description: prayData.description
        };

				await sendPrayStorage(data);
			} catch (error) {
				console.log("service", error);
			}
    }
}

export default new SendPrayService();