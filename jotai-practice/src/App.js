import React, { Suspense } from "react";
import { Provider } from "jotai";
import { Id, Loading, Next, PostTitle, Previous } from "./components";

export default function App() {
  return (
    <Provider>
      <Id />
      <div>
        <Suspense fallback={<Loading />}>
          <PostTitle />
        </Suspense>
      </div>
      <div>
        <Previous />
        <Next />
      </div>
    </Provider>
  );
}
