// Scroll drives the camera and SVG rigs; static HTML remains complete without JS.
(() => {
  const scenes = [...document.querySelectorAll('.scene')];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const rigs = scenes.map(scene => ({scene, panel:scene.querySelector('.panel-frame'), actors:[...scene.querySelectorAll('.toon')]}));
  const clamp = (n, low=0, high=1) => Math.min(high,Math.max(low,n));
  const ease = n => { n=clamp(n); return n*n*(3-2*n); };
  let queued = false;
  function frame() {
    queued = false;
    rigs.forEach(({scene,panel,actors}, sceneIndex)=>{
      const bounds=scene.getBoundingClientRect(), panelBounds=panel.getBoundingClientRect();
      if(bounds.bottom<0 || bounds.top>innerHeight) return;
      const quiet = reduced.matches;
      const entry = sceneIndex===0 ? 1 : ease((innerHeight-bounds.top)/(innerHeight*.85));
      const travel = clamp(-bounds.top / Math.max(1,bounds.height-innerHeight));
      const exit = ease((innerHeight*.45-bounds.bottom)/(innerHeight*.45));
      const phase = quiet ? 0 : Math.sin(travel*Math.PI);
      panel.style.setProperty('--panel-opacity',quiet?1:1-exit*.85);
      panel.style.setProperty('--panel-enter',quiet?'0px':`${(1-entry)*36}px`);
      panel.style.setProperty('--camera-scale',quiet?1:1+travel*.025);
      panel.style.setProperty('--background-drift',quiet?'0px':`${-travel*35}px`);
      panel.style.setProperty('--drift',quiet?'0px':`${-travel*12}px`);
      panel.style.setProperty('--room-opacity',quiet?1:.55+entry*.45);
      actors.forEach((actor,index)=>{
        const arrival = quiet||sceneIndex===0 ? 1 : ease((innerHeight-panelBounds.top)/(innerHeight*.72)-index*.065);
        actor.style.setProperty('--actor-opacity',.25+arrival*.75);
        actor.style.setProperty('--actor-y',`${quiet?0:(1-arrival)*30-phase*(index%2?3:7)}px`);
        const sign = index%2 ? -1 : 1;
        actor.style.setProperty('--head-turn',`${phase*sign*(actor.classList.contains('toon-miki')?7:4)}deg`);
        actor.style.setProperty('--arm-turn',`${phase*sign*(actor.classList.contains('toon-bobo')?8:actor.classList.contains('toon-kevin')?7:4)}deg`);
        actor.style.setProperty('--cup-lift',`${actor.classList.contains('toon-jakin')?-phase*9:0}px`);
        actor.style.setProperty('--bubble-opacity',quiet?1:sceneIndex===0?1:ease((arrival-.35)/.65));
      });
    });
  }
  addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(frame);}}, {passive:true});
  addEventListener('resize',frame);
  reduced.addEventListener('change',frame); addEventListener('pageshow',frame); frame();
})();
