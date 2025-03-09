import { LearningCard } from "./LearningCard";

interface ModuleListProps {
  title: string;
  description: string;
  text: string;
}

function LearningPathSection({
  moduleTitle,
  moduleList,
}: {
  moduleTitle: string;
  moduleList: ModuleListProps[];
}) {
  return (
    <section className="flex flex-col gap-y-8 text-primary">
      <h1 className="text-3xl font-bold">{moduleTitle}</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {moduleList.map((module) => (
          <LearningCard
            key={module.title}
            title={module.title}
            description={module.description}
            text={module.text}
          />
        ))}
      </div>
    </section>
  );
}

export default LearningPathSection;
