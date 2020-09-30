import sendPrayStorage from '../storage/SendPrayStorage';

class SendPrayService {
    async send(prayData) {
			try {
				await sendPrayStorage(prayData);
			} catch (error) {
				console.log("service", error);
			}
    }
}

export default new SendPrayService();