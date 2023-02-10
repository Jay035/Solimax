import PoolsBtn from "./PoolsBtn";
import ReactPaginate from "react-paginate";
import { lazy, Suspense, useState } from "react";
import { GlobalAuth } from "../../../context/GlobalContext";
import Loading from "../../Loading";
const PoolCard = lazy(() => import("./PoolCard"));

export default function Pools() {
  const { poolsData, selectedPool } = GlobalAuth();
  const [pageNumber, setPageNumber] = useState(0);
  const cardPerPage = 9;
  const pagesVisited = pageNumber * cardPerPage;
  const pageCount = Math.ceil(poolsData.length / cardPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const titles = [
    {
      id: "active",
      title: "Active Pools",
    },
    {
      id: "upcoming",
      title: "Upcoming Pools",
    },
    {
      id: "completed",
      title: "Completed Pools",
    },
  ];

  return (
    <Suspense fallback={<Loading />}>
      <section className="pools">
        <div className="pools-btns">
          {titles.map((item) => (
            <PoolsBtn
              key={item.id}
              item={item}
              active={selectedPool === item.id}
            />
          ))}

          {/* <PoolsBtn id="active" title="Active Pools" />
        <PoolsBtn id="upcoming" title="Upcoming Pools" />
        <PoolsBtn id="completed" title="Completed Pools" /> */}
        </div>

        <div className="container">
          {poolsData
            .slice(pagesVisited, pagesVisited + cardPerPage)
            .map((pool) => (
              <PoolCard key={pool.id} pool={pool} />
            ))}
        </div>

        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={changePage}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName={"paginationBtns"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </section>
    </Suspense>
  );
}
