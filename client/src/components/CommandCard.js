'use client';

export default function CommandCard({ command, index = 0 }) {
  return (
    <article className="command-card animate-fade-in" style={{ animationDelay: `${index * 60}ms` }}>
      <div className="command-card-head">
        <h3>
          <span>{'>'}</span>
          {command.name}
        </h3>
        <span className="command-card-category">{command.category}</span>
      </div>

      <p className="command-card-description">{command.description}</p>

      {command.aliases && command.aliases.length > 0 && (
        <div className="command-card-aliases">
          {command.aliases.map((alias) => (
            <span key={alias} className="command-alias-chip">
              {alias}
            </span>
          ))}
        </div>
      )}

      <div className="command-card-usage-wrap">
        <span>Usage</span>
        <code>{command.usage}</code>
      </div>
    </article>
  );
}

