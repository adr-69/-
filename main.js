function startPage() {
  const loadingscreen = `
<div class="loading">
  <div class="app">
    <h1>ADRIAN WEBSITE</h1>
  </div>
</div>
  `;
  document.getElementById('startPage').style.display = 'block';
  document.getElementById('body').style.display = 'none';
  document.getElementById('startPage').innerHTML = loadingscreen;
  setTimeout(() => {
    html();
  }, 2000);
  
}
function html() {
  const mainpage = `
<div class="main-nav">
  <div class="container">
    <a href="/"><h1 class="logo">ADRIAN</h1></a>
    <div class="burger" id="burger" onclick="toggleMenu()">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
    <nav class="nav-links" id="navLinks">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#project">Project</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
</div>
  
<div class="main-home" id="home">
  <div class="home-content">
    <h2>Hi! I'm</h2>
    <h1>Adrian Martin</h1>
    <h3>Malware Dev. | Ethical Hacker</h3>
    <br />
    <a href="#about" class="btn">View About Me</a>
  </div>
</div>
  
  <div class="main-about" id="about">
    <h1>ABOUT ME</h1>
    <br />
<p>
  I'm <span>Adrian Martin</span>, a <span>15-year-old Grade 10 student</span> with interest in <span>Cybersecurity</span>, especially <span>Ethical Hacking</span>, <span>Malware Analysis</span>, <span>Front-End Web Development</span>, and <span>Web Design</span>. I’ve been learning how to identify and understand different types of malware like <span>Worm Viruses</span>, <span>Phishing</span>, and <span>Ransomware</span>. I also explore <span>Networking</span>, and I like testing open networks and doing a bit of <span>penetration testing</span>
</p>
<p>
  I focus on building simple but modern <span>Portfolio</span> and <span>Personal Websites</span> that include clean designs and smooth animations. When I'm not coding, I usually play games like <span>CODM</span> and <span>PUBG MOBILE</span>, or chill with a cup of <span>coffee</span>. During my free time, I dig deeper into cybersecurity, try out new coding techniques, and keep sharpening what I know in <span>ethical hacking</span>. I'm really passionate about <span>technology</span>, solving problems, and figuring out how <span>digital systems</span> work.
</p>
  </div>
  
  <div class="main-skills" id="skills">
    <h1>MY SKILLS</h1>
    <br />
    <div class="left-skills">
      <div class="box-skills">
        <img class="skills-logo" src="grpimage/skillsIMG/html.png" alt="" />
        <h1>HTML (HyperText Markup Language)</h1>
      </div>
      <div class="box-skills">
        <img class="skills-logo" src="grpimage/skillsIMG/css.png" alt="" />
        <h1>CSS (Cascading Style Sheets)</h1>
      </div>
      <div class="box-skills">
        <img class="skills-logo" src="grpimage/skillsIMG/js.png" alt="" />
        <h1>JS (JavaScript)</h1>
      </div>
      <div class="box-skills">
        <img class="skills-logo" src="grpimage/skillsIMG/c.png" alt="" />
        <h1>C</h1>
      </div>
      <div class="box-skills">
        <img class="skills-logo" src="grpimage/skillsIMG/sh.jpg" alt="" />
        <h1>SH (Shell Script)</h1>
      </div>
      <div class="box-skills">
        <img class="skills-logo" src="grpimage/skillsIMG/python.png" alt="" />
        <h1>PYTHON</h1>
      </div>
      <div class="box-skills">
        <img class="skills-logo" src="grpimage/skillsIMG/c-.png" alt="" />
        <h1>C++</h1>
      </div>
      <div class="box-skills">
        <img class="skills-logo" src="grpimage/skillsIMG/php.png" alt="" />
        <h1>PHP</h1>
      </div>
      <div class="box-skills">
        <img class="skills-logo" src="grpimage/skillsIMG/java.png" alt="" />
        <h1>JAVA</h1>
      </div>
      <div class="box-skills">
        <img class="skills-logo" src="grpimage/skillsIMG/street.png" alt="" />
        <h1>CALISTHENIC</h1>
      </div>
    </div>
    <div class="right-skills">
      <h1>CYBERSECURITY SKILLS</h1>
      <br />
      <div class="box-cs-skills">
        <h1>MALWARE ANALYSIS & THREAT RESEARCH</h1>
        <p>Static & Dynamic Malware Analysis</p>
        <p>Signature & Behavior-Based Detection</p>
        <p>Threat Intelligence</p>
        <p>Incident Response</p>
      </div>
      <div class="box-cs-skills">
        <h1>OSINT - OPEN-SOURCE RESEARCH</h1>
        <p>Data Gathering & Ahalysis</p>
        <p>Footprinting & Reconnaissance</p>
        <p>Dark Web & Surface Web Reserch</p>
      </div>
      <div class="box-cs-skills">
        <h1>ETHICAL HACKING & SECURITY</h1>
        <p>Web Reserch & Vulnerability Assessment</p>
        <p>Penentration Testing (Basics)</p>
        <p>Network Security Basics</p>
        <p>Common Cyber Threats</p>
      </div>
      <div class="box-tools-skills">
        <h1>INFORMATION GATHERING / RECONNAISSANCE</h1>
        <p>NMAP - For Network Scan & Ports</p>
      </div>
      <div class="box-tools-skills">
        <h1>VULNERABILITY SCANNING</h1>
        <p>NESSUS - For Vulnerability Network Scanner</p>
        <p>OpenVAS - Open-Source Vulnerability Scanner</p>
        <p>NIKTO - To Scan Vulnerability of WebServer</p>
      </div>
    </div>
  </div>
   
<div class="main-project" id="project">
  <h1>MY PERSONAL PROJECTS</h1>
  <br />
  <div class="left-project">
    
    <div class="box-project">
      <img class="project-logo" src="grpimage/projectIMG/forcrushv1.jpeg" alt="FOR CRUSH V1" />
      <p>FOR CRUSH V1</p>
      <a href="https://adr-69.github.io/4crush/crushv1.html" target="_blank">Live Preview</a>
      <a href="#"><button>Download Code (1 File)</button></a>
    </div>
    
    <div class="box-project">
      <img class="project-logo" src="grpimage/projectIMG/forcrushv2.jpeg" alt="FOR CRUSH V2" />
      <p>FOR CRUSH V2</p>
      <a href="https://adr-69.github.io/4crush/crushv2.html" target="_blank">Live Preview</a>
      <a href="#"><button>Download Code (1 File)</button></a>
    </div>
    
    <div class="box-project">
      <img class="project-logo" src="grpimage/projectIMG/forcrushv3.jpeg" alt="FOR CRUSH V3" />
      <p>FOR CRUSH V3</p>
      <a href="https://adr-69.github.io/4crush/crushv3.html" target="_blank">Live Preview</a>
      <a href="#"><button>Download Code (1 File)</button></a>
    </div>
    
    <div class="box-project">
      <img class="project-logo" src="grpimage/projectIMG/forcrushv4.jpg" alt="FOR CRUSH V4" />
      <p>FOR CRUSH V4</p>
      <a href="https://adr-69.github.io/4crush/crushv4.html" target="_blank">Live Preview</a>
      <a href="#"><button>Download Code (1 File)</button></a>
    </div>
    
    <div class="box-project">
      <img class="project-logo" src="grpimage/projectIMG/customedittxt.jpeg" alt="Custom Editable Text" />
      <p>CUSTOM EDIT TEXT</p>
      <a href="#" onclick="alert('Link unavailable. Stay tuned.'); return false;">Live Preview</a>
      <a href="#"><button>Download Code (1 File)</button></a>
    </div>
    
    <div class="box-project">
      <img class="project-logo" src="grpimage/projectIMG/forEX.jpeg" alt="FOR YOUR EX" />
      <p>FOR UR EX</p>
      <a href="https://adr-69.github.io/4crush/ex.html" target="_blank">Live Preview</a>
      <a href="#"><button>Download Code (1 File)</button></a>
    </div>
    
    <div class="box-project">
      <img class="project-logo" src="grpimage/projectIMG/giftgame.jpeg" alt="Gift Game Project" />
      <p>GIFT GAME</p>
      <span>(Notifications sent via Discord)</span>
      <a href="https://adr-69.github.io/4crush/giftv2.html" target="_blank">Live Preview</a>
      <a href="#"><button>Download Code (1 File)</button></a>
    </div>
    
    <div class="box-project">
      <img class="project-logo" src="grpimage/projectIMG/namamasko.jpeg" alt="Namamasko Christmas Project" />
      <p>NAMAMASKO</p>
      <span>(Notifications sent via Discord)</span>
      <a href="https://adr-69.github.io/namamasko/paskov1.html" target="_blank">Live Preview</a>
      <a href="#"><button>Download Code (1 File)</button></a>
    </div>
    
    <div class="box-project">
      <img class="project-logo" src="grpimage/projectIMG/MusicRandomPlay.jpeg" alt="Music Random Player" />
      <p>MUSIC RANDOM PLAY</p>
      <a href="#" onclick="alert('Link unavailable. Stay tuned.'); return false;">Live Preview</a>
      <a href="#"><button>Download Code (1 File)</button></a>
    </div>
    
    <div class="box-project">
      <img class="project-logo" src="grpimage/projectIMG/likengl.jpeg" alt="My Own NGL" />
      <p>MY OWN NGL</p>
      <span>(Notifications sent via Discord)</span>
      <a href="https://adr-69.github.io/sendkasakin/message.html" target="_blank">Live Preview</a>
      <a href="#"><button>Download Code (1 File)</button></a>
    </div>
    
    <div class="box-project">
      <img class="project-logo" src="grpimage/projectIMG/mesbottle.jpg" alt="Message In Bottle" />
      <p>MESSAGE IN THE BOTTLE</p>
      <a href="https://adr-69.github.io/4crush/in.html" target="_blank">Live Preview</a>
      <a href="#"><button>Download Code (1 File)</button></a>
    </div>
    
  </div>
</div>
<div class="for-more">
  <h1>BONUS</h1>
  <br />
  <img class="formore-img" src="grpimage/skillsIMG/akirajs.jpg" alt="AkiraJS" />
  <p>
    I am the creator of <span>AkiraJS</span>, my own version of <span>JavaScript</span>. (<span>A dedicated website</span> for it is currently under development.) Several <span>features</span> are already available. Check <a href="#">CDN LINK HERE</a> if you want to see the <span>CDN</span> (note: <span>not available in some countries</span>) or download the feature through <a href="#">DOWNLOAD</a> <span>this TXT file</span>.
  </p>
</div>
  
<div class="main-contact" id="contact">
    <div class="left-form">
      <h1>SERVICES (soon)</h1>
      <ul>
        <li>Landing Page <a href="#">EXAMPLE</a></li>
        <li>Portfolio Website <a href="#">EXAMPLE</a></li>
        <li>Personal Website <a href="#">EXAMPLE</a></li>
        <br />
        <p style="font-weight: bold;">Style/Designs</p>
        <li>Minimalist</li>
        <li>Dark/White Modeli>
        <li>Glass Design</li>
      </ul>
      <p>This is Free, cuz im bored.</p>
      <h2>PM if you want.</h2>
    </div>
  <div class="right-social">
    <h1>SOCIAL MEDIA</h1>
    <div class="box-social">
      <img class="logo-social" src="grpimage/contactIMG/facebook.png" alt="Facebook" />
      <p><a href="https://www.facebook.com/share/15Eyt1bzUJ/">FACEBOOK</a></p>
    </div>
    <div class="box-social">
      <img class="logo-social" src="grpimage/contactIMG/tiktok.png" alt="TikTok" />
      <p><a href="https://www.tiktok.com/@akiramae18_cs?_t=ZS-8wB5igWdkLn&_r=1">TIKTOK</a></p>
    </div>
    <h1>OTHER</h1>
    <div class="box-social">
      <img class="logo-social" src="grpimage/contactIMG/github.png" alt="GitHub" />
      <p><a href="https://github.com/adr-69">GITHUB</a></p>
    </div>
  </div>
</div>

<div class="main-FAQs" id="faqs">
  <h1>FAQs</h1>
  <p>Do you have any questions about the website?</p>
  <a href="#contact" class="faq-link">Contact me</a>
  <br /> <hr style="width: 100px; border: 1px solid black;" /> <br />
  <p>Learn Ethical Hacking??<p>
  <a href="https://adr-69.github.io/CSPT/CSh.html">VISIT THIS LINK</a>
  <br />
  
</div>

<footer>
  <p>&copy; 2025 Adrian's | Personal WS. All rights reserved.</p>
</footer>
  `;
  document.getElementById('body').innerHTML = mainpage;
  document.getElementById('startPage').style.display = 'none';
  document.getElementById('body').style.display = 'block';
}
window.onload = startPage;

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const burger = document.getElementById("burger");
  nav.classList.toggle("open");
  burger.classList.toggle("active");
}

function linkERROR() {
  alert("not publish at GITHUB");
}
function nonelink() {
  alert("none link")
}
  setTimeout(function () {
    console.clear();
    console.log("%cSTOP RIGHT THERE!", "color: red; font-size: 48px; font-weight: bold; text-shadow: 2px 2px black;");
    console.log("%cThis console is for developers only.", "color: orange; font-size: 20px; font-weight: bold;");
    console.log("%cIf someone told you to paste code here, it's probably a scam or an attempt to steal your data.", "color: white; background: #ff0000; font-size: 16px; padding: 5px;");
    console.log("%cADRIAN Security Warning:", "color: cyan; font-size: 16px; font-weight: bold;");
    console.log("%cNever paste unknown code into the console unless you fully understand what it does.", "color: yellow; font-size: 14px;");
    console.log("%cStay safe, coder. – AkiraJS Dev Team", "color: lime; font-size: 12px; font-style: italic;");
  }, 1000);
