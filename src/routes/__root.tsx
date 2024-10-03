import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Github, Hand, PersonStanding } from "lucide-react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="p-4 flex justify-between text-lg items center">
        <Link to="/" className="text-blue-400 font-bold text-3xl">
          Agnos Trivia
        </Link>
        <div className="flex gap-2 items-center">
          <Link to="/hand">
            <Hand color="#60a5fa" />
          </Link>
          <Link to="/abs">
            <PersonStanding color="#60a5fa" />
          </Link>
          |
          <a href="https://github.com/minkhantko-0/agnos-assignment" target="_blank">
            <Github />
          </a>
        </div>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
