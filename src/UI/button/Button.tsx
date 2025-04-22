import React from "react";

export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className={`${props.className} bg-[#008A5E] text-white rounded-2xl px-4 py-2 shadow-2xl shadow-black hover:brightness-105`}
    />
  );
}
