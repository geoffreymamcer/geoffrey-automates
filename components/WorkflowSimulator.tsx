'use client';

import React, { useState } from 'react';
import { 
  Workflow, 
  Play, 
  RefreshCw, 
  CheckCircle2, 
  Zap, 
  MessageSquare, 
  Calendar, 
  Bot, 
  CreditCard, 
  Filter, 
  ArrowRight,
  Sparkles,
  Terminal,
  Layers,
  Database
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Scenario {
  id: string;
  title: string;
  badge: string;
  triggerName: string;
  triggerDesc: string;
  filterName: string;
  filterDesc: string;
  action1Name: string;
  action1Desc: string;
  action2Name: string;
  action2Desc: string;
  outcomeName: string;
  outcomeDesc: string;
}

export default function WorkflowSimulator() {
  const scenarios: Scenario[] = [
    {
      id: 'high-ticket',
      title: 'High-Ticket Inbound Lead Accelerator',
      badge: 'Lead Gen & Booking',
      triggerName: 'Form Submitted: Enterprise Quiz Funnel',
      triggerDesc: 'Lead captured with Company Size: 50+, Budget: $10,000/mo',
      filterName: 'Branch Condition: Budget ≥ $5k AND Country: US/CA',
      filterDesc: 'Route to VIP Executive Pipeline, bypass SDR queue',
      action1Name: 'AI Lead Qualification & CRM Contact Enrichment',
      action1Desc: 'Fetch LinkedIn metadata, score intent 96/100, create GHL Opportunity',
      action2Name: 'Instant 2-Way SMS & Custom Round-Robin Calendar Link',
      action2Desc: 'Deliver customized personalized SMS with dynamic custom values',
      outcomeName: 'Call Auto-Booked in GHL Calendar within 90 seconds',
      outcomeDesc: 'Reminder drip initialized + Zoom link dispatched'
    },
    {
      id: 'abandoned',
      title: 'Funnel Checkout Abandonment Recovery',
      badge: 'Revenue Recovery',
      triggerName: 'Webhook: Stripe Checkout Incomplete (20 mins)',
      triggerDesc: 'Prospect filled step 1 of 2-step order form but did not charge card',
      filterName: 'Condition: Tag Does Not Contain "Purchased-Core-Offer"',
      filterDesc: 'Verify no duplicate charge occurred in last 24h',
      action1Name: 'Dynamic SMS with 1-Click Resume Cart Link',
      action1Desc: 'Generate unique expiring token, text customer with exclusive incentive',
      action2Name: 'Custom Webhook: Retargeting Audience Sync (Meta & Google Ads)',
      action2Desc: 'Push lead ID to high-intent retargeting custom audience',
      outcomeName: '28.4% Average Recovered Cart Conversion',
      outcomeDesc: 'Opportunity moved to "Recovered Revenue" stage'
    },
    {
      id: 'dunning',
      title: 'SaaS Subscription Failed Payment Dunning',
      badge: 'SaaS Retention',
      triggerName: 'Webhook: Stripe invoice.payment_failed',
      triggerDesc: 'Customer card declined for $297/mo SaaS subscription tier',
      filterName: 'Retry Counter: Attempt #1 of 3 (Grace Period Active)',
      filterDesc: 'Prevent immediate account suspension during 3-day window',
      action1Name: 'Internal Slack/GHL Notification to Account Manager',
      action1Desc: 'Post alert with customer lifetime value and direct phone number',
      action2Name: 'Automated Friendly Update Card SMS & Email Chain',
      action2Desc: 'Direct link to secure custom portal billing update page',
      outcomeName: 'Card Updated & Account Retained Seamlessly',
      outcomeDesc: 'Subscription active, automated tag "Payment-Restored" applied'
    }
  ];

  const [selectedScenario, setSelectedScenario] = useState<Scenario>(scenarios[0]);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [logs, setLogs] = useState<string[]>([
    'System ready. Select a scenario and click "Run Live Workflow".'
  ]);

  const handleRunWorkflow = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(1);
    setLogs([`[0.00s] Initializing trigger: ${selectedScenario.triggerName}`]);

    const t1 = setTimeout(() => {
      setActiveStep(2);
      setLogs((prev) => [
        ...prev,
        `[0.65s] Filter condition validated: "${selectedScenario.filterName}" -> PASSED`
      ]);
    }, 700);

    const t2 = setTimeout(() => {
      setActiveStep(3);
      setLogs((prev) => [
        ...prev,
        `[1.40s] Executing action 1: ${selectedScenario.action1Name}`
      ]);
    }, 1500);

    const t3 = setTimeout(() => {
      setActiveStep(4);
      setLogs((prev) => [
        ...prev,
        `[2.10s] Executing action 2: ${selectedScenario.action2Name}`
      ]);
    }, 2200);

    const t4 = setTimeout(() => {
      setActiveStep(5);
      setLogs((prev) => [
        ...prev,
        `[2.90s] SUCCESS: ${selectedScenario.outcomeName}`
      ]);
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#ffffff', '#d4d4d8', '#a1a1aa', '#71717a']
      });
      setIsRunning(false);
    }, 3000);
  };

  const selectScenario = (sc: Scenario) => {
    setSelectedScenario(sc);
    setActiveStep(0);
    setLogs([`Loaded workflow: "${sc.title}". Ready to test.`]);
  };

  return (
    <section id="workflow-demo" className="py-20 sm:py-28 relative bg-neutral-50/70 dark:bg-black/60 border-t border-b border-neutral-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-zinc-900 text-neutral-800 dark:text-zinc-200 border border-neutral-300 dark:border-zinc-800 mb-3">
            <Workflow className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300 animate-spin-slow" />
            <span>Interactive GHL Playground</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Live GoHighLevel <span className="bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">Automation Simulator</span>
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-zinc-400 max-w-2xl text-sm sm:text-base">
            Test real-world GoHighLevel workflow pipelines designed by Mark Geoffrey A. Batocabe. Watch how triggers, condition branches, APIs, and multi-channel actions coordinate in real time.
          </p>
        </div>

        {/* Scenario Selection Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {scenarios.map((sc) => {
            const isSelected = selectedScenario.id === sc.id;
            return (
              <button
                key={sc.id}
                onClick={() => selectScenario(sc)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  isSelected
                    ? 'border-black dark:border-white bg-white dark:bg-zinc-900 shadow-md'
                    : 'border-neutral-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-950/40 hover:border-neutral-400 dark:hover:border-zinc-700'
                }`}
              >
                <span className="inline-block text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-neutral-100 dark:bg-zinc-800 text-neutral-800 dark:text-zinc-200 mb-1.5 border border-neutral-200 dark:border-zinc-700">
                  {sc.badge}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                  {sc.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Visual Node Diagram */}
        <div className="rounded-2xl bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-zinc-800 p-6 sm:p-8 shadow-xl relative overflow-hidden">
          
          {/* Top Control Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-neutral-200 dark:border-zinc-800">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <span>Active Pipeline: {selectedScenario.title}</span>
              </h3>
              <p className="text-xs text-neutral-500 dark:text-zinc-400 mt-0.5">
                Multi-branch logic tree with API webhook middleware
              </p>
            </div>

            <button
              onClick={handleRunWorkflow}
              disabled={isRunning}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-zinc-200 shadow-md disabled:opacity-60 cursor-pointer transition-all"
            >
              {isRunning ? (
                <RefreshCw className="w-4 h-4 animate-spin text-zinc-400" />
              ) : (
                <Play className="w-4 h-4 fill-current text-white dark:text-black" />
              )}
              <span>{isRunning ? 'Running Pipeline Simulation...' : 'Execute Live Pipeline'}</span>
            </button>
          </div>

          {/* Workflow Steps Horizontal / Vertical Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative">
            
            {/* Step 1: Trigger */}
            <div className={`p-4 rounded-xl border transition-all duration-300 ${
              activeStep === 1
                ? 'border-black dark:border-white bg-black/5 dark:bg-zinc-900 shadow-lg scale-105'
                : activeStep > 1
                  ? 'border-zinc-400 dark:border-zinc-700 bg-neutral-100/50 dark:bg-zinc-900/40'
                  : 'border-neutral-200 dark:border-zinc-800 bg-neutral-50 dark:bg-zinc-950/50'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold text-neutral-900 dark:text-zinc-200 bg-neutral-200 dark:bg-zinc-800 px-2 py-0.5 rounded">
                  STEP 1: TRIGGER
                </span>
                <Zap className={`w-4 h-4 ${activeStep >= 1 ? 'text-black dark:text-white' : 'text-neutral-400 dark:text-zinc-600'}`} />
              </div>
              <h5 className="text-xs font-bold text-neutral-900 dark:text-white mb-1">
                {selectedScenario.triggerName}
              </h5>
              <p className="text-[11px] text-neutral-500 dark:text-zinc-400 leading-snug">
                {selectedScenario.triggerDesc}
              </p>
            </div>

            {/* Step 2: Filter */}
            <div className={`p-4 rounded-xl border transition-all duration-300 ${
              activeStep === 2
                ? 'border-black dark:border-white bg-black/5 dark:bg-zinc-900 shadow-lg scale-105'
                : activeStep > 2
                  ? 'border-zinc-400 dark:border-zinc-700 bg-neutral-100/50 dark:bg-zinc-900/40'
                  : 'border-neutral-200 dark:border-zinc-800 bg-neutral-50 dark:bg-zinc-950/50'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold text-neutral-900 dark:text-zinc-200 bg-neutral-200 dark:bg-zinc-800 px-2 py-0.5 rounded">
                  STEP 2: IF/ELSE LOGIC
                </span>
                <Filter className={`w-4 h-4 ${activeStep >= 2 ? 'text-black dark:text-white' : 'text-neutral-400 dark:text-zinc-600'}`} />
              </div>
              <h5 className="text-xs font-bold text-neutral-900 dark:text-white mb-1">
                {selectedScenario.filterName}
              </h5>
              <p className="text-[11px] text-neutral-500 dark:text-zinc-400 leading-snug">
                {selectedScenario.filterDesc}
              </p>
            </div>

            {/* Step 3: Action 1 */}
            <div className={`p-4 rounded-xl border transition-all duration-300 ${
              activeStep === 3
                ? 'border-black dark:border-white bg-black/5 dark:bg-zinc-900 shadow-lg scale-105'
                : activeStep > 3
                  ? 'border-zinc-400 dark:border-zinc-700 bg-neutral-100/50 dark:bg-zinc-900/40'
                  : 'border-neutral-200 dark:border-zinc-800 bg-neutral-50 dark:bg-zinc-950/50'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold text-neutral-900 dark:text-zinc-200 bg-neutral-200 dark:bg-zinc-800 px-2 py-0.5 rounded">
                  STEP 3: ACTION / API
                </span>
                <Bot className={`w-4 h-4 ${activeStep >= 3 ? 'text-black dark:text-white' : 'text-neutral-400 dark:text-zinc-600'}`} />
              </div>
              <h5 className="text-xs font-bold text-neutral-900 dark:text-white mb-1">
                {selectedScenario.action1Name}
              </h5>
              <p className="text-[11px] text-neutral-500 dark:text-zinc-400 leading-snug">
                {selectedScenario.action1Desc}
              </p>
            </div>

            {/* Step 4: Action 2 */}
            <div className={`p-4 rounded-xl border transition-all duration-300 ${
              activeStep === 4
                ? 'border-black dark:border-white bg-black/5 dark:bg-zinc-900 shadow-lg scale-105'
                : activeStep > 4
                  ? 'border-zinc-400 dark:border-zinc-700 bg-neutral-100/50 dark:bg-zinc-900/40'
                  : 'border-neutral-200 dark:border-zinc-800 bg-neutral-50 dark:bg-zinc-950/50'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold text-neutral-900 dark:text-zinc-200 bg-neutral-200 dark:bg-zinc-800 px-2 py-0.5 rounded">
                  STEP 4: SMS / CALENDAR
                </span>
                <MessageSquare className={`w-4 h-4 ${activeStep >= 4 ? 'text-black dark:text-white' : 'text-neutral-400 dark:text-zinc-600'}`} />
              </div>
              <h5 className="text-xs font-bold text-neutral-900 dark:text-white mb-1">
                {selectedScenario.action2Name}
              </h5>
              <p className="text-[11px] text-neutral-500 dark:text-zinc-400 leading-snug">
                {selectedScenario.action2Desc}
              </p>
            </div>

            {/* Step 5: Outcome */}
            <div className={`p-4 rounded-xl border transition-all duration-300 ${
              activeStep === 5
                ? 'border-black dark:border-white bg-black/10 dark:bg-white/10 shadow-xl scale-105'
                : 'border-neutral-200 dark:border-zinc-800 bg-neutral-50 dark:bg-zinc-950/50'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold text-neutral-900 dark:text-white bg-neutral-200 dark:bg-zinc-800 px-2 py-0.5 rounded">
                  STEP 5: RESULT
                </span>
                <CheckCircle2 className={`w-4 h-4 ${activeStep === 5 ? 'text-black dark:text-white' : 'text-neutral-400 dark:text-zinc-600'}`} />
              </div>
              <h5 className="text-xs font-bold text-neutral-900 dark:text-white mb-1">
                {selectedScenario.outcomeName}
              </h5>
              <p className="text-[11px] text-neutral-500 dark:text-zinc-400 leading-snug">
                {selectedScenario.outcomeDesc}
              </p>
            </div>

          </div>

          {/* Real-time Execution Logs */}
          <div className="mt-8 rounded-xl bg-zinc-950 text-zinc-200 p-4 border border-zinc-800 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-800 text-[11px] text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-zinc-300" />
                <span>GoHighLevel Realtime Execution Console</span>
              </div>
              <span className="text-white font-semibold">Status: 200 OK</span>
            </div>
            <div className="space-y-1">
              {logs.map((log, lIdx) => (
                <div key={lIdx} className="text-zinc-300">
                  <span className="text-zinc-500 mr-1">&gt;</span> {log}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
