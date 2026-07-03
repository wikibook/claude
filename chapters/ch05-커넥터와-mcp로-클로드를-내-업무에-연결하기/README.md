# 5장 커넥터와 MCP로 클로드를 내 업무에 연결하기

> **책 5장** 독자를 위한 보충 자료입니다.
> 클로드 기능 변화에 맞춰 지속적으로 업데이트합니다.

5장은 내 업무 도구와 클로드를 연결하는 방법을 다룹니다. 연결 설정 자체는 서비스와 조직 정책에
따라 달라지므로, 이 폴더에는 **연결한 뒤 바로 써볼 수 있는 프롬프트**와, 안전하게 살펴볼 수 있는
공식 문서·참조 서버를 모았습니다.

> 실제 업무 계정이나 회사 데이터에 연결하기 전에는 최소 권한, 접근 로그, 회사 보안 정책을 먼저 확인하세요.

## 실습 자산 — 연결하고 바로 써보기

#### 🔌 커넥터 대표 질문
지메일·슬랙·노션을 연결하자마자 던져볼 대표 질문 모음입니다(5.2.2절). "무엇부터 연결하지?"
싶을 때, 서비스마다 대표 질문 하나로 쓸모를 바로 체감할 수 있습니다.
→ [프롬프트/커넥터-대표질문.md](프롬프트/커넥터-대표질문.md)

#### 📊 스프레드시트 자동화
함수 문법을 몰라도 "하고 싶은 결과"를 말로 설명하면 되는 예제들입니다(5.4절). VLOOKUP 수식,
`#N/A` 오류 해결, 전화번호 형식 통일, 매출 인사이트 도출까지 네 가지를 담았습니다.
→ [프롬프트/스프레드시트-자동화.md](프롬프트/스프레드시트-자동화.md)

#### 🔎 웹 검색으로 리서치
웹 검색을 켜고 시장 동향·뉴스를 정리하는 예제입니다(5.5절). 항목과 출처를 함께 지정하는 요령,
빠른 검색과 깊은 조사(연구 기능)의 차이까지 정리했습니다.
→ [프롬프트/웹검색-리서치.md](프롬프트/웹검색-리서치.md)

## 공식 문서

#### MCP 개념부터 이해하기
MCP 서버가 무엇이고 클로드에서 어떻게 쓰이는지 설명하는 공식 도움말입니다. 5.3절을 읽으며
"이 표준 덕분에 공식 목록에 없는 서비스도 연결될 수 있다"는 감을 잡을 때 함께 보세요.
→ [MCP 서버란 무엇인가](https://support.claude.com/en/articles/8364676-what-are-mcp-servers) ·
[원격 MCP 커넥터 시작하기](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)

#### MCP 초심자용 공식 강의
비개발자도 MCP 개념을 안전하게 익힐 수 있게 만든 앤트로픽 공식 강의입니다. 문서보다 강의로
따라가고 싶다면 여기서 시작하세요.
→ [Introduction to Model Context Protocol](https://anthropic.skilljar.com/introduction-to-model-context-protocol)

#### 더 깊이 보고 싶다면
- **[MCP 공식 사이트](https://modelcontextprotocol.io)** — Model Context Protocol 전체 문서와 스펙.
- **[MCP 공식 레지스트리](https://registry.modelcontextprotocol.io)** — 공식 MCP 서버 레지스트리.
- **[클로드 API 문서](https://docs.anthropic.com)** — 개발자용 API 레퍼런스와 통합 가이드.

## MCP 서버를 용도별로 — 공식 참조 서버

`modelcontextprotocol/servers` 저장소의 참조 서버를 용도별로 묶었습니다. 처음이라면
**Filesystem**부터 살펴보길 권합니다.

- **[Filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem)** — 파일 읽기·쓰기 등
  안전한 파일 작업 도구. "이 폴더 정리해줘" 같은 요청의 출발점입니다.
- **[Fetch](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch)** — 웹 페이지 콘텐츠를 가져와 클로드에 전달합니다.
- **[Memory](https://github.com/modelcontextprotocol/servers/tree/main/src/memory)** — 지식 그래프 기반의 지속적 메모리 시스템입니다.
- **[Git](https://github.com/modelcontextprotocol/servers/tree/main/src/git)** — Git 저장소 읽기·검색·조작 도구입니다.

> **참고:** AWS KB Retrieval, Brave Search, GitHub, 슬랙 등 일부 서버는 archived 항목으로 분리되어 있습니다.
> 해당 서비스 공식 채널의 MCP 서버로 대체 확인을 권장합니다. 공식 커넥터와 달리 커뮤니티 MCP 서버는
> 설치 방식과 권한 범위를 사용 전에 직접 확인해야 합니다.

## 더 찾아보기 — 디렉터리와 커뮤니티

공식 참조 서버만으로 부족하다면 아래에서 더 많은 서버를 찾을 수 있습니다.

- **[github/github-mcp-server](https://github.com/github/github-mcp-server)** — GitHub 공식 MCP 서버.
- **[microsoft/mcp-for-beginners](https://github.com/microsoft/mcp-for-beginners)** — MCP 입문용 오픈소스 커리큘럼(6개 언어).
- **[punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)** — 대규모 MCP 서버 큐레이션 목록.
- **[Glama MCP Registry](https://glama.ai/mcp/servers)** · **[Smithery](https://smithery.ai)** — MCP 서버를 검색·설치할 수 있는 디렉터리·플랫폼.
- **[block/goose](https://github.com/block/goose)** · **[lastmile-ai/mcp-agent](https://github.com/lastmile-ai/mcp-agent)** — MCP를 지원하는 오픈소스 에이전트·워크플로우 프레임워크.

## 더 읽어보기

스프레드시트·문서 업무를 클로드로 넓히고 싶다면 아래 자료가 도움이 됩니다.

- **[Claude in Excel (사용법)](https://support.claude.com/en/articles/12650343-claude-in-excel)** —
  엑셀에서 클로드를 직접 쓰는 방법. 5.4절 스프레드시트 자동화를 실제 엑셀 화면에서 이어가고 싶을 때.
- **[엑셀·파워포인트 업데이트 소개](https://claude.com/blog/claude-excel-powerpoint-updates)** —
  스프레드시트·문서 업무 자동화가 어디까지 왔는지 보여주는 공식 글.
- **[Claude for Word](https://claude.com/claude-for-word)** — 워드에서 문서 작성을 돕는 연동 기능 소개.
- **[Claude cookbook](https://platform.claude.com/cookbook)** — 클로드를 업무 도구로 확장하는 예시 모음(다소 개발자 지향).
- **[Advanced tool use](https://www.anthropic.com/engineering/advanced-tool-use)** — 도구 사용 개념을 더 깊이 이해하고 싶을 때.
