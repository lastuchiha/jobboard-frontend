type TitleProps = {
  children: string;
};

export const Title = ({ children }: TitleProps) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0">
      {children}
    </h2>
  );
};
