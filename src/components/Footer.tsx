import { Link } from 'react-router-dom';
import { Navigation, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Phone } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-linear-to-tr from-blue-600 to-indigo-600 p-2 rounded-xl text-white">
                <Navigation className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Ride<span className="text-blue-500">Partner</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-xs">
              {t('footer.desc')}
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.contactInfo')}</h3>
            <ul className="space-y-3 text-sm">
              
              <li className="flex items-center gap-2">
                
                <span className="font-medium text-slate-200">{t('contact.owner')}:</span><img src="src/images/falshmessage.png" alt="" className="w-10 h-10 mt-0.5" />Flash Message Company
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                <span>Lisbon, Portugal</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                <span>+923333120502</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-sm text-center text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} RidePartner. {t('footer.rights')}</p>
          <p>{t('footer.designed')}</p>
        </div>
      </div>
    </footer>
  );
}
