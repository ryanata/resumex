// place files you want to import through the `$lib` alias in this folder.
export const templates = {
    blank: `% LaTeX Resume Template

% Document Class: Use the 'article' class for a simple resume.
\\documentclass{article}

% Packages: Include necessary packages for formatting and content.
% Package for adjusting page margins
% Encoding of input text
% Font encoding
% Customized lists
% Customizing title
% Custom headers and footers

% Page Style: Set page style to 'fancy' for customized headers and footers.
% Define header content

% Title: Customize the title formatting

% Document Content: Begin the document
\\begin{document}
\\begin{center}
    \\Huge \\textbf{Blank}
\\end{center}
% Title: Print the title section

% Section: Education
% Use 'itemize' or 'description' for listing education details

% Section: Experience
% Use 'itemize' or 'description' for listing work experience

% Section: Skills
% Use 'itemize' or 'description' for listing skills

% Section: Projects
% Use 'itemize' or 'description' for listing projects

% Section: Awards and Honors
% Use 'itemize' or 'description' for listing awards and honors

% End the document
\\end{document}`,

bold: `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% LaTeX Template: Curriculum Vitae
%
% Source: http://www.howtotex.com/
% Feel free to distribute this template, but please keep the
% referal to HowToTeX.com.
% Date: July 2011
% 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% How to use writeLaTeX: 
%
% You edit the source code here on the left, and the preview on the
% right shows you the result within a few seconds.
%
% Bookmark this page and share the URL with your co-authors. They can
% edit at the same time!
%
% You can upload figures, bibliographies, custom classes and
% styles using the files menu.
%
% If you're new to LaTeX, the wikibook is a great place to start:
% http://en.wikibooks.org/wiki/LaTeX
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\\documentclass[paper=a4,fontsize=11pt]{scrartcl} % KOMA-article class
							
\\usepackage[english]{babel}
\\usepackage[utf8x]{inputenc}
\\usepackage[protrusion=true,expansion=true]{microtype}
\\usepackage{amsmath,amsfonts,amsthm}     % Math packages
\\usepackage{graphicx}                    % Enable pdflatex
\\usepackage[svgnames]{xcolor}            % Colors by their 'svgnames'
\\usepackage{geometry}
	\\textheight=700px                    % Saving trees ;-)
\\usepackage{url}

\\frenchspacing              % Better looking spacings after periods
\\pagestyle{empty}           % No pagenumbers/headers/footers

%%% Custom sectioning (sectsty package)
%%% ------------------------------------------------------------
\\usepackage{sectsty}

\\sectionfont{%			            % Change font of \\section command
	\\usefont{OT1}{phv}{b}{n}%		% bch-b-n: CharterBT-Bold font
	\\sectionrule{0pt}{0pt}{-5pt}{3pt}}

%%% Macros
%%% ------------------------------------------------------------
\\newlength{\\spacebox}
\\settowidth{\\spacebox}{8888888888}			% Box to align text
\\newcommand{\\sepspace}{\\vspace*{1em}}		% Vertical space macro

\\newcommand{\\MyName}[1]{ % Name
		\\Huge \\usefont{OT1}{phv}{b}{n} \\hfill #1
		\\par \\normalsize \\normalfont}
		
\\newcommand{\\MySlogan}[1]{ % Slogan (optional)
		\\large \\usefont{OT1}{phv}{m}{n}\\hfill \\textit{#1}
		\\par \\normalsize \\normalfont}

\\newcommand{\\NewPart}[1]{\\section*{\\uppercase{#1}}}

\\newcommand{\\PersonalEntry}[2]{
		\\noindent\\hangindent=2em\\hangafter=0 % Indentation
		\\parbox{\\spacebox}{        % Box to align text
		\\textit{#1}}		       % Entry name (birth, address, etc.)
		\\hspace{1.5em} #2 \\par}    % Entry value

\\newcommand{\\SkillsEntry}[2]{      % Same as \\PersonalEntry
		\\noindent\\hangindent=2em\\hangafter=0 % Indentation
		\\parbox{\\spacebox}{        % Box to align text
		\\textit{#1}}			   % Entry name (birth, address, etc.)
		\\hspace{1.5em} #2 \\par}    % Entry value	
		
\\newcommand{\\EducationEntry}[4]{
		\\noindent \\textbf{#1} \\hfill      % Study
		\\colorbox{Black}{%
			\\parbox{6em}{%
			\\hfill\\color{White}#2}} \\par  % Duration
		\\noindent \\textit{#3} \\par        % School
		\\noindent\\hangindent=2em\\hangafter=0 \\small #4 % Description
		\\normalsize \\par}

\\newcommand{\\WorkEntry}[4]{				  % Same as \\EducationEntry
		\\noindent \\textbf{#1} \\hfill      % Jobname
		\\colorbox{Black}{\\color{White}#2} \\par  % Duration
		\\noindent \\textit{#3} \\par              % Company
		\\noindent\\hangindent=2em\\hangafter=0 \\small #4 % Description
		\\normalsize \\par}

%%% Begin Document
%%% ------------------------------------------------------------
\\begin{document}

\\MyName{Alejandro Delgado}
\\MySlogan{Résumé}

\\sepspace

%%% Personal details
%%% ------------------------------------------------------------
\\NewPart{Personal details}{}

\\PersonalEntry{Address}{Street Alfa Centauro 152, Surquillo-Lima}
\\PersonalEntry{Phone}{(+051) 985946415}
\\PersonalEntry{Mail}{\\url{adelgadop@outlook.com}}

%%% Education
%%% ------------------------------------------------------------
\\NewPart{Education}{}

\\EducationEntry{Environmental Engineering}{2005-2009}{National Agrarian University - La Molina}{Specialization in atmospheric pollution. The issue of thesis was about the application of air quality modeling using AERMOD model in order to determine the effect or sulphur dioxide spreed in the atmosphere. The tittle of the thesis is "\\textit{Optimización del Modelo AERMOD mediante el modelo Meteorológico de Mesoescala BRAMS para la Dispersión de SO2
 de una Fuente Puntual}".}

%%% Work experience
%%% ------------------------------------------------------------
\\NewPart{Work experience}{}

\\EducationEntry{Air Quality and Noise Specialist}{2011-present}{Knight Piésold Consultores S.A., Full-time}{Elaboration of environmental studies related with national and international mining projects. Support to Knight Piésold offices in Australia and Ghana. Experience more than 4 years in the elaboration of environmental baseline for climate and meteorology, air quality, noise and ground vibration. Air quality and noise modeler with experience between 2 and 5 years in the use of different software such as AERMOD view, CALPUFF view, IAQx, Openair (R project) and SoundPLAN 7.2}
\\sepspace

\\EducationEntry{Practice in Environmental Engineering}{2010-2011}{Klepel Consulting S.A.C., Full-time}{Practice in studies related with environmental impact for constructions of retails in Lima. Researcher in meteorological modeling using BRAMS and applications in order to obtain hourly meteorological data for any location in Perú as input to air quality model.}
\\sepspace
\\sepspace


%%% Skills
%%% ------------------------------------------------------------
\\NewPart{Skills}{}

\\SkillsEntry{Languages}{Spanish (mother tongue)}
\\SkillsEntry{}{English (intermediate level)}
\\SkillsEntry{}{}

\\SkillsEntry{Software}{\\textsc{R- statistical program},\\LaTeX,\\textsc{CALPUFF},\\textsc{AERMOD},\\textsc{IAQx}}
\\SkillsEntry{} {\\textsc{SoundPLAN}}

\\end{document}`,

clean: `% --- LaTeX CV Template - S. Venkatraman ---

% Set document class and font size
\\documentclass[letterpaper, 11pt]{article}
\\usepackage[utf8]{inputenc}

% Package imports
\\usepackage{setspace, longtable, graphicx, hyphenat, hyperref, fancyhdr, ifthen, everypage, enumitem, amsmath, setspace}

% --- Page layout settings ---

% Set page margins
\\usepackage[left=1in, right=1in, bottom=0.7in, top=0.7in]{geometry}

% Set line spacing
\\renewcommand{\\baselinestretch}{1.15}

% --- Page formatting ---

% Set link colors
\\usepackage[dvipsnames]{xcolor}
\\hypersetup{colorlinks=true, linkcolor=RoyalBlue, urlcolor=RoyalBlue}

% Set font to Libertine, including math support
\\usepackage{libertine}
\\usepackage[libertine]{newtxmath}

% Remove page numbering
\\pagenumbering{gobble}

% --- Document starts here ---

\\begin{document}

% Name and date of last update to this document
\\noindent{\\Huge{Your name here}
\\hfill{\\it\\footnotesize Updated \\today}}

% --- Contact information and other items ---

\\vspace{0.5cm} 
\\begin{center}
\\begin{tabular}{lll}
% Line 1: Email, GitHub, office location
\\textbf{Email}: email@cornell.edu      &
\\hspace{0.55in} \\textbf{GitHub}: //github-username    &
\\hspace{0.4in} 	\\textbf{Office}: Your Building 101 \\\\

% Line 2: Phone number, LinkedIn, citizenship
\\textbf{Phone}: (314) 159-2654   & 
\\hspace{0.55in} \\textbf{LinkedIn}: //LinkedIn-URL   & 
\\hspace{0.4in} \\textbf{Citizenship}: Country 
\\end{tabular}
\\end{center}

% --- Start the two-column table storing the main content ---

% Set spacing between columns
\\setlength{\\tabcolsep}{8pt}

% Set the width of each column
\\begin{longtable}{p{1.3in}p{4.8in}}

% --- Section: Research interests ---

\\nohyphens{\\color{OliveGreen}{Research interests}}
& Your favorite topic, another topic, another topic, another topic, another topic \\\\
& \\\\

% --- Section: Education ---

\\color{OliveGreen}{Education} 
& \\textbf{University 1} \\hfill City, State \\\\ 
& PhD in Subject \\hfill Month Year -- Present \\\\
& Mentors: Professors A, B. {\\it GPA: X.YZ.}\\\\
& \\\\

& \\textbf{University 2} \\hfill City, State \\\\
& MA in Subject \\hfill Month Year -- Month Year\\\\
& Mentors: Professors C, D. {\\it GPA: X.YZ.}\\\\
& \\\\

& \\textbf{University 3} \\hfill City, State\\\\
& BA in Subject 1, minor in Subject 2 \\hfill Month Year -- Month Year \\\\
& Mentors: Professors E, F. {\\it GPA: X.YZ.}\\\\
& \\\\

% --- Uncomment the next few lines if you want to include some courses ---
%& \\textbf{Selected coursework}
%\\begin{itemize}[noitemsep,leftmargin=*]
%\\item \\underline{Relevant subject 1}: Course 1, Course 2, Course 3, Course 4
%\\item \\underline{Relevant subject 2}: Course 1, Course 2, Course 3, Course 4
%\\end{itemize} \\\\

% --- Section: Awards, scholarships, etc. ---
% --- Note: section title is spread over two lines ---

{\\color{OliveGreen}{Honors and}} 
& Name of award 1 (Organization that gave you the award) \\hfill 2020\\\\
{\\color{OliveGreen}{scholarships}} 
& Name of award 2 (Organization that gave you the award)\\hfill 2019 \\\\
& \\\\

% --- Section: Publications ---
\\nohyphens{\\color{OliveGreen}{Publications}} 
& \\textbf{Title of your most recent research paper} \\\\
& First author, second author, third author, fourth author. \\\\
& \\textit{Journal of something or the other, 2020.}\\\\
& \\\\

& \\textbf{Title of your second most recent research paper} \\\\
& First author, second author, third author, fourth author. \\\\
& \\textit{Journal of something or the other, 2020.}\\\\
& \\\\

& \\textbf{Title of your third most recent research paper} \\\\
& First author, second author, third author, fourth author. \\\\
& \\textit{Journal of something or the other, 2020.}\\\\
& \\\\

% --- Section: Research experience ---

\\nohyphens{\\color{OliveGreen}{Research experience}} 
& \\textbf{Title of project or lab where research was conducted} \\\\
& Mentors: Professor A (University) \\hfill Month Year -- Present \\\\
& Description of your work. Summary of findings available \\href{https://en.wikibooks.org/wiki/LaTeX/Hyperlinks}{here}. Sed dolor lacus, imperdiet non, ornare non, commodo eu, neque. Integer pretium semper justo. \\\\
& \\\\

& \\textbf{Title of project or lab where research was conducted} \\\\
& Mentors: Professor B (University) \\hfill Month Year -- Present \\\\
& Aliquam volutpat est vel massa. Sed dolor lacus, imperdiet non, ornare non, commodo eu, neque. Integer pretium semper justo. Proin risus. \\\\

\\end{longtable}
\\end{document}`,

colorful: `%-----------------------------------------------------------------------------------------------------------------------------------------------%
%	The MIT License (MIT)
%
%	Copyright (c) 2015 Jan Küster
%
%	Permission is hereby granted, free of charge, to any person obtaining a copy
%	of this software and associated documentation files (the "Software"), to deal
%	in the Software without restriction, including without limitation the rights
%	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
%	copies of the Software, and to permit persons to whom the Software is
%	furnished to do so, subject to the following conditions:
%	
%	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
%	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
%	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
%	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
%	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
%	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
%	THE SOFTWARE.
%	
%
%-----------------------------------------------------------------------------------------------------------------------------------------------%


%============================================================================%
%
%	DOCUMENT DEFINITION
%
%============================================================================%

%we use article class because we want to fully customize the page and dont use a cv template
\\documentclass[10pt,A4]{article}	


%----------------------------------------------------------------------------------------
%	ENCODING
%----------------------------------------------------------------------------------------

%we use utf8 since we want to build from any machine
\\usepackage[utf8]{inputenc}		

%----------------------------------------------------------------------------------------
%	LOGIC
%----------------------------------------------------------------------------------------

% provides \\isempty test
\\usepackage{xifthen}

%----------------------------------------------------------------------------------------
%	FONT
%----------------------------------------------------------------------------------------

% some tex-live fonts - choose your own

%\\usepackage[defaultsans]{droidsans}
%\\usepackage[default]{comfortaa}
%\\usepackage{cmbright}
\\usepackage[default]{raleway}
%\\usepackage{fetamont}
%\\usepackage[default]{gillius}
%\\usepackage[light,math]{iwona}
%\\usepackage[thin]{roboto} 

% set font default
\\renewcommand*\\familydefault{\\sfdefault} 	
\\usepackage[T1]{fontenc}

% more font size definitions
\\usepackage{moresize}		


%----------------------------------------------------------------------------------------
%	PAGE LAYOUT  DEFINITIONS
%----------------------------------------------------------------------------------------

%debug page outer frames
%\\usepackage{showframe}			


%define page styles using geometry
\\usepackage[a4paper]{geometry}		

% for example, change the margins to 2 inches all round
\\geometry{top=1.25cm, bottom=-.6cm, left=1.5cm, right=1.5cm} 	

%use customized header
\\usepackage{fancyhdr}				
\\pagestyle{fancy}

%less space between header and content
\\setlength{\\headheight}{-5pt}		


%customize entries left, center and right
%\\lhead{}
%\\chead{}
%\\rhead{}


%indentation is zero
\\setlength{\\parindent}{0mm}

%----------------------------------------------------------------------------------------
%	TABLE /ARRAY DEFINITIONS
%---------------------------------------------------------------------------------------- 

%for layouting tables
\\usepackage{multicol}			
\\usepackage{multirow}

%extended aligning of tabular cells
\\usepackage{array}

\\newcolumntype{x}[1]{%
>{\\raggedleft\\hspace{0pt}}p{#1}}%


%----------------------------------------------------------------------------------------
%	GRAPHICS DEFINITIONS
%---------------------------------------------------------------------------------------- 

%for header image
\\usepackage{graphicx}

%for floating figures
\\usepackage{wrapfig}
\\usepackage{float}
%\\floatstyle{boxed} 
%\\restylefloat{figure}

%for drawing graphics		
\\usepackage{tikz}				
\\usetikzlibrary{shapes, backgrounds,mindmap, trees}


%----------------------------------------------------------------------------------------
%	Color DEFINITIONS
%---------------------------------------------------------------------------------------- 

\\usepackage{color}

%accent color
\\definecolor{sectcol}{RGB}{0,150,255}

%dark background color
\\definecolor{bgcol}{RGB}{110,110,110}

%light background / accent color
\\definecolor{softcol}{RGB}{225,225,225}


%============================================================================%
%
%
%	DEFINITIONS
%
%
%============================================================================%

%----------------------------------------------------------------------------------------
% 	HEADER
%----------------------------------------------------------------------------------------

% remove top header line
\\renewcommand{\\headrulewidth}{0pt} 

%remove botttom header line
\\renewcommand{\\footrulewidth}{0pt}	  	

%remove pagenum
\\renewcommand{\\thepage}{}	

%remove section num		
\\renewcommand{\\thesection}{}			

%----------------------------------------------------------------------------------------
% 	ARROW GRAPHICS in Tikz
%----------------------------------------------------------------------------------------

% a six pointed arrow poiting to the left
\\newcommand{\\tzlarrow}{(0,0) -- (0.2,0) -- (0.3,0.2) -- (0.2,0.4) -- (0,0.4) -- (0.1,0.2) -- cycle;}	

% include the left arrow into a tikz picture
% param1: fill color
%
\\newcommand{\\larrow}[1]
{\\begin{tikzpicture}[scale=0.58]
	 \\filldraw[fill=#1!100,draw=#1!100!black]  \\tzlarrow
 \\end{tikzpicture}
}

% a six pointed arrow poiting to the right
\\newcommand{\\tzrarrow}{ (0,0.2) -- (0.1,0) -- (0.3,0) -- (0.2,0.2) -- (0.3,0.4) -- (0.1,0.4) -- cycle;}

% include the right arrow into a tikz picture
% param1: fill color
%
\\newcommand{\\rarrow}
{\\begin{tikzpicture}[scale=0.7]
	\\filldraw[fill=sectcol!100,draw=sectcol!100!black] \\tzrarrow
 \\end{tikzpicture}
}



%----------------------------------------------------------------------------------------
%	custom sections
%----------------------------------------------------------------------------------------

% create a coloured box with arrow and title as cv section headline
% param 1: section title
%
\\newcommand{\\cvsection}[1]
{
	\\begin{center}
		\\large\\textcolor{sectcol}{\\textbf{#1}}
	\\end{center}
}

%create a coloured arrow with title as cv meta section section
% param 1: meta section title
%
\\newcommand{\\metasection}[2]
{
%\\begin{tabular*}{1\\textwidth}{r r}
\\footnotesize{#2} \\hspace*{\\fill} \\footnotesize{#1}\\\\[1pt]
%\\end{tabular*}
}

%----------------------------------------------------------------------------------------
%	 CV EVENT
%----------------------------------------------------------------------------------------

% creates a stretched box as cv entry headline followed by two paragraphs about 
% the work you did
% param 1:	event time i.e. 2014 or 2011-2014 etc.
% param 2:	event name (what did you do?)
% param 3:	institution (where did you work / study)
% param 4:	what was your position
% param 5:	some words about your contributions
%
\\newcommand{\\cvevent}[5]
{

\\begin{tabular*}{1\\textwidth}{p{13.6cm}  x{3.9cm}}
	\\textbf{#2} - \\textcolor{bgcol}{#3} &   \\vspace{2.5pt}\\textcolor{sectcol}{#1}
\\end{tabular*}

\\vspace{-8pt}
\\textcolor{softcol}{\\hrule}
\\vspace{6pt}

  $\\cdot$ #4\\\\[3pt]
  $\\cdot$ #5\\\\[6pt]

}

% creates a stretched box as 
\\newcommand{\\cveventmeta}[2]
{
	\\mbox{\\mystrut \\hspace{87pt}\\textit{#1}}\\\\
	#2
}

%----------------------------------------------------------------------------------------
% CUSTOM STRUT FOR EMPTY BOXES
%----------------------------------------- -----------------------------------------------
\\newcommand{\\mystrut}{\\rule[-.3\\baselineskip]{0pt}{\\baselineskip}}

%----------------------------------------------------------------------------------------
% CUSTOM LOREM IPSUM
%----------------------------------------------------------------------------------------
\\newcommand{\\lorem}
{Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.}



%============================================================================%
%
%
%
%	DOCUMENT CONTENT
%
%
%
%============================================================================%
\\begin{document}


%use our custom fancy header definitions
\\pagestyle{fancy}	





%----------------------------------------------------------------------------------------
%	HEADER IMAGE
%----------------------------------------------------------------------------------------

%\\begin{figure}[H]
%\\begin{flushright}
%	\\includegraphics[trim= 320 130 460 210,clip,width=0.2\\linewidth]{myfoto.jpg}	%trimming relative to image size!
%\\end{flushright}
%\\end{figure}


%---------------------------------------------------------------------------------------
%	TITLE HEADLINE
%----------------------------------------------------------------------------------------
\\vspace{-8pt}
\\begin{center}
	\\HUGE \\textsc{Jan Küster} \\textcolor{sectcol}{\\rule[-1mm]{1mm}{0.9cm}} \\textsc{Resume}\\\\[2pt]
	\\small Consultant and Software Developer
\\end{center}



\\vspace{6pt}


%---------------------------------------------------------------------------------------
%	META SECTION
%----------------------------------------------------------------------------------------
\\metasection{Bremen, Germany}{\\textbf{Status:} M.Sc. Digital Media, Scientific Employee}
\\metasection{www.jankuester.com}{\\textbf{Fields:} Software Engineering, Consulting, Scrum, Usability} 
\\metasection{info@jankuester.com}{\\textbf{Techs:} Meteor, Javascript, Mongo,. Bootstrap, Bash, Git, Webstorm}
\\metasection{+49 176 *** *** **}{\\textbf{Activities:} Global Game Jam, Open Source, Fitness}
\\vspace{-2pt}
\\textcolor{softcol}{\\hrule}
\\vspace{6pt}

\\normalsize

%---------------------------------------------------------------------------------------
%	SUMMARAY (optional)
%----------------------------------------------------------------------------------------
\\vspace{-6pt}
\\cvsection{Summary}
Digital media graduate with project experience in the field of technology based assessment. Currently working as IT Consultant at We4IT, Bremen in the field of IBM Notes Domino and XPages applications. Master studies focused on teams from different disciplines and cultural backgrounds on solutions for complex problems.\\\\


%============================================================================%
%
%	CV SECTIONS AND EVENTS (MAIN CONTENT)
%
%============================================================================%

%---------------------------------------------------------------------------------------
%	EXPERIENCE
%----------------------------------------------------------------------------------------
\\cvsection{Experience}

\\cvevent{2016 - present}{Scientific Employee / PhD Student}{University of Bremen}{Develop and evaluate the next generation learning management system with Meteor}{Define a new level of software for classroom management based on an extensive nursing curriculum.}

%
\\cvevent{2014 - 2016}{IT Consultant for IBM XPages and Notes Domino}{We4IT GmbH Bremen}{Realize projects in XPages and We4IT Aveedo, monitor project status, conduct reports}{Implement the frontend for a BPMN compatible engine within We4IT Aveedo}

%\\textcolor{softcol}{\\hrule}

%
\\cvevent{2012 - 2014}{Scientific Employee / Software Development}{University of Bremen}{Invented a flexible assessment framework, targeting industrial trainees}{Supervised software development lifecycle, Recruited team members}

%\\textcolor{softcol}{\\hrule}

%
\\cvevent{2011 / 11}{Project Management Simulation Training}{Getoq Consulting}{Performed a two-day project simulation from management perspective}{Topics included customer contracts, change management, controlling, operational tasks}

%\\textcolor{softcol}{\\hrule}


%
\\cvevent{2010 - 2011}{Student Assistant / Programmer}{otulea.uni-bremen.de}{Realized an online diagnosis platform for workforce literacy development (Flex)}{Modeled software design, implemented various prototypes, conducted usability tests}


%---------------------------------------------------------------------------------------
%	EDUCATION SECTION
%--------------------------------------------------------------------------------------
\\cvsection{Education}

\\cvevent{2015 / 07}{Graduated as M.Sc. Digital Media}{University of Bremen}{Master Thesis: Semi Automated Scoring in Technology Based Assessment}{Developed and evaluated an algorithm for semi automated scoring of spreadsheet data}

%\\textcolor{softcol}{\\hrule}

%
\\cvevent{2012 - 2013}{Master Project - PrIMA}{University of Bremen}{Co-Invented a touch table application for medical support, co-developed software (Java) }{Formed a scrum team, mainted project dev server (Debian), surveyed target audience}

%\\textcolor{softcol}{\\hrule}

%
\\cvevent{2012 - 2015}{Master Studies Digital Media}{University of Bremen}{Inter-cultural classes in English, covering special topics in computer science and design}{Professionalized in research methods, software development and e-assessment}

%\\textcolor{softcol}{\\hrule}

%
\\cvevent{2009 - 2010}{Semester Abroad}{University of Melbourne}{Mastered six months of study and trans-cultural experience in Melbourne, Australia}{Finished machine programming, information visualization, professional essay writing}


%--------------------------------------------------------------------------------------------------
%	ARTIFICIAL FOOTER (fancy footer cannot exceed linewidth) 
%--------------------------------------------------------------------------------------------------




%============================================================================%
%
%
%
%	DOCUMENT END
%
%
%
%============================================================================%
\\end{document}
`,
minimalist: `\\documentclass[12pt]{article}
\\usepackage[english]{babel}
\\usepackage{cmbright}
\\usepackage{enumitem}
\\usepackage{fancyhdr}
\\usepackage{fontawesome5}
\\usepackage{geometry}
\\usepackage{hyperref}
\\usepackage[sf]{libertine}
\\usepackage{microtype}
\\usepackage{paracol}
\\usepackage{supertabular}
\\usepackage{titlesec}
\\hypersetup{colorlinks, urlcolor=black, linkcolor=black}

% Geometry
\\geometry{hmargin=1.75cm, vmargin=2.5cm}
\\columnratio{0.65, 0.35}
\\setlength\\columnsep{0.05\\textwidth}
\\setlength\\parindent{0pt}
\\setlength{\\smallskipamount}{8pt plus 3pt minus 3pt}
\\setlength{\\medskipamount}{16pt plus 6pt minus 6pt}
\\setlength{\\bigskipamount}{24pt plus 8pt minus 8pt}

% Style
\\pagestyle{empty}
\\titleformat{\\section}{\\scshape\\LARGE\\raggedright}{}{0em}{}[\\titlerule]
\\titlespacing{\\section}{0pt}{\\bigskipamount}{\\smallskipamount}
\\newcommand{\\heading}[2]{\\centering{\\sffamily\\Huge #1}\\\\\\smallskip{\\large{#2}}}
\\newcommand{\\entry}[4]{{{\\textbf{#1}}} \\hfill #3 \\\\ #2 \\hfill #4}
\\newcommand{\\tableentry}[3]{\\textsc{#1} & #2\\expandafter\\ifstrequal\\expandafter{#3}{}{\\\\}{\\\\[6pt]}}

\\begin{document}

\\vspace*{\\fill}

\\begin{paracol}{2}

% Name & headline
\\heading{John Doe}{Lorem ipsum dolor sit amet, \\\\ consectetur adipiscing elit.}

\\switchcolumn

% Identity card
\\vspace{0.01\\textheight}
\\begin{supertabular}{ll}
  \\footnotesize\\faPhone & +33 1 23 45 67 89 \\\\
  \\footnotesize\\faEnvelope & \\href{mailto:john.doe@gmail.com}{john.doe@gmail.com} \\\\
  \\footnotesize\\faLinkedin & \\href{https://www.linkedin.com/in/johndoe}{linkedin.com/in/johndoe} \\\\
\\end{supertabular}

\\bigskip
\\switchcolumn*

\\section{education}

\\entry{Second University}{Degree, Major}{City, Country}{2022 -- 2024}
\\begin{itemize}[noitemsep,leftmargin=3.5mm,rightmargin=0mm,topsep=6pt]
  \\item Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  \\item Pellentesque sit amet mauris malesuada, mattis odio nec.
  \\item Praesent lobortis ac urna a tristique.
\\end{itemize}

\\medskip

\\entry{First University}{Degree, Major}{City, Country}{2019 -- 2022}

\\switchcolumn

\\section{skills}
\\begin{supertabular}{rl}
  \\tableentry{\\footnotesize\\faCode}{Python \\textperiodcentered{} C/C++ \\textperiodcentered{} Arduino}{}
  \\tableentry{}{TensorFlow \\textperiodcentered{} Git \\textperiodcentered{} Linux}{}
  \\tableentry{}{}{}

  \\tableentry{\\footnotesize\\faLanguage}{English \\textperiodcentered{} proficient}{}
  \\tableentry{}{French \\textperiodcentered{} native}{}
  \\tableentry{}{Spanish \\textperiodcentered{} advanced}{}
  \\tableentry{}{Arabic \\textperiodcentered{} beginner}{}
\\end{supertabular}

\\switchcolumn*

\\section{experience}

\\entry{Third Company}{Third Role}{City, Country}{2023 (3 months)}
\\begin{itemize}[noitemsep,leftmargin=3.5mm,rightmargin=0mm,topsep=6pt]
  \\item Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  \\item Pellentesque sit amet mauris malesuada, mattis odio nec.
  \\item Praesent lobortis ac urna a tristique.
\\end{itemize}

\\medskip

\\entry{Second Company}{Second Role}{City, Country}{2022 -- 2023}
\\begin{itemize}[noitemsep,leftmargin=3.5mm,rightmargin=0mm,topsep=6pt]
  \\item Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  \\item Pellentesque sit amet mauris malesuada, mattis odio nec.
  \\item Praesent lobortis ac urna a tristique.
\\end{itemize}

\\medskip

\\entry{First Company}{First Role}{City, Country}{2021 -- 2022}
\\begin{itemize}[noitemsep,leftmargin=3.5mm,rightmargin=0mm,topsep=6pt]
  \\item Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  \\item Pellentesque sit amet mauris malesuada, mattis odio nec.
  \\item Praesent lobortis ac urna a tristique.
\\end{itemize}

\\switchcolumn

\\section{other interests}
\\begin{supertabular}{rl}
  \\tableentry{domain}{First Passion}{}
  \\tableentry{}{Second Passion}{spaceafter}
  \\tableentry{domain}{First Passion}{}
  \\tableentry{}{Second Passion}{spaceafter}
\\end{supertabular}

\\bigskip

\\section{awards}
\\begin{supertabular}{rl}
  \\tableentry{2018}{\\textbf{Top-ranked team}}{}
  \\tableentry{}{Some Contest}{spaceafter}
  \\tableentry{2016}{\\textbf{Bronze Medal}}{}
  \\tableentry{}{Some Contest}{spaceafter}
\\end{supertabular}

\\end{paracol}

\\vspace*{\\fill}

\\end{document}`,

professional: `\\documentclass{article}

\\usepackage[top=0.5in, bottom=0.5in, left=0.5in, right=0.5in]{geometry}
\\usepackage{enumitem}

\\begin{document}
\\begin{center}
\\thispagestyle{empty}
\\large \\textbf{First Name Last Name \\\\}
\\normalsize firstname.lastname@gmail.com $\\mid$ 000-000-0000 $\\mid$ www.mywebsite.com    \\\\
\\hrulefill
\\end{center}


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% OBJECTIVE
% Who you are, what domain, what are you looking for and when?
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\\noindent \\textbf{\\underline{OBJECTIVE}} \\\\
\\noindent Graduate student looking for domain positions starting month and year. \\\\

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% SKILLS: Important and relevant to the job you are applying for
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\\noindent \\textbf{\\underline{CORE SKILLS}} \\\\
Skill 1 (years of experience), Skill 2 (years of experience), Skill 3 (years of experience) \\\\
% Skill 1 (level of expertise), Skill 2 (level of expertise), Skill 3 (level of expertise) \\\\

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% EDUCATION
% University name, degree, year of graduation, GPA (optional)
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\\noindent \\textbf{\\underline{EDUCATION}} \\\\
\\textbf{University name} \\hfill City, State \\\\
\\textit{Degree name + Specialization} \\hfill GPA: x.x/x.x \\hfill month-year \\\\ \\\\
\\textbf{University name} \\hfill City, State \\\\
\\textit{Degree name + Specialization} \\hfill GPA: x.x/x.x \\hfill month-year \\\\

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% WORK EXPERIENCE
% What did you do? -> Project goals OR what problem did you solve?
% How did you do it? -> Skills and technologies
% What impact did you create? -> Numbers and percentages.
% Example: 
% + Developed an app for matching mentor and mentees for Android and iOS platform.
% + Successfully matched 85% of the applications and randomized the rest.
% 
% Talk about team work, initiative, soft skills.
%
% Can also include personal projects, competitions, contribution to Open source.
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\\noindent \\textbf{\\underline{WORK EXPERIENCE}} \\\\
\\noindent \\textbf{Company name} \\hfill City Name, State \\\\
\\textit{Role name, Deparment Name} \\hfill Month, Year $-$ Month, Year
\\begin{itemize}[noitemsep,nolistsep,leftmargin=*]
\\item {Developed XYZ using XYZ that led to X\\% improvement.}
\\item {Led an initiative XYZ to identify the root cause.}
\\item {Collaborated with XYZ team to work on XYZ feature. \\\\}
\\end{itemize}

\\noindent \\textbf{Company name} \\hfill City Name, State \\\\
\\textit{Role name} \\hfill Month, Year $-$ Month, Year
\\begin{itemize}[noitemsep,nolistsep,leftmargin=*]
\\item {Developed XYZ using XYZ that led to X\\% improvement.}
\\item {... \\\\}
\\end{itemize}

\\noindent \\textbf{Competition Name} \\hfill City Name, State \\\\
\\textit{Role name, Team name} \\hfill Month, Year $-$ Month, Year
\\begin{itemize}[noitemsep,nolistsep,leftmargin=*]
\\item {Developed XYZ using XYZ that led to X\\% improvement.}
\\item{Came in the top 10 OR received the most innovative award.}
\\item {... \\\\}
\\end{itemize}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% PROJECT
% What did you do?
% How did you do it? -> Skills and technologies
% What impact did you create? -> Numbers and percentages.
%
% Talk about team work, initiative, soft skills.
%
% Can also include personal projects, competitions, contribution to Open source.
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\\noindent \\textbf{\\underline{PROJECT WORK}} \\\\
\\noindent \\textbf{Project Name} \\textit{Course Name} \\hfill  Month, Year $-$ Month, Year
\\begin{itemize}[noitemsep,nolistsep,leftmargin=*]
\\item {Developed XYZ using XYZ that led to X\\% improvement.}
\\item {Led an initiative XYZ to identify the root cause.}
\\item {Collaborated with XYZ team to work on XYZ feature. \\\\}
\\end{itemize}

\\noindent \\textbf{Project Name} \\textit{Course Name} \\hfill  Month, Year $-$ Month, Year
\\begin{itemize}[noitemsep,nolistsep,leftmargin=*]
\\item {Developed XYZ using XYZ that led to X\\% improvement.}
\\item {Led an initiative XYZ to identify the root cause.}
\\item {Collaborated with XYZ team to work on XYZ feature. \\\\}
\\end{itemize}

\\noindent \\textbf{Project Name} \\textit{Course Name} \\hfill  Month, Year $-$ Month, Year
\\begin{itemize}[noitemsep,nolistsep,leftmargin=*]
\\item {Developed XYZ using XYZ that led to X\\% improvement.}
\\item {... \\\\}
\\end{itemize}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Extra Curricular Activities, Leadership, etc 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\\noindent \\textbf{\\underline{EXTRA SECTION}} \\\\
\\noindent \\textbf{Activity/ Role} \\hfill Month, Year $-$ Month, Year
\\begin{itemize}[noitemsep,nolistsep,leftmargin=*]
\\item {What did you do, how did you do it and what did you achieve? \\\\}
\\end{itemize}

\\noindent \\textbf{Activity/ Role} \\hfill Month, Year $-$ Month, Year
\\begin{itemize}[noitemsep,nolistsep,leftmargin=*]
\\item {What did you do, how did you do it and what did you achieve? \\\\}
\\end{itemize}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Other Skills: you can add all your other skills here.
% Continue to keep only relevant skills
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\\noindent \\textbf{\\underline{OTHER SKILLS}} \\\\
\\noindent \\textbf{Skill Group 1:} Skill 1, Skill 2, Skill 3 \\\\
\\noindent \\textbf{Skill Group 2: } Skill 1, Skill 2, Skill 3, Skill 4


\\end{document}
`,

simple: `%-------------------------
% Resume in Latex
% Author : Jake Gutierrez
% Based off of: https://github.com/sb2nov/resume
% License : MIT
%------------------------

\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\usepackage{fontawesome5}
\\usepackage{multicol}
\\setlength{\\multicolsep}{-3.0pt}
\\setlength{\\columnsep}{-1pt}
\\input{glyphtounicode}


%----------FONT OPTIONS----------
% sans-serif
% \\usepackage[sfdefault]{FiraSans}
% \\usepackage[sfdefault]{roboto}
% \\usepackage[sfdefault]{noto-sans}
% \\usepackage[default]{sourcesanspro}

% serif
% \\usepackage{CormorantGaramond}
% \\usepackage{charter}


\\pagestyle{fancy}
\\fancyhf{} % clear all header and footer fields
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

% Adjust margins
\\addtolength{\\oddsidemargin}{-0.6in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1.19in}
\\addtolength{\\topmargin}{-.7in}
\\addtolength{\\textheight}{1.4in}

\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

% Sections formatting
\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large\\bfseries
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

% Ensure that generate pdf is machine readable/ATS parsable
\\pdfgentounicode=1

%-------------------------
% Custom commands
\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    {#1 \\vspace{-2pt}}
  }
}

\\newcommand{\\classesList}[4]{
    \\item\\small{
        {#1 #2 #3 #4 \\vspace{-2pt}}
  }
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-2pt}\\item
    \\begin{tabular*}{1.0\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & \\textbf{\\small #2} \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubSubheading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\textit{\\small#1} & \\textit{\\small #2} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeProjectHeading}[2]{
    \\item
    \\begin{tabular*}{1.001\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\small#1 & \\textbf{\\small #2}\\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-4pt}}

\\renewcommand\\labelitemi{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}
\\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.0in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}

%-------------------------------------------
%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%


\\begin{document}

%----------HEADING----------
% \\begin{tabular*}{\\textwidth}{l@{\\extracolsep{\\fill}}r}
%   \\textbf{\\href{http://sourabhbajaj.com/}{\\Large Sourabh Bajaj}} & Email : \\href{mailto:sourabh@sourabhbajaj.com}{sourabh@sourabhbajaj.com}\\\\
%   \\href{http://sourabhbajaj.com/}{http://www.sourabhbajaj.com} & Mobile : +1-123-456-7890 \\\\
% \\end{tabular*}

\\begin{center}
    {\\Huge \\scshape First Last} \\\\ \\vspace{1pt}
    123 Street Name, Town, State 12345 \\\\ \\vspace{1pt}
    \\small \\raisebox{-0.1\\height}\\faPhone\\ 123-456-7890 ~ \\href{mailto:x@gmail.com}{\\raisebox{-0.2\\height}\\faEnvelope\\  \\underline{email@gmail.com}} ~ 
    \\href{https://linkedin.com/in//}{\\raisebox{-0.2\\height}\\faLinkedin\\ \\underline{linkedin.com/in/username}}  ~
    \\href{https://github.com/}{\\raisebox{-0.2\\height}\\faGithub\\ \\underline{github.com/username}}
    \\vspace{-8pt}
\\end{center}


%-----------EDUCATION-----------
\\section{Education}
  \\resumeSubHeadingListStart
    \\resumeSubheading
      {State University}{Sep. 2017 -- May 2021}
      {Bachelor of Science in Computer Science}{City, State}
  \\resumeSubHeadingListEnd

%------RELEVANT COURSEWORK-------
\\section{Relevant Coursework}
    %\\resumeSubHeadingListStart
        \\begin{multicols}{4}
            \\begin{itemize}[itemsep=-5pt, parsep=3pt]
                \\item\\small Data Structures
                \\item Software Methodology
                \\item Algorithms Analysis
                \\item Database Management
                \\item Artificial Intelligence
                \\item Internet Technology
                \\item Systems Programming
                \\item Computer Architecture
            \\end{itemize}
        \\end{multicols}
        \\vspace*{2.0\\multicolsep}
    %\\resumeSubHeadingListEnd


%-----------EXPERIENCE-----------
\\section{Experience}
  \\resumeSubHeadingListStart

    \\resumeSubheading
      {Electronics Company}{May 2020 -- August 2020}
      {Software Engineer Intern}{City, State}
      \\resumeItemListStart
        \\resumeItem{Developed a service to automatically perform a set of unit tests daily on a product in development in order to decrease time needed for team members to identify and fix bugs/issues.}
        \\resumeItem{Incorporated scripts using Python and PowerShell to aggregate XML test results into an organized format and to load the latest build code onto the hardware, so that daily testing can be performed.}
        \\resumeItem{Utilized Jenkins to provide a continuous integration service in order to automate the entire process of loading the latest build code and test files, running the tests, and generating a report of the results once per day.}
        \\resumeItem{Explored ways to visualize and send a daily report of test results to team members  using HTML, Javascript, and CSS.}
      \\resumeItemListEnd

    \\resumeSubheading
      {Startup, Inc}{May 2019 -- August 2019}
      {Front End Developer Intern}{City, State}
      \\resumeItemListStart
        \\resumeItem{Assisted in development of the front end of a mobile application for iOS/Android using Dart and the Flutter framework.}
        \\resumeItem{Worked with Google Firebase to manage user inputted data across multiple platforms including web and mobile apps.}
        \\resumeItem{Collaborated with team members using version control systems such as Git to organize modifications and assign tasks.}
        \\resumeItem{Utilized Android Studio as a development environment in order to visualize the application in both iOS and Android.}
    \\resumeItemListEnd
    
  \\resumeSubHeadingListEnd
\\vspace{-16pt}

%-----------PROJECTS-----------
\\section{Projects}
    \\vspace{-5pt}
    \\resumeSubHeadingListStart
      \\resumeProjectHeading
          {\\textbf{Gym Reservation Bot} $|$ \\emph{Python, Selenium, Google Cloud Console}}{January 2021}
          \\resumeItemListStart
            \\resumeItem{Developed an automatic bot using Python and Google Cloud Console to register myself for a timeslot at my school gym.}
            \\resumeItem{Implemented Selenium to create an instance of Chrome in order to interact with the correct elements of the web page.}
            \\resumeItem{Created a Linux virtual machine to run on Google Cloud so that the program is able to run everyday from the cloud.}
            \\resumeItem{Used Cron to schedule the program to execute automatically at 11 AM every morning so a reservation is made for me.}
          \\resumeItemListEnd
          \\vspace{-13pt}
      \\resumeProjectHeading
          {\\textbf{Ticket Price Calculator App} $|$ \\emph{Java, Android Studio}}{November 2020}
          \\resumeItemListStart
            \\resumeItem{Created an Android application using Java and Android Studio to calculate ticket prices for trips to museums in NYC.}
            \\resumeItem{Processed user inputted information in the back-end of the app to return a subtotal price based on the tickets selected.}
            \\resumeItem{Utilized the layout editor to create a UI for the application in order to allow different scenes to interact with each other.}
          \\resumeItemListEnd 
          \\vspace{-13pt}
          \\resumeProjectHeading
          {\\textbf{Transaction Management GUI} $|$ \\emph{Java, Eclipse, JavaFX}}{October 2020}
          \\resumeItemListStart
            \\resumeItem{Designed a sample banking transaction system using Java to simulate the common functions of using a bank account.}
            \\resumeItem{Used JavaFX to create a GUI that supports actions such as creating an account, deposit, withdraw, list all acounts, etc.}
            \\resumeItem{Implemented object-oriented programming practices such as inheritance to create different account types and databases.}
          \\resumeItemListEnd 
    \\resumeSubHeadingListEnd
\\vspace{-15pt}


%
%-----------PROGRAMMING SKILLS-----------
\\section{Technical Skills}
 \\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
     \\textbf{Languages}{: Python, Java, C, HTML/CSS, JavaScript, SQL} \\\\
     \\textbf{Developer Tools}{: VS Code, Eclipse, Google Cloud Platform, Android Studio} \\\\
     \\textbf{Technologies/Frameworks}{: Linux, Jenkins, GitHub, JUnit, WordPress} \\\\
    }}
 \\end{itemize}
 \\vspace{-16pt}


%-----------INVOLVEMENT---------------
\\section{Leadership / Extracurricular}
    \\resumeSubHeadingListStart
        \\resumeSubheading{Fraternity}{Spring 2020 -- Present}{President}{University Name}
            \\resumeItemListStart
                \\resumeItem{Achieved a 4 star fraternity ranking by the Office of Fraternity and Sorority Affairs (highest possible ranking).}
                \\resumeItem{Managed executive board of 5 members and ran weekly meetings to oversee progress in essential parts of the chapter.}
                \\resumeItem{Led chapter of 30+ members to work towards goals that improve and promote community service, academics, and unity.}
            \\resumeItemListEnd
        
    \\resumeSubHeadingListEnd


\\end{document}`,

simple2: `%-------------------------
% Resume in Latex
% Author : Harshibar
% Based off of: https://github.com/jakeryang/resume
% License : MIT
%------------------------

\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
% only for pdflatex
% \\input{glyphtounicode}

% fontawesome
\\usepackage{fontawesome5}

% fixed width
\\usepackage[scale=0.90,lf]{FiraMono}

% light-grey
\\definecolor{light-grey}{gray}{0.83}
\\definecolor{dark-grey}{gray}{0.3}
\\definecolor{text-grey}{gray}{.08}

\\DeclareRobustCommand{\\ebseries}{\\fontseries{eb}\\selectfont}
\\DeclareTextFontCommand{\\texteb}{\\ebseries}

% custom underilne
\\usepackage{contour}
\\usepackage[normalem]{ulem}
\\renewcommand{\\ULdepth}{1.8pt}
\\contourlength{0.8pt}
\\newcommand{\\myuline}[1]{%
  \\uline{\\phantom{#1}}%
  \\llap{\\contour{white}{#1}}%
}


% custom font: helvetica-style
\\usepackage{tgheros}
\\renewcommand*\\familydefault{\\sfdefault} 
%% Only if the base font of the document is to be sans serif
\\usepackage[T1]{fontenc}


\\pagestyle{fancy}
\\fancyhf{} % clear all header and footer fields
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

% Adjust margins
\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{0in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

% Sections formatting - serif
% \\titleformat{\\section}{
%   \\vspace{2pt} \\scshape \\raggedright\\large % header section
% }{}{0em}{}[\\color{black} \\titlerule \\vspace{-5pt}]

% TODO EBSERIES
% sans serif sections
\\titleformat {\\section}{
    \\bfseries \\vspace{2pt} \\raggedright \\large % header section
}{}{0em}{}[\\color{light-grey} {\\titlerule[2pt]} \\vspace{-4pt}]

% only for pdflatex
% Ensure that generate pdf is machine readable/ATS parsable
% \\pdfgentounicode=1

%-------------------------
% Custom commands
\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    {#1 \\vspace{-1pt}}
  }
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-1pt}\\item
    \\begin{tabular*}{\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & {\\color{dark-grey}\\small #2}\\vspace{1pt}\\\\ % top row of resume entry
      \\textit{#3} & {\\color{dark-grey} \\small #4}\\\\ % second row of resume entry
    \\end{tabular*}\\vspace{-4pt}
}

\\newcommand{\\resumeSubSubheading}[2]{
    \\item
    \\begin{tabular*}{\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\textit{\\small#1} & \\textit{\\small #2} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeProjectHeading}[2]{
    \\item
    \\begin{tabular*}{\\textwidth}{l@{\\extracolsep{\\fill}}r}
      #1 & {\\color{dark-grey}} \\\\
    \\end{tabular*}\\vspace{-4pt}
}

\\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-4pt}}

\\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

% CHANGED default leftmargin  0.15 in
\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{0pt}}

\\color{text-grey}

%-------------------------------------------
%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%


\\begin{document}

%----------HEADING----------
\\begin{center}
    \\textbf{\\Huge Harshibar} \\\\ \\vspace{5pt}
    \\small \\faPhone* \\texttt{555.555.5555} \\hspace{1pt} $|$
    \\hspace{1pt} \\faEnvelope \\hspace{2pt} \\texttt{hello@email.com} \\hspace{1pt} $|$ 
    \\hspace{1pt} \\faYoutube \\hspace{2pt} \\texttt{harshibar} \\hspace{1pt} $|$
    \\hspace{1pt} \\faMapMarker* \\hspace{2pt}\\texttt{U.S. Citizen}
    \\\\ \\vspace{-3pt}
\\end{center}

%-----------EXPERIENCE-----------
\\section{EXPERIENCE}
  \\resumeSubHeadingListStart

    \\resumeSubheading
      {YouTube}{Aug. 2019 -- Present}
      {Creator (\\href{https://www.youtube.com/c/harshibar}{\\myuline {@harshibar}})}{San Francisco, CA}
      \\resumeItemListStart
        \\resumeItem{Grew channel to \\textbf{60k subscribers in 1.5 years}; created 80+ videos on tech and productivity}
        \\resumeItem{Conducted A/B testing on titles and thumbnails; \\textbf{increased video impressions by 2.5M} in 3 months}
         \\resumeItem{Designed a Notion workflow to streamline video production and roadmapping; boosted productivity by 20\\%}
        \\resumeItem{\\textbf{Partnered with brands like Skillshare and Squarespace} to expand their outreach via sponsorships}
        \\resumeItem{\\textbf{Highlights}:
            \\href{https://www.youtube.com/watch?v=HhWUjp5pD0g}{\\myuline {The Problem with Productivity Apps}}, \\href{https://www.youtube.com/watch?v=ms4cWMsOITs}{\\myuline {Obsidian App Review}},
            \\href{https://www.youtube.com/watch?v=PkDbkyIR44w}{\\myuline {Not-So-Minimal Desk Setup}}}
      \\resumeItemListEnd

    \\resumeSubheading
      {Google Verily}{Aug. 2018 -- Sept. 2019}
      {Software Engineer}{San Francisco, CA}
      \\resumeItemListStart
        \\resumeItem{\\textbf{Led front-end development} of a dashboard to process 50k blood samples and detect early-stage cancer}
        \\resumeItem{Rebuilt a Quality Control product with input from 20 cross-functional stakeholders, \\textbf{saving \\$1M annually}}
        \\resumeItem{Spearheaded product development of a new lab workflow tool, leading to a 40\\% increase in efficiency; \\\\ shadowed 10 core users, iterated on design docs, and implemented the solution with one engineer}

    \\resumeItemListEnd

    \\resumeSubheading
      {Amazon}{May 2017 -- Aug. 2017}
      {Software Engineering Intern}{Seattle, WA}
      \\resumeItemListStart
        \\resumeItem{Worked on the Search Customer Experience Team; \\textbf{received a return offer} for a full-time position}
        \\resumeItem{\\textbf{Shipped a new feature to 2M+ users} to improve the search experience for movie series-related queries}
        \\resumeItem{Built a back-end database service in Java and implemented a front-end UI to support future changes}
      \\resumeItemListEnd

  \\resumeSubHeadingListEnd


%-----------PROJECTS-----------

\\section{PROJECTS}
    \\resumeSubHeadingListStart
      \\resumeProjectHeading
          {\\textbf{Hyku Consulting}} {Sept. 2019 -- Mar. 2021}
          \\resumeItemListStart
            \\resumeItem{Mentored 15 students towards acceptance at top US boarding schools; achieved \\textbf{100\\% success rate}}
            \\resumeItem{Designed a \\textbf{collaborative learning ecosystem} for students and parents with Trello, Miro, and Google Suite}
          \\resumeItemListEnd
          
        \\resumeProjectHeading
          {\\textbf{Minimal Icon Pack}}{Sept. 2020 -- Nov. 2020}
          \\resumeItemListStart
            \\resumeItem{Designed and released 100+ minimal iOS and Android icons from scratch using Procreate and Figma}
            \\resumeItem{Marketed the product and design process on {\\href{https://www.youtube.com/watch?v=Ju32r7QJCzk}{\\myuline {YouTube}}}; accumulated over \\textbf{\\$250 in sales} on {\\href{https://gumroad.com/l/icons-by-harshibar}{\\myuline {Gumroad}}}}
          \\resumeItemListEnd
          
      \\resumeProjectHeading
         {\\textbf{CommonIntern}}{Sept. 2019 -- May 2020}
          \\resumeItemListStart
            \\resumeItem{Built a Python script to automatically apply to jobs on Glassdoor using BeautifulSoup and Selenium}
            \\resumeItem{\\textbf{500 stars on \\href{https://github.com/harshibar/common-intern}{\\myuline {GitHub}}}; featured on {\\href{https://hackaday.com/2020/05/30/job-application-script-automates-the-boring-stuff-with-python}{\\myuline {Hackaday}}}; made the front page of {\\href {https://www.reddit.com/r/Python/comments/gpaegj/i_was_tired_of_opening_100s_of_tabs_for/?utm_source=share}{\\myuline {r/python}}} and {\\href {https://www.reddit.com/r/programming/comments/dcmbzx/i_was_tired_of_opening_100s_of_tabs_for/}{\\myuline {r/programming}}}}
          \\resumeItemListEnd
          
    \\resumeSubHeadingListEnd



%-----------EDUCATION-----------
\\section {EDUCATION}
  \\resumeSubHeadingListStart
    \\resumeSubheading
      {Wellesley College}{Aug. 2014 -- May 2018}
      {Bachelor of Arts in Computer Science and Pre-Med}{Wellesley, MA}
      	\\resumeItemListStart
    	\\resumeItem {\\textbf{Coursework}: Data Structures, Algorithms, Databases, Computer Systems, Machine Learning}
        \\resumeItem 
            {\\textbf{Research}: MIT Graybiel Lab (published author), MIT Media Lab (analyzed urban microbe spread)}
        \\resumeItemListEnd
  \\resumeSubHeadingListEnd


%
%-----------PROGRAMMING SKILLS-----------
\\section{SKILLS}
 \\begin{itemize}[leftmargin=0in, label={}]
    \\small{\\item{
     \\textbf{Languages} {: Python, JavaScript (React.js), HTML/CSS, SQL (PostgreSQL, MySQL)}\\vspace{2pt} \\\\
     \\textbf{Tools}     {: Figma, Notion, Jira, Trello, Miro, Google Analytics, GitHub, DaVinci Resolve, OBS}
    }}
 \\end{itemize}


%-------------------------------------------
\\end{document}
`

}