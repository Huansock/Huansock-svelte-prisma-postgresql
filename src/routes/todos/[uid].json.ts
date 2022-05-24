import type { RequestHandler } from '@sveltejs/kit';
import { api } from './_api';

export const del = (request: any) => {
	return api(request);
};
