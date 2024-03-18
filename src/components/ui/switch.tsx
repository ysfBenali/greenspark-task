'use client';

import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <SwitchPrimitives.Root
      className={cn(
        'peer inline-flex h-[19px] w-10 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 ',
        'data-[state=checked]:bg-forest-green data-[state=unchecked]:bg-input ring-1 data-[state=checked]:ring-gray-300 data-[state=unchecked]:ring-ripple',
        className,
      )}
      {...props}
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          ' pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-1  data-[state=checked]:ring-forest-green ring-beige transition-transform data-[state=checked]:translate-x-5  data-[state=unchecked]:-translate-x-1',
          {
            'ring-4 ring-ripple data-[state=checked]:ring-ripple': isHovered,
          },
        )}
      />
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
