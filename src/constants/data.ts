export interface Problem {
  title: string;
  problem: string;
  solution: string;
}

export interface CaseStudy {
  title: string;
  purpose?: string;
  execution: string[];
  results: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  problems: Problem[];
  period?: string;
  role?: string;
  caseStudies?: CaseStudy[];
  github?: string;
  demo?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export const projects: Project[] = [
  {
    id: "finders",
    title: "필름카메라 유저를 위한 Finders",
    subtitle: "현상소 탐색과 AI 사진 복원 하이브리드 앱",
    tags: [
      "React 19",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS v4",
      "Capacitor 8",
    ],
    description:
      "필름 카메라 사용자가 현상소를 탐색하고, AI로 사진을 복원하는 Capacitor 하이브리드 앱입니다. 동일 코드베이스를 iOS와 Android에 배포했습니다.",
    period: "2025.12 - 진행 중 / 웹 프론트엔드 4인",
    role: "메인 페이지 / AI 사진 복원 / Capacitor iOS 패키징",
    github: "https://github.com/Finders-Official/FE",
    problems: [],
    caseStudies: [
      {
        title: "AI 사진 복원 기능",
        purpose:
          "사용자가 사진에서 지정한 영역만 AI로 복원하는 기능입니다. 손가락으로 그린 마스크가 실제 복원 영역과 정확히 일치하고, 진행 상황을 알 수 있도록 UI부터 비동기 플로우까지 담당했습니다.",
        execution: [
          "고해상도(DPR > 1) 기기에서 마스크가 어긋나는 문제를 devicePixelRatio 기준 스케일링으로 해결했습니다. 원본 이미지 해상도 기준 마스크 생성 과정에서는 object-contain 레터박스 여백을 변환 행렬 오프셋에 반영했습니다.",
          "presigned 업로드 유틸을 복원 플로우에 통합하고, 복원 요청 - 폴링으로 진행률 갱신 - 완료 시 크레딧 잔액 캐시 무효화까지 구현했습니다. 화면 이탈 시 폴링과 blob URL을 정리했습니다.",
        ],
        results: [
          "기기 해상도 및 이미지 종횡비와 무관하게 마스크와 복원 영역이 일치합니다.",
          "iOS TestFlight 배포 버전에서 복원 기능이 정상 동작합니다.",
        ],
      },
      {
        title: "하이브리드 웹뷰 환경 대응",
        purpose:
          "하나의 코드베이스를 iOS, Android, 웹 세 플랫폼에 배포하면서 OS마다 다른 웹뷰 특유의 문제를 일관되게 해결했습니다.",
        execution: [
          "탭바 높이 CSS 변수에 OS 하단 safe-area-inset을 반영해 Android 내비게이션 바와 탭바 겹침을 실기기 검증으로 해결했습니다. FAB와 토스트도 같은 변수를 참조합니다.",
          "Android OS 내비게이션 바, iOS 홈 인디케이터, Android 15 엣지-투-엣지에 대응했습니다.",
          "웹뷰에서 앱처럼 느껴지도록 바운스 스크롤, 탭 하이라이트, 주소창 점프를 차단했습니다.",
        ],
        results: [
          "iOS TestFlight, Google Play 내부 테스트, 웹 3종 동시 배포를 유지합니다.",
          "레이아웃 상수를 CSS 변수 한 곳에 모아 이후 플랫폼 대응 수정이 단일 지점에서 끝납니다.",
        ],
      },
    ],
  },
  {
    id: "umc-product",
    title: "UMC Product",
    subtitle: "UMC 내부 구성원을 위한 웹 플랫폼",
    tags: [
      "React 19",
      "TypeScript",
      "TanStack Router/Query",
      "Zustand",
      "Tailwind CSS v4",
      "Vitest",
    ],
    description:
      "지원 현황, 매칭 현황, 매칭 기간 설정과 소개 랜딩페이지를 개발하고 코드베이스 FSD 재구조화를 주도했습니다.",
    period: "2026.03 - 2026.08 / 웹 프론트엔드 4인",
    role: "지원 현황 / 매칭 현황 / 매칭 기간 설정 페이지, 소개 랜딩페이지, 코드베이스 FSD 재구조화 주도",
    github: "https://github.com/UMC-PRODUCT/umc-product-web-v2",
    problems: [],
    caseStudies: [
      {
        title: "FSD 레이어 재구조화와 래칫 CI 게이트",
        purpose:
          "공용 인프라 코드인 axios가 특정 기능의 스토어를 역참조하고 있었습니다. 여러 인원이 같은 도메인을 병렬 개발하는 상황에서 의존 방향이 무너지면 수정 범위를 예측할 수 없어, 구조 개선을 제안했습니다.",
        execution: [
          "eslint-plugin-boundaries를 warn으로 도입해 레이어 경계 위반 155건을 실측하고 재구조화 필요성을 공유했습니다.",
          "도메인별 entities 추출, 인증 로직 의존성 역전, widgets와 app 레이어 신설 순서로 단계를 나눠 진행했습니다.",
          "래칫 스크립트를 직접 만들어 CI에 추가했습니다. 역방향 의존은 1건만 생겨도 실패시키고, 수평 결합은 baseline으로 관리하며 줄어들면 baseline 갱신을 강제했습니다.",
        ],
        results: [
          "레이어 역방향(upward) 의존 0건을 무관용 차단으로 유지합니다.",
          "수평 결합(lateral) baseline을 12건까지 감축했고, 모든 PR에서 구조 악화를 CI가 자동 차단합니다.",
        ],
      },
      {
        title: "소개 랜딩페이지 성능 개선",
        purpose:
          "11기 모집을 앞둔 소개 랜딩페이지입니다. 첫 방문과 모바일 유입 비중이 높아 초기 로딩 속도를 개선했습니다.",
        execution: [
          "전송량을 항목별로 분석했습니다. SUIT는 서브셋으로 624KB에서 17KB로, Pretendard는 실제 사용하는 글자만 남겨 14건 366KB에서 2건 96KB로 줄였습니다.",
          "학교 로고 21개가 스크롤 전에 한꺼번에 요청되던 것을 lazy로 전환해 초기 요청을 1건으로 줄였습니다.",
          "WebP 교체 후 Lighthouse가 80에서 73으로 하락한 원인을 Vite assetsInlineLimit 기본값 4KB로 파악했습니다. 작은 파일의 base64 인라인으로 커진 초기 번들을 해당 경로 조건부 임계값으로 되돌렸습니다.",
        ],
        results: [
          "초기 전송량을 1,440KB에서 423KB로 71% 줄였습니다. SSG 빌드 프리뷰에서 Lighthouse 모바일 프리셋을 3회 측정했습니다.",
          "Lighthouse 모바일 스코어를 57에서 80으로 개선했습니다.",
        ],
      },
    ],
  },
  {
    id: "vitacheck",
    title: "VitaCheck",
    subtitle: "영양제 성분 정보와 조합 관리 웹 서비스",
    tags: [
      "React",
      "TypeScript",
      "Firebase Cloud Messaging",
      "GitHub Actions",
      "S3 + CloudFront",
    ],
    description: "영양제 성분 정보를 확인하고 조합을 관리하는 웹 서비스입니다.",
    period: "2025.05 - 2026.01 / 웹 프론트엔드 5인",
    role: "인증(자체 로그인, 소셜 로그인, 약관 동의), 웹푸시 알림, PWA, 배포 파이프라인",
    problems: [],
    caseStudies: [
      {
        title: "iOS 웹푸시",
        purpose:
          "조합 결과를 푸시로 알려야 했지만 iOS Safari는 브라우저 탭에서 웹푸시를 지원하지 않습니다. 홈 화면에 추가된 PWA에서만 권한 요청이 가능해 플랫폼별 진입 경로를 분기했습니다.",
        execution: [
          "FCM 토큰 발급, 서비스워커 등록, 토큰 저장을 구현하고 알림 페이지에서 수신 목록을 관리했습니다.",
          "iOS는 standalone 모드 여부를 감지해 홈 화면 추가를 먼저 안내한 뒤 권한을 요청했습니다.",
          "PWA 매니페스트를 구성해 홈 화면 추가와 독립 실행 환경을 만들었습니다.",
        ],
        results: [
          "iOS, Android, 데스크톱 3종에서 푸시를 수신합니다.",
          "FCM, 서비스워커, PWA 설정을 단독으로 담당했습니다.",
        ],
      },
      {
        title: "소셜 로그인과 토큰 재발급",
        purpose:
          "자체 로그인과 소셜 로그인이 같은 회원가입 흐름으로 합류해야 했습니다. 소셜 로그인은 추가 입력과 약관 동의를 거치는 별도 단계를 구성했습니다.",
        execution: [
          "OAuth 콜백 처리와 토큰 저장을 구현하고, axios 응답 인터셉터로 만료된 토큰을 자동 재발급했습니다.",
          "소셜 로그인 후 부족한 정보를 채우는 추가 가입 폼과 약관 동의 단계를 구성했습니다.",
          "GitHub Actions로 S3와 CloudFront 배포 워크플로를 구축하고 빌드 시점 환경변수를 시크릿으로 주입했습니다.",
        ],
        results: [
          "자체 경로와 소셜 경로가 하나의 가입 완료 지점으로 수렴합니다.",
          "인증 관련 파일과 배포 워크플로를 단독으로 담당했습니다.",
        ],
      },
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "React 19",
      "TypeScript",
      "Next.js",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
    ],
  },
  {
    category: "Mobile",
    items: ["Swift", "UIKit", "SwiftUI", "Combine", "MVVM"],
  },
  {
    category: "Infra & Auth",
    items: ["JWT", "OAuth", "SSE", "S3/GCS", "Axios"],
  },
  {
    category: "Foundation",
    items: ["C", "Data Structures", "Algorithms", "Git"],
  },
];

export const stats = [
  {
    num: "3+",
    label: "팀 프로젝트",
    desc: "Finders, UMC Product, VitaCheck 등",
  },
  {
    num: "6+",
    label: "기술적 문제 해결",
    desc: "FSD, 성능 최적화, Capacitor\nOAuth, 웹 푸시 등",
  },
  {
    num: "700+",
    label: "서비스 사용자",
    desc: "",
  },
];

export const contactLinks = [
  { label: "GitHub", href: "https://github.com/hyunseo-han", icon: "🐈‍⬛" },
  { label: "Blog", href: "https://velog.io/@hhs1210/posts", icon: "📝" },
  { label: "Email", href: "mailto:ols3040015@gmail.com", icon: "💌" },
];

export const navLinks = ["About", "Projects", "Skills", "Contact"];

export const typingTexts = [
  "프론트엔드 개발자",
  "주니어중에 실행력이 가장 빠른",
  "한현서입니다",
];
