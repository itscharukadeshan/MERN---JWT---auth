/** @format */

import React from "react";

function ForumContainer({ children }) {
  return (
    <div class='mockup-window border bg-base-300'>
      <div class='flex justify-center px-4 py-16 bg-base-200'>{children}</div>
    </div>
  );
}

export default ForumContainer;
