# 플러그인 목록

> 책 6장과 연결되는 보충 자료입니다.
> **코워크 업무 플러그인**(Marketing, Sales 등)과 **클로드 코드 플러그인**은 설치 위치와 용도가 다릅니다.

## 코워크 업무 플러그인 (책 6.2절)

책 표 6.2의 Marketing, Sales, Legal 등은 아래 저장소에서 확인합니다.
코워크 대화창 **+ → 플러그인** 메뉴에서 설치합니다.

| 저장소 | URL | 설명 |
| --- | --- | --- |
| knowledge-work-plugins | https://github.com/anthropics/knowledge-work-plugins | 마케팅·영업·법무·재무·HR 등 업무 플러그인 |
| financial-services | https://github.com/anthropics/financial-services | 금융 업무 특화 플러그인 |

## 클로드 코드 플러그인 — 설치 기본 흐름

클로드 코드에서 플러그인 페이지를 열고 안내에 따라 `/install` 명령을 실행합니다.
조직 계정이나 회사 장비에서는 설치 전 권한과 보안 정책을 확인하세요.

## 클로드 코드 공식 플러그인

| 플러그인 | URL | 설명 |
| --- | --- | --- |
| Superpowers | https://claude.com/plugins/superpowers | 코딩 에이전트용 스킬·개발 방법론 플러그인 ([obra/superpowers](https://github.com/obra/superpowers)) |
| Frontend Design | https://claude.com/plugins/frontend-design | UI/UX 디자인과 프론트엔드 개발에 특화되어 있습니다. |
| Feature Dev | https://claude.com/plugins/feature-dev | 기능 개발 전 과정을 보조합니다. |
| Code Review | https://claude.com/plugins/code-review | 코드 리뷰 흐름을 자동화하고 검토 품질을 높입니다. |
| Plugin Developer Toolkit | https://claude.com/plugins/plugin-dev | 클로드 코드 플러그인을 직접 만들 때 사용하는 도구입니다. |
| Context7 | https://claude.com/plugins/context7 | 최신 라이브러리 문서를 작업 맥락에 주입합니다. |
| GitHub | https://claude.com/plugins/github | GitHub 저장소와 이슈, PR 작업을 연결합니다. |
| Slack | https://claude.com/plugins/slack | 슬랙 워크스페이스와 업무 흐름을 연결합니다. |
| Vercel | https://claude.com/plugins/vercel | Vercel 배포와 프로젝트 관리를 지원합니다. |
| Mintlify | https://claude.com/plugins/mintlify | 문서 생성과 관리 작업을 보조합니다. |
| Sentry | https://claude.com/plugins/sentry | 에러 모니터링 정보를 작업 흐름에 연결합니다. |
| Security Guidance | https://claude.com/plugins/security-guidance | 보안 취약점 분석과 보안 판단을 돕습니다. |
| Commit Commands | https://claude.com/plugins/commit-commands | Git 커밋 메시지와 커밋 작업을 보조합니다. |
| Playwright | https://claude.com/plugins/playwright | 브라우저 자동화 테스트를 클로드 코드 작업에 연결합니다. |

## Superpowers — 에이전트 스킬 프레임워크

[obra/superpowers](https://github.com/obra/superpowers)는 코딩 에이전트가 따라야 할 **스킬 묶음 + 개발 방법론**입니다.
코드를 바로 쓰기 전에 요구사항을 정리하고, 설계를 합의한 뒤, 작은 단위 계획으로 나눠 실행·검토하는 흐름을 스킬로 강제합니다.
클로드 코드 공식 마켓플레이스 플러그인으로 설치하면 세션 시작 시 관련 스킬이 자동으로 적용됩니다.

### 설치 (클로드 코드)

공식 마켓플레이스에서 설치합니다.

```
/plugin install superpowers@claude-plugins-official
```

소스 코드와 스킬 원문은 GitHub 저장소에서 확인할 수 있습니다.

### 기본 워크플로

| 순서 | 스킬 | 하는 일 |
| --- | --- | --- |
| 1 | `brainstorming` | 코드 작성 전 요구사항·대안을 질문으로 정리하고 설계안을 섹션별로 확인 |
| 2 | `using-git-worktrees` | 설계 승인 후 격리 브랜치·워크트리에서 작업 시작 |
| 3 | `writing-plans` | 파일 경로·검증 단계가 있는 실행 계획 작성 |
| 4 | `subagent-driven-development` / `executing-plans` | 작업별 서브에이전트 실행 또는 배치 실행·중간 확인 |
| 5 | `test-driven-development` | RED-GREEN-REFACTOR — 실패 테스트 → 최소 구현 → 리팩터 |
| 6 | `requesting-code-review` | 계획 대비 구현·품질 2단계 리뷰 |
| 7 | `finishing-a-development-branch` | 테스트 통과 확인 후 merge/PR/보류 선택 |

### 스킬 라이브러리 하이라이트

| 분류 | 스킬 | 용도 |
| --- | --- | --- |
| 협업 | `dispatching-parallel-agents`, `receiving-code-review` | 병렬 서브에이전트, 리뷰 피드백 반영 |
| 디버깅 | `systematic-debugging`, `verification-before-completion` | 4단계 원인 추적, 완료 전 실제 검증 |
| 메타 | `writing-skills`, `using-superpowers` | 새 스킬 작성법, 스킬 시스템 소개 |

> 책 4장(스킬), 6장(AI 팀·에이전트 협업), 7장(클로드 코드)과 연결해 보면 좋습니다.
> Cursor·Codex·Pi 등 다른 코딩 에이전트용 설치법은 [저장소 README](https://github.com/obra/superpowers#installation)를 참고하세요.

## 관련 저장소

| 저장소 | URL | 설명 |
| --- | --- | --- |
| obra/superpowers | https://github.com/obra/superpowers | Superpowers 플러그인 소스·스킬 라이브러리·개발 방법론 |
| anthropics/knowledge-work-plugins | https://github.com/anthropics/knowledge-work-plugins | 생산성, 영업, 마케팅, 데이터 작업용 플러그인 예시를 확인할 수 있습니다. |
| openai/codex-plugin-cc | https://github.com/openai/codex-plugin-cc | 클로드 코드 플러그인 생태계와 호환되는 외부 플러그인 예시입니다. |
