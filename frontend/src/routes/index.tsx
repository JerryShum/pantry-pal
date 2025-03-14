import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <section className="">Hello "/INDEX COMPONENT"!</section>;
}
