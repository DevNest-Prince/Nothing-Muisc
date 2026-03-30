'use client';

import { COMMANDS, SITE_CONFIG } from '@/config/site';
import CommandCard from '@/components/CommandCard';
import { useState, useMemo } from 'react';

export default function CommandsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...new Set(COMMANDS.map((cmd) => cmd.category))];

  const filteredCommands = useMemo(() => {
    return COMMANDS.filter((cmd) => {
      const matchesCategory = selectedCategory === 'All' || cmd.category === selectedCategory;
      const searchableText = [cmd.name, cmd.description, cmd.usage, ...(cmd.aliases || [])]
        .join(' ')
        .toLowerCase();
      const matchesSearch = searchableText.includes(searchTerm.toLowerCase().trim());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const commandsCount = COMMANDS.length;
  const categoryCount = categories.length - 1;

  return (
    <div className="commands-page">
      <section className="commands-hero container-main">
        <div className="commands-hero-panel animate-fade-in">
          <span className="commands-kicker">Nothing Bot Manual</span>
          <h1>Commands Reference</h1>
          <p>Fast search, clean categories, and every command format in one place.</p>

          <div className="commands-hero-stats">
            <div className="commands-stat-chip">
              <strong>{commandsCount}</strong>
              <span>Total Commands</span>
            </div>
            <div className="commands-stat-chip">
              <strong>{categoryCount}</strong>
              <span>Categories</span>
            </div>
            <div className="commands-stat-chip">
              <strong>{SITE_CONFIG.bot.prefix}</strong>
              <span>Default Prefix</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container-main commands-content">
        <div className="commands-toolbar animate-slide-in" suppressHydrationWarning>
          <div>
            <h2>Browse by Category</h2>
            <p>Pick a section or search by command, alias, or usage syntax.</p>
          </div>

          <label className="commands-search-wrap" htmlFor="command-search">
            <input
              id="command-search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search: play, queue, volume..."
              className="commands-search"
              suppressHydrationWarning
            />
          </label>

          <div className="commands-filter-row" suppressHydrationWarning>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`commands-filter-pill ${selectedCategory === category ? 'commands-filter-pill-active' : ''}`}
                suppressHydrationWarning
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="commands-results-meta">
          Showing <strong>{filteredCommands.length}</strong> of <strong>{commandsCount}</strong> commands
        </div>

        <div className="commands-grid">
          {filteredCommands.map((command, index) => (
            <CommandCard key={command.name} command={command} index={index} />
          ))}
        </div>

        {filteredCommands.length === 0 && (
          <div className="commands-empty-state">
            <h3>No commands matched</h3>
            <p>Try another category or a shorter keyword.</p>
          </div>
        )}
      </section>

      <section className="container-main commands-help">
        <div className="commands-help-panel">
          <div className="commands-help-title">
            <span className="commands-kicker">Need Help?</span>
            <h2>How to Use Commands</h2>
          </div>

          <div className="commands-help-grid">
            <div className="commands-help-card">
              <h3>Syntax</h3>
              <p>All commands follow this format:</p>
              <code>{SITE_CONFIG.bot.prefix}command [options] [arguments]</code>
            </div>

            <div className="commands-help-card">
              <h3>Aliases</h3>
              <p>
                Use short versions to type faster, like <code>{SITE_CONFIG.bot.prefix}p song name</code> for{' '}
                <code>{SITE_CONFIG.bot.prefix}play song name</code>.
              </p>
            </div>

            <div className="commands-help-card">
              <h3>Permissions</h3>
              <p>Some actions require role permissions. Ask your server admin if a command does not run.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

