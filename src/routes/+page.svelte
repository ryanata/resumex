<script>
    import TemplateCard from "./TemplateCard.svelte";
    import imgLink from "./TemplateCard.svelte";
</script>

<svelte:head>
    <title>Resumex | AI Latex Resume Maker</title>
	<meta name="description" content="Create and modify your resumes with generative AI" />
</svelte:head>

<section class="centered-container">
    <h1>insert image here</h1>
    <p>Craft your latex resume with the power of generative AI 😁</p>
    <div class="templates-container">
        <TemplateCard imgLink="https://writelatex.s3.amazonaws.com/published_ver/30280.jpeg?X-Amz-Expires=14400&X-Amz-Date=20230916T061630Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20230916/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=8b90baaee69887502dbab6bec66239e18dfc3ee8aec37a540046792a664aec7d"/>
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
    </div>
</section>

<style>
    :root{
        background-color: #F9F8FD;
    }
    .centered-container {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .templates-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 30px;
    }
</style>