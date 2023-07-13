import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../store/products/action";
import Pagination from "../../component/Pagination";
import Loading from "../../component/Loading";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const { entities, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchProducts = async () => {
    dispatch(getAll());
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("entities", entities);
  return (
    <>
      <div
        className={
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8 px-32 h-full"
        }
      >
        {loading ? (
          <Loading />
        ) : (
          entities.map((product) => {
            return (
              <div
                key={product.id}
                className="cursor-pointer w-full max-w-sm bg-white border border-sky-900 rounded-lg shadow py-5"
                onClick={() => navigate(`detail/${product.id}`)}
              >
                <figure>
                  <img
                    className="p-8 h-96 w-96"
                    src={product.image}
                    alt="Product"
                  />
                </figure>
                <div className="px-5 pb-5">
                  <h5 className="text-base font-semibold tracking-tight text-sky-900 py-5 cursor-pointer">
                    {product.title}
                  </h5>
                  {/* <p>{product.description}</p> */}
                  <span className="text-3xl font-bold text-sky-900">
                    <p>$ {product.price}</p>
                  </span>
                  <div className="card-actions justify-end">
                    <span className="text-sm font-normal text-sky-900">
                      <p>{product.rating.rate}RB+ Terjual</p>
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <Pagination />
    </>
  );
}

export default ProductList;
