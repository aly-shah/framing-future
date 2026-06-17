"use client";

import { useEffect, useRef } from "react";

const TARGET_ID = "lunacal-inline-clarity-call";

// Official Lunacal inline embed snippet (loader + init), injected as raw JS
// so it runs verbatim without TypeScript type-checking.
const SNIPPET = `
(function (L,U,N){let p=(a,ar)=>a.q.push(ar),d=L.document;L.Lunacal=L.Lunacal||function(){let lun=L.Lunacal,ar=arguments;if(!lun.loaded){lun.ns={};lun.q=lun.q||[];d.head.appendChild(d.createElement("script")).src=U;lun.loaded=!0}if(ar[0]===N){const api=function(){p(api,arguments)};const ns=ar[1];api.q=api.q||[];if(typeof ns==="string"){lun.ns[ns]=lun.ns[ns]||api;p(lun.ns[ns],ar);p(lun,["initNamespace",ns])}else p(lun,ar);return}p(lun,ar)};if(!L.Cal)L.Cal=L.Lunacal})(window,"https://app.lunacal.ai/embed/embed.js","init");
Lunacal("init","clarity-call-30-minutes",{origin:"https://app.lunacal.ai"});
Lunacal.ns["clarity-call-30-minutes"]("inline",{elementOrSelector:"#${TARGET_ID}",calLink:"framingfuture-coaching/clarity-call-30-minutes"});
Lunacal.ns["clarity-call-30-minutes"]("ui",{"theme":"light","hideEventTypeDetails":false,"layout":"","cssVarsPerTheme":{"light":{"embed-primary":"hsl(174, 82%, 42%)","embed-primary-dark":"hsl(174, 90%, 30%)"}}});
`;

export function LunacalEmbed() {
  const injected = useRef(false);

  useEffect(() => {
    if (injected.current) return;
    injected.current = true;
    const s = document.createElement("script");
    s.textContent = SNIPPET;
    document.body.appendChild(s);
  }, []);

  return (
    <div className="w-full">
      <div id={TARGET_ID} style={{ width: "100%", height: "100%", minHeight: 560, overflow: "auto" }} />
      <p className="text-center text-white/45 text-xs mt-3">
        Trouble loading the calendar?{" "}
        <a
          href="https://lunacal.ai/framingfuture-coaching/clarity-call-30-minutes"
          target="_blank"
          rel="noreferrer"
          className="text-accent hover:underline"
        >
          Open the booking page ↗
        </a>
      </p>
    </div>
  );
}
