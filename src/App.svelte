<script lang="ts">
  import "./app.css";
  import CardGrid from "./components/CardGrid.svelte";
  import HeroSection from "./components/HeroSection.svelte";
  import Navigation from "./components/Navigation.svelte";
  import LearningCard from "./components/LearningCard.svelte";

  import BrainOutline from "flowbite-svelte-icons/BrainOutline.svelte";
  import DnaOutline from "flowbite-svelte-icons/DnaOutline.svelte";
  import ChartLineUpOutline from "flowbite-svelte-icons/ChartLineUpOutline.svelte";
  import MagicWandOutline from "flowbite-svelte-icons/MagicWandOutline.svelte";

  const learningCards = [
    {
      title: "Introduction to sci-kit learn",
      content: "Making hard things easy",
      icon: BrainOutline,
    },
    {
      title: "Linear regression",
      content: "The gateway to machine learning.",
      icon: ChartLineUpOutline,
    },
    {
      title: "Genetic algorithms",
      content: "Dear reader, this text is still cooking. Check in later.",
      icon: DnaOutline,
    },
    {
      title: "Neural networks",
      content: "Beyond the magic",
      icon: MagicWandOutline,
    },
  ];
</script>

<header id="header" class=" bg-background-alt dark:bg-dark-background-alt">
  <Navigation></Navigation>
  <HeroSection></HeroSection>
</header>

<main class="pl-4 pr-4 lg:ml-32 lg:mr-32 md:ml-20 md:mr-20 mb-12">
  <CardGrid>
    {#each learningCards as { title, content, icon }}
      <LearningCard {title} {content}>
        <svelte:component
          this={icon}
          class="w-12 h-12 text-foreground dark:text-dark-foreground"
        />
      </LearningCard>
    {/each}
  </CardGrid>

  <CardGrid title="Functional programming">
    <LearningCard></LearningCard>
    <LearningCard></LearningCard>
    <LearningCard></LearningCard>
    <LearningCard></LearningCard>
  </CardGrid>

  <CardGrid title="Python">
    <LearningCard></LearningCard>
    <LearningCard></LearningCard>
    <LearningCard></LearningCard>
    <LearningCard></LearningCard>
    <LearningCard></LearningCard>
    <LearningCard></LearningCard>
    <LearningCard></LearningCard>
    <LearningCard></LearningCard>
    <LearningCard></LearningCard>
    <LearningCard></LearningCard>
    <LearningCard></LearningCard>
    <LearningCard></LearningCard>
  </CardGrid>
</main>
