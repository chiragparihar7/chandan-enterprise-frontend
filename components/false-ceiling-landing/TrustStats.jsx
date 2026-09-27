import { trustPoints } from "./data";

export default function TrustStats() {
  return (
    <section className="border-b border-[#e5edf2] bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="grid md:grid-cols-4">
          {trustPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`
                  group flex items-start gap-4 py-6
                  sm:py-7
                  md:px-6
                  lg:px-7
                  ${
                    index !== trustPoints.length - 1
                      ? "border-b border-[#e8f0f5] md:border-b-0 md:border-r"
                      : ""
                  }
                `}
              >
                {/* Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#dcecf4] bg-[#f5fafc] text-[#015696] transition-colors duration-300 group-hover:border-[#b9d9e9] group-hover:bg-[#eff8fc]">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8a9aa6]">
                    {item.label}
                  </p>

                  <h2 className="mt-1 text-[15px] font-semibold leading-5 text-[#092a43]">
                    {item.value}
                  </h2>

                  <p className="mt-1 text-[12px] leading-5 text-[#64748b]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}