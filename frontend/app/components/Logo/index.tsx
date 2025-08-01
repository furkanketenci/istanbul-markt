import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image src="/logo.svg" width={132} height={20} alt="logo" />
    </Link>
  );
};
export default Logo;
