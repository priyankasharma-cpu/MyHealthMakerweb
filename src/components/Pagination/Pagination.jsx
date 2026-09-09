import "./pagination.css";

const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    if (totalPages <= 1) return null;

    return (
        <nav className="pagination" aria-label="Campaign pagination">

            <button
                type="button"
                className="pagination__button pagination__button--arrow"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                aria-label="Previous page"
            >
                ←
            </button>

            <div className="pagination__pages">
                {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                ).map((page) => (
                    <button
                        key={page}
                        type="button"
                        className={`pagination__button ${currentPage === page
                                ? "pagination__button--active"
                                : ""
                            }`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                type="button"
                className="pagination__button pagination__button--arrow"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                aria-label="Next page"
            >
                →
            </button>

        </nav>
    );
};

export default Pagination;