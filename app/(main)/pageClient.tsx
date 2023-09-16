"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

/** Add your relevant code here for the issue to reproduce */
export function PageClient() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return (
    <>
      <button onClick={() => router.refresh()}>Reload Page</button>
      <button
        onClick={() => queryClient.invalidateQueries({ queryKey: ["getInt"] })}
      >
        Invalidate Query
      </button>
    </>
  );
}
