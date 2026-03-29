import SectionHeader from '@/components/SectionHeader';
import Alert from '@/components/Alert';
import Button from '@/components/Button';
import { SITE_CONFIG } from '@/config/site';

export const metadata = {
  title: 'Documentation - ' + SITE_CONFIG.name,
  description: 'Complete documentation for Nothing Discord music bot',
};

export default function DocsPage() {
  return (
    <>
      <section className="section gradient-bg container-main">
        <SectionHeader title="Documentation" subtitle="Complete guide to setting up and using Nothing" />
      </section>

      <section className="section container-main max-w-4xl mx-auto">
        {/* Getting Started */}
        <div className="mb-12">
          <h2 className="mb-6">🚀 Getting Started</h2>

          <div className="space-y-6">
            <div className="card">
              <h3 className="mb-3">1. Invite the Bot</h3>
              <p className="text-slate-400 mb-4">
                Start by inviting Nothing to your Discord server. Click the button below to authorize the bot with the
                necessary permissions.
              </p>
              <Button href={SITE_CONFIG.bot.inviteUrl} target="_blank" variant="primary">
                Add to Discord
              </Button>
            </div>

            <div className="card">
              <h3 className="mb-3">2. Connect to Voice Channel</h3>
              <p className="text-slate-400">
                Join a voice channel and use the <code className="bg-slate-900 px-2 py-1 rounded">!join</code> command
                or start playing music with <code className="bg-slate-900 px-2 py-1 rounded">!play song name</code>.
              </p>
            </div>

            <div className="card">
              <h3 className="mb-3">3. Start Playing</h3>
              <p className="text-slate-400">
                Use commands like <code className="bg-slate-900 px-2 py-1 rounded">!play</code>,{' '}
                <code className="bg-slate-900 px-2 py-1 rounded">!skip</code>, and{' '}
                <code className="bg-slate-900 px-2 py-1 rounded">!queue</code> to manage your music.
              </p>
            </div>
          </div>
        </div>

        {/* Configuration */}
        <div className="mb-12">
          <h2 className="mb-6">⚙️ Configuration</h2>

          <div className="space-y-6">
            <div className="card">
              <h3 className="mb-3">Bot Prefix</h3>
              <p className="text-slate-400 mb-2">Default prefix: <code className="bg-slate-900 px-2 py-1 rounded">{SITE_CONFIG.bot.prefix}</code></p>
              <p className="text-slate-400 text-sm">
                Power users and server admins can configure a custom prefix for their server using admin commands.
              </p>
            </div>

            <div className="card">
              <h3 className="mb-3">Permissions</h3>
              <p className="text-slate-400 mb-3">Nothing requires these Discord permissions:</p>
              <ul className="list-disc list-inside text-slate-400 space-y-1 text-sm">
                <li>Send Messages</li>
                <li>Embed Links</li>
                <li>Connect (to voice channels)</li>
                <li>Speak (in voice channels)</li>
                <li>Manage Messages</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Guide */}
        <div className="mb-12">
          <h2 className="mb-6">✨ Features Guide</h2>

          <div className="space-y-6">
            <div className="card">
              <h3 className="mb-3">Playlist Management</h3>
              <p className="text-slate-400">
                Create and manage playlists with <code className="bg-slate-900 px-2 py-1 rounded">!playlist</code>{' '}
                commands. Share playlists with your server community or keep them private.
              </p>
            </div>

            <div className="card">
              <h3 className="mb-3">Queue Control</h3>
              <p className="text-slate-400">
                Use queue commands to see upcoming songs, move tracks around, or remove songs using{' '}
                <code className="bg-slate-900 px-2 py-1 rounded">!queue</code>,{' '}
                <code className="bg-slate-900 px-2 py-1 rounded">!move</code>, and{' '}
                <code className="bg-slate-900 px-2 py-1 rounded">!remove</code>.
              </p>
            </div>

            <div className="card">
              <h3 className="mb-3">AI Recommendations</h3>
              <p className="text-slate-400">
                Get smart music recommendations based on what you're currently playing. Use{' '}
                <code className="bg-slate-900 px-2 py-1 rounded">!recommend</code> to discover new music.
              </p>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="mb-12">
          <h2 className="mb-6">🔧 Troubleshooting</h2>

          <Alert type="warning" title="Bot Not Playing Audio?">
            Make sure the bot is in the same voice channel as you, and check that it has permission to speak in that
            channel.
          </Alert>

          <Alert type="info" title="Command Not Working?" className="mt-4">
            Some commands require specific permissions. Check that you have the necessary Discord permissions and that
            the bot has not been restricted by your server admin.
          </Alert>
        </div>

        {/* Support */}
        <div className="card bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-600/50">
          <h3 className="mb-3">Need More Help?</h3>
          <p className="text-slate-400 mb-4">
            If you're still having issues, join our Discord support server or check out the FAQ page.
          </p>
          <div className="flex gap-3">
            <Button href={SITE_CONFIG.links.discord} target="_blank" variant="primary">
              Join Support Server
            </Button>
            <Button href="/faq" variant="outline">
              View FAQ
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
