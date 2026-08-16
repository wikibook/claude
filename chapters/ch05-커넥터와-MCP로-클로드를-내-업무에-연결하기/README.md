# 5장 커넥터와 MCP로 클로드를 내 업무에 연결하기

> **책 5장** 독자를 위한 보충 자료입니다.
> 클로드 기능 변화에 맞춰 지속적으로 업데이트합니다.

## 이 장에서 받을 수 있는 것

5장은 내 업무 도구와 클로드를 연결하는 방법을 다룹니다. 연결 설정은 서비스와 조직 정책에 따라
달라지므로, 저장소에는 연결한 뒤 바로 써 볼 수 있는 프롬프트, 5.4절 실습에 그대로 쓰는 예제 데이터,
안전하게 살펴볼 수 있는 공식 문서·참조 서버를 모았습니다.

| 자료 | 내용 | 책 연결 |
| --- | --- | --- |
| [`프롬프트/예제-프롬프트.md`](프롬프트/예제-프롬프트.md) | 예제 5.1~5.9 전체 [IN] 요청문 | 5.2~5.5절 예제 5.1~5.9 |
| [`프롬프트/커넥터-대표질문.md`](프롬프트/커넥터-대표질문.md) | 드라이브 다문서·검색, 지메일·슬랙·노션 대표 질문 | 5.2.1~5.2.2절 예제 5.1~5.2 및 서비스별 응용 |
| [`프롬프트/스프레드시트-자동화.md`](프롬프트/스프레드시트-자동화.md) | 수식 요청, 오류 해결, 데이터 정리, 인사이트 도출 | 5.4절 응용 |
| [`프롬프트/웹검색-리서치.md`](프롬프트/웹검색-리서치.md) | 시장 동향·뉴스·경쟁사 리서치 요청문 | 5.5절 응용 |
| [`샘플/상품_마스터.csv`](샘플/상품_마스터.csv) | 실습용 상품 기준 자료 326행 (가상 데이터) | 5.4.1절 예제 5.5의 구글 시트 "상품 마스터" 원본 |
| [`샘플/2027_06_주문내역.csv`](샘플/2027_06_주문내역.csv) | 실습용 월별 주문 내역 1,248행 (가상 데이터) | 5.4.2절 예제 5.6에서 첨부하는 CSV |
| MCP 공식 문서 | 프로토콜 개념, 서버·클라이언트 구조 | 5.3절 |
| 공식 참조 서버 목록 | 파일, 웹 가져오기, 메모리, Git 예시 | 5.3절 |
| MCP 디렉터리와 큐레이션 | 더 많은 서버를 찾을 때 참고할 목록 | 5장 전체 |

> `예제-프롬프트.md`는 책 예제의 요청문을 **원문 그대로** 담았고, `프롬프트/` 폴더의 나머지 세 파일은
> 같은 요청을 본인 업무에 맞게 바꿔 쓸 수 있도록 대괄호 자리를 넣어 **일반화한 템플릿**입니다.
> `샘플/` 폴더의 CSV 두 개는 5.4절 실습에 그대로 쓰는 예제 데이터입니다.

> 실제 업무 계정이나 회사 데이터에 연결하기 전에는 최소 권한, 접근 로그, 회사 보안 정책을 먼저 확인하세요.

## 5.4절 실습 데이터 준비하기

5.4절은 **구글 드라이브의 "상품 마스터" 시트**와 **내 컴퓨터의 월별 주문 내역 CSV**를 결합하는
실습입니다. 두 파일 모두 이 폴더의 [`샘플/`](샘플) 안에 있습니다. 파일 이름을 클릭한 뒤
**Download raw file** 버튼을 누르면 내려받을 수 있습니다.

#### 상품_마스터.csv — 구글 드라이브에 올려 두는 기준 자료

내려받은 [`샘플/상품_마스터.csv`](샘플/상품_마스터.csv)를 구글 드라이브에 업로드하고,
파일을 연 뒤 **파일 → Google 스프레드시트로 저장**을 선택합니다. 만들어진 시트 이름을
`상품 마스터`로 바꾸면 예제 5.5의 요청문("내 구글 드라이브에서 '상품 마스터'라는 이름의
구글 시트 파일을 찾아 읽어 주세요")이 그대로 동작합니다. 상품 코드 326행에 상품명, 상품군,
정상 가격, 판매 상태, 최종 수정일이 들어 있습니다.

#### 2027_06_주문내역.csv — 대화창에 첨부하는 주문 데이터

[`샘플/2027_06_주문내역.csv`](샘플/2027_06_주문내역.csv)는 내려받은 상태 그대로 두었다가,
예제 5.6에서 대화창의 `+` 버튼 → 파일 업로드로 첨부합니다. 2027년 6월 주문 1,248행이며
주문번호, 주문일, 상품코드, 수량, 판매단가, 주문상태 여섯 열로 이루어져 있습니다.

> 두 파일은 실습용 **가상 데이터**입니다. 주문일 표기가 여러 형식으로 섞여 있고(일부는 일자가 빠져
> 있습니다), 수량에 `두 개`나 `-1` 같은 값이 있으며, 상품 마스터에 없는 상품 코드(`X0001`~`X0005`)와
> 중복 코드·빈칸이 일부러 들어 있습니다.
> 예제 5.6이 오류 행을 분리하고 "확인 필요"로 표시하는 과정을 보여주기 위한 것이니,
> 실습 전에 미리 정리하지 마세요.

## 공식 문서

| 문서 | URL | 설명 |
| --- | --- | --- |
| MCP 서버란 무엇인가 | https://support.claude.com/en/articles/8364676-what-are-mcp-servers | MCP 서버의 개념과 클로드에서의 사용법을 설명합니다. |
| 원격 MCP 커넥터 시작하기 | https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp | MCP 서버와 클로드 커넥터 연결 방식을 단계별로 안내합니다. |
| Anthropic Courses | https://anthropic.skilljar.com/ | 앤트로픽 공식 강의 포털 — MCP·API·클로드 코드 등 |
| MCP 입문 강의 | https://anthropic.skilljar.com/introduction-to-model-context-protocol | Python으로 MCP 서버·클라이언트를 만드는 입문 강의 |
| MCP 고급 강의 | https://anthropic.skilljar.com/model-context-protocol-advanced-topics | 샘플링·알림·프로덕션 MCP 구현 패턴 |
| Claude Platform 101 | https://anthropic.skilljar.com/claude-platform-101 | Claude Developer Platform 입문 |
| Building with the Claude API | https://anthropic.skilljar.com/claude-with-the-anthropic-api | Claude API 전반 실습 |
| MCP 공식 사이트 | https://modelcontextprotocol.io | Model Context Protocol 전체 문서와 스펙을 제공합니다. |
| MCP 공식 레지스트리 | https://registry.modelcontextprotocol.io | 공식 MCP 서버 레지스트리입니다. |
| 클로드 API 문서 | https://docs.anthropic.com | 개발자용 API 레퍼런스와 통합 가이드입니다. |

## MCP 서버를 용도별로 — 공식 참조 서버

`modelcontextprotocol/servers` 저장소에서 제공하는 참조 서버를 용도별로 묶었습니다.

| 용도 | 서버 | URL | 설명 |
| --- | --- | --- | --- |
| 파일 작업 | Filesystem | https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem | 파일 읽기·쓰기 등 안전한 파일 작업 도구입니다. |
| 웹 가져오기 | Fetch | https://github.com/modelcontextprotocol/servers/tree/main/src/fetch | 웹 페이지 콘텐츠를 가져와 클로드에 전달합니다. |
| 메모리 | Memory | https://github.com/modelcontextprotocol/servers/tree/main/src/memory | 지식 그래프 기반의 지속적 메모리 시스템입니다. |
| 버전 관리 | Git | https://github.com/modelcontextprotocol/servers/tree/main/src/git | Git 저장소 읽기·검색·조작 도구입니다. |

> **참고**: AWS KB Retrieval, Brave Search, GitHub, 슬랙 등 일부 서버는 archived 항목으로 분리되어 있습니다.
> 해당 서비스 공식 채널의 MCP 서버로 대체 확인을 권장합니다.

## 더 찾아보기 — 디렉터리와 큐레이션

| 자료 | URL | 설명 |
| --- | --- | --- |
| github/github-mcp-server | https://github.com/github/github-mcp-server | GitHub 공식 MCP 서버입니다. |
| microsoft/mcp-for-beginners | https://github.com/microsoft/mcp-for-beginners | MCP 입문용 오픈소스 커리큘럼입니다(6개 언어 지원). |
| Glama MCP Registry | https://glama.ai/mcp/servers | 다양한 MCP 서버를 검색할 수 있는 디렉터리입니다. |
| Smithery | https://smithery.ai | MCP 서버를 검색하고 설치할 수 있는 플랫폼입니다. |
| block/goose | https://github.com/block/goose | MCP를 지원하는 오픈소스 AI 에이전트입니다. |
| lastmile-ai/mcp-agent | https://github.com/lastmile-ai/mcp-agent | MCP 기반 에이전트 워크플로우 프레임워크입니다. |
| microsoft/markitdown | https://github.com/microsoft/markitdown | PDF·Office 문서를 마크다운으로 변환(드라이브 문서 분석 맥락) |
| Defuddle | https://defuddle.md/ | **웹 페이지** 본문→마크다운(`curl defuddle.md/URL`, CLI). markitdown과 보완 관계 | 9장 |
| googleworkspace/cli | https://github.com/googleworkspace/cli | Google Workspace CLI |

## 업무 플러그인에 포함된 MCP 예시

5.3절 MCP는 플러그인 안의 `.mcp.json`으로도 연결됩니다. 업계별 공식 플러그인이 어떤 도구를 묶는지 참고하세요.

| 저장소 | MCP 예시 | 연결 장면 |
| --- | --- | --- |
| [knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Slack, HubSpot, Snowflake, Box, Figma | 마케팅·영업·재무·법무 일반 업무 |
| [financial-services](https://github.com/anthropics/financial-services) | FactSet, S&P Global, PitchBook, LSEG, Morningstar | 금융 데이터·리서치·모델링 |
| [claude-for-legal](https://github.com/anthropics/claude-for-legal) | Ironclad, DocuSign, iManage, CourtListener | 계약·실사·소송 리서치 |

> 구독·API 키가 필요한 MCP는 제공자 약관과 회사 보안 정책을 확인한 뒤 연결하세요.
