import { fakeTodos } from "@/lib/constants";

export async function GET(
  request: Request,
  props: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  const { id } = await props.params;

  const todo = fakeTodos.find((item) => item.id === Number(id));

  if (!todo) {
    return new Response("no todo found", {
      status: 404,
    });
  }

  return new Response(JSON.stringify(todo), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
