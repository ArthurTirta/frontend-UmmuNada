import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";
import dynamic from "next/dynamic";
import ParallaxSection from "@/components/ParallaxSection";
import BackToTop from "@/components/BackToTop";
import LazyMap from "@/components/LazyMap";
import AI from "@/components/AI";

// Dynamically import heavier interactive components to keep initial
// server/client bundle small. These components will load only on the
// client, reducing initial JS sent to desktop users and improving
// Lighthouse/Performance metrics.
const HeroCarousel = dynamic(() => import("@/components/HeroCarousel"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#f3f4f6] rounded-2xl animate-pulse" />
  ),
});

const ProfitCalculator = dynamic(
  () => import("@/components/ProfitCalculator"), { 
    ssr: false, 
    loading: () => <div className="h-12" /> }
);

export default function Home() {
  return (
    <main>
      {/* <AI></AI> */}
      {/* Hero - Style dengan Cosmos Blue background */}
      <section
        id="hero"
        className="relative pt-28 sm:pt-24 lg:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-[#003049] via-[#003049] to-[#004060]"
      >
        {/* Decorative dots - left side */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
          <div className="w-3 h-3 rounded-full bg-[#669BBC]/40" />
          <div className="w-3 h-3 rounded-full bg-[#C1121F]" />
          <div className="w-3 h-3 rounded-full bg-[#669BBC]/40" />
        </div>

        <div className="relative mx-auto max-w-screen-2xl px-3 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px]">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Katering & Aneka Kue Murah
              </h1>
              <p className="mt-2 text-lg sm:text-xl text-white/90 font-medium">
                Rasa Premium untuk Beragam Momen Spesial
              </p>
            </div>

            <div className="space-y-4 text-white/80 leading-relaxed text-base sm:text-lg">
              <p className="text-justify">
                Ummu Nada menghadirkan beragam varian kue dan paket katering
                yang lezat dengan harga terjangkau. Cita rasa dengan harga yang
                terjangkau sangat cocok untuk acara keluarga, festival, hajatan,
                hingga momen spesial lainnya.
              </p>
              <p className="text-justify">
                Kami menyediakan berbagai pilihan camilan tradisional dan modern
                seperti tahu bakso, risol, martabak mini, ketan serondeng, dan
                masih banyak lagi. Setiap produk dibuat fresh setiap pagi oleh
                mitra UMKM lokal yang telah terseleksi kualitasnya.
              </p>
              <p className="text-justify">
                Dengan sistem konsinyasi yang fleksibel, kami membantu para
                pelaku UMKM untuk memasarkan produk mereka dengan lebih luas.
                Kepuasan pelanggan dan kualitas produk adalah prioritas utama
                kami dalam setiap layanan yang diberikan.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <CTAButton href="https://wa.me/6281254711633" variant="primary">
                Pesan Sekarang
              </CTAButton>
              <CTAButton href="#produk" variant="secondary">
                Lihat Katalog
              </CTAButton>
            </div>
          </div>

          {/* Right Carousel - Below text on mobile/tablet, side by side on desktop */}
          <Reveal className="relative">
            <div className="relative h-[320px] sm:h-[400px] lg:h-[480px]">
              <HeroCarousel />
            </div>
          </Reveal>
        </div>

        {/* Decorative dots - bottom right */}
        <div className="absolute right-8 bottom-8 hidden lg:flex gap-2">
          <div className="w-2 h-2 rounded-full bg-white/30" />
          <div className="w-2 h-2 rounded-full bg-white/30" />
          <div className="w-2 h-2 rounded-full bg-white/30" />
          <div className="w-2 h-2 rounded-full bg-white/30" />
        </div>
      </section>

      {/* Siapa Kami - Parallax Section */}
      <ParallaxSection
        backgroundImage="/bg-modern.png"
        className="py-20 sm:py-32 min-h-screen"
        id="tentang"
      >
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-6 lg:px-8">
          {/* Social Media Icons */}
          <div className="flex justify-end items-center gap-3 mb-12">
            <a
              href="https://instagram.com/ummunada"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center shadow-lg">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </a>
            <a
              href="https://wa.me/6281254711633"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
            </a>
            <a
              href="https://tiktok.com/@ummunada"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-lg">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </div>
            </a>
          </div>

          {/* Main Content Grid - No Cards */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Image dan Info */}
            <Reveal>
              <div className="space-y-6">
                {/* Circular Image */}
                <div className="relative mx-auto w-80 h-80">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl">
                    <Image
                      src="/transaksi_jualan.png"
                      alt="Warung Ummu Nada"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="text-center space-y-4">
                  <a
                    href="tel:081254711633"
                    className="inline-block bg-gradient-to-r from-[--brand-1] to-[--brand-2] text-white px-10 py-4 rounded-full font-bold text-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all"
                  >
                    0812-5471-1633
                  </a>
                  <p className="text-base text-black font-semibold leading-relaxed drop-shadow-lg">
                    Jl. Projakal, Batu Ampar, Kec. Balikpapan Utara,
                    <br />
                    Kota Balikpapan, Kalimantan Timur 76136
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Right Side - Content */}
            <div className="space-y-8">
              <Reveal>
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
                    Siapa Kami?
                  </h2>
                  <div className="space-y-4 text-white text-lg leading-relaxed drop-shadow-md">
                    <p>
                      Sebagai UMKM yang bergerak di bidang kuliner, Ummu Nada
                      tetap eksis sejak berdiri pada Februari 2022.
                    </p>
                    <p>
                      Ummu Nada menjadi usaha yang berfokus pada penjualan aneka
                      kue titipan dari berbagai pelaku UMKM lokal. Nama
                      &apos;Ummu Nada&apos; berasal dari nama putri pemilik dan
                      mencerminkan identitas usaha yang lahir dari keluarga.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white drop-shadow-lg flex items-center gap-3">
                    <span className="text-4xl">🎯</span>
                    Tujuan & Visi Misi
                  </h3>
                  <div className="relative">
                    <ul className="space-y-4 text-white text-base">
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-[--brand-sky] text-lg font-bold">
                            ✓
                          </span>
                        </div>
                        <span className="drop-shadow-md">
                          Menjadi wadah bagi UMKM lokal, khususnya produsen kue,
                          untuk memperkenalkan dan memasarkan produk mereka.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-[--brand-sky] text-lg font-bold">
                            ✓
                          </span>
                        </div>
                        <span className="drop-shadow-md">
                          Menyampaikan nilai kebersamaan, gotong royong, serta
                          semangat pemberdayaan ekonomi keluarga.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-[--brand-sky] text-lg font-bold">
                            ✓
                          </span>
                        </div>
                        <span className="drop-shadow-md">
                          Membuat semakin banyak pelaku usaha kecil yang bisa
                          berkembang dan menjangkau pasar lebih luas.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Produk - Scattered Diamond Collage Style */}
      <section
        id="produk"
        className="relative scroll-mt-24 py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg-menu.png')",
          minHeight: "100vh",
        }}
      >
        {/* Title TOP MENU */}
        <div className="relative z-30 text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider"
            style={{
              fontFamily: "Playfair Display, serif",
              color: "#ffffff",
              textShadow: "3px 3px 10px rgba(0,0,0,0.5)",
            }}
          >
            TOP MENU
          </h2>
        </div>

        {/* Desktop View - Scattered Diamond Collage */}
        <div className="hidden lg:block relative w-full min-h-[600px]">
          {/* LEFT GROUP - 4 diamonds, layout kasar dengan 1 diamond lebih besar */}
          {/* Top */}
          <div className="absolute top-[60px] left-[6%] w-[185px] h-[185px] rotate-45 overflow-hidden shadow-2xl z-10">
            <div className="-rotate-45 scale-150 w-full h-full relative">
              <Image
                src="/tahu_bakso.webp"
                alt="Tahu Bakso"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Left - posisi agak ke bawah */}
          <div className="absolute top-[250px] left-[-2%] w-[180px] h-[180px] rotate-45 overflow-hidden shadow-2xl z-10">
            <div className="-rotate-45 scale-150 w-full h-full relative">
              <Image
                src="/sosis_solo.webp"
                alt="Sosis Solo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right - posisi agak ke atas */}
          <div className="absolute top-[200px] left-[18%] w-[190px] h-[190px] rotate-45 overflow-hidden shadow-2xl z-10">
            <div className="-rotate-45 scale-150 w-full h-full relative">
              <Image
                src="/martabak_mini.webp"
                alt="Martabak Mini"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bottom - Lebih Besar (Featured) */}
          <div className="absolute top-[370px] left-[9%] w-[260px] h-[260px] rotate-45 overflow-hidden shadow-2xl z-20">
            <div className="-rotate-45 scale-150 w-full h-full relative">
              <Image
                src="/bomboloni.webp"
                alt="Bomboloni"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* CENTER GROUP - 4 diamonds forming big diamond, layout acak */}
          {/* Top - agak ke kiri */}
          <div className="absolute top-[50px] left-[40%] w-[195px] h-[195px] rotate-45 overflow-hidden shadow-2xl z-10">
            <div className="-rotate-45 scale-150 w-full h-full relative">
              <Image
                src="/gabin_fla.webp"
                alt="Gabin Fla"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Left - posisi agak naik */}
          <div className="absolute top-[185px] left-[32%] w-[180px] h-[180px] rotate-45 overflow-hidden shadow-2xl z-10">
            <div className="-rotate-45 scale-150 w-full h-full relative">
              <Image
                src="/tahu_sayur_pedas.webp"
                alt="Tahu Sayur Pedas"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right - posisi agak turun */}
          <div className="absolute top-[210px] left-[48%] w-[190px] h-[190px] rotate-45 overflow-hidden shadow-2xl z-10">
            <div className="-rotate-45 scale-150 w-full h-full relative">
              <Image
                src="/risol_sayur.webp"
                alt="Risol Sayur"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bottom - Lebih Besar (Featured) */}
          <div className="absolute top-[350px] left-[38%] w-[250px] h-[250px] rotate-45 overflow-hidden shadow-2xl z-20">
            <div className="-rotate-45 scale-150 w-full h-full relative">
              <Image
                src="/panada_ikan.webp"
                alt="Panada Ikan"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* SPECIAL DIAMOND - Between Center & Right - Gray Background with White Text */}
          <div
            className="absolute top-[280px] left-[60%] w-[160px] h-[160px] rotate-45 overflow-hidden shadow-2xl z-15"
            style={{ backgroundColor: "#374151" }}
          >
            <div className="-rotate-45 w-full h-full flex items-center justify-center">
              <span
                className="font-bold text-center leading-tight"
                style={{
                  color: "#FFFFFF",
                  fontSize: "24px",
                  fontFamily: "Playfair Display, serif",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                }}
              >
                UMMU
                <br />
                NADA
              </span>
            </div>
          </div>

          {/* RIGHT GROUP - 4 diamonds, layout kasar dengan 1 diamond lebih besar */}
          {/* Top - posisi agak turun */}
          <div className="absolute top-[90px] right-[7%] w-[185px] h-[185px] rotate-45 overflow-hidden shadow-2xl z-10">
            <div className="-rotate-45 scale-150 w-full h-full relative">
              <Image
                src="/lumpia_mihun.webp"
                alt="Lumpia Mihun"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Left - posisi agak ke atas */}
          <div className="absolute top-[195px] right-[17%] w-[190px] h-[190px] rotate-45 overflow-hidden shadow-2xl z-10">
            <div className="-rotate-45 scale-150 w-full h-full relative">
              <Image
                src="/pie_buah.webp"
                alt="Pie Buah"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right - Lebih Besar (Featured) - menempel ke kanan */}
          <div className="absolute top-[230px] right-[-3%] w-[270px] h-[270px] rotate-45 overflow-hidden shadow-2xl z-20">
            <div className="-rotate-45 scale-150 w-full h-full relative">
              <Image
                src="/brownies_panggang.webp"
                alt="Brownies Panggang"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bottom - posisi agak miring */}
          <div className="absolute top-[380px] right-[10%] w-[180px] h-[180px] rotate-45 overflow-hidden shadow-2xl z-10">
            <div className="-rotate-45 scale-150 w-full h-full relative">
              <Image
                src="/risol_mayo.webp"
                alt="Risol Mayo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mobile/Tablet View - Grid Layout */}
        <div className="lg:hidden mx-auto max-w-screen-xl px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {/* Tahu Bakso */}
            <div className="w-full aspect-square rotate-45 overflow-hidden shadow-xl">
              <div className="-rotate-45 scale-150 w-full h-full relative">
                <Image
                  src="/tahu_bakso.webp"
                  alt="Tahu Bakso"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Sosis Solo */}
            <div className="w-full aspect-square rotate-45 overflow-hidden shadow-xl">
              <div className="-rotate-45 scale-150 w-full h-full relative">
                <Image
                  src="/sosis_solo.webp"
                  alt="Sosis Solo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Martabak Mini */}
            <div className="w-full aspect-square rotate-45 overflow-hidden shadow-xl">
              <div className="-rotate-45 scale-150 w-full h-full relative">
                <Image
                  src="/martabak_mini.webp"
                  alt="Martabak Mini"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bomboloni */}
            <div className="w-full aspect-square rotate-45 overflow-hidden shadow-xl">
              <div className="-rotate-45 scale-150 w-full h-full relative">
                <Image
                  src="/bomboloni.webp"
                  alt="Bomboloni"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Gabin Fla */}
            <div className="w-full aspect-square rotate-45 overflow-hidden shadow-xl">
              <div className="-rotate-45 scale-150 w-full h-full relative">
                <Image
                  src="/gabin_fla.webp"
                  alt="Gabin Fla"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Tahu Sayur Pedas */}
            <div className="w-full aspect-square rotate-45 overflow-hidden shadow-xl">
              <div className="-rotate-45 scale-150 w-full h-full relative">
                <Image
                  src="/tahu_sayur_pedas.webp"
                  alt="Tahu Sayur Pedas"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Risol Sayur */}
            <div className="w-full aspect-square rotate-45 overflow-hidden shadow-xl">
              <div className="-rotate-45 scale-150 w-full h-full relative">
                <Image
                  src="/risol_sayur.webp"
                  alt="Risol Sayur"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Panada Ikan */}
            <div className="w-full aspect-square rotate-45 overflow-hidden shadow-xl">
              <div className="-rotate-45 scale-150 w-full h-full relative">
                <Image
                  src="/panada_ikan.webp"
                  alt="Panada Ikan"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Lumpia Mihun */}
            <div className="w-full aspect-square rotate-45 overflow-hidden shadow-xl">
              <div className="-rotate-45 scale-150 w-full h-full relative">
                <Image
                  src="/lumpia_mihun.webp"
                  alt="Lumpia Mihun"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Pie Buah */}
            <div className="w-full aspect-square rotate-45 overflow-hidden shadow-xl">
              <div className="-rotate-45 scale-150 w-full h-full relative">
                <Image
                  src="/pie_buah.webp"
                  alt="Pie Buah"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Brownies Panggang */}
            <div className="w-full aspect-square rotate-45 overflow-hidden shadow-xl">
              <div className="-rotate-45 scale-150 w-full h-full relative">
                <Image
                  src="/brownies_panggang.webp"
                  alt="Brownies Panggang"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Risol Mayo */}
            <div className="w-full aspect-square rotate-45 overflow-hidden shadow-xl">
              <div className="-rotate-45 scale-150 w-full h-full relative">
                <Image
                  src="/risol_mayo.webp"
                  alt="Risol Mayo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mobile Brand Badge */}
          <div className="mt-8 flex justify-center">
            <div
              className="w-32 h-32 sm:w-36 sm:h-36 rotate-45 overflow-hidden shadow-2xl"
              style={{ backgroundColor: "#374151" }}
            >
              <div className="-rotate-45 w-full h-full flex items-center justify-center">
                <span
                  className="font-bold text-center leading-tight"
                  style={{
                    color: "#FFFFFF",
                    fontSize: "20px",
                    fontFamily: "Playfair Display, serif",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                  }}
                >
                  UMMU
                  <br />
                  NADA
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mitra - Berkolaborasi dengan Mitra UMKM */}
      <section
        id="mitra"
        className="relative py-20 sm:py-32 bg-gradient-to-br from-[#FFF4E0] to-[#FFE8C5]"
      >
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#003049] mb-4">
                Berkolaborasi dengan Mitra
              </h2>
              <p className="text-lg sm:text-xl text-[#003049]/80 max-w-3xl mx-auto">
                Banyak warga lokal menitipkan jualannya di warung kami. Ingin
                bergabung? Kami terbuka untuk kemitraan dan siap membantu UMKM
                berkembang!
              </p>
            </Reveal>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Manfaat Menjadi Mitra */}
            <Reveal>
              <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-[#003049]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C1121F] to-[#780000] flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#003049]">
                    Manfaat Menjadi Mitra
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#669BBC] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-[#003049] text-base">
                      <strong>Akses Pelanggan Tetap</strong> - Warung ramai
                      setiap pagi, produk Anda akan dilihat banyak orang
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#669BBC] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-[#003049] text-base">
                      <strong>Branding Bersama</strong> - Nama produk Anda
                      dikenal di komunitas lokal
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#669BBC] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-[#003049] text-base">
                      <strong>Sistem Konsinyasi Fleksibel</strong> - Tanpa biaya
                      di muka, bayar setelah laku
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#669BBC] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-[#003049] text-base">
                      <strong>Komunitas UMKM</strong> - Bergabung dengan
                      jaringan pelaku usaha yang saling mendukung
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#669BBC] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-[#003049] text-base">
                      <strong>Fresh & Berkualitas</strong> - Produk dijual fresh
                      setiap hari, kualitas terjaga
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Cara Bergabung */}
            <Reveal>
              <div className="bg-gradient-to-br from-[#003049] to-[#004060] rounded-2xl shadow-xl p-8 text-white border-4 border-[#669BBC]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C1121F] to-[#780000] flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold">
                    Cara Bergabung Menjadi Mitra
                  </h3>
                </div>
                <ol className="space-y-4 mb-8">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#C1121F] flex items-center justify-center shrink-0 font-bold text-lg">
                      1
                    </div>
                    <div>
                      <strong className="block mb-1">Hubungi Kami</strong>
                      <span className="text-white/80 text-sm">
                        Kontak via WhatsApp atau Instagram untuk konsultasi awal
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#C1121F] flex items-center justify-center shrink-0 font-bold text-lg">
                      2
                    </div>
                    <div>
                      <strong className="block mb-1">Tentukan Produk</strong>
                      <span className="text-white/80 text-sm">
                        Diskusikan jenis produk, jumlah titipan, dan target
                        pasar
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#C1121F] flex items-center justify-center shrink-0 font-bold text-lg">
                      3
                    </div>
                    <div>
                      <strong className="block mb-1">Siapkan Produk</strong>
                      <span className="text-white/80 text-sm">
                        Buat label, tentukan harga, dan pastikan kualitas produk
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#C1121F] flex items-center justify-center shrink-0 font-bold text-lg">
                      4
                    </div>
                    <div>
                      <strong className="block mb-1">Mulai Berjualan!</strong>
                      <span className="text-white/80 text-sm">
                        Titipkan produk di warung kami dan lihat penjualan
                        meningkat
                      </span>
                    </div>
                  </li>
                </ol>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton
                    href="https://wa.me/6281254711633?text=Halo%20Ummu%20Nada,%20saya%20ingin%20bergabung%20menjadi%20mitra!"
                    variant="primary"
                    className="flex-1"
                  >
                    💬 Daftar via WhatsApp
                  </CTAButton>
                  <ProfitCalculator />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/bg-testimoni.png"
            alt="Background Testimoni"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#003049]/80"></div>
        </div>

        <div className="relative mx-auto max-w-screen-2xl px-3 sm:px-6 lg:px-8 mb-10">
          <div className="text-center">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                Testimoni Pelanggan & Mitra
              </h2>
              <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
                Apa kata mereka yang sudah berbelanja dan bermitra dengan Ummu
                Nada
              </p>
            </Reveal>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#003049] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#003049] to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Testimonials */}
          <div className="flex gap-6 animate-marquee hover:pause-marquee">
            {/* First Set of Cards */}
            {[
              {
                name: "Ibu Siti",
                review:
                  "Kue-kuenya enak dan harganya sangat terjangkau! Selalu beli di sini untuk acara keluarga.",
                rating: 5,
                type: "Pelanggan",
              },
              {
                name: "Siti Mariana",
                review:
                  "Sudah 6 bulan jadi mitra, Alhamdulillah omzetnya stabil. Sistemnya jelas dan transparan.",
                rating: 5,
                type: "Mitra",
              },
              {
                name: "Pak Budi",
                review:
                  "Variasinya banyak banget, cocok buat oleh-oleh. Pelayanannya juga ramah!",
                rating: 5,
                type: "Pelanggan",
              },
              {
                name: "Rabiyati",
                review:
                  "Bergabung jadi mitra adalah keputusan terbaik. Produk saya laris manis di Ummu Nada!",
                rating: 5,
                type: "Mitra",
              },
              {
                name: "Mbak Ani",
                review:
                  "Warung langganan! Produknya fresh dan selalu ada yang baru. Recommended!",
                rating: 5,
                type: "Pelanggan",
              },
              {
                name: "Siti Rokayah",
                review:
                  "Senang bisa titip jual produk di sini. Sistemnya mudah dan menguntungkan!",
                rating: 5,
                type: "Mitra",
              },
              {
                name: "Retno Widyanti",
                review:
                  "Sebagai mitra, saya sangat puas dengan pelayanan dan transaksi yang jelas.",
                rating: 5,
                type: "Mitra",
              },
              {
                name: "Mbak Dina",
                review:
                  "Pagi-pagi sudah buka, jadi bisa beli sebelum kerja. Praktis banget!",
                rating: 5,
                type: "Pelanggan",
              },
              {
                name: "Zainal Akhmad",
                review:
                  "Terima kasih Ummu Nada, produk saya selalu habis terjual. Sangat membantu UMKM!",
                rating: 5,
                type: "Mitra",
              },
              {
                name: "Ika Wulandari",
                review:
                  "Alhamdulillah bergabung menjadi mitra di sini. Komisi 10% sangat membantu tambahan penghasilan!",
                rating: 5,
                type: "Mitra",
              },
              {
                name: "Pak Ahmad",
                review:
                  "Harga murah tapi kualitas nggak murahan. Semua produk enak-enak!",
                rating: 5,
                type: "Pelanggan",
              },
              {
                name: "Ida Elysa",
                review:
                  "Senang bisa menitipkan produk rumahan di Ummu Nada. Penjualannya bagus!",
                rating: 5,
                type: "Mitra",
              },
              {
                name: "Muhammad Zainul Muttaqin",
                review:
                  "Sistem kemitraan yang fair dan transparan. Rekomendasi untuk UMKM lain!",
                rating: 5,
                type: "Mitra",
              },
              {
                name: "Harmiati",
                review:
                  "Produk saya dipercaya dan dijual dengan baik di Ummu Nada. Terima kasih!",
                rating: 5,
                type: "Mitra",
              },
              {
                name: "Khalisa",
                review:
                  "Sangat membantu untuk menjual produk makanan saya. Alhamdulillah laris!",
                rating: 5,
                type: "Mitra",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      testimonial.type === "Mitra"
                        ? "bg-[#C1121F] text-white"
                        : "bg-[#669BBC] text-white"
                    }`}
                  >
                    {testimonial.type}
                  </span>
                </div>
                <p className="text-[#003049] text-sm leading-relaxed mb-4 italic">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#669BBC] to-[#003049] flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#003049]">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-[#003049]/60">
                      {testimonial.type}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicate Set for Seamless Loop */}
            {[
              {
                name: "Ibu Siti",
                review:
                  "Kue-kuenya enak dan harganya sangat terjangkau! Selalu beli di sini untuk acara keluarga.",
                rating: 5,
                type: "Pelanggan",
              },
              {
                name: "Siti Mariana",
                review:
                  "Sudah 6 bulan jadi mitra, Alhamdulillah omzetnya stabil. Sistemnya jelas dan transparan.",
                rating: 5,
                type: "Mitra",
              },
              {
                name: "Pak Budi",
                review:
                  "Variasinya banyak banget, cocok buat oleh-oleh. Pelayanannya juga ramah!",
                rating: 5,
                type: "Pelanggan",
              },
              {
                name: "Rabiyati",
                review:
                  "Bergabung jadi mitra adalah keputusan terbaik. Produk saya laris manis di Ummu Nada!",
                rating: 5,
                type: "Mitra",
              },
              {
                name: "Mbak Ani",
                review:
                  "Warung langganan! Produknya fresh dan selalu ada yang baru. Recommended!",
                rating: 5,
                type: "Pelanggan",
              },
              {
                name: "Siti Rokayah",
                review:
                  "Senang bisa titip jual produk di sini. Sistemnya mudah dan menguntungkan!",
                rating: 5,
                type: "Mitra",
              },
              {
                name: "Retno Widyanti",
                review:
                  "Sebagai mitra, saya sangat puas dengan pelayanan dan transaksi yang jelas.",
                rating: 5,
                type: "Mitra",
              },
              {
                name: "Mbak Dina",
                review:
                  "Pagi-pagi sudah buka, jadi bisa beli sebelum kerja. Praktis banget!",
                rating: 5,
                type: "Pelanggan",
              },
              {
                name: "Zainal Akhmad",
                review:
                  "Terima kasih Ummu Nada, produk saya selalu habis terjual. Sangat membantu UMKM!",
                rating: 5,
                type: "Mitra",
              },
              {
                name: "Ika Wulandari",
                review:
                  "Alhamdulillah bergabung menjadi mitra di sini. Komisi 10% sangat membantu tambahan penghasilan!",
                rating: 5,
                type: "Mitra",
              },
              {
                name: "Pak Ahmad",
                review:
                  "Harga murah tapi kualitas nggak murahan. Semua produk enak-enak!",
                rating: 5,
                type: "Pelanggan",
              },
              {
                name: "Ida Elysa",
                review:
                  "Senang bisa menitipkan produk rumahan di Ummu Nada. Penjualannya bagus!",
                rating: 5,
                type: "Mitra",
              },
              {
                name: "Muhammad Zainul Muttaqin",
                review:
                  "Sistem kemitraan yang fair dan transparan. Rekomendasi untuk UMKM lain!",
                rating: 5,
                type: "Mitra",
              },
              {
                name: "Harmiati",
                review:
                  "Produk saya dipercaya dan dijual dengan baik di Ummu Nada. Terima kasih!",
                rating: 5,
                type: "Mitra",
              },
              {
                name: "Khalisa",
                review:
                  "Sangat membantu untuk menjual produk makanan saya. Alhamdulillah laris!",
                rating: 5,
                type: "Mitra",
              },
            ].map((testimonial, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-80 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      testimonial.type === "Mitra"
                        ? "bg-[#C1121F] text-white"
                        : "bg-[#669BBC] text-white"
                    }`}
                  >
                    {testimonial.type}
                  </span>
                </div>
                <p className="text-[#003049] text-sm leading-relaxed mb-4 italic">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#669BBC] to-[#003049] flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#003049]">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-[#003049]/60">
                      {testimonial.type}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lokasi & Jam Operasional */}
      <section
        id="lokasi"
        className="relative py-12 sm:py-16 bg-gradient-to-br from-[#003049] via-[#004060] to-[#003049]"
      >
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                Lokasi & Jam Operasional
              </h2>
              <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto">
                Warung buka setiap pagi. Datang lebih awal untuk pilihan yang
                lebih lengkap!
              </p>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Info Section */}
            <Reveal>
              <div className="space-y-6">
                {/* Jam Operasional */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-10 h-10 text-[#C1121F] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" />
                    </svg>
                    <h3 className="text-xl font-bold text-white">
                      Jam Operasional
                    </h3>
                  </div>
                  <div className="ml-13 space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="text-white/90 font-semibold text-sm">
                        Senin - Minggu
                      </span>
                      <span className="text-[#FFE8C5] font-bold text-base">
                        05:00 - 12:00 WIB
                      </span>
                    </div>
                    <p className="text-xs text-white/70 italic">
                      💡 Tips: Datang sebelum jam 8 pagi untuk pilihan produk
                      yang lebih lengkap!
                    </p>
                  </div>
                </div>

                {/* Alamat */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-10 h-10 text-[#669BBC] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <h3 className="text-xl font-bold text-white">
                      Alamat Warung
                    </h3>
                  </div>
                  <div className="ml-13 space-y-3">
                    <p className="text-white/90 leading-relaxed text-sm">
                      <strong className="text-white">
                        ANEKA KUE MURAH UMMU NADA
                      </strong>
                      <br />
                      Jl. Projakal, Batu Ampar
                      <br />
                      Kec. Balikpapan Utara
                      <br />
                      Kota Balikpapan, Kalimantan Timur 76136
                    </p>
                    <a
                      href="https://www.google.com/maps/place/ANEKA+KUE+MURAH+UMMU+NADA/@-1.2035229,116.8557864,17z/data=!3m1!4b1!4m6!3m5!1s0x2df14934e3b10dfb:0x4019c8c76e022d49!8m2!3d-1.2035283!4d116.8583613!16s%2Fg%2F11sqnzjvgw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#C1121F] to-[#780000] text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      Buka di Google Maps
                    </a>
                  </div>
                </div>

                {/* Kontak */}
                <div className="space-y-3 pt-4 border-t border-white/20">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-10 h-10 text-[#25D366] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <h3 className="text-xl font-bold text-white">
                      Hubungi Kami
                    </h3>
                  </div>
                  <div className="ml-13 space-y-1">
                    <a
                      href="tel:081254711633"
                      className="block text-lg font-bold text-white hover:text-[#FFE8C5] transition-colors"
                    >
                      0812-5471-1633
                    </a>
                    <p className="text-xs text-white/70">
                      Telepon atau WhatsApp untuk informasi dan pemesanan
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Google Maps */}
            <Reveal>
              <div className="bg-white rounded-2xl shadow-xl p-3 h-full min-h-[450px]">
                {/* Lazy-load the Google Maps iframe to avoid loading maps scripts
                    until the user scrolls near the map or clicks to load. This
                    reduces initial JS and layout work that PageSpeed flags as
                    forced geometry/position changes. */}
                <LazyMap
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0626871899173!2d116.8557864!3d-1.2035229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14934e3b10dfb%3A0x4019c8c76e022d49!2sANEKA%20KUE%20MURAH%20UMMU%20NADA!5e0!3m2!1sid!2sid!4v1729425000000!5m2!1sid!2sid"
                  title="Lokasi ANEKA KUE MURAH UMMU NADA"
                  className="rounded-xl"
                  style={{ borderRadius: "1rem", minHeight: "420px", height: "100%" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <BackToTop />
    </main>
  );
}
