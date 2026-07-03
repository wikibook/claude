# 4장 스킬, 클로드에게 전문 능력을 더하기

> **책 4장** 독자를 위한 보충 자료입니다.
> 클로드 기능 변화에 맞춰 지속적으로 업데이트합니다.

## 이 장의 실습 자산

책 4장에서 만든 스킬을 바로 내려받아 쓸 수 있게 정리했습니다. 각 폴더의 `SKILL.md`는 클로드
공식 스킬 형식(YAML 머리말 + 본문)을 따르며, 폴더를 `.zip`으로 압축해 클로드 스킬 업로드 메뉴에
등록하면 됩니다(책 4.3절).

#### 📝 메모·할일 정리 스킬
흩어진 메모를 마감 긴급도·업무/개인으로 나눠 마크다운 체크리스트로 정리하는 스킬입니다(4.3절 예제 4.2~4.5).
→ [`메모-할일-정리/SKILL.md`](메모-할일-정리/SKILL.md)

#### 📚 학습 보조 스킬
비유로 개념을 설명하고, 배경에 맞춘 예시를 든 뒤, 퀴즈로 이해도를 확인하는 스킬입니다(4.4절 예제 4.6~4.9).
→ [`학습-보조/SKILL.md`](학습-보조/SKILL.md)

> 책 본문은 skill-creator가 스킬 파일을 자동으로 만들어 주므로 `SKILL.md` 원문을 싣지 않습니다.
> 여기 파일은 책에서 설명한 동작과 출력 형식에 맞춰 같은 결과가 나오도록 재현한 것입니다.

## 공식 문서

#### 스킬 개념부터 만들기까지
스킬이 무엇이고, 어떻게 추가·실행하며, 직접 만들 때 파일을 어떻게 구성하는지 순서대로 안내하는
공식 도움말 3종입니다. 4장을 따라가며 함께 보면 좋습니다.
→ [스킬이란 무엇인가](https://support.claude.com/en/articles/12512176-what-are-skills) ·
[클로드에서 스킬 사용하기](https://support.claude.com/en/articles/12512180-using-skills-in-claude) ·
[커스텀 스킬 만들기](https://support.claude.com/en/articles/12512198-creating-custom-skills)

#### 스킬을 너무 복잡하게 만들지 않으려면 (한국어)
좋은 스킬의 조건을 정리한 공식 베스트 프랙티스입니다. 4.3절에서 나만의 스킬을 만들 때 곁에 두세요.
→ [Agent Skills best practices (공식, 한국어)](https://platform.claude.com/docs/ko/agents-and-tools/agent-skills/best-practices)

#### 스킬 설계 철학
스킬이 어떤 배경에서 나왔고 어떻게 설계되는지 설명하는 앤트로픽 엔지니어링 글입니다.
→ [Equipping agents with Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)

## 공식 스킬 저장소 — 네 가지 도메인

앤트로픽 공식 스킬 저장소([anthropics/skills](https://github.com/anthropics/skills))의
`skills/` 폴더에는 예시 스킬이 네 도메인으로 묶여 있습니다(책 4.2.1절). 각 스킬 폴더를 통째로 받아
`SKILL.md`를 열어보면 작성 방식을 익히기 좋습니다.

| 도메인 | 공식 예시 스킬 | 어떤 일에 쓰나 |
| --- | --- | --- |
| Creative & Design | `algorithmic-art`, `canvas-design`, `frontend-design`, `theme-factory` | 이미지·디자인·시각 자료, UI 톤 |
| Development & Technical | `claude-api`, `mcp-builder`, `skill-creator`, `web-artifacts-builder`, `webapp-testing` | 코드·API·MCP, 웹앱 테스트, 스킬 제작 |
| Enterprise & Communication | `brand-guidelines`, `internal-comms`, `slack-gif-creator` | 브랜드 규칙, 사내 공지, 커뮤니케이션 |
| Document Skills | `doc-coauthoring`, `docx`, `pdf`, `pptx`, `xlsx` | 워드·PDF·파워포인트·엑셀 문서 작업 |

> 위 분류와 스킬 목록은 실제 저장소 구조(`skills/` 폴더)와 README 분류를 따랐습니다.
> 저장소는 스킬을 자주 추가하므로, 최신 목록은 위 링크에서 직접 확인하세요.

## 커뮤니티 스킬

공식 스킬 외에 커뮤니티가 공유하는 스킬도 있습니다. 설치 전에 `SKILL.md`를 열어 어떤 동작을
지시하는지 읽고, 최근 업데이트(6개월 이내)와 설명 문서의 충실함을 함께 확인하세요(책 4.2.2절).

- **[agentskills.io](https://agentskills.io)** — Agent Skills를 탐색·공유하는 공식 사이트.
- **[awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills)** — 분야별로 검증된 커뮤니티 스킬 큐레이션.
- **[knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)** — 생산성·세일즈·마케팅·법률·재무 등 업무 영역별 플러그인 묶음(설치는 6장).

## 더 읽어보기

- **[The Complete Guide to Building Skills for Claude (PDF)](https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf)** —
  스킬 제작을 처음부터 끝까지 다룬 공식 가이드. 나만의 스킬을 본격적으로 만들고 싶을 때.
- **[Agent Skills with Anthropic (강좌)](https://www.deeplearning.ai/short-courses/agent-skills-with-anthropic)** —
  스킬을 손으로 만들며 익히는 심화 학습 강좌.

> 이 장과 연결된 저장소 내 [스킬 카탈로그](../../skills/README.md)에서 공식·커뮤니티 스킬 전체 목록과 설치법을 볼 수 있습니다.
