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

bold: `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% "ModernCV" CV and Cover Letter
% LaTeX Template
% Version 1.11 (19/6/14)
%
% This template has been downloaded from:
% http://www.LaTeXTemplates.com
%
% Original author:
% Xavier Danaux (xdanaux@gmail.com)
%
% License:
% CC BY-NC-SA 3.0 (http://creativecommons.org/licenses/by-nc-sa/3.0/)
%
% Important note:
% This template requires the moderncv.cls and .sty files to be in the same 
% directory as this .tex file. These files provide the resume style and themes 
% used for structuring the document.
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%----------------------------------------------------------------------------------------
%	PACKAGES AND OTHER DOCUMENT CONFIGURATIONS
%----------------------------------------------------------------------------------------


\\documentclass[11pt,a4paper,sans]{moderncv} % Font sizes: 10, 11, or 12; paper sizes: a4paper, letterpaper, a5paper, legalpaper, executivepaper or landscape; font families: sans or roman


\\moderncvstyle{classic} % CV theme - options include: 'casual' (default), 'classic', 'oldstyle' and 'banking'
\\moderncvcolor{purple} % CV color - options include: 'blue' (default), 'orange', 'green', 'red', 'purple', 'grey' and 'black'

\\usepackage{lipsum} % Used for inserting dummy 'Lorem ipsum' text into the template

\\usepackage[scale=0.8]{geometry} % Reduce document margins
%\\setlength{\\hintscolumnwidth}{3cm} % Uncomment to change the width of the dates column
\\setlength{\\makecvtitlenamewidth}{10cm} % For the 'classic' style, uncomment to adjust the width of the space allocated to your name


%----------------------------------------------------------------------------------------
%	NAME AND CONTACT INFORMATION SECTION
%----------------------------------------------------------------------------------------

\\firstname{ShubhikaBhardwaj} % Your first name
%\\familyname{Bhardwaj} % Your last name

% All information in this block is optional, comment out any lines you don't need
\\title{Curriculum Vitae}
%\\address{Address}{City, State Zip}
\\mobile{(+91) 9870503321}
\\email{shubhikabhardwaj@gmail.com,shubhika054btcse17@igdtuw.ac.in}
%\\homepage{www.linkedin.com/in/anmol-sikka-696537103/} {LinkedIn} % The first argument is the url for the clickable link, the second argument is the url displayed in the template - this allows special characters to be displayed such as the tilde in this example
%\\homepage{https://sites.google.com/view/sikka-anmol/home}{Homepage}
%\\extrainfo{DOB: September 15, 1997}
%\\photo[70pt][0.4pt]{pictures/House} % The first bracket is the picture height, the second is the thickness of the frame around the picture (0pt for no frame)
%\\quote{"A witty and playful quotation" - John Smith}
%----------------------------------------------------------------------------------------

\\begin{document}

\\makecvtitle % Print the CV title
%----------------------------------------------------------------------------------------
%	EDUCATION SECTION
%----------------------------------------------------------------------------------------

\\section{Education}

\\cventry{2017--2021}{B Tech}{}{}{\\textit{Department of Computer Science, \\link[Indira Gandhi Delhi Technical University for Women]{https://www.igdtuw.ac.in/},Delhi, India Percentage 89.5/100}}{}

\\cventry{2017}{Intermediate}{}{}{\\textit{\\link[Venkateshwar International School]{https://www.vis10dwarka.com/}, New Delhi, India 95.2\\%}}{}

\\cventry{2015}{Matriculation}{}{}{\\textit{\\link[Venkateshwar International School]{https://www.vis10dwarka.com/}, New Delhi, India CGPA 10.0}}{}


%----------------------------------------------------------------------------------------
%	INTERESTS SECTION
%----------------------------------------------------------------------------------------


% \\renewcommand{\\listitemsymbol}{-~} % Changes the symbol used for lists
% \\cvlistdoubleitem{Piano}{}
% \\cvlistitem{Baseball}

%----------------------------------------------------------------------------------------
%	Achievements SECTION
%----------------------------------------------------------------------------------------

\\section{Scholastic and Curricular Achievements}

\\cvitem{Present}{Currently working in the Sponsorship team of  \\textbf{TEDx IGDTU} one of the 36 team members in the university}
\\cvitem{Present} {Pursuing \\textbf{Microsoft Authorized Certification } course in \\textbf{Cross Platform Mobile App Development}}
\\cvitem{2017-18}{Headed the Enactus IGDTU as the\\textbf{Project Leader}of Dharini project impacting the lives of \\textbfup{1,500 underprivileged women}directly and indirectly}





%----------------------------------------------------------------------------------------
%	AWARDS SECTION
%----------------------------------------------------------------------------------------
%\\section{Certifications}

%\\cventry{April 2015 -- April 2017}{Certified LabVIEW Associate Developer}{\\textsc{National Instruments}}{}{}{}


%----------------------------------------------------------------------------------------
%	Research SECTION
%----------------------------------------------------------------------------------------


%----------------------------------------------------------------------------------------
%	Techincal Projects SECTION
%----------------------------------------------------------------------------------------





%----------------------------------------------------------------------------------------
%	Course Projects SECTION
%----------------------------------------------------------------------------------------

\\section{Course Projects}
\\cvitem{Autumn 2018}{\\textbf{IGDTUW Database Management Project modelling the University : DBMS)}}
\\cvitem{}{\\textit{Prof. DK Tayal, Department of Computer Science}}

\\cvitem{March 2017}{\\textbf{Toy Store: Computer Science}}
\\cvitem{}{\\textit{Ms.Meenu Kumar, Computer Science}}

\\cvitem{August 2017}{\\textbf{Internet Banking App:Prototype}}
\\cvitem{}{\\textit{Developed for Esya,IIITD}}

%----------------------------------------------------------------------------------------
%	Institute Positions SECTION
%----------------------------------------------------------------------------------------

\\section{Institute Positions}

\\cvitem{September 2018-Present}{\\textit{\\textbf{Head Coordinator, Media Team| \\link[Innerve]{https://innerve-igdtuw.in/}, IGDTUW}}}
\\cvitem{}{\\textit{Technical Festival}}

\\cvitem{December 2018-Present } {\\textit{\\textbf{Head Coordinator,Event Management Team|\\link[Taarangana]{http://www.taarangana.com/}, IGDTUW
}}}

\\cvitem{September 2017}{\\textit{\\textbf{Coordinator, Media Team| \\link[Innerve]{https://innerve-igdtuw.in/}, IGDTUW}}}
\\cvitem{}{\\textit{Technical Festival}}




%----------------------------------------------------------------------------------------
%	Skills SECTION
%----------------------------------------------------------------------------------------

\\section{Technical Skills}
%
\\cvitem{Programming}{\\textsc{Python, Java, C++, C, SQL, HTML}}
\\cvitem{Software}{\\textsc{\\LATEX, Protopie, Atom, MS Word, MS Excel, MS Powerpoint, Javasciprt}}`,

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
& Name of award 3 (Organization that gave you the award) \\hfill 2018 \\\\
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
& This description of your work might spill onto the next page, which is fine. \\hfill $\\rightarrow$ \\\\
& Aliquam volutpat est vel massa. Sed dolor lacus, imperdiet non, ornare non, commodo eu, neque. Integer pretium semper justo. Proin risus. \\\\
& \\\\

% --- Section: Teaching experience ---

{\\color{OliveGreen}{Teaching experience}} 
& \\textbf{Teaching assistant, Department of Subject (University)} \\hfill Fall 2020 \\\\
& STAT 123: Name of course here \\\\
& Topics and description of your responsibilities. Aliquam volutpat est vel massa. Sed dolor lacus, imperdiet non, ornare non, commodo eu, neque. \\\\
& \\textit{Average student rating: X/5.} \\\\
& \\\\

& \\textbf{Teaching assistant, Department of Subject (University)} \\hfill Spring 2020 \\\\
& STAT 234: Name of course here \\\\
& Topics and description of your responsibilities. Aliquam volutpat est vel massa. Sed dolor lacus, imperdiet non, ornare non, commodo eu, neque. \\\\
& \\textit{Average student rating: X/5.} \\\\
& \\\\

& \\textbf{Teaching assistant, Department of Subject (University)} \\hfill Spring 2020 \\\\
& STAT 345: Name of course here \\\\
& Topics and description of your responsibilities. Aliquam volutpat est vel massa. \\\\
& \\textit{Average student rating: X/5.} \\\\
& \\\\

% --- Section: Industry experience ---

{\\color{OliveGreen}{Industry experience}} 
& {\\textbf{Name of company,}} Division of company \\hfill City, State\\\\
& Title of job or internship \\hfill Summer 2020 \\\\
& Description of your responsibilities. Integer pretium semper justo. Proin risus. Nullam id quam. Nam neque. Phasellus at purus et lib ero lacinia dictum. Sed dolor lacus, imperdiet non, ornare non, commodo eu, neque.\\\\
& \\\\
 
& {\\textbf{Name of company,}} Division of company \\hfill City, State\\\\
& Title of job or internship \\hfill Summer 2020 \\\\
& Description of your responsibilities. Integer pretium semper justo. Proin risus. Nullam id quam. Nam neque. Phasellus at purus et lib ero lacinia dictum. Sed dolor lacus, imperdiet non, ornare non, commodo eu, neque.\\\\
& \\\\

% --- Section: Talks and tutorials ---

{\\color{OliveGreen}{Talks and tutorials}} 
& \\textbf{Title of your most recent presentation} \\hfill Month Year \\\\
& Name of conference, workshop, seminar, venue, etc., or a description \\\\
& \\\\

& \\textbf{Title of your second most recent presentation} \\hfill Month Year \\\\
& Name of conference, workshop, seminar, venue, etc., or a description \\\\
& \\\\

% --- Section: Various skills (programming, software, languages, etc.) ---

{\\color{OliveGreen}{Skills}} 
& \\textbf{Programming}\\\\
& Proficient in: programming language 1, programming language 2. \\\\
& Familiar with: programming language 3, programming language 4. \\\\
& \\\\

& \\textbf{Languages} \\\\
& Language 1 (fluent), Language 2 (advanced) \\\\
& \\\\

% --- Section: Service and outreach ---

\\color{OliveGreen}{Service and outreach}
& \\textbf{Title of organization you were in} \\hfill Month Year -- Month Year \\\\
& Description of your responsibilities. Integer pretium semper justo. Proin risus. Aliquam volutpat est vel massa. \\\\
& \\\\

% --- Section: Professional society memberships ---
% --- Note: section title is spread over two lines ---

{\\color{OliveGreen}{Professional}} 
& {\\textbf{Name of professional society.}} \\hfill Month Year -- Present \\\\
{\\color{OliveGreen}{memberships}} 
& Some things you did or conferences you attended. Aliquam volutpat est vel massa. Sed dolor lacus, imperdiet non, ornare non, commodo eu, neque. \\\\
& \\\\

% --- Section: Other interests/hobbies ---

\\nohyphens{\\color{OliveGreen}{Other interests}} & Some of your hobbies etc.\\\\

% --- End of CV! ---

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

professional: `%-------------------------
% Entry-level Resume in LaTeX
% Version - v1.3
% Last Edits - October 5, 2021
% Author : Jayesh Sanwal
% Reach out to me on LinkedIn(/in/jsanwal), with any suggestions, ideas, issues, etc.
%------------------------

%%-------------------------------------
% Notes to the User here -
% 1) Change " Author+an = {N=highlight}" in "Publications.bib", where N is the number at which your name appears
% 2) Use "\\vspace" wisely, that would change spacing, and is currently being used as a hacky fix
% 3) Do not delete the fonts in the left side
% 4) Use the "Rich Text" feature on Overleaf - On the top panel next to source. Makes it much easier for starters on LaTeX to use this template
% 5) Do NOT use periods at the end of bullet points, the sample (ipsum) text might have it
% 6) Use "maxbibnames" on this file to change the maximum number of authors on the paper (Credits: Dr. Natasha Krell) - Default is 3, but change line 92 to add authors

%%-------------------------------------
% Changes from last version (v1.3, October 5, 2021) -
% 1) Summary statement removed, replaced with 4 keywords on top and Impact statement

% Changes from last version (v1.2, August 23, 2021) -
% 1) Changes in the Technical Skills section - renamed to just Skills
% 2) Changed the font size for the name
% 3) Education to the top
%%-------------------------------------


%%-------------------------------------
% Changes to be made in the next version -
% 1) Shift to Class file, make changes here
% 2) Use a fonts folder
% 3) Incorporate Leadership & volunteering together
% 4) Remove \\vspace based 'hacky' fixes
%%-------------------------------------


\\documentclass[a4,10pt]{article}

%%%%%%% --------------------------------------------------------------------------------------
%%%%%%%  STARTING HERE, DO NOT TOUCH ANYTHING 
%%%%%%% --------------------------------------------------------------------------------------

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
 \\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage{multicol}
\\usepackage{hyperref}
\\usepackage{csquotes}
\\usepackage{tabularx}
\\hypersetup{colorlinks=true,urlcolor=black}
\\usepackage[11pt]{moresize}
\\usepackage{setspace}
\\usepackage{fontspec}
\\usepackage[inline]{enumitem}
\\usepackage{array}
\\newcolumntype{P}[1]{>{\\centering\\arraybackslash}p{#1}}
\\usepackage{anyfontsize}

%%%% Set Margins
\\usepackage[margin=1cm, top=1cm]{geometry}

%%%% Set Fonts
\\setmainfont[
BoldFont=SourceSansPro-Semibold.otf, %SourceSansPro-Bold.otf
ItalicFont=SourceSansPro-RegularIt.otf
]{SourceSansPro-Regular.otf}
\\setsansfont{SourceSansPro-Semibold.otf}

%%%% Set Page
\\pagestyle{fancy}
\\fancyhf{} 
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

%%%% Set URL Style
\\urlstyle{same}

%%%% Set Indentation
\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

%%%% Set Secondary Color
\\definecolor{UI_blue}{RGB}{32, 64, 151}

%%%% Define New Commands
\\usepackage[style=nature, maxbibnames=3]{biblatex}
\\addbibresource{Publications.bib}

%%%% Bold Name in Publications
\\renewcommand*{\\mkbibnamegiven}[1]{%
\\ifitemannotation{highlight}
{\\textbf{#1}}
{#1}}

\\renewcommand*{\\mkbibnamefamily}[1]{%
\\ifitemannotation{highlight}
{\\textbf{#1}}
{#1}}

%%%% Set Sections formatting
\\titleformat{\\section}{
\\color{UI_blue} \\scshape \\raggedright \\large 
}{}{0em}{}[\\vspace{-10pt} \\hrulefill \\vspace{-6pt}]

%%%% Set Subtext Formatting
\\newcommand{\\subtext}[1]{
#1\\par\\vspace{-0.2cm}}

% \\newcommand{\\subtextit}[1]{\\vspace{0.15cm}
% \\textit{ #1 \\vspace{-0.2cm}} }

%%%% Set Item Spacing
\\setlist[itemize]{align=parleft,left=0pt..1em}

%%%% New Itemize "Zitemize" Formatting - tighter spacing than itemize
\\newenvironment{zitemize}{
\\begin{itemize}\\itemsep0pt \\parskip0pt \\parsep1pt}
{\\end{itemize}\\vspace{-0.5cm}}


%%%% Define Skills Bold Formatting
\\newcommand{\\hskills}[1]{
\\textbf{\\bfseries #1} }

%%%% Set Subsection formatting
\\titleformat{\\subsection}{\\vspace{-0.1cm} 
\\bfseries \\fontsize{11pt}{2cm}}{}{0em}{}[\\vspace{-0.2cm}]

%%%%%%% --------------------------------------------------------------------------------------
%%%%%%% --------------------------------------------------------------------------------------
%%%%%%%  END OF "DO NOT TOUCH" REGION
%%%%%%% --------------------------------------------------------------------------------------
%%%%%%% --------------------------------------------------------------------------------------

\\begin{document}

%%%%%%% --------------------------------------------------------------------------------------
%%%%%%%  HEADER
%%%%%%% --------------------------------------------------------------------------------------
\\begin{center}
    \\begin{minipage}[b]{0.24\\textwidth}
            \\large (xxx)-xxx-xxxx \\\\
            \\large \\href{mailto:youremail@email.com}{youremail@email.com} 
    \\end{minipage}% 
    \\begin{minipage}[b]{0.5\\textwidth}
            \\centering
            {\\Huge John Snow} \\\\ %
            \\vspace{0.1cm}
            {\\color{UI_blue} \\Large{Target Job}} \\\\
    \\end{minipage}% 
    \\begin{minipage}[b]{0.24\\textwidth}
            \\flushright \\large  %Willing to Relocate
            {\\href{https://www.linkedin.com/in/link/}{linkedin.com/in/yourlink} } \\\\
            \\href{https://Add_your_portfolio_here_}{Portfolio}
    \\end{minipage}   
    
\\vspace{-0.15cm} 
{\\color{UI_blue} \\hrulefill}
\\end{center}
\\vspace{-0.25cm}
\\begin{minipage}[b]{0.25\\textwidth} \\textbullet \\hspace{0.1cm} Keyword 1 \\end{minipage}\\begin{minipage}[b]{0.25\\textwidth} \\textbullet \\hspace{0.1cm} Keyword 2  \\end{minipage}\\begin{minipage}[b]{0.25\\textwidth} \\textbullet \\hspace{0.1cm} Keyword 3 \\end{minipage}\\begin{minipage}[b]{0.25\\textwidth}  \\textbullet \\hspace{0.1cm} Keyword 4 \\end{minipage}

\\hskills{Impact:} A funded research proposals, B technical reports,  \\& C scientific publications with X+ downloads \\& Y+ citations, Z awards  %% This can be customized, but I feel this impact statement makes people want to read more.
\\vspace{-0.2cm}


%%%%%%% --------------------------------------------------------------------------------------
%%%%%%%  EDUCATION
%%%%%%% --------------------------------------------------------------------------------------
\\section{Education }
\\subsection*{Master of Science, Microbiology, {\\normalsize \\normalfont University of the North, GPA: x.xx/4.00} \\hfill Mon yyyy --- Mon yyyy} 
\\vspace{0.1cm}
\\subsection*{Bachelor of Science, Electrical Engineering, {\\normalsize \\normalfont University of Westeros, GPA: x.xx/10.00} \\hfill Mon yyyy --- Mon yyyy} 
\\vspace{0.2cm}



%%%%%%% --------------------------------------------------------------------------------------
%%%%%%%  ACADEMIC PROJECTS
%%%%%%% --------------------------------------------------------------------------------------
\\section{Projects} %% (Or "Research", select as appropriate)

%%% ----- Best way to write items (Credit - FAANGPath.com)
        % \\item Achieved X\\% growth for XYZ using A, B, and C skills.
        % \\item Led XYZ which led to X\\% of improvement in ABC
        % \\item Developed XYZ that did A, B, and C using X, Y, and Z. 


%%%%%%% ----------------------------------- Role 1 ----------------------------------- %%%%%%%
\\subsection*{Role 1, {\\normalsize\\normalfont Department Name} \\hfill Mon yyyy --- Mon yyyy} 
    \\begin{zitemize}
        \\item Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit scelerisque urna, id facilisis metus vestibulum at. In nec sapien dignissim, ultricies dolor accumsan, malesuada augue 
        \\item Aenean nec dui et felis mattis suscipit ut sed tortor. Sed nec viverra nulla. Mauris in dapibus quam.Aenean ut ligula sed orci interdum scelerisque. Cras eget odio mattis, accumsan arcu ac, interdum enim. Quisque et pharetra sem, in euismod leo 
    \\end{zitemize}


%%%%%%% ----------------------------------- Role 2 ----------------------------------- %%%%%%%
\\subsection*{Role 2, {\\normalsize\\normalfont Department Name} \\hfill Mon yyyy --- Mon yyyy} 
    \\begin{zitemize}
        \\item Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit scelerisque urna, id facilisis metus vestibulum at. In nec sapien dignissim, ultricies dolor accumsan, malesuada augue 
        \\item Aenean nec dui et felis mattis suscipit ut sed tortor. Sed nec viverra nulla. Mauris in dapibus quam.Aenean ut ligula sed orci interdum scelerisque. Cras eget odio mattis, accumsan arcu ac, interdum enim. Quisque et pharetra sem, in euismod leo 
    \\end{zitemize}


%%%%%%% ----------------------------------- Role 3 ----------------------------------- %%%%%%%
\\subsection*{Role 3, {\\normalsize\\normalfont Department Name} \\hfill Mon yyyy --- Mon yyyy} 
    \\begin{zitemize}
        \\item Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit scelerisque urna, id facilisis metus vestibulum at. In nec sapien dignissim, ultricies dolor accumsan, malesuada augue 
        \\item Aenean nec dui et felis mattis suscipit ut sed tortor. Sed nec viverra nulla. Mauris in dapibus quam.Aenean ut ligula sed orci interdum scelerisque. Cras eget odio mattis, accumsan arcu ac, interdum enim. Quisque et pharetra sem, in euismod leo 
    \\end{zitemize}



%%%%%%% --------------------------------------------------------------------------------------
%%%%%%%  WORK EXPERIENCE
%%%%%%% --------------------------------------------------------------------------------------
\\section{Experience}

%%% ----- Best way to write items (Credit - ResumePuppy.com)
        % \\item Developed AngularJS microservice to automate parsing of ~300 emails/day for efficient service request categorization using Linux MBox & Perl scripts; reduced manual re-allocation by 87%.
        % \\item Led the development, build and bring-up execution of Lyft’s first functional AV platform from start to finish; established fleet-grade product reliability over 5 months.
        % \\item Enhanced user experience by fine-tuning stored procedures & SQL queries for efficient data retrieval from ~4M records accessed by 5000+ users worldwide.
        % \\item Built a custom menu single handedly using HTML5, CSS3, XML and JSP and improved the performance of existing application by tuning the PL/SQL scripts by 20\\% and reduced on-migration time.
        

%%%%%%% ----------------------------------- Role 4 ----------------------------------- %%%%%%%
\\subsection*{XXX Scientist {\\normalsize\\normalfont (Intern)} \\hfill Mon yyyy --- Mon yyyy} 
\\subtext{Add Company Name Here \\hfill Location} 
    \\begin{zitemize}
        \\item Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet justo porta magna ultrices ultricies. Nam sem augue, lobortis sit amet venenatis sed, rutrum vel dui. Fusce mauris libero, ultrices quis convallis venenatis, malesuada at neque. Vivamus facilisis metus enim, convallis egestas dui dictum vel. Integer lacus nisl, molestie vitae bibendum eget, finibus vitae ligula. 
        \\item Duis fermentum arcu vitae faucibus cursus. Praesent aliquet id risus dictum lobortis. Donec varius tincidunt aliquet.Nulla congue nulla sed accumsan consequat. Pellentesque facilisis cursus faucibus.
    \\end{zitemize}


%%%%%%% ----------------------------------- Role 5 ----------------------------------- %%%%%%%
\\subsection*{YYY Engineer {\\normalsize\\normalfont (Intern)} \\hfill Mon yyyy --- Mon yyyy} 
\\subtext{Add Company Name Here \\hfill Location} 
    \\begin{zitemize}
        \\item Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet justo porta magna ultrices ultricies. Nam sem augue, lobortis sit amet venenatis sed, rutrum vel dui. Fusce mauris libero, ultrices quis convallis venenatis, malesuada at neque. 
        \\item Duis fermentum arcu vitae faucibus cursus. Praesent aliquet id risus dictum lobortis. Donec varius tincidunt aliquet.
    \\end{zitemize}




%%%%%%% --------------------------------------------------------------------------------------
%%%%%%%  SKILLS
%%%%%%% --------------------------------------------------------------------------------------
\\section{Skills}
\\begin{tabular}{p{7em} p{48em}}
\\hskills{Physics} &  A, B, C, D, E, F \\\\
\\hskills{Management} & G, H, I, J, K, L, M  \\\\
\\hskills{Programming} & N, O, P, Q, R, S, T \\\\
\\end{tabular}
\\vspace{-0.2cm}



%%%%%%% --------------------------------------------------------------------------------------
%%%%%%%  VOLUNTEER EXPERIENCE
%%%%%%% --------------------------------------------------------------------------------------
% \\section{Volunteer (or LEADERSHIP) Experience}

%%%%%%% ----------------------------------- Role 6 ----------------------------------- %%%%%%%
% \\subsection*{Position, Org \\hfill Mon yyyy --- Mon yyyy} 
%     \\begin{zitemize}
            % \\item \\textbf{Short Project Title.} {Build a project that does something and had quantified success using A, B, and C.}
%     \\end{zitemize}


%%%%%%% ----------------------------------- Role 6 ----------------------------------- %%%%%%%
% \\subsection*{Position, Org \\hfill Mon yyyy --- Mon yyyy} 
%     \\begin{zitemize}
            % \\item \\textbf{Short Project Title.} {Build a project that does something and had quantified success using A, B, and C.}
%     \\end{zitemize}



%%%%%%% --------------------------------------------------------------------------------------
%%%%%%%  PUBLICATIONS
%%%%%%% --------------------------------------------------------------------------------------
\\section{Publications} 
\\renewcommand\\refname{\\vskip -1.5em}
\\nocite{*}
\\printbibliography[heading=none]
\\vspace{-0.4cm}



%%%%%%% --------------------------------------------------------------------------------------
%%%%%%%  AWARDS & HONORS
%%%%%%% --------------------------------------------------------------------------------------
\\section{Awards \\& Honors}
\\begin{tabular}[t]{ p{4em} p{50em}}
\\hskills{yyyy} & Award 1 (\\hskills{\\$xxxxxx}); Award 2 (\\hskills{\\$xxxxxx}); Award 3 (\\hskills{\\$xxxxxx}); Award 4 (\\hskills{\\$xxxxxx}); Award 5 (\\hskills{\\$xxxxxx}) \\\\ % 
\\hskills{yyyy} & Award 6 (\\hskills{\\$xxxxxx}); Award 7 (\\hskills{\\$xxxxxx}); Award 8 (\\hskills{\\$xxxxxx}) \\\\
\\end{tabular} 

%%%%%%% ---------------------------- END DOC HERE ---------------------------- %%%%%%% 
\\end{document}`,

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


\\end{document}`

}