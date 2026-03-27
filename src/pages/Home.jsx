function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">
        Website Profil Kelompok
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <ul className="space-y-3 text-lg">
          <li><a className="text-blue-500" href="/dhika-alghazali">Dhika</a></li>
          <li><a className="text-blue-500" href="/hapiz">Hapiz</a></li>
          <li><a className="text-blue-500" href="/zaki">Zaki</a></li>
          <li><a className="text-blue-500" href="/james">James</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;