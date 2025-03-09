import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "app/components/ui/card";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface LearningCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  text: React.ReactNode;
}

function LearningCard({
  title,
  description,
  icon,
  text,
}: React.PropsWithChildren<LearningCardProps>) {
  const link = `/${title.toLowerCase().replace(" ", "-")}`;
  return (
    <Card>
      <CardHeader className="flex justify-between flex-row">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <a href={link} className="text-primary">
          <ArrowTopRightOnSquareIcon className="w-6 h-6" />
        </a>
      </CardHeader>
      <CardContent>{text}</CardContent>
    </Card>
  );
}

export { LearningCard };
