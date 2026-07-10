import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";

export function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<LucideProps>>)[
    name
  ];

  if (!IconComponent) return null;

  return <IconComponent className={className} />;
}
