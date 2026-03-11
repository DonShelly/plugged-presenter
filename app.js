/* ───────────────────────────────────────────────────────────────
   Plugged Workshop Deck · v3  —  2-hour founder session
   ─────────────────────────────────────────────────────────────── */

const slides = [
  /* ── 1. Hook ── */
  {
    id: "title",
    section: "Opening",
    title: "OpenClaw for Founders: From Trial to Operator",
    description: "Workshop promise + what attendees leave with",
    plannedMinutes: 2,
    kind: "html",
    notes: "Frame it: you'll ship one workflow this week and know how to scale safely. Mention this is a 2-hour hands-on session, not a pitch. Ask the room: who has used any AI agent tool before? Quick hands.",
    content: `
      <div class="slide-content center">
        <div class="pill">Workshop · 2 hours</div>
        <h1>OpenClaw for founders</h1>
        <p>From first workflow to a reliable operating system for leverage.</p>
        <div class="callout" style="max-width:640px">
          By the end you'll have: one working workflow spec, a scaling model you can copy, and a security posture that won't embarrass you.
        </div>
        <div class="three-outcomes">
          <div class="outcome-card"><strong>Trial</strong><span>Ship one end-to-end workflow with approvals + logs</span></div>
          <div class="outcome-card"><strong>Adviser</strong><span>Understand the agent organisation pattern to scale</span></div>
          <div class="outcome-card"><strong>Operator</strong><span>Leave with a safety posture that matches 2026 threats</span></div>
        </div>
      </div>
    `,
    next: "why-now",
  },
  {
    id: "why-now",
    section: "Opening",
    title: "Why Now: One-Person Companies and Leverage",
    description: "Founder pain → leverage → why agentic systems matter in 2026",
    plannedMinutes: 4,
    kind: "html",
    notes: "Keep it concrete: calendar hell, content treadmill, inbox overload, meeting prep scramble. The punchline: founders don't need more tools — they need an operator that can actually run those tools.",
    content: `
      <div class="slide-content">
        <h2>The leverage problem</h2>
        <p>Founders are drowning in operational busywork that doesn't scale.</p>
        <div class="pain-grid">
          <div class="pain-card"><span class="pain-icon">📅</span><strong>Calendar tetris</strong><p>Back-to-back meetings, zero prep time</p></div>
          <div class="pain-card"><span class="pain-icon">📝</span><strong>Content treadmill</strong><p>Write once, manually reformat 4 times</p></div>
          <div class="pain-card"><span class="pain-icon">📧</span><strong>Inbox gravity</strong><p>Urgent vs important — always losing</p></div>
          <div class="pain-card"><span class="pain-icon">🔁</span><strong>Repeatable ops</strong><p>Same steps, every week, still manual</p></div>
        </div>
        <div class="callout">Agents aren't "AI chat". They're software that can <strong>operate other software</strong> — on your behalf, with your approval.</div>
      </div>
    `,
    next: "visual-proof",
  },
  {
    id: "visual-proof",
    section: "Opening",
    title: "Visual Proof: What This Actually Looks Like",
    description: "Screenshots and real outputs — no abstract diagrams",
    plannedMinutes: 3,
    kind: "html",
    notes: "\"No metaphors yet — just receipts.\" Walk through each screenshot quickly. The Sims-style UI is the wow moment — linger on it. Point out the log panel, the agent states, the token budget.",
    content: `
      <div class="slide-content">
        <h2>What this looks like in practice</h2>
        <p class="muted-line">Live screenshots from real agent workflows and control surfaces.</p>
        <div class="visual-grid">
          <div class="visual-card">
            <img src="shots/deck-workflow-choice.png" alt="Workflow branching inside the deck" />
            <div class="visual-caption">Interactive workflow branching</div>
          </div>
          <div class="visual-card">
            <img src="shots/freshraise.png" alt="FreshRaise output" />
            <div class="visual-caption">FreshRaise — live venture output</div>
          </div>
          <div class="visual-card">
            <img src="shots/landolio.png" alt="Landolio screenshot" />
            <div class="visual-caption">Landolio — deployed venture app</div>
          </div>
        </div>
      </div>
    `,
    next: "execution-loop",
  },

  /* ── 2. The Loop ── */
  {
    id: "execution-loop",
    section: "The Execution Loop",
    title: "The Loop Founders Need",
    description: "Goal → Plan → Tools → Memory → Logs → Review gate",
    plannedMinutes: 5,
    kind: "html",
    notes: "This is your canonical diagram — you'll refer back to it all session. Emphasise the review gate: nothing leaves without approval if you configure it that way. Connect to session tools: list, history, send, spawn.",
    content: `
      <div class="slide-content">
        <h2>The OpenClaw execution loop</h2>
        <p class="muted-line">Every workflow follows the same cycle. Learn it once, apply it everywhere.</p>
        <div class="loop-grid">
          <div class="loop-step"><div class="loop-num">1</div><strong>Goal</strong><span>What outcome do you actually want?</span></div>
          <div class="loop-arrow">→</div>
          <div class="loop-step"><div class="loop-num">2</div><strong>Plan</strong><span>Choose tools + order of operations</span></div>
          <div class="loop-arrow">→</div>
          <div class="loop-step"><div class="loop-num">3</div><strong>Execute</strong><span>File edits, browser, APIs, messages</span></div>
          <div class="loop-arrow">→</div>
          <div class="loop-step"><div class="loop-num">4</div><strong>Memory</strong><span>State + logs for continuity</span></div>
          <div class="loop-arrow">→</div>
          <div class="loop-step"><div class="loop-num">5</div><strong>Review</strong><span>Human approval gate</span></div>
        </div>
        <div class="callout">You stay in control. Hard gates (money, external comms, legal) require your sign-off.</div>
      </div>
    `,
    next: "reliability",
  },
  {
    id: "reliability",
    section: "The Execution Loop",
    title: "What Makes It Reliable",
    description: "Approvals, constrained tools, logging, model failover",
    plannedMinutes: 5,
    kind: "html",
    notes: "Key point: reliability isn't magic — it's specific mechanisms. Mention auth profile rotation, model failover lists, and structured outputs. This is what separates a demo from an operating system.",
    content: `
      <div class="slide-content">
        <h2>Reliability isn't vibes — it's mechanisms</h2>
        <div class="two-col">
          <div>
            <h3>Control</h3>
            <ul>
              <li><strong>Approval gates</strong> for spend, public posts, legal</li>
              <li><strong>Scoped tools</strong> — agents only get what they need</li>
              <li><strong>Session isolation</strong> — sub-agents can't access parent secrets</li>
            </ul>
          </div>
          <div>
            <h3>Resilience</h3>
            <ul>
              <li><strong>Model failover</strong> — if one provider is down, another picks up</li>
              <li><strong>Auth rotation</strong> — multiple profiles, automatic switching</li>
              <li><strong>Persistent memory</strong> — agents remember across sessions</li>
            </ul>
          </div>
        </div>
        <div class="callout">The difference between "cool demo" and "I trust this with my business".</div>
      </div>
    `,
    next: "security-reality",
  },

  /* ── 3. Security ── */
  {
    id: "security-reality",
    section: "Security Posture",
    title: "Security Reality Check",
    description: "Prompt injection, plugin malware, misconfiguration",
    plannedMinutes: 6,
    kind: "html",
    notes: "Don't scare them — inform them. Prompt injection is the #1 LLM app risk. Skills/plugins are a supply chain. Reference OWASP LLM Top 10 without being preachy. The headline: treat agent extensions like executables.",
    content: `
      <div class="slide-content">
        <h2>Agents can do real things — that cuts both ways</h2>
        <p class="muted-line">A quick threat model, not a lecture.</p>
        <div class="threat-grid">
          <div class="threat-card threat-high">
            <strong>Prompt injection</strong>
            <p>Untrusted content tricks the agent into unintended actions</p>
            <span class="threat-tag">Top LLM risk (OWASP)</span>
          </div>
          <div class="threat-card threat-high">
            <strong>Skill/plugin supply chain</strong>
            <p>Malicious skills can exfiltrate data or run unwanted commands</p>
            <span class="threat-tag">Real incidents in 2025-26</span>
          </div>
          <div class="threat-card threat-med">
            <strong>Misconfiguration</strong>
            <p>Public gateway, missing auth, overly broad tool access</p>
            <span class="threat-tag">Most common mistake</span>
          </div>
          <div class="threat-card threat-low">
            <strong>Model hallucination</strong>
            <p>Agent confidently does the wrong thing</p>
            <span class="threat-tag">Mitigated by structured outputs</span>
          </div>
        </div>
      </div>
    `,
    next: "gateway-hardening",
  },
  {
    id: "gateway-hardening",
    section: "Security Posture",
    title: "Gateway Hardening Basics",
    description: "Token auth, bind modes, pairing, fail-closed defaults",
    plannedMinutes: 5,
    kind: "html",
    notes: "\"Fail-closed is good; don't punch holes casually.\" Cover: token auth, private binding (Tailscale), device pairing for remote clients. Keep it founder-friendly — they don't need to configure nginx.",
    content: `
      <div class="slide-content">
        <h2>Locking it down (without making it useless)</h2>
        <div class="checklist">
          <div class="check-item"><span class="check-icon">🔑</span><div><strong>Token authentication</strong><p>Gateway requires a token. No token, no access. Simple.</p></div></div>
          <div class="check-item"><span class="check-icon">🔒</span><div><strong>Private binding</strong><p>Don't expose your gateway to the internet. Use Tailscale or similar.</p></div></div>
          <div class="check-item"><span class="check-icon">📱</span><div><strong>Device pairing</strong><p>Remote clients pair with tokens — revocable, auditable.</p></div></div>
          <div class="check-item"><span class="check-icon">🛡️</span><div><strong>Skill review</strong><p>Treat every skill like an executable. Read the code before enabling.</p></div></div>
          <div class="check-item"><span class="check-icon">✅</span><div><strong>Approval gates</strong><p>Anything that sends money, emails, or public posts — require sign-off.</p></div></div>
        </div>
      </div>
    `,
    next: "risk-poll",
  },
  {
    id: "risk-poll",
    section: "Security Posture",
    title: "Audience Poll: Your Risk Posture",
    description: "Quick pulse check — speed vs safety vs both",
    plannedMinutes: 3,
    kind: "html",
    notes: "Interactive moment. Ask people to pick one. Use the results to frame the exercise later: speed-focused founders need more guardrails; safety-focused ones need permission to start simple.",
    content: `
      <div class="slide-content center">
        <h2>Quick pulse check</h2>
        <p class="muted-line">What matters most to you right now?</p>
        <div class="poll-grid">
          <button class="poll-btn" data-poll="speed" onclick="votePoll(this)">
            <span class="poll-emoji">🚀</span>
            <strong>Speed</strong>
            <span>"I want to ship fast and iterate"</span>
            <div class="poll-bar"><div class="poll-fill" data-poll-fill="speed"></div></div>
            <div class="poll-count" data-poll-count="speed">0 votes</div>
          </button>
          <button class="poll-btn" data-poll="safety" onclick="votePoll(this)">
            <span class="poll-emoji">🛡️</span>
            <strong>Safety</strong>
            <span>"I need to trust it before I scale"</span>
            <div class="poll-bar"><div class="poll-fill" data-poll-fill="safety"></div></div>
            <div class="poll-count" data-poll-count="safety">0 votes</div>
          </button>
          <button class="poll-btn" data-poll="both" onclick="votePoll(this)">
            <span class="poll-emoji">⚖️</span>
            <strong>Both</strong>
            <span>"Fast but not reckless"</span>
            <div class="poll-bar"><div class="poll-fill" data-poll-fill="both"></div></div>
            <div class="poll-count" data-poll-count="both">0 votes</div>
          </button>
        </div>
      </div>
    `,
    next: "workflow-choice",
  },

  /* ── 4. Workflow choice ── */
  {
    id: "workflow-choice",
    section: "Choose a Workflow",
    title: "Pick the Workflow Path",
    description: "Audience choice — click to jump",
    plannedMinutes: 3,
    kind: "html",
    notes: "Show how the deck itself branches — a mini demo of interactive tooling. Let the room pick, or do both if time allows. Content repurposing is the safer default for mixed audiences.",
    content: `
      <div class="slide-content center">
        <h2>Which workflow should we dive into?</h2>
        <p class="muted-line">Click one to jump there. Use Next / arrow keys to continue.</p>
        <div class="image-band">
          <img src="shots/content-flow.png" alt="Content repurposing workflow" />
          <img src="shots/meeting-flow.png" alt="Meeting prep workflow" />
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

  /* ── Path A — Content repurposing ── */
  {
    id: "content-1",
    section: "Path A · Content Repurposing",
    title: "Workflow A: Content Repurposing",
    description: "Turn one piece of content into many outputs",
    plannedMinutes: 4,
    kind: "html",
    notes: "Set up the pain first: founders create one strong piece and then lose hours reformatting. The fix is monitoring a Notion page, generating variants, queueing for approval, and publishing after sign-off.",
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
    title: "Path A Automation Map",
    description: "Trigger → transform → distribution",
    plannedMinutes: 3,
    kind: "image",
    image: "shots/content-flow.png",
    notes: "Walk through the flow: Notion trigger, extraction, platform adaptation, review gate, publish. Emphasise the approval step — nothing goes out without founder sign-off.",
    next: "content-mutation",
  },
  {
    id: "content-mutation",
    section: "Path A · Content Repurposing",
    title: "One Source → Platform Outputs",
    description: "Visual mutation example (blog to LinkedIn, X, newsletter)",
    plannedMinutes: 4,
    kind: "html",
    notes: "This is the 'aha' slide. Show the source piece on the left, then the three platform-native variants. Point out how each one is genuinely different — not just copy-pasted with a different header.",
    content: `
      <div class="slide-content wide mutation-slide">
        <h2>Visual mutation in action</h2>
        <p class="muted-line">Start with one founder post. OpenClaw auto-generates platform-native variants.</p>
        <div class="mutation-showcase">
          <div class="mutation-source-block">
            <img src="shots/content-source.png" alt="Source content" />
            <div class="mutation-caption">Source piece (blog/update)</div>
          </div>
          <div class="mutation-arrow">Auto repurpose</div>
          <div class="mutation-output-grid">
            <div class="mutation-output-card">
              <img src="shots/content-linkedin.png" alt="LinkedIn output" />
              <div class="mutation-caption">LinkedIn: authority narrative</div>
            </div>
            <div class="mutation-output-card">
              <img src="shots/content-xthread.png" alt="X thread output" />
              <div class="mutation-caption">X: compressed thread</div>
            </div>
            <div class="mutation-output-card">
              <img src="shots/content-newsletter.png" alt="Newsletter output" />
              <div class="mutation-caption">Newsletter: summary + CTA</div>
            </div>
          </div>
        </div>
      </div>
    `,
    next: "content-implement",
  },
  {
    id: "content-implement",
    section: "Path A · Content Repurposing",
    title: "Implementation Sketch",
    description: "Notion trigger + transformation + approval + distribution",
    plannedMinutes: 4,
    kind: "html",
    notes: "Walk through step by step. Emphasise the review gate — founder approves or edits before anything publishes. Mention structured outputs to keep formatting consistent.",
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
    next: "exercise",
  },

  /* ── Path B — Meeting prep ── */
  {
    id: "meeting-1",
    section: "Path B · Meeting Prep",
    title: "Workflow B: Meeting Prep Automation",
    description: "Walk in prepped without last-minute scramble",
    plannedMinutes: 4,
    kind: "html",
    notes: "Set up the pain: back-to-back meetings kill context. Most prep is a rushed scramble. OpenClaw scans calendar, pulls prior notes + LinkedIn context, generates a brief, and delivers before the call.",
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
    title: "Path B Visual Overview",
    description: "Meeting prep workflow flow",
    plannedMinutes: 3,
    kind: "image",
    image: "shots/meeting-flow.png",
    notes: "Walk through timeline: T-24h detect, T-12h context pull, T-2h brief generated, delivery to Telegram/Notion before the meeting.",
    next: "meeting-demo",
  },
  {
    id: "meeting-demo",
    section: "Path B · Meeting Prep",
    title: "Live Flow Mockup",
    description: "Embedded meeting prep demo",
    plannedMinutes: 4,
    kind: "embed",
    url: "demos/meeting-prep.html",
    embed: true,
    notes: "Walk through the embedded demo. Point out the timeline structure: event detected, context pulled, brief generated. Emphasise the output chips: 1-page summary, questions to ask, relationship history, follow-up template.",
    next: "meeting-implement",
  },
  {
    id: "meeting-implement",
    section: "Path B · Meeting Prep",
    title: "Implementation Sketch",
    description: "Calendar trigger + context pack + briefing doc",
    plannedMinutes: 4,
    kind: "html",
    notes: "Walk through step by step. Emphasise delivery — push to Notion/Docs/Telegram *before* the meeting. That's the magic: you walk in prepped without lifting a finger.",
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
    next: "exercise",
  },

  /* ── 5. Exercise ── */
  {
    id: "exercise",
    section: "Exercise",
    title: "Design Your First Workflow",
    description: "10-minute hands-on exercise",
    plannedMinutes: 10,
    kind: "html",
    notes: "Pair people up. Give them 7 minutes to fill in the template, then 3 minutes for 2-3 share-outs. This is the conversion moment — they go from spectator to designer. Circulate and help.",
    content: `
      <div class="slide-content">
        <div class="pill">Hands-on · 10 min</div>
        <h2>Design your first workflow</h2>
        <p class="muted-line">Pair up. Fill in one workflow using this template. Share one with the room.</p>
        <div class="worksheet">
          <div class="ws-row"><div class="ws-label">Trigger</div><div class="ws-hint">What starts it? (new Notion entry, calendar event, email, cron schedule…)</div></div>
          <div class="ws-row"><div class="ws-label">Inputs</div><div class="ws-hint">What data does it need? (document, contact info, prior notes…)</div></div>
          <div class="ws-row"><div class="ws-label">Tools</div><div class="ws-hint">Which tools/APIs? (browser, file system, Notion, email, Slack…)</div></div>
          <div class="ws-row"><div class="ws-label">Approval gate</div><div class="ws-hint">What needs human sign-off before proceeding?</div></div>
          <div class="ws-row"><div class="ws-label">Outputs</div><div class="ws-hint">What gets produced? (document, post, notification, database entry…)</div></div>
          <div class="ws-row"><div class="ws-label">Success metric</div><div class="ws-hint">How do you know it's working? (hours saved, output volume, error rate…)</div></div>
        </div>
      </div>
    `,
    next: "break",
  },

  /* ── 6. Break ── */
  {
    id: "break",
    section: "Break",
    title: "Break",
    description: "10-minute break + optional Q&A",
    plannedMinutes: 10,
    kind: "html",
    notes: "Take real questions. Park anything complex on the Q&A list for the end. Use the break to check demo stability for the second half.",
    content: `
      <div class="slide-content center">
        <h1 style="font-size:64px">☕</h1>
        <h2>10-Minute Break</h2>
        <p class="muted-line">Grab a drink. Optional Q&A at the front.</p>
        <div class="callout" style="max-width:500px">Coming up: second demo, scaling to multiple agents, operator tooling, and your 7-day rollout plan.</div>
      </div>
    `,
    next: "scaling-intro",
  },

  /* ── 7. Scaling ── */
  {
    id: "scaling-intro",
    section: "Scaling: Agent Organisation",
    title: "From One Agent to an Organisation",
    description: "The tier model and why it matters",
    plannedMinutes: 7,
    kind: "html",
    notes: "This is where founders go \"ohhhh\". Show the tier model: human → orchestrator → shared services → business runners → venture teams → ephemeral agents. Key question it answers: how do I scale without turning my business into a haunted house?",
    content: `
      <div class="slide-content">
        <h2>Scaling agents without chaos</h2>
        <p class="muted-line">A hierarchy that keeps you in control as complexity grows.</p>
        <div class="tier-grid">
          <div class="tier-card tier-0"><div class="tier-label">You</div><strong>Founder</strong><span>Goals, approvals, strategy</span></div>
          <div class="tier-card tier-1"><div class="tier-label">Tier 1</div><strong>Orchestrator</strong><span>Routes tasks, manages priorities</span></div>
          <div class="tier-card tier-2"><div class="tier-label">Tier 2</div><strong>Shared Services</strong><span>Email, calendar, CRM, comms</span></div>
          <div class="tier-card tier-3"><div class="tier-label">Tier 3</div><strong>Business Runners</strong><span>Content, outreach, ops, finance</span></div>
          <div class="tier-card tier-4"><div class="tier-label">Tier 4</div><strong>Ephemeral Agents</strong><span>One-off tasks, spawned and destroyed</span></div>
        </div>
        <div class="callout">Each tier has explicit permissions. Agents can only spawn what they're allowed to. Escalation routes are defined, not emergent.</div>
      </div>
    `,
    next: "governance",
  },
  {
    id: "governance",
    section: "Scaling: Agent Organisation",
    title: "Governance: Spawn Rules + Escalation",
    description: "Who can spawn what, and how blockers escalate",
    plannedMinutes: 7,
    kind: "html",
    notes: "Tie to \"avoid chaos\" and \"human stays in control\". The key insight: spawn permissions are like org chart hiring rules — you wouldn't let every employee hire anyone they want. Same logic applies to agents.",
    content: `
      <div class="slide-content">
        <h2>Rules that prevent the haunted house</h2>
        <div class="two-col">
          <div>
            <h3>Spawn permissions</h3>
            <ul>
              <li>Orchestrator can spawn business runners</li>
              <li>Business runners can spawn ephemeral helpers</li>
              <li>Ephemeral agents <strong>cannot</strong> spawn anything</li>
              <li>Only you can create new persistent agents</li>
            </ul>
          </div>
          <div>
            <h3>Escalation routes</h3>
            <ul>
              <li>Agent stuck → escalate to orchestrator</li>
              <li>Needs approval → escalate to you</li>
              <li>Security concern → hard stop + alert</li>
              <li>Budget exceeded → pause + report</li>
            </ul>
          </div>
        </div>
        <p class="muted-line" style="margin-top:12px">Think of it like an org chart for software — clear reporting lines, clear authority boundaries.</p>
      </div>
    `,
    next: "operator-tooling",
  },

  /* ── 8. Operator Tooling ── */
  {
    id: "operator-tooling",
    section: "Operator Tooling",
    title: "Operator Maturity: Backup + Visibility",
    description: "Backup discipline, monitoring UIs, operational maturity",
    plannedMinutes: 7,
    kind: "html",
    notes: "\"This is what operational maturity looks like.\" Cover: backup scripts that exclude secrets, visual control surfaces (Sims UI + Critters). The boring-but-elite detail is what separates toy from reliable.",
    content: `
      <div class="slide-content">
        <h2>What operational maturity looks like</h2>
        <div class="two-col">
          <div>
            <h3>Backup discipline</h3>
            <ul>
              <li>Automated workspace backups via rsync</li>
              <li>Explicit exclusions: <code>.env</code>, tokens, keys, vaults, sessions</li>
              <li>Workspaces become <strong>deployable artefacts</strong>, not snowflakes</li>
              <li>Version-controlled configs, not magic incantations</li>
            </ul>
          </div>
          <div>
            <h3>Visual control surfaces</h3>
            <ul>
              <li>Desktop UI showing agent states, logs, and token budgets</li>
              <li>Physical status displays (pixel-art agent sprites)</li>
              <li>Real-time operational visibility — not just chat logs</li>
              <li>Demo mode for safe presentations and testing</li>
            </ul>
          </div>
        </div>
        <div class="callout">Founders don't need more AI. They need <strong>operational visibility</strong>.</div>
      </div>
    `,
    next: "rollout-plan",
  },

  /* ── 9. Rollout ── */
  {
    id: "rollout-plan",
    section: "Your Rollout Plan",
    title: "7-Day Implementation Plan",
    description: "Concrete day-by-day rollout + metrics",
    plannedMinutes: 8,
    kind: "html",
    notes: "\"Don't scale agents; scale proof.\" Walk through day by day. Emphasise: day 4 is the crucial learning day — run it 3 times, capture failures, tighten prompts. By day 7 they decide whether to scale.",
    content: `
      <div class="slide-content">
        <h2>Your first week</h2>
        <p class="muted-line">Don't scale agents. Scale proof.</p>
        <div class="timeline-grid">
          <div class="day-card"><div class="day-num">1</div><div><strong>Pick one workflow</strong><p>Define trigger + success metric</p></div></div>
          <div class="day-card"><div class="day-num">2–3</div><div><strong>Implement</strong><p>Approvals + logging + structured outputs</p></div></div>
          <div class="day-card"><div class="day-num">4</div><div><strong>Test</strong><p>Run 3 times. Capture failures. Tighten prompts.</p></div></div>
          <div class="day-card"><div class="day-num">5</div><div><strong>Add workflow #2</strong><p>A supporting workflow (e.g., meeting prep)</p></div></div>
          <div class="day-card"><div class="day-num">6</div><div><strong>Harden</strong><p>Implement backup discipline. Remove secrets from artefacts.</p></div></div>
          <div class="day-card"><div class="day-num">7</div><div><strong>Review</strong><p>Metrics check. Decide: scale to multi-agent or keep it simple?</p></div></div>
        </div>
        <h3 style="margin-top:16px">Metrics that matter</h3>
        <div class="metrics-row">
          <div class="metric-chip">Hours saved</div>
          <div class="metric-chip">Cycle time</div>
          <div class="metric-chip">Output volume</div>
          <div class="metric-chip">Error rate</div>
          <div class="metric-chip">Approval latency</div>
        </div>
      </div>
    `,
    next: "resources",
  },

  /* ── 10. Close ── */
  {
    id: "resources",
    section: "Close",
    title: "Resources + Next Steps",
    description: "Follow-up pack, docs, and office hours",
    plannedMinutes: 3,
    kind: "html",
    notes: "End with \"pick one workflow and ship\". Keep the energy up. Mention office hours or follow-up channel if available. The QR code placeholder can link to a resource page you'll build.",
    content: `
      <div class="slide-content center">
        <h2>Keep going</h2>
        <p class="muted-line">Resources to take with you.</p>
        <div class="two-col" style="max-width:800px">
          <div>
            <h3>Read next</h3>
            <ul>
              <li>Gateway setup + security hardening</li>
              <li>Session tools: list, history, send, spawn</li>
              <li>Models, auth profiles, and failover</li>
              <li>OWASP Top 10 for LLM Applications</li>
            </ul>
          </div>
          <div>
            <h3>Your action</h3>
            <ul>
              <li>Pick one workflow — today</li>
              <li>Define the trigger + metric</li>
              <li>Ship by Friday</li>
              <li>Share your results</li>
            </ul>
          </div>
        </div>
        <div class="qr-placeholder">
          <div class="qr-box">[ QR Code ]</div>
          <p class="muted-line">Resource pack + workshop materials</p>
        </div>
        <div class="choice-grid single" style="margin-top:20px">
          <button class="choice-btn" data-jump="title">Back to start</button>
        </div>
      </div>
    `,
    next: null,
  },
];

/* ── State ── */
let currentId = slides[0].id;
let workflow = null;
const history = [];
const pollVotes = { speed: 0, safety: 0, both: 0 };
let presenterMode = false;
let slideStartTime = null;

const slideById = new Map(slides.map((s) => [s.id, s]));

/* ── DOM refs ── */
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

/* ── Presenter notes panel ── */
const notesPanel = document.createElement("div");
notesPanel.id = "presenterNotes";
notesPanel.className = "presenter-notes";
notesPanel.innerHTML = `<div class="notes-header"><span class="notes-title">Speaker Notes</span><span class="notes-timer" id="notesTimer"></span><span class="notes-planned" id="notesPlanned"></span></div><div class="notes-body" id="notesBody"></div>`;
document.getElementById("app").appendChild(notesPanel);

const notesBody = document.getElementById("notesBody");
const notesTimer = document.getElementById("notesTimer");
const notesPlanned = document.getElementById("notesPlanned");

/* ── Helpers ── */
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

const currentSlideIndex = () => slides.findIndex((s) => s.id === currentId);

/* ── Poll logic ── */
window.votePoll = function (btn) {
  const key = btn.dataset.poll;
  if (!key || !pollVotes.hasOwnProperty(key)) return;
  pollVotes[key]++;
  updatePollDisplay();
};

function updatePollDisplay() {
  const total = pollVotes.speed + pollVotes.safety + pollVotes.both;
  for (const key of ["speed", "safety", "both"]) {
    const fill = document.querySelector(`[data-poll-fill="${key}"]`);
    const count = document.querySelector(`[data-poll-count="${key}"]`);
    if (fill) fill.style.width = total > 0 ? `${(pollVotes[key] / total) * 100}%` : "0%";
    if (count) count.textContent = `${pollVotes[key]} vote${pollVotes[key] !== 1 ? "s" : ""}`;
  }
}

/* ── Timer ── */
let timerInterval = null;
function startSlideTimer() {
  slideStartTime = Date.now();
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
  updateTimer();
}

function updateTimer() {
  if (!slideStartTime || !presenterMode) return;
  const elapsed = Math.floor((Date.now() - slideStartTime) / 1000);
  const m = Math.floor(elapsed / 60);
  const s = elapsed % 60;
  notesTimer.textContent = `${m}:${s.toString().padStart(2, "0")}`;
}

/* ── Render ── */
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
    if (slide.id === "risk-poll") updatePollDisplay();
  } else if (slide.url) {
    if (slide.embed) {
      iframe.style.display = "";
      iframe.src = slide.url;
    } else {
      fallbackTitle.textContent = slide.title;
      fallbackDesc.textContent = "This site blocks iframe previews. Use Open to view it.";
      canvasFallback.classList.add("active");
    }
  }

  openBtn.disabled = !slide.url;
  openBtn.classList.toggle("disabled", !slide.url);
  nextBtn.disabled = !resolveNext(slide);
  nextBtn.classList.toggle("disabled", !resolveNext(slide));
  prevBtn.disabled = history.length === 0;
  prevBtn.classList.toggle("disabled", history.length === 0);

  // Presenter notes
  notesBody.textContent = slide.notes || "(no notes)";
  notesPlanned.textContent = slide.plannedMinutes ? `${slide.plannedMinutes} min planned` : "";
  startSlideTimer();

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

/* ── Rail ── */
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

/* ── Events ── */
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
  if (slide.kind === "html") renderSlide();
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
  // Toggle presenter mode with 'P'
  if (event.key === "p" || event.key === "P") {
    presenterMode = !presenterMode;
    document.body.classList.toggle("presenter-mode", presenterMode);
  }
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

/* ── Init ── */
buildRail();
setSlide(slides[0].id, { pushHistory: false });
