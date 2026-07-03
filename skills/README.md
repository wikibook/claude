# 스킬 카탈로그

> 책 4장과 연결되는 보충 자료입니다.
> 클로드 스킬은 클로드에게 특정 작업 방식, 지식, 파일 처리 절차를 추가하는 기능입니다.

## 스킬을 살펴보는 순서

1. 먼저 공식 문서에서 스킬의 개념과 사용 방식을 확인합니다.
2. 공식 스킬 저장소에서 검증된 예시를 봅니다.
3. 필요한 경우 커뮤니티 스킬을 참고하되, 설치 전에 `SKILL.md`를 열어 내용과 권한을 직접 확인합니다.

## 책에서 만든 스킬 (바로 받기)

책 4장에서 만든 스킬을 같은 동작으로 재현해 두었습니다. 폴더를 `.zip`으로 압축해 클로드 스킬 업로드 메뉴에 등록하세요.

- **[메모-할일-정리](../chapters/ch04-스킬-클로드에게-전문-능력을-더하기/메모-할일-정리/SKILL.md)** — 흩어진 메모를 마감 긴급도·업무/개인으로 나눠 마크다운 체크리스트로 정리.
- **[학습-보조](../chapters/ch04-스킬-클로드에게-전문-능력을-더하기/학습-보조/SKILL.md)** — 비유 설명 → 배경 맞춤 예시 → 퀴즈로 이해도 확인.

## 공식 문서

- **[스킬이란 무엇인가](https://support.claude.com/en/articles/12512176-what-are-skills)** · **[스킬 사용하기](https://support.claude.com/en/articles/12512180-using-skills-in-claude)** · **[커스텀 스킬 만들기](https://support.claude.com/en/articles/12512198-creating-custom-skills)** — 스킬 개념부터 추가·실행·제작까지 안내하는 공식 도움말 3종.
- **[에이전트 스킬 소개](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)** — 스킬 설계 철학과 활용 배경.
- **[The Complete Guide to Building Skills (PDF)](https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf)** — 스킬 제작을 처음부터 끝까지 다룬 공식 가이드.

## 공식 스킬 저장소 — 네 도메인

[anthropics/skills](https://github.com/anthropics/skills)의 `skills/` 폴더는 네 도메인으로 묶여 있습니다.
각 스킬 폴더를 받아 `SKILL.md`를 열어보면 작성 방식을 익히기 좋습니다.

| 도메인 | 공식 예시 스킬 |
| --- | --- |
| Creative & Design | `algorithmic-art`, `canvas-design`, `frontend-design`, `theme-factory` |
| Development & Technical | `claude-api`, `mcp-builder`, `skill-creator`, `web-artifacts-builder`, `webapp-testing` |
| Enterprise & Communication | `brand-guidelines`, `internal-comms`, `slack-gif-creator` |
| Document Skills | `doc-coauthoring`, `docx`, `pdf`, `pptx`, `xlsx` |

> 분류와 목록은 실제 저장소 구조(`skills/` 폴더)와 README를 따랐습니다.
> 저장소는 스킬을 자주 추가하므로 최신 목록은 위 링크에서 확인하세요.

## 공식 사이트

- **[agentskills.io](https://agentskills.io)** — Agent Skills를 탐색하고 공유하는 공식 사이트.
- **[agentskills/agentskills](https://github.com/agentskills/agentskills)** — 스킬 스펙과 검증 도구를 제공하는 저장소.

## 커뮤니티 스킬

> 커뮤니티 스킬은 설치 전에 `SKILL.md`를 열어 동작과 권한을 직접 확인하세요.
> 최근 업데이트(6개월 이내)와 설명 문서(README)의 충실함도 함께 살펴보면 좋습니다.

- **[awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills)** — 분야별로 검증된 커뮤니티 스킬 큐레이션.
- **[forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills)** — Andrej Karpathy 스타일의 CLAUDE.md 기반 스킬 예시.
- **[kepano/obsidian-skills](https://github.com/kepano/obsidian-skills)** — 옵시디언 작업에 특화된 스킬 예시.
- **[Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)** — 이미지와 디자인 감각을 보강하는 스킬.
- **[Notion Skills for Claude](https://www.notion.so/notiondevs/Notion-Skills-for-Claude-28da4445d27180c7af1df7d8615723d0)** — 노션이 공식 제공하는 클로드 스킬 모음.
