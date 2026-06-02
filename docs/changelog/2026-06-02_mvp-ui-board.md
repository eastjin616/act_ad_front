# MVP UI 보드 추가

## 배경

Figma MCP 연결은 완료했지만 Starter 플랜 호출 한도에 도달해 편집 가능한 Figma 레이어로 가져오지 못했다. 구현 전에 팀이 초기 화면 방향을 검토할 수 있도록 로컬에서 만든 UI 보드를 저장소에 보존했다.

## 구현 방식

- 앱인토스 미니앱 화면 4개를 정리했다.
  - 공고 탐색
  - 프로젝트 상세
  - 간편 지원
  - 내 프로필
- 제작사 관리 웹 대시보드를 정리했다.
  - 팀별 모집 현황
  - 프리프로덕션 일정
  - 최근 지원자
- HTML 원본과 PNG 미리보기를 `docs/design/act-ad-mvp-ui-board/`에 추가했다.
- README에서 바로 접근할 수 있도록 링크를 연결했다.

## 핵심 결정

- UI 보드는 MVP 논의를 위한 초안이다.
- 완성된 디자인 시스템이나 구현 명세로 간주하지 않는다.
- AI 추천은 후순위 검토 항목으로만 표시한다.

## 영향 범위

- `docs/design/act-ad-mvp-ui-board/index.html`
- `docs/design/act-ad-mvp-ui-board/preview.png`
- README

## 검증 내용

- HTML을 로컬에서 렌더링해 화면 잘림과 겹침 여부를 확인했다.
- HTML과 PNG 파일 형식을 확인했다.
- `git diff --check`로 변경 형식을 확인했다.

## 남은 리스크

- 현재 보드는 정적 시안이므로 사용자 상호작용은 검증하지 않았다.
- Figma Starter MCP 한도가 복구되면 편집 가능한 Figma 파일로 옮겨야 한다.

