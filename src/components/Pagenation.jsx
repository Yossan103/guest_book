
function Pagination({ page, totalPages, onPrev, onNext, onJump }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="pager">
      <button className="btn" onClick={onPrev} disabled={page === 1}>
        ◀ 前へ
      </button>
      <div className="pages">
        {pages.map((p) => (
          <button
            key={p}
            className={`page ${p === page ? "active" : ""}`}
            onClick={() => onJump(p)}
          >
            {p}
          </button>
        ))}
      </div>
      <button className="btn" onClick={onNext} disabled={page === totalPages}>
        次へ ▶
      </button>
    </div>
  );
}
export default Pagination