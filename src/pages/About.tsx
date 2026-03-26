import { motion } from 'motion/react';
import { SEO } from '@/components/SEO';
import { Target, Eye, Users, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();

  const services = [
    t('about.s1'),
    t('about.s2'),
    t('about.s3'),
    t('about.s4'),
    t('about.s5'),
    t('about.s6'),
    t('about.s7'),
    t('about.s8')
  ];

  return (
    <>
      <SEO 
        title={t('nav.about')} 
        description={t('about.subtitle')} 
      />
      
      {/* Header */}     
      <section
  className="pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-900 text-white bg-no-repeat bg-cover bg-center"
  style={{ backgroundImage: "url('')" }}
>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {t('about.title1')}<span className="text-transparent bg-clip-text bg-linear-to-tr from-blue-400 to-indigo-400">{t('about.title2')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 leading-relaxed"
          >
            {t('about.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{t('about.whoTitle')}</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {t('about.whoDesc1')}
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                {t('about.whoDesc2')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800" 
                alt="Lisbon Cityscape" 
                className="rounded-3xl shadow-xl w-full object-cover aspect-4/3"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">{t('about.activePartners')}</p>
                    <p className="text-2xl font-bold text-slate-900">500+</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-blue-50 border border-blue-100"
            >
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('about.missionTitle')}</h3>
              <p className="text-slate-700 leading-relaxed">
                {t('about.missionDesc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-3xl bg-indigo-50 border border-indigo-100"
            >
              <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('about.visionTitle')}</h3>
              <p className="text-slate-700 leading-relaxed">
                {t('about.visionDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('about.servicesTitle')}</h2>
            <p className="text-slate-600 text-lg">{t('about.servicesSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-6 bg-white rounded-2xl shadow-sm border border-slate-100"
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                <span className="text-slate-700 font-medium">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
