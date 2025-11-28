import { Card } from "@/components/ui/card";
import { getTodos } from "@/lib/clients/api";
import Link from "next/link";

export default async function Home() {
  const todos = await getTodos();

  return (
    <div className="p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {todos.map((item) => (
        <Link key={item.id} href={`/todos/${item.id}`}>
          <Card className="p-4">
            <h4 className="text-2xl font-bold">{item.title}</h4>
            <p className="text-sm text-gray-500">{item.description}</p>
            <p className="text-sm text-gray-500">
              {item.completed ? "Completed" : "Not Completed"}
            </p>
          </Card>
        </Link>
      ))}
    </div>
  );
}
