interface ExampleWrapperProps {
  title: string;
  children: React.ReactNode;
}

export function ExampleWrapper({ title, children }: ExampleWrapperProps) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
