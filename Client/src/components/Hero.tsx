import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import heroImage from "../assets/analytics-reports.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(220,38,38,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(220,38,38,0.15),transparent_50%)]"></div>
      </div>

      <nav className="relative z-50 container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            }`}
          >
            <img src="/Roato.jpeg" alt="RESTO Premium" className="h-16 w-16 object-contain" />
          </div>

          <div
            className={`lg:flex hidden gap-8 items-center transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            <a href="#features" className="text-gray-300 hover:text-red-600 transition-colors duration-300">الميزات</a>
            <a href="#benefits" className="text-gray-300 hover:text-red-600 transition-colors duration-300">الفوائد</a>
            <a href="#faq" className="text-gray-300 hover:text-red-600 transition-colors duration-300">الأسئلة الشائعة</a>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-600/50">
              ابدأ الآن
            </button>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-black/80 backdrop-blur-md p-6 space-y-4 text-right mt-4 rounded-xl">
            <a href="#features" className="block text-gray-300 hover:text-red-600 transition">الميزات</a>
            <a href="#benefits" className="block text-gray-300 hover:text-red-600 transition">الفوائد</a>
            <a href="#faq" className="block text-gray-300 hover:text-red-600 transition">الأسئلة الشائعة</a>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition">
              ابدأ الآن
            </button>
          </div>
        )}
      </nav>

      <div className="relative z-10 container mx-auto px-6 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-right space-y-8">
            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
            >
              <h1 className="text-[3.3rem] md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white mb-2">أدِر مطعمك</span>
                <span className="block text-red-600">بذكاء واحترافية</span>
              </h1>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
            >
              <p className="text-xl text-gray-300 leading-relaxed">
                نظام RESTO المتكامل يمنحك السيطرة الكاملة على جميع عمليات مطعمك - من إدارة الطلبات إلى التقارير التفصيلية، كل ما تحتاجه في مكان واحد
              </p>
            </div>

            <div
              className={`flex gap-4 justify-start transform transition-all duration-1000 delay-900 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
            >
              <button className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-red-600/50 hover:shadow-red-600/70">
                جرّب مجاناً
                <span className="inline-block group-hover:translate-x-[-5px] transition-transform duration-300">←</span>
              </button>
              <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
                شاهد العرض التوضيحي
              </button>
            </div>

            <div
              className={`flex gap-12 justify-start transform transition-all duration-1000 delay-1100 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600">230+</div>
                <div className="text-gray-400 mt-1">مطعم يثق بنا</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600">99.9%</div>
                <div className="text-gray-400 mt-1">وقت التشغيل</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600">24/7</div>
                <div className="text-gray-400 mt-1">دعم فني</div>
              </div>
            </div>
          </div>

          <div
            className={`relative transform transition-all duration-1000 delay-700 ${
              isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-transparent rounded-3xl blur-3xl"></div>
            <img
              src={heroImage}
              alt="RESTO System Dashboard"
              className="relative z-10 w-[120%] max-w-none translate-x-5 h-[420px] rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-red-600" />
      </div>
    </div>
  );
};

export default Hero;
