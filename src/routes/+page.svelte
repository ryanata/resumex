<script>
    import TemplateCard from "./TemplateCard.svelte";
    import logo from '$lib/images/logo.png';
    import { templates } from '$lib/index.js'
    import { preferences } from "$lib/stores/store.js";
    import { goto } from '$app/navigation';
    import bold from '$lib/images/bold.jpg';
    import clean from '$lib/images/clean.jpeg';
    import colorful from '$lib/images/colorful.jpeg';
    import minimalist from '$lib/images/minimalist.jpeg';
    import professional from '$lib/images/professional.jpg';
    import simple from '$lib/images/simple.jpeg';
    import simple2 from '$lib/images/simple2.jpeg';

    const saveTemplate = (template) => {
        preferences.set({resumex: templates[template]});
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

        <TemplateCard title="Simple" imgLink={simple} handler={() => saveTemplate("simple")}/>
        <TemplateCard title="Simple 2.0" imgLink={simple2} handler={() => saveTemplate("simple2")}/>
        <TemplateCard title="Columns" imgLink={professional} handler={() => saveTemplate("professional")}/>
        <TemplateCard title="Clean" imgLink={clean} handler={() => saveTemplate("clean")}/>
        <TemplateCard title="Colorful" imgLink={colorful} handler={() => saveTemplate("colorful")}/>
        <TemplateCard title="Minimalist" imgLink={minimalist} handler={() => saveTemplate("minimalist")}/>
        <TemplateCard title="Bold" imgLink={bold} handler={() => saveTemplate("bold")}/>
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