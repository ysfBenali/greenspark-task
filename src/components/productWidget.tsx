'use client';

import { forwardRef } from 'react';
import Image from 'next/image';
import { ProductData } from '@/app/page';
import { Checkbox } from './ui/checkbox';
import { Switch } from './ui/switch';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';

interface ProductWidgetProps extends React.HTMLAttributes<HTMLDivElement> {
  data: ProductData;
  onActiveProductToggle: (id: number) => void;
  onProfileLinkToggle: (id: number) => void;
  onWidgetColorChange: (id: number, color: string) => void;
}

const colorsMapping: { [key: string]: string } = {
  blue: '#2E3A8C',
  green: '#3B755F',
  white: '#FFFF',
  beige: '#F2EBDB',
  black: '#212121',
};

const measurementUnits: {
  [key: string]: string;
} = {
  'plastic bottles': 'plastic bottles',
  trees: 'trees',
  carbon: 'kgs of carbon',
};

const ProductWidget = forwardRef<HTMLDivElement, ProductWidgetProps>(
  (
    {
      className,
      children,
      data,
      onActiveProductToggle,
      onProfileLinkToggle,
      onWidgetColorChange,
      ...props
    },
    ref,
  ) => {
    const { id, amount, type, active, selectedColor, action, linked } = data;

    return (
      <div
        ref={ref}
        className={cn('flex flex-col gap-y-4 h-[167px] w-[221px]', className)}
        {...props}
      >
        <div
          className={cn('flex items-center space-x-2 rounded-md p-3')}
          style={{
            backgroundColor: colorsMapping[selectedColor],
          }}
        >
          {['white', 'beige'].includes(selectedColor) ? (
            <Image
              src="/assets/icons/logo-green.svg"
              alt="green-logo"
              width="39"
              height="45"
            />
          ) : (
            <Image
              src="/assets/icons/logo-white.svg"
              alt="white-logo"
              width="39"
              height="45"
            />
          )}
          <div
            className={cn('flex-1 space-y-1 text-white', {
              'text-forest-green': ['white', 'beige'].includes(selectedColor),
            })}
          >
            <p className="text-[12.41px] leading-4 font-normal">{`This product ${action}`}</p>
            <p className="text-lg leading-5">
              {`${amount} ${measurementUnits[type]}`}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center text-forest-green capitalize">
          <div className="flex gap-x-[1px]">
            <label
              className="text-sm leading-[17px] font-normal cursor-pointer"
              htmlFor={`public-profile${id}`}
            >
              link to public profile
            </label>
            <TooltipProvider>
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                  <Image
                    className="self-start cursor-pointer"
                    src="/assets/icons/info-outline.svg"
                    alt="info-outline"
                    width="12"
                    height="12"
                  />
                </TooltipTrigger>
                <TooltipContent className="text-center py-5 text-shadow-slate w-[248px] leading-[17px]">
                  <p className="mb-4 font-normal text-sm normal-case">
                    This widget links directly to your public profile so that
                    you can easily share your impact with your customers. Turn
                    it off here if you do not want the badge to link to it.
                  </p>
                  <a
                    className="text-forest-green font-bold cursor-pointer"
                    href="#"
                    target="_blank"
                  >
                    view public profile
                  </a>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Checkbox
            id={`public-profile${id}`}
            checked={linked}
            onClick={() => onProfileLinkToggle(id)}
          />
        </div>

        <div className="flex justify-between items-center text-forest-green capitalize">
          <label className="text-sm leading-[17px] font-normal">
            badge color
          </label>
          <div className="flex justify-between w-24">
            {Object.keys(colorsMapping)?.map((color) => {
              return (
                <button
                  key={color}
                  className={cn('w-4 h-4 hover:opacity-80 ', {
                    'border-2 border-gray-400': selectedColor === color,
                  })}
                  style={{ backgroundColor: colorsMapping[color] || '#FFFF' }}
                  onClick={() => onWidgetColorChange(id, color)}
                />
              );
            })}
          </div>
        </div>

        <div className="flex justify-between items-center text-forest-green capitalize">
          <label
            className="text-sm leading-[17px] font-normal cursor-pointer"
            htmlFor={`activate-badge${id}`}
          >
            activate badge
          </label>
          <Switch
            id={`activate-badge${id}`}
            checked={active}
            onCheckedChange={() => onActiveProductToggle(id)}
          />
        </div>
      </div>
    );
  },
);

ProductWidget.displayName = 'ProductWidget';

export default ProductWidget;
