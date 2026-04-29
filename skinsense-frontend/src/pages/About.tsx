import { 
  Camera, 
  BrainCircuit, 
  Sparkles, 
  Search, 
  Zap, 
  Smartphone, 
  Shield,
  Heart,
  ArrowRight
} from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-[#fdf6f3] text-[#5a3e36] font-sans selection:bg-[#d8a48f] selection:text-white pb-20 relative overflow-hidden">
      
      {/* Animated Background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#f7e9e4] rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-[pulse_6s_ease-in-out_infinite]"></div>
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-[#fcefee] rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-[pulse_8s_ease-in-out_infinite_reverse]"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-[#f7e9e4] rounded-full mix-blend-multiply filter blur-[80px] opacity-50 animate-[pulse_10s_ease-in-out_infinite]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Animated Hero Section */}
        <section className="pt-32 pb-24 text-center max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white shadow-sm text-sm font-medium text-[#d8a48f] mb-8 hover:bg-white transition-colors cursor-default hover:-translate-y-1 duration-300">
            <Sparkles size={16} className="animate-pulse" />
            SkinSense AI Model v2.0
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-[#5a3e36] via-[#7a594e] to-[#a37261]">
            Intelligent Skincare, <br/>
            Powered by Vision AI.
          </h1>
          
          <p className="text-xl text-[#7a594e] max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            Stop guessing with your skin. SkinSense uses next-generation neural networks to analyze your facial profile and deliver precise, high-quality routines effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="h-14 px-8 rounded-2xl bg-gradient-to-r from-[#d8a48f] to-[#c6907a] text-white font-bold shadow-[0_8px_20px_rgb(216,164,143,0.3)] hover:shadow-[0_12px_25px_rgb(216,164,143,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group">
              Start Your Analysis <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* Animated Feature Grid */}
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]">
            
            {/* Spotlight Card */}
            <div className="md:col-span-2 bg-white/70 backdrop-blur-xl rounded-[2.5rem] border border-white p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col justify-between group hover:border-[#f7e9e4] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(216,164,143,0.15)] transition-all duration-500 overflow-hidden relative">
              <div className="absolute right-0 top-0 w-96 h-96 bg-[#f7e9e4] rounded-full blur-[80px] -z-10 -translate-y-1/2 translate-x-1/3 group-hover:scale-150 transition-transform duration-1000"></div>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#fdf6f3] text-[#d8a48f] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm border border-[#f7e9e4]">
                  <BrainCircuit size={28} />
                </div>
                <h3 className="text-3xl font-bold tracking-tight mb-4 text-[#5a3e36]">State-of-the-Art Vision AI</h3>
                <p className="text-[#7a594e] text-lg max-w-md font-light leading-relaxed">Our advanced models are trained to accurately identify pigmentation, hydration, and acne conditions in mere seconds.</p>
              </div>
            </div>

            {/* Accent Card */}
            <div className="bg-gradient-to-br from-[#d8a48f] to-[#b87c65] text-white rounded-[2.5rem] p-10 shadow-lg flex flex-col justify-between group overflow-hidden relative hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <Zap size={32} className="text-white mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold tracking-tight mb-3">Sub-second Inference</h3>
                <p className="text-white/90 font-light">Blazing fast results. Get your personalized skincare report in the blink of an eye.</p>
              </div>
            </div>

            {/* Shield Card */}
            <div className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] border border-white p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col justify-between group hover:border-[#f7e9e4] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(216,164,143,0.1)] transition-all duration-500">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#fdf6f3] text-[#d8a48f] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shadow-sm border border-[#f7e9e4]">
                  <Shield size={28} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-3 text-[#5a3e36]">Privacy First</h3>
                <p className="text-[#7a594e] text-base font-light">Photos are processed securely in real-time and never stored permanently on our servers.</p>
              </div>
            </div>

            {/* Seamless Flow Card */}
            <div className="md:col-span-2 bg-white/70 backdrop-blur-xl rounded-[2.5rem] border border-white p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col md:flex-row items-center gap-8 group hover:border-[#f7e9e4] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(216,164,143,0.15)] transition-all duration-500 overflow-hidden">
              <div className="flex-1 w-full">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf6f3] text-[#d8a48f] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-sm border border-[#f7e9e4]">
                  <Smartphone size={28} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-4 text-[#5a3e36]">Seamless Capture Flow</h3>
                <p className="text-[#7a594e] mb-6 font-light">A flawless interface that automatically checks lighting and focus before performing an analysis.</p>
                <div className="flex flex-wrap gap-3">
                  {['Auto-focus detection', 'Lighting validation', 'Cross-device support'].map((item, i) => (
                     <div key={i} className="flex items-center gap-2 bg-[#fdf6f3] px-3 py-1.5 rounded-full text-sm text-[#7a594e] font-medium border border-[#f7e9e4] group-hover:bg-white group-hover:border-[#d8a48f]/30 transition-colors duration-300">
                        <Heart size={14} className="text-[#d8a48f]" /> {item}
                     </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Animated Workflow section */}
        <section className="py-24 mt-12 text-center border-t border-[#f7e9e4]">
            <h2 className="text-4xl font-bold tracking-tight mb-16 text-[#5a3e36]">The Platform Workflow</h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
              {[
                { title: "Capture Face", icon: Camera },
                { title: "AI Analysis", icon: Zap },
                { title: "Identify Profile", icon: Search },
                { title: "Personalized Glow", icon: Sparkles }
              ].map((step, idx) => (
                <div key={idx} className="flex-1 w-full text-center relative group cursor-default">
                   <div className="w-20 h-20 mx-auto bg-white/80 backdrop-blur-sm border border-white shadow-md rounded-2xl flex items-center justify-center mb-6 text-[#d8a48f] relative z-10 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:border-[#f7e9e4] transition-all duration-500">
                     <step.icon size={32} strokeWidth={1.5} className="group-hover:text-[#b87c65] transition-colors" />
                   </div>
                   <h4 className="text-xl font-bold text-[#5a3e36] mb-2">{step.title}</h4>
                   <div className="text-xs text-[#d8a48f] font-bold uppercase tracking-widest bg-[#fdf6f3] inline-block px-3 py-1 rounded-full group-hover:bg-[#f7e9e4] transition-colors">Phase 0{idx+1}</div>
                   
                   {/* Animated line connection */}
                   {idx !== 3 && (
                     <div className="hidden md:block absolute top-[2.5rem] left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#f7e9e4] to-transparent z-0 group-hover:from-[#d8a48f]/40 transition-colors duration-500"></div>
                   )}
                </div>
              ))}
            </div>
        </section>
        
        {/* Animated Footer CTA */}
        <section className="pb-24 text-center">
           <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-[0_20px_50px_rgb(216,164,143,0.15)] group hover:shadow-[0_30px_60px_rgb(216,164,143,0.2)] transition-shadow duration-700">
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#f7e9e4] blur-[100px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#fcefee] blur-[80px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-1000"></div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 relative z-10 text-[#5a3e36] group-hover:scale-[1.02] transition-transform duration-500">Ready for skin clarity?</h2>
              <p className="text-[#7a594e] text-xl mb-10 max-w-2xl mx-auto relative z-10 font-light">Discover exactly what works for your complexion today. No guesswork, just results.</p>
              
              <button className="h-16 px-10 rounded-full bg-gradient-to-r from-[#d8a48f] to-[#b87c65] text-white font-bold hover:-translate-y-1 inline-flex items-center gap-3 relative z-10 shadow-[0_10px_20px_rgb(216,164,143,0.3)] hover:shadow-[0_15px_30px_rgb(216,164,143,0.5)] transition-all duration-300 overflow-hidden group/btn">
                <span className="relative z-10 flex items-center gap-2">
                  Launch Diagnostic <Sparkles size={20} className="group-hover/btn:rotate-12 transition-transform" />
                </span>
                {/* Button shimmer effect slide */}
                <div className="absolute top-0 -left-[100%] h-full w-[50%] z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover/btn:left-[200%] transition-all duration-1000 ease-in-out"></div>
              </button>
           </div>
        </section>

      </div>
    </div>
  );
}