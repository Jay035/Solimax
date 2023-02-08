import PoolCard from "./PoolCard";
import PoolsBtn from "./PoolsBtn";
import { PoolsData } from "./PoolsData";
import ReactPaginate from 'react-paginate';

export default function Pools() {
  return (
    <section className="pools">
      <PoolsBtn />
      <div className="container">
        {PoolsData.map(pool => (
        
        <PoolCard pool={pool} />
        ))}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        // onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        // pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </section>
  );
}
