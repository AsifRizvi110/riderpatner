import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
// import { ShieldCheck } from 'your-icon-library'; // agar needed ho
import { ChangeEvent } from 'react';

interface CompanyFormProps {
  onClose: () => void;
}

export function CompanyForm({ onClose }: CompanyFormProps) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const { t } = useTranslation();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

 const onSubmit = async (data: any) => {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbx49Adp1ot8rGHePGkmgNm0XIRuOrShBBkjZ-WtLUvgQv_gOamr-zWIohcBO0f5edz7bQ/exec", {
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


  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    setImagePreview(URL.createObjectURL(file));
  } else {
    setImagePreview(null);
  }
};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

      {/* ================= Company Image Upload ================= */}
      {/* <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">{t('form.companyImage')}</label>
        
        {imagePreview && (
          <img 
            src={imagePreview} 
            alt="Company Preview" 
            className="w-32 h-32 object-cover rounded-xl mb-3 border border-slate-200" 
          />
        )}

        <input
          type="file"
          accept="image/*"
          {...register('companyImage')}
          onChange={handleImageChange}
          className="w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-500 transition-all"
        />
      </div> */}

      {/* ================= Name & Company Name ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{t('form.name')}</label>
          <input {...register('name', { required: true })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder={t('form.namePlaceholder')} />
          {errors.name && <span className="text-red-500 text-xs mt-1">{t('form.required')}</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{t('form.companyName')}</label>
          <input {...register('companyName', { required: true })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder={t('form.companyNamePlaceholder')} />
          {errors.companyName && <span className="text-red-500 text-xs mt-1">{t('form.required')}</span>}
        </div>
      </div>

      {/* ================= Email & Mobile ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{t('form.email')}</label>
          <input type="email" {...register('email', { required: true })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder={t('form.emailPlaceholder')} />
          {errors.email && <span className="text-red-500 text-xs mt-1">{t('form.required')}</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{t('form.mobile')}</label>
          <input type="tel" {...register('mobile', { required: true })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder={t('form.mobilePlaceholder')} />
          {errors.mobile && <span className="text-red-500 text-xs mt-1">{t('form.required')}</span>}
        </div>
      </div>

      {/* ================= WhatsApp & NIF ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{t('form.whatsapp')}</label>
          <input type="tel" {...register('whatsapp', { required: true })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder={t('form.whatsappPlaceholder')} />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{t('form.nif')}</label>
          <input {...register('nif', { required: true })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder={t('form.nifPlaceholder')} />
          {errors.nif && <span className="text-red-500 text-xs mt-1">{t('form.required')}</span>}
        </div>
      </div>

      {/* ================= Address ================= */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">{t('form.address')}</label>
        <input {...register('address', { required: true })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder={t('form.addressPlaceholder')} />
      </div>

      {/* ================= ID Type & Number ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{t('form.idType')}</label>
          <select {...register('idType', { required: true })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white">
            <option value="">{t('form.idTypeSelect')}</option>
            <option value="Passport">{t('form.passport')}</option>
            <option value="Residence Card">{t('form.residenceCard')}</option>
            <option value="Cartão de Cidadão">{t('form.cartaoCidadao')}</option>
          </select>
          {errors.idType && <span className="text-red-500 text-xs mt-1">{t('form.required')}</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{t('form.idNumber')}</label>
          <input {...register('idNumber', { required: true })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder={t('form.idNumberPlaceholder')} />
          {errors.idNumber && <span className="text-red-500 text-xs mt-1">{t('form.required')}</span>}
        </div>
      </div>

      {/* ================= IBAN ================= */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">{t('form.iban')}</label>
        <input {...register('iban', { required: true })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder={t('form.ibanPlaceholder')} />
      </div>

      {/* ================= Fleet & Self-Employed ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">{t('form.fleet')}</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" value="Uber Eats" {...register('fleet')} className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
              <span className="text-sm text-slate-700">Uber Eats</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" value="Uber Drive" {...register('fleet')} className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
              <span className="text-sm text-slate-700">Uber Drive</span>
            </label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">{t('form.selfEmployed')}</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" value="Yes" {...register('selfEmployed', { required: true })} className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500" />
              <span className="text-sm text-slate-700">{t('form.yes')}</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" value="No" {...register('selfEmployed', { required: true })} className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500" />
              <span className="text-sm text-slate-700">{t('form.no')}</span>
            </label>
          </div>
          {errors.selfEmployed && <span className="text-red-500 text-xs mt-1 block">{t('form.required')}</span>}
        </div>
      </div>

      {/* ================= Principal & Secondary CAE ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{t('form.principalCae')}</label>
          <input {...register('principalCae', { required: true })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder={t('form.principalCaePlaceholder')} />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{t('form.secondaryCae')}</label>
          <input {...register('secondaryCae')} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder={t('form.secondaryCaePlaceholder')} />
        </div>
      </div>

      {/* ================= Submit Button ================= */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
        type="submit"
        className="w-full py-3.5 mt-4 bg-linear-to-tr from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? t('form.submitting') : t('form.submit')}
      </motion.button>
    </form>
  );
}