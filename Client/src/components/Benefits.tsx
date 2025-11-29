import { useEffect, useRef, useState } from 'react';
import { Zap, TrendingUp, Shield, Clock, Users, Award } from 'lucide-react';
// import img from '../assets/table-management.jpg';

const benefits = [
  {
    icon: Zap,
    title: 'زيادة الكفاءة',
    description: 'قلل وقت معالجة الطلبات بنسبة 40% واجعل فريقك أكثر إنتاجية',
  },
  {
    icon: TrendingUp,
    title: 'نمو الأرباح',
    description: 'زيادة متوسطة في الإيرادات بنسبة 25% خلال الأشهر الثلاثة الأولى',
  },
  {
    icon: Shield,
    title: 'أمان البيانات',
    description: 'حماية من الدرجة العسكرية لبيانات عملك مع نسخ احتياطي تلقائي',
  },
  {
    icon: Clock,
    title: 'توفير الوقت',
    description: 'وفّر ساعات يومياً من العمل الإداري واستثمرها في تطوير مطعمك',
  },
  {
    icon: Users,
    title: 'تحسين تجربة العملاء',
    description: 'خدمة أسرع وأكثر دقة تعني عملاء أكثر رضا وولاء',
  },
  {
    icon: Award,
    title: 'احترافية مطلقة',
    description: 'اكتسب سمعة احترافية وتميّز عن منافسيك بنظام متطور',
  },
];

const BenefitCard = ({ benefit, index }: { benefit: typeof benefits[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const Icon = benefit.icon;

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
    <div
      ref={ref}
      className={`group transform transition-all duration-700 delay-[${index * 100}ms] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="relative h-full bg-gradient-to-br from-gray-900 to-black border border-red-600/20 rounded-2xl p-8 hover:border-red-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/20 hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

        <div className="relative z-10">
          <div className="inline-block p-4 bg-red-600/10 rounded-2xl mb-6 group-hover:bg-red-600 transition-all duration-300">
            <Icon className="w-10 h-10 text-red-600 group-hover:text-white transition-colors duration-300" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
          <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
        </div>

        <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl group-hover:bg-red-600/20 transition-all duration-500"></div>
      </div>
    </div>
  );
};

const Benefits = () => {
  return (
    <section id="benefits" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black">
        {/* <div className="absolute inset-0 bg-[url('/image.png')] opacity-5 bg-cover bg-center"></div> */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            ماذا سيقدم
            <span className="block mt-2 bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent">
              RESTO لمطعمك؟
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            اكتشف كيف يمكن لنظام RESTO أن يُحدث فرقاً حقيقياً في أداء مطعمك وأرباحك
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-gradient-to-br from-gray-900 to-black border border-red-600/30 rounded-3xl p-12 text-center">
            <h3 className="text-4xl font-bold text-white mb-6">
              جاهز لتحويل مطعمك؟
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              انضم إلى مئات المطاعم التي تثق في RESTO لإدارة أعمالها بنجاح
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-red-600/50">
                ابدأ التجربة المجانية الآن
              </button>
              <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-10 py-5 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
                تحدث مع فريق المبيعات
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
