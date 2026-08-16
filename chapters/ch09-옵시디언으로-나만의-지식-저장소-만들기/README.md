# 9장 옵시디언으로 나만의 지식 저장소 만들기

> **책 9장** 독자를 위한 보충 자료입니다.
> 클로드 기능 변화에 맞춰 지속적으로 업데이트합니다.

## 이 장의 보충 자료

책 9장 실습에 쓰는 **프롬프트**, `CLAUDE.md` 예시, 샘플 소스 문서를 정리했습니다.
옵시디언 볼트 폴더 전체는 제공하지 않습니다. 책 9.3절 흐름대로 본인 볼트를 만들고,
아래 자료를 복사해 붙여 넣어 시작하세요.

| 파일/폴더 | 내용 | 책 연결 |
| --- | --- | --- |
| [`프롬프트/볼트-폴더-구조.md`](프롬프트/볼트-폴더-구조.md) | 볼트 기본 폴더 구조 만들기 | 9.3.2절 예제 9.1 |
| [`프롬프트/볼트-CLAUDE-md.md`](프롬프트/볼트-CLAUDE-md.md) | `CLAUDE.md`를 만드는 요청문(내용 전문 포함) | 9.3.3절 예제 9.2 |
| [`예시/CLAUDE.md`](예시/CLAUDE.md) | 위 요청으로 만들어지는 볼트 규칙 파일 | 9.3.3절 예제 9.2 |
| [`프롬프트/첫-위키-페이지.md`](프롬프트/첫-위키-페이지.md) | 나의 프로필·관심사·도구 위키 페이지 만들기 | 9.3.4절 예제 9.3 |
| [`샘플/2027-04-10-ai-product-management.md`](샘플/2027-04-10-ai-product-management.md) | 9.4절 수집 실습용 샘플 소스 | 9.4절 |
| [`프롬프트/새-소스-수집.md`](프롬프트/새-소스-수집.md) | 새 소스 수집·위키 반영 | 9.4.3절 예제 9.4 |
| [`프롬프트/위키-기반-질문.md`](프롬프트/위키-기반-질문.md) | 위키 기반 질문 | 9.5.2절 예제 9.5 |
| [`프롬프트/주간-점검-lint.md`](프롬프트/주간-점검-lint.md) | 주간 점검 | 9.5.4절 예제 9.6 |
| [`프롬프트/아침-브리핑.md`](프롬프트/아침-브리핑.md) | 아침 브리핑 | 9.5.5절 예제 9.7 |
| [`프롬프트/회의록-위키-정리.md`](프롬프트/회의록-위키-정리.md) | 회의록→위키 정리 | 9.5.6절 예제 9.8 |

### 볼트 기본 구조 (9.3.2절)

책 예제 9.1에 맞춰 아래 네 폴더를 볼트 루트에 만듭니다.

```
sources/    ← 원본 자료 (읽기 전용)
wiki/       ← AI가 쓰는 위키 페이지
daily/      ← 날짜별 메모
archive/    ← 더 이상 참조하지 않는 자료
```

각 폴더 안에 `README.md`를 두고 용도를 한 줄로 적습니다.
폴더를 직접 만들지 않고 클로드 코드에게 맡기려면 [`프롬프트/볼트-폴더-구조.md`](프롬프트/볼트-폴더-구조.md)의
요청문을 그대로 보내면 됩니다. 이어서 `예시/CLAUDE.md`를 볼트 루트에 복사하면 9.3.3절 규칙이 바로 적용됩니다.

## 시작하기 — 수집 흐름

1. 새 자료를 마크다운으로 `sources/`에 넣습니다.
   - **옵시디언 웹 클리퍼** — 브라우저에서 페이지·하이라이트를 한 번에 보관함에 저장합니다. [한국어 소개·설치](https://obsidian.md/ko/clipper)
   - **Defuddle API** — URL만으로 마크다운+YAML frontmatter를 받을 때: `curl defuddle.md/도메인/경로`. 스크립트·클로드 코드로 `sources/`에 일괄 저장할 때 유용합니다.
   - **북마클릿** — [defuddle.md](https://defuddle.md/)에서 드래그해 북마크바에 두면, 열린 페이지를 한 번에 마크다운으로 변환할 수 있습니다.
2. 터미널에서 볼트 폴더로 이동해 `claude`를 실행하고, 수집·정리를 요청합니다.
   요청문은 [`프롬프트/새-소스-수집.md`](프롬프트/새-소스-수집.md)의 예제 9.4를 그대로 보내면 됩니다.
3. 주기적으로 "점검(lint)"을 요청해 모순·고아 페이지·중복을 정리합니다.

> Defuddle은 광고·사이드바·댓글을 제거하고 **본문만** 남깁니다. `sources/`는 원본 보관용이므로, 위키로 옮길 때는 책 9.3.3절 규칙대로 출처를 함께 기록하세요.

## 옵시디언 웹 클리퍼 설정 (9.4절 `sources/` 연동)

[Obsidian Web Clipper](https://obsidian.md/ko/clipper)는 무료·[오픈소스](https://github.com/obsidianmd/obsidian-clipper) 브라우저 확장입니다. Chrome·Safari·Firefox·Edge 등에서 설치할 수 있습니다.

| 기능 | 설명 | 볼트 연결 |
| --- | --- | --- |
| **클립** | 페이지 본문·메타데이터를 마크다운 파일로 저장 | `Note location` → `sources/articles/` 등 |
| **하이라이트** | 중요 구절만 선택해 클립. 재방문 시에도 표시 유지 | `sources/highlights/` 또는 주제별 하위 폴더 |
| **템플릿** | 기사·논문·레시피 등 유형별 frontmatter 자동 적용 | `{{title}}`, `{{author}}`, `{{published}}`, `source` 속성 |
| **규칙** | 도메인별 템플릿 자동 선택 | 자주 보는 사이트마다 `sources/` 하위 경로 지정 |

책 볼트 구조와 맞추려면 클리퍼 설정에서 다음을 권장합니다.

1. **Vault** — 9.3절에서 만든 본인 볼트 선택
2. **Note location** — `sources/articles` (또는 `sources/highlights`)
3. **Note name** — `{{date}}-{{title}}`처럼 날짜·제목이 파일명에 들어가게 설정
4. **Properties** — `source`(원문 URL), `author`, `published`가 frontmatter에 들어가게 유지 → 9.4절 수집·위키 반영에 유리

본문 추출에는 [Defuddle](https://defuddle.md/)이 사용됩니다. 템플릿 변수·고급 설정은 [웹 클리퍼 도움말](https://obsidian.md/ko/help/web-clipper)을 참고하세요.

## 추천 자료

### 옵시디언 기본

| 자료 | URL | 설명 |
| --- | --- | --- |
| 옵시디언 공식 사이트 | https://obsidian.md | 옵시디언의 기본 기능과 플러그인을 확인할 수 있습니다. |
| 옵시디언 커뮤니티 | https://community.obsidian.md | 커뮤니티가 만든 플러그인과 테마를 한곳에서 검색하고 둘러볼 수 있습니다. |
| 옵시디언 플러그인 마켓 | https://obsidian.md/plugins | 공식 커뮤니티 플러그인을 검색하고 설치할 수 있습니다. |
| 옵시디언 웹 클리퍼 | https://obsidian.md/ko/clipper | 브라우저에서 페이지·하이라이트 클립. 템플릿·`sources/` 경로 설정 |
| 웹 클리퍼 도움말 | https://obsidian.md/ko/help/web-clipper | 템플릿 변수·규칙·페이지 데이터 조작 |
| obsidianmd/obsidian-clipper | https://github.com/obsidianmd/obsidian-clipper | 웹 클리퍼 오픈소스 저장소 |
| Defuddle | https://defuddle.md/ | 웹 페이지 본문 추출 엔진·API·CLI([kepano/defuddle](https://github.com/kepano/defuddle)) |

### 함께 쓰면 좋은 플러그인 후보

설치 전 옵시디언 플러그인 마켓에서 최신 버전과 설명을 확인하세요.

| 플러그인 | URL | 설명 |
| --- | --- | --- |
| Smart Connections | https://github.com/brianpetro/obsidian-smart-connections | 현재 노트와 의미적으로 가까운 노트를 추천하고, 볼트 전체를 의미 기반으로 검색하는 플러그인입니다. 기본 흐름은 로컬 임베딩을 사용하므로 별도 API 키 없이 시작할 수 있습니다. |
| Dataview | https://github.com/blacksmithgu/obsidian-dataview | SQL 방식으로 노트 데이터를 쿼리하고 시각화합니다. |
| Templater | https://github.com/SilentVoid13/Templater | 반복 노트 양식을 템플릿으로 자동화합니다. |
| Periodic Notes | https://github.com/liamcain/obsidian-periodic-notes | 일간·주간·월간 노트를 정해진 형식으로 자동 생성합니다. |

Smart Connections는 볼트가 커진 뒤 효과가 큽니다. 책에서 만든 `sources/`와 `wiki/` 구조에 자료가 쌓이면, 현재 작성 중인 위키 페이지와 관련된 예전 메모를 자동으로 다시 찾아볼 수 있습니다. 클로드에게 정리를 맡기기 전에는 Smart Connections의 Connections view나 Lookup view로 관련 노트를 먼저 모으고, 그 결과를 클로드에게 "아래 후보 노트를 근거로 `wiki/`를 업데이트해 주세요"처럼 전달하면 좋습니다.

다만 추천 결과는 "근거"가 아니라 "후보"입니다. 클로드가 답을 만들 때는 항상 원본 `sources/`나 기존 `wiki/` 페이지의 출처를 다시 확인하게 하세요.

### 클로드 + 옵시디언 연계

| 자료 | URL | 설명 |
| --- | --- | --- |
| kepano/obsidian-skills | https://github.com/kepano/obsidian-skills | 옵시디언 작업에 특화된 클로드 스킬 예시입니다. (kepano = Minimal 테마·Defuddle 제작자) |
| kepano/defuddle | https://github.com/kepano/defuddle | 웹→마크다운 추출 라이브러리. `npx defuddle parse <URL> --markdown` |