import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagenation = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  console.log(page, totalPages);
  return (
    <div>
      <div>
        {page > 1 && (
          <button onClick={() => handlePageChange(page - 1)}>Previous</button>
        )}

        {page < totalPages && (
          <button onClick={() => handlePageChange(page + 1)}>Next</button>
        )}
        <p>
          page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagenation;
