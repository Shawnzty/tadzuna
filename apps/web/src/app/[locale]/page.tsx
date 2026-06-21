import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

const PRINCIPLES = ['custom', 'owned', 'delivered'] as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');

  return (
    <div>
      {/* Hero — company tagline */}
      <section className="px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance text-ink dark:text-gray-50"
            style={{ fontFamily: 'var(--font-quicksand), sans-serif' }}
          >
            {t('tagline')}
          </h1>
          <span
            className="mt-7 mx-auto block h-1 w-16 rounded-full bg-leather"
            aria-hidden="true"
          />
          <p className="mt-8 mx-auto max-w-2xl text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            {t('intro')}
          </p>
          <div className="mt-10">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center rounded-xl bg-leather px-7 py-3.5 text-sm font-medium text-[#FBF4EC] transition-opacity hover:opacity-90"
            >
              {t('cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="border-t border-gray-200 px-6 py-20 dark:border-gray-800">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold tracking-tight text-balance text-ink dark:text-gray-100"
            style={{ fontFamily: 'var(--font-quicksand), sans-serif' }}
          >
            {t('beliefTitle')}
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            {t('beliefBody')}
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-gray-200 px-6 py-20 dark:border-gray-800">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-3">
          {PRINCIPLES.map((key) => (
            <div key={key}>
              <h3
                className="mb-2 font-semibold text-ink dark:text-gray-100"
                style={{ fontFamily: 'var(--font-quicksand), sans-serif' }}
              >
                {t(`principles.${key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {t(`principles.${key}.body`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-gray-200 px-6 py-24 text-center dark:border-gray-800">
        <h2
          className="mb-8 text-2xl sm:text-3xl font-bold tracking-tight text-balance text-ink dark:text-gray-100"
          style={{ fontFamily: 'var(--font-quicksand), sans-serif' }}
        >
          {t('closingTitle')}
        </h2>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center rounded-xl bg-leather px-7 py-3.5 text-sm font-medium text-[#FBF4EC] transition-opacity hover:opacity-90"
        >
          {t('closingCta')}
        </Link>
      </section>
    </div>
  );
}
