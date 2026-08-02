import { motion } from 'framer-motion'
import { SOCIAL_ICONS } from './SocialIcons'
import { FOCUS_POINTS } from '../data/focusPoints'

const SOCIAL_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://zhaochongbo.github.io/',
  },
  {
    id: 'mail',
    label: '邮箱',
    href: 'mailto:ZhaoChongbo2000@163.com',
  },
  {
    id: 'wechat',
    label: '微信',
    href: 'https://weixin.qq.com/',
  },
]

// 履历数据（双语），五段分别对应 glb 的 focus-1…5。
interface ResumeGroup {
  heading?: string
  logoImg?: string
  time?: string
  sub?: string
  link?: string
  items?: string[]
  links?: { id: string; label: string; href: string }[]
}
interface ResumeEntry {
  period: string
  place: string
  role?: string
  photo?: string
  photoCaption?: string
  points?: string[]
  groups?: ResumeGroup[]
  meter?: { label: string; value: number; color?: string }[]
  achievements?: { name: string; meta: string; desc?: string }[]
  tags?: string[]
  photos?: { src: string; alt: string; caption: string }[]
  collections?: { name: string; items: string }[]
  motto?: string
}
const RESUME: Record<'en' | 'zh', { title: string; entries: ResumeEntry[] }> = {
  en: {
    title: 'Profile',
    entries: [
      {
        period: '01 · Core Competencies',
        place: 'Finance & Data & Product',
        photo: `${import.meta.env.BASE_URL}images/headshot.jpg`,
        photoCaption: 'Zhao Chongbo · 2027 Campus Recruiting',
        meter: [
          { label: 'SQL', value: 92, color: '#6f906f' },
          { label: 'Python & Vibe-coding', value: 88, color: '#ffd9b3' },
          { label: 'AI Application', value: 86, color: '#dbd3b5' },
          { label: 'Machine Learning', value: 85, color: '#6f906f' },
          { label: 'Financial Analysis', value: 90, color: '#ffd9b3' },
          { label: 'Causal Inference', value: 80, color: '#dbd3b5' },
          { label: 'Product Thinking', value: 76, color: '#ffd9b3' },
        ],
        points: [
          'SQL: complex handwritten queries across multi-channel data.',
          'Python: Vibe-coding as the core workflow — use AI to ship data cleaning, modeling & validation fast.',
          'AI depth: built a personal RAG knowledge base; daily driver of Trae / Coze / Cursor; automated analysis pipelines; distilled high-frequency flows into reusable Skills.',
          'Financial analysis: accounting degree + hands-on audit — statements, interlock checks, anomaly spotting.',
          'Causal inference: PSM · sensitivity analysis · GEE.',
          'Visualization: Tableau & Power BI dashboards end-to-end.',
          'Product thinking: metrics frameworks, requirement breakdown, data products, A/B experiment design.',
        ],
      },
      {
        period: '02 · MUC → PolyU',
        place: 'Bank → Audit → Consulting',
        role: '2019 – 2026',
        groups: [
          {
            heading: 'Hong Kong Polytechnic University',
            time: '2025.07-26.11',
            sub: 'QS50 MSc · Data Mining & BI A+',
          },
          {
            heading: 'Deloitte Consulting',
            time: '2023.07-12',
            sub: 'Xbox value assessment · BAIC ARCFOX marketing analysis',
          },
          {
            heading: 'BDO China',
            time: '2022.01-03',
            sub: 'State enterprise audit · 3 key issues identified',
          },
          {
            heading: 'China Merchants Bank',
            time: '2021.07-08',
            sub: 'Outstanding intern · K-means customer segmentation',
          },
          {
            heading: 'Minzu University of China (985)',
            time: '2019.09-23.06',
            sub: 'B.A. Accounting · CPC member',
          },
        ],
      },
      {
        period: '03 · Time Allocation',
        place: 'Energy Portfolio',
        role: 'Where my time goes',
        meter: [
          { label: 'Learning & Growth', value: 50, color: '#ffd9b3' },
          { label: 'Family & Social', value: 30, color: '#6f906f' },
          { label: 'Sports & Hobbies', value: 10, color: '#dbd3b5' },
          { label: 'Gaming', value: 5, color: '#6f906f' },
          { label: 'Entertainment', value: 5, color: '#ffd9b3' },
        ],
      },
      {
        period: '04 · Gaming',
        place: '12 Years of Play',
        role: 'Strategy first',
        achievements: [
          {
            name: 'CrossFire',
            meta: '12 yrs · Marshal · Clan founder',
          },
          {
            name: 'Honor of Kings',
            meta: '9 yrs · Peak 1900 · 108★ · 48-lane jungler',
          },
          {
            name: 'Hearthstone',
            meta: '2 yrs · Solo 8000 · Duo 7000',
          },
        ],
      },
      {
        period: '05 · Life & Belief',
        place: 'Beyond Work',
        role: 'Cautious · Planner · Long-termist',
        tags: ['Hiking', 'Photography', 'Swimming', 'Badminton', 'Skiing', 'History', 'Travel', 'Cooking'],
        photos: [
          { src: `${import.meta.env.BASE_URL}images/hiking.jpg`, alt: 'Hiking', caption: 'Hiking' },
          { src: `${import.meta.env.BASE_URL}images/photo.jpg`, alt: 'Photography', caption: 'Photography' },
        ],
        collections: [
          { name: 'Reading', items: 'The Three-Body Problem · Yongzheng trilogy · Midnight Sun' },
          { name: 'Shows', items: 'The Great Gatsby · Stranger Things · Peaky Blinders' },
          { name: 'Music', items: 'Mayday' },
        ],
        motto: '慎终如始，则无败事',
        groups: [
          {
            heading: 'Contact',
            items: ['Tel: +86 188 8930 3808 / +852 8495 8353', 'Email: ZhaoChongbo2000@163.com', 'WeChat: ZHAOCHONGBO0304'],
            links: SOCIAL_LINKS,
          },
        ],
      },
    ],
  },
  zh: {
    title: '个人档案',
    entries: [
      {
        period: '01 · 核心能力',
        place: '财务 & 数分 & 产品',
        photo: `${import.meta.env.BASE_URL}images/headshot.jpg`,
        photoCaption: '赵崇铂 · 2027 届秋季校招',
        meter: [
          { label: 'SQL', value: 92, color: '#6f906f' },
          { label: 'Python & Vibe-coding', value: 88, color: '#ffd9b3' },
          { label: 'AI 应用能力', value: 86, color: '#dbd3b5' },
          { label: '机器学习', value: 85, color: '#6f906f' },
          { label: '财务分析', value: 90, color: '#ffd9b3' },
          { label: '因果推断', value: 80, color: '#dbd3b5' },
          { label: '产品思维', value: 76, color: '#ffd9b3' },
        ],
        points: [
          'SQL：手写复杂查询，打通多渠道数据。',
          'Python：以 Vibe-coding 为核心开发方式，借助 AI 高效完成数据清洗、建模与验证，弥补手动编码短板。',
          'AI 深度应用：自建 RAG 历史知识库沉淀项目经验；日常使用 Trae / Coze / Cursor 搭建自动化分析流水线，并将高频流程沉淀为个人 Skill，持续提升 AI 工程效率。',
          '财务分析：会计本科 + 审计实战，独立完成财报解读、三大报表勾稽与异常识别。',
          '因果推断：PSM · 敏感性分析 · GEE。',
          '可视化：Tableau / Power BI 看板搭建。',
          '产品思维：指标体系搭建、需求拆解、数据产品与 A/B 实验设计。',
        ],
      },
      {
        period: '02 · 中央民大 → 香港理工',
        place: '银行 → 审计 → 咨询',
        role: '2019 – 2026',
        groups: [
          {
            heading: '香港理工大学',
            time: '2025.07-26.11',
            sub: 'QS50 硕士 · 数据挖掘与商业智能 A+',
          },
          {
            heading: '德勤管理咨询',
            time: '2023.07-12',
            sub: 'Xbox 业务效益 · 北汽 ARCFOX 营销分析',
          },
          {
            heading: '立信会计师事务所',
            time: '2022.01-03',
            sub: '国企年审 · 识别 3 项关键问题',
          },
          {
            heading: '招商银行',
            time: '2021.07-08',
            sub: '优秀实习生 · K-means 客群分群',
          },
          {
            heading: '中央民族大学（985）',
            time: '2019.09-23.06',
            sub: '会计学本科 · 中共党员',
          },
        ],
      },
      {
        period: '03 · 时间分配',
        place: '精力投资组合',
        role: '时间花在哪里，未来就在哪里',
        meter: [
          { label: '学习与成长', value: 50, color: '#ffd9b3' },
          { label: '家庭与社交', value: 30, color: '#6f906f' },
          { label: '兴趣与运动', value: 10, color: '#dbd3b5' },
          { label: '游戏', value: 5, color: '#6f906f' },
          { label: '文娱', value: 5, color: '#ffd9b3' },
        ],
      },
      {
        period: '04 · 游戏成就',
        place: '12 年游戏生涯',
        role: '玩得久，也玩得明白',
        achievements: [
          {
            name: '穿越火线 CF',
            meta: '12 年 · 大元帅 · 创办运营战队',
          },
          {
            name: '王者荣耀',
            meta: '9 年 · 巅峰 1900 · 108 星 · 48 段打野',
          },
          {
            name: '炉石传说',
            meta: '2 年 · 单排 8000 / 双排 7000',
          },
        ],
      },
      {
        period: '05 · 兴趣与理念',
        place: '工作之外',
        role: '谨慎 · 计划型 · 长期主义',
        tags: ['爬山', '摄影', '游泳', '羽毛球', '滑雪', '中国历史', '旅游', '做饭'],
        photos: [
          { src: `${import.meta.env.BASE_URL}images/hiking.jpg`, alt: '爬山', caption: '爬山' },
          { src: `${import.meta.env.BASE_URL}images/photo.jpg`, alt: '摄影', caption: '摄影' },
        ],
        collections: [
          { name: '阅读', items: '《三体》·「康雍乾」三部曲 ·《白夜行》' },
          { name: '影视', items: '《了不起的盖茨比》·《怪奇物语》·《浴血黑帮》' },
          { name: '音乐', items: '五月天' },
        ],
        motto: '慎终如始，则无败事',
        groups: [
          {
            heading: '联系方式',
            items: ['Tel: +86 188 8930 3808 / +852 8495 8353', 'Email: ZhaoChongbo2000@163.com', 'WeChat: ZHAOCHONGBO0304'],
            links: SOCIAL_LINKS,
          },
        ],
      },
    ],
  },
}

// 履历条目依次对应 glb 里的聚焦锚点（相机停靠点），顺序须与 entries 一致。
const POINT_ORDER = FOCUS_POINTS

const EASE = [0.22, 1, 0.36, 1]
const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}
const itemV = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

function Meter({ meter }: { meter: NonNullable<ResumeEntry['meter']> }) {
  return (
    <motion.div className="tl-meter" variants={itemV}>
      {meter.map((m, i) => (
        <div key={i} className="tl-meter-row">
          <span className="tl-meter-label">{m.label}</span>
          <span className="tl-meter-track">
            <motion.span
              className="tl-meter-fill"
              style={{ backgroundColor: m.color || '#ffd9b3' }}
              initial={{ width: 0 }}
              whileInView={{ width: `${m.value}%` }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
            />
          </span>
          <span className="tl-meter-value">{m.value}%</span>
        </div>
      ))}
    </motion.div>
  )
}

function Achievements({ list }: { list: NonNullable<ResumeEntry['achievements']> }) {
  return (
    <motion.div className="tl-achievements" variants={itemV}>
      {list.map((a, i) => (
        <div key={i} className="tl-ach">
          <div className="tl-ach-head">
            <span className="tl-ach-name">{a.name}</span>
            <span className="tl-ach-meta">{a.meta}</span>
          </div>
          {a.desc && <div className="tl-ach-desc">{a.desc}</div>}
        </div>
      ))}
    </motion.div>
  )
}

function PhotoWall({ photos }: { photos: NonNullable<ResumeEntry['photos']> }) {
  return (
    <motion.div className="tl-photos" variants={itemV}>
      {photos.map((p, i) => (
        <figure key={i} className="tl-photo">
          <img src={p.src} alt={p.alt} loading="lazy" />
          <figcaption>{p.caption}</figcaption>
        </figure>
      ))}
    </motion.div>
  )
}

function Collections({ list }: { list: NonNullable<ResumeEntry['collections']> }) {
  return (
    <motion.div className="tl-collections" variants={itemV}>
      {list.map((c, i) => (
        <div key={i} className="tl-collection">
          <span className="tl-collection-name">{c.name}</span>
          <span className="tl-collection-items">{c.items}</span>
        </div>
      ))}
    </motion.div>
  )
}

function Tags({ tags }: { tags: NonNullable<ResumeEntry['tags']> }) {
  return (
    <motion.div className="tl-tags" variants={itemV}>
      {tags.map((t, i) => (
        <span key={i} className="tl-tag">{t}</span>
      ))}
    </motion.div>
  )
}

function Group({ group }: { group: ResumeGroup }) {
  const heading = group.link ? (
    <a className="about-link" href={group.link} target="_blank" rel="noopener noreferrer">
      {group.heading}
    </a>
  ) : (
    <span>{group.heading}</span>
  )

  return (
    <motion.div className="tl-group" variants={itemV}>
      {group.time && <span className="tl-group-time">{group.time}</span>}
      <div className="tl-group-head">
        {group.logoImg && (
          <span className="tl-group-logo">
            <img src={group.logoImg} alt={group.heading || ''} loading="lazy" />
          </span>
        )}
        <div className="tl-group-title">
          {heading}
          {group.sub && <span className="tl-group-sub">{group.sub}</span>}
        </div>
      </div>
      {group.items && (
        <ul className="tl-points">
          {group.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      )}
      {group.links && (
        <div className="tl-logos">
          {group.links.map((l) => {
            const Icon = SOCIAL_ICONS[l.id as keyof typeof SOCIAL_ICONS]
            return (
              <a
                key={l.id}
                className="tl-logo"
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                title={l.label}
              >
                <Icon />
              </a>
            )
          })}
        </div>
      )}
    </motion.div>
  )
}

function Entry({ entry, index }: { entry: ResumeEntry; index: number }) {
  return (
    <motion.div
      className="tl-entry"
      data-point={POINT_ORDER[index]}
      variants={containerV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
    >
      <motion.span className="tl-dot" variants={itemV} aria-hidden="true" />
      <div className="tl-body">
        <motion.div className="tl-period" variants={itemV}>
          {entry.period}
        </motion.div>
        <motion.div className="tl-head" variants={itemV}>
          {entry.photo && (
            <figure className="tl-portrait">
              <img src={entry.photo} alt={entry.photoCaption || entry.place} loading="lazy" />
              {entry.photoCaption && <figcaption>{entry.photoCaption}</figcaption>}
            </figure>
          )}
          <div className="tl-head-text">
            <h3 className="tl-place">{entry.place}</h3>
            {entry.role && <div className="tl-role">{entry.role}</div>}
          </div>
        </motion.div>
        {entry.tags && <Tags tags={entry.tags} />}
        {entry.photos && <PhotoWall photos={entry.photos} />}
        {entry.collections && <Collections list={entry.collections} />}
        {entry.meter && <Meter meter={entry.meter} />}
        {entry.achievements && <Achievements list={entry.achievements} />}
        {entry.points && (
          <motion.ul className="tl-points" variants={itemV}>
            {entry.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </motion.ul>
        )}
        {entry.motto && (
          <motion.blockquote className="tl-motto" variants={itemV}>
            {entry.motto}
          </motion.blockquote>
        )}
        {entry.groups && entry.groups.map((g, i) => <Group key={i} group={g} />)}
      </div>
    </motion.div>
  )
}

export default function Resume({ lang }: { lang: 'en' | 'zh' }) {
  const data = RESUME[lang]
  return (
    <section className="resume" lang={lang}>
      <motion.h2
        className="resume-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {data.title}
      </motion.h2>
      <div className="timeline">
        {data.entries.map((e, i) => (
          <Entry key={i} entry={e} index={i} />
        ))}
      </div>
    </section>
  )
}
