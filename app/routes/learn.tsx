import type { Route } from "./+types/learn";
import HeroSection from "~/components/microlearning/home/herosection";
import LearningPathSection from "~/components/microlearning/home/learningPathSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Micro Learning" },
    {
      name: "description",
      content: "Welcome to Micro Learning! Learn a lot, in byte sized chunks.",
    },
  ];
}

const machineLearningModuleList = [
  {
    title: "Linear Regression",
    description: "Learn how to use Linear Regression",
    text: "Linear regression is a foundational algorithm in statistics and machine learning.",
  },
  {
    title: "Logistic Regression",
    description: "Learn how to use Logistic Regression",
    text: "Logistic regression is a classification algorithm.",
  },
  {
    title: "Decision Trees",
    description: "Learn how to use Decision Trees",
    text: "Decision trees are a popular algorithm for classification and regression.",
  },
];

const pythonModuleList = [
  {
    title: "Python Basics",
    description: "Learn the basics of Python",
    text: "Python is a popular programming language.",
  },
  {
    title: "Python Functions",
    description: "Learn how to use functions in Python",
    text: "Functions are a key concept in Python.",
  },
  {
    title: "Python Classes",
    description: "Learn how to use classes in Python",
    text: "Classes are a key concept in object-oriented programming.",
  },
];

const webDevelopmentModuleList = [
  {
    title: "HTML",
    description: "Learn how to use HTML",
    text: "HTML is a markup language for creating web pages.",
  },
  {
    title: "CSS",
    description: "Learn how to use CSS",
    text: "CSS is a styling language for web pages.",
  },
  {
    title: "JavaScript",
    description: "Learn how to use JavaScript",
    text: "JavaScript is a programming language for web development.",
  },
];

export default function LearningModules() {
  return (
    <div>
      <HeroSection />
      <div className="flex flex-col gap-y-8">
        <LearningPathSection
          moduleTitle="Machine Learning"
          moduleList={machineLearningModuleList}
        />
        <LearningPathSection
          moduleTitle="Python"
          moduleList={pythonModuleList}
        />
        <LearningPathSection
          moduleTitle="Web Development"
          moduleList={webDevelopmentModuleList}
        />
      </div>
    </div>
  );
}
