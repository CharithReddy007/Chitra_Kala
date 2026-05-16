import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Brush, BookOpen, Droplet, Sparkles } from "lucide-react";

const PIGMENTS = [
  {
    id: "vermillion",
    name: "Hingula",
    commonName: "Vermillion / Cinnabar",
    color: "#e23f2f",
    source: "Mineral (Mercuric Sulfide)",
    image: "/pigment-vermillion.png",
    history: "A vivid red used since antiquity. It was often ground for days to achieve the perfect fine powder. Essential for depicting divine figures, particularly in Shakta traditions.",
    regions: ["Pattachitra", "Madhubani", "Mughal Miniature"]
  },
  {
    id: "lapis",
    name: "Rajavarta",
    commonName: "Lapis Lazuli",
    color: "#265b9e",
    source: "Mineral",
    image: "/pigment-lapis.png",
    history: "Imported from the Badakhshan mines of Afghanistan, this precious blue was as valuable as gold. It required a complex purification process to extract the deep ultramarine.",
    regions: ["Mughal Miniature", "Pahari"]
  },
  {
    id: "ochre",
    name: "Gairika",
    commonName: "Yellow Ochre",
    color: "#cf8623",
    source: "Earth",
    image: "/pigment-ochre.png",
    history: "One of the oldest pigments known to humanity. Mined from iron-rich clay deposits, washed, and dried. It forms the foundational yellow and warm ground for most traditional Indian paintings.",
    regions: ["All Styles"]
  },
  {
    id: "malachite",
    name: "Harita",
    commonName: "Malachite",
    color: "#2a704e",
    source: "Mineral (Copper Carbonate)",
    image: "/pigment-malachite.png",
    history: "A vivid green obtained by crushing malachite stone. It was notoriously difficult to use as excessive grinding would pale its color, requiring a delicate touch.",
    regions: ["Mughal Miniature", "Rajasthan"]
  },
  {
    id: "indigo",
    name: "Nila",
    commonName: "Indigo",
    color: "#182142",
    source: "Plant (Indigofera tinctoria)",
    image: "/pigment-indigo.png",
    history: "A deep, almost black blue derived through a complex fermentation of indigo leaves. India was the ancient world's primary source for this dye.",
    regions: ["Madhubani", "Pattachitra", "Warli"]
  },
  {
    id: "shell",
    name: "Shankha",
    commonName: "Conch Shell White",
    color: "#f5f5f0",
    source: "Marine Shells",
    image: "/pigment-shell.png",
    history: "The purest white, made by burning conch shells into quicklime, then slaking and grinding them. It provided a brilliant, opaque white that could be burnished to a high gloss.",
    regions: ["Pattachitra", "Tanjore"]
  },
  {
    id: "lampblack",
    name: "Kajjala",
    commonName: "Lamp Black",
    color: "#1a1a1a",
    source: "Soot (from mustard oil lamps)",
    image: "/pigment-lampblack.png",
    history: "Created by collecting the soot from earthen lamps burning mustard or sesame oil, then mixed with tree gum. Used for the finest outlines and darkest shadows.",
    regions: ["All Styles"]
  },
  {
    id: "yellow-orpiment",
    name: "Haritala",
    commonName: "Orpiment",
    color: "#f2c12e",
    source: "Mineral (Arsenic Sulfide)",
    image: "/pigment-orpiment.png",
    history: "A brilliant, toxic yellow mineral pigment. Because of its toxicity, it was handled with extreme care. It provided a striking yellow that could not be achieved with ochres.",
    regions: ["Mughal Miniature", "Jain Manuscripts"]
  }
];

const STYLES = [
  {
    id: "madhubani",
    name: "Madhubani",
    region: "Bihar",
    description: "Traditionally done by women on freshly plastered mud walls using twig brushes and natural dyes. Known for complex geometric patterns and nature motifs.",
    image: "/style-madhubani.png",
    bgColor: "#e23f2f"
  },
  {
    id: "pattachitra",
    name: "Pattachitra",
    region: "Odisha",
    description: "Cloth-based scroll painting known for intricate details and mythological narratives, entirely painted using natural colors and gum from the kaitha tree.",
    image: "/style-pattachitra.png",
    bgColor: "#cf8623"
  },
  {
    id: "warli",
    name: "Warli",
    region: "Maharashtra",
    description: "Tribal art using basic geometric shapes: circle, triangle, and square. Painted with white rice paste on walls coated with red mud and cow dung.",
    image: "/style-warli.png",
    bgColor: "#8b4513"
  },
  {
    id: "tanjore",
    name: "Tanjore",
    region: "Tamil Nadu",
    description: "Characterized by rich, flat colors, simple iconic composition, glittering gold foils, and inlay of glass beads and pieces or precious gems.",
    image: "/style-tanjore.png",
    bgColor: "#b8860b"
  },
  {
    id: "mughal",
    name: "Mughal Miniature",
    region: "Northern India",
    description: "A synthesis of Indian and Persian styles, demanding exquisite, single-hair brushwork and the finest mineral pigments to create intimate courtly scenes.",
    image: "/style-mughal.png",
    bgColor: "#265b9e"
  },
  {
    id: "kerala",
    name: "Kerala Mural",
    region: "Kerala",
    description: "Dynamic, voluminous figures painted on temple walls. The palette is strictly limited to five colors: yellow, red, green, black, and white.",
    image: "/style-kerala.png",
    bgColor: "#2a704e"
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const [activePigment, setActivePigment] = useState(PIGMENTS[0]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#1a1a1a] font-sans selection:bg-[#e23f2f] selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex justify-between items-center mix-blend-difference text-white">
        <div className="font-serif text-xl tracking-widest uppercase cursor-pointer" onClick={() => scrollTo('hero')}>Chitra Kala</div>
        <div className="hidden md:flex gap-8 text-xs tracking-widest uppercase font-semibold">
          <button onClick={() => scrollTo('kalas')} className="hover:text-[#e23f2f] transition-colors" data-testid="link-kalas">64 Kalas</button>
          <button onClick={() => scrollTo('philosophy')} className="hover:text-[#e23f2f] transition-colors" data-testid="link-philosophy">Philosophy</button>
          <button onClick={() => scrollTo('pigments')} className="hover:text-[#e23f2f] transition-colors" data-testid="link-pigments">Pigments</button>
          <button onClick={() => scrollTo('techniques')} className="hover:text-[#e23f2f] transition-colors" data-testid="link-techniques">Preparation</button>
          <button onClick={() => scrollTo('traditions')} className="hover:text-[#e23f2f] transition-colors" data-testid="link-traditions">Traditions</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.png" 
            alt="Ancient manuscript" 
            className="w-full h-full object-cover object-center opacity-90 scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#f7f5f0]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-[#cf8623] tracking-[0.4em] uppercase text-sm font-semibold mb-8 block">The Sacred Architecture of Color</span>
            <h1 className="text-6xl md:text-9xl font-serif text-white mb-8 leading-tight tracking-tight">
              Chitra Kala
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
              A living archive of India's ancient painting traditions and the earthly origins of their vibrant pigments.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-3 cursor-pointer group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          onClick={() => scrollTo("kalas")}
          data-testid="button-scroll-down"
        >
          <span className="text-xs tracking-widest uppercase group-hover:text-white transition-colors">Enter the Archive</span>
          <ChevronDown className="animate-bounce w-6 h-6 group-hover:text-white transition-colors" />
        </motion.div>
      </section>

      {/* The 64 Kalas Section */}
      <section id="kalas" className="py-32 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <BookOpen className="w-12 h-12 mx-auto text-[#cf8623] mb-8" />
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#1a1a1a]">The 64 Kalas</h2>
            <p className="text-xl text-gray-700 font-light leading-relaxed mb-6">
              In ancient India, education was not merely academic; it encompassed <strong>Chathushashti Kalas</strong> (the 64 classical arts). These ranged from music, dance, and poetry to chemistry, perfumery, and architecture.
            </p>
            <p className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Among them, <em className="text-[#e23f2f] not-italic font-medium">Chitra Kala</em> (the art of painting) held a supreme position. The <em>Vishnudharmottara Purana</em> declares: "As the mountain Sumeru is the best of mountains, as Garuda is the chief of birds... so is painting the best of all arts."
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 px-6 md:px-12 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center"
          >
            <motion.div variants={fadeInUp} className="order-2 md:order-1">
              <span className="text-[#e23f2f] tracking-[0.3em] uppercase text-xs font-semibold mb-6 block">Spiritual Significance</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">The Breath of the Earth</h2>
              <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
                <p>
                  Painting was never viewed merely as decoration, but as a path to the divine. The colors were not synthetic conveniences but literal fragments of the earth—minerals, plant sap, crushed insects, and soot. 
                </p>
                <p>
                  When a traditional painter worked, they were reorganizing nature into a new sacred geometry. Every color carried symbolic weight: Red for energy and auspiciousness, Yellow for purity and asceticism, Blue for the infinite and the divine presence of deities like Krishna and Rama.
                </p>
                <p>
                  To understand these pigments is to understand time itself. It is a slow art. The harvesting, the washing, the grinding that took weeks—each step was a meditation.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="order-1 md:order-2 relative aspect-[4/5] md:aspect-square">
              <div className="absolute inset-0 border border-white/20 translate-x-4 translate-y-4"></div>
              <img src="/tools.png" alt="Grinding tools" className="relative z-10 w-full h-full object-cover shadow-2xl sepia-[.3]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pigments Interactive Section */}
      <section id="pigments" className="py-32 bg-[#222] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20 relative"
          >
            {/* Decorative mandala-like faint background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full z-0 rotate-45"></div>
            
            <div className="relative z-10">
              <Droplet className="w-8 h-8 mx-auto text-[#265b9e] mb-6" />
              <h2 className="text-4xl md:text-6xl font-serif mb-6">The Anatomy of Color</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                Explore the raw materials that formed the palette of ancient India. Select a pigment to uncover its earthly origins.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 min-h-[650px] relative z-10">
            {/* Pigment Selector */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {PIGMENTS.map((pigment) => (
                <button
                  key={pigment.id}
                  onClick={() => setActivePigment(pigment)}
                  className={`group text-left px-6 py-4 border-l-4 transition-all duration-300 ${
                    activePigment.id === pigment.id 
                      ? "bg-white/10 border-current" 
                      : "border-transparent hover:border-white/20 hover:bg-white/5"
                  }`}
                  style={{ color: activePigment.id === pigment.id ? pigment.color : "white", borderLeftColor: activePigment.id === pigment.id ? pigment.color : "" }}
                  data-testid={`button-pigment-${pigment.id}`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-serif text-xl" style={{ color: "white" }}>{pigment.name}</h3>
                      <p className="text-xs text-gray-400 tracking-wider mt-1 uppercase">{pigment.commonName}</p>
                    </div>
                    <div 
                      className="w-6 h-6 rounded-full border-2 border-white/20 transition-transform group-hover:scale-125"
                      style={{ backgroundColor: pigment.color }}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Pigment Details Display */}
            <div className="lg:col-span-8 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePigment.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="h-full flex flex-col md:flex-row gap-0 shadow-2xl"
                >
                  <div className="w-full md:w-1/2 aspect-square md:aspect-auto relative bg-[#1a1a1a]">
                    {activePigment.image ? (
                      <>
                        <img 
                          src={activePigment.image} 
                          alt={activePigment.name} 
                          className="w-full h-full object-cover mix-blend-luminosity opacity-80"
                        />
                        <div 
                          className="absolute inset-0 mix-blend-overlay opacity-60"
                          style={{ backgroundColor: activePigment.color }}
                        ></div>
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: activePigment.color }}>
                        <div className="w-3/4 h-3/4 border border-white/20 rounded-full flex items-center justify-center">
                          <div className="w-1/2 h-1/2 border border-white/10 rounded-full"></div>
                        </div>
                      </div>
                    )}
                    {/* Color Swatch Overlay */}
                    <div 
                      className="absolute bottom-0 right-0 w-24 h-24 shadow-inner"
                      style={{ backgroundColor: activePigment.color }}
                    ></div>
                  </div>
                  
                  <div className="w-full md:w-1/2 flex flex-col justify-center bg-[#111] p-8 md:p-12">
                    <div className="mb-8">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-2 block" style={{ color: activePigment.color }}>Source</span>
                      <p className="text-2xl font-serif text-white">{activePigment.source}</p>
                    </div>
                    
                    <div className="mb-10">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-4 block">History & Process</span>
                      <p className="text-gray-300 leading-relaxed font-light text-sm md:text-base">
                        {activePigment.history}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-4 block">Found In Traditions</span>
                      <div className="flex flex-wrap gap-2">
                        {activePigment.regions.map(region => (
                          <span key={region} className="px-3 py-1 bg-white/10 text-xs rounded-sm text-gray-300 border border-white/5">
                            {region}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Techniques */}
      <section id="techniques" className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#1a1a1a]">The Alchemy of Preparation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
              Transforming raw earth into workable paint required immense patience and precise traditional tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div variants={fadeInUp} className="bg-white p-8 border-t-4 border-[#e23f2f] shadow-sm">
              <h3 className="text-2xl font-serif mb-4">Grinding</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-4">
                The <em>Sil-Batta</em> (stone mortar and pestle) was essential. Hard minerals like lapis and malachite were ground dry, then wet-ground with water for days until the particles were fine enough to float.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white p-8 border-t-4 border-[#cf8623] shadow-sm">
              <h3 className="text-2xl font-serif mb-4">Binding</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-4">
                Pigments alone cannot stick to canvas. Natural binders were added: <em>Gum Arabic</em> (from the Acacia tree), neem gum, tamarind gum, or animal glues. In some traditions, egg tempera or cow bile was used to increase flow.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white p-8 border-t-4 border-[#265b9e] shadow-sm">
              <h3 className="text-2xl font-serif mb-4">Brushes</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-4">
                Brushes (<em>Tulika</em>) were entirely handmade. Fine detailing used squirrel or camel hair. Broad strokes used goat or calf hair. Some tribal arts simply used chewed twigs or bamboo sticks.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Traditions Section */}
      <section id="traditions" className="py-32 px-6 md:px-12 bg-[#f0ece1]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#1a1a1a]">The Living Traditions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
              Distinct schools of painting evolved across the subcontinent, each developing their own techniques for binding these raw pigments into masterpieces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {STYLES.map((style, i) => (
              <motion.div
                key={style.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group cursor-pointer bg-white p-4 shadow-md hover:shadow-xl transition-shadow"
                data-testid={`card-style-${style.id}`}
              >
                <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-[#e8e4db]">
                  {style.image ? (
                    <img 
                      src={style.image} 
                      alt={style.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center" style={{ backgroundColor: style.bgColor }}>
                      <Brush className="w-12 h-12 text-white/50 mb-4" />
                      <span className="text-white/80 font-serif text-xl opacity-0 group-hover:opacity-100 transition-opacity">{style.name} Pattern</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
                <div className="px-2">
                  <h3 className="font-serif text-2xl mb-1 text-[#1a1a1a]">{style.name}</h3>
                  <p className="text-[10px] tracking-widest text-[#cf8623] uppercase mb-4 font-semibold">{style.region}</p>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    {style.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revival / Footer */}
      <section className="bg-[#e23f2f] text-white py-40 px-6 md:px-12 text-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Sparkles className="w-8 h-8 mx-auto mb-8 text-white/80" />
            <h2 className="text-4xl md:text-6xl font-serif mb-8">The Revival</h2>
            <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed mb-12">
              Today, a new generation of artists and scholars are returning to these slow, deliberate methods. In an age of instant digital creation, the meditative process of grinding stone into color is an act of grounding—a return to the earth.
            </p>
            <button 
              className="px-8 py-4 border border-white hover:bg-white hover:text-[#e23f2f] transition-all duration-300 tracking-[0.2em] uppercase text-xs font-semibold inline-flex items-center gap-3" 
              data-testid="button-explore-more"
              onClick={() => scrollTo("hero")}
            >
              Return to Top <ArrowRight className="w-4 h-4 -rotate-90" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 md:px-12 bg-[#f0ece1]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="text-[#cf8623] tracking-[0.4em] uppercase text-xs font-semibold mb-4 block">Group 6</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#1a1a1a]">Meet the Team</h2>
              <div className="w-16 h-[2px] bg-[#e23f2f] mx-auto mb-14"></div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Charith", id: "SE23UARI074" },
                { name: "Shanvi",  id: "SE23UARI136" },
                { name: "Nikhil",  id: "SE23UARI131" },
                { name: "Nareen",  id: "SE23UCSE120" },
              ].map((member, i) => (
                <motion.div
                  key={member.id}
                  variants={fadeInUp}
                  custom={i}
                  className="bg-white border-t-4 border-[#e23f2f] p-8 shadow-sm flex flex-col items-center gap-3"
                >
                  <div className="w-14 h-14 rounded-full bg-[#e23f2f]/10 flex items-center justify-center mb-2">
                    <span className="text-2xl font-serif text-[#e23f2f] font-bold">{member.name[0]}</span>
                  </div>
                  <h3 className="text-xl font-serif text-[#1a1a1a]">{member.name}</h3>
                  <p className="text-xs tracking-widest text-[#cf8623] uppercase font-semibold">{member.id}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-[#111] text-white/40 py-10 px-6 text-center text-xs tracking-widest uppercase flex flex-col items-center gap-3">
        <div className="w-12 h-[1px] bg-white/20 mb-2"></div>
        <p>© {new Date().getFullYear()} Chitra Kala Archive.</p>
        <p>Honoring the 64 Kalas of Ancient India.</p>
      </footer>
    </div>
  );
}