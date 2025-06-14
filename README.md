# Babit Frontend

Babit 프론트엔드 개발을 위한 레포지토리입니다.

## 기술스택

- `React` + `Vite` + `TypeScript`
- `Tailwind CSS`: 스타일링
- `Zustand`: 글로벌 상태 관리
- `Axios`: API 통신
- `Docker`: 실행 환경

## 실행 방법

- 최초 실행 시

```bash
docker-compose up --build
```

- 이후 실행 이후부터는

```bash
docker-compose up
```

## Vscode 추천 확장

- ESLint
- Prettier
- Tailwind CSS

## 프로젝트 구조

```bash
src/
├── assets/              # 정적 파일 (이미지 등)
├── components/          # 공통 재사용 컴포넌트
├── features/            # 도메인 단위 기능 폴더
│   ├── sample/
│   │   ├── components/         # 관련 컴포넌트
│   │   ├── sample.api.ts       # API 호출 함수
│   │   ├── sample.store.ts     # 관련 store
│   │   └── sample.types.ts     # 타입 정의
│   └── diet/
├── lib/                 # axios 인스턴스, 공통 로직 등
├── pages/               # 라우팅 단위 페이지
├── styles/
│   ├── global.css       # 전역 스타일
│   └── tailwind.css     # Tailwind 설정
├── App.tsx              # 라우팅 설정
└── main.tsx
```

## 코드 규칙

### 네이밍

- 컴포넌트 파일명: `UpperCamelCase.tsx`
- 그 외(함수, 폴더 등): `lowerCamelCase`

### 함수 정의

- 함수 표현식으로 통일

```tsx
// ✅ 함수 표현식
const Component = () => {};

// ❌ 함수 선언문
function Component() {}
```
