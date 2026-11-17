import { useState } from "react"
import { Link } from "react-router"
import { A, Footer, Header } from "../App"

function SubpageHero({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image: string
}) {
  return (
    <section className="subpage-hero">
      <img src={`${A}/${image}`} alt="" />
      <div className="subpage-hero-overlay" />
      <div className="subpage-container">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  )
}

function SubNavigation({
  section,
  current,
  siblings,
}: {
  section: string
  current: string
  siblings: string[]
}) {
  return (
    <nav className="sub-navigation" aria-label="현재 위치와 관련 메뉴">
      <div className="subpage-container">
        <div className="breadcrumbs">
          <Link to="/">홈</Link>
          <span>›</span>
          <Link to="#top"><span>{section}</span></Link>
          <span>›</span>
          <strong>{current}</strong>
        </div>
        <div className="sibling-links">
          {siblings.map((item) => (
            <a
              className={item === current ? "active" : ""}
              href={item === current ? "#content" : "#content"}
              key={item}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

const greenhouseCases = {
  전체: [
    ["8394a.png", "ICT 온실"],
    ["a7d7f.png", "비닐 온실"],
    ["3ee38.png", "유리 온실"],
  ],
  "자동화 온실": [
    ["8394a.png", "ICT-배추"],
    ["c5a57.png", "ICT-청경채"],
    ["1be9e.png", "ICT-상추"],
  ],
  "비닐 온실": [
    ["ab261.png", "비닐-오이"],
    ["69310.png", "비닐-토마토"],
    ["9cc47.png", "비닐-딸기"],
  ],
  "유리 온실": [
    ["60cca.png", "유리-파프리카"],
    ["c4f2f.png", "유리-멜론"],
    ["b522d.png", "유리-가지"],
  ],
}

function GreenhouseCases() {
  const [tab, setTab] = useState<keyof typeof greenhouseCases>("전체")

  return (
    <div className="greenhouse-cases">
      <div className="subpage-tabs" role="tablist">
        {(Object.keys(
          greenhouseCases,
        ) as Array<keyof typeof greenhouseCases>).map((item) => (
          <button
            className={tab === item ? "active" : ""}
            onClick={() => setTab(item)}
            role="tab"
            aria-selected={tab === item}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="greenhouse-case-grid">
        {greenhouseCases[tab].map(([image, label]) => (
          <figure key={`${tab}-${label}`}>
            <a href="#top">
              <img src={`${A}/${image}`} alt={label} />
            </a>
            <figcaption>{label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

const houseTypes = [
  {
    id: "automation",
    title: "자동화 온실",
    summary:
      "복합환경제어 시스템이 갖춰진 온실로서 정보통신기술(ICT)을 온실에 접목한 형태로, 스마트폰 등 외부기기를 사용하여 다양한 온실 환경 및 데이터를 원격으로 확인, 제어할 수 있는 최첨단 온실",
    image: "d612b.png",
    imageAlt: "자동화 온실에서 재배 중인 딸기",
    detailTitle: "종류",
    details: ["기존 온실 또는 신규 온실에 모두 적용 가능하다."],
    benefits: [
      "농업기술에 정보통신기술(ICT)을 융합하여 농작물의 재배환경을 통제",
      "시설의 온도, 습도, 일조량, 이산화탄소량 및 토양을 자동 측정·분석해 원격 및 자동으로 관리",
      "모바일 기기를 통해 작물 재배환경을 원격 관리 지원",
      "수집한 데이터를 통한 재배 기술력 향상으로 재배실적 증가",
    ],
  },
  {
    id: "vinyl",
    title: "비닐 온실",
    summary:
      "경량철골 구조에 외부 피복재가 비닐(plastic)로 이루어진 시설로 채소류 재배에 가장 많이 쓰이며 화훼류, 과수류의 재배 등에 이용된다.",
    image: "153a5.png",
    imageAlt: "비닐 온실에서 재배 중인 오이",
    detailTitle: "형태",
    details: [
      "지붕 모양 : 외쪽지붕식 · 3/4식 · 양면식 · 아치형",
      "축조 형태 : 단동·연동으로 구분하며 단동식 · 2연동식 · 3연동식",
    ],
    benefits: [
      "단동식 구조 : 각각 독립된 구조로 개별 난방이 필요하며 에너지 손실이 많다.",
      "연동식 구조 : 넓은 공간을 효율적으로 이용할 수 있으나 단동식에 비해 초기 설치비용이 많이 든다.",
    ],
  },
  {
    id: "glass",
    title: "유리 온실",
    summary:
      "천창과 벽 등 외부 피복재가 유리로 되어 있는 온실로, 광투과성·보온성·환경제어·안정성·작업성이 우수하여 연중 주년생산을 체계화할 수 있다.",
    image: "87a08.png",
    imageAlt: "유리 온실에서 재배 중인 토마토",
    detailTitle: "종류",
    details: [
      "지붕의 형상 : 양 지붕형(even span), 3/4 지붕형(three quarter), 편 지붕형, 아치형",
      "지붕의 폭 : 넓은 지붕형(widespan), 좁은 지붕형(venlo)",
      "온실의 동수 : 지붕이 하나인 단동형과 물받이 홈으로 연결된 연동형",
    ],
    benefits: [
      "촉성, 반촉성, 억제재배 등 연중 온실 이용이 편리하다.",
      "기상재해에 대한 정확한 구조 계산으로 안정성이 높다.",
      "여름철 고온과 겨울철 저온에 대한 적응성이 높다.",
      "작은 면적도 시공 가능하며 우리나라 경지 정리 지구에 맞춘 설계가 편리하다.",
    ],
  },
]

export function HouseTypePage() {
  return (
    <div id="top">
      <Header />
      <main>
        <SubpageHero
          title="기술 · 온실 유형"
          description="자동화·비닐·유리 온실의 특징과 장점을 한눈에 비교해 보세요."
          image="5d795.png"
        />
        <SubNavigation
          section="스마트팜 소개"
          current="기술 · 온실 유형"
          siblings={[
            "스마트팜이란?",
            "기술 · 온실 유형",
            "주요 도입 효과",
            "법률ㆍ지원 정책",
          ]}
        />
        <div id="content">
          {houseTypes.map((house, index) => (
            <section
              className={`house-type-section ${index % 2 ? "tinted" : ""}`}
              id={house.id}
              key={house.title}
            >
              <div className="subpage-container">
                <h2>{house.title}</h2>
                <p className="section-summary">{house.summary}</p>
                <div
                  className={`house-type-layout ${index % 2 ? "reverse" : ""}`}
                >
                  <a href="#top" className="house-type-image-link">
                    <img src={`${A}/${house.image}`} alt={house.imageAlt} />
                  </a>
                  <div className="house-type-copy">
                    <h3>{house.detailTitle}</h3>
                    <ul>
                      {house.details.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <h3>장점</h3>
                    <ul>
                      {house.benefits.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          ))}
          <section className="house-cases-section">
            <div className="subpage-container">
              <h2>온실 시공 사례</h2>
              <GreenhouseCases />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

const majorCrops = [
  {
    title: "오이",
    image: "e145d.png",
    alt: "온실에서 재배 중인 오이",
    lines: [
      ["잘 자라는 온도", "20~22°C 내외"],
      ["생육 장애온도", "15°C 이하, 30°C 이상"],
      ["토양", "유기물이 풍부하고 물 빠짐이 좋은 식양토가 좋음"],
      ["햇빛의 세기", "일조가 부족하면 기형과 발생이 증가함"],
      ["유기물 사용", "뿌리가 얕게 분포하므로 유기물을 충분히 시용해야 함"],
    ],
  },
  {
    title: "딸기",
    image: "a3eea.png",
    alt: "온실에서 재배 중인 딸기",
    lines: [
      ["잘 자라는 온도", "낮 17~18°C, 밤 8°C 내외"],
      ["생육 장애온도", "20°C 이상이면 자라기에 좋지 않음"],
      ["토양", "약산성의 물 빠짐이 좋고 보수력이 좋은 양토"],
      ["주요 병해", "탄저병, 흰가루병 등"],
      ["주요 충해", "목화진딧물, 점박이응애, 총채벌레 등"],
    ],
  },
  {
    title: "토마토",
    image: "910c5.png",
    alt: "온실에서 재배 중인 토마토",
    lines: [
      ["싹트는 온도", "28°C"],
      ["잘 자라는 온도", "낮 25~30°C, 밤 18~20°C, 지온 20±2°C"],
      ["햇빛의 세기", "강한 광선을 좋아해 햇빛을 충분히 쪼여주는 것이 좋음"],
      ["토양조건", "과습에 약하며 양토 또는 식양토가 좋음"],
      ["토양산도", "pH 6.0~6.4"],
    ],
  },
  {
    title: "멜론",
    image: "6e425.png",
    alt: "온실에서 재배 중인 멜론",
    lines: [
      ["잘 자라는 온도", "20~30°C 내외"],
      ["햇빛의 세기", "충분한 광이 필요하며 습도가 낮으면 당도가 떨어짐"],
      ["토양조건", "pH 6.0~6.8의 배수와 통기성이 좋은 토양"],
      ["주요 병해", "검은점뿌리썩음병, 덩굴마름병, 괴저반점 바이러스 등"],
    ],
  },
]

const cropCategories = [
  [
    "허브류",
    "바질, 로즈마리 등",
    [
      "조리에 널리 사용되어 수요가 많음.",
      "온화한 기후와 충분한 태양광에서 생장이 촉진됨.",
      "재배와 유지보수가 비교적 쉬움.",
    ],
  ],
  [
    "과채류",
    "토마토, 딸기, 수박, 파프리카, 멜론",
    [
      "고가 소비재로 취급되며 수요가 많음.",
      "빠른 성장과 단기 공급 주기로 스마트팜에 유리함.",
    ],
  ],
  [
    "쌈채소",
    "상추, 청경채, 새싹채소, 오이",
    [
      "건강 식재료에 대한 수요가 증가하는 추세.",
      "짧은 성장주기로 시장 수요에 맞춘 유연한 생산이 가능함.",
    ],
  ],
  [
    "약용작물",
    "새싹인삼, 오미자, 마리골드 등",
    [
      "의약품 산업과 관련된 수요가 증가함.",
      "건강 보조제, 화장품, 건강식품 등 다양한 산업에서 활용됨.",
    ],
  ],
] as const

const recommendationPages = [
  [
    ["d8190.png", "아티초크"],
    ["bd5d8.png", "바질"],
    ["35b99.png", "브로콜리"],
  ],
  [
    ["0e8cc.png", "토마틸로"],
    ["dd7dc.png", "컬리플라워"],
    ["74b4a.png", "치커리"],
  ],
  [
    ["f4b3f.png", "아스파라거스"],
    ["74b4a.png", "치커리"],
    ["fcddb.png", "브로콜리"],
  ],
]

function CropRecommendations() {
  const [page, setPage] = useState(0)
  return (
    <div className="crop-recommendations">
      <div className="recommendation-grid" key={page}>
        {recommendationPages[page].map(([image, name]) => (
          <figure key={`${page}-${name}`}>
            <a href="#top">
              <img src={`${A}/${image}`} alt={`${name} 스마트팜 재배 모습`} />
            </a>
            <figcaption>{name}</figcaption>
          </figure>
        ))}
      </div>
      <div className="recommendation-dots" aria-label="추천 작물 페이지">
        {recommendationPages.map((_, index) => (
          <button
            className={page === index ? "active" : ""}
            onClick={() => setPage(index)}
            aria-label={`${index + 1}번째 추천 작물`}
            aria-current={page === index ? "page" : undefined}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export function CropCasePage() {
  return (
    <div id="top">
      <Header />
      <main>
        <SubpageHero
          title="작물별 사례"
          description="스마트팜에서 재배하는 대표 작물의 환경 조건과 재배 정보를 한눈에 확인하세요"
          image="bdc09.png"
        />
        <SubNavigation
          section="현장 사례"
          current="작물별 사례"
          siblings={["작물별 사례", "규모별 사례", "적용 사례", "운영 노하우"]}
        />
        <section className="crop-major-section" id="content">
          <div className="subpage-container">
            <h2>대표 주요 재배 작물</h2>
            <div className="major-crop-list">
              {majorCrops.map((crop) => (
                <article className="major-crop-card" key={crop.title}>
                  <a href="#top">
                    <img src={`${A}/${crop.image}`} alt={crop.alt} />
                  </a>
                  <div>
                    <h3>{crop.title}</h3>
                    <dl>
                      {crop.lines.map(([label, value]) => (
                        <div key={label}>
                          <dt>{label}</dt>
                          <dd>: {value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="crop-category-section">
          <div className="subpage-container">
            <h2>재배 가능 작물 분류</h2>
            <div className="crop-category-table">
              {cropCategories.map(([category, crops, notes]) => (
                <article key={category}>
                  <h3>{category}</h3>
                  <div>
                    <h4>{crops}</h4>
                    <ul>
                      {notes.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="crop-recommend-section">
          <div className="subpage-container">
            <h2>재배 가능 추천 작물</h2>
            <CropRecommendations />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
