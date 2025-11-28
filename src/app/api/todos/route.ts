import { fakeTodos } from "@/lib/constants";

export function GET() {
  return new Response(JSON.stringify(fakeTodos), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
