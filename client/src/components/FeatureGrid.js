import { FEATURES } from '@/config/site';

export default function FeatureGrid() {
  return (
    <div className="grid-auto">
      {FEATURES.map((feature) => (
        <div key={feature.id} className="card group">
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-orange-300 transition-colors">{feature.title}</h3>
          <p className="text-zinc-400">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

