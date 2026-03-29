import FAQItem from '@/components/FAQItem';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';
import { FAQ_ITEMS, SITE_CONFIG } from '@/config/site';

export const metadata = {
  title: 'FAQ - ' + SITE_CONFIG.name,
  description: 'Frequently asked questions about Nothing Discord music bot',
};

export default function FAQPage() {
  return (
    <>
      <section className="section gradient-bg container-main">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about Nothing"
        />
      </section>

      <section className="section container-main max-w-3xl mx-auto">
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="section section-alt container-main">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-4">Still Have Questions?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Can't find what you're looking for? Get in touch with our support team or join our Discord community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Contact Support
            </Button>
            <Button href={SITE_CONFIG.links.discord} target="_blank" variant="outline" size="lg">
              Join Discord
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
