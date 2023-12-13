import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import WorkProcessIcon1 from 'public/icons/WorkProcessIcon-1.svg';
import WorkProcessIcon2 from 'public/icons/WorkProcessIcon-2.svg';
import WorkProcessIcon3 from 'public/icons/WorkProcessIcon-3.svg';

import HeadingWithDot from '../common/HeadingWithDot';
import ButtonLink from '../common/ButtonLink';

type WorkProcessCard = {
  title: string;
  content: string;
  href: string;
  icon: ReactNode;
};
const WorkProcessCardList: WorkProcessCard[] = [
  {
    title: 'Sự Sáng Tạo',
    content:
      'Chúng tôi khuyến khích mọi ý kiến mới và luôn tìm kiếm cách tiếp cận sáng tạo để giải quyết thách thức và cung cấp giải pháp cho khách hàng.',
    href: '#!',
    icon: <i className='fa-solid fa-lightbulb-on'></i>,
  },
  {
    title: 'Giao Tiếp Cởi Mở',
    content:
      'Chúng tôi coi trọng sự giao tiếp hiệu quả và mở cửa giữa các bộ phận và thành viên, giúp mỗi người hiểu rõ mục tiêu chung và đóng góp của mình. ',
    href: '#!',
    icon: <i className='fa-sharp fa-solid fa-handshake'></i>,
  },
  {
    title: 'Tinh Thần Đồng Đội',
    content:
      'Tại BeeSmart, chúng tôi là một gia đình. Chúng tôi hỗ trợ và tôn trọng lẫn nhau, tạo ra một môi trường làm việc tích cực và đầy động lực. ',
    href: '#!',
    icon: <i className='fa-sharp fa-solid fa-people-group'></i>,
  },
  {
    title: 'Tận Tâm và Hiệu Quả',
    content:
      'Mỗi thành viên của chúng tôi cam kết đem lại chất lượng và tận tâm trong mọi công việc. Sự hiệu quả là chìa khóa giúp chúng tôi đạt được mục tiêu và vượt qua mọi thách thức. ',
    href: '#!',
    icon: <i className='fa-sharp fa-solid fa-heart-circle-bolt'></i>,
  },
  {
    title: 'Học Hỏi Liên Tục',
    content:
      'Chúng tôi không ngừng nỗ lực học hỏi và phát triển cá nhân, luôn theo đuổi sự hoàn thiện để duy trì vị thế dẫn đầu trong ngành công nghiệp. ',
    href: '#!',
    icon: <i className='fa-brands fa-leanpub'></i>,
  },
  {
    title: 'Linhh Hoạt và Đổi Mới',
    content:
      'Tính linh hoạt và khả năng thích ứng là những đặc điểm quan trọng của chúng tôi. Chúng tôi không ngần ngại đối mặt với thay đổi và đưa ra những ý tưởng mới để nâng cao sản phẩm và dịch vụ của mình. ',
    href: '#!',
    icon: <i className='fad fa-tachometer-alt-fastest'></i>,
  },
];
function WorkProcess() {
  return (
    <div className='mx-auto mb-24 flex max-w-large flex-col items-center justify-center gap-y-4 '>
      <HeadingWithDot variant='secondary' color='black' className='mb-4'>
        Châm ngôn làm việc
      </HeadingWithDot>
      <h2 className='mx-auto mb-10 max-w-[815px] text-center text-[36px] capitalize mdd:px-4 mdd:text-3xl mobile:text-2xl'>
        Chúng tôi hoạt động dựa trên các tiêu chí
      </h2>
      <div className='grid max-w-full grid-cols-12 gap-x-7 gap-y-16 mdd:gap-y-14 '>
        {WorkProcessCardList.map((item, index) => {
          const { title, content, href, icon } = item;
          return (
            <div
              className='relative col-span-4 flex flex-col gap-y-5 bg-gray-100 px-10 py-14 text-center mdd:col-span-12 mdd:px-8 mdd:py-12 mobile:px-4 mobile:py-8'
              key={index}
            >
              {/*Icons*/}
              <div className='flex-center absolute left-[50%] top-[-10%] h-[72px] w-[72px] translate-x-[-50%] translate-y-[-10%] rounded-full bg-primary text-4xl text-white'>
                {icon}
              </div>
              {/* Title */}
              <h3 className='text-2xl font-semibold'>{title}</h3>
              <p className='flex-1 text-lg'>{content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WorkProcess;
