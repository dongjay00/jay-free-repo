import React from "react";
import { useAtom } from "jotai";
import { a, useSpring } from "@react-spring/web";
import { postId } from "../../atoms";

export default function Id() {
  const [id] = useAtom(postId);
  const props = useSpring({ from: { id: 0 }, id, reset: true });
  return <a.h1>{props.id.to(Math.round)}</a.h1>;
}
