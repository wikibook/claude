# 4장 스킬, 클로드에게 전문 능력을 더하기

> **책 4장** 독자를 위한 보충 자료입니다.
> 클로드 기능 변화에 맞춰 지속적으로 업데이트합니다.

## 이 장의 실습 자산

책 4장에서 만든 스킬을 바로 내려받아 쓸 수 있도록 정리했습니다.
각 폴더의 `SKILL.md`는 클로드 공식 스킬 형식(YAML 머리말 + 본문)을 따릅니다.
폴더를 `.zip`으로 압축해 클로드 스킬 업로드 메뉴에 등록하면 됩니다(책 4.3절).

| 폴더 | 내용 | 책 연결 |
| --- | --- | --- |
| [`메모-할일-정리/`](메모-할일-정리/SKILL.md) | 흩어진 메모를 마크다운 체크리스트로 정리 | 4.3절 예제 4.2~4.5 |
| [`학습-보조/`](학습-보조/SKILL.md) | 비유 설명 → 배경 맞춤 예시 → 퀴즈로 이해도 확인 | 4.4절 예제 4.6~4.9 |

> 책 본문은 skill-creator가 스킬 파일을 자동으로 만들어 주므로 `SKILL.md` 원문을 싣지 않습니다.
> 여기 파일은 책에서 설명한 동작과 출력 형식에 맞춰 같은 결과가 나오도록 재현한 것입니다.

## skills.sh — 스킬 탐색·설치

[skills.sh](https://www.skills.sh/)는 Agent Skills **디렉터리·리더보드**입니다.
4.2절에서 배운 스킬 형식을 실전 저장소에서 찾고, 클로드 코드·Cursor·Codex 등에 바로 설치할 때 씁니다.

| 항목 | 내용 |
| --- | --- |
| 역할 | 분야별 검색, All Time / Trending / Hot 순위, 에이전트별 호환 안내 |
| 설치 | `npx skills add <owner/repo>` — [vercel-labs/skills](https://github.com/vercel-labs/skills) CLI |
| 책 연결 | 4.2절 커뮤니티 스킬 고르기, 4.3절 `skill-creator`로 만든 뒤 배포 참고 |

```bash
npx skills add anthropics/skills --skill skill-creator
npx skills add anthropics/skills --list    # 목록만 보기
```

스펙·검증은 [agentskills.io](https://agentskills.io), **찾기·설치**는 skills.sh, 전체 목록·설치 예시는 [스킬 카탈로그](../../catalog/스킬.md#skills-directory--skillssh)를 참고하세요.

> 4.2.2절 확인 습관: 리더보드에서 고른 스킬도 설치 전 `SKILL.md`를 열어 동작·권한을 읽어보세요.

## 공식 강의

| 강의 | URL | 설명 |
| --- | --- | --- |
| Introduction to agent skills | https://anthropic.skilljar.com/introduction-to-agent-skills | 첫 스킬 만들기부터 팀 배포·문제 해결까지 (클로드 코드) |
| Anthropic Courses | https://anthropic.skilljar.com/ | 전체 강의 목록 — [시작하기](../../resources/시작하기.md#공식-강의-anthropic-academy)에서 장별 링크 모음 |

> 책 4.3절에서 `skill-creator`로 스킬을 만든 뒤, 위 강의로 **배포·팀 공유·트러블슈팅** 흐름을 보완해 보세요.

## 공식 문서

| 문서 | URL | 설명 |
| --- | --- | --- |
| 스킬이란 무엇인가 | https://support.claude.com/en/articles/12512176-what-are-skills | 스킬의 개념과 사용 시점을 설명합니다. |
| 클로드에서 스킬 사용하기 | https://support.claude.com/en/articles/12512180-using-skills-in-claude | 스킬을 추가하고 실행하는 방법을 안내합니다. |
| 커스텀 스킬 만들기 | https://support.claude.com/en/articles/12512198-creating-custom-skills | 직접 스킬을 만들 때 필요한 파일 구성과 작성법을 안내합니다. |
| 에이전트 스킬 소개 | https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills | 스킬 설계 철학과 기술 배경을 설명합니다. |

## 공식 스킬 저장소 — 네 가지 도메인

앤트로픽 공식 스킬 저장소([anthropics/skills](https://github.com/anthropics/skills))의
`skills/` 폴더에는 예시 스킬이 네 도메인으로 묶여 있습니다(책 4.2.1절).
각 스킬 폴더를 통째로 받아 `SKILL.md`를 열어보면 작성 방식을 익히기 좋습니다.

| 도메인 | 공식 예시 스킬 | 어떤 일에 쓰나 |
| --- | --- | --- |
| Creative & Design | `algorithmic-art`, `canvas-design`, `frontend-design`, `theme-factory` | 이미지·디자인·시각 자료, UI 톤 |
| Development & Technical | `claude-api`, `mcp-builder`, `skill-creator`, `web-artifacts-builder`, `webapp-testing` | 코드·API·MCP, 웹앱 테스트, 스킬 제작 |
| Enterprise & Communication | `brand-guidelines`, `internal-comms`, `slack-gif-creator` | 브랜드 규칙, 사내 공지, 커뮤니케이션 |
| Document Skills | `doc-coauthoring`, `docx`, `pdf`, `pptx`, `xlsx` | 워드·PDF·파워포인트·엑셀 문서 작업 |

> 위 분류와 스킬 목록은 실제 저장소 구조(`skills/` 폴더)와 README 분류를 따랐습니다.
> 저장소는 스킬을 자주 추가하므로, 최신 목록은 위 링크에서 직접 확인하세요.

## 커뮤니티 스킬

| 저장소 / 사이트 | URL | 설명 |
| --- | --- | --- |
| skills.sh | https://www.skills.sh/ | Agent Skills 디렉터리·리더보드. `npx skills add` 설치 |
| agentskills.io | https://agentskills.io | Agent Skills 스펙·탐색 공식 사이트 |
| knowledge-work-plugins | https://github.com/anthropics/knowledge-work-plugins | 역할별 `skills/`·`commands/` 구조 참고. 설치·커스터마이즈는 6장·[플러그인 목록](../../catalog/플러그인.md) |
| claude-for-legal | https://github.com/anthropics/claude-for-legal | 법무 `SKILL.md`·플레이북 `CLAUDE.md`·cold-start interview 패턴 참고 |
| obra/superpowers | https://github.com/obra/superpowers | `writing-skills`로 스킬 작성법 학습, `brainstorming`·`test-driven-development` 등 실전 워크플로 스킬 참고 |
| mattpocock/skills | https://github.com/mattpocock/skills | `writing-great-skills` 스킬 작성 참고. 7장 `/grill-with-docs`·`/tdd`와 연결 |
| coreyhaines31/marketingskills | https://github.com/coreyhaines31/marketingskills | 마케팅 스킬 40+(`copywriting`, `cro`, `launch` …). `product-marketing`이 다른 스킬의 공통 맥락 |

### Marketing Skills — 스킬이 서로 참조하는 패턴

4.4절에서 만든 `학습-보조`처럼, [Marketing Skills](https://github.com/coreyhaines31/marketingskills)는 **`product-marketing`을 먼저 읽고** 카피·CRO·SEO 작업을 이어갑니다. 4.3절 `SKILL.md` 구조·상호 참조를 실전 마케팅 워크플로에서 보려면 `skills/copywriting/SKILL.md` 등을 열어보세요.

```bash
npx skills add coreyhaines31/marketingskills --skill product-marketing copywriting
```

6장 캠페인·8장 랜딩과 연결하는 전체 흐름은 [6장 README](../ch06-코워크-함께-일하는-클로드/README.md#marketing-skills--마케팅-스킬-라이브러리)를 참고하세요.

### Matt Pocock Skills — 스킬 작성·엔지니어링 연결

4.3절 `skill-creator`로 스킬을 만든 뒤 품질을 높이려면 [mattpocock/skills](https://github.com/mattpocock/skills)의 **`writing-great-skills`**를 참고하세요. 예측 가능한 스킬 문서 작성 원칙을 정리해 두었습니다.

```bash
npx skills add mattpocock/skills --skill writing-great-skills setup-matt-pocock-skills
```

7장에서 코드 작업 전 정렬·TDD 흐름은 [7장 README](../ch07-클로드-코드-생각을-실행-가능한-결과물로-바꾸기/README.md#matt-pocock-skills--실전-엔지니어링-워크플로)를 참고하세요.

### Superpowers 스킬이 책 개념과 맞닿는 지점

| Superpowers 스킬 | 책에서 배운 것 |
| --- | --- |
| `writing-skills` | 4.3절 skill-creator·`SKILL.md` 작성 |
| `brainstorming` | 2장 맥락·형식·역할을 정리하는 프롬프트 기법 |
| `using-superpowers` | 4.1절 "작업 전에 관련 스킬을 먼저 확인"하는 에이전트 동작 |

스킬 원문은 [GitHub `skills/` 폴더](https://github.com/obra/superpowers/tree/main/skills)에서 열어볼 수 있습니다.
클로드 코드에 플러그인으로 설치하면 세션마다 자동 적용됩니다 — [설치법](../../catalog/플러그인.md#superpowers--에이전트-스킬-프레임워크).

> **확인 습관** — 커뮤니티 스킬은 설치 전에 `SKILL.md`를 열어 어떤 동작을 지시하는지 직접 읽어보세요.
> 최근 업데이트(6개월 이내), 설명 문서(README)의 충실함도 함께 확인하면 좋습니다(책 4.2.2절).

## 관련 코너

> 이 장에서 소개한 기능과 연결된 저장소 내 자료입니다.

- [스킬 카탈로그](../../catalog/스킬.md) — 공식·커뮤니티 스킬 전체 목록과 설치법
