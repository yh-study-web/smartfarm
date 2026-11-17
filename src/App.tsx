import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router"

export const A = `${import.meta.env.BASE_URL}assets`

const menuItems = [
  {
    title: "스마트팜 소개",
    items: [
      "스마트팜이란?",
      "기술·온실 유형",
      "주요 도입 효과",
      "법률·지원정책",
    ],
  },
  {
    title: "스마트팜 탐색",
    items: ["지역 농장 찾기", "작물별 검색", "맞춤 추천 필터", "VR 투어"],
  },
  {
    title: "콘텐츠",
    items: ["농가 인터뷰", "성공 자료", "뉴스, 영상", "스마트팜 칼럼"],
  },
  {
    title: "현장 사례",
    items: ["작물별 사례", "규모별 사례", "적용 사례", "운영 노하우"],
  },
  {
    title: "지원사업",
    items: ["사업 공고", "교육, 훈련", "신청 절차", "대상, 자격", "일정, 마감"],
  },
  { title: "커뮤니티", items: ["FAQ", "1:1 컨설팅", "용어 사전", "공지사항"] },
]

const heroImages = ["8be11.png", "4579f.png", "1c2e8.png"]
const mobileHeroImages = ["8be11.png", "4579f.png", "1c2e8.png"]

const cases = [
  {
    image: "0a5b3.png",
    category: "작물별",
    tag: "토마토 · 환경 제어",
    title: "온실 환경을 한눈에",
    body: "온도·습도로 작물에 맞는 재배 환경을 관리합니다.",
    meta: "연동 온실 · 토마토 · 환경 제어",
  },
  {
    image: "0256b.png",
    category: "작물별",
    tag: "딸기 · 양액 재배",
    title: "작물에 맞춘 물과 양분",
    body: "고설 재배의 양액 공급과 생육 상태를 확인합니다.",
    meta: "고설 재배 · 양액 관리",
  },
  {
    image: "8acb1.png",
    category: "작물별",
    tag: "엽채류 · 수경 재배",
    title: "데이터로 살피는 생육",
    body: "재배 기록으로 엽채류의 생육 변화를 살펴봅니다.",
    meta: "수경 재배 · 생육 관찰",
  },
  {
    image: "bd1b9.png",
    category: "작물별",
    tag: "파프리카 · 생육관리",
    title: "빛과 온도로 키운 품질",
    body: "일사량과 온도를 확인하며 열매의 고른 생육을 돕습니다.",
    meta: "시설원예 · 일사량 관리",
  },
  {
    image: "0a5b3.png",
    category: "규모별",
    tag: "소규모 · 토마토",
    title: "작은 온실의 똑똑한 시작",
    body: "간단한 센서와 자동 환기로 소규모 온실을 관리합니다.",
    meta: "소규모 온실 · 토마토 · 환경 센서",
  },
  {
    image: "0256b.png",
    category: "규모별",
    tag: "중규모 · 딸기",
    title: "작업 동선을 줄인 딸기 농장",
    body: "재배 구역과 양액 공급을 효율적으로 관리합니다.",
    meta: "중규모 농장 · 딸기 · 양액 재배",
  },
  {
    image: "8acb1.png",
    category: "규모별",
    tag: "대규모 · 엽채류",
    title: "넓은 재배 공간을 통합 관리",
    body: "구역별 생육 환경을 확인하고 작업을 계획합니다.",
    meta: "대규모 온실 · 엽채류 · 통합 운영",
  },
  {
    image: "bd1b9.png",
    category: "규모별",
    tag: "복합형 · 파프리카",
    title: "여러 동을 연결한 재배 운영",
    body: "온실 동별 환경 데이터를 한곳에서 비교합니다.",
    meta: "연동 온실 · 파프리카 · 데이터 관리",
  },
  {
    image: "0a5b3.png",
    category: "기술별",
    tag: "환경 제어 · 센서",
    title: "센서 데이터로 쾌적한 온실",
    body: "온도와 습도 변화에 맞춰 환기 환경을 조절합니다.",
    meta: "환경 센서 · 자동 환기 · 온실",
  },
  {
    image: "0256b.png",
    category: "기술별",
    tag: "양액 제어 · 자동화",
    title: "필요한 만큼 공급하는 양액",
    body: "재배 상태에 맞춰 물과 양분 공급을 관리합니다.",
    meta: "양액 자동화 · 관수 관리 · 딸기",
  },
  {
    image: "8acb1.png",
    category: "기술별",
    tag: "생육 분석 · 데이터",
    title: "재배 기록으로 읽는 생육 변화",
    body: "생육 데이터를 살펴보고 다음 작업 시점을 계획합니다.",
    meta: "생육 분석 · 재배 데이터 · 엽채류",
  },
  {
    image: "bd1b9.png",
    category: "기술별",
    tag: "원격 관리 · 스마트폰",
    title: "언제 어디서나 확인하는 농장",
    body: "모바일 화면에서 온실 상태와 주요 알림을 확인합니다.",
    meta: "원격 모니터링 · 모바일 · 파프리카",
  },
]

const schedules = [
  {
    title: "스마트팜 첫걸음 기초 교육",
    target: "예비 귀농인",
    deadline: "2026-11-25",
    eventDate: "2026-11-20",
    eventTime: "14:00–16:00",
  },
  {
    title: "온실 환경 제어 실습",
    target: "시설 재배 농업인",
    deadline: "2026-11-28",
    eventDate: "2026-11-22",
    eventTime: "13:00–17:00",
  },
  {
    title: "양액 관리와 생육 데이터 읽기",
    target: "스마트팜 입문자",
    deadline: "2026-10-19",
    eventDate: "2026-10-22",
    eventTime: "14:00–16:00",
  },
  {
    title: "스마트팜 도입 준비 워크숍",
    target: "도입 검토 농업인",
    deadline: "2026-10-26",
    eventDate: "2026-10-29",
    eventTime: "10:00–12:00",
  },
]

const events = [
  {
    title: "스마트팜 기술·장비 박람회",
    target: "농업인 및 스마트팜 관계자",
    eventDate: "2026-11-11",
    eventTime: "10:00–17:00",
    venue: "세종컨벤션센터",
  },
  {
    title: "청년농 스마트팜 네트워킹 데이",
    target: "청년 농업인 및 예비 창업자",
    eventDate: "2026-11-14",
    eventTime: "13:00–16:00",
    venue: "스마트팜 혁신밸리 지원센터",
  },
  {
    title: "스마트팜 혁신밸리 현장 견학",
    target: "스마트팜 도입 관심자",
    eventDate: "2026-11-28",
    eventTime: "10:00–12:00",
    venue: "전북 김제 스마트팜 혁신밸리",
  },
  {
    title: "미래농업 데이터 활용 오픈 포럼",
    target: "농업인, 연구자 및 산업 관계자",
    eventDate: "2026-12-03",
    eventTime: "14:00–17:00",
    venue: "온라인 및 대전 컨벤션센터",
  },
]

function dateKey(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

function dateFromKey(key: string) {
  const [year, month, day] = key.split("-").map(Number)
  return new Date(year, month - 1, day)
}

function daysBetween(start: Date, end: Date) {
  const startUtc = Date.UTC(
    start.getFullYear(),
    start.getMonth(),
    start.getDate(),
  )
  const endUtc = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate())
  return Math.round((endUtc - startUtc) / 86_400_000)
}

function formatKoreanDate(date: Date) {
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"]
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}(${weekdays[date.getDay()]})`
}

const faqs = [
  [
    "스마트팜 도입은 어디서부터 시작하나요?",
    "스마트팜의 기본 개념과 도입 목적을 확인한 뒤, 재배 작물과 시설 규모에 맞는 사례를 살펴보세요. 입문 가이드에서 단계별 준비 항목을 확인할 수 있습니다.",
  ],
  [
    "내 작물과 시설 규모에 맞는 사례는 어떻게 찾나요?",
    "현장 사례의 작물별·규모별 필터를 이용하면 조건에 맞는 사례를 빠르게 비교할 수 있습니다.",
  ],
  [
    "지원사업과 교육 신청 정보는 어디에서 확인하나요?",
    "지원사업 메뉴의 사업 공고와 교육·훈련에서 신청 대상, 일정, 마감 정보를 확인할 수 있습니다.",
  ],
]

function routeForMenu(title: string) {
  if (title === "스마트팜 소개") return "/housetype"
  if (title === "현장 사례") return "/cropcase"
  if (title === "지원사업") return "/#schedule"
  if (title === "커뮤니티") return "/#guide"
  return "/#themes"
}

function routeForSubItem(item: string) {
  if (item === "기술·온실 유형") return "/housetype"
  if (item === "작물별 사례") return "/cropcase"
  if (item === "FAQ") return "/#faq"
  return "/#themes"
}

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      className={`logo ${footer ? "footer-logo" : ""}`}
      to="/"
      aria-label="스마트팜 메인으로 이동"
    >
      <img src={`${A}/${footer ? "9cb37.svg" : "ef69f.svg"}`} alt="" />
      <span>
        <strong>스마트팜</strong>
        {!footer && <small>SMART FARM</small>}
      </span>
    </Link>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [gnbOpen, setGnbOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(1)
  const { pathname } = useLocation()
  const [searchQuery, setSearchQuery] = useState("")
  const [searchStatus, setSearchStatus] = useState("")

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const query = searchQuery.trim().toLocaleLowerCase()
    if (!query) {
      setSearchStatus("검색어를 입력해 주세요.")
      return
    }

    const match = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main h1, main h2, main h3, main p, main a, main button",
      ),
    ).find((element) =>
      element.textContent?.toLocaleLowerCase().includes(query),
    )

    if (match) {
      setSearchStatus(`'${searchQuery.trim()}' 검색 결과로 이동했습니다.`)
      match.scrollIntoView({ behavior: "smooth", block: "center" })
    } else {
      setSearchStatus(`'${searchQuery.trim()}' 검색 결과가 없습니다.`)
    }
  }

  return (
    <>
      <header className="site-header" onMouseLeave={() => setGnbOpen(false)}>
        <div className="header-inner">
          <Logo />
          <nav
            className="gnb"
            aria-label="주 메뉴"
            onMouseEnter={() => setGnbOpen(true)}
            onFocus={() => setGnbOpen(true)}
          >
            {menuItems.map((menu) => (
              <Link
                key={menu.title}
                to={routeForMenu(menu.title)}
                className={
                  (pathname === "/housetype" &&
                    menu.title === "스마트팜 소개") ||
                  (pathname === "/cropcase" && menu.title === "현장 사례")
                    ? "current"
                    : ""
                }
              >
                {menu.title}
              </Link>
            ))}
          </nav>
          <div className="header-tools desktop-tools">
            <form className="search-pill" role="search" onSubmit={handleSearch}>
              <input
                type="search"
                aria-label="검색어 입력"
                placeholder="검색어 입력"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
              <button type="submit" aria-label="검색">
                <img src={`${A}/20d30.svg`} alt="" />
              </button>
            </form>
            <span className="sr-only" aria-live="polite">
              {searchStatus}
            </span>
            <button aria-label="글자 작게">가−</button>
            <button aria-label="글자 크게">가+</button>
          </div>
          <div className="mobile-tools">
            <button aria-label="검색">
              <img src={`${A}/cf69b.svg`} alt="" />
              <small>검색</small>
            </button>
            <button aria-label="글자 크기">
              <b>가±</b>
              <small>글자</small>
            </button>
            <button
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu-panel"
            >
              {menuOpen ? (
                <span className="menu-close" aria-hidden="true">
                  ×
                </span>
              ) : (
                <>
                  <img src={`${A}/e8429.svg`} alt="" />
                  <small>메뉴</small>
                </>
              )}
            </button>
          </div>
        </div>
        <div
          className={`mega-menu ${gnbOpen ? "open" : ""}`}
          aria-hidden={!gnbOpen}
          onMouseEnter={() => setGnbOpen(true)}
        >
          <div className="mega-inner">
            <div className="mega-intro">
              <strong>스마트팜 정보 포털</strong>
              <p>
                스마트팜에 필요한 정보를
                <br />
                한곳에서 만나보세요.
              </p>
            </div>
            {menuItems.map((menu) => (
              <div className="mega-column" key={menu.title}>
                <Link
                  className="mega-title"
                  to={routeForMenu(menu.title)}
                  onClick={() => setGnbOpen(false)}
                >
                  {menu.title}
                </Link>
                {menu.items.map((item) => (
                  <Link
                    key={item}
                    to={routeForSubItem(item)}
                    onClick={() => setGnbOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        {menuOpen && (
          <nav
            className="mobile-menu-panel"
            id="mobile-menu-panel"
            aria-label="모바일 메뉴"
          >
            {menuItems.map((menu, index) => {
              const open = mobileSection === index
              return (
                <div className="mobile-nav-group" key={menu.title}>
                  <button
                    className={open ? "active" : ""}
                    onClick={() => setMobileSection(open ? -1 : index)}
                    aria-expanded={open}
                  >
                    {menu.title}
                    <span>{open ? "⌃" : "⌄"}</span>
                  </button>
                  {open && (
                    <div className="mobile-subnav">
                      {menu.items.map((item) => (
                        <Link
                          key={item}
                          to={routeForSubItem(item)}
                          onClick={() => setMenuOpen(false)}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>
        )}
      </header>
    </>
  )
}

function ArrowButton({
  children,
  href,
  primary = false,
}: {
  children: React.ReactNode
  href: string
  primary?: boolean
}) {
  return href.startsWith("/") ? (
    <Link className={`arrow-button ${primary ? "primary" : ""}`} to={href}>
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  ) : (
    <a className={`arrow-button ${primary ? "primary" : ""}`} href={href}>
      {children}
      <span aria-hidden="true">→</span>
    </a>
  )
}

function Hero() {
  const [slide, setSlide] = useState(1)
  const [playing, setPlaying] = useState(true)
  const [isResetting, setIsResetting] = useState(false)

  useEffect(() => {
    if (!playing) return
    const timer = window.setInterval(() => setSlide((value) => value + 1), 5000)
    return () => window.clearInterval(timer)
  }, [playing])

  useEffect(() => {
    if (!isResetting) return
    const frame = window.requestAnimationFrame(() => setIsResetting(false))
    return () => window.cancelAnimationFrame(frame)
  }, [isResetting])

  const slides = [
    heroImages[heroImages.length - 1],
    ...heroImages,
    heroImages[0],
  ]
  const activeSlide = (slide - 1 + heroImages.length) % heroImages.length

  return (
    <section className="hero" aria-label="주요 배너">
      <div
        className="hero-track"
        style={{
          transform: `translateX(-${slide * 100}%)`,
          transition: isResetting ? "none" : undefined,
        }}
        onTransitionEnd={(event) => {
          if (
            event.target !== event.currentTarget ||
            event.propertyName !== "transform"
          )
            return
          if (slide === 0 || slide === heroImages.length + 1) {
            setIsResetting(true)
            setSlide(slide === 0 ? heroImages.length : 1)
          }
        }}
      >
        {slides.map((image, position) => {
          const index = (position - 1 + heroImages.length) % heroImages.length
          return (
            <picture className="hero-slide" key={`${image}-${position}`}>
              <source
                media="(max-width: 767px)"
                srcSet={`${A}/${mobileHeroImages[index]}`}
              />
              <img
                src={`${A}/${image}`}
                alt={
                  index === 0
                    ? "스마트 온실 내부 전경"
                    : index === 1
                      ? "햇살 가득한 토마토 온실"
                      : "정밀농업 드론과 푸른 밭"
                }
              />
            </picture>
          )
        })}
      </div>
      <button
        className="hero-arrow prev"
        onClick={() => setSlide((value) => value - 1)}
        aria-label="이전 배너"
      >
        ‹
      </button>
      <button
        className="hero-arrow next"
        onClick={() => setSlide((value) => value + 1)}
        aria-label="다음 배너"
      >
        ›
      </button>
      <div className="hero-message">
        <span className="eyebrow">스마트팜 정보 포털</span>
        <h1>
          스마트팜,
          <br />
          쉽게 시작하세요
        </h1>
        <p>
          스마트팜의 개념부터 현장 사례, 도입 준비까지.
          <br className="desktop-break" /> 나에게 필요한 정보를 한곳에서
          확인하세요.
        </p>
        <div className="hero-actions">
          <ArrowButton primary href="#themes">
            입문 가이드
          </ArrowButton>
          <ArrowButton href="/cropcase">사례 보기</ArrowButton>
          <ArrowButton href="#schedule">도입 정보</ArrowButton>
        </div>
      </div>
      <div className="slider-controls">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={activeSlide === index ? "active" : ""}
            onClick={() => setSlide(index + 1)}
            aria-label={`${index + 1}번 배너`}
          />
        ))}
        <button
          className="play-button"
          onClick={() => setPlaying(!playing)}
          aria-label={playing ? "배너 일시정지" : "배너 재생"}
        >
          {playing ? "Ⅱ" : "▶"}
        </button>
      </div>
    </section>
  )
}

function SectionTitle({
  children,
  more,
  href = "#",
}: {
  children: React.ReactNode
  more?: string
  href?: string
}) {
  return (
    <div className="section-title">
      <h2>{children}</h2>
      {more && <a href={href}>{more} ›</a>}
    </div>
  )
}

function Themes() {
  const themes = [
    ["6e3a6.svg", "처음 알아보기", "스마트팜이 처음인 분을 위한 쉬운 설명"],
    ["91ecf.svg", "도입 검토", "비용·지원·체크리스트 비교"],
    ["38924.svg", "기술 자료", "연구 성과·재배 기술·자료 모음"],
  ]
  return (
    <section className="content-section" id="themes">
      <SectionTitle>어떤 정보를 찾으세요?</SectionTitle>
      <div className="theme-grid">
        {themes.map(([icon, title, text], index) => (
          <article className={`theme-card theme-${index}`} key={title}>
            <div className="theme-info">
              <img src={`${A}/${icon}`} alt="" />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
            <ArrowButton href={index === 0 ? "/housetype" : "#guide"}>
              바로가기
            </ArrowButton>
          </article>
        ))}
      </div>
    </section>
  )
}

function Cases() {
  const [tab, setTab] = useState(0)
  const tabs = ["전체", "작물별", "규모별", "기술별"]
  const visibleCases =
    tab === 0
      ? cases.filter((_, index) => [0, 3, 6, 9].includes(index))
      : cases.filter((item) => item.category === tabs[tab])

  return (
    <section className="content-section" id="cases">
      <SectionTitle more="사례 더보기" href="#cases">
        추천 현장 적용 사례
      </SectionTitle>
      <div className="tabs" role="tablist">
        {tabs.map((item, index) => (
          <button
            role="tab"
            aria-selected={tab === index}
            className={tab === index ? "active" : ""}
            key={item}
            onClick={() => setTab(index)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="case-scroller">
        {visibleCases.map((item) => (
          <article className="case-card" key={item.title}>
            <div className="case-image">
              <Link
                to="#cases"
                aria-label={`${item.title} 현장 사례 보기`}
              >
                <img
                  src={`${A}/${item.image}`}
                  alt={`${item.title} 스마트팜 현장`}
                />
              </Link>
            </div>
            <div className="case-content">
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <small>{item.meta}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Calendar({
  schedules,
  scheduleType,
}: {
  schedules: { title: string; eventDate: string }[]
  scheduleType: "교육" | "행사"
}) {
  const today = new Date()
  const [displayMonth, setDisplayMonth] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1),
  )
  const [selectedDate, setSelectedDate] = useState(() => dateKey(today))
  useEffect(() => {
    if (schedules.some((schedule) => schedule.eventDate === selectedDate)) return

    const nextSchedule =
      schedules.find((schedule) => schedule.eventDate >= dateKey(today)) ??
      schedules[0]
    const nextDate = dateFromKey(nextSchedule.eventDate)
    setSelectedDate(nextSchedule.eventDate)
    setDisplayMonth(new Date(nextDate.getFullYear(), nextDate.getMonth(), 1))
  }, [scheduleType])
  const year = displayMonth.getFullYear()
  const month = displayMonth.getMonth()
  const firstWeekday = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ]
  const eventsOnSelectedDate = schedules.filter(
    (schedule) => schedule.eventDate === selectedDate,
  )

  function changeMonth(amount: number) {
    const nextMonth = new Date(year, month + amount, 1)
    setDisplayMonth(nextMonth)
    setSelectedDate(dateKey(nextMonth))
  }

  return (
    <div className="calendar">
      <div className="calendar-head">
        <button aria-label="이전 달" onClick={() => changeMonth(-1)}>
          ‹
        </button>
        <strong>{`${year}.${String(month + 1).padStart(2, "0")}`}</strong>
        <button aria-label="다음 달" onClick={() => changeMonth(1)}>
          ›
        </button>
      </div>
      <div className="weekdays">
        {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className="dates">
        {cells.map((day, index) => {
          if (day === null) {
            return <span aria-hidden="true" key={`empty-${index}`} />
          }
          const currentDate = dateKey(new Date(year, month, day))
          const isToday = currentDate === dateKey(today)
          const hasEvent = schedules.some(
            (schedule) => schedule.eventDate === currentDate,
          )
          return (
            <button
              aria-label={`${formatKoreanDate(new Date(year, month, day))}${
                hasEvent ? `, ${scheduleType} 일정 있음` : ""
              }`}
              aria-pressed={selectedDate === currentDate}
              className={`${isToday ? "today" : ""} ${
                hasEvent ? "event" : ""
              } ${selectedDate === currentDate ? "selected" : ""}`}
              key={currentDate}
              onClick={() => setSelectedDate(currentDate)}
              type="button"
            >
              {day}
            </button>
          )
        })}
      </div>
      <div className="calendar-note">
        <i />
        {eventsOnSelectedDate.length > 0
          ? eventsOnSelectedDate.map((schedule) => schedule.title).join(", ")
          : `${formatKoreanDate(dateFromKey(selectedDate))} 등록된 일정이 없습니다.`}
      </div>
    </div>
  )
}

function Schedule() {
  const [tab, setTab] = useState(0)
  const today = new Date()
  const activeSchedules = tab === 0 ? schedules : events
  const scheduleType = tab === 0 ? "교육" : "행사"
  return (
    <section className="content-section" id="schedule">
      <div className="schedule-heading">
        <SectionTitle more="전체 보기" href="#schedule">
          교육 일정·행사
        </SectionTitle>
        <div className="tabs schedule-tabs" role="tablist" aria-label="일정 유형">
          <button
            aria-selected={tab === 0}
            className={tab === 0 ? "active" : ""}
            onClick={() => setTab(0)}
            role="tab"
          >
            교육
          </button>
          <button
            aria-selected={tab === 1}
            className={tab === 1 ? "active" : ""}
            onClick={() => setTab(1)}
            role="tab"
          >
            행사
          </button>
        </div>
      </div>
      <div className="schedule-layout">
        <div className="schedule-list">
          {activeSchedules.map((schedule) => {
            const countdownDate =
              tab === 0 && "deadline" in schedule
                ? schedule.deadline
                : schedule.eventDate
            const daysUntilDeadline = daysBetween(
              today,
              dateFromKey(countdownDate),
            )
            const dDay =
              daysUntilDeadline === 0
                ? "D-Day"
                : daysUntilDeadline > 0
                  ? `D-${daysUntilDeadline}`
                  : `D+${Math.abs(daysUntilDeadline)}`
            return (
              <article className="schedule-row" key={schedule.title}>
                <div className="schedule-main">
                  <div className="d-day">
                    <strong>{dDay}</strong>
                    <small>
                      {tab === 0
                        ? daysUntilDeadline < 0
                          ? "마감"
                          : "신청 마감"
                        : daysUntilDeadline < 0
                          ? "종료"
                          : "행사일까지"}
                    </small>
                  </div>
                  <div>
                    <h3>{schedule.title}</h3>
                    <p>
                      <span>대상&nbsp; {schedule.target}</span>
                      <span>
                        기간&nbsp;{" "}
                        {formatKoreanDate(dateFromKey(schedule.eventDate))}{" "}
                        {schedule.eventTime}
                      </span>
                    </p>
                    {tab === 0 && "deadline" in schedule ? (
                      <p>
                        신청 마감&nbsp;
                        {formatKoreanDate(dateFromKey(schedule.deadline))}
                      </p>
                    ) : (
                      <p>장소&nbsp;{"venue" in schedule ? schedule.venue : ""}</p>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  disabled={tab === 0 && daysUntilDeadline < 0}
                  className={daysUntilDeadline >= 0 ? "actionBtn" : "normalBtn"}
                >
                  {tab === 0
                    ? daysUntilDeadline < 0
                      ? "신청 마감"
                      : "신청하기"
                    : daysUntilDeadline >= 0 ? "행사 정보" : "행사 마감"}
                </button>
              </article>
            )
          })}
        </div>
        <Calendar schedules={activeSchedules} scheduleType={scheduleType} />
      </div>
    </section>
  )
}

function Guide() {
  const steps = [
    ["STEP 1", "찾기", "검색창·카테고리로 원하는 정보 찾기"],
    ["STEP 2", "확인", "요약·출처·작성일로 정보의 신뢰도 확인"],
    ["STEP 3", "저장·공유", "관심 정보 저장, SNS로 가족·지인과 공유"],
  ]
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  return (
    <section className="content-section" id="guide">
      <SectionTitle>이렇게 이용하세요</SectionTitle>
      <div className="step-grid">
        {steps.map(([step, title, text], index) => (
          <div className="step-wrap" key={step}>
            <article className="step-card">
              <span>{step}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
            {index < 2 && <i className="step-arrow">›</i>}
          </div>
        ))}
      </div>
      <div className="faq" id="faq">
        <h3>자주 묻는 질문</h3>
        {faqs.map(([question, answer], index) => (
          <div
            className={`faq-item ${openFaq === index ? "open" : ""}`}
            key={question}
          >
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              aria-expanded={openFaq === index}
              aria-controls={`faq-answer-${index}`}
            >
              <strong>Q{index + 1}.</strong>
              <span>{question}</span>
              <i>{openFaq === index ? "−" : "+"}</i>
            </button>
            <div
              className="faq-answer"
              id={`faq-answer-${index}`}
              aria-hidden={openFaq !== index}
            >
              <div>{answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Resources() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [activeResource, setActiveResource] = useState(0)
  const resources = [
    [
      "4822f.png",
      "인기 자료 · 교육자료",
      "스마트팜 시뮬레이터의 이해 및 활용",
      "시뮬레이터로 알아보는 스마트팜 운영의 기초",
      "출처 KoSFarm · 2025.08.12",
    ],
    [
      "bb594.png",
      "주제별 콘텐츠 · 소식지",
      "KoSFarm Newsletter 26호",
      "스마트팜 연구개발의 새로운 소식을 만나보세요.",
      "출처 KoSFarm · 2026.10.01",
    ],
    [
      "55f88.png",
      "관련 링크 · 데이터",
      "스마트팜 R&D 빅데이터 플랫폼",
      "연구와 재배에 필요한 데이터를 한곳에서 탐색하세요.",
      "출처 rnd.bigdata-smartfarm.kr",
    ],
  ]

  function scrollToResource(index: number) {
    const scroller = scrollerRef.current
    const card = scroller?.children[index]
    if (!scroller || !(card instanceof HTMLElement)) return

    const scrollerRect = scroller.getBoundingClientRect()
    const cardRect = card.getBoundingClientRect()
    scroller.scrollTo({
      left:
        scroller.scrollLeft +
        cardRect.left -
        scrollerRect.left -
        (scroller.clientWidth - cardRect.width) / 2,
      behavior: "smooth",
    })
    setActiveResource(index)
  }

  function updateActiveResource() {
    const scroller = scrollerRef.current
    if (!scroller) return

    const scrollerCenter =
      scroller.getBoundingClientRect().left + scroller.clientWidth / 2
    const closestCardIndex = Array.from(scroller.children).reduce(
      (closestIndex, card, index, cards) => {
        const cardRect = card.getBoundingClientRect()
        const cardDistance = Math.abs(
          cardRect.left + cardRect.width / 2 - scrollerCenter,
        )
        const closestRect = cards[closestIndex].getBoundingClientRect()
        const closestDistance = Math.abs(
          closestRect.left + closestRect.width / 2 - scrollerCenter,
        )
        return cardDistance < closestDistance ? index : closestIndex
      },
      0,
    )
    setActiveResource(closestCardIndex)
  }

  return (
    <section className="content-section resources" id="recommend">
      <SectionTitle>관련 자료·추천</SectionTitle>
      <div
        className="resource-scroller"
        ref={scrollerRef}
        onScroll={updateActiveResource}
      >
        {resources.map(([image, tag, title, text, source]) => (
          <article className="resource-card" key={title}>
            <div className="resource-image">
              <a href="#recommend">
                <img src={`${A}/${image}`} alt={`${title} 관련 이미지`} />
              </a>
            </div>
            <div>
              <span>{tag}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <small>{source}</small>
            </div>
          </article>
        ))}
      </div>
      <div className="mobile-page-dots">
        {resources.map(([, , title], index) => (
          <button
            aria-label={`${index + 1}번째 자료 보기: ${title}`}
            aria-current={activeResource === index ? "true" : undefined}
            className={activeResource === index ? "active" : ""}
            key={title}
            onClick={() => scrollToResource(index)}
            type="button"
          />
        ))}
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <nav className="policy-links">
          {[
            "개인정보처리방침",
            "이용약관",
            "저작권ㆍ출처 안내",
            "접근성 안내",
            "사이트맵",
          ].map((item) => (
            <a href="#top" key={item}>
              {item}
            </a>
          ))}
        </nav>
        <div className="footer-main">
          <div className="organization">
            <Logo footer />
            <div>
              <strong>운영기관&nbsp; 재단법인 스마트팜연구개발사업단</strong>
              <p>
                [30121] 세종특별자치시 가름로 232 세종비지니스센터 A동 618호
              </p>
              <p>대표번호&nbsp; 044-559-5647</p>
            </div>
          </div>
          <div className="contact">
            <strong>문의·소통</strong>
            <ArrowButton primary href="#faq">
              1:1 상담 신청
            </ArrowButton>
            <div className="socials">
              {["f9424.svg", "2c0af.svg", "1b239.svg", "7ca51.svg"].map(
                (icon) => (
                  <button aria-label="소셜 채널" key={icon}>
                    <img src={`${A}/${icon}`} alt="" />
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
        <p className="copyright">
          © 스마트팜연구개발사업단. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

function QuickMenu() {
  return (
    <aside className="quick-menu" aria-label="빠른 메뉴">
      <a href="#faq">
        <img src={`${A}/df326.svg`} alt="" />
        1:1 상담
      </a>
      <a href="#schedule">
        <img src={`${A}/bf988.svg`} alt="" />
        지원 사업
      </a>
      <a href="#top">
        <img src={`${A}/c59ae.svg`} alt="" />
        TOP
      </a>
    </aside>
  )
}

export default function HomePage() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <div className="main-content">
          <Themes />
          <Cases />
          <Schedule />
          <Guide />
          <Resources />
        </div>
      </main>
      <Footer />
      <QuickMenu />
    </div>
  )
}
