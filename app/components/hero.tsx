import foto from "./foto.jpeg";

function Profile() {
    return <img src={foto.src} alt="Dika Ananta Pertama"className="fotoku" />;
}

export default function Hero() {
    return (
        <div className="container mx-auto p-2 text-center">
       <h1 className="text-gray-400 font-bold "> CV ONLINE</h1>
       <h2 className="text-3xl">Dika Ananta Pertama</h2>
       <h3 className="text-3xl">Owner PT. Anggur Merah Cap Orang Tua</h3>
      <Profile />
      <p>
      Saya adalah seorang Pemuda dari Majalaya, dan juga Hobbies Olahraga!
        Cita-cita ingin menjadi superhero yang memberantas semua jenis kejahatan, Saya
        ingin masuk surga tanpa hisab sekeluarga.
        </p>
        </div>
    );
}