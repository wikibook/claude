# 8장 클로드 디자인, 시각 자료 만들기

> **책 8장** 독자를 위한 보충 자료입니다.
> 클로드 기능 변화에 맞춰 지속적으로 업데이트합니다.

클로드 디자인의 결과물(홈페이지·슬라이드·인포그래픽·애니메이션)은 캔버스에서 생성되어 책에 코드로
실리지 않습니다. 그래서 이 폴더에는 **그대로 따라 할 수 있는 요청(프롬프트)**과 재현 가능한
디자인 시스템 설정을 담았습니다.

## 이 장의 실습 자산

#### 🎨 데일리핏 캠페인 — 다섯 가지 결과물 프롬프트
가상 브랜드 '데일리핏 100일 루틴' 하나로 목업·슬라이드·Q&A·인포그래픽·운영 문서·애니메이션
랜딩까지 이어서 만드는 요청 모음입니다(8.3절 예제 8.1~8.6). 각 결과물마다 "목적·레이아웃·내용·대상"을
어떻게 담는지 보여줍니다.
→ [프롬프트/데일리핏-캠페인.md](프롬프트/데일리핏-캠페인.md)

#### 🧩 디자인 시스템 설정 — 데일리핏
빠르게 만든 자료들의 색·글꼴·분위기를 하나의 기준으로 묶는 브랜드 디자인 시스템 설정 예시입니다.
한 번 등록하면 이후 새 슬라이드·목업에 자동 적용됩니다.
→ [`디자인시스템-데일리핏.md`](디자인시스템-데일리핏.md) · 책 8.4절

> **💡 팁:** 클로드 디자인의 결과물은 **초안**부터 시작하세요. 구조와 메시지 흐름을 빠르게 잡은 뒤,
> 브랜드 기준·데이터 정확성을 사람이 검토해 완성도를 높이는 흐름이 가장 효율적입니다. 회사 양식을
> 꼭 지켜야 하는 자료는 Claude for PowerPoint 같은 도구 연동이 더 맞을 수 있습니다.

## 공식 문서

#### 클로드 디자인 기능
시각 자료 생성 관련 최신 기능과 사용법을 확인할 수 있는 공식 도움말입니다. 메뉴 이름이나 내보내기
형식이 책과 다르게 보일 때 먼저 확인하세요.
→ [support.claude.com](https://support.claude.com)

## 더 읽어보기

#### 클로드 디자인은 어떻게 나왔나
클로드가 시각 자료를 만드는 기능이 어떤 배경에서 나왔는지 앤트로픽이 소개한 글입니다. 도구의
지향점을 이해하면 요청을 더 잘 다듬을 수 있습니다.
→ [Claude Design (Anthropic Labs)](https://www.anthropic.com/news/claude-design-anthropic-labs)

#### 디자인 도구를 AI와 잇는 흐름
AI 에이전트가 디자인 캔버스를 다루는 큰 흐름을 보여주는 Figma의 글입니다. 8장의 결과물을 Figma로
가져가 이어 작업할 때 배경으로 참고하세요.
→ [The Figma canvas is now open to agents](https://www.figma.com/blog/the-figma-canvas-is-now-open-to-agents)

## 함께 쓰면 좋은 도구

시각 자료를 만들 때 참고·보강용으로 곁에 두면 좋은 도구입니다. 사용 전 각 사이트에서 최신 정보를 확인하세요.

- **[Happy Hues](https://www.happyhues.co)** — 배색을 실제 화면 맥락에서 보여주는 색상 팔레트 큐레이션. "무슨 색을 쓸지" 막힐 때 부담 없이 참고하기 좋습니다.
- **[The Component Gallery](https://component.gallery/components)** — UI 컴포넌트의 이름과 패턴을 찾는 레퍼런스. "이런 요소를 뭐라고 부르지?" 싶을 때.
- **[Design Extractor](https://www.design-extractor.com)** — 웹사이트의 스타일을 디자인 정리 문서(DESIGN.md)로 뽑아 주는 도구. 기존 사이트 톤을 클로드에 전달할 때.
- **[design.md 생성기 (Figma 플러그인)](https://www.figma.com/community/plugin/1612814320994608244/design-md-generator)** — 피그마 디자인을 DESIGN.md로 정리해 클로드 디자인과 잇는 예시.
- **[Hyperframes](https://github.com/heygen-com/hyperframes)** ([활용 가이드](https://github.com/heygen-com/hyperframes/blob/main/docs/guides/claude-design-hyperframes.md)) — 클로드 디자인과 함께 쓰기 좋은 디자인 프레임워크.
- **[3D SVG Tool](https://3dsvg.design)** · **[Developer Icons](https://github.com/xandemon/developer-icons)** · **[Taste Skill](https://www.tasteskill.dev)** — 3D SVG 생성, 개발자 아이콘 모음, 디자인 감각을 보강하는 스킬.
