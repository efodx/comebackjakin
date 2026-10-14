// Three cartoon layouts on the existing page. Local-only, ?prototype=1&variant=A/B/C.
(() => {
  if (!['localhost', '127.0.0.1'].includes(location.hostname) || new URLSearchParams(location.search).get('prototype') !== '1') return;
  const css = document.createElement('link');
  css.rel = 'stylesheet'; css.href = './prototype.css'; document.head.append(css);
  document.body.classList.add('cartoon-prototype');
  const people = {
    Bobo: { hair:'#292125', shirt:'#a6abb8', beard:true, type:'front' },
    Miki: { hair:'#28202a', shirt:'#303b50', beard:false, type:'neat' },
    Kevin: { hair:'#654331', shirt:'#e5dac8', beard:true, type:'long', glasses:true },
    Pipej: { hair:'#473028', shirt:'#40434b', beard:false, type:'swept' },
    Jakin: { hair:'#997250', shirt:'#263c64', beard:true, type:'crop' },
  };
  function portrait(name, sad) {
    const p = people[name];
    const hair = p.type === 'long' ? '<path d="M44 86 Q24 36 58 24 Q118 -1 136 56 L143 137 L110 140 L103 52 L64 56 L66 137 L31 137Z"/>' : p.type === 'swept' ? '<path d="M41 74 Q21 30 51 23 Q102 0 135 35 L141 89 L123 67 L117 46 Q86 67 48 57Z"/>' : p.type === 'crop' ? '<path d="M44 51 Q51 23 87 25 Q124 22 132 54 L118 49 Q80 40 44 58Z"/>' : p.type === 'front' ? '<path d="M42 76 L41 53 Q42 26 74 24 Q113 18 129 40 Q136 54 131 77 L120 53 L110 49 L98 57 L94 50 L81 58 L78 51 L62 56 L53 52 L50 75Z"/>' : '<path d="M43 76 L42 52 Q43 27 76 25 Q113 20 128 41 Q135 56 130 76 L120 54 Q102 43 80 49 L58 55 L51 74Z"/>';
    return `<svg viewBox="0 0 180 250" role="img" aria-label="${name}" xmlns="http://www.w3.org/2000/svg"><g stroke="#171c2c" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
      <ellipse cx="90" cy="240" rx="72" ry="7" fill="#111827" opacity=".3" stroke="none"/>
      <g class="rig-arm-left">
        <path d="M45 150 Q32 149 29 167 L25 207 Q25 216 38 218 L49 215 L57 169 Q59 157 45 150Z" fill="${p.shirt}"/>
        <path d="M29 214 L43 216 L43 224 Q38 233 30 226Z" fill="#f2bd97"/>
        <path d="M27 207 L48 211" fill="none" stroke-width="3"/>
      </g>
      <g class="rig-arm-right">
        <path d="M135 150 Q148 149 151 167 L155 207 Q155 216 142 218 L131 215 L123 169 Q121 157 135 150Z" fill="${p.shirt}"/>
        <path d="M137 216 L151 214 L150 226 Q142 233 137 224Z" fill="#f2bd97"/>
        <path d="M132 211 L153 207" fill="none" stroke-width="3"/>
      </g>
      <g class="rig-body">
      <path d="M48 233 L49 166 Q50 143 70 139 L110 139 Q130 143 131 166 L132 233Z" fill="${p.shirt}"/>
      <path d="M76 122 L75 145 Q88 158 105 145 L104 122" fill="#e7aa82"/>
      </g><g class="rig-head">
      ${p.type==='long'?`<g fill="${p.hair}">${hair}</g>`:''}
      <ellipse cx="44" cy="87" rx="10" ry="15" fill="#f2bd97"/><ellipse cx="133" cy="87" rx="10" ry="15" fill="#f2bd97"/>
      <path d="M45 61 Q46 28 89 28 Q132 28 132 62 L129 104 Q123 137 90 137 Q57 137 48 104Z" fill="#f2bd97"/>
      ${p.type!=='long'?`<g fill="${p.hair}">${hair}</g>`:`<path d="M46 67 Q32 31 70 25 Q118 8 132 55 L120 67 L110 40 Q77 59 46 67Z" fill="${p.hair}"/>`}
      ${p.beard?`<path d="M49 98 Q58 107 63 99 L66 113 Q90 125 113 111 L119 98 L129 93 Q129 132 91 137 Q54 135 49 98Z" fill="${p.hair}" stroke="none"/>`:''}
      <path d="M63 ${sad?'75':'71'} L78 ${sad?'71':'72'} M104 72 L118 ${name==='Miki'?'65':'70'}" fill="none"/>
      <ellipse cx="71" cy="85" rx="3.5" ry="5" fill="#171c2c" stroke="none"/><ellipse cx="111" cy="85" rx="3.5" ry="5" fill="#171c2c" stroke="none"/>
      <path d="M89 87 L85 101 L93 101" fill="none" stroke="#b5775f" stroke-width="3"/>
      ${sad?'<path d="M77 116 Q89 108 103 115" fill="none"/>':name==='Miki'?'<path d="M79 115 L103 112" fill="none"/>':'<path d="M74 109 Q88 126 109 107" fill="#fff4dd" stroke-width="3"/>'}
      ${p.glasses?'<g fill="none" stroke-width="3"><rect x="55" y="76" width="29" height="22" rx="8"/><rect x="98" y="76" width="29" height="22" rx="8"/><path d="M84 83 L98 83"/></g>':''}
      </g><g class="rig-clothes">
      ${name==='Miki'?'<path d="M70 143 L88 161 L74 176 L58 148 M109 143 L91 161 L107 176 L122 148" fill="#faf2df"/><path d="M88 159 L95 159 L99 202 L90 212 L83 202Z" fill="#a94e62"/>':''}
      ${name==='Bobo'?'<path d="M67 142 Q49 164 76 181 L89 153 L106 181 Q128 162 111 142" fill="#c7ccd6"/><path d="M52 154 L50 230 M130 154 L134 230" stroke="#303448" stroke-width="9"/><path d="M76 175 L73 198 M105 174 L109 198" stroke="#f3e9da" stroke-width="3"/>':''}
      </g>
      <g class="rig-prop">
      ${name==='Jakin'?'<path d="M70 191 L105 191 L104 218 Q86 229 71 216Z" fill="#faf0dc"/><path d="M105 195 Q125 190 118 208 L106 210" fill="none"/><path d="M82 177 Q74 171 82 162" stroke="#eee3cb" stroke-width="2" fill="none"/>':''}
      </g></g></svg>`;
  }
  const casts = [['Bobo','Miki','Kevin','Pipej'],['Bobo','Miki','Jakin','Kevin','Pipej'],['Bobo','Miki','Kevin','Pipej'],['Bobo','Miki','Kevin','Pipej'],['Jakin'],['Bobo','Miki','Jakin','Kevin','Pipej']];
  const quotes = [ ['Bobo','Teh pet minut že poznam.'], ['Pipej','Še enega?'], ['Bobo','Saj imamo še štiri…'], ['Miki','Ni isto brez tebe.'], ['Jakin','…'], ['Kevin','Tvoj slot je še vedno tu.'] ];
  const scenes = [...document.querySelectorAll('.scene')];
  scenes.forEach((scene, i) => {
    const stage = document.createElement('div'); stage.className = 'comic-stage';
    stage.setAttribute('aria-label', 'Ilustrirani prijatelji');
    stage.innerHTML = `<div class="comic-room"><span class="room-line"></span><span class="room-window"></span><span class="room-lamp"></span></div><div class="cast">${casts[i].map(name=>`<figure class="toon toon-${name.toLowerCase()}">${quotes[i][0]===name?`<div class="bubble">${quotes[i][1]}</div>`:''}${portrait(name, i===2||i===3)}<figcaption>${name}</figcaption></figure>`).join('')}${i===0||i===2||i===3?'<div class="missing"><span>5</span><small>Jakinov slot</small></div>':''}</div>`;
    scene.append(stage);
    const label = document.createElement('span'); label.className = 'chapter'; label.textContent = ['ČAKAMO. SPET.','KO SMO BILI VSI','EN GLAS MANJ','ŠTIRJE NISMO PET','DRAMATIČNI PREMOR','NAZAJ MED SVOJE'][i]; scene.prepend(label);
    const panel = document.createElement('div'); panel.className = 'panel-frame';
    panel.append(...scene.childNodes); scene.append(panel);
  });
  document.querySelector('.scene-lobby .aside-line').textContent = 'Miki: »Jaz sem bil tokrat pravočasen.«';
  const variants = ['A','B','C'];
  const labels = ['Strip · veliki paneli','Film · široki kadri','Zgodba · besedilo ob likih'];
  const bar = document.createElement('nav'); bar.className = 'prototype-switcher'; bar.setAttribute('aria-label','Prototype layout');
  bar.innerHTML = '<button type="button" aria-label="Previous layout">←</button><span></span><button type="button" aria-label="Next layout">→</button>';
  document.body.append(bar);
  let current = Math.max(0, variants.indexOf(new URLSearchParams(location.search).get('variant') || 'A'));
  function setVariant(index) {
    current = (index + 3) % 3;
    document.body.dataset.variant = variants[current];
    bar.querySelector('span').textContent = `${variants[current]} / ${labels[current]}`;
    const url = new URL(location.href); url.searchParams.set('variant',variants[current]); history.replaceState(null,'',url);
  }
  bar.children[0].addEventListener('click',()=>setVariant(current-1));
  bar.children[2].addEventListener('click',()=>setVariant(current+1));
  document.addEventListener('keydown',event=>{
    if (event.target.closest('input,textarea,select,[contenteditable]')) return;
    if (event.key==='ArrowLeft'||event.key==='ArrowRight') { event.preventDefault(); setVariant(current+(event.key==='ArrowLeft'?-1:1)); }
  });
  setVariant(current);
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
      const quiet = reduced.matches || document.body.dataset.variant !== 'A';
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
  bar.addEventListener('click',()=>requestAnimationFrame(frame));
  document.addEventListener('keydown',()=>requestAnimationFrame(frame));
  reduced.addEventListener('change',frame); css.addEventListener('load',frame); frame();
})();
