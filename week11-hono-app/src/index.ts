import { Hono } from 'hono'

const app = new Hono()

const authMiddleware = async (c:any, next:any) => {
  if (c.req.header("Authorization")) {
    await next()
  }
  return c.status(401).text('Unauthorized')
}

app.post('/',authMiddleware, async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app