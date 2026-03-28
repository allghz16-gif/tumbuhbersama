import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        
        <header className="mb-10 text-white">
          <h1 className="text-3xl font-bold text-blue-400">Project Implementasi Tim</h1>
          <p className="text-slate-400 mt-2 text-sm uppercase tracking-widest">Universitas Brawijaya</p>
        </header>

        <Link 
          to="/james" 
          className="block bg-slate-800 border border-slate-700 p-10 rounded-2xl hover:border-blue-500 transition-all group shadow-xl"
        >
          {/* Box Ikon yang dikunci ukurannya */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
               <span className="text-white font-bold text-2xl tracking-tighter">J</span>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Profil James</h2>
          <p className="text-slate-500 mt-2">Klik untuk melihat detail profil</p>
        </Link>

        <footer className="mt-12 text-slate-600 text-xs italic uppercase">
          Vokasi UB (Teknologi Informasi)
        </footer>
      </div>
    </div>
  ); 
};

export default Home;