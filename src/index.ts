import { Hono } from 'hono'

const app = new Hono()

app.get('/status', (c) => {
  return c.json({message:"ok"});
});
  
app.get("/", (c) => {
  return c.html(`<h1>wakati</h1>`);
});
 app.get("calculate",  (c) => {
  const text = c.req.query("text");
  const wpm = c.req.query("wpm");
  return c.json({ message:text, wpm});
 });

export default app;
