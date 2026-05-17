import { createFileRoute, useRouter } from "@tanstack/react-router";

const typedEntries = <T extends object>(obj: T): [keyof T, T[keyof T]][] =>
  Object.entries(obj) as [keyof T, T[keyof T]][];

const Home = () => {
  const { routesByPath } = useRouter();

  return (
    <div>
      <div>
        <h1>Available routes</h1>
        <ul>
          {typedEntries(routesByPath).map(([path, route]) => (
            <li>
              <route.Link key={path}>{path}</route.Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Home,
});
