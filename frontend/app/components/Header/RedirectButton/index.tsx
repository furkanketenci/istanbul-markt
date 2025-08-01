import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface IRedirectButton {
  title: string;
  href: string;
}

const RedirectButton: React.FC<IRedirectButton> = ({ title, href }) => {
  return (
    <Link href={href}>
      <Button
        className="
                        bg-transparent
                        hover:bg-transparent
                        text-[#000000]
                        shadow-none
                        h-[60px]
                        p-0
                        m-0
                        text-xs
                        "
      >
        {title}
      </Button>
    </Link>
  );
};

export default RedirectButton;
