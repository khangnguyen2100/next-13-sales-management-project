'use client';
import React, { useState, useEffect } from 'react';
import { MdExpandMore } from 'react-icons/md';
import clsx from 'clsx';

import { Accordion, AccordionDetails, AccordionSummary } from 'components/Mui';
type Category = {
  id: string;
  label: string;
};
type Question = {
  id: string;
  categoryId: string;
  title: string;
  answer: string;
};

const categories: Category[] = [
  {
    id: '001',
    label: 'Main Questions',
  },
  {
    id: '002',
    label: 'Common Queries',
  },
  {
    id: '003',
    label: 'General Questions',
  },
  {
    id: '004',
    label: 'Legal information',
  },
];
const questions: Question[] = [
  {
    id: '01',
    categoryId: '001',
    title: 'How does our pricing work?',
    answer:
      'Objectively innovated empowered manufactured products where as parallel holisticly predominat extensible testing procedures reliable supply chains dramatically engage top-line web services vis-a-vis cutting-edge deliverables.',
  },
  {
    id: '02',
    categoryId: '001',
    title: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, PayPal, and bank transfers. Please contact us if you have any questions about payment options.',
  },
  {
    id: '03',
    categoryId: '001',
    title: 'Do you offer discounts for bulk orders?',
    answer:
      'Yes, we offer discounts for bulk orders. Please contact us for more information about our bulk pricing options.',
  },
  {
    id: '04',
    categoryId: '002',
    title: 'How do I track my order?',
    answer:
      'You can track your order by logging into your account and viewing your order history. You will also receive email updates with tracking information as your order is processed and shipped.',
  },
  {
    id: '05',
    categoryId: '002',
    title: 'What is your return policy?',
    answer:
      'We offer a 30-day return policy for most products. Please contact us if you have any questions about our return policy or to initiate a return.',
  },
  {
    id: '06',
    categoryId: '002',
    title: 'How do I cancel my order?',
    answer:
      'You can cancel your order by logging into your account and viewing your order history. If your order has not yet been processed, you will be able to cancel it from there. If your order has already been processed, please contact us to initiate a return.',
  },
  {
    id: '07',
    categoryId: '003',
    title: 'What is your shipping policy?',
    answer:
      'We offer free shipping on all orders over $50. For orders under $50, shipping rates will vary depending on the size and weight of the package. Please contact us if you have any questions about our shipping policy.',
  },
  {
    id: '08',
    categoryId: '003',
    title: 'How long will it take to receive my order?',
    answer:
      'Delivery times will vary depending on your location and the shipping method you choose. Please refer to our shipping policy for more information about delivery times.',
  },
  {
    id: '09',
    categoryId: '003',
    title: 'Do you ship internationally?',
    answer:
      'Yes, we ship internationally. Please contact us for more information about international shipping options and rates.',
  },
  {
    id: '10',
    categoryId: '004',
    title: 'What is your privacy policy?',
    answer:
      'We take your privacy seriously and are committed to protecting your personal information. Please refer to our privacy policy for more information about how we collect, use, and protect your personal information.',
  },
];

const FaqMainSection = () => {
  const [categorySelected, setCategorySelected] = useState<string>(
    categories[0].id,
  );
  const [questionsByCategory, setQuestionsByCategory] = useState<Question[]>(
    [],
  );

  const handleClickCategory = (id: string) => {
    setCategorySelected(id);
  };

  useEffect(() => {
    const filterQuestion = questions.filter(
      item => item.categoryId === categorySelected,
    );
    setQuestionsByCategory(filterQuestion);
  }, [categorySelected]);
  return (
    <div className='container my-24 flex items-start gap-12 lgd:flex-col'>
      {/* category */}
      <div className='w-full bg-section-5 px-9 py-12 lg:max-w-[359px] lgd:px-4 lgd:py-6'>
        <h2 className='mb-6 text-[25px] text-typo-1'>Categories</h2>
        {/* list */}
        <div className='flex w-full flex-wrap gap-3 lg:flex-col'>
          {categories.map((category, i) => {
            return (
              <h3
                className={clsx(
                  'transition-md w-full cursor-pointer p-3 pl-4 text-xl text-typo-1 hover:bg-primary hover:text-white lgd:w-max',
                  category.id === categorySelected && 'bg-primary text-white',
                )}
                key={i}
                onClick={() => handleClickCategory(category.id)}
              >
                {category.label}
              </h3>
            );
          })}
        </div>
      </div>
      {/* question by category */}
      <div className='flex flex-1 flex-col gap-8'>
        {questionsByCategory.map(question => {
          return (
            <Accordion
              key={question.id}
              classes={{
                root: 'py-[12px] px-[13px] border-[#E3E3E3] border shadow-none before:h-0',
                expanded: '!m-0',
              }}
            >
              <AccordionSummary
                expandIcon={<MdExpandMore size={30} />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <h3 className='text-xl font-black text-typo-1'>
                  {question.title}
                </h3>
              </AccordionSummary>
              <AccordionDetails>
                <p className='text-lg text-typo-3'>{question.answer}</p>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default FaqMainSection;
