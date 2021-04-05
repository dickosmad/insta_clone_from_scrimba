import React, { useEffect } from "react";
export default function NotFound() {
  useEffect(() => {
    document.title = "Not Found";
  }, []);

  return (
    <div className="bg-gray">
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center text-2xl align-middle">
          Hello from Not Found
        </p>
      </div>
    </div>
  );
}
