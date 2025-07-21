interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow">
      <div className="mb-4 grid h-12 w-12 place-content-center rounded-lg bg-black p-2.5 text-left text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h5 className="mb-2 text-xl font-semibold text-gray-900">{title}</h5>
      <div className="font-normal text-gray-500">{children}</div>
    </div>
  );
}

export default FeatureCard;
