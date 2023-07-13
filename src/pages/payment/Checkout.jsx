import Header from "../../component/Header";
import Mandiri from "../../images/mandiri.png";
import Bca from "../../images/bca.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeCart } from "../../store/checkout/slice";

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { entities } = useSelector((state) => state.checkout);
  const countTotalPrice = (priceProduct) => {
    const result = priceProduct.reduce((prevValue, currValue) => {
      return prevValue + parseInt(currValue.price, 10);
    }, 0);
    return result;
  };
  const handleRemoveCart = (item) => {
    dispatch(removeCart(item));
  };
  return (
    <>
      <Header />
      <div className="crid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8 px-32 h-full">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <a className="text-orange-500">Checkout</a>
            </li>
            <li>
              <a onClick={() => navigate("/pembayaran")}>Intruksi Pembayaran</a>
            </li>
          </ul>
        </div>
        <span className="card-title text-2xl pb-10">Checkout</span>
        <div className="flex flex-col w-full lg:flex-row">
          <div className="join join-vertical w-2/4">
            <span className="card-title text-1xl pb-5">
              Pilih Metode Pembayaran
            </span>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" checked="checked" />
              <div className="collapse-title text-xl font-medium">
                Bank Transfer (verifikasi manual)
              </div>
              <div className="collapse-content">
                <p>
                  Pembayaran melalui Bank Transfer Mandiri atau BCA. Metode
                  bayar ini memerlukan verifikasi pembayaran manual melalui
                  Whatsapp Bank Transfer ke Rek Bank Mandiri Bank Transfer ke
                  Rek Bank BCA
                </p>
                <div className="form-control py-6">
                  <label className="label cursor-pointer">
                    <span className="label-text">
                      <img src={Mandiri} alt="" />
                      Bank Transfer ke Rek Bank Mandiri
                    </span>
                    <input
                      type="checkbox"
                      checked="checked"
                      className="checkbox justify-end"
                    />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="label-text">
                      <img src={Bca} alt="" />
                      Bank Transfer ke Rek Bank BCA
                    </span>
                    <input
                      type="checkbox"
                      // checked="checked"
                      className="checkbox justify-end"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Virtual Account (verifikasi otomatis)
              </div>
              <div className="collapse-content">
                <p>
                  Pembayaran melalui virtual account berbagai bank. Metode bayar
                  ini akan diverifikasi secara otomatis.
                </p>
                <div className="form-control py-6">
                  <label className="label cursor-pointer">
                    <span className="label-text">
                      <img src={Mandiri} alt="" />
                      Virtual Account Mandiri
                    </span>
                    <input
                      type="checkbox"
                      // checked="checked"
                      className="checkbox justify-end"
                    />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="label-text">
                      <img src={Bca} alt="" />
                      Virtual Account BCA
                    </span>
                    <input
                      type="checkbox"
                      // checked="checked"
                      className="checkbox justify-end"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="divider lg:divider-horizontal">AND</div>
          <div className="grid flex-grow h-32 card bg-base-100 rounded-box place-items-baseline">
            <span className="card-title text-1xl pb-5">Ringkasan Pesanan</span>
            <p>Terima kasih telah berbelanja di website kami</p>
            <p>Berikut adalah list product yang anda beli : </p>
            <div className="card-body">
              <div>
                <span className="card-title text-sm pb-2">Kode Promo</span>
                <div className="join">
                  <input
                    className="input input-bordered join-item"
                    placeholder="Masukan Kode Promo"
                  />
                  <button className="btn btn-primary join-item rounded-r-full">
                    Terapkan
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Name Product</th>
                      <th>Price</th>
                      <th>Discount(%)</th>
                      <th>Promo</th>
                      <th></th>
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
                          <td>$ {item.price}</td>
                          <td>0%</td>
                          <th>-</th>
                          <th>
                            <button
                              onClick={() => handleRemoveCart(item)}
                              className="btn btn-error"
                            >
                              Hapus
                            </button>
                          </th>
                        </tr>
                      );
                    })}
                  </tbody>
                  {/* foot */}
                  <tfoot>
                    <tr>
                      <th>
                        <span className="text-lg">Total Pemesanan</span>
                      </th>
                      <th>
                        <span className="text-lg">
                          $ {countTotalPrice(entities)}.00
                        </span>
                      </th>
                      <th></th>
                      <th>
                        <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
                          <button
                            onClick={() => navigate("/")}
                            className="btn btn-accent"
                          >
                            Belanja Lagi
                          </button>
                          <button
                            onClick={() => navigate("/pembayaran")}
                            className="btn btn-primary"
                          >
                            Pembayaran
                          </button>
                        </div>
                      </th>
                      <th></th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
