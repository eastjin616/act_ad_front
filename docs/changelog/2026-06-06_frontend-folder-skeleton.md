# 프론트엔드 폴더 스켈레톤 추가

## 배경

프론트엔드 구현 기획을 확정하기 전에 앱 영역과 공통 코드 영역을 먼저 구분해야 했다.

## 구현 방식

- `apps/miniapp/`과 `apps/web/` 폴더를 추가했다.
- `common/ui/`, `common/features/`, `common/api-client/`, `common/types/` 폴더를 추가했다.
- 빈 폴더를 Git에서 추적할 수 있도록 각 폴더에 `.gitkeep`을 추가했다.
- README의 디렉터리 계획을 `common/` 기준으로 갱신했다.
- `docs/frontend-folder-guide.md`에 폴더별 역할과 판단 기준을 정리했다.

## 핵심 결정

- 실제 실행 앱은 `apps/` 아래에 둔다.
- 공유 코드는 `packages/`가 아니라 `common/` 아래에 둔다.
- 프레임워크, 패키지 매니저, 빌드 설정, 의존성 파일은 아직 추가하지 않는다.

## 영향 범위

- `apps/miniapp/`
- `apps/web/`
- `common/`
- README
- `docs/frontend-folder-guide.md`

## 검증 내용

- `find apps common -maxdepth 4 -type f | sort`로 새 폴더에 `.gitkeep`만 있는지 확인했다.
- `git diff --check`로 변경 형식을 확인했다.

## 남은 리스크

- React Native, Next.js, 패키지 매니저, 백엔드 API 계약은 팀 기획 이후 확정해야 한다.
