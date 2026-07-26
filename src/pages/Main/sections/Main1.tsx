import './mainSections.css';
import { Link } from 'react-router-dom';

export default function Main1() {
  return (
    <section id="main1" className="main-section main-section-1 main-hero">
      <header className="main-header">
        <a className="brand" href="#main1" aria-label="ACT AD 홈">ACT<span>_</span>AD</a>
        <nav className="main-nav" aria-label="주요 메뉴">
          <a href="#main2">공고 찾기</a>
          <a href="#main5">인재 찾기</a>
          <a href="#main3">프로젝트</a>
          <a href="#main4">커뮤니티</a>
        </nav>
        <div className="header-actions">
          <Link className="button button-dark" to="/login">로그인</Link>
          <Link className="button button-red" to="/join">무료 시작</Link>
        </div>
      </header>

      <div className="hero-content">
        <p className="eyebrow">영화 · 드라마 · 광고 전문 구인구직</p>
        <h1>당신의<br /><strong>커리어를</strong><br />스크린 위에</h1>
        <p className="hero-description">배우, 감독, 촬영감독, 미술, 조명까지<br />엔터테인먼트 업계 모든 포지션을 한 곳에서</p>
        <div className="hero-actions">
          <a className="button button-red" href="#main2">⌕&nbsp; 공고 탐색하기</a>
          <a className="button button-outline" href="#main5">인재 찾기</a>
        </div>
      </div>
      <div className="scroll-hint" aria-hidden="true">⌄<span>스크롤</span></div>
    </section>
  );
}
