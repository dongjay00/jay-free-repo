import React, { Suspense } from "react";
import { Provider } from "jotai";
import { Id, Loading, Next, PostTitle } from "./components";

export default function App() {
  return (
    <Provider>
      <Id />
      <div>
        <Suspense fallback={<Loading />}>
          <PostTitle />
        </Suspense>
      </div>
      <Next />
    </Provider>
  );
}
