'use client';

import { forwardRef } from 'react';
import { useState } from 'react';
import { ProductData } from '@/app/page';
import ProductWidget from './productWidget';

import { cn } from '@/lib/utils';

interface ProductWidgetListProps extends React.HTMLAttributes<HTMLDivElement> {
  data: ProductData[];
}

const ProductWidgetList = forwardRef<HTMLDivElement, ProductWidgetListProps>(
  ({ className, children, data, ...props }, ref) => {
    const [productList, setProductList] = useState<ProductData[]>(data || []);

    const handleActiveProductToggle = (id: number) => {
      setProductList((prevState) => {
        return prevState.map((product) => {
          if (product?.id === id)
            return { ...product, active: !product?.active };
          else return { ...product, active: false };
        });
      });
    };

    const handleProfileLinkToggle = (id: number) => {
      setProductList((prevState) => {
        return prevState?.map((product) => {
          if (product.id === id) {
            return { ...product, linked: !product?.linked };
          }
          return product;
        });
      });
    };

    const handleWidgetColorChange = (id: number, color: string) => {
      setProductList((prevState) => {
        return prevState?.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              selectedColor: color as ProductData['selectedColor'],
            };
          }
          return product;
        });
      });
    };

    return (
      <div ref={ref} className={cn(className)} {...props}>
        {productList?.map(({ id, ...rest }) => {
          return (
            <ProductWidget
              key={id}
              data={{ id, ...rest }}
              onActiveProductToggle={handleActiveProductToggle}
              onProfileLinkToggle={handleProfileLinkToggle}
              onWidgetColorChange={handleWidgetColorChange}
            />
          );
        })}
      </div>
    );
  },
);

ProductWidgetList.displayName = 'ProductWidgetList';

export default ProductWidgetList;
