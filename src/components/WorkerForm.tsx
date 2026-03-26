import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import React from 'react';

interface WorkerFormProps {
  onClose: () => void;
}

interface WorkerFormData {
  name: string;
  surname: string;
  email: string;
  mobile: string;
  whatsapp: string;
  nif: string;
  address: string;
  idType: string;
  idNumber: string;
  iban: string;
  fleet: string[];
  selfEmployed: string;
  principalCae: string;
  secondaryCae?: string;
}


export function WorkerForm({ onClose }: WorkerFormProps) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<WorkerFormData>();
  const { t } = useTranslation();

   const onSubmit = async (data: any) => {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwaPXyCswE6OfHYZm2mbMKEbJ1jM9fTE1J0TkARHtSz2iEd21-OVXt9QufHRboyDq623w/exec", {
      method: "POST",
      mode: "no-cors", // 👈 IMPORTANT
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    // ⚠️ no-cors me response read nahi hota
    alert("Form submitted successfully!");
    onClose();

  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong");
  }
};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{t('form.name')}</label>
          <input name="Name" {...register('name', { required: true })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder={t('form.namePlaceholder')} />
          {errors.name && <span className="text-red-500 text-xs mt-1">{t('form.required')}</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{t('form.surname')}</label>
          <input name="Surname" {...register('surname', { required: true })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder={t('form.surnamePlaceholder')} />
          {errors.surname && <span className="text-red-500 text-xs mt-1">{t('form.required')}</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{t('form.email')}</label>
          <input name = "Email" type="email" {...register('email', { required: true })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder={t('form.emailPlaceholder')} />
          {errors.email && <span className="text-red-500 text-xs mt-1">{t('form.required')}</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{t('form.mobile')}</label>
          <input name="Mobile" type="tel" {...register('mobile', { required: true })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder={t('form.mobilePlaceholder')} />
          {errors.mobile && <span className="text-red-500 text-xs mt-1">{t('form.required')}</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{t('form.whatsapp')}</label>
          <input name="WhatsApp" type="tel" {...register('whatsapp', { required: true })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder={t('form.whatsappPlaceholder')} />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{t('form.nif')}</label>
          <input name="NIF" {...register('nif', { required: true })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder={t('form.nifPlaceholder')} />
          {errors.nif && <span className="text-red-500 text-xs mt-1">{t('form.required')}</span>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">{t('form.address')}</label>
        <input name="Address" {...register('address', { required: true })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder={t('form.addressPlaceholder')} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{t('form.idType')}</label>
          <select name="IDType" {...register('idType', { required: true })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white">
            <option value="">{t('form.idTypeSelect')}</option>
            <option value="Passport">{t('form.passport')}</option>
            <option value="Residence Card">{t('form.residenceCard')}</option>
            <option value="Cartão de Cidadão">{t('form.cartaoCidadao')}</option>
          </select>
          {errors.idType && <span className="text-red-500 text-xs mt-1">{t('form.required')}</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{t('form.idNumber')}</label>
          <input name="IDNumber" {...register('idNumber', { required: true })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder={t('form.idNumberPlaceholder')} />
          {errors.idNumber && <span className="text-red-500 text-xs mt-1">{t('form.required')}</span>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">{t('form.iban')}</label>
        <input name="IBN" {...register('iban', { required: true })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder={t('form.ibanPlaceholder')} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">{t('form.fleet')}</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input name="UberEats" type="checkbox" value="Uber Eats" {...register('fleet')} className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500" />
              <span className="text-sm text-slate-700">Uber Eats</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input name="UberDriver" type="checkbox" value="Uber Drive" {...register('fleet')} className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500" />
              <span className="text-sm text-slate-700">Uber Drive</span>
            </label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">{t('form.selfEmployed')}</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input name="" type="radio" value="Yes" {...register('selfEmployed', { required: true })} className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" />
              <span className="text-sm text-slate-700">{t('form.yes')}</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" value="No" {...register('selfEmployed', { required: true })} className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" />
              <span className="text-sm text-slate-700">{t('form.no')}</span>
            </label>
          </div>
          {errors.selfEmployed && <span className="text-red-500 text-xs mt-1 block">{t('form.required')}</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{t('form.principalCae')}</label>
          <input {...register('principalCae', { required: true })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder={t('form.principalCaePlaceholder')} />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{t('form.secondaryCae')}</label>
          <input {...register('secondaryCae')} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder={t('form.secondaryCaePlaceholder')} />
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
        type="submit"
        className="w-full py-3.5 mt-4 bg-linear-to-tr from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? t('form.submitting') : t('form.submit')}
      </motion.button>
    </form>
  );
}
