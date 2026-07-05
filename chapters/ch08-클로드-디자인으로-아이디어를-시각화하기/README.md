# 8장 클로드 디자인으로 아이디어를 시각화하기

> **책 8장** 독자를 위한 보충 자료입니다.
> 클로드 기능 변화에 맞춰 지속적으로 업데이트합니다.

클로드 디자인의 결과물(홈페이지·슬라이드·인포그래픽·애니메이션)은 캔버스에서 생성되어 책에 코드로
실리지 않습니다. 그래서 이 폴더에는 그대로 따라 할 수 있는 요청문과 재현 가능한 디자인 시스템
설정을 담았습니다.

## 이 장의 실습 자산

| 파일 | 내용 | 책 연결 |
| --- | --- | --- |
| [`프롬프트/데일리핏-캠페인.md`](프롬프트/데일리핏-캠페인.md) | 목업·슬라이드·Q&A·인포그래픽·운영 문서·애니메이션 랜딩 요청문 | 8.3절 예제 8.1~8.6 |
| [`디자인시스템-데일리핏.md`](디자인시스템-데일리핏.md) | 브랜드 디자인 시스템 설정 예시(색상·폰트) | 8.4절 |

> 초안은 빠르게 만들고, 브랜드 기준·데이터 정확성·내보내기 형식은 사람이 확인하세요.

## Impeccable — 디자인 어휘·AI slop 줄이기

[Impeccable](https://impeccable.style/)는 에이전트에게 **계층·대비·절제** 같은 디자인 어휘를 주고, 흔한 AI UI 패턴(그라데이션 남용·과한 둥근 모서리 등)을 걸러 주는 도구입니다.
클로드 디자인으로 만든 시안을 **코드·목업으로 다듬을 때**, 또는 8.4절 디자인 시스템을 문서화할 때 함께 쓰면 좋습니다.

| 항목 | 내용 |
| --- | --- |
| 역할 | 23개 디자인 명령(`/polish`, `/typeset`, `/colorize`, `/layout`, `/adapt` …)으로 수정 의도를 구체적으로 지시 |
| 디자인 시스템 | 기존 토큰·컴포넌트를 덮어쓰지 않고 상속. `/impeccable document`로 `DESIGN.md`보내기 |
| 제품 맥락 | `PRODUCT.md`에 사용자·톤·금지 스타일 기록 → 모든 명령이 참조 |
| 품질 검사 | `npx impeccable detect src/` — 45개 규칙으로 AI slop 패턴 탐지(CI·PR 체크 가능) |
| 책 연결 | 8.3절 캠페인 시안 다듬기, 8.4절 브랜드 규칙 → `DESIGN.md`·`PRODUCT.md`로 이어지기 |

### 설치 (클로드 코드·Cursor 등)

```bash
npx impeccable install    # Node 24+, 사용 중인 에이전트에 맞춰 설치
/impeccable init          # 첫 실행 — PRODUCT.md·DESIGN.md 초기화
```

클로드 코드 마켓플레이스:

```
/plugin marketplace add pbakaus/impeccable
```

이후 `/plugin`에서 Impeccable 설치. Live Mode(실행 중 앱에서 변형 비교)는 [시작 가이드](https://impeccable.style/tutorials/getting-started)와 [명령 레퍼런스](https://impeccable.style/docs)를 참고하세요.

> 클로드 디자인 캔버스 결과는 사람이 최종 확인합니다. Impeccable은 **보낸 HTML·프론트엔드 코드**를 다듬는 단계에 가깝습니다 — gstack의 `/design-review`와도 역할이 겹칩니다.

## UI UX Pro Max — 업종별 디자인 시스템 생성

[UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)는 **67개 UI 스타일·161개 업종 규칙·색상·타이포**를 조합해, 요청만으로 맞춤 디자인 시스템을 제안하는 AI 스킬입니다.
클로드 디자인에서 **8.4절 색상·폰트를 정하기 전** 후보 팔레트와 스타일 방향을 뽑을 때, 또는 캠페인 시안을 **React·Tailwind 코드**로 이어갈 때 쓰기 좋습니다.

| 항목 | 내용 |
| --- | --- |
| 역할 | 업종(헬스·핀테크·이커머스 등)에 맞는 레이아웃 패턴·스타일·색상·폰트·안티패턴을 한 번에 제안 |
| 디자인 시스템 | `design-system/MASTER.md` + `pages/*.md` 계층 구조로 세션 간 규칙 유지 |
| 스택 가이드 | React, Next.js, shadcn/ui, Tailwind, Vue, Flutter 등 22개 스택별 UI 가이드 |
| 책 연결 | 8.3.3절 데일리핏 브랜드 설정 참고, 8.4절 다듬기 전 시스템 초안 생성 |

### Impeccable vs UI UX Pro Max

| | Impeccable | UI UX Pro Max |
| --- | --- | --- |
| 초점 | 기존 시안·코드 **다듬기**, AI slop 탐지 | 업종·제품 맥락에서 **디자인 시스템 초안 생성** |
| 대표 도구 | `/polish`, `DESIGN.md` 문서화 | `uipro`, `search.py --design-system` |
| 책 연결 | 8.4절 후반(품질·일관성) | 8.3~8.4절 전반(방향·토큰 설정) |

### 설치 (클로드 코드·Cursor 등)

```bash
npm install -g ui-ux-pro-max-cli
uipro init --ai claude      # 프로젝트에 스킬 설치
# uipro init --ai claude --global   # ~/.claude/skills/ 전역 설치
```

클로드 코드 마켓플레이스:

```
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill
```

`scripts/search.py` 검색 엔진을 쓰려면 **Python 3.x**가 필요합니다. 업종·스타일을 직접 조회할 때:

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "habit tracker wellness" --design-system -p "데일리핏" -f markdown
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "SaaS dashboard" --design-system --persist -p "MyApp"
```

한국어 README는 [README.zh.md](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/README.zh.md), 상세 가이드는 [uupm.cc](https://uupm.cc)를 참고하세요.

> 스킬 모드에서는 "데일리핏 헬스 앱 랜딩 페이지 만들어줘"처럼 자연어로 요청하면 디자인 시스템 생성부터 코드까지 이어집니다. 클로드 디자인 캔버스 결과와 병행할 때는 제안된 Primary·Secondary 색·폰트를 Design Systems 설정값으로 옮기면 됩니다.

## 공식 문서

| 문서 | URL | 설명 |
| --- | --- | --- |
| 클로드 디자인 기능 | https://support.claude.com | 시각 자료 생성 관련 최신 기능을 확인할 수 있습니다. |
| Claude Design 소개 | https://www.anthropic.com/news/claude-design-anthropic-labs | 클로드 디자인이 어떤 배경에서 나왔는지 설명한 앤트로픽 글입니다. |

## gstack 디자인 명령 (클로드 코드)

클로드 코드로 디자인까지 이어갈 때 [garrytan/gstack](https://github.com/garrytan/gstack)의 디자인 계열 명령을 참고할 수 있습니다.

| 명령 | 용도 | 책 연결 |
| --- | --- | --- |
| `/design-consultation` | 디자인 시스템을 처음부터 구축 | 8.4절 브랜드·색상·타이포 설정 |
| `/design-shotgun` | 여러 목업 변형을 비교·선택 | 8.3절 캠페인 시안 탐색 |
| `/design-html` | 목업을 배포 가능한 HTML로 변환 | 8.3.1절 목업·랜딩 제작 |
| `/plan-design-review` / `/design-review` | 계획·구현 단계 UI 품질 감사 | 8장 "사람이 최종 확인" 원칙 보완 |

설치·전체 워크플로는 [플러그인 목록의 gstack 절](../../plugins/README.md#gstack--가상-엔지니어링-팀)을 참고하세요.

## Frontend Slides — HTML 발표 자료 만들기

[Frontend Slides](https://github.com/zarazhangrui/frontend-slides)는 **단일 HTML 파일**로 16:9 웹 프레젠테이션을 만드는 코딩 에이전트 스킬입니다.
클로드 디자인 캔버스로 슬라이드 초안을 뽑은 뒤, **브라우저에서 바로 열고 공유·배포**할 HTML 덱이 필요할 때 8.3절 예제 8.2·8.3과 연결해 보세요.

| 항목 | 내용 |
| --- | --- |
| 역할 | 스타일 미리보기 3종 비교 → 선택 → 전체 슬라이드 생성. PowerPoint(`.pptx`) → HTML 변환 지원 |
| 출력 | npm·빌드 없이 인라인 CSS/JS 단일 HTML. 접근성·16:9 고정 |
| 스타일 | 12+ 프리셋 + `beautiful-html-templates` 볼드 팩 34종. AI slop(보라 그라데이션 등) 회피 |
| 책 연결 | 8.3절 예제 8.2 발표 슬라이드, 8.3 Q&A 슬라이드. 기존 PPT를 웹으로 옮길 때 |

### 클로드 디자인 vs Frontend Slides

| | 클로드 디자인 | Frontend Slides |
| --- | --- | --- |
| 초점 | 캔버스에서 빠른 시각 초안 | **코드로 재현·배포 가능한 HTML 덱** |
| 브랜드 | Design Systems로 색상·폰트 적용 | 스타일 프리뷰 선택·PPT 변환 |
| 책 연결 | 예제 8.1~8.6 요청문 | 클로드 코드 `/frontend-slides:frontend-slides` |

### 설치 (클로드 코드)

아래 두 줄은 **각각 별도 메시지**로 실행하세요. HTTPS URL을 쓰면 SSH `known_hosts` 오류를 피할 수 있습니다.

```
/plugin marketplace add https://github.com/zarazhangrui/frontend-slides
/plugin install frontend-slides@frontend-slides
```

수동 설치:

```bash
git clone https://github.com/zarazhangrui/frontend-slides.git ~/.claude/skills/frontend-slides
```

플러그인 설치 후 `/frontend-slides:frontend-slides`, 수동 설치 후 `/frontend-slides`로 호출합니다.

```
/frontend-slides:frontend-slides

> "데일리핏 100일 루틴 캠페인 발표 슬라이드 10장 만들어줘"
```

PPT 변환은 `scripts/extract-pptx.py`로 본문·이미지·노트를 추출한 뒤 같은 스타일 선택 흐름을 따릅니다. 입문 튜토리얼은 [YouTube 워크스루](https://www.youtube.com/watch?v=372Iksaz8b0)를 참고하세요.

> Cursor·Codex 등 다른 에이전트는 저장소 링크와 `SKILL.md`를 넘기면 같은 흐름을 따를 수 있습니다.

## Marketing Skills — 랜딩 카피·전환 최적화

8.3절 캠페인 시안의 **문구·전환**을 다듬을 때 [Marketing Skills](https://github.com/coreyhaines31/marketingskills)를 쓸 수 있습니다.

| 스킬 | 용도 | 책 연결 |
| --- | --- | --- |
| `copywriting` | 홈페이지·랜딩 헤드라인·본문 | 예제 8.1·8.6 |
| `cro` | 랜딩·폼 전환율 개선 | 8.6절 CTA·스크롤 구간 |
| `launch` | 캠페인 출시·공지 전략 | 8.3절 데일리핏 캠페인 |

설치·`product-marketing` 맥락 파일은 [6장 README](../ch06-코워크-함께-일하는-클로드/README.md#marketing-skills--마케팅-스킬-라이브러리)를 참고하세요.

## Claude SEO — 랜딩·홈페이지 출시 후 점검

Marketing Skills로 **카피·CRO**를 맞춘 뒤 HTML로 배포했다면, 검색·AI 인용에 맞는지 [Claude SEO](https://github.com/AgriciDaniel/claude-seo)로 점검할 수 있습니다.

| 항목 | 내용 |
| --- | --- |
| 역할 | `/seo page` 단일 랜딩 분석, `/seo schema` JSON-LD 검증·생성, `/seo geo` AI 검색(GEO) 준비도 |
| 책 연결 | 예제 8.1 홈페이지, 8.6 랜딩 — gstack `/design-html`·Frontend Slides **이후** 출시 단계 |
| 설치 | `/plugin marketplace add AgriciDaniel/claude-seo` → `/plugin install claude-seo@agricidaniel-claude-seo` |

```
/seo page https://example.com/dailyfit
/seo schema https://example.com/dailyfit
```

설치·전체 명령·Google Search Console 연동은 [7장 README](../ch07-클로드-코드-생각을-실행-가능한-결과물로-바꾸기/README.md#claude-seo--사이트랜딩-seo-감사)를 참고하세요.

## 추천 자료 — 디자인 도구

함께 쓰면 좋은 도구입니다. 사용 전 각 사이트에서 최신 정보를 확인하세요.

| 자료 | URL | 설명 |
| --- | --- | --- |
| The Component Gallery | https://component.gallery/components | UI 컴포넌트의 이름과 패턴을 찾는 레퍼런스입니다. |
| Design Extractor | https://www.design-extractor.com | 기존 웹사이트 톤을 DESIGN.md 형태로 정리할 때 참고할 수 있습니다. |
| shadcn-ui/ui | https://github.com/shadcn-ui/ui | 디자인 시스템·컴포넌트 감각 참고 |
| tailwindlabs/tailwindcss | https://github.com/tailwindlabs/tailwindcss | 색상·타이포 일관성 참고 |
| Refactoring UI | https://www.refactoringui.com | 레이아웃·시각 계층 참고 |
| Hyperframes | https://github.com/heygen-com/hyperframes | 클로드 디자인과 함께 쓰기 좋은 디자인 프레임워크입니다. |
| Hyperframes 가이드 | https://github.com/heygen-com/hyperframes/blob/main/docs/guides/claude-design-hyperframes.md | 클로드 디자인에서 Hyperframes를 활용하는 방법입니다. |
| 3D SVG Tool | https://3dsvg.design | 3D SVG를 생성하는 웹 도구입니다. |
| Happy Hues | https://www.happyhues.co | 배색 참고용 색상 팔레트 큐레이션 사이트입니다. |
| Developer Icons | https://github.com/xandemon/developer-icons | 개발자 아이콘 오픈소스 모음입니다. |
| Impeccable | https://impeccable.style/ | 디자인 명령 23종·`DESIGN.md`·AI slop 탐지. 클로드 코드·Cursor 등 |
| pbakaus/impeccable | https://github.com/pbakaus/impeccable | Impeccable 스킬·CLI 소스 (`npx impeccable install`) |
| UI UX Pro Max | https://github.com/nextlevelbuilder/ui-ux-pro-max-skill | 67 UI 스타일·161 업종 규칙·디자인 시스템 자동 생성. `uipro init --ai claude` |
| uupm.cc | https://uupm.cc | UI UX Pro Max 공식 사이트·Premium 안내 |
| Frontend Slides | https://github.com/zarazhangrui/frontend-slides | HTML 웹 슬라이드·PPT 변환 스킬. `/frontend-slides:frontend-slides` |
| coreyhaines31/marketingskills | https://github.com/coreyhaines31/marketingskills | 랜딩 `copywriting`·`cro`·`launch` |
| AgriciDaniel/claude-seo | https://github.com/AgriciDaniel/claude-seo | 랜딩·홈페이지 `/seo page`·schema·GEO 감사 |
| Taste Skill | https://www.tasteskill.dev | 이미지·디자인 감각을 보강하는 스킬입니다. |
| garrytan/gstack | https://github.com/garrytan/gstack | `/design-shotgun`, `/design-html`, `/design-review` 등 디자인 스프린트 명령 |
