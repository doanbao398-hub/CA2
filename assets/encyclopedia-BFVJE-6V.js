import{S as R,E as p,M as b,g as z,a as O,b as M,C as S,c as Q,A as X,B as j,d as V}from"./augmentsData-DJEHlkm9.js";import{S as k}from"./speciesPassivesData-CiKMRo2h.js";const H={1:"linear-gradient(90deg, #00bbf9, #023e8a)",2:"linear-gradient(90deg, #00f5d4, #0077b6)",3:"linear-gradient(90deg, #06d6a0, #0b525b)",4:"linear-gradient(90deg, #ff4d6d, #9d0208)",5:"linear-gradient(90deg, #ff6b35, #6a040f)",6:"linear-gradient(90deg, #f72585, #3a0ca3)",7:"linear-gradient(90deg, #9d4edd, #10002b)",8:"linear-gradient(90deg, #ffd166, #7f4f24)",9:"linear-gradient(90deg, #00bbf9, #ff006e)",10:"linear-gradient(90deg, #7209b7, #00f5d4)",11:"linear-gradient(90deg, #ff5400, #fee440)",12:"linear-gradient(90deg, #e0aaff, #00f5d4, #fee440, #0f172a)",13:"linear-gradient(90deg, #ff006e, #ffbe0b, #06d6a0, #00bbf9, #8338ec)"},F={1:"Linh hoạt tối đa, tỷ lệ chí mạng cắn đuôi rất cao.",2:"Mở khóa Lõi Siêu Cấp #1 và Nội Tại Tiến Hóa Dạng 2.",3:"Đủ điều kiện đánh thức Thủy Quái Leviathan & mọc gai lưng phát sáng.",4:"Mở khóa Lõi Siêu Cấp #2, Nội Tại Dạng 4 & vòng ma pháp kép.",5:"Xuất hiện sừng uy nghiêm, râu phát quang và đủ điều kiện nhận Lõi Boss.",6:"Mở khóa Lõi Siêu Cấp #3, Nội Tại Dạng 6 & tia điện cao áp.",7:"Đeo vương miện cổ đại, mắt rực lửa & dải lụa năng lượng sau đuôi.",8:"Mở khóa Lõi Siêu Cấp #4 & Nội Tại Tiến Hóa Dạng 8 tối thượng.",9:"Thức tỉnh Cánh Năng Lượng đôi & vòng ấn cổ đại 6 đỉnh.",10:"Khoác Giáp Tinh Vân lấp lánh sao dọc thân & 11 tinh cầu hộ thể.",11:"Vương Miện Đa Tầng & vòng ấn bát giác phát quang cực mạnh.",12:"Ngọc Thái Cực đỉnh vương miện 3 tầng, cánh 3 phiến & hào quang chuyển sắc.",13:"Đỉnh cao tiến hóa: Hào quang cầu vồng 12 tia, 12 tinh cầu & sức mạnh tối thượng."},N={s_giant_heart:"MaxHP × 1.25 | Hồi 40% HP | Scale × 1.15",s_void_fangs:"BitePower + 0.22 | TrueDMG = TargetMaxHP × 8%",s_thorn_armor:"DamageReduction + 20% (Cap 65%) | Reflect 35%",s_bloodlust:"LifeSteal + 8 | OnKill/Backstab Heal = +15% MaxHP",s_jet_engine:"SpeedBonus + 28% | Free Boost Stamina <= 2.0s",s_thunder_lord:"Pulse = 2.8s | Range = 380px | MaxTargets = 25 | Stun = 0.6s",s_abyss_frost:"Pulse = 2.8s | Active = 0.6s | Range = R + 200px | MaxTargets = 25",s_magma_trail:"Trail Pool = 2.5s | Tick = 0.45s | MaxPools = 24",s_astral_tide:"Magnet + 260px | Pulse = 2.8s (0.6s hút) | Pearl XP × 2",s_sonic_resonance:"Cooldown × 0.75 (Min 0.30) | EchoDelay = 0.22s (R × 1.15)"},U=[{id:"fish",icon:"🗡️",rarity:"Cơ Bản",counter:"Khắc chế Thợ Lặn (+18% DMG)"},{id:"turtle",icon:"🐢",rarity:"Cơ Bản",counter:"Khắc chế Cá Sấu (+18% DMG)"},{id:"croc",icon:"🐊",rarity:"Cơ Bản",counter:"Khắc chế Cá Kiếm (+18% DMG)"},{id:"diver",icon:"🤿",rarity:"Cơ Bản",counter:"Khắc chế Rùa Thần (+18% DMG)"},{id:"space",icon:"🌌",rarity:"Sử Thi (Trùng Sinh Cá Kiếm Lv.50)",counter:"Ưu thế +8% DMG toàn hệ (đã cân bằng; giảm sát thương dồn trong Lãnh Địa)",defaultCooldowns:{e:16,q:7.5,r:17},kitSummary:"[E] Bành Trướng / Bước Nhảy • [Q] Lát Cắt Không Gian / Chém Tuyệt Đối • [R] Bán Lãnh Địa / Bóp Méo"},{id:"time",icon:"⏳",rarity:"Sử Thi (Trùng Sinh Cá Kiếm Lv.75)",counter:"Ưu thế +8% DMG toàn hệ (đã cân bằng; giảm trần sát thương Trường Thời Gian)",defaultCooldowns:{e:15,q:12.5,r:22},kitSummary:"[E] Dòng Chảy / Bản Thể Thực • [Q] Lồng Giam Ngưng Đọng • [R] Trường Thời Gian / Tua Ngược 3s"}],q=[{name:"Leviathan Chúa Tể",badge:"RAID BOSS CỔ ĐIỂN",hp:"1.200 HP (Dynamic Scaling theo số người trong phòng)",spawn:"Thức tỉnh khi có người chơi đạt Tiến Hóa Dạng 3+ (hoặc Admin triệu hồi).",mechanics:"Tăng tốc húc liên hoàn, điểm yếu là vùng Đuôi (cắn đuôi gây chí mạng & rơi thịt 120 XP).",rewards:"+2.500 XP & +150 💎 (Yêu cầu đóng góp ≥ 15% tổng sát thương)."},{name:"Boss Sử Thi Không Gian [Lv.50]",badge:"RAID BOSS SỬ THI",hp:"3.600 HP (Dynamic Scaling: ×(1 + 0.65×(N-1)))",spawn:"Xuất hiện mỗi 15 phút tại bản đồ thế giới.",mechanics:"Triển khai Lãnh Địa Không Gian R=460, Dịch chuyển áp sát, phóng Lát Cắt & Quả Cầu Bán Lãnh Địa gây BLACK_HOLE_PULL + STUN (Cảnh báo đỏ 1.3s).",rewards:"+8.000 XP, +200 💎, Rơi 2 vật phẩm & 1.5% rớt Lõi Skill Boss Không Gian hoặc Thức Tỉnh V2 (Anti-Leech: ≥12% DMG & Dạng ≥5)."},{name:"Boss Sử Thi Thời Gian [Lv.75]",badge:"RAID BOSS HIẾM (2%/GIỜ)",hp:"5.000 HP (Dynamic Scaling: ×(1 + 0.65×(N-1)))",spawn:"Tỷ lệ xuất hiện hiếm 2% mỗi giờ (hoặc Admin triệu hồi).",mechanics:"Triệu hồi Bản Thể Quá Khứ & Tương Lai, phóng Cầu Ngưng Đọng (TIME_STOP 2.4s), mở Trường Thời Gian R=480 & tự Tua Ngược hồi máu khi HP < 28% (Cảnh báo đỏ 1.3s).",rewards:"+14.000 XP, +350 💎, Rơi 2 vật phẩm & 1.5% rớt Lõi Skill Boss Thời Gian hoặc Thức Tỉnh V2 (Anti-Leech: ≥12% DMG & Dạng ≥5)."}];function t(a){return String(a??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var G;const g=((G=R)==null?void 0:G.nyx0)||{},E=Number(g.skillCooldown??10.5),w=Number(g.skill2Cooldown??13),D=Number(g.skill3Cooldown??22),Y=Number(g.antimatterFieldRadius??240),J=Number(g.eclipseDuration??5.5),W=Number(g.eclipseRadius??340),r={name:g.name||"NYX-0: Hư Không Thủy Tổ",tier:"NHÂN VẬT CẤP OMEGA (ĐÃ CÂN BẰNG)",icon:"🕳️",stats:[`HP Gốc: ${g.maxHp??200} • Thể Lực: ${g.maxStamina??155}`,`Tốc Độ: ${g.baseSpeed??4.35} • Tầm Cắn: ${g.eatRangeMult??1.18}x`,`Hệ Số Điểm: x${g.scoreMult??1.25} • Hồi chiêu [E]/[Q]/[R]: ${E}s / ${w}s / ${D}s`,"Tài Nguyên: Entropy (0–100%) & Dấu Ấn Sụp Đổ (3 Tầng)",`Tiến Hóa: 4 → 12 Xúc Tu Quán Tính (${p.length} Cấp • Max Lv.${b})`,"Mở Khóa: 500 💎 / Mở Không Gian + Thời Gian / Dùng Thử Admin","Túi Vật Phẩm: Sử dụng đầy đủ 3 ô vật phẩm & Bánh Xe Chiến Thuật [B]"],skills:[{key:"NỘI TẠI 1",name:`Trường Phản Vật Chất (${Y}px → 560px) & Dấu Ấn Sụp Đổ`,desc:`Bán kính mở rộng theo cấp & kích cỡ (đã giới hạn trần sau cân bằng). Giảm 35% hiệu lực kỹ năng/khống chế hệ Không Gian & Thời Gian lên bản thân; chuyển hóa 35% lượng hồi máu của địch trong vùng thành sát thương ngược; gây nhiễu loạn +1 Dấu Ấn khi địch Không/Thời Gian lướt qua.
Tích đủ 3 tầng Dấu Ấn Sụp Đổ lên mục tiêu sẽ Kích Nổ gây sát thương chuẩn theo % MaxHP (có trần sát thương lên Boss), hồi 5% HP, +12% Entropy & Khóa 1 ô kỹ năng (1.2s).`},{key:"NỘI TẠI 2",name:"Thích Nghi Hư Không (3 Hình Thái)",desc:`• Giáp Phản Vật Chất (chịu sát thương dồn): Khép chặt giáp xương, dựng khiên lục giác lam giảm 22% sát thương & tăng nhẹ lá chắn ảo E2.
• Săn Mồi Tầm Xa (địch ở tầm xa): Kéo dài xúc tu 1.15x, xếp mảnh thiên thạch về trước, +12% tốc độ, +18% tầm chiêu & nhịp 3 đánh thường phóng thêm Mũi Lao Hư Vô.
• Thống Trị Đám Đông (≥2 địch áp sát): Mắt phụ phát xung đỏ thẫm, đánh thường quất tối đa 3 mục tiêu cùng lúc & nhịp 3 gắn 2 tầng Dấu Ấn.`},{key:"ĐÁNH THƯỜNG",name:"Sovereign Lash (3 Nhịp Xúc Tu Thật)",desc:"Xúc tu gần mục tiêu nhất quất roi kéo nhẹ địch (14px) kèm Motion Trail và gắn 1 tầng Dấu Ấn Sụp Đổ. Nhịp 3 đâm thẳng Xuyên Lõi (sát thương chuẩn tỷ lệ theo cấp khi địch có ≥2 Dấu Ấn), khựng hình 0.04s và hồi Thể Lực + 3% MaxHP. Đòn ngay sau E2 được cường hóa thành Xuyên Lõi."},{key:"[E1 → E2]",name:`Xé Không → Phân Cắt Thực Tại (Cooldown: ${E}s)`,desc:"E1 khép hai lưỡi hái chữ X kéo nhẹ mục tiêu, gắn 2 tầng Dấu Ấn Sụp Đổ & Dấu Ấn E2 (2.5s). Tái kích hoạt E2 ở tầm xa để hóa bóng ma khung xương lướt xuyên lưng (sát thương theo % máu đã mất, có trần sát thương) và để lại Dư Ảnh Xúc Tu chém bồi sau 0.4s; ở tầm gần xoáy xúc tu 360° thu hoạch toàn bộ Dấu Ấn Sụp Đổ thành Lá Chắn Ảo & Entropy."},{key:"[Q1 → Q2]",name:`Mắt Quỷ Hư Vô → Nuốt Ngược / Đảo Trọng Lực (Cooldown: ${w}s)`,desc:"Q1 mở Mắt Quỷ Hư Vô (4.0s) có tia sét tím làm chậm địch, hút ngọc trai để mở rộng tối đa +40% bán kính & gây sát thương theo thời gian. Tái kích hoạt Q2 khi đứng gần hoặc ngắm vào tâm để Nuốt Mắt Quỷ (hồi HP, +18% Tốc/DMG trong 3.0s & giảm 40% hồi chiêu E); hoặc ngắm ra ngoài để kích nổ Đảo Lộn Trọng Lực hất văng, làm choáng 1.0s & lướt thoát thân."},{key:"[R]",name:`Nhật Thực (100% Entropy) / Giữ [R] Xiềng Xích Địa Ngục (Cooldown: ${D}s)`,desc:`• Bấm nhanh [R] khi đủ 100% Entropy: Kích hoạt Nhật Thực Hư Không ${J}s (${W}px → 760px), giải & miễn nhiễm CC ngắn, giảm 28% hồi chiêu E/Q, +12% xuyên giáp & tự gắn Dấu Ấn lên địch trong vùng.
• Chạm nhanh (<220ms) trên Mobile khi <100% Entropy: Tự động kênh Xiềng Xích 2.4s tích Entropy (kéo về tâm để hủy).
• Nhấn giữ [R]: Bóp nghẹt âm thanh môi trường, mỗi xúc tu ghim tối đa 4→10 mục tiêu, kéo lôi, giảm 20% giáp & hút sinh lực. Kéo mục tiêu ≤18% HP (≤24% HP khi đủ 3 Dấu Ấn / ≤21% HP ở Dạng 7+) vào sát lõi sẽ Hành Quyết Nuốt Chửng (lóe nghịch đảo màu 0.05s, hồi 18% MaxHP + 45 Thể Lực & giảm 50% hồi chiêu hiện tại của E/Q — không reset 100%).`}],synergies:["🔥 Cộng Hưởng E1 × Q1: Chém E1 xuyên qua Mắt Quỷ Q1 khiến Mắt Quỷ nở to và bắn ra 5 mảnh Gai Hư Vô hình nón về phía trước.","⛓️ Cộng Hưởng R × Q1: Giữ [R] gần Mắt Quỷ Q1 khiến tối đa 4 xúc tu phụ mọc ra trực tiếp từ Mắt Quỷ để trói & rút sinh lực thêm kẻ địch.",`👑 Thức Tỉnh Cấp 7–${p.length} (Apex Form): Kích hoạt Cảnh Báo Nhật Thực sắc tím thẫm toàn bản đồ; từ Cấp 8+ xúc tu tự hút ngọc ngoài giao tranh và mở khóa Cánh Hư Không + Vương Miện Đa Tầng.`]},v=p.length,B=document.getElementById("tab-btn-evolution");B&&(B.textContent=`🧬 ${v} Chuẩn Tiến Hóa`);const P=document.getElementById("ency-subtitle");P&&(P.textContent=`Tra cứu ${v} Chuẩn Tiến Hóa (Max Lv.${b}) • Công Thức Lõi Siêu Cấp • Nhân Vật OMEGA NYX-0 • Raid Boss`);let $="evolution",u="";function m(a){return u?String(a||"").toLowerCase().includes(u):!0}function Z(a){return a.gradient?a.gradient:H[a.stage]?H[a.stage]:a.primary&&a.secondary?`linear-gradient(90deg, ${a.primary}, ${a.secondary})`:"linear-gradient(90deg, #00f5d4, #0077b6)"}function nn(){const l=p.map(e=>{const c=z(e.stage,"fish")||{},s=Number(e.scaleBonus??e.radiusMult??1),i=Number(c.turnRateMult??e.turnRateMult??1),h=Number(c.massHpMult??e.massHpMult??1),n=Number(c.massDmgMult??e.massDmgMult??1),o=typeof c.backstabCritMult=="number"?Math.round((c.backstabCritMult-1)*100):Math.round((e.backstabCritBonus||0)*100),f=!!(e.isRainbow||e.rainbow||e.stage>=p.length),T=e.desc||e.note||F[e.stage]||"";return{...e,scaleBonus:s,turnRateMult:i,massHpMult:h,massDmgMult:n,backstabPct:o,isRainbow:f,gradient:Z(e),note:T}}).filter(e=>m(`${e.title} ${e.shortTitle||""} Dạng ${e.stage} Lv.${e.minLevel} ${e.note}`));return l.length?`
          <div class="section-heading">🧬 ${v} Chuẩn Tiến Hóa (Level 1 → Level ${b})</div>
          <div class="cards-grid">
            ${l.map(e=>`
              <div class="ency-card ${e.isRainbow?"rainbow-card":""}">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <span class="pill-tag">DẠNG ${e.stage}/${v}</span>
                  <span style="font-size:12px;font-weight:900;color:#00f5d4;">Mở ở Lv.${e.minLevel}+</span>
                </div>
                <div style="font-size:16px;font-weight:900;color:#ffffff;">${t(e.title)}</div>
                <div class="swatch-bar" style="background:${e.gradient};"></div>
                <div class="stat-grid">
                  <div>📏 Kích cỡ: <b>${e.scaleBonus.toFixed(2)}x</b></div>
                  <div>🔄 Xoay hướng: <b>${e.turnRateMult.toFixed(2)}x</b></div>
                  <div>❤️ Hệ số HP: <b>${e.massHpMult.toFixed(2)}x</b></div>
                  <div>⚔️ Hệ số DMG: <b>${e.massDmgMult.toFixed(2)}x</b></div>
                </div>
                <div style="font-size:12px;color:#fee440;font-weight:700;">
                  🦷 Thưởng Chí Mạng Cắn Đuôi: +${e.backstabPct}%
                </div>
                <div style="font-size:12px;color:#caf0f8;line-height:1.45;">${t(e.note)}</div>
              </div>
            `).join("")}
          </div>
        `:`<div class="empty-state">Không tìm thấy Chuẩn Tiến Hóa phù hợp với "${t(u)}".</div>`}function tn(){const l=Object.entries(O||{}).map(([i,h])=>({system:i,title:h.name||h.title||(i==="empowerment"?"⚔️ Cộng Hưởng Hệ Cường Hóa (2 / 3 / 4 Lõi)":"🔮 Cộng Hưởng Hệ Nguyên Tố (2 / 3 / 4 Lõi)"),tiers:(h.tiers||[]).map(n=>`Mốc (${n.count}) — ${n.title}: ${n.desc}`)})).filter(i=>m(`${i.title} ${i.tiers.join(" ")}`)),e=M.filter(i=>m(`${i.name} ${i.systemName} ${i.formula||N[i.id]||""} ${i.desc}`)),c=(S||[]).filter(i=>m(`${i.name} ${i.desc} Lõi Thường`));let s="";return l.length&&(s+=`
            <div class="section-heading">🔗 Công Thức Cộng Hưởng Hệ (Tối Đa ${Q} Lõi Siêu Cấp)</div>
            <div class="cards-grid-2" style="margin-bottom:18px;">
              ${l.map(i=>`
                <div class="ency-card ${i.system==="empowerment"?"emp-card":"ele-card"}">
                  <div style="font-size:15px;font-weight:900;color:#fee440;">${t(i.title)}</div>
                  ${i.tiers.map(h=>`<div style="font-size:12.5px;color:#e0fbfc;line-height:1.45;">• ${t(h)}</div>`).join("")}
                </div>
              `).join("")}
            </div>
          `),e.length&&(s+=`
            <div class="section-heading">🌟 ${M.length} Lõi Siêu Cấp &amp; Công Thức Kỹ Thuật</div>
            <div class="cards-grid" style="margin-bottom:18px;">
              ${e.map(i=>{const h=i.formula||N[i.id]||"";return`
                    <div class="ency-card ${i.system==="empowerment"?"emp-card":"ele-card"}">
                      <div style="display:flex;justify-content:space-between;align-items:center;">
                        <span style="font-size:28px;">${t(i.icon)}</span>
                        <span class="pill-tag">${t(i.systemName)}</span>
                      </div>
                      <div style="font-size:15.5px;font-weight:900;color:#fee440;">${t(i.name)}</div>
                      ${h?`<div style="font-size:11.5px;font-weight:800;color:#00f5d4;background:rgba(0,0,0,0.45);padding:6px 8px;border-radius:8px;font-family:monospace;">${t(h)}</div>`:""}
                      <div style="font-size:12.5px;color:#caf0f8;line-height:1.45;">${t(i.desc)}</div>
                    </div>
                  `}).join("")}
            </div>
          `),c.length&&(s+=`
            <div class="section-heading">✨ ${S.length} Lõi Cường Hóa Thường (Tích Lũy Không Giới Hạn)</div>
            <div class="cards-grid">
              ${c.map(i=>`
                <div class="ency-card">
                  <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-size:24px;">${t(i.icon)}</span>
                    <span class="pill-tag">Lõi Thường</span>
                  </div>
                  <div style="font-size:14.5px;font-weight:900;color:#00f5d4;">${t(i.name)}</div>
                  <div style="font-size:12.5px;color:#caf0f8;line-height:1.45;">${t(i.desc)}</div>
                </div>
              `).join("")}
            </div>
          `),s||`<div class="empty-state">Không tìm thấy Lõi phù hợp với "${t(u)}".</div>`}function en(){var h;const a=((h=k)==null?void 0:h.nyx0)||[],l=a.map(n=>`[Dạng ${n.stage}] ${n.name}: ${n.desc}`).join(" "),e=m(`${r.name} ${r.tier} ${r.stats.join(" ")} ${r.skills.map(n=>`${n.name} ${n.desc}`).join(" ")} ${r.synergies.join(" ")} ${l}`),c=U.map(n=>{var C,L;const o=((C=R)==null?void 0:C[n.id])||{},f=((L=k)==null?void 0:L[n.id])||[],T=f.map(d=>`${d.icon} Dạng ${d.stage}: ${d.name} — ${d.desc}`).join("<br/>");let y="";if(n.defaultCooldowns){const d=o.skillCooldown??n.defaultCooldowns.e,I=o.skill2Cooldown??n.defaultCooldowns.q,A=o.skill3Cooldown??n.defaultCooldowns.r;y=`${n.kitSummary} • CD [E]/[Q]/[R]: ${d}s / ${I}s / ${A}s`}else y=o.skillName?`Skill [E]: ${o.skillName}${o.skillCooldown?` (CD: ${o.skillCooldown}s)`:""}`:o.desc||"";const _=typeof o.bitePowerMult=="number"?` • Sát thương gốc: ${Math.round(o.bitePowerMult*100)}%`:typeof o.damageMult=="number"?` • Sát thương gốc: ${Math.round(o.damageMult*100)}%`:"",K=`HP: ${o.maxHp??"-"} • Tốc độ: ${o.baseSpeed??"-"} • Hệ số điểm: x${o.scoreMult??1}${_}`;return{...n,name:o.name||n.id,desc:o.desc||"",skill:y,statsLine:K,passivesHtml:T||"Chưa có dữ liệu nội tại.",searchBlob:`${o.name||n.id} ${n.rarity} ${n.counter} ${y} ${o.desc||""} ${f.map(d=>`${d.name} ${d.desc}`).join(" ")}`}}),s=c.filter(n=>m(n.searchBlob));let i="";return e&&(i+=`
            <div class="omega-hero" style="margin-bottom:18px;">
              <div class="omega-hero-top">
                <div class="omega-avatar">${r.icon}</div>
                <div style="flex:1;">
                  <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:4px;">
                    <span style="font-size:22px;font-weight:900;color:#ffffff;">${t(r.name)}</span>
                    <span class="pill-tag omega">${r.tier}</span>
                  </div>
                  <div class="stat-grid" style="margin-top:8px;">
                    ${r.stats.map(n=>`<div>• <b>${t(n)}</b></div>`).join("")}
                  </div>
                </div>
              </div>

              <div class="cards-grid-2">
                ${r.skills.map(n=>`
                  <div class="ency-card" style="border-color:rgba(255,0,110,0.5);background:rgba(12,6,18,0.86);">
                    <div style="display:flex;align-items:center;gap:8px;">
                      <span class="pill-tag omega">${t(n.key)}</span>
                      <b style="color:#fee440;font-size:14px;">${t(n.name)}</b>
                    </div>
                    <div style="font-size:12.5px;color:#e0fbfc;line-height:1.48;white-space:pre-line;">${t(n.desc)}</div>
                  </div>
                `).join("")}
              </div>

              ${a.length?`
                <div class="omega-synergy-box">
                  <div style="font-weight:900;color:#00f5d4;margin-bottom:4px;">
                    🧬 NỘI TẠI TIẾN HÓA NYX-0 (TỪ DỮ LIỆU GAME)
                  </div>
                  ${a.map(n=>`<div>${t(n.icon)} <b>[Dạng ${n.stage}] ${t(n.name)}:</b> ${t(n.desc)}</div>`).join("")}
                </div>
              `:""}

              <div class="omega-synergy-box">
                <div style="font-weight:900;color:#fee440;margin-bottom:4px;">
                  ⚡ CHUỖI CỘNG HƯỞNG &amp; ĐỘT PHÁ CẤP 7–${v} (APEX FORM)
                </div>
                ${r.synergies.map(n=>`<div>${t(n)}</div>`).join("")}
              </div>
            </div>
          `),s.length&&(i+=`
            <div class="section-heading">🐟 ${c.length} Loài Thủy Quái Cơ Bản &amp; Sử Thi</div>
            <div class="cards-grid-2">
              ${s.map(n=>`
                <div class="ency-card">
                  <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
                    <span style="font-size:16px;font-weight:900;color:#ffffff;">${n.icon} ${t(n.name)}</span>
                    <span class="pill-tag">${t(n.rarity)}</span>
                  </div>
                  <div style="font-size:11.5px;color:#90e0ef;font-weight:700;">📊 ${t(n.statsLine)}</div>
                  <div style="font-size:12px;color:#00f5d4;font-weight:800;">⚔️ ${t(n.counter)}</div>
                  <div style="font-size:12.5px;color:#fee440;font-weight:700;">${t(n.skill)}</div>
                  ${n.desc?`<div style="font-size:12px;color:#e0fbfc;">${t(n.desc)}</div>`:""}
                  <div style="font-size:11.5px;color:#caf0f8;line-height:1.48;margin-top:2px;">${n.passivesHtml}</div>
                </div>
              `).join("")}
            </div>
          `),i||`<div class="empty-state">Không tìm thấy sinh vật phù hợp với "${t(u)}".</div>`}function sn(){const a=q.filter(s=>m(`${s.name} ${s.badge} ${s.mechanics} ${s.rewards}`)),l=X.map(s=>{const i=j[s];return i?{id:s,keyLabel:V(i.defaultKey),bossLabel:i.bossType==="space"?"Không Gian":"Thời Gian",icon:i.icon,name:i.name,desc:i.desc,v2Name:i.v2Name,v2Desc:i.v2Desc,cooldown:i.cooldown}:null}).filter(Boolean),e=l.filter(s=>m(`${s.keyLabel} ${s.bossLabel} ${s.name} ${s.desc} ${s.v2Name} ${s.v2Desc}`));let c="";return a.length&&(c+=`
            <div class="section-heading">🐉 Danh Sách Raid Boss Đại Dương</div>
            <div class="cards-grid-2" style="margin-bottom:18px;">
              ${a.map(s=>`
                <div class="ency-card boss-card">
                  <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;">
                    <span style="font-size:17px;font-weight:900;color:#ffffff;">${t(s.name)}</span>
                    <span class="pill-tag">${t(s.badge)}</span>
                  </div>
                  <div style="font-size:12.5px;color:#ff758f;font-weight:800;">❤️ Máu tối đa: ${t(s.hp)}</div>
                  <div style="font-size:12px;color:#fee440;"><b>⏰ Điều kiện xuất hiện:</b> ${t(s.spawn)}</div>
                  <div style="font-size:12px;color:#e0fbfc;line-height:1.45;"><b>⚔️ Cơ chế:</b> ${t(s.mechanics)}</div>
                  <div style="font-size:12px;color:#06d6a0;line-height:1.45;"><b>🎁 Phần thưởng:</b> ${t(s.rewards)}</div>
                </div>
              `).join("")}
            </div>
          `),e.length&&(c+=`
            <div class="section-heading">💠 ${l.length} Lõi Skill Boss Sử Thi &amp; Cơ Chế Thức Tỉnh V2 (Tối đa 1 ô trang bị)</div>
            <div class="cards-grid">
              ${e.map(s=>`
                <div class="ency-card boss-card">
                  <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
                    <span class="pill-tag">Phím [${t(s.keyLabel)}] • CD ${s.cooldown}s</span>
                    <span style="font-size:11px;color:#90e0ef;font-weight:800;">Boss ${t(s.bossLabel)}</span>
                  </div>
                  <div style="font-size:15px;font-weight:900;color:#e0aaff;">
                    ${t(s.icon)} ${t(s.name)}
                  </div>
                  <div style="font-size:12px;color:#e0fbfc;line-height:1.45;">
                    ${t(s.desc)}
                  </div>
                  <div style="font-size:12px;color:#fee440;line-height:1.45;background:rgba(0,0,0,0.35);padding:7px 9px;border-radius:8px;">
                    <b>🔥 ${t(s.v2Name)}:</b> ${t(s.v2Desc)}
                  </div>
                </div>
              `).join("")}
            </div>
          `),c||`<div class="empty-state">Không tìm thấy thông tin Boss phù hợp với "${t(u)}".</div>`}function x(){const a=document.getElementById("ency-content");$==="evolution"?a.innerHTML=nn():$==="augments"?a.innerHTML=tn():$==="omega"?a.innerHTML=en():a.innerHTML=sn()}document.querySelectorAll("#ency-tabs .tab-btn").forEach(a=>{a.addEventListener("click",()=>{document.querySelectorAll("#ency-tabs .tab-btn").forEach(l=>l.classList.remove("active")),a.classList.add("active"),$=a.dataset.tab,x()})});document.getElementById("ency-search").addEventListener("input",a=>{u=a.target.value.trim().toLowerCase(),x()});x();
