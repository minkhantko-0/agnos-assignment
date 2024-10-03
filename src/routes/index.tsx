import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="text-center my-24">
      <h1 className="text-2xl font-bold">Welcome to Agnos Trivia!</h1>
      <br />
      <h2 className="text-lg font-bold"> Check out Questions Below</h2>

      <br />
      <div className="flex justify-center gap-2 text-blue-400 font-semibold">
        <Link to="/hand">Hand</Link>|<Link to="/abs">Abs</Link>
      </div>
    </div>
  );
}
