"use client";

import { useSomeQuery } from "../../useSomeQuery";

export const LayoutClient = () => {
  const data = useSomeQuery();

  return <div>{`The value is now: ${data.data}`}</div>;
};
