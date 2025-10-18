import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { fakeTodos } from "@/lib/constants";
import Link from "next/link";
export default function Home() {
  return (
    <div className="p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {fakeTodos.map((todo) => (
        <Link key={todo.id} href={`/todo/${todo.id}`}>
          <Card className="p-4">
            <h4 className="text-2xl font-bold">{todo.title}</h4>
            <p className="text-sm text-gray-500">{todo.description}</p>
            <p className="text-sm text-gray-500">
              {todo.completed ? "Completed" : "Not Completed"}
            </p>
          </Card>
        </Link>
      ))}
    </div>
  );
}
