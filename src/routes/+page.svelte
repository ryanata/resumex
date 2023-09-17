<script>
    import TemplateCard from "./TemplateCard.svelte";
    import logo from '$lib/images/logo.png';
    import { templates } from '$lib/index.js'
    import { preferences } from "$lib/stores/store.js";
    import { goto } from '$app/navigation';

    const saveTemplate = (template) => {
        preferences.set('resumex', templates[template]);
        goto('/resume-dashboard/resume');
    }
</script>

<svelte:head>
    <title>Resumex | AI Latex Resume Maker</title>
	<meta name="description" content="Create and modify your resumes with generative AI" />
</svelte:head>

<section class="centered-container">
    <img class="logo" src={logo} alt="logo">
    <p>Craft your latex resume with the power of generative AI 📝</p>
    <div class="templates-container">
        <TemplateCard handler={() => saveTemplate("blank")} title="Blank"/>
        <TemplateCard title="Simple" imgLink="https://writelatex.s3.amazonaws.com/published_ver/19515.jpeg?X-Amz-Expires=14400&X-Amz-Date=20230916T062010Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20230916/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=b69afc6951c10e40c4aabc57f6e0c478f8312a183b236e1d8a60bb1f420efdae"/>
        <TemplateCard title="Basic" imgLink="https://writelatex.s3.amazonaws.com/published_ver/29516.jpeg?X-Amz-Expires=14400&X-Amz-Date=20230916T061201Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20230916/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=e5945a1a49e52e49c46c0bd166725b4087467cce053d3b636783525373bfcbd2"/>
        <TemplateCard title="Columns" imgLink="https://writelatex.s3.amazonaws.com/published_ver/8420.jpeg?X-Amz-Expires=14400&X-Amz-Date=20230916T061604Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20230916/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=a8100eefda10751678aa29799ddac4fbe0d26446860d9e47a9bd01a186d805c2"/>
        <TemplateCard title="Clean" imgLink="https://writelatex.s3.amazonaws.com/published_ver/17789.jpeg?X-Amz-Expires=14400&X-Amz-Date=20230916T061350Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20230916/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=d9829f83162c6042ad9bbd899427b7f0faa5e455c96783c76123969d0cd03ebe"/>
        <TemplateCard title="Modern" imgLink="https://writelatex.s3.amazonaws.com/published_ver/30280.jpeg?X-Amz-Expires=14400&X-Amz-Date=20230916T061630Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20230916/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=8b90baaee69887502dbab6bec66239e18dfc3ee8aec37a540046792a664aec7d"/>
        <TemplateCard title="Simple 2.0" imgLink="https://writelatex.s3.amazonaws.com/published_ver/21314.jpeg?X-Amz-Expires=14400&X-Amz-Date=20230916T061401Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20230916/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=25fff0057113da470b9b44f327902e43d95458edb4f793c4343ff7b11c99dbba"/>
        <TemplateCard title="Modular" imgLink="https://writelatex.s3.amazonaws.com/published_ver/22585.jpeg?X-Amz-Expires=14400&X-Amz-Date=20230916T080803Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20230916/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=f4ed0a0151d3800c69f6799af748c7d4dc296686086159c4592e224d339bd693"/>
    </div>
</section>

<style>
    :root{
        background-color: #f7f7f9;
        font-family: 'Inclusive Sans', sans-serif;
    }
    .logo{
        width: 240px;
        margin-top: 20px;
    }
    p {
        font-size: 1.2rem;
        font-weight: 400;
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