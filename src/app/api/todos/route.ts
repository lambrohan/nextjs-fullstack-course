import { db } from "@/db";
import { todosTable } from "@/db/schema";
import { fakeTodos } from "@/lib/constants";
import { z } from "zod";

export function GET() {
  return new Response(JSON.stringify(fakeTodos), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

/**
 * POST
 * /todos
 * body {
 *    id,
 * title
 * }
 */

const todoSchema = z.object({
  title: z.string().max(100),
  description: z.string().max(100).optional(),
});

export async function POST(req: Request) {
  const body = await req.json();

  // body needs to be validated (can't trust users)

  const validation = todoSchema.safeParse(body);

  // if body is invalid (bad) then throw error and notify user
  if (!validation.success) {
    return new Response(
      JSON.stringify({
        error: validation.error.message,
      }),
      {
        status: 400,
      }
    );
  }

  // now we have checked that req body is valid, we can safely insert the data to db

  await db.insert(todosTable).values({
    ...validation.data,
    created_at: new Date(),
    updated_at: new Date(),
  });

  return new Response(
    JSON.stringify({
      success: true,
    }),
    {
      status: 200,
    }
  );
}
