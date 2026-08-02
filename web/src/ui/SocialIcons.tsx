import type { SVGProps } from 'react'

// 简化的单色平台图标（currentColor），契合深色画面。
// 如需官方多彩 logo，替换对应 path 即可。

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  // GitHub Octocat 轮廓
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.04 11.04 0 0 1 2.88-.39c.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  )
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  // 信封
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="M3 7l8.2 5.6a1.8 1.8 0 0 0 1.6 0L21 7" />
    </svg>
  )
}

export function WechatIcon(props: SVGProps<SVGSVGElement>) {
  // 微信双气泡
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M13.5 4.5C8.8 4.5 5 7.6 5 11.4c0 2.1 1.2 4 3 5.2l-.7 2.4 2.6-1.4c.8.2 1.7.4 2.6.4.6 0 1.1-.04 1.7-.13" />
      <path d="M14.4 14.3c3.4-.6 5.9-3.2 5.9-6.5 0-3.6-3.3-6.5-7.4-6.5s-7.4 2.9-7.4 6.5c0 1 .3 2 .8 2.8" />
      <circle cx="7.6" cy="9.6" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="11.1" cy="9.6" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export const SOCIAL_ICONS = {
  github: GithubIcon,
  mail: MailIcon,
  wechat: WechatIcon,
}
