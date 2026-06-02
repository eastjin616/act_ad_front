# 프론트엔드 브랜치 운영 규칙 정리

## 배경

3명이 동시에 작업할 때 운영 코드와 개발 중인 변경사항이 섞이지 않도록 브랜치 역할을 명시할 필요가 있었다.

## 구현 방식

- `main`을 운영 브랜치로 정했다.
- `develop`을 개발 통합 브랜치로 정했다.
- 신규 기능은 `feature/<브랜치명>`, 버그 수정은 `fix/<브랜치명>`에서 작업하도록 README에 기록했다.
- 기능 및 수정 PR은 기본적으로 `develop`을 대상으로 생성하도록 작업 흐름을 정리했다.

## 핵심 결정

- `main`은 배포 가능한 상태만 유지한다.
- 운영 반영은 검증된 `develop` 변경사항을 `main`에 병합하는 방식으로 진행한다.

## 영향 범위

- README
- GitHub 원격 `develop` 브랜치

## 검증 내용

- `main`, `develop`, `origin/main`, `origin/develop`의 기준 커밋이 일치하는지 확인했다.
- `git diff --check`로 README 변경 형식을 확인했다.

## 남은 리스크

- GitHub branch protection rule은 아직 설정하지 않았다.
- PR 승인 인원과 merge 방식은 팀 합의가 필요하다.

