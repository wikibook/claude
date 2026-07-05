# 6장 코워크, 함께 일하는 클로드

> **책 6장** 독자를 위한 보충 자료입니다.
> 클로드 기능 변화에 맞춰 지속적으로 업데이트합니다.

## 이 장에서 받을 수 있는 것

6장은 클로드에게 더 큰 단위의 일을 맡기는 흐름과 플러그인 생태계를 다룹니다.
저장소에는 기능 변화에 따라 바뀌는 화면 캡처 대신, 바로 따라 할 수 있는 워크플로우 프롬프트와
계속 참고할 수 있는 공식 문서·플러그인 링크를 모았습니다.

| 자료 | 내용 | 책 연결 |
| --- | --- | --- |
| [`프롬프트/첫-작업-다운로드-폴더-정리.md`](프롬프트/첫-작업-다운로드-폴더-정리.md) | 코워크 첫 실습 — 폴더 정리 | 6.1.5절 예제 6.1 |
| [`프롬프트/플러그인-캠페인-브리프.md`](프롬프트/플러그인-캠페인-브리프.md) | `/campaign-plan` 마케팅 플러그인 | 6.2.1절 예제 6.2 |
| [`프롬프트/예약-작업-AI-뉴스-브리핑.md`](프롬프트/예약-작업-AI-뉴스-브리핑.md) | 매일 아침 AI 뉴스 브리핑 예약 | 6.2.3절 예제 6.3 |
| [`프롬프트/디스패치-모바일-분석.md`](프롬프트/디스패치-모바일-분석.md) | 모바일→데스크톱 분석 요청 | 6.2.4절 예제 6.4 |
| [`프롬프트/라이브-아티팩트-대시보드.md`](프롬프트/라이브-아티팩트-대시보드.md) | 라이브 업무 대시보드 | 6.2.5절 예제 6.5 |
| [`프롬프트/커스텀-비주얼-인라인.md`](프롬프트/커스텀-비주얼-인라인.md) | 인라인 막대그래프 시각화 | 6.2.5절 예제 6.6 |
| [`프롬프트/실전-워크플로우.md`](프롬프트/실전-워크플로우.md) | 파일 통합 분석, 미팅 브리핑, 반복 보고서, 콘텐츠 제작, 경쟁사 분석 | 6.3절 예제 6.7~6.11 |
| [`프롬프트/ai-팀-구성.md`](프롬프트/ai-팀-구성.md) | Research Agent 등 AI 팀 구성 | 6.3.6절 예제 6.12 |
| [플러그인 목록](../../plugins/README.md) | 코워크·클로드 코드 플러그인 링크 | 6.2절 |
| [공식 문서 링크](../../resources/공식문서-링크.md) | 클로드 코드, MCP, 스킬 관련 공식 문서 | 6장 이후 |
| 실전 활용 사례 | 코워크를 제품·디자인 업무에 쓰는 예시 | 6.3절 |

> 플러그인은 클로드의 행동 범위와 연결 도구를 넓힙니다.
> 설치 전에는 어떤 권한과 데이터를 다루는지 먼저 확인하세요.

## 공식 강의

| 강의 | URL | 설명 |
| --- | --- | --- |
| Introduction to Claude Cowork | https://anthropic.skilljar.com/introduction-to-claude-cowork | 실제 파일·프로젝트와 함께 코워크 태스크 루프·플러그인·스킬 실습 |
| Anthropic Courses | https://anthropic.skilljar.com/ | 전체 강의 목록 |

> 책 6.1.5절 첫 실습(폴더 정리)을 마친 뒤 위 강의로 **다단계 작업을 책임 있게 맡기는** 흐름을 익히면 좋습니다.

## 공식 문서

| 문서 | URL | 설명 |
| --- | --- | --- |
| 클로드 지원 센터 | https://support.claude.com | 코워크와 클로드 기능 업데이트를 확인하는 출발점입니다. |
| 클로드 코드 문서 | https://docs.anthropic.com/en/docs/claude-code | 클로드 코드와 플러그인 활용 맥락을 함께 확인할 수 있습니다. |

## 앤트로픽 공식 업무 플러그인

책 6.2절 플러그인 생태계는 아래 세 마켓플레이스로 구체화할 수 있습니다. 설치·명령·커넥터 상세는 [플러그인 목록](../../plugins/README.md)을 참고하세요.

| 저장소 | 대상 | 책 연결 |
| --- | --- | --- |
| [knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | 마케팅·영업·법무·재무·PM 등 **일반 지식 업무** 11종 | 6.2.1절 Marketing, 6.2절 표 6.2 |
| [financial-services](https://github.com/anthropics/financial-services) | IB·리서치·PE·자산관리 **금융 워크플로** | 6.3절 파일 분석·보고서 초안 |
| [claude-for-legal](https://github.com/anthropics/claude-for-legal) | 계약·프라이버시·소송 등 **법무 연습 영역** | 6.2절 Legal, 6.3절 문서 검토 |

클로드 코드에서도 같은 마켓플레이스를 `claude plugin marketplace add`로 등록해 쓸 수 있습니다.
개발용 공식 플러그인(Superpowers, GitHub 등)은 [claude-plugins-official](https://github.com/anthropics/claude-plugins-official)에서 `/plugin install …@claude-plugins-official`로 설치합니다.

## Marketing Skills — 마케팅 스킬 라이브러리

[coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)는 **전환·카피·SEO·성장**에 특화된 오픈 스킬 모음(40개+)입니다.
클로드 코드·Cursor·Codex 등 [Agent Skills](https://agentskills.io) 규격을 따르는 에이전트에서 쓸 수 있습니다.

| 항목 | 내용 |
| --- | --- |
| 기반 | `product-marketing` 스킬 → `.agents/product-marketing.md`에 제품·타깃·포지셔닝 기록 후 다른 스킬이 참조 |
| 대표 스킬 | `copywriting`, `cro`, `launch`, `marketing-plan`, `emails`, `seo-audit`, `ai-seo`, `ads` |
| 책 연결 | 6.2.1절 캠페인 브리프, 8.3절 데일리핏 카피·랜딩, 2장 마케팅 프롬프트 심화 |

### 마케팅 도구 3단계

| 단계 | 도구 | 하는 일 |
| --- | --- | --- |
| 기획·캘린더 | knowledge-work-plugins `marketing` | `/campaign-plan`, Ahrefs·HubSpot 연동 |
| 카피·CRO·런칭 | **Marketing Skills** | `copywriting`·`cro`·`launch`·`marketing-plan` |
| 출시 후 SEO | [Claude SEO](../ch07-클로드-코드-생각을-실행-가능한-결과물로-바꾸기/README.md#claude-seo--사이트랜딩-seo-감사) | `/seo audit`·schema·GEO 기술 감사 |

### 설치 (클로드 코드)

```bash
npx skills add coreyhaines31/marketingskills          # 전체 설치 (권장)
npx skills add coreyhaines31/marketingskills --skill cro copywriting launch
```

클로드 코드 플러그인:

```
/plugin marketplace add coreyhaines31/marketingskills
/plugin install marketing-skills
```

먼저 제품 맥락을 채우세요: "제품 마케팅 컨텍스트 문서 만들어줘" → `product-marketing` 스킬이 `.agents/product-marketing.md`를 생성합니다.

```
/copywriting
/cro
/launch
/marketing-plan
```

> 터미널·에이전트가 처음이라면 [Coding for Marketers](https://codingformarketers.com) 가이드와 4장 스킬 구조를 함께 보면 좋습니다.

## Claude SEO — 캠페인 랜딩·사이트 출시 후 점검

Marketing Skills로 **카피·CRO**를 다듬고 랜딩·사이트를 배포한 뒤, [Claude SEO](https://github.com/AgriciDaniel/claude-seo)로 **기술 SEO**를 점검할 수 있습니다.

| 항목 | 내용 |
| --- | --- |
| 역할 | `/seo audit` 전체 감사, `/seo page` 단일 페이지, `/seo schema` 구조화 데이터, `/seo geo` AI 검색 최적화 |
| 책 연결 | 6.2.1절 캠페인 → 8.6절 랜딩 제작 → **출시 후** `/seo audit` |
| 설치 | `/plugin marketplace add AgriciDaniel/claude-seo` → `/plugin install claude-seo@agricidaniel-claude-seo` |

상세 명령·Google API 연동은 [7장 README의 Claude SEO 절](../ch07-클로드-코드-생각을-실행-가능한-결과물로-바꾸기/README.md#claude-seo--사이트랜딩-seo-감사)을 참고하세요.

## 추천 자료

| 자료 | URL | 설명 |
| --- | --- | --- |
| anthropics/knowledge-work-plugins | https://github.com/anthropics/knowledge-work-plugins | 책 6.2절 코워크 업무 플러그인(Marketing, Sales 등) |
| anthropics/financial-services | https://github.com/anthropics/financial-services | 금융 모델·피치·실적 리뷰 에이전트·`/comps`·`/dcf` |
| anthropics/claude-for-legal | https://github.com/anthropics/claude-for-legal | 법무 플러그인·cold-start interview·변호사 검토용 초안 |
| anthropics/claude-plugins-official | https://github.com/anthropics/claude-plugins-official | 클로드 코드 공식 플러그인 마켓플레이스 |
| wshobson/agents | https://github.com/wshobson/agents | AI 팀·에이전트 구성 참고 |
| obra/superpowers | https://github.com/obra/superpowers | `subagent-driven-development`·`dispatching-parallel-agents` 등 AI 팀 분업 패턴 |
| garrytan/gstack | https://github.com/garrytan/gstack | CEO·디자이너·QA·릴리스 역할 슬래시 명령 — 6.3.6절 AI 팀의 클로드 코드 버전 |
| coreyhaines31/marketingskills | https://github.com/coreyhaines31/marketingskills | 카피·CRO·런칭·SEO 등 마케팅 스킬 40+. `npx skills add` |
| AgriciDaniel/claude-seo | https://github.com/AgriciDaniel/claude-seo | 캠페인 랜딩·사이트 `/seo audit` — 출시 후 기술 SEO |
| claude.com/download | https://claude.com/download | 클로드 데스크톱·코워크 설치 |

## 실전 활용 사례 — 앤트로픽 디자인 리드 Jenny Wen의 코워크 활용법

앤트로픽의 디자인 리드 Jenny Wen은 코워크를 다음과 같은 실무에 활용합니다.

- **사용자 피드백 모으기**: 인터뷰, 소셜 미디어, 고객 리뷰를 한곳에 넣고 반복해서 나오는 불편함을 묶습니다.
- **주간 보고 만들기**: 새로 들어온 피드백을 읽고, 팀이 바로 볼 수 있는 보고서나 슬랙 알림으로 정리합니다.
- **아이디어 초안 만들기**: 매주 정해진 시간에 제품 아이디어를 몇 가지 뽑고, 쓸 만한 아이디어만 다음 단계로 넘깁니다.
- **와이어프레임으로 옮기기**: 선택한 아이디어를 스케치 수준의 화면으로 만들고, 피그마나 클로드 코드에서 이어 다듬습니다.

핵심은 "좋은 아이디어를 대신 내준다"보다, 여러 자료를 읽고 팀이 검토할 초안 형태로 묶어 준다는 점입니다.

## 관련 코너

> 이 장에서 소개한 기능과 연결된 저장소 내 자료입니다.

- [플러그인 목록](../../plugins/README.md) — 공식 플러그인 링크와 설치 가이드
