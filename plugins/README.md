# 플러그인 목록

> 책 6장과 연결되는 보충 자료입니다.
> **코워크 업무 플러그인**(Marketing, Sales 등)과 **클로드 코드 플러그인**은 설치 위치와 용도가 다릅니다.

## 코워크·업무 플러그인 (책 6.2절)

책 표 6.2의 Marketing, Sales, Legal 등은 앤트로픽이 공개한 **역할별 플러그인 마켓플레이스**에서 설치합니다.
각 플러그인은 스킬(자동 적용)·슬래시 명령(직접 호출)·MCP 커넥터(외부 도구)로 구성됩니다.

| 설치 위치 | 방법 |
| --- | --- |
| **코워크** | [claude.com/plugins](https://claude.com/plugins/)에서 설치, 또는 저장소 URL 붙여넣기 |
| **클로드 코드** | `claude plugin marketplace add <저장소>` 후 `claude plugin install <이름>@<마켓>` |

> 설치 전 플러그인이 접근하는 MCP 서버·파일·권한을 확인하세요. 조직 계정은 보안 정책을 먼저 점검합니다.

### knowledge-work-plugins — 일반 지식 업무

[anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)는 코워크를 **직무 전문가**로 바꾸는 11개 플러그인 묶음입니다.

| 플러그인 | 하는 일 | 대표 커넥터 |
| --- | --- | --- |
| `marketing` | 콘텐츠·캠페인·브랜드 보이스·성과 리포트 | Slack, Canva, Figma, HubSpot, Ahrefs |
| `sales` | 리드 리서치·콜 준비·파이프라인·아웃리치 | HubSpot, Clay, ZoomInfo, Fireflies |
| `legal` | 계약 검토·NDA 분류·컴플라이언스·리스크 | Slack, Box, Egnyte, Microsoft 365 |
| `finance` | 분개·대사·재무제표·결산·감사 지원 | Snowflake, Databricks, BigQuery |
| `product-management` | 스펙·로드맵·리서치 합성·경쟁 분석 | Linear, Jira, Figma, Amplitude |
| `customer-support` | 티켓 분류·응답 초안·에스컬레이션·KB 작성 | Intercom, HubSpot, Guru |
| `data` | SQL·통계·대시보드·검증 | Snowflake, Databricks, Hex |
| `productivity` | 일정·태스크·개인 맥락 관리 | Notion, Asana, Linear, Microsoft 365 |
| `enterprise-search` | 이메일·채팅·문서 통합 검색 | Slack, Notion, Guru, Microsoft 365 |
| `bio-research` | 문헌·유전체·타깃 우선순위 등 R&D | PubMed, Benchling, Open Targets |
| `cowork-plugin-management` | 팀 맞춤 플러그인 제작·커스터마이즈 | — |

```bash
claude plugin marketplace add anthropics/knowledge-work-plugins
claude plugin install marketing@knowledge-work-plugins
```

책 6.2.1절 예제 6.2(`/campaign-plan`)는 `marketing` 플러그인과 연결됩니다.
회사 용어·도구에 맞게 `.mcp.json`과 스킬 파일을 수정하면 팀 전용 플러그인이 됩니다.

### financial-services — 금융 서비스

[anthropics/financial-services](https://github.com/anthropics/financial-services)는 IB·주식 리서치·PE·자산관리·펀드 어드민 워크플로용 에이전트와 스킬입니다.

| 유형 | 예시 | 대표 명령 |
| --- | --- | --- |
| **에이전트** | Pitch Agent, Market Researcher, GL Reconciler, Earnings Reviewer | 워크플로 전체 자동화 |
| **버티컬 스킬** | investment-banking, equity-research, private-equity, wealth-management | `/comps`, `/dcf`, `/earnings`, `/ic-memo` |
| **MCP 커넥터** | FactSet, S&P Global, PitchBook, LSEG, Morningstar 등 11개 | `financial-analysis` 코어 플러그인에 집중 |

```bash
claude plugin marketplace add anthropics/financial-services
claude plugin install financial-analysis@claude-for-financial-services
claude plugin install pitch-agent@claude-for-financial-services
```

코워크에서는 **Settings → Plugins → Add plugin**에 저장소 URL(`https://github.com/anthropics/financial-services`)을 붙여 설치합니다.

> **주의**: 투자·법률·세무 조언이 아닙니다. 모델·메모·대사 등 **초안**을 만들고 반드시 전문가가 검토·승인해야 합니다.

### claude-for-legal — 법무

[anthropics/claude-for-legal](https://github.com/anthropics/claude-for-legal)은 인하우스·로펌·로스쿨 실무용 **연습 영역별** 플러그인입니다.

| 플러그인 | 하는 일 | 대표 에이전트·명령 |
| --- | --- | --- |
| `commercial-legal` | 벤더 MSA·NDA·갱신·에스컬레이션 | Vendor Agreement Reviewer, `/commercial-legal:review` |
| `privacy-legal` | DPA·DSAR·PIA·규정 갭 분석 | DSAR Responder, `/privacy-legal:dsar-response` |
| `corporate-legal` | 실사·마감 체크리스트·이사회 동의 | Tabular Diligence Review |
| `employment-legal` | 채용·해고·분류·조사 | Termination Reviewer |
| `litigation-legal` | 소송 포트폴리오·제출·증거·브리프 | Claim Chart Builder, Docket Watcher |
| `product-legal` | 출시 검토·마케팅 클레임 | Launch Reviewer |
| `regulatory-legal` | 규제 피드·정책 diff·갭 추적 | Reg Feed Watcher |
| `ai-governance-legal` | AI 사용 사례·벤더 AI 약관 | AI Use Case Triager |
| `ip-legal` | 상표·FTO·DMCA·OSS | Trademark Clearance Screener |
| `legal-clinic` / `law-student` | 클리닉·바 준비·IRAC 연습 | Clinic Intake, Socratic Drill |

```bash
/plugin marketplace add <이 저장소 경로 또는 GitHub URL>
/plugin install commercial-legal@claude-for-legal
/commercial-legal:cold-start-interview   # 반드시 먼저 — 팀 플레이북을 CLAUDE.md에 기록
```

**cold-start interview**를 건너뛰면 일반적인 출력만 나옵니다. 서명된 MSA·플레이북 등 시드 문서를 준비하면 품질이 올라갑니다.

> **주의**: 모든 출력은 **변호사 검토용 초안**입니다. 법률 자문·결론을 대체하지 않습니다.

## 클로드 코드 플러그인 — 설치 기본 흐름

클로드 코드에서 `/plugin` 또는 `/plugin > Discover`로 마켓플레이스를 열고 설치합니다.
조직 계정이나 회사 장비에서는 설치 전 권한과 보안 정책을 확인하세요.

## 클로드 코드 공식 마켓플레이스

[anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)은 클로드 코드용 **큐레이션 플러그인 디렉터리**입니다.

| 구분 | 내용 |
| --- | --- |
| `/plugins` | 앤트로픽 내부 플러그인 (Superpowers, GitHub, Playwright 등) |
| `/external_plugins` | 파트너·커뮤니티 제출 플러그인 |
| 설치 | `/plugin install {이름}@claude-plugins-official` 또는 Discover에서 탐색 |
| 구조 | `plugin.json` + 선택적 `commands/`, `agents/`, `skills/`, `.mcp.json` |

```bash
/plugin install superpowers@claude-plugins-official
/plugin install github@claude-plugins-official
```

플러그인을 직접 만들 때는 [공식 문서](https://code.claude.com/docs/en/plugins)와 저장소의 `plugins/example-plugin` 예시를 참고하세요.
설치 전 각 플러그인 README에서 MCP·파일 접근 범위를 확인하세요.

## 클로드 코드 공식 플러그인 (마켓플레이스 요약)

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

## gstack — 가상 엔지니어링 팀

[garrytan/gstack](https://github.com/garrytan/gstack)는 YC CEO Garry Tan이 실제로 쓰는 **클로드 코드 슬래시 명령 묶음**입니다.
CEO·엔지니어·디자이너·QA·릴리스 엔지니어처럼 역할이 나뉜 23개 전문가 명령과 8개 보조 도구로, 빈 프롬프트 대신 **스프린트 순서**를 따르게 합니다.

### 설치 (클로드 코드)

요구 사항: 클로드 코드, Git, [Bun](https://bun.sh/) v1.0+

```
git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack && cd ~/.claude/skills/gstack && ./setup
```

설치 후 `CLAUDE.md`에 gstack 스킬 목록을 넣으면 세션마다 `/browse`, `/review`, `/ship` 등을 바로 쓸 수 있습니다.
팀 저장소에 공유하려면 `./setup --team`과 `gstack-team-init`으로 동료 환경을 맞출 수 있습니다 — [README 설치 절](https://github.com/garrytan/gstack#install--30-seconds) 참고.

### 스프린트 흐름

**Think → Plan → Build → Review → Test → Ship → Reflect**

| 단계 | 대표 명령 | 역할 |
| --- | --- | --- |
| Think | `/office-hours` | 제품 아이디어를 6가지 질문으로 재정의, 설계 문서 작성 |
| Plan | `/plan-ceo-review`, `/plan-eng-review`, `/plan-design-review`, `/autoplan` | CEO·엔지니어·디자이너 관점 계획 검토 |
| Build | (일반 구현) | 승인된 계획대로 코드 작성 |
| Review | `/review`, `/investigate`, `/cso` | 코드 리뷰·근본 원인 디버깅·보안(OWASP+STRIDE) |
| Test | `/qa`, `/design-review`, `/devex-review` | 실제 브라우저 QA, UI·개발자 경험 감사 |
| Ship | `/ship`, `/land-and-deploy`, `/canary` | 테스트·PR·배포·프로덕션 확인 |
| Reflect | `/retro`, `/learn` | 주간 회고, 세션 간 학습 축적 |

### 빠른 체험 (5단계)

1. `/office-hours` — 무엇을 만들지 설명
2. `/plan-ceo-review` — 범위·전략 검토
3. `/review` — 변경분 코드 리뷰
4. `/qa https://스테이징-URL` — 브라우저로 동작 확인
5. `/ship` — 테스트 후 PR 생성

### Superpowers와 함께 쓰기

| | Superpowers | gstack |
| --- | --- | --- |
| 초점 | TDD·서브에이전트·스킬 자동 적용 | 역할별 슬래시 명령·제품→배포 스프린트 |
| 설치 | 공식 마켓플레이스 플러그인 | `~/.claude/skills/gstack`에 클론 |
| 책 연결 | 4·6·7장 방법론 | 6장 AI 팀, 7장 클로드 코드, 8장 디자인 검토 |

> 디자인 관련: `/design-consultation`, `/design-shotgun`, `/design-html`, `/design-review`는 8장과 연결해 보면 좋습니다.
> UI 품질·AI slop 제거: [Impeccable](https://impeccable.style/) (`/plugin marketplace add pbakaus/impeccable`) — 8장 README 참고.
> 디자인 시스템 초안·업종별 스타일: [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) (`/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill`) — 8장 README 참고.
> HTML 발표 슬라이드·PPT 변환: [Frontend Slides](https://github.com/zarazhangrui/frontend-slides) (`/plugin marketplace add https://github.com/zarazhangrui/frontend-slides`) — 8장 README 참고.
> Cursor·Codex 등 다른 에이전트는 `./setup --host <이름>`으로 설치합니다.

## 관련 저장소

| 저장소 | URL | 설명 |
| --- | --- | --- |
| obra/superpowers | https://github.com/obra/superpowers | Superpowers 플러그인 소스·스킬 라이브러리·개발 방법론 |
| garrytan/gstack | https://github.com/garrytan/gstack | Garry Tan의 클로드 코드 슬래시 명령·가상 엔지니어링 팀 |
| anthropics/claude-plugins-official | https://github.com/anthropics/claude-plugins-official | 클로드 코드 공식 플러그인 마켓플레이스 소스 |
| anthropics/knowledge-work-plugins | https://github.com/anthropics/knowledge-work-plugins | 마케팅·영업·법무·재무 등 11개 지식 업무 플러그인 |
| anthropics/financial-services | https://github.com/anthropics/financial-services | 금융 에이전트·모델링 스킬·데이터 MCP |
| anthropics/claude-for-legal | https://github.com/anthropics/claude-for-legal | 법무 연습 영역별 에이전트·스킬·MCP |
| openai/codex-plugin-cc | https://github.com/openai/codex-plugin-cc | 클로드 코드 플러그인 생태계와 호환되는 외부 플러그인 예시입니다. |
