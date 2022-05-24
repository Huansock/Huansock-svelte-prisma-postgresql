import type { RequestEvent } from '@sveltejs/kit';

// TODO: Persist in database
let todos: Todo[] = [];

export const api = (e: RequestEvent, todo?: Todo) => {
	let body = {};
	let status = 200;

	switch (e.request.method.toUpperCase()) {
		case 'GET':
			body = todos;
			status = 200;
			console.log(e.request.method.toUpperCase());
			break;
		case 'POST':
			if (todo) {
				todos.push(todo);
				body = todo;
				console.log(e.request.method.toUpperCase());
			}
			status = 201;
			break;
		case 'DELETE':
			todos = todos.filter((todo) => todo.uid !== e.params.uid);
			status = 200;
			break;

		default:
			break;
	}
	if (e.request.method.toUpperCase() !== 'GET') {
		return {
			status: 303,
			headers: {
				location: '/'
			}
		};
	}
	return { status, body };
};
