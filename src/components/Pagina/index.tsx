import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Pagina = ({pageNumber, setPageNumber, info}) => {
  const [width, setWidth] = useState(1)
  const updateDimensions = () => {
  setWidth(window.innerWidth)
  }
  useEffect(() => {
  window.addEventListener("resize", (updateDimensions))
  return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  return(
    <>
      <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        nextLabel="Próximo"
        previousLabel="Anterior"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousClassName="btn btn-success fs-5 prev"
        nextClassName="btn btn-success fs-5 next"
        previousLinkClassName="text-white text-decoration-none"
        nextLinkClassName="text-white text-decoration-none"
        pageLinkClassName="page-link"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={(e) => setPageNumber(e.selected + 1)}
        />
    </>
  )
}

export default Pagina