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
| agentskills.io | https://agentskills.io | Agent Skills를 탐색하고 공유하는 공식 사이트입니다. |
| awesome-claude-skills (큐레이션) | https://github.com/travisvn/awesome-claude-skills | 분야별로 검증된 커뮤니티 스킬을 모아둔 목록입니다. |
| knowledge-work-plugins | https://github.com/anthropics/knowledge-work-plugins | 역할별 `skills/`·`commands/` 구조 참고. 설치·커스터마이즈는 6장·[플러그인 목록](../../plugins/README.md) |
| claude-for-legal | https://github.com/anthropics/claude-for-legal | 법무 `SKILL.md`·플레이북 `CLAUDE.md`·cold-start interview 패턴 참고 |
| obra/superpowers | https://github.com/obra/superpowers | `writing-skills`로 스킬 작성법 학습, `brainstorming`·`test-driven-development` 등 실전 워크플로 스킬 참고 |

### Superpowers 스킬이 책 개념과 맞닿는 지점

| Superpowers 스킬 | 책에서 배운 것 |
| --- | --- |
| `writing-skills` | 4.3절 skill-creator·`SKILL.md` 작성 |
| `brainstorming` | 2장 맥락·형식·역할을 정리하는 프롬프트 기법 |
| `using-superpowers` | 4.1절 "작업 전에 관련 스킬을 먼저 확인"하는 에이전트 동작 |

스킬 원문은 [GitHub `skills/` 폴더](https://github.com/obra/superpowers/tree/main/skills)에서 열어볼 수 있습니다.
클로드 코드에 플러그인으로 설치하면 세션마다 자동 적용됩니다 — [설치법](../../plugins/README.md#superpowers--에이전트-스킬-프레임워크).

> **확인 습관** — 커뮤니티 스킬은 설치 전에 `SKILL.md`를 열어 어떤 동작을 지시하는지 직접 읽어보세요.
> 최근 업데이트(6개월 이내), 설명 문서(README)의 충실함도 함께 확인하면 좋습니다(책 4.2.2절).

## 관련 코너

> 이 장에서 소개한 기능과 연결된 저장소 내 자료입니다.

- [스킬 카탈로그](../../skills/README.md) — 공식·커뮤니티 스킬 전체 목록과 설치법
