<script>
	import Header from '../Header.svelte';
    import { onMount, onDestroy } from 'svelte';
    import { basicSetup, EditorView } from 'codemirror';
    import { StreamLanguage } from '@codemirror/language';
    import { stex } from '@codemirror/legacy-modes/mode/stex';
	import { unifiedMergeView } from "@codemirror/merge";
    import {ayuLight} from 'thememirror';
    import { inlineSuggestion } from 'codemirror-extension-inline-suggestion';
    import { preferences } from "$lib/stores/store.js";


    let editor;
    let resumex = $preferences.resumex;

    function addinputnoenc(f,n,v) {
        var inp=document.createElement("input");
        inp.setAttribute("type","text");
        inp.setAttribute("name",n);
        inp.value =v;
        f.appendChild(inp);
    }

    function init_latex(code){
        let f = document.getElementById("form2-pre");
        let inp=document.createElement("textarea");
        inp.setAttribute("type","text");
        inp.setAttribute("name","filecontents[]");
        inp.textContent=code;
        f.appendChild(inp);
        addinputnoenc(f,"filename[]","document.tex");
        addinputnoenc(f,"return", "pdfjs");
    }

    const submitForm = () => {
        let f = document.getElementById("form2-pre");
        let inp = f.getElementsByTagName("textarea")[0];
        inp.textContent = editor ? editor.state.doc.toString() : resumex;
        f.submit();
    }

    const updateLatex = () => {
        editor.dispatch({
            changes: {from: 0, to: editor.state.doc.length, insert: 'New Test Text'}
        });
    }

    onMount(() => {
        editor = new EditorView({
            doc: resumex,
            extensions: [
                basicSetup,
                ayuLight,
                EditorView.lineWrapping,
                StreamLanguage.define(stex),
                unifiedMergeView({
                    original: resumex,
                    mergeControls: true,
                    gutter: true,
                    highlightChanges: true,
                    syntaxHighlightDeletions: true,
                }),
            ],
            parent: document.querySelector('#editor'),
        });
        init_latex(resumex);
        submitForm();
    });

    onDestroy(() => {
        if (editor) {
            editor.destroy();
        }
    });
</script>

<div class="dashboard">
    <div class="left-pane">
        <Header submitter={submitForm}/>
        <button on:click={updateLatex}/>
        <div class="editor-wrapper">
            <div id="editor"></div>
        </div>
    </div>
    <div id="pdf">
        <iframe id="pdf-canvas" title="pdf-canvas" name="pdf-canvas"></iframe>
        <form style="display:none" id="form2-pre" 
        name="form2-pre" enctype="multipart/form-data" 
        action="https://texlive.net/cgi-bin/latexcgi" method="post" target="pdf-canvas">
    </div>
</div>

<style>
    .dashboard {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }
    .editor-wrapper {
        display: flex;
        flex-direction: row;
        max-height: 90vh; /* Adjust this value as needed */
        overflow-y: auto;
    }
    #editor {
        width: 0;
        flex-grow: 1;
    }
    #pdf {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    #pdf-canvas {
        flex: 1;
    }
</style>