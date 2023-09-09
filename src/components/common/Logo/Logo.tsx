import Image from 'next/image';
import Link from 'next/link';

import LogoSrc from 'public/logo.png';

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image src={LogoSrc} alt='bee-smart-logo' height={55} width={186} />
    </Link>
  );
};

export default Logo;
