import { useState } from "react";
import { Smartphone, Gift, Package, LineChart } from "lucide-react";

const faqs = [
  {
    question: "هل يمكن استخدام RESTO على الموبايل؟",
    answer:
      "نعم، نظام RESTO متوافق بالكامل مع جميع الأجهزة المحمولة. يمكنك إدارة مطعمك من أي مكان وفي أي وقت عبر الهاتف الذكي أو الجهاز اللوحي مع واجهة مستخدم مُحسّنة للشاشات الصغيرة.",
    icon: Smartphone,
  },
  {
    question: "هل هناك فترة تجريبية مجانية؟",
    answer:
      "بالتأكيد! نوفر فترة تجريبية مجانية . جرّب جميع الميزات واكتشف كيف يمكن لـ RESTO أن يحوّل طريقة إدارة مطعمك.",
    icon: Gift,
  },
  {
    question: "هل يدعم النظام إدارة المخازن والموردين؟",
    answer:
      "نعم تماماً! يتضمن RESTO نظام إدارة مخزون متكامل مع إمكانية تتبع المواد الأولية، إدارة العلاقات مع الموردين، إنشاء أوامر الشراء تلقائياً، وتنبيهات ذكية عند انخفاض المخزون.",
    icon: Package,
  },
  {
    question: "هل يقدم النظام تقارير وتحليلات مفصلة؟",
    answer:
      "نعم، يوفر RESTO لوحة تحكم تحليلية شاملة مع تقارير مفصلة عن المبيعات، أداء الموظفين، تحليل الأطباق الأكثر ربحية، وتتبع المصروفات. كل البيانات التي تحتاجها لاتخاذ قرارات ذكية.",
    icon: LineChart,
  },
];

const FAQ = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            الأسئلة الشائعة
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            إجابات سريعة على أكثر الأسئلة شيوعاً حول نظام RESTO
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isHovered = hoveredIndex === index;
            const isSelected = selectedIndex === index;

            return (
              <div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedIndex(isSelected ? null : index)}
              >
                <div
                  className={`relative bg-gradient-to-br from-gray-900 to-black border border-red-600/20 rounded-2xl p-8 transition-all duration-500 ${
                    isHovered || isSelected
                      ? "border-red-600/50 shadow-2xl shadow-red-600/20 scale-105"
                      : ""
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        isHovered || isSelected ? "bg-red-600" : "bg-red-600/10"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 transition-colors duration-300 ${
                          isHovered || isSelected
                            ? "text-white"
                            : "text-red-600"
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white flex-1 leading-relaxed">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isHovered || isSelected
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div
                      className={`pt-4 border-t border-red-600/20 transition-all duration-500 ${
                        isHovered || isSelected
                          ? "translate-y-0"
                          : "-translate-y-4"
                      }`}
                    >
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                  {!isHovered && !isSelected && (
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">لا تجد إجابة لسؤالك؟</p>
          <a
            href="https://wa.me/970599346610"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-600/50"
          >
            تواصل مع فريق الدعم
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
