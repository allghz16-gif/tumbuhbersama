const Hapizh = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-6 sm:p-10 flex flex-col items-center">
      <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] max-w-2xl w-full border border-slate-100 transform transition-all hover:scale-[1.01]">
        
        {/* Foto Profil dan Nama */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="relative mb-6">
            <div className="w-40 h-40 bg-slate-100 rounded-full overflow-hidden border-4 border-white shadow-xl flex items-center justify-center">
               {/* Ganti dengan <img src="/path/to/your/photo.jpg" alt="Foto Profil" className="w-full h-full object-cover"/> */}
              <img
              src="/Hapizh.jpeg"
              alt="Foto Profil" 
              className="w-full h-full object-cover"
              /> 
            </div>
            {/* Status Indicator (Optional) */}
            <div className="absolute bottom-1 right-1 w-7 h-7 bg-green-500 rounded-full border-4 border-white shadow-md"></div>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 mb-1">Hapizh fajariyanto</h1>
          <p className="text-xl text-blue-600 font-medium">Data Analyst</p>
        </div>

        {/* Data Diri dengan Icons */}
        <div className="border-t border-slate-100 pt-10 mb-10">
          <h2 className="text-2xl font-bold mb-6 text-slate-950 flex items-center">
              <span className="w-2 h-7 bg-blue-600 rounded-full mr-4 mb-1"></span>
              Informasi Pribadi
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Kelas', value: '[T2C]', icon: 'school' },
              { label: 'Prodi', value: '[Teknologi Informasi]', icon: 'book' },
              { label: 'Domisili', value: 'Kota Serang', icon: 'map-pin' }
            ].map((item, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex items-center space-x-5 transition hover:bg-white hover:shadow-md">
                <div className={`p-3.5 rounded-xl text-white ${index % 3 === 0 ? 'bg-blue-600' : index % 3 === 1 ? 'bg-indigo-600' : 'bg-sky-600'}`}>
                    {item.icon === 'school' && <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>}
                    {item.icon === 'book' && <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.132 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.132 1.253"></path></svg>}
                    {item.icon === 'map-pin' && <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{item.label}</p>
                  <p className="text-lg font-bold text-slate-950 mt-1">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tentang Diri (Min 100 Kata) */}
        <div className="border-t border-slate-100 pt-10">
          <h2 className="text-2xl font-bold mb-6 text-slate-950 flex items-center">
            <span className="w-2 h-7 bg-indigo-600 rounded-full mr-4 mb-1"></span>
            Tentang Diri Hapizh
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-justify bg-indigo-50/50 p-8 rounded-2xl border border-indigo-100">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-indigo-600 first-letter:mr-3 first-letter:float-left">
              Halo, nama saya adalah Hapizh Fajariyanto. Di sini, saya akan menjelaskan lebih lanjut tentang minat saya dalam analisis data, pengalaman dalam berbagai proyek, serta motivasi saya untuk terus belajar dan tumbuh di industri teknologi. Saya bersemangat dalam menjelajahi berbagai alat dan teknik analisis data untuk menciptakan wawasan yang bermakna. Selain itu, saya juga aktif dalam organisasi mahasiswa dan komunitas lokal untuk mengembangkan keterampilan kolaborasi dan kepemimpinan saya. (Lanjutkan tulisan ini hingga mencapai target minimal 100 kata sesuai instruksi yang diberikan).
            </p>
          </div>
        </div>

        {/* Tombol Aksi (Optional) */}
        <div className="mt-12 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-200">
            Hubungi Saya
          </button>
        </div>

      </div>

      {/* Footer / Contact (Optional) */}
      <footer className="mt-16 text-center text-slate-400">
        <p>&copy; {new Date().getFullYear()} James. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="hover:text-slate-900">GitHub</a>
            <a href="#" className="hover:text-blue-600">LinkedIn</a>
            <a href="#" className="hover:text-pink-600">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Hapizh;