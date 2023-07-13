import Header from "../../component/Header";
import Mandiri from "../../images/mandiri.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../component/Footer";

function Instructions() {
  const navigate = useNavigate();
  const { entities } = useSelector((state) => state.checkout);
  const countTotalPrice = (priceProduct) => {
    const result = priceProduct.reduce((prevValue, currValue) => {
      return prevValue + parseInt(currValue.price, 10);
    }, 0);
    return result;
  };
  return (
    <>
      <Header />
      <div className="crid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8 px-32 h-full">
        <div className="text-sm breadcrumbs pb-10">
          <ul>
            <li>
              <a onClick={() => navigate("/checkout")}>Checkout</a>
            </li>
            <li>
              <a className="text-orange-500">Intruksi Pembayaran</a>
            </li>
          </ul>
        </div>
        <span className="card-title text-2xl pb-10">Pembayaran</span>
        <div className="mockup-window border border-base-300">
          <div className="flex justify-center px-7 py-11 border-t border-base-300">
            <div className="flex flex-col w-full lg:flex-row">
              <div className="grid flex-grow h-auto card border-base-300 rounded-box place-items-start">
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>Name Product</th>
                        <th>Price</th>
                        <th>Discount(%)</th>
                        <th>Promo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      {entities.map((item) => {
                        return (
                          <tr key={item.id}>
                            <td>
                              <div className="flex items-center space-x-3">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-12 h-12">
                                    <img
                                      src={item.image}
                                      alt="Avatar Tailwind CSS Component"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <div className="font-bold">
                                    (1x) {item.title}
                                  </div>
                                  <div className="text-sm opacity-50">
                                    {item.category}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              $ {item.price}
                              <br />
                            </td>
                            <td>0%</td>
                            <th>-</th>
                          </tr>
                        );
                      })}
                    </tbody>
                    {/* foot */}
                    <tfoot>
                      <tr>
                        <th>
                          {/* <span className="text-lg">Total Pemesanan</span> */}
                        </th>
                        <th>{/* <span className="text-lg">$ .00</span> */}</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </tfoot>
                    <span className="card-title text-2xl py-5">
                      Metode Pembayaran
                    </span>
                    <span className="text-lg">
                      Bank Transfer (verifikasi manual)-Mandiri
                    </span>
                    <div className="card lg:card-side border-base-100">
                      <figure>
                        <img src={Mandiri} alt="Album" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">No Rek. 137000299089</h2>
                        <span>a.n. PT Widya Kreasi Bangsa</span>
                      </div>
                    </div>
                    <span className="text-lg">
                      Nominal yang harus dibayar senilai:
                    </span>
                    <span className="card-title text-4xl py-2">
                      $ {countTotalPrice(entities)}.00
                    </span>
                  </table>
                </div>
              </div>

              {/* <div className="divider lg:divider-horizontal">OR</div> */}
              <div className="grid flex-grow h-auto card border-base-300 rounded-box place-items-start">
                <div className="card w-auto border-neutral text-black">
                  <div className="card-body text-start">
                    <div className="join pb-5">
                      <input
                        className="join-item btn"
                        type="radio"
                        name="options"
                        aria-label="ATM"
                        checked
                      />
                      <input
                        className="join-item btn"
                        type="radio"
                        name="options"
                        aria-label="Internet Banking"
                      />
                      <input
                        className="join-item btn"
                        type="radio"
                        name="options"
                        aria-label="M-Banking"
                      />
                    </div>
                    <p>1. Masukkan kartu ke mesing ATM Mandiri.</p>
                    <p>2. Pilih Bahasa.</p>
                    <p>3. Masukkan PIN ATM.</p>
                    <p>4. Pilih menu transaksi lainnya.</p>
                    <p>5. Pilih menu “Transfer”.</p>
                    <p>6. lalu pilih ke relk Mandiri.</p>
                    <p>7. Masukkan no rekening yang dituju.</p>
                    <p>
                      8. Masukkan nominal jumlah uang yang akan di transfer.
                    </p>
                    <p>
                      9. Layar ATM akan menampilkan data transaksi anda, jika
                      data sudah benar pilih “YA”. Selesai, struk akan keluar
                      dari mesin ATM.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer footer-center p-10 bg-sky-900 text-primary-content">
            <div>
              <p className="font-bold text-xl pb-2">
                Sudah Transfer? Lakukan verifikasi pembayaran segera!
              </p>
              <button className="btn btn-wide btn-primary btn-lg sm:btn-sm md:btn-md lg:btn-lg">
                Verifikasi Pembayaran
              </button>
            </div>
          </footer>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Instructions;
