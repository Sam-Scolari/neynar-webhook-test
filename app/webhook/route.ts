export const POST = async (request: Request) => {
	const body = await request.text();
	console.log(body);
	return new Response(body, { status: 200 });
};
