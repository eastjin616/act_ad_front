import './mainSections.css';

const categories = [
  ['🎭', '배우 · 출연진', '348 공고', 'category-wide category-black'],
  ['📷', '촬영 · 기술', '221 공고', 'category-red'],
  ['🎬', '감독 · 연출', '105 공고', 'category-beige'],
  ['🎨', '미술 · 세트', '189 공고', 'category-blue'],
  ['💡', '조명 · 음향', '97 공고', 'category-green'],
  ['✂️', '편집 · 후반', '143 공고', 'category-yellow'],
];

export default function Main4() {
  return (
    <section id="main4" className="main-section main-section-4 categories-section">
      <div className="section-heading"><h2>직군별로<br />탐색하기</h2><a className="section-link red-link" href="#main2">전체 직군 보기 →</a></div>
      <div className="category-grid">
        {categories.map(([icon, title, count, color]) => <article className={`category-card ${color}`} key={title}><span>{icon}</span><h3>{title}</h3><p>{count}</p></article>)}
      </div>
    </section>
  );
}
