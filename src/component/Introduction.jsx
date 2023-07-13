import Img from "../images/userNew.png";

function Introduction() {
  return (
    <>
      <div className="hero flex h-96 bg-sky-900 py-8 px-24">
        <div className="hero-content flex flex-col w-full h-full space-y-7">
          <div>
            <h1 className="text-5xl font-bold text-white">
              Persembahan Istimewa! Bersama kami
            </h1>
            <p className="py-6 text-white text-ellipsis">
              Dapatkan diskon luar biasa hingga 20% untuk produk pilihan kami.
              Tingkatkan gaya hidupmu dengan koleksi terbaru dan hemat lebih
              banyak! Segera kunjungi toko kami sebelum minggu ini berakhir.
              Jangan lewatkan kesempatan emas ini untuk berbelanja cerdas!
            </p>
          </div>
        </div>
        <div className={"w-full justify-center hidden lg:flex"}>
          <img className={"h-96"} src={Img} alt="img" />
        </div>
      </div>
    </>
  );
}

export default Introduction;
