export const SEND_RED_BAG = 'SEND_RED_BAG';

export function sendBag(person, amount) {
	return {
		type: SEND_RED_BAG,
		payload: {
			person,
			amount
		}
	}
}