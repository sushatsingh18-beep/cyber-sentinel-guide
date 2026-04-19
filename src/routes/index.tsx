import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Shield,
  Activity,
  Bot,
  Network,
  Eye,
  Zap,
  Terminal,
  AlertTriangle,
  Lock,
  GitBranch,
  Radar,
  ChevronRight,
  Cpu,
  Database,
  ShieldAlert,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SENTINEL // Unified SOC Platform — InBorderland 3.0" },
      {
        name: "description",
        content:
          "AI co-pilot powered SOC platform. Detect, analyze and respond to threats in real-time across ELK / SIEM with MITRE ATT&CK, SOAR playbooks and honeypot diversion.",
      },
      { property: "og:title", content: "SENTINEL // Unified SOC Platform" },
      {
        property: "og:description",
        content:
          "One pane of glass for Blue Teams. Real-time detection, AI co-pilot, SOAR automation, honeypot diversion.",
      },
    ],
  }),
  component: Landing,
});

const ATTACK_FEED = [
  { time: "14:22:08", sev: "CRIT", src: "192.168.4.21", evt: "T1059 — Command & Scripting" },
  { time: "14:22:11", sev: "HIGH", src: "10.0.2.18", evt: "T1110 — Brute Force / SSH" },
  { time: "14:22:14", sev: "MED ", src: "172.16.8.3", evt: "T1046 — Network Scan" },
  { time: "14:22:19", sev: "CRIT", src: "203.0.113.7", evt: "T1486 — Ransomware behavior" },
  { time: "14:22:24", sev: "HIGH", src: "192.168.1.55", evt: "T1071 — C2 Beacon" },
  { time: "14:22:29", sev: "LOW ", src: "10.0.0.4", evt: "T1003 — Credential dump attempt" },
];

function Landing() {
  const [typed, setTyped] = useState("");
  const fullCmd = "sentinel --analyze --siem=elk --copilot=on";

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(fullCmd.slice(0, i));
      if (i >= fullCmd.length) clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Glow background */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ background: "var(--gradient-glow)" }}
      />

      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-gradient-cyber grid place-items-center shadow-glow">
              <Shield className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="font-mono font-bold tracking-tight text-lg">
              SENTINEL<span className="text-primary">_</span>
            </span>
            <span className="hidden sm:inline-block ml-2 px-2 py-0.5 text-[10px] font-mono uppercase border border-primary/40 text-primary rounded">
              v3.0 / inBorderland
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-mono text-muted-foreground">
            <a href="#capabilities" className="hover:text-primary transition">capabilities</a>
            <a href="#copilot" className="hover:text-primary transition">co-pilot</a>
            <a href="#stack" className="hover:text-primary transition">stack</a>
            <a href="#deploy" className="hover:text-primary transition">deploy</a>
          </nav>
          <button className="font-mono text-xs px-4 py-2 rounded bg-primary text-primary-foreground hover:shadow-glow transition-all">
            request_demo →
          </button>
        </div>
      </header>

      {/* THREAT TICKER */}
      <div className="border-b border-border bg-card/40 overflow-hidden">
        <div className="flex items-center">
          <div className="flex items-center gap-2 px-4 py-2 bg-destructive/15 border-r border-destructive/30 shrink-0">
            <span className="w-2 h-2 rounded-full bg-destructive animate-pulse-glow" />
            <span className="font-mono text-[11px] font-bold text-destructive uppercase tracking-widest">
              Live Feed
            </span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="flex animate-ticker whitespace-nowrap font-mono text-xs py-2">
              {[...ATTACK_FEED, ...ATTACK_FEED].map((e, i) => (
                <span key={i} className="px-6 flex items-center gap-3">
                  <span className="text-muted-foreground">[{e.time}]</span>
                  <span
                    className={
                      e.sev.trim() === "CRIT"
                        ? "text-destructive font-bold"
                        : e.sev.trim() === "HIGH"
                          ? "text-[oklch(0.82_0.18_75)]"
                          : "text-accent"
                    }
                  >
                    {e.sev}
                  </span>
                  <span className="text-foreground">{e.src}</span>
                  <span className="text-muted-foreground">→ {e.evt}</span>
                  <span className="text-border">|</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 pt-20 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <Radar className="w-3.5 h-3.5 text-primary" />
              <span className="font-mono text-xs text-primary uppercase tracking-widest">
                Unified SOC // SIEM-agnostic
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              One console.<br />
              <span className="text-primary text-glow">Every threat.</span><br />
              Zero blind spots.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              SENTINEL is the unified SOC platform that bolts onto your{" "}
              <span className="text-accent font-mono">ELK Stack</span> or{" "}
              <span className="text-accent font-mono">SIEM</span> — fusing detection,
              an AI co-pilot, IDS/IPS and SOAR playbooks into a single workflow built
              for Blue Teams and freshers alike.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="group font-mono text-sm px-6 py-3.5 rounded bg-gradient-cyber text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] transition-transform inline-flex items-center gap-2">
                launch_console
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>
              <button className="font-mono text-sm px-6 py-3.5 rounded border border-border hover:border-primary text-foreground transition inline-flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                view_architecture
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { v: "<2s", l: "mean detect" },
                { v: "94%", l: "auto-triage" },
                { v: "ATT&CK", l: "mapped" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-mono text-2xl md:text-3xl font-bold text-primary">{s.v}</div>
                  <div className="font-mono text-xs text-muted-foreground uppercase mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal mockup */}
          <div className="lg:col-span-5">
            <div className="relative scanline rounded-xl border border-border terminal-surface shadow-glow overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-black/30 border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-[oklch(0.65_0.22_25)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[oklch(0.78_0.18_75)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[oklch(0.78_0.20_155)]" />
                <span className="ml-3 font-mono text-xs text-white/50">
                  sentinel@soc-node-01:~
                </span>
              </div>
              <div className="p-5 font-mono text-sm space-y-2 min-h-[340px]">
                <div className="text-white/50">$ <span className="text-white/90">{typed}</span><span className="animate-blink text-[oklch(0.85_0.22_155)]">▋</span></div>
                <div className="text-[oklch(0.85_0.22_155)]">[✓] connected to elk://siem.local:9200</div>
                <div className="text-[oklch(0.85_0.22_155)]">[✓] co-pilot online — model: sentinel-ai/v3</div>
                <div className="text-[oklch(0.78_0.18_200)]">[~] ingesting 14,221 events/sec</div>
                <div className="pt-3 text-white/40">┌─ ANOMALY DETECTED ──────────────┐</div>
                <div className="text-[oklch(0.7_0.25_25)] font-bold flex items-center gap-2">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  CRITICAL · lateral movement chain
                </div>
                <div className="text-white/70">  ↳ host: <span className="text-[oklch(0.78_0.18_200)]">WIN-DC-04</span></div>
                <div className="text-white/70">  ↳ MITRE: <span className="text-[oklch(0.85_0.22_155)]">T1021.002 → T1078</span></div>
                <div className="text-white/70">  ↳ playbook: <span className="text-[oklch(0.85_0.22_155)]">isolate_host.yml</span></div>
                <div className="text-[oklch(0.85_0.22_155)] pt-2">[➜] response dispatched in 1.2s</div>
                <div className="text-white/40">└─────────────────────────────────┘</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
              // 01 — capabilities
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight max-w-2xl">
              Built for the analyst who has{" "}
              <span className="text-primary">three monitors and ten tools</span> open.
            </h2>
          </div>
          <p className="font-mono text-sm text-muted-foreground max-w-sm">
            Stop pivoting between dashboards. SENTINEL fuses the SOC stack into a
            single, opinionated workspace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
          {[
            {
              i: Eye,
              t: "Real-time Detection",
              d: "Stream-correlate logs from ELK, Splunk, Wazuh. Anomalies surface in under 2 seconds.",
            },
            {
              i: Bot,
              t: "AI Co-Pilot",
              d: "Natural-language triage. Ask 'why did this fire?' and get the full kill-chain explained.",
            },
            {
              i: Network,
              t: "IDS / IPS Fusion",
              d: "Suricata + Zeek pipelines with one-click block, quarantine and rule deployment.",
            },
            {
              i: GitBranch,
              t: "SOAR Playbooks",
              d: "Drag-and-drop response automation. Pre-built for ransomware, phishing, brute-force.",
            },
            {
              i: ShieldAlert,
              t: "MITRE ATT&CK Map",
              d: "Every alert auto-tagged with tactics & techniques. Live coverage heatmap.",
            },
            {
              i: Lock,
              t: "Honeypot Diversion",
              d: "Auto-redirect attackers into deception nets. Capture TTPs without exposing prod.",
            },
          ].map((f) => (
            <div
              key={t_(f.t)}
              className="group bg-card p-8 hover:bg-secondary transition relative"
            >
              <div className="w-11 h-11 rounded grid place-items-center bg-primary/10 border border-primary/20 mb-5 group-hover:bg-primary/20 group-hover:shadow-glow transition">
                <f.i className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{f.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              <div className="absolute top-6 right-6 font-mono text-[10px] text-muted-foreground/50">
                /{String(1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CO-PILOT BLOCK */}
      <section id="copilot" className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative scanline rounded-lg border border-border bg-card overflow-hidden shadow-glow">
            <div className="px-5 py-3 border-b border-border flex items-center gap-2 bg-secondary">
              <Bot className="w-4 h-4 text-primary" />
              <span className="font-mono text-xs">sentinel.copilot</span>
              <span className="ml-auto w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            </div>
            <div className="p-6 space-y-4 font-mono text-sm">
              <div className="text-muted-foreground"># analyst</div>
              <div className="bg-secondary/60 rounded px-4 py-3 text-foreground">
                why is host WIN-DC-04 flagged critical?
              </div>
              <div className="text-primary"># sentinel</div>
              <div className="bg-primary/5 border border-primary/20 rounded px-4 py-3 leading-relaxed text-foreground/90">
                Detected <span className="text-destructive">3-stage chain</span>: SMB
                lateral move → scheduled task → encoded PowerShell. Mapped to{" "}
                <span className="text-primary">T1021 / T1053 / T1059</span>. Confidence{" "}
                <span className="text-primary">96%</span>.<br />
                <br />
                <span className="text-accent">Recommended:</span> isolate_host.yml +
                disable AD account. Run now?
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 rounded bg-primary text-primary-foreground text-xs font-bold">
                  EXECUTE
                </button>
                <button className="px-3 py-1.5 rounded border border-border text-xs">
                  Investigate
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
              // 02 — co-pilot
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Your <span className="text-primary text-glow">L3 analyst</span>,
              available at 3 AM.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Freshers ramp up in days, not months. The co-pilot translates raw
              telemetry into plain English, suggests the next step, and can
              auto-execute SOAR playbooks with human-in-the-loop approval.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Conversational threat hunting across petabyte logs",
                "Auto-generated incident reports with MITRE mapping",
                "Anomaly explanations + recommended response actions",
                "Honeypot interaction summaries in real time",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/90">{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* STACK / INTEGRATIONS */}
      <section id="stack" className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
            // 03 — drop-in stack
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Plays nice with your existing arsenal.
          </h2>
          <p className="mt-5 text-muted-foreground">
            SIEM-agnostic connectors. Deploy alongside what you already trust.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
          {[
            { i: Database, n: "ELK Stack", s: "Elasticsearch · Kibana" },
            { i: Activity, n: "Splunk", s: "HEC + REST" },
            { i: Shield, n: "Wazuh", s: "Agent forwarding" },
            { i: Network, n: "Suricata", s: "IDS / IPS engine" },
            { i: Cpu, n: "Zeek", s: "Network telemetry" },
            { i: Terminal, n: "Sigma Rules", s: "Universal detection" },
            { i: GitBranch, n: "TheHive", s: "Case mgmt" },
            { i: Radar, n: "MISP", s: "Threat intel" },
          ].map((x) => (
            <div
              key={x.n}
              className="bg-card p-6 hover:bg-secondary transition flex flex-col items-center text-center gap-2"
            >
              <x.i className="w-6 h-6 text-accent mb-2" />
              <div className="font-mono font-semibold">{x.n}</div>
              <div className="font-mono text-xs text-muted-foreground">{x.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="deploy" className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <div className="relative rounded-2xl border border-primary/30 bg-card overflow-hidden p-12 md:p-16 text-center scanline">
          <div
            className="absolute inset-0 -z-10 opacity-50"
            style={{ background: "var(--gradient-glow)" }}
          />
          <div className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
            // initiate_deployment
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
            The next attack is already in your logs.<br />
            <span className="text-primary text-glow">See it first.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Built for InBorderland 3.0. Engineered for every Blue Team that
            refuses to lose to latency.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button className="font-mono text-sm px-7 py-4 rounded bg-gradient-cyber text-primary-foreground font-bold shadow-glow hover:scale-[1.02] transition">
              ./deploy --prod
            </button>
            <button className="font-mono text-sm px-7 py-4 rounded border border-border hover:border-primary transition">
              read_whitepaper.pdf
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            SENTINEL_SOC // © {new Date().getFullYear()} — InBorderland 3.0 submission
          </div>
          <div className="flex items-center gap-6">
            <span>status: <span className="text-primary">● operational</span></span>
            <span>region: edge-global</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function t_(s: string) {
  return s;
}
