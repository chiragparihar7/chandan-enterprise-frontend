import {
  ClipboardCheck,
  Droplets,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const trustItems = [
  {
    icon: ClipboardCheck,
    title: "Inspection-Focused",
    text: "Understand the leakage before selecting a solution.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-Focused Work",
    text: "Professional application with attention to surface condition.",
  },
  {
    icon: Droplets,
    title: "Specialized Solutions",
    text: "Waterproofing options for different leakage and seepage problems.",
  },
  {
    icon: MapPin,
    title: "Ahmedabad Service",
    text: "Waterproofing support for properties across Ahmedabad.",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-[#DCE8F0] bg-[#F1F8FC]">
      <div className="mx-auto max-w-[1280px] px-5 py-7 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 divide-y divide-[#DCE8F0] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`flex items-start gap-3 py-4 sm:px-5 lg:px-6 ${
                  index === 0 ? "sm:pl-0" : ""
                } ${
                  index === trustItems.length - 1
                    ? "sm:pr-0"
                    : ""
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Icon
                    size={19}
                    strokeWidth={2}
                    className="text-[#015696]"
                  />
                </div>

                <div>
                  <h2 className="text-sm font-bold text-[#092A43]">
                    {item.title}
                  </h2>

                  <p className="mt-1 text-xs leading-5 text-[#64748B]">
                    {item.text}
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