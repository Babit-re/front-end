/* 사용 예시
<Button color="gray" width="w-32" textSize="text-sm"> 취소하기 </Button>
<Button color="yellow" width="w-full" textSize="text-lg"> 등록하기 </Button>
*/

type ButtonColor = 'gray' | 'yellow';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  width?: string;
  textSize?: string;
  children: React.ReactNode;
}

const colorStyles = {
  gray: 'bg-gray hover:bg-gray-hover',
  yellow: 'bg-primary hover:bg-primary-hover',
};

const Button = ({
  color = 'yellow',
  width,
  textSize = 'text-base',
  children,
  className = '',
  ...props
}: ButtonProps) => {
  const buttonClass = [
    'inline-flex items-center justify-center rounded-lg',
    'px-4 py-2',
    'transition-colors duration-200 focus:outline-none',
    'cursor-pointer',
    colorStyles[color],
    width,
    textSize,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
