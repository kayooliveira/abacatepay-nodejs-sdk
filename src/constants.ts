import { ABACATE_PAY_VERSION } from './version';

export const BASE_URL = 'https://api.abacatepay.com/v1';
export const ABACATE_PAY_DOCS = 'https://www.abacatepay.com/';
export function GET_DEFAULT_HEADERS(apiKey: string) {
	return {
		Authorization: `Bearer ${apiKey}`,
		'Content-Type': 'application/json',
		'User-Agent': `NodeJS SDK (${ABACATE_PAY_VERSION})`,
	};
}
