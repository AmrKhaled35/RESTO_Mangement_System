import { useEffect, useRef, useState } from "react";
import { ShoppingCart, Grid3x3, Package, BarChart3 } from "lucide-react";
import orderManagementImg from "../assets/order-management.jpg";
import tableManagementImg from "../assets/table-management.jpg";
import inventoryManagementImg from "../assets/inventory-management.jpg";
import analyticsReportsImg from "../assets/analytics-reports.jpg";

const features = [
  {
    icon: ShoppingCart,
    title: "إدارة الطلبات",
    description:
      "نظام متكامل لإدارة الطلبات من لحظة استلامها حتى التسليم. تتبع الطلبات بشكل لحظي، إدارة الطوابير بذكاء، وتنسيق مثالي بين المطبخ وصالة الطعام.",
    image: orderManagementImg,
  },
  {
    icon: Grid3x3,
    title: "إدارة الطاولات",
    description:
      "تحكم كامل في ترتيب الطاولات وحجوزاتها. عرض تفاعلي لمخطط المطعم، إدارة الحجوزات المسبقة، ومتابعة حالة كل طاولة في الوقت الفعلي.",
    image: tableManagementImg,
  },
  {
    icon: Package,
    title: "إدارة المخزون",
    description:
      "راقب مخزونك بدقة وتحكم في المواد الأولية. تنبيهات تلقائية عند انخفاض المخزون، تتبع تواريخ الصلاحية، وإدارة علاقات الموردين بكفاءة.",
    image: inventoryManagementImg,
  },
  {
    icon: BarChart3,
    title: "تقارير وتحليلات",
    description:
      "احصل على رؤى عميقة حول أداء مطعمك. تقارير مفصلة عن المبيعات، تحليل الأطباق الأكثر طلباً، ورسوم بيانية تفاعلية لاتخاذ قرارات مدروسة.",
    image: analyticsReportsImg,
  },
];

const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

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

  const Icon = feature.icon;

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-12 items-center py-20 transform transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      {isEven ? (
        <>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <img
              src={feature.image}
              alt={feature.title}
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="text-right space-y-6">
            <div className="inline-block p-4 bg-red-600/10 rounded-2xl border border-red-600/20">
              <Icon className="w-12 h-12 text-red-600" />
            </div>
            <h3 className="text-4xl font-bold text-white">{feature.title}</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              {feature.description}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="text-right space-y-6">
            <div className="inline-block p-4 bg-red-600/10 rounded-2xl border border-red-600/20">
              <Icon className="w-12 h-12 text-red-600" />
            </div>
            <h3 className="text-4xl font-bold text-white">{feature.title}</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              {feature.description}
            </p>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <img
              src={feature.image}
              alt={feature.title}
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </>
      )}
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <div className="mb-6">ميزات تجعل إدارة مطعمك</div>
            <div className="text-red-600">أسهل من أي وقت مضى</div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            كل ما تحتاجه لإدارة مطعم ناجح في منصة واحدة متكاملة
          </p>
        </div>
        <div className="space-y-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
