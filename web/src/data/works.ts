// 作品集数据（双语）。4 大板块 → 点击展开作品详情。
// 纯数据驱动：增删板块 / 作品只改本文件，Works.tsx 仅负责渲染。
//
// 板块字段：
//   id        唯一标识（用于 framer layoutId 共享元素动画）
//   no        编号 '01'…'04'
//   title     板块标题
//   tagline   索引行右侧一句话
//   items[]   扁平作品列表：{ name, meta?, tags?, link? }
//             点击 item 弹出全屏详情，可补充可选媒体/文案字段：
//             { image?, video?, year?, desc? }（缺省时媒体用占位、简介回退 meta/标签）
//   groups[]  分组作品（与 items 二选一）：{ heading, items: string[] }
//   awards[]  奖项 chip（可选）
//   footer    底部技术/备注一行（可选）

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export const WORKS: Record<'zh' | 'en', WorksLang> = {
  zh: {
    title: 'Works',
    closeLabel: '返回',
    openLabel: '展开作品',
    hint: '继续下滑',
    awardsLabel: '获奖',
    visitLabel: '访问作品',
    detailPlaceholder: '你的作品介绍',
    phImageLabel: '图片 / 视频',
    phButtonLabel: '跳转按钮',
    countLabel: (n) => `${n} 件作品`,
    sections: [
      {
        id: 'data',
        no: '01',
        title: '数据分析项目',
        tagline: '阿里推荐算法 · 大创 · 挑战杯',
        items: [
          {
            name: '阿里移动推荐算法 · 数据分析',
            meta: '2026 · AUC 0.9465',
            tags: ['因果推断', 'XGBoost'],
            link: 'https://zhaochongbo.github.io/ali-recommend-dashboard/',
            slug: 'ali-recommend',
          },
          {
            name: '国家大学生创新创业项目',
            meta: 'AHP 层次分析 + 模糊综合评价',
            slug: 'innovation-project',
          },
          {
            name: '挑战杯 · 课外学术科技竞赛',
            meta: '北京市二等奖',
            slug: 'challenge-cup',
          },
        ],
        awards: ['挑战杯 北京市二等奖', '数据挖掘与商业智能 A+'],
      },
      {
        id: 'cases',
        no: '02',
        title: '商业分析案例',
        tagline: '德勤 · 立信 · 招商银行',
        items: [
          {
            name: '微软中国 Xbox 业务效益评估',
            meta: '德勤管理咨询',
            tags: ['SQL', '营销分析'],
            slug: 'xbox',
          },
          {
            name: '北汽 ARCFOX 营销结构分析',
            meta: '德勤管理咨询',
            tags: ['Tableau'],
            slug: 'arcofox',
          },
          {
            name: '信用卡客群 K-means 聚类',
            meta: '招商银行海口分行',
            slug: 'cmb-cluster',
          },
          {
            name: '国铁投资 / 中国昆仑 审计核查',
            meta: '立信会计师事务所',
            slug: 'audit-engagements',
          },
        ],
        footer: 'SQL · 数据清洗 · 比率分析 · 可视化交付',
      },
      {
        id: 'skills',
        no: '03',
        title: '技能栈',
        tagline: '从数据到决策',
        groups: [
          { heading: '编程与数据', items: ['SQL', 'Python', 'Excel'] },
          { heading: '机器学习', items: ['分类 / 聚类 / 特征工程', 'XGBoost / Logistic'] },
          { heading: '因果推断', items: ['PSM 倾向得分匹配', 'GEE 广义估计方程', 'Apriori 关联规则'] },
          { heading: '可视化与工具', items: ['Tableau', 'Power BI'] },
        ],
        footer: '雅思 6.5 · 会计 + 数据科学复合背景',
      },
      {
        id: 'life',
        no: '04',
        title: '兴趣与生活',
        tagline: '运动 · 阅读 · 游戏',
        items: [
          { name: '游泳 / 羽毛球 / 滑雪', meta: '运动' },
          { name: '历史 · 中国史', meta: '阅读' },
          { name: '游戏 · 王者荣耀 / 炉石传说', meta: '游戏' },
          { name: '中共党员 · 辩论队 · 骑行社', meta: '校园' },
        ],
      },
    ],
  },
  en: {
    title: 'Works',
    closeLabel: 'Back',
    openLabel: 'Explore',
    hint: 'Keep scrolling',
    awardsLabel: 'Awards',
    visitLabel: 'Visit site',
    detailPlaceholder: 'Your work description',
    phImageLabel: 'Image / Video',
    phButtonLabel: 'Link button',
    countLabel: (n) => `${n} works`,
    sections: [
      {
        id: 'data',
        no: '01',
        title: 'Data Projects',
        tagline: 'Ali RecSys · Innovation · Challenge Cup',
        items: [
          {
            name: 'Alibaba Mobile Recommendation · Data Analysis',
            meta: '2026 · AUC 0.9465',
            tags: ['Causal Inference', 'XGBoost'],
            link: 'https://zhaochongbo.github.io/ali-recommend-dashboard/',
            slug: 'ali-recommend',
          },
          {
            name: 'National Undergraduate Innovation Program',
            meta: 'AHP + Fuzzy Comprehensive Evaluation',
            slug: 'innovation-project',
          },
          {
            name: 'Challenge Cup Academic Competition',
            meta: 'Beijing Second Prize',
            slug: 'challenge-cup',
          },
        ],
        awards: ['Challenge Cup Beijing 2nd Prize', 'Data Mining & BI · A+'],
      },
      {
        id: 'cases',
        no: '02',
        title: 'Business Analytics Cases',
        tagline: 'Deloitte · BDO · CMB',
        items: [
          {
            name: 'Microsoft China Xbox Value Assessment',
            meta: 'Deloitte Consulting',
            tags: ['SQL', 'Marketing Analytics'],
            slug: 'xbox',
          },
          {
            name: 'BAIC ARCFOX Marketing Structure',
            meta: 'Deloitte Consulting',
            tags: ['Tableau'],
            slug: 'arcofox',
          },
          {
            name: 'Credit-Card Customer K-means Clustering',
            meta: 'CMB Haikou Branch',
            slug: 'cmb-cluster',
          },
          {
            name: 'China Railway Investment / CNPC Audit',
            meta: 'BDO China',
            slug: 'audit-engagements',
          },
        ],
        footer: 'SQL · Data cleaning · Ratio analysis · Dashboard delivery',
      },
      {
        id: 'skills',
        no: '03',
        title: 'Skill Stack',
        tagline: 'From data to decisions',
        groups: [
          { heading: 'Programming & Data', items: ['SQL', 'Python', 'Excel'] },
          { heading: 'Machine Learning', items: ['Classification / Clustering / Feature Engineering', 'XGBoost / Logistic'] },
          { heading: 'Causal Inference', items: ['PSM Propensity Score Matching', 'GEE Generalized Estimating Equations', 'Apriori Association Rules'] },
          { heading: 'Visualization & Tools', items: ['Tableau', 'Power BI'] },
        ],
        footer: 'IELTS 6.5 · Accounting + data science background',
      },
      {
        id: 'life',
        no: '04',
        title: 'Life & Interests',
        tagline: 'Sports · Reading · Games',
        items: [
          { name: 'Swimming / Badminton / Skiing', meta: 'Sports' },
          { name: 'History · Chinese History', meta: 'Reading' },
          { name: 'Gaming · Honor of Kings / Hearthstone', meta: 'Games' },
          { name: 'CPC Member · Debate · Cycling Club', meta: 'Campus' },
        ],
      },
    ],
  },
}

// 板块配图（横向画廊每张卡片左侧的整高封面）。放到 public/works/covers/ 下。
// 缺图时左栏用大编号渐变占位，放入图片后自动点亮。
export const SECTION_COVERS: Record<string, string> = {
  data: `${import.meta.env.BASE_URL}works/covers/data.svg`,
  cases: `${import.meta.env.BASE_URL}works/covers/cases.svg`,
  skills: `${import.meta.env.BASE_URL}works/covers/skills.svg`,
  life: `${import.meta.env.BASE_URL}works/covers/life.svg`,
}

// 统计一个板块的作品数（items 或 groups 求和），用于索引行 hover 显示
export function sectionCount(section: WorkSection): number {
  if (section.items) return section.items.length
  if (section.groups) return section.groups.reduce((n, g) => n + g.items.length, 0)
  return 0
}
