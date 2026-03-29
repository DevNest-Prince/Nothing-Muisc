export default function SectionHeader({ title, subtitle, badge }) {
  return (
    <div className="text-center mb-12 animate-fade-in">
      {badge && (
        <div className="mb-4 inline-flex">
          <span className="badge badge-primary">{badge}</span>
        </div>
      )}
      <h2 className="mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}

