export default function TechBadge({ name }) {
  return (
    <span className="px-4 py-2 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-sm font-medium">
      {name}
    </span>
  );
}