import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

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
        <div>
          <Link to="/abs">About</Link>
        </div>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
