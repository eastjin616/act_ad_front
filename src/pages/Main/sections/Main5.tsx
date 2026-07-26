import './mainSections.css';

const talents = [
  ['KM', '김민서', '배우 · 경력 5년', '드라마', '영화'],
  ['LJ', '이준혁', '촬영감독 · 8년', 'DCI 4K', '광고'],
  ['PS', '박소라', '미술감독 · 11년', '사극', 'OTT'],
  ['CD', '최동훈', '조명감독 · 7년', '영화', 'CF'],
];

export default function Main5() {
  return (
    <section id="main5" className="main-section main-section-5 talents-section">
      <div className="section-heading dark-heading"><div><h2>주목할 인재</h2><p>이번 주 가장 많이 조회된 인재</p></div></div>
      <div className="talent-grid">
        {talents.map(([initials, name, role, tag1, tag2], index) => <article className="talent-card" key={name}><span className={`avatar avatar-${index}`}>{initials}</span><h3>{name}</h3><p>{role}</p><div><span>{tag1}</span><span>{tag2}</span></div></article>)}
      </div>
    </section>
  );
}
