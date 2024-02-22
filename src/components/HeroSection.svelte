<script lang="ts">
    import Heading from "flowbite-svelte/Heading.svelte";
    import P from "flowbite-svelte/P.svelte";
    import Button from "flowbite-svelte/Button.svelte";
    import Span from "flowbite-svelte/Span.svelte";
    import ArrowRightOutline from "flowbite-svelte-icons/ArrowRightOutline.svelte";
</script>

<section class="text-center header-bg pt-24">
    <Heading tag="h1" class="text-6xl pb-12 b-11 dark:text-dark-foreground"
        >Byte Learn</Heading
    >
    <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 text-center ">
        Learn a lot, <Span
            gradient
            class=" text-accent dark:text-dark-accent font-bold"
            >one byte at a time.</Span
        >
    </P>
    <Button
        href="/"
        class="bg-secondary dark:bg-dark-secondary hover:bg-accent hover:dark:bg-dark-accent mb-20"
    >
        Learn more
        <ArrowRightOutline />
    </Button>
</section>
