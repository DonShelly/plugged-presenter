const slides = [
  {
    id: "welcome",
    section: "OpenClaw Basics",
    title: "Plugged: AI Workflows for Founders",
    description: "What OpenClaw is and why founders care",
    kind: "html",
    content: `
      <div class="slide-content">
        <div class="pill">Workshop Deck · v2</div>
        <h1>OpenClaw for founders</h1>
        <p>
          Think of OpenClaw as an AI operator that can <strong>actually do things</strong>:
          read docs, run scripts, manage browser tasks, post updates, schedule jobs, and coordinate specialist agents.
        </p>
        <div class="callout">Not just chat. Real actions.</div>
        <ul>
          <li>Run repeatable workflows without manual copy-paste</li>
          <li>Keep a human in control with approvals where needed</li>
          <li>Scale from one workflow to a full agent team</li>
        </ul>
      </div>
    `,
    next: "visual-proof",
  },
  {
    id: "visual-proof",
    section: "OpenClaw Basics",
    title: "Real interface snapshots",
    description: "Screens and examples, not abstract diagrams",
    kind: "html",
    content: `
      <div class="slide-content">
        <h2>What this looks like in practice</h2>
        <p class="muted-line">Live screenshots from workflow canvases and venture outputs.</p>
        <div class="visual-grid">
          <div class="visual-card">
            <img src="shots/deck-workflow-choice.png" alt="Workflow choice slide screenshot" />
            <div class="visual-caption">Interactive workflow branching inside the deck</div>
          </div>
          <div class="visual-card">
            <img src="shots/freshraise.png" alt="FreshRaise screenshot" />
            <div class="visual-caption">FreshRaise example output screen</div>
          </div>
          <div class="visual-card">
            <img src="shots/landolio.png" alt="Landolio screenshot" />
            <div class="visual-caption">Landolio live venture screenshot</div>
          </div>
        </div>
      </div>
    `,
    next: "what-is-openclaw",
  },
  {
    id: "what-is-openclaw",
    section: "OpenClaw Basics",
    title: "What OpenClaw is (in plain English)",
    description: "Layman-friendly explanation",
    kind: "html",
    content: `
      <div class="slide-content">
        <h2>Imagine this setup</h2>
        <div class="flow-grid">
          <div class="flow-card"><strong>You</strong><span>Give a goal</span></div>
          <div class="flow-arrow">→</div>
          <div class="flow-card"><strong>OpenClaw</strong><span>Breaks it into steps</span></div>
          <div class="flow-arrow">→</div>
          <div class="flow-card"><strong>Tools</strong><span>Browser, files, APIs, messages</span></div>
          <div class="flow-arrow">→</div>
          <div class="flow-card"><strong>Result</strong><span>Done task + status back to you</span></div>
        </div>
        <p class="muted-line">
          It’s like a very fast digital chief of staff that can operate software, not just suggest what to do.
        </p>
      </div>
    `,
    next: "how-it-works",
  },
  {
    id: "how-it-works",
    section: "OpenClaw Basics",
    title: "How it works (behind the scenes)",
    description: "Message → plan → tools → memory",
    kind: "html",
    content: `
      <div class="slide-content">
        <h2>OpenClaw loop</h2>
        <ol class="big-list">
          <li><strong>Understand the request</strong> — what outcome you actually want</li>
          <li><strong>Plan execution</strong> — choose tools and order of operations</li>
          <li><strong>Run actions</strong> — file edits, browser tasks, API calls, automations</li>
          <li><strong>Store context</strong> — memory + logs so it can continue reliably</li>
          <li><strong>Report back</strong> — concise status + what changed</li>
        </ol>
        <div class="callout">You stay in control. Hard gates (money, external comms, legal) can require your approval.</div>
      </div>
    `,
    next: "setup-overview",
  },
  {
    id: "setup-overview",
    section: "OpenClaw Basics",
    title: "Setup in founder terms (10–20 mins)",
    description: "Start simple, then scale",
    kind: "html",
    content: `
      <div class="slide-content">
        <h2>Quick setup plan</h2>
        <div class="two-col">
          <div>
            <h3>Phase 1 — Core</h3>
            <ul>
              <li>Install OpenClaw</li>
              <li>Connect model/provider keys</li>
              <li>Connect one messaging channel (Telegram/Discord)</li>
              <li>Enable only the tools you need first</li>
            </ul>
          </div>
          <div>
            <h3>Phase 2 — Workflows</h3>
            <ul>
              <li>Create 1 repeatable workflow</li>
              <li>Add cron schedule</li>
              <li>Add memory + logging</li>
              <li>Then add specialist sub-agents</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    next: "setup-principles",
  },
  {
    id: "setup-principles",
    section: "OpenClaw Basics",
    title: "Safety + reliability principles",
    description: "How to keep it useful and controlled",
    kind: "html",
    content: `
      <div class="slide-content">
        <h2>Rules that prevent chaos</h2>
        <ul class="big-list">
          <li><strong>Start with one workflow</strong> before adding complexity</li>
          <li><strong>Use approvals</strong> for spend, public posting, legal/compliance</li>
          <li><strong>Prefer permanent specialist agents</strong> for recurring complex tasks</li>
          <li><strong>Use ephemeral runs</strong> only for simple one-off tasks</li>
          <li><strong>Track outputs</strong> in Supabase + docs, not just chat history</li>
        </ul>
        <p class="muted-line">This is the difference between a cool demo and a reliable operating system.</p>
      </div>
    `,
    next: "workflow-choice",
  },
  {
    id: "workflow-choice",
    section: "Choose a Workflow",
    title: "Pick the workflow path",
    description: "Ask audience preference, click to jump",
    kind: "html",
    content: `
      <div class="slide-content center">
        <h2>Which workflow should we dive into?</h2>
        <p class="muted-line">Click one to jump there. Then use Next / Arrow keys to continue.</p>
        <div class="image-band">
          <img src="shots/content-flow.png" alt="Content repurposing workflow screenshot" />
          <img src="shots/meeting-flow.png" alt="Meeting prep workflow screenshot" />
        </div>
        <div class="choice-grid">
          <button class="choice-btn" data-workflow="content" data-jump="content-1">
            <strong>Path A: Content Repurposing</strong>
            <span>Notion post → LinkedIn + X thread + newsletter blurb</span>
          </button>
          <button class="choice-btn" data-workflow="meeting" data-jump="meeting-1">
            <strong>Path B: Meeting Prep Automation</strong>
            <span>Calendar event → briefing pack + context + talking points</span>
          </button>
        </div>
      </div>
    `,
    next: {
      content: "content-1",
      meeting: "meeting-1",
      default: "content-1",
    },
  },

  // Path A — Content repurposing
  {
    id: "content-1",
    section: "Path A · Content Repurposing",
    title: "Workflow A: Content repurposing",
    description: "Turn one piece of content into many outputs",
    kind: "html",
    content: `
      <div class="slide-content">
        <div class="pill">Path A</div>
        <h2>The founder pain</h2>
        <p>
          Founders create one strong piece of content (blog, update, deck notes)
          and then lose hours manually adapting it for each platform.
        </p>
        <h3>OpenClaw fix</h3>
        <ul>
          <li>Monitor a Notion page/database for new content</li>
          <li>Generate platform-specific variants automatically</li>
          <li>Queue drafts for approval</li>
          <li>Publish after sign-off</li>
        </ul>
      </div>
    `,
    next: "content-visual",
  },
  {
    id: "content-visual",
    section: "Path A · Content Repurposing",
    title: "Path A automation map",
    description: "Workflow-level view: trigger → transform → distribution",
    kind: "image",
    image: "shots/content-flow.png",
    next: "content-2",
  },
  {
    id: "content-2",
    section: "Path A · Content Repurposing",
    title: "One source piece → platform outputs",
    description: "Visual mutation example (blog to LinkedIn, X, newsletter)",
    kind: "html",
    content: `
      <div class="slide-content wide mutation-slide">
        <h2>Visual mutation in action</h2>
        <p class="muted-line">Start with one founder post. OpenClaw auto-generates platform-native variants.</p>

        <div class="mutation-showcase">
          <div class="mutation-source-block">
            <img src="shots/content-source.png" alt="Source blog content screenshot" />
            <div class="mutation-caption">Source piece (blog/update)</div>
          </div>

          <div class="mutation-arrow">Auto repurpose</div>

          <div class="mutation-output-grid">
            <div class="mutation-output-card">
              <img src="shots/content-linkedin.png" alt="LinkedIn output screenshot" />
              <div class="mutation-caption">LinkedIn: authority narrative</div>
            </div>
            <div class="mutation-output-card">
              <img src="shots/content-xthread.png" alt="X thread output screenshot" />
              <div class="mutation-caption">X: compressed thread</div>
            </div>
            <div class="mutation-output-card">
              <img src="shots/content-newsletter.png" alt="Newsletter output screenshot" />
              <div class="mutation-caption">Newsletter: summary + CTA</div>
            </div>
          </div>
        </div>
      </div>
    `,
    next: "content-3",
  },
  {
    id: "content-3",
    section: "Path A · Content Repurposing",
    title: "Implementation sketch",
    description: "Notion trigger + transformation + distribution",
    kind: "html",
    content: `
      <div class="slide-content">
        <h2>How to implement in OpenClaw</h2>
        <ol class="big-list">
          <li><strong>Trigger:</strong> detect new Notion entry / status change</li>
          <li><strong>Parse:</strong> extract core message, audience, CTA</li>
          <li><strong>Transform:</strong>
            <ul>
              <li>LinkedIn post (authority + narrative)</li>
              <li>X thread (punchy + condensed)</li>
              <li>Newsletter blurb (summary + linkout)</li>
            </ul>
          </li>
          <li><strong>Review gate:</strong> founder approves or edits</li>
          <li><strong>Distribute:</strong> publish + log performance</li>
        </ol>
      </div>
    `,
    next: "path-wrap",
  },

  // Path B — Meeting prep
  {
    id: "meeting-1",
    section: "Path B · Meeting Prep",
    title: "Workflow B: Meeting prep automation",
    description: "Walk in prepped without last-minute scramble",
    kind: "html",
    content: `
      <div class="slide-content">
        <div class="pill">Path B</div>
        <h2>The founder pain</h2>
        <p>
          Back-to-back meetings kill context. Most prep happens in a rush,
          and key details from past conversations get missed.
        </p>
        <h3>OpenClaw fix</h3>
        <ul>
          <li>Scan upcoming calendar events</li>
          <li>Pull prior notes + relevant docs + LinkedIn context</li>
          <li>Generate a concise briefing doc before the call</li>
          <li>Optionally draft follow-up summary template too</li>
        </ul>
      </div>
    `,
    next: "meeting-visual",
  },
  {
    id: "meeting-visual",
    section: "Path B · Meeting Prep",
    title: "Path B visual overview",
    description: "Screenshot from the meeting prep workflow",
    kind: "image",
    image: "shots/meeting-flow.png",
    next: "meeting-2",
  },
  {
    id: "meeting-2",
    section: "Path B · Meeting Prep",
    title: "Live flow mockup",
    description: "Example meeting prep workflow rendered in canvas",
    kind: "embed",
    url: "demos/meeting-prep.html",
    embed: true,
    next: "meeting-3",
  },
  {
    id: "meeting-3",
    section: "Path B · Meeting Prep",
    title: "Implementation sketch",
    description: "Calendar trigger + context pack + briefing doc",
    kind: "html",
    content: `
      <div class="slide-content">
        <h2>How to implement in OpenClaw</h2>
        <ol class="big-list">
          <li><strong>Trigger:</strong> upcoming meeting in next 24h</li>
          <li><strong>Collect context:</strong> last call notes, CRM, LinkedIn profile, relevant docs</li>
          <li><strong>Generate brief:</strong>
            <ul>
              <li>Who they are + recent signals</li>
              <li>Conversation goals</li>
              <li>Suggested talking points + questions</li>
              <li>Risks and opportunities</li>
            </ul>
          </li>
          <li><strong>Deliver:</strong> push to Notion/Docs/Telegram before meeting</li>
        </ol>
      </div>
    `,
    next: "path-wrap",
  },

  {
    id: "path-wrap",
    section: "Wrap-up",
    title: "What this gives founders",
    description: "From busywork to leverage",
    kind: "html",
    content: `
      <div class="slide-content center">
        <h2>Net result: more leverage, less admin drag</h2>
        <div class="two-col">
          <div>
            <h3>Immediate wins</h3>
            <ul>
              <li>Consistent output without manual grind</li>
              <li>Better meeting quality</li>
              <li>Cleaner operating rhythm</li>
            </ul>
          </div>
          <div>
            <h3>Next steps</h3>
            <ul>
              <li>Pick 1 workflow to pilot this week</li>
              <li>Add approval gates</li>
              <li>Measure saved time + conversion uplift</li>
            </ul>
          </div>
        </div>
        <div class="image-band image-band-small">
          <img src="shots/freshraise.png" alt="FreshRaise screenshot" />
          <img src="shots/landolio.png" alt="Landolio screenshot" />
        </div>
        <div class="choice-grid single">
          <button class="choice-btn" data-jump="workflow-choice">Back to workflow choice</button>
        </div>
      </div>
    `,
    next: null,
  },
];

let currentId = slides[0].id;
let workflow = null;
const history = [];

const slideById = new Map(slides.map((slide) => [slide.id, slide]));

const iframe = document.getElementById("canvas");
const htmlCanvas = document.getElementById("canvasHtml");
const slideTitle = document.getElementById("slideTitle");
const slideDesc = document.getElementById("slideDesc");
const slideCount = document.getElementById("slideCount");
const railList = document.getElementById("railList");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const reloadBtn = document.getElementById("reloadBtn");
const openBtn = document.getElementById("openBtn");

const canvasFallback = document.getElementById("canvasFallback");
const fallbackTitle = document.getElementById("fallbackTitle");
const fallbackDesc = document.getElementById("fallbackDesc");
const fallbackOpen = document.getElementById("fallbackOpen");

const rail = document.getElementById("rail");
const railHotzone = document.getElementById("railHotzone");
const canvasFrame = document.querySelector(".canvas-frame");

let screenshotImg = document.getElementById("canvasScreenshot");
if (!screenshotImg) {
  screenshotImg = document.createElement("img");
  screenshotImg.id = "canvasScreenshot";
  screenshotImg.className = "canvas-screenshot";
  canvasFrame.appendChild(screenshotImg);
}

const hideAllCanvasModes = () => {
  iframe.style.display = "none";
  iframe.removeAttribute("src");
  screenshotImg.style.display = "none";
  htmlCanvas.style.display = "none";
  htmlCanvas.innerHTML = "";
  canvasFallback.classList.remove("active");
};

const resolveNext = (slide) => {
  if (!slide || slide.next == null) return null;
  if (typeof slide.next === "string") return slide.next;
  if (typeof slide.next === "object") {
    if (workflow && slide.next[workflow]) return slide.next[workflow];
    return slide.next.default || null;
  }
  return null;
};

const currentSlideIndex = () => {
  return slides.findIndex((slide) => slide.id === currentId);
};

const renderSlide = () => {
  const slide = slideById.get(currentId);
  if (!slide) return;

  slideTitle.textContent = slide.title;
  slideDesc.textContent = slide.description;

  const idx = currentSlideIndex();
  slideCount.textContent = `${idx + 1} / ${slides.length}`;

  hideAllCanvasModes();

  if (slide.kind === "image" && slide.image) {
    screenshotImg.src = slide.image;
    screenshotImg.alt = slide.title;
    screenshotImg.style.display = "block";
  } else if (slide.kind === "embed" && slide.url) {
    iframe.style.display = "";
    iframe.src = slide.url;
  } else if (slide.kind === "html") {
    htmlCanvas.style.display = "block";
    htmlCanvas.innerHTML = slide.content || "";
  } else if (slide.url) {
    if (slide.embed) {
      iframe.style.display = "";
      iframe.src = slide.url;
    } else {
      fallbackTitle.textContent = slide.title;
      fallbackDesc.textContent =
        "This site blocks iframe previews. Use Open to view it.";
      canvasFallback.classList.add("active");
    }
  }

  openBtn.disabled = !slide.url;
  openBtn.classList.toggle("disabled", !slide.url);
  nextBtn.disabled = !resolveNext(slide);
  nextBtn.classList.toggle("disabled", !resolveNext(slide));
  prevBtn.disabled = history.length === 0;
  prevBtn.classList.toggle("disabled", history.length === 0);

  updateRail();
  document.body.focus();
};

const setSlide = (targetId, options = {}) => {
  const { pushHistory = true } = options;
  if (!slideById.has(targetId)) return;
  if (pushHistory && currentId && currentId !== targetId) {
    history.push(currentId);
  }
  currentId = targetId;
  renderSlide();
};

const goNext = () => {
  const slide = slideById.get(currentId);
  const nextId = resolveNext(slide);
  if (nextId) setSlide(nextId);
};

const goPrev = () => {
  if (history.length === 0) return;
  const previous = history.pop();
  setSlide(previous, { pushHistory: false });
};

const buildRail = () => {
  railList.innerHTML = "";
  let lastSection = "";

  slides.forEach((slide) => {
    if (slide.section !== lastSection) {
      const section = document.createElement("div");
      section.className = "rail-section";
      section.textContent = slide.section;
      railList.appendChild(section);
      lastSection = slide.section;
    }

    const btn = document.createElement("button");
    btn.className = "rail-item";
    btn.textContent = slide.title;
    btn.addEventListener("click", () => setSlide(slide.id));
    railList.appendChild(btn);
  });
};

const updateRail = () => {
  const items = railList.querySelectorAll(".rail-item");
  let itemIndex = 0;
  slides.forEach((slide) => {
    const item = items[itemIndex];
    if (item) item.classList.toggle("active", slide.id === currentId);
    itemIndex += 1;
  });
};

prevBtn.addEventListener("click", goPrev);
nextBtn.addEventListener("click", goNext);

reloadBtn.addEventListener("click", () => {
  const slide = slideById.get(currentId);
  if (!slide) return;

  if (slide.kind === "image" && slide.image) {
    screenshotImg.src = `${slide.image}?refresh=${Date.now()}`;
    return;
  }

  if (slide.kind === "embed" && slide.url) {
    const url = new URL(slide.url, window.location.href);
    url.searchParams.set("refresh", Date.now().toString());
    iframe.src = url.toString();
    return;
  }

  if (slide.kind === "html") {
    renderSlide();
  }
});

openBtn.addEventListener("click", () => {
  const slide = slideById.get(currentId);
  if (!slide || !slide.url) return;
  window.open(slide.url, "_blank", "noopener,noreferrer");
});

fallbackOpen.addEventListener("click", () => {
  const slide = slideById.get(currentId);
  if (!slide || !slide.url) return;
  window.open(slide.url, "_blank", "noopener,noreferrer");
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") goNext();
  if (event.key === "ArrowLeft") goPrev();
});

document.body.tabIndex = 0;

railHotzone.addEventListener("mouseenter", () => {
  document.body.classList.add("rail-open");
});

rail.addEventListener("mouseenter", () => {
  document.body.classList.add("rail-open");
});

rail.addEventListener("mouseleave", () => {
  document.body.classList.remove("rail-open");
});

htmlCanvas.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-jump]");
  if (!trigger) return;

  const nextWorkflow = trigger.dataset.workflow;
  if (nextWorkflow) workflow = nextWorkflow;

  const target = trigger.dataset.jump;
  if (target) setSlide(target);
});

buildRail();
setSlide(slides[0].id, { pushHistory: false });
