import { useEffect, useMemo, useState } from "react";
import { supabase } from "../supabase";
import "../styles/View.css";
import Pagination from "../components/Pagenation";
import BackButton2 from "../components/BackButton2";

const PAGE_SIZE = 1;

export default function App() {
  const [notes, setNotes] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);
      setError("");

      const from = (page - 1) * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;

      const { data, error, count } = await supabase
        .from("Note")
        .select("name, title, advice, review, date", { count: "exact" })
        .order("date", { ascending: false })
        .range(from, to);

      if (error) setError(error.message);
      else {
        setNotes(data ?? []);
        setTotal(count ?? 0);
      }
      setLoading(false);
    };
    fetchNotes();
  }, [page]);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(total / PAGE_SIZE)),
    [total]
  );

  const toJpDate = (d) => {
    if (!d) return "";
    const date = typeof d === "string" ? new Date(d) : d;
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <div className="wrap">
      <BackButton2 />
      <header className="header">
        <span className="brand">旅のきろく</span>
      </header>

      {error && <p className="error">エラー: {error}</p>}
      {loading && <p className="loading">読み込み中...</p>}
      {!loading && notes.length === 0 && (
        <p className="empty">まだきろくがありません。</p>
      )}

      <ul className="list">
        {notes.map((n, idx) => (
          <li key={idx} className="card">
            <div className="card-head">
              <div className="name">{n.name} のきろく</div>
              <div className="date">{toJpDate(n.date)}</div>
            </div>

            <h2 className="title">{n.title || "（タイトル未入力）"}</h2>
            <div className="divider" />

            {/* 参考画像の構成に合わせて、テキスト枠のみ */}
            <section className="section">
              <div className="label">旅のアドバイス</div>
              <div className="box">{n.advice || "—"}</div>
            </section>

            <section className="section">
              <div className="label">旅の感想</div>
              <div className="box">{n.review || "—"}</div>
            </section>
          </li>
        ))}
      </ul>

      <Pagination
        page={page}
        totalPages={totalPages}
        onPrev={() => setPage((p) => Math.max(1, p - 1))}
        onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
        onJump={(p) => setPage(p)}
      />
    </div>
  );

}
