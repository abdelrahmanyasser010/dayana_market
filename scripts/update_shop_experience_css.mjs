import fs from 'fs';

let content = fs.readFileSync('src/app/globals.css', 'utf8');

const additionalCss = `
/* --- SHOP EXPERIENCE & SIDEBAR SYNC ENHANCEMENTS --- */
.antiquePillMedallion {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 35% 35%, #fff5db 0%, #dfb867 55%, #8f641b 100%);
  color: #1a0f07;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.7);
  flex-shrink: 0;
  transition: transform 0.25s ease, background 0.2s ease;
}

.experiencePill:hover .antiquePillMedallion {
  transform: scale(1.1) rotate(-6deg);
}

.activePill .antiquePillMedallion {
  background: #180e08;
  color: #f0cb7d;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(212, 163, 75, 0.4);
}

.pillTitleText {
  letter-spacing: 0.2px;
}

.pillBadge.egyptBadge {
  background: rgba(180, 130, 20, 0.35);
  color: #ffd880;
  border: 1px solid rgba(212, 163, 75, 0.4);
}

.activePill .pillBadge.egyptBadge {
  background: rgba(20, 12, 6, 0.3);
  color: #120e0a;
  border-color: rgba(20, 12, 6, 0.2);
}

.eraSelectedBadge {
  background: rgba(20, 12, 6, 0.35) !important;
  color: #120e0a !important;
  font-weight: 700;
  padding: 1px 8px;
}

.eraChipIcon {
  font-size: 15px;
  line-height: 1;
}

.eraChipCount {
  font-size: 10.5px;
  color: var(--antique-gold);
  opacity: 0.85;
}

.eraRadioIcon {
  font-size: 13.5px;
  display: inline-block;
  margin-inline-end: 6px;
}

.sidebarActiveModeNotice {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 14px;
}

.sidebarActiveModeNotice.heritageNotice {
  background: rgba(184, 134, 11, 0.16);
  border: 1px solid rgba(212, 163, 75, 0.55);
  color: #f0cb7d;
  box-shadow: 0 2px 8px rgba(184, 134, 11, 0.15);
}

.sidebarActiveModeNotice.timelineNotice {
  background: rgba(140, 95, 45, 0.18);
  border: 1px solid rgba(212, 163, 75, 0.55);
  color: #f0cb7d;
  box-shadow: 0 2px 8px rgba(140, 95, 45, 0.15);
}

.activeHeritageSidebarBox {
  border-color: var(--antique-gold) !important;
  background: rgba(184, 134, 11, 0.08) !important;
  box-shadow: 0 0 14px rgba(184, 134, 11, 0.18);
  border-radius: 10px;
  padding: 10px;
  transition: all 0.2s ease;
}

.activeEraSidebarBox {
  border-inline-start: 2px solid var(--antique-gold);
  padding-inline-start: 8px;
  transition: all 0.2s ease;
}
`;

if (!content.includes('/* --- SHOP EXPERIENCE & SIDEBAR SYNC ENHANCEMENTS --- */')) {
  content += additionalCss;
  fs.writeFileSync('src/app/globals.css', content, 'utf8');
  console.log('Appended shop experience CSS!');
} else {
  console.log('Shop experience CSS already exists!');
}
