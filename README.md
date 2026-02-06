# NAM GI WOONG | R&D Portfolio

> **R&D 연구자 포트폴리오** - React + TypeScript + Vite로 구축된 인터랙티브 웹사이트

## 🚀 Quick Start

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 📦 GitHub Pages 배포

### 1. GitHub 저장소 생성

1. GitHub에서 새 저장소 생성 (예: `nam-gi-woong-portfolio`)
2. 저장소를 public으로 설정

### 2. 저장소 이름 설정

`vite.config.ts` 파일에서 base 경로를 저장소 이름에 맞게 수정:

```typescript
base: process.env.NODE_ENV === 'production' ? '/저장소이름/' : '/',
```

### 3. Git 초기화 및 푸시

```bash
git init
git add .
git commit -m "Initial commit: R&D Portfolio"
git branch -M main
git remote add origin https://github.com/사용자명/저장소이름.git
git push -u origin main
```

### 4. GitHub Pages 활성화

#### 방법 1: GitHub Actions 사용 (권장)

1. GitHub 저장소 → Settings → Pages
2. Source를 **GitHub Actions**로 선택
3. main 브랜치에 코드를 푸시하면 자동으로 배포됩니다

#### 방법 2: gh-pages 사용

```bash
npm run deploy
```

그 다음 GitHub 저장소 → Settings → Pages에서 Source를 **gh-pages** 브랜치로 설정

### 5. 웹사이트 확인

배포 완료 후 `https://사용자명.github.io/저장소이름/`에서 웹사이트를 확인할 수 있습니다.

## 📁 프로젝트 구조

```
nam-gi-woong-r&d-portfolio/
├── public/
│   └── images/          # 이미지 파일 (README.md 참고)
├── css/
│   └── style.css        # 기존 스타일
├── index.html           # HTML 진입점
├── index.css            # 메인 스타일시트
├── index.tsx            # React 애플리케이션
├── vite.config.ts       # Vite 설정
├── package.json         # 의존성 및 스크립트
└── .github/
    └── workflows/
        └── deploy.yml   # GitHub Actions 배포 워크플로우
```

## 🎨 주요 기능

- ✨ **현대적인 UI/UX** - Glassmorphism, 그라데이션, 애니메이션
- 📱 **완전한 반응형** - 모바일, 태블릿, 데스크톱 지원
- 🎭 **스크롤 애니메이션** - Intersection Observer 기반
- 🔥 **인터랙티브 카드** - Hover 효과 및 트랜지션
- 🎯 **섹션 네비게이션** - 부드러운 스크롤
- 📊 **연구 데이터 시각화** - 전문성을 강조하는 레이아웃
- 🧪 **Problem Solving 타임라인** - 문제 해결 과정 시각화
- 💼 **R&D 가치 제안** - 비즈니스 적용 영역 강조

## 🖼️ 이미지 추가

`public/images/` 폴더에 다음 이미지를 추가하세요:

- `profile.jpg` - 프로필 사진 (800x1000px)
- `research_graph.jpg` - 연구 그래프 (1200x675px)
- `research_1.jpg` - 연구 이미지 1 (1200x675px)
- `research_2.jpg` - 연구 이미지 2 (1200x675px)

이미지가 없으면 Unsplash의 대체 이미지가 자동으로 표시됩니다.

## 🛠️ 기술 스택

- **프레임워크**: React 19.2.4
- **언어**: TypeScript 5.8.2
- **빌드 툴**: Vite 6.2.0
- **스타일링**: Tailwind CSS (CDN) + Custom CSS
- **아이콘**: Lucide React
- **배포**: GitHub Pages / GitHub Actions

## 📝 커스터마이징

### 개인 정보 수정

`index.tsx` 파일에서 다음 항목들을 수정하세요:

- 이메일 주소: `ngw0509@naver.com`
- 이름: `NAM GI WOONG`
- 연구 내용 및 섹션 텍스트

### 색상 테마 변경

`index.css` 또는 Tailwind 클래스를 수정하여 색상을 변경할 수 있습니다.

## 📄 라이선스

© 2024 NAM GI WOONG / All Rights Reserved

## 🤝 문의

- Email: ngw0509@naver.com
