<script>
    import Card from "flowbite-svelte/Card.svelte";

    export let title = "Default Title";
    export let content = "Default content.";
    export let href = "/";
</script>

<Card
    {href}
    size="md"
    padding="none"
    class=" bg-background-alt dark:bg-dark-background-alt grid grid-rows-2 place-items-center pt-4 border-t-8 border-t-primary dark:border-t-dark-primary"
>
    <slot />

    <section class="grid grid-cols-1 place-items-center">
        <h3
            class="mb-2 font-bold tracking-tight text-center text-foreground dark:text-dark-foreground"
        >
            {title}
        </h3>
        <p
            class="mb-3 font-normal text-center text-subtle dark:text-dark-subtle"
        >
            {content}
        </p>
    </section>
</Card>
