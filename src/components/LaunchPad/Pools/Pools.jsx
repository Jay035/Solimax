import PoolsBtn from "./PoolsBtn";
import ReactPaginate from "react-paginate";
import { lazy, Suspense, useState } from "react";
import { GlobalAuth } from "../../../context/GlobalContext";
import arrowLeft from "../../assets/icons/pagination-arrow_left.svg";
import arrowRight from "../../assets/icons/pagination-arrow_right_alt.svg";
import Loading from "../../Loading";
const PoolCard = lazy(() => import("./PoolCard"));

export default function Pools() {
  const { poolsData, selectedPool, setSelectedPool } = GlobalAuth();
  const [pageNumber, setPageNumber] = useState(0);
  const cardPerPage = 9;
  const pagesVisited = pageNumber * cardPerPage;
  const pageCount = Math.ceil(poolsData.length / cardPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  console.log(poolsData)
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
          <PoolsBtn item={item} active={selectedPool === item.id} />
        ))}

        {/* <PoolsBtn id="active" title="Active Pools" />
        <PoolsBtn id="upcoming" title="Upcoming Pools" />
        <PoolsBtn id="completed" title="Completed Pools" /> */}
      </div>

      <div className="container">
        {poolsData
          .slice(pagesVisited, pagesVisited + cardPerPage)
          .map((pool) => (
            <PoolCard pool={pool} />
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
