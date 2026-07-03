# 2장 클로드와 대화하는 기술

> **책 2장** 독자를 위한 보충 자료입니다.
> 클로드 기능 변화에 맞춰 지속적으로 업데이트합니다.

2장은 파일을 내려받아 실행하기보다, 프롬프트를 어떻게 쓰고 고치는지 익히는 장입니다.
그래서 이 폴더에는 책에서 다룬 대표 프롬프트를 **그대로 복사해 바꿔 쓸 수 있게** 정리해 두었습니다.
대괄호 안 항목만 본인 상황으로 바꾸면 됩니다.

## 실습 자산 — 책 예제를 복사해 쓰기

#### 📝 프롬프트 기법 예제 모음
구조화된 프롬프트, 단계별 검토, Few-shot — 2.3절에서 배운 세 기법(예제 2.8~2.10)을
[IN] 요청과 클로드의 응답 예시까지 함께 담았습니다. 접힌 응답을 펼쳐 보며 "이렇게 쓰면
이런 결과가 나오는구나"를 확인하세요.
→ [프롬프트/프롬프트-기법.md](프롬프트/프롬프트-기법.md)

#### ✉️ 문서 작업 프롬프트
사과 이메일처럼 어조가 까다로운 글과, 목적에 따라 달라지는 문서 요약 세 방식 — 2.7절의
실전 예제(2.17~2.18)입니다. 업무에서 가장 자주 쓰는 두 가지라 바로 써먹기 좋습니다.
→ [프롬프트/문서-작업.md](프롬프트/문서-작업.md)

이 밖에도, 각 장 예제에서 검증된 프롬프트를 직무·용도별로 모은
[프롬프트 템플릿 모음](../../resources/프롬프트-템플릿.md)(2.1~2.7절 전반)과, 답변 품질이 낮거나
파일 처리가 막힐 때 확인할 [FAQ·문제 해결](../../resources/faq-문제해결.md)을 함께 보면 좋습니다.

## 공식 문서

#### 프롬프트 엔지니어링 가이드
프롬프트 작성 원칙과 실전 패턴을 정리한 앤트로픽 공식 문서입니다. 2장에서 배운 기법들의
근거와 더 많은 예시가 담겨 있어, 한 번 통독해 두면 프롬프트를 보는 눈이 달라집니다.
→ [Prompt engineering overview](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview)

#### 클로드 프롬프트 작성 베스트 프랙티스
"어떻게 하면 클로드가 내 의도를 더 잘 알아들을까"를 항목별로 정리한 공식 가이드입니다.
2장의 원칙을 실무에 적용할 때 곁에 두고 참고하기 좋습니다.
→ [Claude prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)

#### XML 태그로 정보 구조화하기 (한국어)
지시문과 자료를 `<자료>...</자료>`처럼 꺾쇠 태그로 감싸 클로드가 각 영역의 역할을 정확히
인식하게 하는 방법입니다. 2.3.2절의 구조화된 프롬프트를 한 단계 더 엄격하게 쓰고 싶을 때 보세요.
→ [XML 태그 사용 (공식 문서, 한국어)](https://platform.claude.com/docs/ko/build-with-claude/prompt-engineering/use-xml-tags)

#### 클로드 지원 센터
프로젝트, 대화 관리, 파일 첨부 등 클로드 사용법 전반을 확인할 수 있는 공식 도움말입니다.
2.4절 프로젝트 기능을 실제로 설정할 때 참고하세요.
→ [support.claude.com](https://support.claude.com)

## 더 읽어보기

프롬프트를 손에 익히고 싶다면 아래 자료로 연습을 이어가세요. 앞의 두 개는 앤트로픽 공식,
뒤의 두 개는 널리 쓰이는 커뮤니티 자료입니다.

- **[프롬프트 엔지니어링 대화형 튜토리얼](https://github.com/anthropics/prompt-eng-interactive-tutorial)** —
  단계별 실습으로 프롬프트를 익히는 앤트로픽 공식 튜토리얼. 손으로 따라 하며 배우고 싶을 때 첫 번째로 권합니다.
- **[anthropics/courses](https://github.com/anthropics/courses)** —
  프롬프트 엔지니어링과 API 기초 강의 자료. 튜토리얼을 마친 뒤 조금 더 체계적으로 정리하고 싶을 때 좋습니다.
- **[dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide)** —
  여러 LLM에 두루 통하는 프롬프트 기법 종합 가이드. 클로드 외 다른 도구도 함께 쓴다면 참고할 만합니다.
- **[langgptai/awesome-claude-prompts](https://github.com/langgptai/awesome-claude-prompts)** —
  클로드용 프롬프트를 사용 사례별로 모은 커뮤니티 모음. "이럴 땐 어떻게 물어보지?" 싶을 때 아이디어를 얻기 좋습니다.
