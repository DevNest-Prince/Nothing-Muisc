import { FiDisc } from 'react-icons/fi';

export default function Loading() {
  return (
    <div className="app-loading">
      <div className="app-loading-shell">
        <div className="app-loading-spinner" aria-hidden="true">
          <span className="app-loading-ring" />
          <span className="app-loading-ring app-loading-ring-alt" />
          <span className="app-loading-core">
            <FiDisc />
          </span>
        </div>

        <div className="app-loading-copy">
          <p className="app-loading-title">Loading</p>
          <p className="app-loading-subtitle">Preparing your music experience...</p>
          <span className="app-loading-dots" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

