import React from "react";
import { useAtom } from "jotai";
import { postId } from "../../atoms";

export default function Previous() {
  const [, set] = useAtom(postId);
  return (
    <button onClick={() => set((x) => x - 1)}>
      <div>←</div>
    </button>
  );
}
