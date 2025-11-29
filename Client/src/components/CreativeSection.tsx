import { useEffect, useRef, useState } from "react";
// import { Sparkles, Rocket, Target } from 'lucide-react';

const CreativeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-600/20 to-black"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <img
            src="/Roato.jpeg"
            alt="Background"
            className="w-full h-full object-cover opacity-10 blur-sm"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div
          className={`max-w-5xl mx-auto transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              صُمم خصيصاً
              <span className="block mt-2 bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent">
                لنجاح مطعمك
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              نظام RESTO ليس مجرد برنامج إدارة - إنه شريكك في النجاح والتطور
            </p>
          </div>

          {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-black/50 backdrop-blur-sm border border-red-600/30 rounded-2xl p-8 group-hover:border-red-600/50 transition-all duration-500 group-hover:transform group-hover:scale-105">
                <div className="inline-block p-4 bg-red-600/10 rounded-xl mb-4 group-hover:bg-red-600 transition-all duration-300">
                  <Rocket className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">إطلاق سريع</h3>
                <p className="text-gray-300">ابدأ استخدام النظام في أقل من 24 ساعة بدون تعقيدات</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-black/50 backdrop-blur-sm border border-red-600/30 rounded-2xl p-8 group-hover:border-red-600/50 transition-all duration-500 group-hover:transform group-hover:scale-105">
                <div className="inline-block p-4 bg-red-600/10 rounded-xl mb-4 group-hover:bg-red-600 transition-all duration-300">
                  <Target className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">دقة عالية</h3>
                <p className="text-gray-300">تتبع دقيق لكل عملية مع تقارير مفصلة ولحظية</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-black/50 backdrop-blur-sm border border-red-600/30 rounded-2xl p-8 group-hover:border-red-600/50 transition-all duration-500 group-hover:transform group-hover:scale-105">
                <div className="inline-block p-4 bg-red-600/10 rounded-xl mb-4 group-hover:bg-red-600 transition-all duration-300">
                  <Sparkles className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">تحديثات مستمرة</h3>
                <p className="text-gray-300">ميزات جديدة وتحسينات دورية بدون تكلفة إضافية</p>
              </div>
            </div>
          </div> */}

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-red-500/20 to-red-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative overflow-hidden rounded-3xl border border-red-600/30">
              <img
                src="/image.png"
                alt="RESTO System Dashboard"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <p className="text-2xl font-bold text-white mb-2">
                  تجربة مستخدم سلسة ومتطورة
                </p>
                <p className="text-gray-300">
                  واجهة عربية بالكامل، سهلة الاستخدام لجميع أفراد فريقك
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 right-10 w-72 h-72 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-red-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default CreativeSection;
