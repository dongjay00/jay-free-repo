import { atom } from "jotai";

export const postId = atom(9001);

export const postData = atom(async (get) => {
  const id = get(postId);
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  return await response.json();
});
