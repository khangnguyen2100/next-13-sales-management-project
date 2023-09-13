'use client';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { FaFileExport, FaFileImport } from 'react-icons/fa';
import { MdDeleteOutline, MdOutlineAdd, MdSearch } from 'react-icons/md';
import './style.css';

import { ProductProps } from '@/app/admin/(hang-hoa)/san-pham/page';
import { Button, ButtonGroup, IconButton, Input } from 'components/lib/joy';
import type {
  GridCellParams,
  GridColDef,
  GridRowSelectionModel,
} from 'components/lib/mui-x';
import { DataGrid, viVN } from 'components/lib/mui-x';

export default function ProductList({
  productsFake,
}: {
  productsFake: ProductProps[];
}) {
  const [productSelected, setProductSelected] = useState<GridRowSelectionModel>(
    [],
  );
  const [productData, setProductData] = useState<ProductProps[]>(productsFake);
  const [loading, setLoading] = useState(false);

  const handleEdit = (id: string) => {
    console.log('edit id:', id);
  };
  const handleDelete = (id: string) => {
    setLoading(true);
    setProductData(productData.filter(item => item.id !== id));
    setLoading(false);
  };
  const handleDeleteMulti = () => {
    setLoading(true);
    setProductData(
      productData.filter(item => !productSelected.includes(item.id)),
    );
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const columns: GridColDef[] = [
    {
      field: 'thumbnail',
      headerName: 'Thumbnail',
      width: 120,
      renderCell: (params: GridCellParams) => (
        <Image
          src={params.value as string}
          alt='thumbnail'
          width={70}
          height={70}
        />
      ),
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 250,
    },
    {
      field: 'salePrice',
      headerName: 'Sale Price',
      width: 190,
    },
    {
      field: 'costPrice',
      headerName: 'Cost Price',
      width: 190,
    },
    {
      field: 'availableItem',
      headerName: 'Available Item',
      width: 190,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params: GridCellParams) => (
        <div>
          <IconButton
            aria-label='edit'
            onClick={() => handleEdit(params.row.id)}
          >
            <AiOutlineEdit className='text-green-600' />
          </IconButton>
          <IconButton
            aria-label='delete'
            onClick={() => handleDelete(params.row.id)}
          >
            <MdDeleteOutline className='text-red-600' />
          </IconButton>
        </div>
      ),
    },
  ];
  return (
    <div className='container flex-1'>
      {/* search */}
      <div className='mb-3 flex items-center justify-between'>
        <Input
          className='w-1/3'
          placeholder='Tìm kiếm'
          startDecorator={<MdSearch />}
        />
        <ButtonGroup spacing='0.5rem' size='sm'>
          <Button
            variant='solid'
            color='primary'
            startDecorator={<MdOutlineAdd />}
          >
            Thêm mới
          </Button>
          <Button
            color='success'
            variant='outlined'
            startDecorator={<FaFileImport />}
          >
            Import
          </Button>
          <Button
            color='success'
            variant='outlined'
            startDecorator={<FaFileExport />}
          >
            Xuất file
          </Button>
        </ButtonGroup>
      </div>
      {/* table */}
      <div className='relative h-full w-full'>
        <DataGrid
          autoHeight
          loading={loading}
          localeText={viVN.components.MuiDataGrid.defaultProps.localeText}
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={newRowSelectionModel => {
            setProductSelected(newRowSelectionModel);
          }}
          rowSelectionModel={productSelected}
          rows={productData}
          columns={columns}
          disableColumnMenu
        />
        {productSelected.length > 0 && (
          <div className='absolute right-2 top-2'>
            <IconButton
              title='delete item selected'
              onClick={handleDeleteMulti}
            >
              <MdDeleteOutline size={24} className='text-red-600' />
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
}
