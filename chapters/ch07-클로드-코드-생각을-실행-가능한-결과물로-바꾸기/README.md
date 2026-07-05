# 7장 클로드 코드, 생각을 실행 가능한 결과물로 바꾸기

> **책 7장** 독자를 위한 보충 자료입니다.
> 클로드 기능 변화에 맞춰 지속적으로 업데이트합니다.

## 이 장의 보충 자료

책 7장에서 클로드 코드에게 보낸 **요청문([IN])**과 `CLAUDE.md` 예시를 정리했습니다.
웹 페이지·칸반 보드처럼 코드 산출물이 나오는 실습도, 저장소에는 프롬프트만 담았습니다.
클로드 코드 세션에서 요청문을 그대로 붙여 넣어 직접 만들어 보세요.

| 폴더 | 내용 | 책 연결 |
| --- | --- | --- |
| [`포트폴리오/프롬프트.md`](포트폴리오/프롬프트.md) | 개인 포트폴리오 페이지 요청문 | 7.4.2절 예제 7.3 |
| [`프로젝트-보드/프롬프트.md`](프로젝트-보드/프롬프트.md) | 칸반 보드·우선순위 색상 요청문 | 7.5.2절 예제 7.6 및 7.5.3절 후속 요청 |
| [`회의록-폴더-예제/`](회의록-폴더-예제/CLAUDE.md) | 폴더용 `CLAUDE.md` + 샘플 회의록 | 7.3.2절 예제 7.2 |
| [`프롬프트/첫-작업-hello.txt.md`](프롬프트/첫-작업-hello.txt.md) | 첫 파일 생성 요청 | 7.2.4절 예제 7.1 |
| [`프롬프트/루틴-주간-회의-요약.md`](프롬프트/루틴-주간-회의-요약.md) | `/schedule` 루틴 설정 | 7.3.5절 예제 7.3 |
| [`프롬프트/파일정리-CSV병합.md`](프롬프트/파일정리-CSV병합.md) | CSV 병합 자동화 | 7.4.3절 예제 7.5 |
| [`프롬프트/이미지-일괄처리.md`](프롬프트/이미지-일괄처리.md) | 이미지 크기·이름 일괄 처리 | 7.5.1절 예제 7.6 |
| [`프롬프트/모바일-세션-확인.md`](프롬프트/모바일-세션-확인.md) | 모바일에서 세션 진행 확인 | 7.5.3절 예제 7.8 |

> CSV 병합·이미지 처리는 결과물이 **데이터 파일**이라 코드 대신 따라 쓸 수 있는 **프롬프트**만 담았습니다.
> 책의 메시지대로, 말로 설명하면 클로드 코드가 처리합니다.

> **💡 팁: 결과는 반드시 확인하세요**
>
> 클로드 코드가 작업을 마치면 결과 파일을 열어 의도대로인지 직접 확인하세요.
> 코드를 몰라도 결과물 검증은 사람이 해야 합니다(책 7.4.3절).

## 공식 강의

| 강의 | URL | 설명 |
| --- | --- | --- |
| Claude Code 101 | https://anthropic.skilljar.com/claude-code-101 | 개발 일상에 클로드 코드를 끼워 넣는 기본 워크플로 |
| Claude Code in Action | https://anthropic.skilljar.com/claude-code-in-action | 팀 개발 흐름에 클로드 코드 통합 |
| Introduction to subagents | https://anthropic.skilljar.com/introduction-to-subagents | 서브에이전트로 맥락 분리·작업 위임 |
| Anthropic Courses | https://anthropic.skilljar.com/ | 전체 강의 목록 — [시작하기](../../resources/시작하기.md#공식-강의-anthropic-academy) |

> 책 7.2절 설치·첫 작업(예제 7.1) 후 **Claude Code 101**을 병행하면 터미널·세션 개념이 빨리 잡힙니다. 장시간 작업(7.5절)은 **subagents** 강의와 [Superpowers](#superpowers--체계적인-개발-워크플로)를 함께 보면 좋습니다.

## 공식 문서

| 문서 | URL | 설명 |
| --- | --- | --- |
| 클로드 코드 설치·설정 | https://code.claude.com/docs/en/setup | 설치, 업데이트, 인증, 플랫폼별 설정을 확인할 수 있습니다. |
| Claude Code Routines | https://code.claude.com/docs/en/routines | 반복 작업을 루틴으로 저장하고 다시 실행하는 방법을 안내합니다. |
| Claude Code Best Practices | https://code.claude.com/docs/en/best-practices | 클로드 코드 활용법을 정리한 공식 가이드입니다. |

## Superpowers — 체계적인 개발 워크플로

책 7장은 "말로 일을 시키고 결과를 확인한다"는 흐름을 다룹니다.
한 단계 더 나아가 **설계 → 계획 → 서브에이전트 실행 → 테스트 → 리뷰**까지 자동으로 이어지게 하려면
[obra/superpowers](https://github.com/obra/superpowers)를 참고하세요.

| 항목 | 내용 |
| --- | --- |
| 정의 | 조합 가능한 스킬 + 초기 지침으로 구성된 **에이전트 개발 방법론** |
| 설치 | 클로드 코드에서 `/plugin install superpowers@claude-plugins-official` |
| 핵심 철학 | 테스트 우선(TDD), 체계적 디버깅, 단순성, "완료" 선언 전 검증 |
| 책과의 연결 | 7.3절 `CLAUDE.md`·루틴(반복 절차) ↔ 스킬로 고정된 워크플로, 7.5절 장시간 작업 ↔ 서브에이전트 분업 |

상세 스킬 목록·다른 에이전트(Cursor, Codex 등) 설치법은 [플러그인 목록의 Superpowers 절](../../catalog/플러그인.md#superpowers--에이전트-스킬-프레임워크)에서 정리했습니다.

## Matt Pocock Skills — 실전 엔지니어링 워크플로

[mattpocock/skills](https://github.com/mattpocock/skills)는 **작고 조합 가능한** 엔지니어링 스킬 모음입니다.
요구사항 정렬 → PRD·이슈 분해 → TDD → 아키텍처 점검까지, 클로드 코드·Codex·Cursor에서 같은 흐름을 씁니다.

| 항목 | 내용 |
| --- | --- |
| 역할 | `/grill-me`·`/grill-with-docs` 정렬, `/to-prd`·`/to-issues` 계획, `/tdd` red-green-refactor, `/improve-codebase-architecture` |
| 공유 언어 | `grill-with-docs`가 `CONTEXT.md`·ADR로 프로젝트 용어를 정리 → 7.3절 `CLAUDE.md`와 병행 |
| 책 연결 | 7.2절 첫 작업 전 의도 확인, 7.3절 `CLAUDE.md`·루틴, 7.4~7.5절 구현·디버깅 |

### Superpowers vs Matt Pocock Skills

| | Superpowers | mattpocock/skills |
| --- | --- | --- |
| 초점 | 플러그인 **방법론**·서브에이전트 자동 적용 | **슬래시 명령** 단위의 정렬·TDD·PRD·트리아지 |
| 대표 | `brainstorming`, `writing-plans`, `test-driven-development` | `/grill-with-docs`, `/to-prd`, `/tdd`, `/triage` |
| 책 연결 | 7.5절 장시간·분업 | 7.2~7.4절 **시작 전 정렬**·작은 단위 피드백 |

### 설치

```bash
npx skills add mattpocock/skills
```

설치 시 **`setup-matt-pocock-skills`**를 반드시 선택한 뒤, 프로젝트에서 한 번 실행하세요.

```
/setup-matt-pocock-skills    # 이슈 트래커·트리아지 라벨·문서 경로 설정
/grill-with-docs             # 작업 전 정렬 + CONTEXT.md·ADR
/to-prd                      # 대화 내용 → PRD
/tdd                         # 실패 테스트 먼저 → 구현
```

인기 스킬·설치 수는 [skills.sh](https://www.skills.sh/mattpocock/skills)에서 확인할 수 있습니다. 스킬 작성 참고는 4장 `writing-great-skills`·`skill-creator`와 함께 보면 좋습니다.

## gstack — 역할별 슬래시 명령 팀

[garrytan/gstack](https://github.com/garrytan/gstack)는 클로드 코드에 **가상 엔지니어링 팀**을 붙이는 오픈소스 도구입니다.
`/office-hours`로 제품을 정리하고, `/plan-ceo-review`·`/plan-eng-review`로 계획을 검토한 뒤,
`/review`·`/qa`·`/ship`으로 리뷰·테스트·PR까지 이어갑니다.

| 항목 | 내용 |
| --- | --- |
| 설치 | `git clone` → `~/.claude/skills/gstack` → `./setup` |
| 책과의 연결 | 7.3절 `CLAUDE.md`·루틴 ↔ gstack 스킬 목록 등록, 7.5절 장시간 작업 ↔ `/autoplan`·`/ship` 파이프라인 |
| Superpowers와의 차이 | Superpowers는 TDD·서브에이전트 **방법론**, gstack은 CEO·QA·릴리스 **역할 명령** — 함께 써도 됩니다 |

상세 명령 목록·팀 모드 설치는 [플러그인 목록의 gstack 절](../../catalog/플러그인.md#gstack--가상-엔지니어링-팀)을 참고하세요.

## Claude SEO — 사이트·랜딩 SEO 감사

[AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo)는 클로드 코드용 **SEO 분석 플러그인**입니다.
25개 서브스킬·최대 15개 전문 에이전트가 병렬로 기술 SEO, E-E-A-T, Schema.org, AI 검색(GEO), 로컬·이커머스 SEO를 점검하고 **우선순위 액션 플랜**을 만듭니다.

| 항목 | 내용 |
| --- | --- |
| 역할 | `/seo audit`, `/seo page`, `/seo schema`, `/seo geo`, `/seo content-brief` 등 25개 명령 |
| 출력 | 마크다운 리포트·PDF·JSON. 기본적으로 **로컬**에서 처리(데이터가 벤더로 올라가지 않음) |
| Google 연동 | API 키만으로 PageSpeed·CrUX; Search Console·GA4는 선택 설정(`/seo google setup`) |
| 책 연결 | 7.4절 포트폴리오·배포 사이트 점검, 8.6절 캠페인 랜딩 출시 후 SEO, 6.2절 마케팅 랜딩 |

### 코워크 `marketing` vs Claude SEO

| | knowledge-work-plugins `marketing` | Claude SEO |
| --- | --- | --- |
| 초점 | 캠페인 브리프·콘텐츠·Ahrefs 등 **기획·작성** | 배포된 URL의 **기술·스키마·CWV·GEO 감사** |
| 책 연결 | 6.2.1절 `/campaign-plan` | 7·8장 랜딩 **출시 후** 점검 |

### 설치 (클로드 코드)

```
/plugin marketplace add AgriciDaniel/claude-seo
/plugin install claude-seo@agricidaniel-claude-seo
```

수동 설치: `git clone` 후 `install.sh` 실행 — [README](https://github.com/AgriciDaniel/claude-seo#installation) 참고.

```
/seo audit https://example.com
/seo page https://example.com/about
/seo schema https://example.com
/seo content-brief "데일리핏 100일 루틴"
```

> Codex를 쓰면 동일 워크플로의 [codex-seo](https://github.com/AgriciDaniel/codex-seo) 포트를 참고하세요. 각 권고에는 "어떻게 실패했는지 확인할까?" 검증 항목이 붙어 있어, 책 7장 **사람이 결과를 확인**하는 원칙과 잘 맞습니다.

## 추천 자료

| 자료 | URL | 설명 |
| --- | --- | --- |
| obra/superpowers | https://github.com/obra/superpowers | 설계·계획·TDD·서브에이전트 개발 방법론과 스킬 라이브러리 |
| mattpocock/skills | https://github.com/mattpocock/skills | `/grill-with-docs`·`/to-prd`·`/tdd`·`/triage` 실전 엔지니어링 스킬 |
| garrytan/gstack | https://github.com/garrytan/gstack | `/office-hours`→`/review`→`/qa`→`/ship` 역할별 슬래시 명령 스프린트 |
| AgriciDaniel/claude-seo | https://github.com/AgriciDaniel/claude-seo | `/seo audit`·schema·GEO 등 25개 SEO 명령. 병렬 감사·로컬 리포트 |
| anthropics/claude-plugins-official | https://github.com/anthropics/claude-plugins-official | `/plugin install …@claude-plugins-official` 공식 마켓플레이스 |
| anthropics/claude-code | https://github.com/anthropics/claude-code | 클로드 코드 공식 오픈소스 저장소입니다. |
| anthropics/claude-code-action | https://github.com/anthropics/claude-code-action | PR과 Issue에서 클로드가 자동으로 코드를 리뷰하는 GitHub Action입니다. |
| anthropics/anthropic-cookbook | https://github.com/anthropics/anthropic-cookbook | 클로드 API 실용 예제를 Jupyter Notebook 형태로 제공합니다. |
| hesreallyhim/awesome-claude-code | https://github.com/hesreallyhim/awesome-claude-code | 클로드 코드 스킬·훅·슬래시 명령·플러그인 큐레이션입니다. |
| yamadashy/repomix | https://github.com/yamadashy/repomix | 코드베이스를 AI 친화적인 단일 파일로 압축하는 도구입니다. |
| Claude Code Secret Sauce | https://matt-rickard.com/claude-code-secret-sauce | Matt Rickard의 클로드 코드 활용 핵심 정리 아티클입니다. |