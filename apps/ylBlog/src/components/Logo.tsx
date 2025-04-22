import clsx from 'clsx';

import { LogoIcon } from '@/components/Icons';

interface LogoProps {
  active?: boolean;
}

function Logo({ active = false }: LogoProps) {
  return (
    <div className={clsx('flex items-center gap-1.5 font-[1000] leading-none')}>
      <div
        className={clsx(
          'border-box border-accent-600 flex h-8 w-8 items-center justify-center rounded-md border-2',
          'sm:h-6 sm:w-6 sm:rounded-sm',
          active && 'bg-accent-600'
        )}
      >
        <LogoIcon
          className={clsx('h-5 w-5', 'sm:h-[18px] sm:w-[18px]', [
            active ? 'bg-accent-600 text-white' : 'text-accent-600',
          ])}
        />
      </div>
      <div className={clsx('-mt-1 hidden text-xl', 'sm:block')}>
        <span className={clsx('text-slate-900', 'dark:text-slate-200')}>
          Yulo
        </span>
        <span className={clsx('text-accent-600', 'dark:text-accent-500')}>
          Han
        </span>
      </div>
    </div>
  );
}

export default Logo;
