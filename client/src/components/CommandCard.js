'use client';

export default function CommandCard({ command }) {
  return (
    <div className="card group">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-bold text-lg text-orange-400">{command.name}</h4>
          {command.aliases && command.aliases.length > 0 && (
            <p className="text-xs text-zinc-500 mt-1">Aliases: {command.aliases.join(', ')}</p>
          )}
        </div>
        <span className="badge badge-primary text-xs">{command.category}</span>
      </div>
      <p className="text-zinc-400 mb-3">{command.description}</p>
      <div className="bg-zinc-950/50 rounded p-3 font-mono text-sm text-zinc-300">
        {command.usage}
      </div>
    </div>
  );
}

