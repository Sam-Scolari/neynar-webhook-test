export const POST = async (request: Request) => {
	try {
		const body = await request.json();
		console.log("CAST", body);
	} catch (e) {}

	return new Response("", { status: 200 });
};
