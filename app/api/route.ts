export async function GET() {
  return new Response(JSON.stringify({ hello: 'world' }), { status: 400 });
}
