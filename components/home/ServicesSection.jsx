    "use client";

    import Image from "next/image";

    const services = [
    {
        title: "Terrace Waterproofing",
        desc: "Protect your terrace from leaks using high-quality membranes.",
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    },
    {
        title: "Bathroom Waterproofing",
        desc: "Prevent dampness and seepage in bathroom areas.",
        img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    },
    {
        title: "Exterior Wall Waterproofing",
        desc: "Protect external walls from rain and moisture damage.",
        img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
    },
    {
        title: "Rising Dampness",
        desc: "Stop moisture rising from the ground into walls.",
        img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    },
    {
        title: "Basement Waterproofing",
        desc: "Protect basements and underground structures.",
        img: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    },
    {
        title: "Swimming Pool Waterproofing",
        desc: "Complete waterproofing for pools and water bodies.",
        img: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf",
    },
    {
        title: "PU Grouting",
        desc: "Seal cracks and joints with polyurethane injection.",
        img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
    },
    {
        title: "Expansion Joint Sealing",
        desc: "Flexible sealing solutions for building joints.",
        img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
    },
    ];

    export default function ServicesSection() {
    return (
        <section className="w-full py-6 sm:py-8 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

            {/* 🔥 Heading */}
            <div className="text-center mb-12">
            <span className="text-sm tracking-[0.2em] uppercase text-gray-500">
                Our Services
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
                Waterproofing Solutions We Provide
            </h2>
            </div>

            {/* 🔥 Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {services.map((service, index) => (
                <div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                >
                
                {/* Image */}
                <div className="relative h-[220px]">
                    <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                    />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 p-5 text-white">
                    <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                    </h3>

                    <p className="text-sm text-gray-200 mb-3">
                    {service.desc}
                    </p>

                    {/* CTA */}
                    <span className="text-sm font-medium underline underline-offset-4 group-hover:tracking-wide transition">
                    Service Details →
                    </span>
                </div>

                </div>
            ))}

            </div>

        </div>
        </section>
    );
    }