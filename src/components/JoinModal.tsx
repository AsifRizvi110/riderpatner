import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Building2, User } from 'lucide-react';
import { CompanyForm } from './CompanyForm';
import { WorkerForm } from './WorkerForm';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const handleSubmit = async (formData:any) => {
  try {
    await axios.post(
      "https://script.google.com/macros/s/AKfycbyA8YKwa-Wkx0whCeen-8ZkwiIU06jiuIWiACL684ZNonuHBdIprg0pLDmKPsL4iD51/exec",
      formData,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Data sent to Google Sheet ✅");

  } catch (err) {
    console.error(err);
    alert("Error sending data.");
  }
};

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JoinModal({ isOpen, onClose }: JoinModalProps) {
  const [type, setType] = useState<'company' | 'worker' | null>(null);
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-100 shrink-0">
              <h2 className="text-2xl font-bold text-slate-800">
                {type === 'company' ? t('modal.companyReg') : type === 'worker' ? t('modal.workerReg') : t('modal.joinNetwork')}
              </h2>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar">
              {!type ? (
                <div className="space-y-6">
                  <p className="text-slate-600 text-center mb-8">
                    {t('modal.selectType')}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      onClick={() => setType('company')}
                      className="flex flex-col items-center gap-4 p-8 border-2 border-slate-100 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all group"
                    >
                      <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Building2 className="w-8 h-8" />
                      </div>
                      <span className="text-xl font-semibold text-slate-800">1️⃣ {t('modal.company')}</span>
                    </button>
                    
                    <button
                      onClick={() => setType('worker')}
                      className="flex flex-col items-center gap-4 p-8 border-2 border-slate-100 rounded-2xl hover:border-indigo-500 hover:bg-indigo-50 transition-all group"
                    >
                      <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <User className="w-8 h-8" />
                      </div>
                      <span className="text-xl font-semibold text-slate-800">2️⃣ {t('modal.worker')}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <button
                    onClick={() => setType(null)}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium mb-6 flex items-center gap-1"
                  >
                    &larr; {t('modal.back')}
                  </button>
                  
                  {type === 'company' ? <CompanyForm onClose={onClose} /> : <WorkerForm onClose={onClose} />}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
