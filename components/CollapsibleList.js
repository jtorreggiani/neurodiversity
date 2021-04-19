import { useState } from "react";

export default function CollapsibleList({ content }) {
  return (
    <dl className="divide-y-2 divide-grey-100">
      {content.map(({ summary, details }) => {
        return <Item summary={summary} details={details} />;
      })}
    </dl>
  );
}

function Item({ summary, details }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-2">
      <dt>
        <button
          className="w-full flex flex-row justify-between items-center text-lg font-display"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span>{summary}</span>
          <img aria-hidden src={open ? "/close.svg" : "/open.svg"} />
        </button>
      </dt>
      <dd
        className="mt-2"
        style={{
          display: open ? "block" : "none",
        }}
      >
        {details}
      </dd>
    </div>
  );
}