import React from "react";

const Pagination = (props) => {
  const { onLeftClick, onRigthClick, page, totalPages } = props;

  return (
    <div className="pagination">
      <button onClick={onLeftClick}>Prevs</button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRigthClick}>Next</button>
    </div>
  );
};

export default Pagination;
