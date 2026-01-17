import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    image: "/woman.jpg",
    name: "Emily Carter",
    role: "Residential Client",
    review:
      "ATA Electronics transformed our home lighting into a luxurious experience. The attention to detail is exceptional.",
  },
  {
    image: "/man.jpg",
    name: "Michael Anderson",
    role: "Commercial Project",
    review:
      "Their lighting solutions elevated our commercial space. Premium quality, flawless execution, and professional service.",
  },
  {
    image: "/woman2.jpg",
    name: "Sophia Martinez",
    role: "Interior Designer",
    review:
      "Working with ATA Electronics is always seamless. Their designs bring elegance and emotion to every project.",
  },
  {
    image: "/man1.jpg",
    name: "David Thompson",
    role: "Corporate Client",
    review:
      "From concept to installation, ATA Electronics delivered excellence. Their lighting adds a powerful identity to our workspace.",
  },
  {
    image: "/woman3.jpg",
    name: "Olivia Brown",
    role: "Hotel Project Manager",
    review:
      "The ambiance created by their lighting solutions completely transformed our hotel interiors. Truly premium craftsmanship.",
  },
  {
    image: "/man3.jpg",
    name: "James Wilson",
    role: "Retail Showroom Owner",
    review:
      "Our showroom now feels modern, elegant, and inviting. ATA Electronics understands luxury lighting like no other.",
  },
];

export default function TestimonialSliderSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden flex items-center justify-center px-4 py-28 md:py-36 lg:py-44">
      <div className="relative z-10 max-w-4xl w-full text-center">
        <p className="text-xs sm:text-sm tracking-widest text-[#d4af37] mb-3">
          TESTIMONIALS
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-12">
          Trusted by Clients Worldwide
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col items-center gap-8"
          >
            {/* CUSTOMER IMAGE */}
            <motion.img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="
                w-28 h-28
                sm:w-32 sm:h-32
                md:w-36 md:h-36
                lg:w-40 lg:h-40
                rounded-full object-cover
                border-2 border-[#d4af37]/70
                shadow-[0_0_35px_rgba(212,175,55,0.55)]
              "
            />

            {/* STAR RATING */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.12 }}
                  className="text-[#d4af37] text-2xl drop-shadow-[0_0_8px_rgba(212,175,55,0.7)]"
                >
                  ★
                </motion.span>
              ))}
            </div>

            {/* REVIEW */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              <span className="text-5xl text-[#d4af37]/30 font-serif">“</span>
              {testimonials[index].review}
            </p>

            {/* NAME */}
            <div>
              <p className="text-base sm:text-lg font-semibold text-[#d4af37]">
                {testimonials[index].name}
              </p>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                {testimonials[index].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition ${i === index ? "bg-white" : "bg-white/40"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
