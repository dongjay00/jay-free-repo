import React from "react";
import { useAtom } from "jotai";
import { postData } from "../../atoms";

export default function PostTitle() {
  // This throws an expection that's caught by Reacts suspense boundary
  const [{ by, title, url, text, time }] = useAtom(postData);
  // And by the time we're here the data above is available
  return (
    <>
      <h2>{by}</h2>
      <h6>{new Date(time * 1000).toLocaleDateString("en-US")}</h6>
      {title && <h4>{title}</h4>}
      <a href={url}>{url}</a>
      <p>{text}</p>
    </>
  );
}
