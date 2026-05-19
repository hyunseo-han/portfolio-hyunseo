export interface Problem {
  title: string;
  problem: string;
  solution: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  problems: Problem[];
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
    title: "Finders",
    subtitle: "필름 카메라 암실 예약 플랫폼",
    tags: ["React 19", "TypeScript", "TanStack Query", "Zustand"],
    description:
      "필름 카메라 사용자를 위한 암실 예약·결제 웹 플랫폼. UMC 9기 데모데이 최우수상 수상.",
    github: "https://github.com/Finders-Official/FE",
    problems: [
      {
        title: "Canvas DPR 렌더링 깨짐",
        problem: "고해상도 디스플레이에서 Canvas 요소가 흐릿하게 렌더링",
        solution: "window.devicePixelRatio 기반 Canvas 크기 동적 조정",
      },
      {
        title: "ResizeObserver 클로저 이슈",
        problem: "리사이즈 시 stale closure로 인한 상태 불일치",
        solution: "useRef + callback ref 패턴으로 최신 상태 참조 보장",
      },
      {
        title: "iOS Safari 다운로드 버그",
        problem: "Blob URL 기반 다운로드가 Safari에서 동작하지 않음",
        solution: "GCS Presigned URL 직접 링크 + Content-Disposition 헤더 설정",
      },
    ],
  },
  {
    id: "kiero",
    title: "Kiero",
    subtitle: "iOS 아동 습관 관리 게이미피케이션 앱",
    tags: ["Swift", "UIKit/SwiftUI", "MVVM", "Combine", "SSE"],
    description:
      "아이들의 일정·습관 관리를 게이미피케이션으로 풀어낸 iOS 앱. 실시간 알림과 캐릭터 성장 시스템.",
    github: "https://github.com/Team-Kiero/Kiero-iOS",
    problems: [
      {
        title: "SSE 싱글톤 라이프사이클",
        problem: "백그라운드/포그라운드 전환 시 SSE 연결 끊김 및 중복 생성",
        solution: "싱글톤 패턴 + ScenePhase 감지 기반 재연결 로직 구현",
      },
      {
        title: "토큰 리프레시 레이스 컨디션",
        problem: "동시 API 호출 시 만료된 토큰으로 다중 리프레시 요청 발생",
        solution: "직렬 큐 + 플래그 기반 단일 리프레시 보장",
      },
      {
        title: "WebP 프레임 키 대소문자 버그",
        problem: "서버 응답의 WebP 애니메이션 프레임 키가 불일치",
        solution: "키 정규화 레이어 추가 + Metal 렌더링 파이프라인 수정",
      },
    ],
  },
  {
    id: "umc-product",
    title: "UMC 프로덕트 팀",
    subtitle: "UMC 내부 도구 웹 플랫폼",
    tags: ["React", "TypeScript", "TanStack Query", "Zustand", "Tailwind CSS", "React Hook Form"],
    description:
      "UMC 내부 구성원들이 사용하는 데모데이 매칭 웹사이트 개발. 추후 리크루팅 페이지 등 내부 도구로 확장 예정.",
    github: "https://github.com/UMC-PRODUCT/umc-product-web-v2",
    problems: [
      {
        title: "계단식 서버 데이터 집계",
        problem: "기수 -> 프로젝트 -> 지원자를 순차 조회한 뒤 통계와 매칭 현황까지 파생해야 하는 복합 의존성",
        solution: "useMatchingStatusData 훅에서 enabled 옵션으로 쿼리를 체이닝하고, Promise.all 병렬 fetch 후 useMemo로 통계/매칭 블록을 파생",
      },
      {
        title: "매칭 현황 데이터 변환",
        problem: "서버의 flat한 지원자 목록을 역할별 블록 그리드(차수 태그, 빈칸, 차단)로 시각화해야 한다",
        solution: "matchingStatusMapper에서 APPROVED 필터링 후 phase별 블록 변환, quota 대비 빈칸/차단 블록을 자동 생성하는 변환 레이어 구현",
      },
      {
        title: "권한별 뷰 분기",
        problem: "Admin/PM/Others 역할에 따라 같은 매칭 현황 페이지에서 데이터 범위와 UI가 달라져야 한다",
        solution: "useViewModeStore의 mode를 기반으로 API 호출(전체 vs 내 프로젝트)과 UI 요소(지부 선택, 수동 배정 버튼)를 조건 분기",
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
  { num: "2", label: "서비스 런칭 경험", desc: "Finders & Kiero" },
  { num: "6+", label: "해결한 기술 이슈", desc: "Canvas, SSE, Auth 등" },
  { num: "1st", label: "UMC 데모데이 수상", desc: "Finders 최우수상" },
];

export const contactLinks = [
  { label: "GitHub", href: "https://github.com/hyunseo-han", icon: "🐈‍⬛" },
  { label: "Email", href: "mailto:ols3040015@gmail.com", icon: "💌" },
];

export const navLinks = ["About", "Projects", "Skills", "Contact"];

export const typingTexts = [
  "프론트엔드 개발자",
  "주니어중에 실행력이 가장 빠른",
  "한현서입니다",
];
