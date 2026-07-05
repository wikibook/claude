# 7장 클로드 코드, 생각을 실행 가능한 결과물로 바꾸기

> **책 7장** 독자를 위한 보충 자료입니다.
> 클로드 기능 변화에 맞춰 지속적으로 업데이트합니다.

## 이 장의 실습 자산

책 7장에서 클로드 코드로 만든 산출물을 같은 구성으로 담았습니다.
웹 도구는 `index.html`을 더블클릭하면 **인터넷 연결 없이** 바로 작동합니다.

| 폴더 | 내용 | 책 연결 |
| --- | --- | --- |
| [`포트폴리오/`](포트폴리오/index.html) | 개인 포트폴리오 페이지(`index.html`·`style.css`) | 7.4.2절 예제 7.3 |
| [`프로젝트-보드/`](프로젝트-보드/index.html) | 칸반 보드(드래그&드롭·로컬 저장·우선순위 색상) | 7.5.2절 예제 7.6 및 7.5.3절 후속 요청 |
| [`회의록-폴더-예제/`](회의록-폴더-예제/CLAUDE.md) | 폴더용 `CLAUDE.md` + 샘플 회의록 | 7.3.2절 예제 7.2 |
| [`프롬프트/첫-작업-hello.txt.md`](프롬프트/첫-작업-hello.txt.md) | 첫 파일 생성 요청 | 7.2.4절 예제 7.1 |
| [`프롬프트/루틴-주간-회의-요약.md`](프롬프트/루틴-주간-회의-요약.md) | `/schedule` 루틴 설정 | 7.3.5절 예제 7.3 |
| [`프롬프트/파일정리-CSV병합.md`](프롬프트/파일정리-CSV병합.md) | CSV 병합 자동화 | 7.4.3절 예제 7.5 |
| [`프롬프트/이미지-일괄처리.md`](프롬프트/이미지-일괄처리.md) | 이미지 크기·이름 일괄 처리 | 7.5.1절 예제 7.6 |
| [`프롬프트/모바일-세션-확인.md`](프롬프트/모바일-세션-확인.md) | 모바일에서 세션 진행 확인 | 7.5.3절 예제 7.8 |

> CSV 병합·이미지 처리는 결과물이 **데이터 파일**이라 코드 대신 따라 쓸 수 있는 **프롬프트**만 담았습니다.
> 책의 메시지대로, 말로 설명하면 클로드 코드가 처리합니다.

> **💡 팁: 결과는 반드시 확인하세요**
>
> 클로드 코드가 작업을 마치면 결과 파일을 열어 의도대로인지 직접 확인하세요.
> 코드를 몰라도 결과물 검증은 사람이 해야 합니다(책 7.4.3절).

## 공식 문서

| 문서 | URL | 설명 |
| --- | --- | --- |
| 클로드 코드 설치·설정 | https://code.claude.com/docs/en/setup | 설치, 업데이트, 인증, 플랫폼별 설정을 확인할 수 있습니다. |
| Claude Code Routines | https://code.claude.com/docs/en/routines | 반복 작업을 루틴으로 저장하고 다시 실행하는 방법을 안내합니다. |
| Claude Code Best Practices | https://code.claude.com/docs/en/best-practices | 클로드 코드 활용법을 정리한 공식 가이드입니다. |

## 추천 자료

| 자료 | URL | 설명 |
| --- | --- | --- |
| anthropics/claude-code | https://github.com/anthropics/claude-code | 클로드 코드 공식 오픈소스 저장소입니다. |
| anthropics/claude-code-action | https://github.com/anthropics/claude-code-action | PR과 Issue에서 클로드가 자동으로 코드를 리뷰하는 GitHub Action입니다. |
| anthropics/anthropic-cookbook | https://github.com/anthropics/anthropic-cookbook | 클로드 API 실용 예제를 Jupyter Notebook 형태로 제공합니다. |
| hesreallyhim/awesome-claude-code | https://github.com/hesreallyhim/awesome-claude-code | 클로드 코드 스킬·훅·슬래시 명령·플러그인 큐레이션입니다. |
| yamadashy/repomix | https://github.com/yamadashy/repomix | 코드베이스를 AI 친화적인 단일 파일로 압축하는 도구입니다. |
| Claude Code Secret Sauce | https://matt-rickard.com/claude-code-secret-sauce | Matt Rickard의 클로드 코드 활용 핵심 정리 아티클입니다. |
