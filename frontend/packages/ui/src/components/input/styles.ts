import classNames from 'classnames'

import type { InputWidth } from './types'

const InputWidthClassNames: Record<InputWidth, string> = {
  default: 'tek-min-w-80',
  full: 'tek-w-full'
}

export const InputClassNames = ({
  width = 'default'
}: { width?: InputWidth } = {}): string =>
  classNames(
    InputWidthClassNames[width],
    'tek-bg-slate-50',
    'tek-border tek-border-slate-300',
    'tek-text-sm tek-text-slate-900',
    'tek-placeholder-slate-500',
    'tek-px-4 tek-py-4',
    'tek-rounded-xl',
    'enabled:focus:tek-outline-none enabled:focus:tek-ring-2 enabled:focus:tek-ring-slate-200',
    'disabled:tek-user-select-none disabled:tek-cursor-not-allowed',
    'disabled:tek-opacity-50'
  )
