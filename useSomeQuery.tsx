import { useQuery } from "@tanstack/react-query";

const someFunction = () => {
  let i = 0;
  return async () => {
    i += 1;
    return Promise.resolve(i);
  };
};
// Query
export const useSomeQuery = () =>
  useQuery({
    queryKey: ["getInt"],
    queryFn: someFunction(),
  });
