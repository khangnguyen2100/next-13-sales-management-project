import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Checkbox,
  Input,
  Option,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/joy';
import React, { Fragment } from 'react';

type OptionProps = {
  label: string;
  value: string;
};
type FilterProps = {
  title: string;
  type: 'text' | 'radio' | 'checkbox' | 'select';
  options?: OptionProps[];
};
type Props = {
  title: string;
  filters: FilterProps[];
  // eslint-disable-next-line no-unused-vars
  onFilterChange: (newProducts: any[]) => void;
};

const FilterItem = (props: FilterProps) => {
  const { title, type, options } = props;

  const renderInput = () => {
    if (type === 'text') {
      return <Input size='sm' placeholder='Tìm kiếm' />;
    }
    if (type === 'checkbox') {
      return (
        <>
          {options?.map((option, i) => (
            <Checkbox
              size='sm'
              value={option.value}
              label={option.label}
              key={i}
              className='m-2'
            />
          ))}
        </>
      );
    }
    if (type === 'radio') {
      return (
        <RadioGroup size='sm'>
          <>
            {options?.map((option, i) => (
              <Radio
                value={option.value}
                label={option.label}
                key={i}
                className='m-2'
              />
            ))}
          </>
        </RadioGroup>
      );
    }
    if (type === 'select') {
      return (
        <Select size='sm'>
          {options?.map((option, i) => (
            <Option value={option.value} key={i}>
              {option.label}
            </Option>
          ))}
        </Select>
      );
    }
  };
  return (
    <Accordion
      defaultExpanded={true}
      className='w-full overflow-hidden rounded-md shadow-[0_5px_15px_rgba(0,0,0,.1)]'
    >
      <AccordionSummary className='text-sm font-bold'>{title}</AccordionSummary>
      <AccordionDetails>{renderInput()}</AccordionDetails>
    </Accordion>
  );
};
const Filters = (props: Props) => {
  const { title = 'title', filters } = props;
  return (
    <div className='w-full max-w-[234px] shrink-0'>
      <h3 className='mb-6 block text-xl font-bold text-typo-1'>{title}</h3>
      <AccordionGroup disableDivider className='flex w-full flex-col gap-4'>
        {filters.map((filter, i) => {
          return (
            <Fragment key={i}>
              <FilterItem {...filter} />
            </Fragment>
          );
        })}
      </AccordionGroup>
    </div>
  );
};

export default Filters;
