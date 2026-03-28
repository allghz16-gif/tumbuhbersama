import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 font-sans">
      <div className="max-w-6xl w-full text-center">
        
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-rose-400">
            Project Implementasi Tim
          </h1>
          <p className="text-slate-400 mt-4 text-sm md:text-base uppercase tracking-[0.3em] font-medium">
            Universitas Brawijaya
          </p>
        </header>

        {/* Grid Container: 1 kolom di HP, 3 kolom di Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card Profil Dhika */}
          <Link 
            to="/dhika" 
            className="group block bg-slate-800 border border-slate-700 p-8 rounded-[2rem] hover:border-blue-500 transition-all duration-300 shadow-xl hover:shadow-blue-500/10"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                 <span className="text-white font-bold text-3xl">D</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Profil Dhika</h2>
            <p className="text-slate-500 mt-2 text-sm">Creative Developer</p>
          </Link>

          {/* Card Profil Zaki */}
          <Link 
            to="/zaki" 
            className="group block bg-slate-800 border border-slate-700 p-8 rounded-[2rem] hover:border-emerald-500 transition-all duration-300 shadow-xl hover:shadow-emerald-500/10"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:-rotate-6 transition-transform">
                 <span className="text-white font-bold text-3xl">Z</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">Profil Zaki</h2>
            <p className="text-slate-500 mt-2 text-sm">Tech Enthusiast</p>
          </Link>

          {/* Card Profil James */}
          <Link 
            to="/ames" 
            className="group block bg-slate-800 border border-slate-700 p-8 rounded-[2rem] hover:border-rose-500 transition-all duration-300 shadow-xl hover:shadow-rose-500/10"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-rose-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                 <span className="text-white font-bold text-3xl">J</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white group-hover:text-rose-400 transition-colors">Profil James</h2>
            <p className="text-slate-500 mt-2 text-sm">UI/UX Designer</p>
          </Link>

        </div>

        <footer className="mt-20 flex flex-col items-center gap-4">
          <div className="h-px w-24 bg-slate-800"></div>
          <p className="text-slate-600 text-xs tracking-widest uppercase italic">
            Building Up Noble Future
          </p>
        </footer>
      </div>
    </div>
  ); 
};

export default Home;