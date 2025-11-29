import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-red-600/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/5 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src="/Roato.jpeg" alt="RESTO Premium" className="h-20 w-20 object-contain mb-6" />
            <p className="text-gray-300 leading-relaxed mb-6">
              نظام RESTO - الحل الأمثل لإدارة المطاعم بذكاء واحترافية
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-red-600/10 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <Facebook className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600/10 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600/10 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <Instagram className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">روابط سريعة</h3>
            <ul className="space-y-3 text-right">
              <li><a href="#features" className="text-gray-300 hover:text-red-600 transition-colors duration-300">الميزات</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-red-600 transition-colors duration-300">الفوائد</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-red-600 transition-colors duration-300">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-600 transition-colors duration-300">الأسعار</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">الدعم</h3>
            <ul className="space-y-3 text-right">
              <li><a href="#" className="text-gray-300 hover:text-red-600 transition-colors duration-300">مركز المساعدة</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-600 transition-colors duration-300">الوثائق التقنية</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-600 transition-colors duration-300">تواصل معنا</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-600 transition-colors duration-300">الشروط والأحكام</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">تواصل معنا</h3>
            <ul className="space-y-4 text-right">
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>info@resto.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>+201203934289</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>القاهرة مصر</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-600/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-right">
            <p className="text-gray-400">
              © 2025 RESTO. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">سياسة الخصوصية</a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">شروط الاستخدام</a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
    </footer>
  );
};

export default Footer;
