# 7장 클로드 코드, 생각을 실행 가능한 결과물로 바꾸기

> **책 7장** 독자를 위한 보충 자료입니다.
> 클로드 기능 변화에 맞춰 지속적으로 업데이트합니다.

## 이 장의 실습 자산

책 7장에서 클로드 코드로 만든 산출물을 같은 구성으로 담았습니다. 웹 도구는 `index.html`을
더블클릭하면 인터넷 연결 없이 바로 작동합니다.

#### 🧑‍💼 포트폴리오 페이지
이름·소개·작업물을 카드로 보여주는 개인 포트폴리오입니다(`index.html`·`style.css`).
→ [`포트폴리오/`](포트폴리오/index.html) · 책 7.4.2절 예제 7.3

#### 🗂 프로젝트 보드 (칸반)
카드를 드래그&드롭으로 옮기고, 우선순위 색상이 붙으며, 새로고침해도 로컬에 저장되는 칸반 보드입니다.
→ [`프로젝트-보드/`](프로젝트-보드/index.html) · 책 7.5.2절 예제 7.6 및 7.5.3절 후속 요청

#### 📁 회의록 폴더 `CLAUDE.md` 예제
폴더 단위로 클로드 코드의 작업 규칙을 정해 두는 `CLAUDE.md`와 샘플 회의록입니다.
→ [`회의록-폴더-예제/`](회의록-폴더-예제/CLAUDE.md) · 책 7.3.2절 예제 7.2

#### 💬 프롬프트 모음
CSV 병합·이미지 일괄 처리처럼 결과물이 데이터 파일이라, 코드 대신 따라 쓸 수 있는 요청문만 담았습니다.
→ [`프롬프트/`](프롬프트/) · 책 7.4.3·7.5.1절 예제 7.4~7.5

> **💡 팁: 결과는 반드시 확인하세요.** 클로드 코드가 작업을 마치면 결과 파일을 열어 의도대로인지
> 직접 확인하세요. 코드를 몰라도 결과물 검증은 사람이 해야 합니다(책 7.4.3절).

## 공식 문서

#### 설치·설정
설치, 업데이트, 인증, 플랫폼별 설정을 확인할 수 있습니다. 클로드 코드를 처음 켤 때 먼저 보세요.
→ [클로드 코드 설치·설정](https://code.claude.com/docs/en/setup)

#### 루틴 — 반복 작업 저장하기
자주 하는 작업을 루틴으로 저장해 다시 실행하는 방법입니다. 7장의 업무 자동화와 바로 연결됩니다.
→ [Claude Code Routines](https://code.claude.com/docs/en/routines)

#### 베스트 프랙티스
클로드 코드를 잘 쓰는 방법을 정리한 공식 가이드입니다.
→ [Claude Code Best Practices](https://code.claude.com/docs/en/best-practices)

## 추천 자료

클로드 코드를 더 깊이 파고들고 싶을 때(일부는 개발자 지향).

- **[anthropics/claude-code](https://github.com/anthropics/claude-code)** — 클로드 코드 공식 오픈소스 저장소.
- **[anthropics/claude-code-action](https://github.com/anthropics/claude-code-action)** — PR·Issue에서 클로드가 자동으로 코드를 리뷰하는 GitHub Action.
- **[anthropics/anthropic-cookbook](https://github.com/anthropics/anthropic-cookbook)** — 클로드 API 실용 예제(Jupyter Notebook).
- **[hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)** — 클로드 코드 스킬·훅·슬래시 명령·플러그인 큐레이션.
- **[yamadashy/repomix](https://github.com/yamadashy/repomix)** — 코드베이스를 AI 친화적인 단일 파일로 압축하는 도구.
- **[Claude Code Secret Sauce](https://matt-rickard.com/claude-code-secret-sauce)** — 클로드 코드 활용 핵심을 정리한 아티클.
