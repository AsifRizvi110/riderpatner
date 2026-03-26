import { useState } from 'react';
import { motion } from 'motion/react';
import { SEO } from '@/components/SEO';
import { JoinModal } from '@/components/JoinModal';
import { ArrowRight, Car, Bike, ShieldCheck, Clock, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  const features = [
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t('home.feature1Title'),
      description: t('home.feature1Desc')
    },
    {
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t('home.feature2Title'),
      description: t('home.feature2Desc')
    },
    {
      icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t('home.feature3Title'),
      description: t('home.feature3Desc')
    }
  ];

  return (
    <>
      <SEO title={t('nav.home')} description={t('home.subtitle')} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">

        {/* Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-linear-to-tr from-slate-900 via-slate-800/80 to-transparent z-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-full w-full gap-1 p-1">
            <img src="src/images/track.jpeg" className="w-full h-full object-cover rounded-xl" />
            <img src="src/images/driver.jpg" className="hidden sm:block w-full h-full object-cover rounded-xl" />
            <img src="src/images/rider1.jpg" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-blue-200 text-xs sm:text-sm mb-5 sm:mb-6">
                {t('home.recruiting')}
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-5 sm:mb-6">
                {t('home.title1')}
                <span className="bg-linear-to-tr from-blue-400 to-indigo-400 text-transparent bg-clip-text">
                  {t('home.title2')}
                </span>
                {t('home.title3')}
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-8 md:mb-10 max-w-2xl">
                {t('home.subtitle')}
              </p>

              {/* Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-tr from-blue-600 to-indigo-600 text-white font-semibold rounded-full flex items-center justify-center gap-2"
                >
                  {t('home.joinBtn')} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Card */}
      <div className="hidden md:block relative z-20 ml-40">
        <div className="absolute -top-12 md:-top-16 left-1/2 -translate-x-1/2 w-[92%] max-w-lg bg-white/80 backdrop-blur p-4 sm:p-5 rounded-2xl shadow-xl">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-bold">Secure & Trusted</h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  Your safety is our top priority
                </p>
              </div>
            </div>

            <button className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              {t('home.whyTitle')}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {t('home.whySubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition">
                <div className="mb-4 text-blue-600">{feature.icon}</div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
                {t('home.pathTitle')}
              </h2>

              <p className="text-sm sm:text-base text-gray-400 mb-8">
                {t('home.pathSubtitle')}
              </p>

              <div className="space-y-6">

                <div className="flex gap-4">
                  <Bike />
                  <div>
                    <h4 className="font-semibold">{t('home.eatsTitle')}</h4>
                    <p className="text-sm text-gray-400">{t('home.eatsDesc')}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Car />
                  <div>
                    <h4 className="font-semibold">{t('home.driveTitle')}</h4>
                    <p className="text-sm text-gray-400">{t('home.driveDesc')}</p>
                  </div>
                </div>

              </div>
            </div>

            <div>
              <img src="src/images/car.jpg" className="rounded-2xl w-full object-cover aspect-4/3" />
            </div>

          </div>

        </div>
      </section>

      <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}