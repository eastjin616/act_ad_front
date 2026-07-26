import './mainSections.css';

export default function Main2() {
  return (
    <section id="main2" className="main-section main-section-2 search-section">
      <div className="section-copy">
        <h2>지금 바로<br /><strong>찾아보세요</strong></h2>
        <p>2,840개의 공고와 18,600명의 인재가<br />당신을 기다리고 있습니다.</p>
      </div>
      <div className="search-panel">
        <h3>원하는 포지션을 검색하세요</h3>
        <div className="search-bar">
          <select defaultValue="all" aria-label="직군 선택">
            <option value="all">전체 직군</option>
            <option value="actor">배우</option>
            <option value="director">감독</option>
          </select>
          <input placeholder="포지션, 프로젝트명, 제작사..." aria-label="검색어" />
          <button aria-label="검색">→</button>
        </div>
        <div className="tag-list">
          {['주연 배우', '촬영감독', '조명팀', '미술감독', '편집'].map((tag) => <span key={tag}># {tag}</span>)}
        </div>
        <div className="stats-grid">
          <strong>2,840<small>진행 공고</small></strong>
          <strong>18,600+<small>등록 인재</small></strong>
          <strong>490<small>활성 프로젝트</small></strong>
          <strong>340개사<small>파트너사</small></strong>
        </div>
      </div>
    </section>
  );
}
