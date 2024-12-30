import { Hono } from "hono";
const app = new Hono();

app.get("/", async (c) => {
	const body = await c.req.text();
	console.log(body);
	return c.text(`Cast ${body}`);
});

export default app;
