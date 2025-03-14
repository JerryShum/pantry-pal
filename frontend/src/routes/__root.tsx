import Navbar from "@/components/common/Navbar";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="flex h-screen flex-col">
      <Navbar />
      <hr />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  ),
});
