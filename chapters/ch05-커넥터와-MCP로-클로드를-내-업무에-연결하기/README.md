# 5장 커넥터와 MCP로 클로드를 내 업무에 연결하기

> **책 5장** 독자를 위한 보충 자료입니다.
> 클로드 기능 변화에 맞춰 지속적으로 업데이트합니다.

## 이 장에서 받을 수 있는 것

5장은 내 업무 도구와 클로드를 연결하는 방법을 다룹니다. 연결 설정은 서비스와 조직 정책에 따라
달라지므로, 저장소에는 연결한 뒤 바로 써 볼 수 있는 프롬프트와 안전하게 살펴볼 수 있는
공식 문서·참조 서버를 모았습니다.

| 자료 | 내용 | 책 연결 |
| --- | --- | --- |
| [`프롬프트/커넥터-대표질문.md`](프롬프트/커넥터-대표질문.md) | 드라이브 다문서·검색, 지메일·슬랙·노션 대표 질문 | 5.2.1~5.2.2절 예제 5.1~5.2 |
| [`프롬프트/스프레드시트-자동화.md`](프롬프트/스프레드시트-자동화.md) | 수식 요청, 오류 해결, 데이터 정리, 인사이트 도출 | 5.4절 |
| [`프롬프트/웹검색-리서치.md`](프롬프트/웹검색-리서치.md) | 시장 동향·뉴스·경쟁사 리서치 요청문 | 5.5절 |
| MCP 공식 문서 | 프로토콜 개념, 서버·클라이언트 구조 | 5.3절 |
| 공식 참조 서버 목록 | 파일, 웹 가져오기, 메모리, Git 예시 | 5.3절 |
| MCP 디렉터리와 큐레이션 | 더 많은 서버를 찾을 때 참고할 목록 | 5장 전체 |

> 실제 업무 계정이나 회사 데이터에 연결하기 전에는 최소 권한, 접근 로그, 회사 보안 정책을 먼저 확인하세요.

## 공식 문서

| 문서 | URL | 설명 |
| --- | --- | --- |
| MCP 서버란 무엇인가 | https://support.claude.com/en/articles/8364676-what-are-mcp-servers | MCP 서버의 개념과 클로드에서의 사용법을 설명합니다. |
| 원격 MCP 커넥터 시작하기 | https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp | MCP 서버와 클로드 커넥터 연결 방식을 단계별로 안내합니다. |
| MCP 입문 강의 | https://anthropic.skilljar.com/introduction-to-model-context-protocol | MCP 개념을 강의 형식으로 따라가며 익힐 수 있습니다. |
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
| punkpeye/awesome-mcp-servers | https://github.com/punkpeye/awesome-mcp-servers | 대규모 MCP 서버 큐레이션 목록입니다. |
| Glama MCP Registry | https://glama.ai/mcp/servers | 다양한 MCP 서버를 검색할 수 있는 디렉터리입니다. |
| Smithery | https://smithery.ai | MCP 서버를 검색하고 설치할 수 있는 플랫폼입니다. |
| block/goose | https://github.com/block/goose | MCP를 지원하는 오픈소스 AI 에이전트입니다. |
| lastmile-ai/mcp-agent | https://github.com/lastmile-ai/mcp-agent | MCP 기반 에이전트 워크플로우 프레임워크입니다. |
| microsoft/markitdown | https://github.com/microsoft/markitdown | PDF·Office 문서를 마크다운으로 변환(드라이브 문서 분석 맥락) |
| googleworkspace/cli | https://github.com/googleworkspace/cli | Google Workspace CLI |

## 업무 플러그인에 포함된 MCP 예시

5.3절 MCP는 플러그인 안의 `.mcp.json`으로도 연결됩니다. 업계별 공식 플러그인이 어떤 도구를 묶는지 참고하세요.

| 저장소 | MCP 예시 | 연결 장면 |
| --- | --- | --- |
| [knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Slack, HubSpot, Snowflake, Box, Figma | 마케팅·영업·재무·법무 일반 업무 |
| [financial-services](https://github.com/anthropics/financial-services) | FactSet, S&P Global, PitchBook, LSEG, Morningstar | 금융 데이터·리서치·모델링 |
| [claude-for-legal](https://github.com/anthropics/claude-for-legal) | Ironclad, DocuSign, iManage, CourtListener | 계약·실사·소송 리서치 |

> 구독·API 키가 필요한 MCP는 제공자 약관과 회사 보안 정책을 확인한 뒤 연결하세요.
