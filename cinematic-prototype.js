// Local exploration: three cinematic layouts on the existing six-scene story.
// Open ?prototype=cinematic&variant=A on localhost. Nothing runs on the public site.
(() => {
  const params = new URLSearchParams(location.search);
  if (!['localhost', '127.0.0.1', '[::1]'].includes(location.hostname) || params.get('prototype') !== 'cinematic') return;
  const css = document.createElement('link');
  css.rel = 'stylesheet'; css.href = './cinematic-prototype.css'; document.head.append(css);
  document.body.classList.add('cinematic-prototype');
  const names = {A: 'Wide room', B: 'Story beside the room', C: 'Friends on a voice call'};
  let variant = names[params.get('variant')] ? params.get('variant') : 'C';
  // Kevin's invitation is followed by a hoped-for reunion, not a claim it happened.
  const invitation = document.querySelector('.scene-home');
  const reunion = invitation.cloneNode(true);
  reunion.classList.remove('scene-home'); reunion.classList.add('scene-reunion');
  reunion.setAttribute('aria-labelledby', 'scene-reunion-title');
  reunion.querySelector('.chapter').textContent = 'TAKO SI PREDSTAVLJAMO NASLEDNJI VEČER';
  reunion.querySelector('.scene-content').innerHTML = '<p class="eyebrow">Pet prijateljev · pet svojih sob · en party</p><h2 id="scene-reunion-title">Spet vsi. Spet skupaj.</h2><p class="caption">Bobo, Miki, Jakin, Kevin in Pipej. Vsak za svojim računalnikom, skupaj v League voice.</p><p class="aside-line">Tak večer si želimo. Še en game. Še malo smeha.</p>';
  reunion.querySelectorAll('.bubble,.end-mark').forEach(element => element.remove());
  invitation.after(reunion);
  const unknown = document.querySelector('.scene-solo');
  unknown.querySelector('.chapter').textContent = 'NA DRUGI STRANI';
  unknown.querySelector('.eyebrow').textContent = 'Jakinov večer je njegova stvar';
  unknown.querySelector('h2').textContent = 'Kaj počne Jakin? Nimamo pojma.';
  unknown.querySelector('.caption').textContent = 'Vemo samo, da je njegov slot pri nas še vedno prost.';
  unknown.querySelector('.aside-line').textContent = 'Brez teorij. Samo en glas, ki ga pogrešamo.';
  unknown.querySelector('.cast').innerHTML = '<div class="missing"><span aria-hidden="true">?</span><small>Jakinov slot</small></div>';
  const scenes = [...document.querySelectorAll('.scene')];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const speakers = ['bobo', 'pipej', 'bobo', 'miki', 'unknown', 'kevin', 'together'];
  const map = `<svg class="rift-map" viewBox="0 0 160 100" aria-hidden="true"><rect width="160" height="100" fill="#122c32"/><path d="M12 84V12H148M12 84H148V12M12 84L148 12" fill="none" stroke="#a89869" stroke-width="5"/><path d="M28 0Q64 40 80 50T134 100" fill="none" stroke="#3f9bac" stroke-width="9"/><path d="M35 21L55 38M106 67L126 83M40 66L60 78M100 22L125 34" stroke="#244838" stroke-width="15"/><g fill="#68dbed"><circle cx="12" cy="84" r="8"/><circle cx="12" cy="50" r="4"/><circle cx="45" cy="63" r="4"/><circle cx="52" cy="84" r="4"/></g><g fill="#f27e8a"><circle cx="148" cy="12" r="8"/><circle cx="148" cy="50" r="4"/><circle cx="111" cy="33" r="4"/><circle cx="106" cy="12" r="4"/></g><circle class="map-player" cx="78" cy="54" r="5" fill="#ffe9a8"/><path d="M70 54H87" stroke="#fff" stroke-width="2"/></svg>`;
  scenes.forEach((scene, index) => {
    scene.dataset.speaker = speakers[index];
    const panel = scene.querySelector('.panel-frame');
    scene.querySelector('.scene-index').innerHTML = `${String(index + 1).padStart(2, '0')} <span>/</span> ${String(scenes.length).padStart(2, '0')}`;
    const stage = scene.querySelector('.comic-stage');
    const room = stage.querySelector('.comic-room');
    room.insertAdjacentHTML('beforeend', '<div class="room-shelf" aria-hidden="true"><i></i><i></i><i></i><span></span></div><div class="room-poster" aria-hidden="true"><span>LEAGUE<br>OF LEGENDS</span><i>SUMMONER’S RIFT</i></div><div class="room-floor" aria-hidden="true"></div>');
    const seats = [...stage.querySelectorAll('.toon, .missing')];
    seats.forEach((seat, seatIndex) => {
      seat.style.setProperty('--seat', seatIndex);
      const empty = seat.classList.contains('missing');
      const name = empty ? 'Jakin' : seat.querySelector('figcaption').textContent;
      if (!empty) {
        const portrait = document.createElement('div'); portrait.className = 'actor-portrait';
        const avatar = seat.querySelector(':scope > svg');
        const bubble = seat.querySelector('.bubble');
        seat.append(portrait); portrait.append(avatar);
        if (bubble) {
          portrait.append(bubble);
          const tail = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          tail.setAttribute('class', 'speech-tail'); tail.setAttribute('aria-hidden', 'true');
          tail.innerHTML = '<path fill="#fff5dd" stroke="#171c2c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
          portrait.append(tail);
        }
        if (name === 'Jakin') {
          // The forearm, gripping hand, and cup share one elbow-driven movement.
          avatar.querySelector('.rig-arm-right').remove();
          const prop = avatar.querySelector('.rig-prop');
          prop.setAttribute('class', 'rig-cup-lift');
          prop.innerHTML = '<path d="M135 150 Q150 149 153 166 L148 182 L132 183 L123 168 Q121 157 135 150Z" fill="#263c64" class="mug-upper-arm"/><g class="mug-forearm"><path d="M143 176 Q156 181 147 190 L128 204 L116 196 L135 178Z" fill="#263c64"/><path d="M122 192 L131 200" fill="none" stroke="#43618a" stroke-width="3"/><g class="mug-grip"><path d="M86 183 L114 183 L114 210 Q100 219 87 208Z" fill="#faf0dc"/><path d="M114 187 Q134 183 130 202 L114 204" fill="none" stroke="#faf0dc"/><path d="M121 191 Q115 187 113 193 L114 202 Q120 209 126 203 L128 197Z" fill="#f2bd97"/><path d="M118 195 L123 197 M118 200 L123 201" stroke="#b5775f" stroke-width="2" fill="none"/></g></g>';
        }
      }
      seat.insertAdjacentHTML('afterbegin', '<div class="gaming-chair" aria-hidden="true"></div>');
      seat.insertAdjacentHTML('beforeend', `<div class="gaming-desk" aria-hidden="true"><div class="monitor"><div class="monitor-display">${empty ? '<span class="waiting-screen">JAKIN<br><small>čakamo te</small><i>· · ·</i></span>' : map + '<div class="game-hud"><i></i><i></i><i></i><i></i><b></b></div>'}</div><div class="monitor-foot"></div></div><div class="pc-tower"><i></i><i></i></div><div class="desk-top"></div><div class="keyboard"></div><div class="mouse"></div></div>`);
      const label = seat.querySelector('figcaption');
      if (label) label.innerHTML = `<span class="voice-light" aria-hidden="true"></span>${name}`;
    });
    const ambience = document.createElement('div');
    ambience.className = 'cinema-ambience'; ambience.setAttribute('aria-hidden', 'true');
    ambience.innerHTML = '<i></i><i></i><i></i><i></i><i></i><i></i><div class="game-burst"></div>';
    panel.append(ambience);
    const quietLabel = document.createElement('div'); quietLabel.className = 'room-status';
    quietLabel.innerHTML = `<span></span>LEAGUE VOICE <b>${index === 1 || index === 6 ? '5 / 5' : '4 / 5'}</b>`;
    panel.append(quietLabel);
  });
  const bar = document.createElement('nav'); bar.className = 'cinema-switcher'; bar.setAttribute('aria-label', 'Local prototype layouts');
  bar.innerHTML = '<button type="button" aria-label="Previous layout">←</button><span></span><button type="button" aria-label="Next layout">→</button>';
  document.body.append(bar);
  const callCut = document.createElement('div'); callCut.className = 'call-cut'; callCut.setAttribute('aria-hidden', 'true');
  callCut.innerHTML = '<span class="call-wave"><i></i><i></i><i></i><i></i><i></i></span><span class="call-label"></span>';
  document.body.append(callCut);
  const progress = document.createElement('div'); progress.className = 'cinema-progress'; progress.setAttribute('aria-hidden', 'true'); document.body.append(progress);
  function select(key) {
    variant = key; document.body.dataset.cinemaVariant = key;
    bar.querySelector('span').textContent = `PROTOTYPE · ${key} / ${names[key]}`;
    const url = new URL(location.href); url.searchParams.set('variant', key); history.replaceState(null, '', url);
    draw();
  }
  function cycle(direction) { const keys = Object.keys(names); select(keys[(keys.indexOf(variant) + direction + keys.length) % keys.length]); }
  bar.querySelectorAll('button').forEach((button, index) => button.addEventListener('click', () => cycle(index ? 1 : -1)));
  addEventListener('keydown', event => {
    if (event.target.closest('input,textarea,select,[contenteditable="true"]') || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); cycle(event.key === 'ArrowLeft' ? -1 : 1); }
  });
  const clamp = value => Math.max(0, Math.min(1, value));
  const ease = value => { value = clamp(value); return value * value * (3 - 2 * value); };
  let queued = false;
  function draw() {
    queued = false;
    const quiet = reduced.matches;
    const scroll = scrollY;
    let active = 0;
    scenes.forEach((scene, index) => { if (scroll >= scene.offsetTop) active = index; });
    const current = scenes[active];
    const travel = clamp((scroll - current.offsetTop) / current.offsetHeight);
    const canCut = active < scenes.length - 1 && !quiet;
    // Fade through a brief dark interval: two faces/captions never overlap.
    const outgoing = canCut ? 1 - ease((travel - .60) / .18) : 1;
    const incoming = canCut ? ease((travel - .90) / .10) : 0;
    const cutOpacity = canCut ? 1 - Math.max(outgoing, incoming) : 0;
    const nextSpeaker = speakers[active + 1];
    const speakerNames = {bobo:'Bobo',pipej:'Pipej',miki:'Miki',kevin:'Kevin',unknown:'Jakinov slot',together:'Vsi skupaj'};
    callCut.style.opacity = cutOpacity;
    callCut.querySelector('.call-label').style.opacity = ease((cutOpacity - .6) / .4);
    callCut.querySelector('.call-wave').style.opacity = ease((cutOpacity - .6) / .4);
    callCut.querySelector('.call-label').textContent = `${speakerNames[nextSpeaker] || ''} · ${nextSpeaker === 'together' ? 'naslednji večer' : 'League voice'}`;
    scenes.forEach((scene, index) => {
      const panel = scene.querySelector('.panel-frame');
      const opacity = index === active ? outgoing : index === active + 1 ? incoming : 0;
      const visible = quiet || opacity > .001;
      scene.classList.toggle('cinema-active', visible);
      panel.style.setProperty('--cinema-opacity', quiet ? 1 : opacity);
      panel.style.setProperty('--camera-scale', quiet ? 1 : 1 + (index === active ? travel : 0) * .055);
      panel.style.setProperty('--cinema-travel', quiet ? 0 : travel);
      panel.style.setProperty('--panel-enter', '0px');
      panel.style.setProperty('--drift', '0px');
      if (!quiet) panel.inert = !visible || opacity < .5;
      else panel.inert = false;
      scene.querySelectorAll('.toon').forEach((actor, actorIndex) => {
        const energy = index === 1 || index === 6;
        const phase = quiet ? 0 : Math.sin(travel * Math.PI);
        actor.style.setProperty('--actor-opacity', 1); actor.style.setProperty('--actor-y', '0px');
        actor.style.setProperty('--head-turn', `${phase * (actorIndex % 2 ? -1 : 1) * (energy ? 10 : 5)}deg`);
        actor.style.setProperty('--arm-turn', `${phase * (actorIndex % 2 ? -1 : 1) * (energy ? 22 : 9)}deg`);
        actor.style.setProperty('--bubble-opacity', 1);
        actor.style.setProperty('--mug-lift-angle', `${quiet ? 0 : phase * 65}deg`);
        const portrait = actor.querySelector('.actor-portrait');
        const bubble = portrait.querySelector('.bubble');
        if (bubble && visible) {
          const tail = portrait.querySelector('.speech-tail');
          const bounds = portrait.getBoundingClientRect(), speech = bubble.getBoundingClientRect();
          if (bounds.width && bounds.height) {
            const leftShot = variant === 'C' && ['pipej', 'miki'].includes(scene.dataset.speaker);
            const mobile = innerWidth <= 700;
            const leftTail = mobile || leftShot;
            const x = leftTail ? speech.right - 12 : speech.left + 12;
            const startX = (x - bounds.left) / bounds.width * 180;
            const startY = (speech.bottom - bounds.top - 4) / bounds.height * 250;
            const tipX = leftTail ? 42 : 138;
            const tipY = 112;
            tail.setAttribute('viewBox', '0 0 180 250');
            // Open base overlaps the bubble border, avoiding a seam across the tail.
            tail.querySelector('path').setAttribute('d', `M${startX - 4} ${startY} Q${startX - 2} ${startY + 12} ${tipX} ${tipY} Q${startX + 6} ${startY + 10} ${startX + 4} ${startY}`);
          }
        }
      });
    });
    progress.style.setProperty('--story-progress', clamp(scroll / Math.max(1, document.documentElement.scrollHeight - innerHeight)));
  }
  addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(draw); } }, {passive: true});
  addEventListener('resize', draw); reduced.addEventListener('change', draw);
  css.addEventListener('load', draw); select(variant);
})();
