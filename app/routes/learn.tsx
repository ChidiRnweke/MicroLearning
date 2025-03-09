import { LearningCard } from "~/components/microlearning/home/LearningCard";
import type { Route } from "./+types/learn";

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

function HeroSection() {
  return (
    <header className="lg:py-20 text-center p-4 mb-8 bg-cover bg-[url('triangles.svg')]">
      <h1 className="lg:text-6xl text-4xl font-extrabold my-8">
        Micro Learning
      </h1>
      <p className="text-2xl">
        Welcome to Micro Learning! Learn a lot, in
        <span className="text-accent-foreground"> byte sized</span> chunks.
      </p>
    </header>
  );
}

function MachineLearningModules() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {machineLearningModuleList.map((module) => (
        <LearningCard
          key={module.title}
          title={module.title}
          description={module.description}
          text={module.text}
        />
      ))}
    </div>
  );
}

function PythonModules() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {pythonModuleList.map((module) => (
        <LearningCard
          key={module.title}
          title={module.title}
          description={module.description}
          text={module.text}
        />
      ))}
    </div>
  );
}

function WebDevelopmentModules() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {webDevelopmentModuleList.map((module) => (
        <LearningCard
          key={module.title}
          title={module.title}
          description={module.description}
          text={module.text}
        />
      ))}
    </div>
  );
}

export default function LearningModules() {
  return (
    <div>
      <HeroSection />
      <div className="flex flex-col gap-y-8">
        <section className="flex flex-col gap-y-8">
          <h1 className="text-3xl font-bold">Machine Learning</h1>
          <MachineLearningModules />
        </section>
        <section className="flex flex-col gap-y-8">
          <h1 className="text-3xl font-bold">Python</h1>
          <PythonModules />
        </section>
        <section className="flex flex-col gap-y-8">
          <h1 className="text-3xl font-bold">Web Development</h1>
          <WebDevelopmentModules />
        </section>
      </div>
    </div>
  );
}
