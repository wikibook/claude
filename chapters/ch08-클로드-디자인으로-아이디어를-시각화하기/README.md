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
| Taste Skill | https://www.tasteskill.dev | 이미지·디자인 감각을 보강하는 스킬입니다. |
| garrytan/gstack | https://github.com/garrytan/gstack | `/design-shotgun`, `/design-html`, `/design-review` 등 디자인 스프린트 명령 |
