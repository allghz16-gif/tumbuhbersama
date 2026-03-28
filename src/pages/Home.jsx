import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        
        <header className="mb-10 text-white">
          <h1 className="text-3xl font-bold text-indigo-400">Project Implementasi Tim</h1>
          <p className="text-slate-400 mt-2 text-sm uppercase tracking-widest">Universitas Brawijaya</p>
        </header>

        {/* Link ke Profil Zaki */}
        <Link 
          to="/zaki" 
          className="block bg-slate-800 border border-slate-700 p-10 rounded-2xl hover:border-indigo-500 transition-all group shadow-xl mb-6"
        >
          {/* Box Ikon yang dikunci ukurannya */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-2xl tracking-tighter">Z</span>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">Profil Zaki</h2>
          <p className="text-slate-500 mt-2">Klik untuk melihat detail profil</p>
        </Link>

        {/* Link ke Profil Dhika (Tetap dicantumkan agar rute tim lengkap) */}
        <Link 
          to="/Zaki" 
          className="block bg-slate-800/50 border border-slate-700 p-6 rounded-2xl hover:border-blue-500 transition-all group shadow-lg"
        >
          <div className="flex items-center justify-center space-x-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">Z</span>
            </div>
            <h2 className="text-lg font-bold text-white group-hover:text-blue-400">Profil Zaki</h2>
          </div>
        </Link>

        <footer className="mt-12 text-slate-600 text-xs italic uppercase">
          Building Up Noble Future
        </footer>
      </div>
    </div>
  ); 
};

export default Home;