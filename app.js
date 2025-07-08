  quizData = [
            { question: "वेब स्टैंडर्ड्स को कौन निर्धारित करता है?", options: ["Microsoft", "W3C", "Apple", "Google"], correctAnswer: 1 }, // W3C
            { question: "HTML में कमेंट लिखने के लिए कौन-सा सिंबल उपयोग होता है?", options: ["//", "/* */", "<!-- -->", "#"], correctAnswer: 2 }, // <!-- -->
            { question: "एक CSS फ़ाइल जोड़ने के लिए कौन-सा टैग उपयोग होता है?", options: ["<css>", "<style>", "<link>", "<script>"], correctAnswer: 2 }, // <link>
            { question: "HTML में टेक्स्ट को बोल्ड करने के लिए कौन-सा तरीका है?", options: ["<b>", "<bold>", "<strong>", "Both A and C"], correctAnswer: 3 }, // Both A and C
            { question: "सबसे बड़े हेडिंग एलीमेंट कौन-सा है?", options: ["<heading>", "<h6>", "<h1>", "<head>"], correctAnswer: 2 }, // <h1>
            { question: "छवियों के लिए alternate text कौन-सा attribute प्रदान करता है?", options: ["alt", "title", "src", "href"], correctAnswer: 0 }, // alt
            { question: "संख्याबद्ध सूची के लिए कौन-सा टैग है?", options: ["<ul>", "<ol>", "<li>", "<dl>"], correctAnswer: 1 }, // <ol>
            { question: "चेकबॉक्स बनाने के लिए कौन-सा टैग प्रयोग होता है?", options: ["<checkbox>", "<input type='checkbox'>", "<check>", "<input check>"], correctAnswer: 1 }, // <input type='checkbox'>
            { question: "ड्रॉपडाउन सूची बनाने के लिए टैग कौन-सा है?", options: ["<select>", "<dropdown>", "<option>", "<form>"], correctAnswer: 0 }, // <select>
            { question: "CSS में टेक्स्ट का आकार बदलने वाले property कौन-सी है?", options: ["font-size", "text-size", "size", "font"], correctAnswer: 0 }, // font-size
            { question: "CSS में बुलेट लिस्ट बनाने के लिए कौन-सी property है?", options: ["list: bullet;", "list-style-type: disc;", "list-style: bullet;", "bullet-mode: on;"], correctAnswer: 1 }, // list‑style‑type: disc;
            { question: "फ़ॉन्ट फ़ैमिली बदलने वाली CSS property कौन‑सी है?", options: ["font-style", "font-weight", "font-family", "font-type"], correctAnswer: 2 }, // font-family
            { question: "सभी पैराग्राफ़ को केंद्र में संरेखित करने के लिए CSS क्या है?", options: ["p {text-align:center}", "p {align:center}", "p {center:center}", "p {align-text:center}"], correctAnswer: 0 }, // p {text-align:center;}
            { question: "पृष्ठभूमि का रंग बदलने वाली CSS property कौन‑सी है?", options: ["background-color", "bgcolor", "color", "background"], correctAnswer: 0 }, // background-color
            { question: "HTML में JavaScript शामिल करने के लिए कौन-सा टैग उपयोग होता है?", options: ["<script>", "<js>", "<javascript>", "<code>"], correctAnswer: 0 }, // <script>
            { question: "बाहरी स्क्रिप्ट 'app.js' जोड़ने का सही सिंटैक्स क्या है?", options: ["<script src='app.js'>", "<script href='app.js'>", "<script ref='app.js'>", "<script link='app.js'>"], correctAnswer: 0 }, // <script src='app.js'>
            { question: "HTML तत्व पर क्लिक करने पर कौन‑सा इवेंट होता है?", options: ["onmouse", "onchange", "onclick", "onmouseover"], correctAnswer: 2 }, // onclick
            { question: "एक alert बॉक्स में 'Hello' कैसे दिखाएँ?", options: ["alertBox('Hello');", "msg('Hello');", "alert('Hello');", "msgBox('Hello');"], correctAnswer: 2 }, // alert('Hello');
            { question: "JavaScript में strict equality के लिए कौन-सा operator उपयोग होता है?", options: ["=", "==", "===", "="], correctAnswer: 2 }, // ===
            { question: "JavaScript में constant घोषित करने के लिए keyword कौन-सा है?", options: ["var", "let", "const", "constant"], correctAnswer: 2 }, // const
            { question: "JavaScript फ़ंक्शन कैसे डिक्लेयर किया जाता है?", options: ["function = myFunc()", "function myFunc()", "func myFunc()", "def myFunc()"], correctAnswer: 1 }, // function myFunc()
            { question: "JavaScript में उच्चतम मान पाने के लिए कौन-सी method है?", options: ["Math.switch()", "Math.ceil()", "Math.max()", "ceil()"], correctAnswer: 2 }, // Math.max()
            { question: "Array के अंत में आइटम जोड़ने के लिए कौन-सी method है?", options: ["push()", "pop()", "shift()", "unshift()"], correctAnswer: 0 }, // push()
            { question: "जब iterations की संख्या ज्ञात हो तो कौन‑सा loop ठीक है?", options: ["for", "while", "do-while", "map"], correctAnswer: 0 }, // for
            { question: "DOM का पूरा नाम क्या है?", options: ["Document Object Model", "Data Object Model", "Document Onload Model", "Data Oriented Model"], correctAnswer: 0 }, // Document Object Model
            { question: "HTML तत्व का टेक्स्ट बदलने के लिए कौन‑सी method है?", options: ["element.content", "element.innerHTML", "element.text", "element.html"], correctAnswer: 1 }, // element.innerHTML
            { question: "'myFunction' नामक फ़ंक्शन कैसे कॉल करें?", options: ["call myFunction()", "myFunction()", "execute myFunction()", "run myFunction()"], correctAnswer: 1 }, // myFunction()
            { question: "JavaScript किस‑साइड भाषा है?", options: ["Client", "Server", "Both", "None"], correctAnswer: 2 }, // Both
            { question: "CSS में comment के लिए कौन‑सा सिंबल है?", options: ["//", "/* */", "<!-- -->", "#"], correctAnswer: 1 }, // /* */
            { question: "CSS में default position value क्या है?", options: ["static", "relative", "absolute", "fixed"], correctAnswer: 0 }, // static
            { question: "HTML में important text दिखाने हेतु कौन‑सा टैग है?", options: ["<b>", "<strong>", "<i>", "<em>"], correctAnswer: 1 }, // <strong>
            { question: "इटैलिक टेक्स्ट बनाने के लिए कौन‑सा टैग उपयोग होता है?", options: ["<i>", "<italic>", "<em>", "Both A and C"], correctAnswer: 3 }, // Both A and C
            { question: "एक article परिभाषित करने के लिए HTML5 में कौन‑सा टैग है?", options: ["<section>", "<article>", "<div>", "<post>"], correctAnswer: 1 }, // <article>
            { question: "वीडियो embed करने के लिए टैग कौन‑सा है?", options: ["<media>", "<video>", "<embed>", "<movie>"], correctAnswer: 1 }, // <video>
            { question: "हाइपरलिंक को नए टैब में खोलने के लिए कौन‑सा attribute है?", options: ["target='_new'", "target='_blank'", "newtab=true", "target='new'"], correctAnswer: 1 }, // target='_blank'
            { question: "Navigation links परिभाषित करने के लिए HTML5 टैग कौन‑सा है?", options: ["<nav>", "<navigate>", "<navigation>", "<links>"], correctAnswer: 0 }, // <nav>
            { question: "Inline styled कंटेंट के लिए कौन‑सा attribute है?", options: ["class", "style", "css", "font"], correctAnswer: 1 }, // style
            { question: "JavaScript में string को integer में बदलने के लिए कौन‑सी method है?", options: ["Number()", "parseInt()", "String()", "parseStr()"], correctAnswer: 1 }, // parseInt()
            { question: "निम्न में से कौन‑सा JavaScript डेटा टाइप नहीं है?", options: ["string", "number", "boolean", "character"], correctAnswer: 3 }, // character
            { question: "JavaScript में if स्टेटमेंट लिखने का सही तरीका क्या है?", options: ["if i == 5 then", "if (i == 5)", "if i = 5", "if i equals 5"], correctAnswer: 1 }, // if (i == 5)
            { question: "JavaScript कोड <script> में कब चलता है?", options: ["before page loads", "after page loads", "when called", "always"], correctAnswer: 2 }, // when called
            { question: "JavaScript में array दर्शाने के लिए कौन‑सा सिंबल उपयोग होता है?", options: ["{}", "[]", "()", "//"], correctAnswer: 1 }, // []
            { question: "संख्या को निकटतम पूर्णांक के ऊपर गोल करने के लिए कौन‑सी method है?", options: ["Math.round()", "Math.ceil()", "Math.floor()", "Math.up()"], correctAnswer: 1 },
            {
                question: "HTML में एक लिंक बनाने के लिए कौन-सा टैग उपयोग किया जाता है?", options: ["<link>", "<a>", "<href>", "<url>"],
                correctAnswer: 1
            },
            {
                question: "JavaScript में एक वेरिएबल घोषित करने के लिए कौन-सा कीवर्ड उपयोग किया जाता है?", options: ["var", "int", "let", "const"], correctAnswer: 0
            },
            {
                question: "CSS में बैकग्राउंड रंग सेट करने के लिए कौन-सी प्रॉपर्टी उपयोग की जाती है?", options: ["background-color", "color", "bgcolor", "background"], correctAnswer: 0
            },
            {
                question: "HTML में एक इमेज जोड़ने के लिए कौन-सा टैग उपयोग किया जाता है?", options: ["<image>", "<img>", "<pic>", "<src>"], correctAnswer: 1
            },
            {
                question: "JavaScript में एक फ़ंक्शन कैसे घोषित किया जाता है?", options: ["function myFunction()", "def myFunction()", "func myFunction()", "function:myFunction()"], correctAnswer: 0
            },
            {
                question: "CSS में टेक्स्ट को केंद्र में संरेखित करने के लिए कौन-सी प्रॉपर्टी उपयोग की जाती है?", options: ["text-align: center;", "align-text: center;", "text-center: true;", "center-text: yes;"], correctAnswer: 0
            },
            {
                question: "HTML में एक अनऑर्डर्ड लिस्ट बनाने के लिए कौन-सा टैग उपयोग किया जाता है?", options: ["<ol>", "<ul>", "<li>", "<list>"], correctAnswer: 1
            },
        ];

        const container = document.getElementById("quizContainer");
        const nextBtn = document.getElementById("nextBtn");
        const resultBox = document.getElementById("resultBox");

        let current = 0;
        let score = 0;

        function showQuestion(index) {
            container.innerHTML = "";
            const q = quizData[index];

            const question = document.createElement("h3");
            question.textContent = q.question;
            container.appendChild(question);

            q.options.forEach((opt, i) => {
                const btn = document.createElement("button");
                btn.textContent = opt;
                btn.addEventListener("click", () => checkAnswer(i, btn));
                container.appendChild(btn);
            });
        }

        function checkAnswer(selected, selectedBtn) {
            const buttons = container.querySelectorAll("button");
            buttons.forEach(btn => btn.disabled = true); // disable all buttons

            const correctIndex = quizData[current].correctAnswer;

            if (selected === correctIndex) {
                selectedBtn.classList.add("correct");
                score++;
            } else {
                selectedBtn.classList.add("wrong");
                buttons[correctIndex].classList.add("correct"); // show correct answer too
            }

            current++;
            if (current < quizData.length) {
                nextBtn.style.display = "block";
            } else {
                nextBtn.textContent = "Show Result";
                nextBtn.style.display = "block";
            }
        }

        nextBtn.addEventListener("click", () => {
            nextBtn.style.display = "none";
            if (current < quizData.length) {
                showQuestion(current);
            } else {
                showResult();
            }
        });

        function showResult() {
            container.innerHTML = "";
            nextBtn.style.display = "none";
            resultBox.innerHTML = `<h2>🎉 You scored ${score}/${quizData.length}</h2>`;
        }

        showQuestion(current);