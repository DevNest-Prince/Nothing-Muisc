import Image from 'next/image';

export default function BotCard({ bot }) {
  const typeColors = {
    'Free': '#10b981',
    'Premium': '#f59e0b',
    'Free + Premium': '#8b5cf6',
    'All-in-One': '#ef4444',
  };

  const botLogos = {
    'Nothing Music': '/Nothing%201%20logo.png',
    'Nothing Canary': '/Nothing%20Canary%20logo.png',
    'Nothing Prime': '/Nothing%20Prime%20logo.webp',
    'Flame': '/Flame%20logo.png',
  };

  const botRoles = {
    'Nothing Music': 'Core music bot',
    'Nothing Canary': 'Free + premium hybrid',
    'Nothing Prime': 'Premium music experience',
    'Flame': 'Security and moderation suite',
  };

  const botToneClass = {
    'Nothing Music': 'bot-card-music',
    'Nothing Canary': 'bot-card-canary',
    'Nothing Prime': 'bot-card-prime',
    'Flame': 'bot-card-flame',
  };

  return (
    <div className={`bot-card ${botToneClass[bot.name] || ''}`}>
      <div className="bot-card-top">
        <div className="bot-card-identity">
          <span className="bot-avatar">
            <Image
              src={botLogos[bot.name] || '/Nothing%201%20logo.png'}
              alt={`${bot.name} logo`}
              fill
              sizes="42px"
              className="bot-avatar-image"
            />
          </span>
          <h3 className="bot-card-title">{bot.name}</h3>
        </div>
        <span 
          className="bot-type-badge"
          style={{ backgroundColor: typeColors[bot.type] || '#6b7280' }}
        >
          {bot.type}
        </span>
      </div>
      <p className="bot-role-line">{botRoles[bot.name] || 'Discord utility bot'}</p>
      <p className="bot-description">{bot.description}</p>

      <div className="bot-features">
        {bot.features.map((feature, index) => (
          <span key={index} className="bot-feature-tag">
            {feature}
          </span>
        ))}
      </div>

      <a 
        href={bot.inviteUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bot-invite-btn"
      >
        <span>Add to Discord</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </a>
    </div>
  );
}
