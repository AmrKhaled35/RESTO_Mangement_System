import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-red-600/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/5 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="/Roato.jpeg"
              alt="RESTO Premium"
              className="h-20 w-20 object-contain mb-6"
            />
            <p className="text-gray-300 leading-relaxed mb-6">
              نظام RESTO - الحل الأمثل لإدارة المطاعم بذكاء واحترافية
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/RestoPremium/"
                className="w-10 h-10 bg-red-600/10 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="https://www.tiktok.com/@resto_premium?_r=1&_t=ZS-91reCdXzj0M"
                className="w-10 h-10 bg-red-600/10 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.75 1c.13 1.07.64 1.97 1.44 2.63.66.55 1.5.88 2.41.94v2.2c-.88.08-1.73-.1-2.5-.47v5.26c0 2.87-2.4 5.11-5.35 4.92-2.6-.17-4.72-2.35-4.85-4.95-.15-2.98 2.27-5.44 5.21-5.44.31 0 .61.02.91.07v2.27c-.3-.1-.62-.15-.95-.14-1.52.05-2.74 1.33-2.69 2.87.05 1.49 1.28 2.7 2.77 2.75 1.56.05 2.84-1.21 2.84-2.74V1h1.76z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/resto_premium1/"
                className="w-10 h-10 bg-red-600/10 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">روابط سريعة</h3>
            <ul className="space-y-3 text-right">
              <li>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-red-600 transition-colors duration-300"
                >
                  الميزات
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-gray-300 hover:text-red-600 transition-colors duration-300"
                >
                  الفوائد
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-300 hover:text-red-600 transition-colors duration-300"
                >
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-600 transition-colors duration-300"
                >
                  الأسعار
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">الدعم</h3>
            <ul className="space-y-3 text-right">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-600 transition-colors duration-300"
                >
                  مركز المساعدة
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-600 transition-colors duration-300"
                >
                  الوثائق التقنية
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-600 transition-colors duration-300"
                >
                  تواصل معنا
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-600 transition-colors duration-300"
                >
                  الشروط والأحكام
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">تواصل معنا</h3>
            <ul className="space-y-4 text-right">
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>info@restopremium.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>970599346610+</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>رام الله - فلسطين</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-600/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-right">
            <p className="text-gray-400">© 2025 RESTO. جميع الحقوق محفوظة.</p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors duration-300"
              >
                سياسة الخصوصية
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors duration-300"
              >
                شروط الاستخدام
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
    </footer>
  );
};

export default Footer;
