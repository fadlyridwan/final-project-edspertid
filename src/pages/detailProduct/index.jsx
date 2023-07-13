import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDetail } from "../../store/products/action";
import { useEffect } from "react";
import { addItem } from "../../store/checkout/slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DetailProduct() {
  const notify = () =>
    toast.success("Success add to Cart !", {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { entity } = useSelector((state) => state.product);

  const fetchProduct = async (productId) => {
    await dispatch(getDetail(productId));
  };

  useEffect(() => {
    fetchProduct(id);
  }, []);
  console.log("entity", entity);
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="p-8 h-min" src={entity.image} alt="Album" />
        </figure>
        <div className="card-body">
          <div className="indicator">
            <span className="indicator-item badge badge-info">NEW</span>
          </div>
          <span className="card-title text-4xl">{entity.title}</span>
          <div className="rating">
            <span className="card-title text-1xl">{entity.rating.rate}+</span>
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <span>Category : {entity.category}</span>
          <span>Ready Stok : {entity.rating.count}</span>
          <span>Price : $ {entity.price}</span>
          <span className=" text-xl">
            Description : <br /> {entity.description}
          </span>

          <div className="card-actions py-5">
            <button
              onClick={() => {
                notify();
                {
                  dispatch(addItem(entity));
                }
              }}
              className="btn btn-primary"
            >
              + Add to Cart
            </button>
            <ToastContainer />
            <button onClick={() => navigate("/")} className="btn btn-error">
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailProduct;
