<script>
    import TemplateCard from "./TemplateCard.svelte";
    import imgLink from "$lib/images/";
    import title from "./TemplateCard.svelte";
    import logo from '$lib/images/logo.png';
</script>

<svelte:head>
    <title>Resumex | AI Latex Resume Maker</title>
	<meta name="description" content="Create and modify your resumes with generative AI" />
</svelte:head>

<section class="centered-container">
    <img class="logo" src={logo} alt="logo">
    <p>Craft your latex resume with the power of generative AI 📝</p>
    <div class="templates-container">
        <TemplateCard title="Blank"/>
        <TemplateCard title="Simple" imgLink="$lib/images/simple.jpeg"/>
        <TemplateCard title="Simple 2.0" imgLink="$lib/images/simple2.jpeg"/>
        <TemplateCard title="Professional" imgLink="$lib/images/professional.jpeg"/>
        <TemplateCard title="Clean" imgLink="$lib/images/clean.jpeg"/>
        <TemplateCard title="Colorful" imgLink="$lib/images/colorful.jpeg"/>
        <TemplateCard title="Minimalist" imgLink="$lib/images/minimalist.jpeg"/>
        <TemplateCard title="Bold" imgLink="$lib/images/bold.jpeg"/>
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
    h1 {
        font-size: 2rem;
        font-weight: 700;
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