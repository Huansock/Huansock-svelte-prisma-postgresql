import { api } from './_api';
import type { RequestHandler } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
/*
export async function get() {
	// ... you will write your Prisma Client queries here
	const allUsers = await prisma.book.findMany();
	console.log(allUsers);
};
*/

// get
export const get = async (request: any) => {
	const allUsers = await prisma.todo.findMany();
	console.log(allUsers);
	return await api(request);
};
// put
// 왜 아직까지도 엔드포인트를 만들때 굳이 RequestHandler를 만드는 이유를 모르겠다.

export const post = async ({ request }: any) => {
	const form = await request.formData();
	const text = await form.get('text');
	const apiout = api(request, {
		uid: `${Date.now()}`, // TODO: Replace with the UID from the datbase
		created_at: new Date(),
		text: `${text}`,
		done: false
	});
	return {
		apiout
	};
};
