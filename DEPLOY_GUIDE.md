# GitHub 저장소 생성 및 배포 가이드

## ✅ 1단계: GitHub 저장소 생성

1. 브라우저에서 https://github.com/new 를 여세요
2. 다음과 같이 입력하세요:
   - **Repository name**: `nam-gi-woong-portfolio` (또는 원하는 이름)
   - **Description**: `R&D Researcher Portfolio - Interactive Website`
   - **Public** 선택
   - ⚠️ "Add a README file" 체크 **하지 마세요** (이미 파일이 있음)
   - ⚠️ ".gitignore" 추가 **하지 마세요** (이미 있음)
3. **Create repository** 클릭

## ✅ 2단계: 저장소 이름 확인

저장소 이름을 정했으면 (예: `nam-gi-woong-portfolio`)
아래의 `vite.config.ts` 파일에서 base 경로를 수정해야 합니다.

**현재 설정:**
```typescript
base: process.env.NODE_ENV === 'production' ? '/nam-gi-woong-portfolio/' : '/'
```

**만약 다른 이름을 사용했다면:**
- 저장소 이름이 `portfolio`라면 → `/portfolio/`
- 저장소 이름이 `myportfolio`라면 → `/myportfolio/`

## ✅ 3단계: Git 명령어 실행

**아래 명령어를 PowerShell에서 복사해서 실행하세요:**

```powershell
# 프로젝트 폴더로 이동
cd "c:\Users\user_k\Desktop\nam-gi-woong-r&d-portfolio (1)"

# Git 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: R&D Portfolio Website"

# 메인 브랜치 설정
git branch -M main

# GitHub 저장소 연결 (아래 URL을 실제 저장소 URL로 변경하세요)
git remote add origin https://github.com/사용자명/nam-gi-woong-portfolio.git

# 푸시
git push -u origin main
```

**⚠️ 중요:**
- `사용자명` 부분을 실제 GitHub 사용자명으로 변경하세요
- 저장소 이름도 위에서 만든 것과 동일하게 변경하세요

## ✅ 4단계: GitHub Pages 활성화

1. GitHub 저장소 페이지로 이동
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source**를 **GitHub Actions**로 선택
5. 자동으로 배포가 시작됩니다 (1-2분 소요)

## ✅ 5단계: 배포 확인

배포가 완료되면 다음 URL에서 확인할 수 있습니다:

**`https://사용자명.github.io/nam-gi-woong-portfolio/`**

---

## 🎯 빠른 명령어 (복사해서 사용)

**저장소 이름이 `nam-gi-woong-portfolio`이고 사용자명이 `example`이라고 가정:**

```powershell
cd "c:\Users\user_k\Desktop\nam-gi-woong-r&d-portfolio (1)"
git init
git add .
git commit -m "Initial commit: R&D Portfolio"
git branch -M main
git remote add origin https://github.com/example/nam-gi-woong-portfolio.git
git push -u origin main
```

**⚠️ `example`과 저장소 이름을 실제 값으로 변경하세요!**

---

## 🔧 문제 해결

### Git이 설치되지 않은 경우
https://git-scm.com/download/win 에서 다운로드

### GitHub 로그인 필요
PowerShell에서 푸시 시 GitHub 사용자명과 비밀번호(또는 Personal Access Token)를 입력하라고 나옵니다.

### 저장소 이름 변경
`vite.config.ts` 파일의 8번째 줄을 수정한 후 다시 빌드:
```bash
.\node_modules\.bin\vite build
git add .
git commit -m "Update base path"
git push
```

---

**준비되셨으면 위 단계를 따라해주세요!**
배포가 완료되면 웹사이트 링크를 알려드릴게요! 🚀
