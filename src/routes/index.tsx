import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

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

const FEED = [
  { t: "14:22:08", sev: "CRIT", src: "192.168.4.21", evt: "T1059 — Command Scripting" },
  { t: "14:22:11", sev: "HIGH", src: "10.0.2.18", evt: "T1110 — SSH Brute Force" },
  { t: "14:22:14", sev: "MED ", src: "172.16.8.3", evt: "T1046 — Network Scan" },
  { t: "14:22:19", sev: "CRIT", src: "203.0.113.7", evt: "T1486 — Ransomware behavior" },
  { t: "14:22:24", sev: "HIGH", src: "192.168.1.55", evt: "T1071 — C2 Beacon" },
  { t: "14:22:29", sev: "LOW ", src: "10.0.0.4", evt: "T1003 — Credential dump" },
];

function Landing() {
  const [typed, setTyped] = useState("");
  const cmd = "sentinel --analyze --siem=elk --copilot=on";

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(cmd.slice(0, i));
      if (i >= cmd.length) clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* Background layers */}
      <div className="grid-overlay pointer-events-none fixed inset-0 z-0" />
      <div
        className="ambient-glow"
        style={{ width: 900, height: 900, top: -300, left: "50%", transform: "translateX(-50%)" }}
      />
      <div
        className="ambient-glow"
        style={{ width: 700, height: 700, bottom: -200, right: -200, opacity: 0.12 }}
      />

      {/* HEADER */}
      <header className="relative z-30 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl h-[72px] px-8 flex items-center justify-between">
          <h1 className="font-display font-bold text-[22px] sm:text-[26px] tracking-[6px] uppercase">
            Sen<span className="text-orange">tinel</span>
          </h1>
          <nav className="hidden md:flex items-center gap-10 font-mono text-[11px] tracking-[1.5px] uppercase text-[var(--text-muted)]">
            <a href="#capabilities" className="hover:text-orange transition">Capabilities</a>
            <a href="#copilot" className="hover:text-orange transition">Co-Pilot</a>
            <a href="#stack" className="hover:text-orange transition">Stack</a>
            <a href="#deploy" className="hover:text-orange transition">Deploy</a>
          </nav>
          <div className="font-mono text-[11px] text-[var(--text-dim)] tracking-[1px]">
            BEAT 01 / SOC
          </div>
        </div>
      </header>

      {/* TYPEWRITER STRIP */}
      <div className="relative z-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-8 py-5 flex items-center justify-center text-center">
          <p className="font-sans text-[15px] md:text-[17px] leading-[1.9] text-[var(--text-muted)]">
            Cyber attacks are scaling faster than humans can triage them.{" "}
            <span className="tech-pill">SOC analysts</span> drown in alerts,{" "}
            <span className="tech-pill">freshers</span> juggle{" "}
            <span className="tech-pill">10+ tools</span>, and response slows.{" "}
            <strong className="text-orange">SENTINEL is the unified layer.</strong>
            <span className="cursor-blink ml-1 inline-block w-[2px] h-[18px] bg-orange align-text-bottom" />
          </p>
        </div>
      </div>

      {/* KPI STRIP */}
      <div className="relative z-20 border-b border-border bg-[var(--phone-card)]">
        <div className="mx-auto max-w-7xl px-8 py-7 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { k: "< 2s", v: "Mean detect time", sub: "across petabyte logs" },
            { k: "14k/s", v: "Events ingested", sub: "ELK · Splunk · Wazuh" },
            { k: "96.4%", v: "Detection accuracy", sub: "MITRE-mapped" },
            { k: "1.2s", v: "SOAR response", sub: "auto-playbook dispatch" },
          ].map((m) => (
            <div key={m.v} className="text-center md:text-left">
              <div className="font-display font-bold text-2xl md:text-3xl text-orange tracking-tight">
                {m.k}
              </div>
              <div className="font-sans text-[13px] font-semibold text-foreground mt-1">{m.v}</div>
              <div className="font-mono text-[10px] uppercase tracking-[1.5px] text-[var(--text-dim)] mt-0.5">
                {m.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HERO — phone + side panels */}
      <section className="relative z-10 px-8 pt-16 pb-24">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[1fr_auto_1fr] gap-10 items-center">
          {/* LEFT PANEL */}
          <div className="flex flex-col gap-5 lg:items-end lg:text-right max-w-[440px] lg:ml-auto">
            <InfoCard
              align="right"
              icon={
                <svg viewBox="0 0 46 46" fill="none">
                  <circle cx="23" cy="18" r="9" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M8 40c0-8 7-14 15-14s15 6 15 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
              text="Blue Teams toggle between SIEM, IDS, EDR, threat-intel — losing precious seconds per alert."
            />
            <InfoCard
              align="right"
              icon={
                <svg viewBox="0 0 46 46" fill="none">
                  <rect x="6" y="8" width="34" height="22" rx="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M14 36h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="23" cy="19" r="3" fill="currentColor" />
                </svg>
              }
              text="Freshers need weeks to ramp on the SOC console. SENTINEL flattens that curve to days."
            />
            <InfoCard
              align="right"
              icon={
                <svg viewBox="0 0 46 46" fill="none">
                  <path d="M23 4l16 7v12c0 11-7 17-16 19-9-2-16-8-16-19V11l16-7z" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 23l5 5 9-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              text="Drop-in alongside ELK / SIEM — no rip & replace. Bolt onto what your org already trusts."
            />
          </div>

          {/* PHONE */}
          <div className="flex justify-center animate-phone-reveal">
            <div className="phone-shell relative w-[360px] h-[720px] overflow-hidden">
              {/* notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[130px] h-[30px] bg-[#1A1A1F] rounded-b-[20px] z-30" />
              {/* status */}
              <div className="absolute top-0 left-0 right-0 h-12 px-7 flex items-center justify-between font-sans text-[13px] font-semibold text-[var(--phone-text)] z-20">
                <span>9:41</span>
                <span>●●●</span>
              </div>

              {/* screen */}
              <div className="absolute top-12 left-3.5 right-3.5 bottom-[60px] overflow-hidden">
                <div className="px-3 py-3">
                  <div className="font-mono text-[9px] tracking-[2px] uppercase text-orange mb-1">
                    01 — Live Console
                  </div>
                  <div className="font-display font-bold text-[15px] text-[var(--phone-text)] leading-tight mb-1">
                    Threat Detection
                  </div>
                  <div className="inline-block font-mono text-[8px] tracking-[1.5px] uppercase text-[var(--phone-muted)] bg-[var(--phone-card)] border border-[var(--phone-border)] rounded px-[7px] py-[3px] mb-3">
                    SIEM · ELK · IDS · IPS
                  </div>

                  {/* Radar */}
                  <div className="relative w-[110px] h-[110px] mx-auto my-3">
                    <div className="absolute inset-0 rounded-full border border-[var(--phone-border)]" />
                    <div className="absolute top-[18px] left-[18px] w-[74px] h-[74px] rounded-full border border-[var(--phone-border)]" />
                    <div className="absolute top-9 left-9 w-[38px] h-[38px] rounded-full border border-[var(--phone-border)]" />
                    <div
                      className="animate-radar absolute top-1/2 left-1/2 h-[2px] w-[55px]"
                      style={{ background: "linear-gradient(90deg, var(--orange), transparent)" }}
                    />
                    <div className="animate-pulse-orange absolute w-2 h-2 rounded-full bg-[var(--spy-red)] top-[22px] right-[26px]" />
                  </div>

                  {/* Alert cards */}
                  <AlertCard
                    sev="CRIT"
                    sevColor="text-spy-red"
                    sevBg="bg-[oklch(0.55_0.20_27/0.10)]"
                    name="WIN-DC-04"
                    technique="T1021.002 → T1078"
                    text="Lateral movement chain detected"
                  />
                  <AlertCard
                    sev="HIGH"
                    sevColor="text-orange"
                    sevBg="bg-[var(--phone-card)]"
                    name="srv-edge-01"
                    technique="T1071 — C2 Beacon"
                    text="Anomalous DNS exfil pattern"
                  />
                  <AlertCard
                    sev="OK  "
                    sevColor="text-verified"
                    sevBg="bg-[oklch(0.62_0.16_150/0.10)]"
                    name="WIN-DC-04"
                    technique="isolate_host.yml"
                    text="SOAR playbook executed in 1.2s"
                  />

                  {/* Confidence */}
                  <div className="mt-3">
                    <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[1.5px] text-[var(--phone-muted)] mb-1">
                      <span>Detection confidence</span>
                      <span className="text-orange font-bold">96.4%</span>
                    </div>
                    <div className="h-[5px] rounded-full bg-[var(--phone-card)] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-orange"
                        style={{ width: "96.4%", transition: "width 1.5s ease-out" }}
                      />
                    </div>
                  </div>

                  {/* Scan */}
                  <div className="relative my-3 overflow-hidden">
                    <div
                      className="animate-scan h-[2px] rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, var(--orange), transparent)",
                      }}
                    />
                  </div>
                </div>

                {/* Prompt bar */}
                <div className="absolute bottom-3 left-3 right-3 bg-white border border-[var(--phone-border)] rounded-full px-3 py-2 flex items-center justify-between">
                  <span className="font-sans text-[10px] text-[var(--phone-muted)]">
                    Ask co-pilot anything…
                  </span>
                  <span className="w-6 h-6 rounded-full bg-orange flex items-center justify-center text-white text-[12px]">
                    ↑
                  </span>
                </div>
              </div>

              {/* Tab bar */}
              <div className="absolute bottom-0 left-3.5 right-3.5 h-[54px] flex items-center justify-around border-t border-[var(--phone-border)] bg-[var(--phone-bg)] rounded-b-[30px] z-10">
                {[
                  { l: "DET", active: true },
                  { l: "ATT&CK" },
                  { l: "SOAR" },
                  { l: "HONEY" },
                  { l: "REPORT" },
                ].map((tab) => (
                  <div
                    key={tab.l}
                    className={`flex flex-col items-center gap-0.5 ${
                      tab.active ? "opacity-100 -translate-y-0.5" : "opacity-30"
                    } transition`}
                  >
                    <div
                      className={`w-2 h-2 rounded-sm ${
                        tab.active ? "bg-orange" : "border border-[var(--phone-muted)]"
                      }`}
                    />
                    <div
                      className={`font-mono text-[7px] tracking-[0.5px] uppercase ${
                        tab.active ? "text-orange font-semibold" : "text-[var(--phone-muted)]"
                      }`}
                    >
                      {tab.l}
                    </div>
                    {tab.active && <div className="w-1 h-1 rounded-full bg-orange" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="flex flex-col gap-5 lg:items-start lg:text-left max-w-[440px] lg:mr-auto">
            <InfoCard
              align="left"
              icon={
                <svg viewBox="0 0 46 46" fill="none">
                  <circle cx="23" cy="23" r="18" stroke="currentColor" strokeWidth="2" />
                  <path d="M14 23l6 6 12-14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              text="Real-time anomaly detection across petabytes of logs — surfaced in under 2 seconds."
            />
            <InfoCard
              align="left"
              icon={
                <svg viewBox="0 0 46 46" fill="none">
                  <rect x="6" y="10" width="34" height="26" rx="4" stroke="currentColor" strokeWidth="2" />
                  <circle cx="16" cy="22" r="2.5" fill="currentColor" />
                  <path d="M22 22h12M16 30h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
              text="AI co-pilot explains every alert in plain English, mapped to MITRE ATT&CK techniques."
            />
            <InfoCard
              align="left"
              icon={
                <svg viewBox="0 0 46 46" fill="none">
                  <path d="M8 23l8 8 22-22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="35" cy="32" r="6" stroke="currentColor" strokeWidth="2" />
                </svg>
              }
              text="One-click SOAR playbooks, honeypot diversion, IDS/IPS rule deploy — all from one console."
            />
          </div>
        </div>

        {/* Tech pills */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {["ELK Stack", "Suricata", "Zeek", "Wazuh", "Sigma Rules", "MITRE ATT&CK", "TheHive", "MISP"].map(
            (t) => (
              <span key={t} className="tech-pill">
                {t}
              </span>
            ),
          )}
        </div>
      </section>

      {/* LIVE THREAT FEED */}
      <section className="relative z-10 border-y border-border bg-[var(--phone-card)] overflow-hidden">
        <div className="flex items-center">
          <div className="shrink-0 px-5 py-3 border-r border-spy-red/30 bg-[oklch(0.55_0.20_27/0.10)] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-spy-red animate-pulse-orange" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[2px] text-spy-red">
              Live Telemetry
            </span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="flex animate-ticker whitespace-nowrap font-mono text-[12px] py-3">
              {[...FEED, ...FEED].map((e, i) => (
                <span key={i} className="px-6 flex items-center gap-3">
                  <span className="text-[var(--text-dim)]">[{e.t}]</span>
                  <span
                    className={
                      e.sev.trim() === "CRIT"
                        ? "text-spy-red font-bold"
                        : e.sev.trim() === "HIGH"
                          ? "text-orange"
                          : "text-[var(--text-muted)]"
                    }
                  >
                    {e.sev}
                  </span>
                  <span className="text-[var(--foreground)]">{e.src}</span>
                  <span className="text-[var(--text-muted)]">→ {e.evt}</span>
                  <span className="text-[var(--text-dim)]">|</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="relative z-10 px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="font-mono text-[10px] tracking-[3px] uppercase text-orange mb-4">
              02 / Capabilities
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-[2px] uppercase leading-tight">
              Detect. Decide.<br />
              <span className="text-orange">Defend.</span>
            </h2>
            <p className="mt-6 font-sans text-[15px] text-[var(--text-muted)] leading-relaxed">
              The unified SOC platform that bolts onto any SIEM and gives every analyst — fresher
              or veteran — superpowers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                n: "01",
                t: "Real-Time Detection",
                d: "Stream-correlate logs from ELK, Splunk, Wazuh. Anomalies surface in under 2 seconds.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M16 16l5 5" />
                    <path d="M8 11h2l1.5-3 2 6 1.5-3h2" />
                  </svg>
                ),
              },
              {
                n: "02",
                t: "AI Co-Pilot",
                d: "Conversational triage. Ask 'why did this fire?' and get the full kill-chain explained.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="6" width="16" height="12" rx="3" />
                    <circle cx="9" cy="12" r="1.2" fill="currentColor" />
                    <circle cx="15" cy="12" r="1.2" fill="currentColor" />
                    <path d="M12 3v3M8 18l-2 3M16 18l2 3" />
                  </svg>
                ),
              },
              {
                n: "03",
                t: "IDS / IPS Fusion",
                d: "Suricata + Zeek pipelines with one-click block, quarantine and rule deployment.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                ),
              },
              {
                n: "04",
                t: "SOAR Playbooks",
                d: "Drag-and-drop response automation. Pre-built for ransomware, phishing, brute-force.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="6" height="6" rx="1.5" />
                    <rect x="15" y="4" width="6" height="6" rx="1.5" />
                    <rect x="9" y="14" width="6" height="6" rx="1.5" />
                    <path d="M6 10v2h12v2M12 14v-2" />
                  </svg>
                ),
              },
              {
                n: "05",
                t: "MITRE ATT&CK Map",
                d: "Every alert auto-tagged with tactics & techniques. Live coverage heatmap.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="6" height="6" rx="1" />
                    <rect x="11" y="3" width="6" height="6" rx="1" />
                    <rect x="3" y="11" width="6" height="6" rx="1" fill="currentColor" fillOpacity="0.3" />
                    <rect x="11" y="11" width="6" height="6" rx="1" />
                    <rect x="3" y="19" width="6" height="2" rx="1" />
                    <rect x="11" y="19" width="6" height="2" rx="1" fill="currentColor" fillOpacity="0.3" />
                    <rect x="19" y="3" width="2" height="14" rx="1" />
                  </svg>
                ),
              },
              {
                n: "06",
                t: "Honeypot Diversion",
                d: "Auto-redirect attackers into deception nets. Capture TTPs without exposing prod.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 8h14l-1 4H6L5 8z" />
                    <path d="M6 12h12v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6z" />
                    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                    <circle cx="12" cy="16" r="1.5" fill="currentColor" />
                  </svg>
                ),
              },
            ].map((c) => (
              <div
                key={c.n}
                className="info-card relative p-7 hover:border-orange/50 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="font-mono text-[10px] tracking-[2px] text-orange">/ {c.n}</div>
                  <div className="w-11 h-11 rounded-lg border border-orange/30 bg-orange/8 grid place-items-center text-orange group-hover:bg-orange/15 group-hover:border-orange/50 transition">
                    <div className="w-5 h-5">{c.icon}</div>
                  </div>
                </div>
                <h3 className="font-display font-bold text-[18px] tracking-[1px] uppercase mb-3 text-foreground">
                  {c.t}
                </h3>
                <p className="font-sans text-[14px] text-[var(--text-muted)] leading-relaxed">
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CO-PILOT BLOCK */}
      <section id="copilot" className="relative z-10 px-8 py-28 border-t border-border">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          {/* Terminal */}
          <div className="relative rounded-2xl border border-white/10 bg-[#0E0E14] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6),_0_0_120px_var(--orange-glow)]">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-black/40 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-spy-red" />
              <span className="w-2.5 h-2.5 rounded-full bg-orange" />
              <span className="w-2.5 h-2.5 rounded-full bg-verified" />
              <span className="ml-3 font-mono text-[11px] text-white/40">
                sentinel@soc-node-01:~
              </span>
            </div>
            <div className="p-6 font-mono text-[13px] space-y-1.5 min-h-[360px]">
              <div className="text-white/50">
                $ <span className="text-white/90">{typed}</span>
                <span className="cursor-blink text-orange">▋</span>
              </div>
              <div className="text-orange">[✓] connected to elk://siem.local:9200</div>
              <div className="text-orange">[✓] co-pilot online — sentinel-ai/v3</div>
              <div className="text-white/60">[~] ingesting 14,221 events/sec</div>
              <div className="pt-3 text-white/40">┌─ ANOMALY DETECTED ─────────────┐</div>
              <div className="text-spy-red font-bold">│ CRIT · lateral movement chain  │</div>
              <div className="text-white/70">│  ↳ host: <span className="text-orange">WIN-DC-04</span></div>
              <div className="text-white/70">│  ↳ MITRE: <span className="text-orange">T1021.002 → T1078</span></div>
              <div className="text-white/70">│  ↳ playbook: <span className="text-orange">isolate_host.yml</span></div>
              <div className="text-orange pt-1">[➜] response dispatched in 1.2s</div>
              <div className="text-white/40">└────────────────────────────────┘</div>
              <div className="pt-2 text-verified">[✓] honeypot redirect armed · attacker IP 203.0.113.7</div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <div className="font-mono text-[10px] tracking-[3px] uppercase text-orange mb-4">
              03 / Co-Pilot
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-[2px] uppercase leading-tight">
              Your L3 analyst.<br />
              <span className="text-orange">Available at 3 AM.</span>
            </h2>
            <p className="mt-6 font-sans text-[15px] text-[var(--text-muted)] leading-relaxed">
              The co-pilot translates raw telemetry into plain English, suggests the next step,
              and can auto-execute SOAR playbooks with human-in-the-loop approval. Freshers ramp
              up in days, not months.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Conversational threat hunting across petabyte logs",
                "Auto-generated incident reports with MITRE mapping",
                "Anomaly explanations + recommended response actions",
                "Honeypot interaction summaries in real time",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3 font-sans text-[14px]">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange shrink-0" />
                  <span className="text-foreground/90">{x}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="tech-pill">MITRE ATT&CK</span>
              <span className="tech-pill">SOAR</span>
              <span className="tech-pill">Honeypot</span>
              <span className="tech-pill">IDS/IPS</span>
            </div>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="relative z-10 px-8 py-28 border-t border-border">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="font-mono text-[10px] tracking-[3px] uppercase text-orange mb-4">
              04 / Stack
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-[2px] uppercase leading-tight">
              Drops in.<br />
              <span className="text-orange">Doesn't disrupt.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)] rounded-xl overflow-hidden border border-border">
            {[
              { n: "ELK Stack", s: "Elasticsearch · Kibana" },
              { n: "Splunk", s: "HEC + REST" },
              { n: "Wazuh", s: "Agent forwarding" },
              { n: "Suricata", s: "IDS / IPS engine" },
              { n: "Zeek", s: "Network telemetry" },
              { n: "Sigma Rules", s: "Universal detection" },
              { n: "TheHive", s: "Case management" },
              { n: "MISP", s: "Threat intel" },
            ].map((x) => (
              <div
                key={x.n}
                className="bg-card hover:bg-[var(--phone-card)] p-7 flex flex-col items-center text-center gap-2 transition"
              >
                <div className="w-11 h-11 rounded grid place-items-center border border-orange/30 bg-orange/10 text-orange mb-2">
                  <span className="font-display font-bold text-xs">{x.n.slice(0, 2).toUpperCase()}</span>
                </div>
                <div className="font-display font-bold text-sm tracking-[1px] uppercase text-foreground">{x.n}</div>
                <div className="font-mono text-[10px] tracking-[1px] text-[var(--text-muted)]">
                  {x.s}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="deploy" className="relative z-10 px-8 py-28 border-t border-border">
        <div className="mx-auto max-w-5xl text-center relative">
          <div
            className="ambient-glow"
            style={{ width: 600, height: 600, top: -150, left: "50%", transform: "translateX(-50%)", opacity: 0.18 }}
          />
          <div className="relative">
            <div className="font-mono text-[10px] tracking-[3px] uppercase text-orange mb-4">
              // initiate_deployment
            </div>
            <h2 className="font-display font-bold text-5xl md:text-7xl tracking-[3px] uppercase leading-[1.05]">
              The next attack<br />
              is <span className="text-orange">already</span><br />
              in your logs.
            </h2>
            <p className="mt-8 font-sans text-[16px] text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
              Built for InBorderland 3.0. Engineered for every Blue Team that refuses to lose to latency.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <button className="cta-btn-primary font-mono text-[12px] tracking-[1.5px] uppercase font-bold px-8 py-4 rounded text-white">
                ./deploy --prod
              </button>
              <button className="font-mono text-[12px] tracking-[1.5px] uppercase px-8 py-4 rounded border border-orange/30 hover:border-orange hover:bg-orange/5 transition text-foreground">
                read_whitepaper.pdf
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-border py-8">
        <div className="mx-auto max-w-7xl px-8 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-[var(--text-dim)]">
          <div className="font-display tracking-[3px] uppercase">
            Sen<span className="text-orange">tinel</span>
          </div>
          <div>InBorderland 3.0 · © {new Date().getFullYear()}</div>
          <div>
            status: <span className="text-orange">● operational</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ============== Sub-components ============== */

function InfoCard({
  icon,
  text,
  align,
}: {
  icon: React.ReactNode;
  text: string;
  align: "left" | "right";
}) {
  return (
    <div
      className={`info-card flex items-center gap-4 p-5 ${
        align === "right" ? "flex-row-reverse text-right" : ""
      }`}
    >
      <div className="shrink-0 w-[46px] h-[46px] text-orange">{icon}</div>
      <div className="font-sans text-[14px] leading-[1.5] text-foreground/95 font-medium">{text}</div>
    </div>
  );
}

function AlertCard({
  sev,
  sevColor,
  sevBg,
  name,
  technique,
  text,
}: {
  sev: string;
  sevColor: string;
  sevBg: string;
  name: string;
  technique: string;
  text: string;
}) {
  return (
    <div className="bg-[var(--phone-card)] border border-[var(--phone-border)] rounded-[10px] p-2.5 mb-2 flex items-start gap-2.5">
      <div
        className={`shrink-0 ${sevBg} ${sevColor} font-mono text-[8px] font-bold tracking-[1px] px-2 py-1.5 rounded`}
      >
        {sev}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-0.5">
          <span className="font-mono text-[10px] font-semibold text-[var(--phone-text)] truncate">
            {name}
          </span>
          <span className="font-mono text-[7px] text-orange shrink-0">{technique}</span>
        </div>
        <div className="font-sans text-[10px] text-[var(--phone-muted)] leading-tight">{text}</div>
      </div>
    </div>
  );
}
