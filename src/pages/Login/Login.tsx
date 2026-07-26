import { Link } from 'react-router-dom';
import './login.css';

export default function Login() {
  return (
    <main className="login-page">
      <header className="login-header">
        <Link className="login-brand" to="/">ACT<span>_</span>AD</Link>
        <nav className="login-nav" aria-label="주요 메뉴">
          <a href="/#main2">공고 찾기</a>
          <a href="/#main5">인재 찾기</a>
          <a href="/#main3">프로젝트</a>
          <a href="/#main4">커뮤니티</a>
        </nav>
        <div className="header-actions">
          <Link className="button button-dark" to="/login">로그인</Link>
          <Link className="button button-red" to="/join">무료 시작</Link>
        </div>
      </header>

      <div className="login-card">
        <section className="login-promo">
          <p className="login-promo-brand">ACT_AD</p>
          <h1>엔터테인먼트<br />커리어의<br />시작</h1>
          <p className="login-promo-copy">배우, 감독, 촬영감독, 미술, 조명까지<br />업계 모든 포지션이 여기 있습니다.</p>
          <div className="login-stats">
            <strong>2,840 <small>진행 중인 공고</small></strong>
            <strong>18,600+ <small>등록 인재</small></strong>
            <strong>340개사 <small>파트너 제작사</small></strong>
          </div>
        </section>

        <section className="login-form-panel">
          <h2>다시 오셨군요</h2>
          <p className="login-subtitle">act_ad에 로그인하세요</p>
          <div className="login-tabs"><button className="active" type="button">로그인</button><Link to="/join">회원가입</Link></div>
          <form onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="email">이메일</label>
            <input id="email" type="email" placeholder="name@example.com" />
            <label htmlFor="password">비밀번호</label>
            <input id="password" type="password" placeholder="비밀번호 입력" />
            <label className="remember"><input type="checkbox" /> 로그인 상태 유지</label>
            <button className="login-submit" type="submit">⇥&nbsp; 로그인</button>
          </form>
          <div className="social-divider"><span>또는 소셜 로그인</span></div>
          <button className="social-button kakao" type="button">◯&nbsp; 카카오로 시작하기</button>
          <button className="social-button naver" type="button">네이버로 시작하기</button>
          <button className="forgot-password" type="button">비밀번호를 잊으셨나요?</button>
        </section>
      </div>
    </main>
  );
}
