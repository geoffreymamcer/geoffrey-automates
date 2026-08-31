import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResumePdf() {
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Helper for adding pages with clean margins
  const PAGE_WIDTH = 595.28; // A4
  const PAGE_HEIGHT = 841.89;
  const MARGIN_LEFT = 40;
  const MARGIN_RIGHT = 40;
  const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_LEFT - MARGIN_RIGHT;

  let currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let currentY = PAGE_HEIGHT - 45;

  function checkY(neededSpace = 30) {
    if (currentY - neededSpace < 40) {
      currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
      currentY = PAGE_HEIGHT - 45;
      return true;
    }
    return false;
  }

  function drawHeader(title) {
    checkY(35);
    currentPage.drawRectangle({
      x: MARGIN_LEFT,
      y: currentY - 2,
      width: CONTENT_WIDTH,
      height: 18,
      color: rgb(0.93, 0.94, 0.96),
    });
    currentPage.drawText(title, {
      x: MARGIN_LEFT + 8,
      y: currentY + 3,
      size: 10,
      font: fontBold,
      color: rgb(0.1, 0.12, 0.15),
    });
    currentY -= 26;
  }

  function drawText(text, size = 9, isBold = false, isItalic = false, color = rgb(0.15, 0.15, 0.15), indent = 0) {
    const font = isBold ? fontBold : isItalic ? fontOblique : fontRegular;
    const maxW = CONTENT_WIDTH - indent;
    const words = text.split(' ');
    let line = '';

    for (let i = 0; i < words.length; i++) {
      const testLine = line + (line ? ' ' : '') + words[i];
      const width = font.widthOfTextAtSize(testLine, size);
      if (width > maxW && line !== '') {
        checkY(size + 4);
        currentPage.drawText(line, {
          x: MARGIN_LEFT + indent,
          y: currentY,
          size,
          font,
          color,
        });
        currentY -= size + 4;
        line = words[i];
      } else {
        line = testLine;
      }
    }
    if (line) {
      checkY(size + 4);
      currentPage.drawText(line, {
        x: MARGIN_LEFT + indent,
        y: currentY,
        size,
        font,
        color,
      });
      currentY -= size + 4;
    }
  }

  function drawBullet(text, size = 8.5) {
    const font = fontRegular;
    const indent = 14;
    const maxW = CONTENT_WIDTH - indent;
    const words = text.split(' ');
    let line = '';
    let isFirst = true;

    for (let i = 0; i < words.length; i++) {
      const testLine = line + (line ? ' ' : '') + words[i];
      const width = font.widthOfTextAtSize(testLine, size);
      if (width > maxW && line !== '') {
        checkY(size + 4);
        if (isFirst) {
          currentPage.drawText('•', {
            x: MARGIN_LEFT + 2,
            y: currentY,
            size: size + 1,
            font: fontBold,
            color: rgb(0.2, 0.2, 0.2),
          });
          isFirst = false;
        }
        currentPage.drawText(line, {
          x: MARGIN_LEFT + indent,
          y: currentY,
          size,
          font,
          color: rgb(0.2, 0.2, 0.2),
        });
        currentY -= size + 4;
        line = words[i];
      } else {
        line = testLine;
      }
    }
    if (line) {
      checkY(size + 4);
      if (isFirst) {
        currentPage.drawText('•', {
          x: MARGIN_LEFT + 2,
          y: currentY,
          size: size + 1,
          font: fontBold,
          color: rgb(0.2, 0.2, 0.2),
        });
      }
      currentPage.drawText(line, {
        x: MARGIN_LEFT + indent,
        y: currentY,
        size,
        font,
        color: rgb(0.2, 0.2, 0.2),
      });
      currentY -= size + 4;
    }
  }

  // --- PAGE 1: RESUME ---
  // Title / Name Banner
  currentPage.drawText('MARK GEOFFREY A. BATOCABE', {
    x: MARGIN_LEFT,
    y: currentY,
    size: 20,
    font: fontBold,
    color: rgb(0.08, 0.08, 0.08),
  });
  currentY -= 16;

  currentPage.drawText('GoHighLevel Automation Specialist  |  Full-Stack Developer (MERN / .NET)', {
    x: MARGIN_LEFT,
    y: currentY,
    size: 10.5,
    font: fontBold,
    color: rgb(0.2, 0.3, 0.5),
  });
  currentY -= 14;

  currentPage.drawText('Pagbilao, Quezon, Philippines  •  batocabemarkgeoffrey@gmail.com  •  0994-694-4768  •  Open to Remote Opportunities', {
    x: MARGIN_LEFT,
    y: currentY,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.35, 0.35, 0.35),
  });
  currentY -= 20;

  // 1. SUMMARY
  drawHeader('PROFESSIONAL SUMMARY');
  drawText(
    'GoHighLevel (GHL) Specialist and Full-Stack Developer who builds complete client-acquisition systems, not just chat automations. Has independently designed, built, and documented three end-to-end GHL portfolio systems — covering CRM/pipeline architecture, multi-step conditional automations, AI-powered conversational agents, funnels, booking/calendar logic, and reporting dashboards — while integrating tools like Make.com, Stripe, Twilio, Mailgun, and Looker Studio. Pairs this with a strong software engineering foundation (MERN stack, C#/.NET, RESTful APIs, JWT/RBAC security) to troubleshoot integrations, customize workflows beyond no-code limits, and collaborate seamlessly with development teams.',
    8.5,
    false,
    false,
    rgb(0.2, 0.2, 0.2)
  );
  currentY -= 10;

  // 2. CORE SKILLS
  drawHeader('CORE SKILLS & TECHNICAL EXPERTISE');
  drawText('GoHighLevel (GHL): Sub-account setup & branding, custom fields/tags, pipeline/opportunity architecture, forms, calendars (buffers, multi-staff scheduling, Zoom integration), funnels & landing pages, Conversation AI / AI receptionist bots, reputation management, snapshot export, agency/SaaS white-label concepts.', 8.5, false, false, rgb(0.2, 0.2, 0.2));
  currentY -= 3;
  drawText('Integrations & Automation: Make.com (multi-step cross-platform scenarios, webhook triggers, data mapping), Stripe (payment links, test deposits), Twilio (SMS/voice configuration), Mailgun (email delivery, DNS verification), Looker Studio (reporting dashboards), Zoom, Zapier.', 8.5, false, false, rgb(0.2, 0.2, 0.2));
  currentY -= 3;
  drawText('Software Development: JavaScript (ES6+), TypeScript, C# (.NET / ASP.NET Core), React.js, Next.js, Node.js, Express.js, React Native, RESTful APIs, JWT Authentication, Role-Based Access Control (RBAC).', 8.5, false, false, rgb(0.2, 0.2, 0.2));
  currentY -= 3;
  drawText('Data & AI Tooling: MongoDB, MS SQL Server (T-SQL), PostgreSQL, Python (Pandas, NumPy, Matplotlib), Power BI, ChatGPT & Claude (prompt design, script refinement, edge-case testing).', 8.5, false, false, rgb(0.2, 0.2, 0.2));
  currentY -= 10;

  // 3. GHL PORTFOLIO PROJECTS
  drawHeader('GOHIGHLEVEL (GHL) PORTFOLIO PROJECTS');
  
  // Project 1
  drawText('1. BrightSmile Dental Clinic — AI-Powered Patient Acquisition & Retention System (20-Day Solo Build)', 9, true, false, rgb(0.1, 0.1, 0.1));
  drawBullet('Architected a 7-stage sales pipeline, custom fields, and a 5-page responsive website/funnel with landing pages driving form submissions directly into the CRM.');
  drawBullet('Built native GHL automations for lead nurture, appointment reminders, no-show recovery, birthday/recall campaigns, and review-request reputation management.');
  drawBullet('Trained an AI receptionist in GHL Conversation AI, utilizing ChatGPT and Claude to draft FAQ/booking scripts and stress-test edge-case patient questions.');
  drawBullet('Connected cross-platform automation via Make.com (GHL -> Notion), Stripe test-mode deposits, Twilio SMS, Mailgun email sequences, and Zoom virtual consultation booking.');
  drawBullet('Delivered a Looker Studio reporting dashboard, exported reusable snapshot, and full documentation trail across Notion and Google Drive.');
  currentY -= 6;

  // Project 2
  drawText('2. Nolan & Co. Realty — Real Estate Lead-Generation MVP (9-Day Solo Build)', 9, true, false, rgb(0.1, 0.1, 0.1));
  drawText('Documentation: https://app.notion.com/p/Nolan-Co-Realty-3ca7113faf3d80258c6ec526f68c2621', 8, false, true, rgb(0.2, 0.3, 0.6));
  drawBullet('Branded a dedicated sub-account and built a 6-stage pipeline, mobile-responsive landing page, and lead capture form mapped directly into custom CRM fields.');
  drawBullet('Designed an instant-response workflow (email + SMS fallback) and a 5-day nurture sequence with conditional exit logic tied to booking activity.');
  drawBullet('Built and linked a booking calendar that automatically advances pipeline stage and triggers agent notifications upon appointment confirmation.');
  drawBullet('Executed a testing plan across 3 lead personas plus a mobile QA pass, closing with zero unresolved bugs on final validation.');
  currentY -= 6;

  // Project 3
  drawText('3. Ferrow Air & Heat — Home Services (HVAC) MVP (9-Day Solo Build)', 9, true, false, rgb(0.1, 0.1, 0.1));
  drawText('Documentation: https://app.notion.com/p/Ferrow-Air-Heat-3ca7113faf3d80e995f6e43407b3732f', 8, false, true, rgb(0.2, 0.3, 0.6));
  drawBullet('Built a 10-stage pipeline and a service-request form with a qualification workflow branching leads into Emergency / Standard / Out-of-Area paths.');
  drawBullet('Engineered a 6-workflow automation system handling booked, no-show, completed, review request, and seasonal reactivation states.');
  drawBullet('Documented system architecture, CRM design, and automation logic for every workflow as part of a formal Documentation Plan.');
  currentY -= 10;

  // 4. SOFTWARE & DATA PROJECTS
  drawHeader('FULL-STACK SOFTWARE & DATA PROJECTS');
  drawText('Full-Stack EMR System with AI Integration (Thesis Project | MERN Stack + AI)', 9, true, false, rgb(0.1, 0.1, 0.1));
  drawText('Live App: https://cecc-test.vercel.app/', 8, false, true, rgb(0.2, 0.3, 0.6));
  drawBullet('Architected a MERN-stack Electronic Medical Record system streamlining patient management, electronic records, and appointment scheduling.');
  drawBullet('Engineered an AI-powered Ishihara color vision test for preliminary diagnostic screening. Implemented RBAC and JWT authentication with sub-second query latency.');
  currentY -= 5;

  drawText('Data Analytics & Predictive Modeling (Python | Power BI)', 9, true, false, rgb(0.1, 0.1, 0.1));
  drawText('Repository: https://github.com/geoffreymamcer/ITELEC_Activities.git', 8, false, true, rgb(0.2, 0.3, 0.6));
  drawBullet('Executed end-to-end Python data pipelines cleaning and analyzing 3+ real-world datasets (Chicago Crime, UK Road Accidents).');
  drawBullet('Synthesized insights with Matplotlib and Power BI dashboards and applied regression/classification algorithms to forecast safety trends.');
  currentY -= 10;

  // 5. EXPERIENCE & EDUCATION
  drawHeader('PROFESSIONAL EXPERIENCE & EDUCATION');
  drawText('Web Developer and Clerical Intern  —  Quezon National Highschool, Lucena City', 8.5, true, false, rgb(0.1, 0.1, 0.1));
  drawText('Feb 2026 – Jun 2026', 8, false, true, rgb(0.4, 0.4, 0.4));
  drawBullet('Developed and deployed a locally hosted web application for HR to centralize and digitize 300+ faculty records, reducing manual paperwork.');
  drawBullet('Engineered an automated license expiration tracking tool ensuring regulatory compliance for teaching staff.');
  currentY -= 5;

  drawText('Bachelor of Science in Information Technology (BSIT)', 8.5, true, false, rgb(0.1, 0.1, 0.1));
  drawText('Dalubhasaan ng Lungsod ng Lucena (City College of Lucena)  |  2022 – 2026', 8, false, false, rgb(0.3, 0.3, 0.3));
  drawText('Specialization: Web and Mobile Application Development', 8, false, true, rgb(0.4, 0.4, 0.4));
  currentY -= 25;

  // --- SECTION: GHL BOOTCAMP CASE STUDY / DOCUMENTATION ATTACHMENT ---
  checkY(80);
  drawHeader('APPENDIX: GOHIGHLEVEL 9-DAY BOOTCAMP SPECIFICATION & CASE STUDY');
  drawText('Home Services (HVAC) MVP Portfolio Implementation Blueprint', 11, true, false, rgb(0.08, 0.08, 0.08));
  currentY -= 6;
  drawText('This appendix provides the complete system architecture, CRM design, workflow routing, and testing log for the Ferrow Air & Heat GHL implementation demonstrating senior-level GHL workflows, state management, and error handling.', 8.5, false, false, rgb(0.25, 0.25, 0.25));
  currentY -= 12;

  drawText('1. Business Profile & Conversion Objective', 9.5, true, false, rgb(0.1, 0.1, 0.1));
  drawBullet('Target Business: Ferrow Air & Heat (HVAC Emergency Repair, Maintenance, Quote Services).');
  drawBullet('Core Business Problem: Inquiries across phone, form, and word-of-mouth were lost due to slow manual follow-up and inability to prioritize emergency calls over routine maintenance.');
  drawBullet('Key Conversion Goal: Get submitted service requests to a confirmed appointment in under 5 minutes with zero lost leads.');
  currentY -= 6;

  drawText('2. 10-Stage Pipeline Architecture & Custom Fields', 9.5, true, false, rgb(0.1, 0.1, 0.1));
  drawBullet('Pipeline Stages: New Lead -> Contacted -> Qualified -> Estimate/Visit Scheduled -> Estimate Sent -> Decision Pending -> Job Scheduled -> Job Completed -> Won -> Lost/Not Qualified.');
  drawBullet('Custom Fields: Service Type (Emergency, AC Repair, Heating Repair, Quote, Maintenance), Property Type, Urgency Level, Estimated Job Value, Preferred Appointment Date, Lead Source.');
  currentY -= 6;

  drawText('3. 6-Workflow Automation Engine', 9.5, true, false, rgb(0.1, 0.1, 0.1));
  drawBullet('Workflow 1 (New Intake): Form submitted -> Contact creation -> custom field tagging -> office team instant notification.');
  drawBullet('Workflow 2 (Lead Qualification): Conditional branching on Urgency (Emergency -> high-priority SMS/alert; Standard -> standard follow-up; Out-of-Area -> polite referral response).');
  drawBullet('Workflow 3 (Appointment Booking): Booking confirmed -> pipeline state advance -> nurture exit -> customer SMS/email confirmation.');
  drawBullet('Workflow 4 (Reminder & State Management): Multi-step reminder cadence (24h, 2h) -> branching into Completed vs. No-Show.');
  drawBullet('Workflow 5 (No-Show & Unbooked Recovery): Automated rebooking nurture with conditional time delays.');
  drawBullet('Workflow 6 (Review Request & Seasonal Reactivation): Post-service review invitation -> 6-month seasonal tune-up reactivation sequence.');
  currentY -= 12;

  drawText('Verified and compiled by Mark Geoffrey A. Batocabe — Available for Remote and On-Site GHL / Full-Stack Roles.', 8, false, true, rgb(0.3, 0.3, 0.3));

  const pdfBytes = await pdfDoc.save();
  const outputDir = path.resolve('public');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(path.join(outputDir, 'Mark_Geoffrey_Batocabe_Resume.pdf'), pdfBytes);
  fs.writeFileSync(path.join(outputDir, 'resume.pdf'), pdfBytes);
  console.log('Successfully generated Mark_Geoffrey_Batocabe_Resume.pdf and resume.pdf in /public');
}

generateResumePdf().catch(console.error);
