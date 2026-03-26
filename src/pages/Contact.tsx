import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { SEO } from '@/components/SEO';
import { MapPin, Mail, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

export function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const { t } = useTranslation();

  const onSubmit = async (data: any) => {
  try {
    await emailjs.send(
      'service_n7oyy0k',
      'template_x5nyg3l',
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      'IveXZ-Jq2g8-lO7Up'
    );

    alert('Message sent successfully!');
    reset();
  } catch (error) {
    console.error(error);
    alert('Failed to send message');
  }
};

  return (
    <>
      <SEO 
        title={t('nav.contact')} 
        description={t('contact.subtitle')} 
      />
      
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {t('contact.title1')}<span className="text-transparent bg-clip-text 'bg-gradient-to-r' from-blue-400 to-indigo-400">{t('contact.title2')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 leading-relaxed"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('contact.getInTouch')}</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {t('contact.getInTouchDesc')}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <User className="w-6 h-6" />                   
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{t('contact.owner')}</h3> 
                    <div className="companylogo"> <img src="src/images/falshmessage.png" alt="" className="w-10 h-10 mt-0.5" />  <p className="text-slate-600">Flash Message Company</p> </div>
                   
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{t('contact.location')}</h3>
                    <p className="text-slate-600">Lisbon, Portugal</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{t('contact.email')}</h3>
                    <p className="text-slate-600">contact@ridepartner.pt</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{t('contact.sendMessage')}</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.nameLabel')}</label>
                  <input 
                    {...register('name', { required: true })} 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" 
                    placeholder={t('contact.namePlaceholder')} 
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1">Name is required</span>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.emailLabel')}</label>
                  <input 
                    type="email" 
                    {...register('email', { required: true })} 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" 
                    placeholder={t('contact.emailPlaceholder')} 
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1">Email is required</span>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.msgLabel')}</label>
                  <textarea 
                    {...register('message', { required: true })} 
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none" 
                    placeholder={t('contact.msgPlaceholder')} 
                  />
                  {errors.message && <span className="text-red-500 text-xs mt-1">Message is required</span>}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full py-4 bg-linear-to-tr from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed text-lg"
                >
                  {isSubmitting ? t('contact.btnSending') : t('contact.btnSend')}
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
