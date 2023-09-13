'use client';
import { useState } from 'react';

import Filters from '@/components/san-pham/Filters';
import ProductList from '@/components/san-pham/ProductList';
import { productsFake } from '@/mocks/products';

export type ProductProps = {
  id: string;
  category: string;
  brand: string;
  code: string;
  thumbnail: string;
  name: string;
  salePrice: string;
  costPrice: string;
  availableItem: string;
  description: string;
};

export default function Index() {
  const [products, setProducts] = useState<ProductProps[]>(productsFake);

  const handleFilterChange = (newProducts: ProductProps[]) => {
    setProducts(newProducts);
  };

  return (
    <div className='flex items-start gap-5'>
      <Filters
        title='Hàng hóa'
        filters={[
          {
            title: 'Loại hàng',
            type: 'checkbox',
            options: [
              {
                label: 'Hàng hóa',
                value: '1',
              },
              {
                label: 'Dịch vụ',
                value: '2',
              },
              {
                label: 'Combo - Đóng gói',
                value: '3',
              },
            ],
          },
          {
            title: 'Tồn kho',
            type: 'radio',
            options: [
              {
                label: 'Dưới định mức tồn',
                value: '1',
              },
              {
                label: 'Vượt định mức tồn',
                value: '2',
              },
              {
                label: 'Còn hàng trong kho',
                value: '3',
              },
              {
                label: 'Hết hàng trong kho',
                value: '4',
              },
            ],
          },
          {
            title: 'Thương hiệu',
            type: 'select',
            options: [
              {
                label: 'Indomie',
                value: '1',
              },
              {
                label: 'Monster Energy',
                value: '2',
              },
            ],
          },
        ]}
        onFilterChange={handleFilterChange}
      />
      <ProductList productsFake={products} />
    </div>
  );
}
