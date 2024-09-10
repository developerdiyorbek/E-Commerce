interface Props {
  title: string;
  description: string;
}

function PageHeader({ title, description }: Props) {
  return (
    <div className="pt-4">
      <h1 className="font-space-grotesk text-3xl font-bold max-md:text-2xl">
        {title}
      </h1>
      <p className="text-sm font-medium text-muted-foreground">{description}</p>
    </div>
  );
}

export default PageHeader;
