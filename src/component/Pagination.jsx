function Pagination() {
  return (
    <>
      <div className="join flex justify-center pb-5">
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="1"
          checked
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="2"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="3"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="..."
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="9"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="10"
        />
      </div>
    </>
  );
}

export default Pagination;
