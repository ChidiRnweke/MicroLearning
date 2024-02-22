<script lang="ts">
    import Heading from "flowbite-svelte/Heading.svelte";
    export let title = "Data science";
</script>

<section class="pl-8 pr-8">
    <Heading tag="h2" class="text-left mt-8 mb-8">{title}</Heading>
    <div class="grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-2">
        <slot />
    </div>
</section>
