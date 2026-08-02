import { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import * as THREE from 'three'
import Scene from './scene/Scene'
import NoiseOverlay from './ui/NoiseOverlay'
import Resume from './ui/Resume'
import Works from './ui/Works'
import LoadingScreen from './ui/LoadingScreen'
import { useStore } from './store'

function Backdrop() {
  // 点击空白处收起详情
  const setActive = useStore((s) => s.setActive)
  return (
    <mesh position={[0, 0, -40]} onClick={() => setActive(null)}>
      <planeGeometry args={[600, 300]} />
      <meshBasicMaterial transparent opacity={0} depthWrite={false} />
    </mesh>
  )
}

type Lang = 'en' | 'zh'

const COPY = {
  en: {
    title: 'Zhao Chongbo',
    subtitle: 'Data-driven · Business Analysis · Long-termism',
    tags: ['Planner', 'Cautious', 'Pisces', 'QS50 MSc', '176cm'],
    stats: [
      { value: 'QS50', label: 'PolyU MSc' },
      { value: '985', label: 'MUC Bachelor' },
      { value: '176cm', label: 'Height' },
    ],
  },
  zh: {
    title: '赵崇铂',
    subtitle: '数据驱动 · 商业分析 · 长期主义',
    tags: ['计划型', '谨慎', '双鱼座', 'QS50 硕士', '176cm'],
    stats: [
      { value: 'QS50', label: '港理工硕士' },
      { value: '985', label: '民大本科' },
      { value: '176cm', label: '身高' },
    ],
  },
}

function Hero({ lang, cueOpacity }: { lang: Lang; cueOpacity: MotionValue<number> }) {
  const { title, subtitle, tags, stats } = COPY[lang]
  // ⚠️ 关键修复：用全局 scrollY 驱动淡出，绝不用元素位置偏移——
  //    useScroll(offset) 会因面板高度/位置变化导致加载瞬间就判定"已滚动"，透明度掉到 0.34，
  //    这正是封面文字长期"看不清"的根因。scrollY=0 时 opacity 恒为 1，绝对清晰。
  const { scrollY } = useScroll()
  const vh = typeof window !== 'undefined' ? window.innerHeight : 800
  const opacity = useTransform(scrollY, [0, vh * 0.55], [1, 0])
  // 视差：标题上升更快、字距随滚动拉开
  const titleY = useTransform(scrollY, [0, vh * 0.95], [0, -96])
  const titleSpacing = useTransform(scrollY, [0, vh * 0.95], ['0.01em', '0.42em'])
  return (
    <section className="hero">
      <motion.div
        className="about"
        lang={lang}
        style={{ opacity }}
      >
        {/* 入场动画放内层，避免其 fill 锁住 opacity 覆盖外层滚动 opacity */}
        <div className="about-intro">
          <motion.h1 className="about-title" style={{ y: titleY, letterSpacing: titleSpacing }}>
            {title}
          </motion.h1>
          {subtitle && <motion.p className="about-subtitle">{subtitle}</motion.p>}
          {tags.length > 0 && (
            <div className="about-tags">
              {tags.map((t, i) => (
                <motion.span key={i} className="about-tag">{t}</motion.span>
              ))}
            </div>
          )}
          {stats.length > 0 && (
            <div className="about-stats">
              {stats.map((s, i) => (
                <div key={i} className="about-stat">
                  <span className="about-stat-value">{s.value}</span>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
      <motion.div className="scroll-cue" style={{ opacity: cueOpacity }} aria-hidden="true">
        <span className="scroll-cue-label">{lang === 'en' ? 'SCROLL' : '向下滚动'}</span>
        <span className="scroll-cue-track">
          <span className="scroll-cue-dot" />
        </span>
      </motion.div>
    </section>
  )
}

function LangToggle({ lang, onToggle }: { lang: Lang; onToggle: () => void }) {
  return (
    <button className="lang-toggle" onClick={onToggle} aria-label="切换语言 / Switch language">
      {lang === 'en' ? '中文' : 'EN'}
    </button>
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>('zh')
  const { scrollY } = useScroll()
  // 作品区蒙层：以作品区顶部从视口底进入到视口中部的进度，驱动 3D 渐暗 + 模糊
  const worksRef = useRef(null)
  const { scrollYProgress: worksProgress } = useScroll({
    target: worksRef,
    offset: ['start end', 'start center'],
  })
  const fogBg = useTransform(
    worksProgress,
    [0, 1],
    ['rgba(8, 11, 18, 0)', 'rgba(8, 11, 18, 0.41)'] // 压暗减半（原 0.82）
  )
  const fogBlur = useTransform(worksProgress, [0, 1], ['blur(0px)', 'blur(10px)'])
  // 滚动渐暗：离开首屏后压暗 3D 场景，保证履历文字可读
  const scrimOpacity = useTransform(scrollY, [0, 520], [0, 0.4])
  // 首屏滚动提示随之淡出
  const cueOpacity = useTransform(scrollY, [0, 160], [1, 0])
  // 首屏底部渐变底色：开始滑动后淡出
  const heroGradientOpacity = useTransform(scrollY, [0, 240], [1, 0])
  // 磨砂右轨：进入履历区后淡入（首屏不磨砂）
  const vh = typeof window !== 'undefined' ? window.innerHeight : 800
  const railOpacity = useTransform(scrollY, [vh * 0.5, vh * 1.1], [0, 1])
  // 首屏装饰画框/角标：滚动后淡出
  const heroChromeOpacity = useTransform(scrollY, [0, 280], [1, 0])

  return (
    <>
      {/* 加载遮罩：模型全部加载完成前覆盖全屏，完成后淡出 */}
      <LoadingScreen />

      {/* 固定的 3D 背景 */}
      <div className="scene-bg">
        <Canvas
          shadows={{ type: THREE.PCFShadowMap }}
          dpr={[1, 1.5]}
          camera={{ position: [0, 5, 19], fov: 39, near: 0.1, far: 500 }}
          gl={{ antialias: false, stencil: false, depth: true, toneMapping: THREE.ACESFilmicToneMapping }}
        >
          <color attach="background" args={['#0a0e16']} />
          <Suspense fallback={null}>
            <Backdrop />
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* 滚动渐暗蒙层 */}
      <motion.div className="scrim" style={{ opacity: scrimOpacity }} aria-hidden="true" />

      {/* 作品区固定蒙层：仅压暗（减半），模糊先注释掉 */}
      <motion.div
        className="stage-fog"
        style={{ background: fogBg /* , backdropFilter: fogBlur, WebkitBackdropFilter: fogBlur */ }}
        aria-hidden="true"
      />

      {/* 固定磨砂右轨（进入履历区淡入） */}
      <motion.div className="glass-rail" style={{ opacity: railOpacity }} aria-hidden="true" />

      {/* 首屏底部渐变底色，滚动后淡出 —— 暂时注释查看效果 */}
      {/* <motion.div
        className="hero-gradient"
        style={{ opacity: heroGradientOpacity }}
        aria-hidden="true"
      /> */}

      {/* 中英切换暂时隐藏，默认中文 */}
      {/* <LangToggle lang={lang} onToggle={() => setLang((l) => (l === 'en' ? 'zh' : 'en'))} /> */}

      {/* 首屏装饰：发丝内框 + 四角定位标 + 角标元数据（随滚动淡出） */}
      <motion.div className="hero-chrome" style={{ opacity: heroChromeOpacity }} aria-hidden="true">
        <div className="hero-frame" />
        <span className="hero-mark tl">+</span>
        <span className="hero-mark tr">+</span>
        <span className="hero-mark bl">+</span>
        <span className="hero-mark br">+</span>
        <div className="hero-meta hm-tl">
          <span className="hm-name">Zhao Chongbo 赵崇铂</span>
        </div>
        <div className="hero-meta hm-tr">Resume — 2027</div>
        <div className="hero-meta hm-bl">财务 · 数据 · 产品</div>
        <div className="hero-meta hm-right">Based in Hong Kong</div>
      </motion.div>

      {/* 全屏胶片噪点蒙层（multiply 混合） */}
      <NoiseOverlay />

      {/* 可滚动内容 */}
      <main className="content">
        <Hero lang={lang} cueOpacity={cueOpacity} />
        <Resume lang={lang} />
        <Works lang={lang} innerRef={worksRef} />
      </main>
    </>
  )
}
