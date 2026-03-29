'use client';

import { COMMANDS, SITE_CONFIG } from '@/config/site';
import CommandCard from '@/components/CommandCard';
import SectionHeader from '@/components/SectionHeader';
import { useState, useMemo } from 'react';

export default function CommandsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(COMMANDS.map((cmd) => cmd.category))];

  const filteredCommands = useMemo(() => {
    if (selectedCategory === 'All') return COMMANDS;
    return COMMANDS.filter((cmd) => cmd.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <section className="section gradient-bg container-main">
        <SectionHeader title="Commands Reference" subtitle="All available commands for Nothing bot" />
      </section>

      <section className="section container-main">
        {/* Category Filter */}
        <div className="mb-12">
          <h3 className="mb-4">Filter by Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/50'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Commands Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredCommands.map((command) => (
            <CommandCard key={command.name} command={command} />
          ))}
        </div>

        {filteredCommands.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">No commands found</p>
          </div>
        )}
      </section>

      {/* Command Help Section */}
      <section className="section section-alt container-main">
        <SectionHeader badge="❓ Need Help?" title="Using Commands" subtitle="Basic guidelines for using Nothing commands" />

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="card">
            <h3 className="mb-3">Command Syntax</h3>
            <p className="text-slate-400 mb-3">Commands follow this basic syntax:</p>
            <div className="bg-slate-900 rounded p-3 font-mono text-sm text-slate-300 break-all">
              {SITE_CONFIG.bot.prefix}command [options] [arguments]
            </div>
          </div>

          <div className="card">
            <h3 className="mb-3">Aliases</h3>
            <p className="text-slate-400">
              Most commands have shorter aliases for quick typing. For example, you can type{' '}
              <code className="bg-slate-900 px-2 py-1 rounded">!p song name</code> instead of{' '}
              <code className="bg-slate-900 px-2 py-1 rounded">!play song name</code>.
            </p>
          </div>

          <div className="card">
            <h3 className="mb-3">Permissions</h3>
            <p className="text-slate-400">
              Some commands require specific Discord permissions. Server administrators can configure which roles
              can use specific commands. Check with your server admin for permission details.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
