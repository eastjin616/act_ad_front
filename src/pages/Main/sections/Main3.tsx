import './mainSections.css';

const jobs = [
  ['🎬', '주연 배우 (20-30대 여성)', 'HASH Entertainment · 웹드라마 카지노', '마감임박'],
  ['🎥', '촬영감독 (DOP)', '스튜디오 루나 · 장편 독립영화', '신규'],
  ['🎨', '미술감독 · 세트 디자이너', 'CJ ENM · OTT 오리지널 시리즈', '신규'],
  ['🎵', '음악감독 (OST 제작 포함)', '픽처스코어 · 광고 캠페인', 'D-3'],
  ['🎬', '조명감독 (가우디)', '필름케이 · 넷플릭스', '신규'],
];

export default function Main3() {
  return (
    <section id="main3" className="main-section main-section-3 jobs-section">
      <div className="section-heading dark-heading">
        <div><h2>지금 주목할 공고</h2><p>마감 임박 · 신규 등록 · 높은 경쟁률 순</p></div>
      </div>
      <div className="job-list">
        {jobs.map(([icon, title, company, badge]) => (
          <article className="job-card" key={title}>
            <div className="job-card-top"><span className="job-icon">{icon}</span><span className="job-badge">{badge}</span></div>
            <h3>{title}</h3><p>{company}</p>
            <ul><li>⌖ 서울</li><li>▣ 2026.07 촬영</li><li>♙ 지원자 24명</li></ul>
          </article>
        ))}
      </div>
      <a className="section-link" href="#main2">전체 공고 보기&nbsp; →</a>
    </section>
  );
}
