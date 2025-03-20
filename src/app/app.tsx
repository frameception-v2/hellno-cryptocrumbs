"use client";

import dynamic from "next/dynamic";

const Frame = dynamic(() => import("~/components/Frame"), {
  ssr: false,
});

export default function App() {
  return <Frame />;
}
import React from "react";
import Frame from "~/components/Frame";

export default function App() {
  return <Frame>
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to HELLNO!</h1>
      <p className="mb-6">The most emphatic rejection framework in the metaverse!</p>
    </div>
  </Frame>;
}
