<script>
	import Header from './Header.svelte';
    import { onMount, onDestroy } from 'svelte';
    import { basicSetup, EditorView } from 'codemirror';
    import { StreamLanguage } from '@codemirror/language';
    import { stex } from '@codemirror/legacy-modes/mode/stex';
    import {ayuLight} from 'thememirror';
    import { inlineSuggestion } from 'codemirror-extension-inline-suggestion';

    let editor;
    let initialText = 'console.log("hello, world")';

    const suggestLatex = async (state) => {
        let idxx = state.selection.ranges[0].from;
        let leftChunk =state.doc.toString().slice(0, idxx);
        let rightChunk = state.doc.toString().slice(idxx);
        console.log(leftChunk);
        console.log(rightChunk);
        return "hello this is a test\nthis is a new line"
    }

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
        inp.textContent = editor.state.doc.toString();
        f.submit();
    }

    onMount(() => {
        editor = new EditorView({
            doc: initialText,
            extensions: [
                basicSetup,
                ayuLight,
                StreamLanguage.define(stex),
                inlineSuggestion({
                    fetchFn: suggestLatex,
                    delay: 3000
                })
            ],
            parent: document.querySelector('#editor'),
        });
        init_latex(initialText);
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