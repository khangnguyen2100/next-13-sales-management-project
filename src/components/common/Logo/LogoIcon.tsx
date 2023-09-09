import Image from 'next/image';
import Link from 'next/link';

import LogoSrc from 'public/logo-icon.png';

const LogoIcon = () => {
  return (
    <Link href={'/'}>
      <Image src={LogoSrc} alt='bee-smart-logo' height={50} width={50} />
    </Link>
  );
};

export default LogoIcon;
