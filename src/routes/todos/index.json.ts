import type { RequestHandler } from '@sveltejs/kit';
import type { RequestHandlerOutput } from '@sveltejs/kit';

// TODO: Persist in database
let todos: Todo[] = [];

export const get: RequestHandler = () => {
	return {
		status: 200,
		body: todos
	};
};

export async function post({ request }: any) {
	const data = await request.formData(); // or .json(), or .text(), etc
	todos.push({
		created_at: new Date(),
		text: data.get('text') as string,
		done: false
	});
	return {
		status: 303,
		headers: {
			location: '/'
		}
	};
}
