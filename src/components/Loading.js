import React from "react";
import { PushSpinner } from "react-spinners-kit";
function Loading() {
  return (
    <section className="loading">
      <PushSpinner size={50} color="green" />
    </section>
  );
}

export default Loading;
