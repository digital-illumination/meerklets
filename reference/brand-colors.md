# CTM Brand Colors — Complete Reference

Source: Compare the Market website CSS custom properties.

---

## The Three Primary Brand Colors

### CTM Blue — `#2843d0`
- **Token**: `--color-cobalt-30`
- **RGB**: 40, 67, 208
- **Usage in Meerklets**: The single most important color. This is the **core chassis color for all Meerklets** — every agent on every floor shares this blue base, identifying them as part of the CTM fleet. Also used for primary data streams, conveyor belt accent lighting, and the main neon glow throughout the factory.
- **Brand context**: The dominant brand color across comparethemarket.com — buttons, links, headers, primary CTAs.

### CTM Yellow — `#e6b30d`
- **Token**: `--color-yellow-30`
- **RGB**: 230, 179, 13
- **Usage in Meerklets**: **Floor 2 (Production) vest color** — represents the "Value" being created. Builders and Testers wear yellow vests. Also used for warning indicators, active status lights, and the chimney's golden beam at full health (`#ffd035` yellow-50 for the brightest glow).
- **Brand context**: Secondary accent across the CTM site — highlights, badges, attention-drawing elements.

### CTM Red — `#b8123b`
- **Token**: `--color-red-30`
- **RGB**: 184, 18, 59
- **Usage in Meerklets**: **Error states, barriers, and alerts**. The red laser grid in the Approval Chokepoints barrier. Error LED flashes on Meerklets. The chimney's soot/error particles use red-60 (`#dc5f7e`) for glow. Also used for the glowing red tape in the Governance barrier.
- **Brand context**: Tertiary accent — alerts, critical information, urgency.

---

## Derived Colors (Not in CTM Palette)

These two vest colors don't exist in the CTM brand palette and are derived to complement it.

### Floor 1 Vest — Bright Orange `#e8722a`
- **RGB**: 232, 114, 42
- **Rationale**: Sits between CTM Yellow (`#e6b30d`) and CTM Red (`#b8123b`) on the color wheel but is distinct from both. Warm, high-visibility, industrial — evokes "power", "infrastructure", and "operations". Reads clearly as a different color from yellow at any distance. Traditional safety/high-vis association with infrastructure and engineering.
- **Neon variant** (for glow effects): `#ff8c42`

### Floor 3 Vest — CTM Magenta `#d946a8`
- **RGB**: 217, 70, 168
- **Rationale**: Derived from AutoSergei's signature pink-to-purple LED chest stripe. Sits between the pink of that stripe and the purple-90 (`#6326b3`) in the brand palette. Vibrant and cerebral — evokes "brain", "connectivity", "orchestration". Distinct from both purple shades in the palette. Pairs well with the holographic display purple (`#b984ff`).
- **Neon variant** (for glow effects): `#f06cc8`

---

## Full Palette

### Cobalt
| Token | Hex | Swatch |
|-------|-----|--------|
| `--color-cobalt-99` | `#f7f8fe` | Lightest |
| `--color-cobalt-95` | `#e6e9fc` | |
| `--color-cobalt-90` | `#d5dbfa` | |
| `--color-cobalt-80` | `#b3bef6` | |
| `--color-cobalt-70` | `#91a1f3` | |
| `--color-cobalt-60` | `#6f85ef` | |
| `--color-cobalt-50` | `#4e68eb` | |
| `--color-cobalt-40` | `#2c4be7` | |
| `--color-cobalt-30` | `#2843d0` | **Primary Blue** |
| `--color-cobalt-20` | `#233cb9` | |
| `--color-cobalt-10` | `#1f35a2` | Darkest |

### Purple
| Token | Hex | Swatch |
|-------|-----|--------|
| `--color-purple-90` | `#6326b3` | Darker purple |
| `--color-purple-60` | `#b984ff` | Lighter purple |

### Red
| Token | Hex | Swatch |
|-------|-----|--------|
| `--color-red-99` | `#fdf6f7` | Lightest |
| `--color-red-95` | `#f9e3e8` | |
| `--color-red-90` | `#f5d0d9` | |
| `--color-red-80` | `#edaabb` | |
| `--color-red-70` | `#e4859d` | |
| `--color-red-60` | `#dc5f7e` | |
| `--color-red-50` | `#d43a60` | |
| `--color-red-40` | `#cc1442` | |
| `--color-red-30` | `#b8123b` | **Primary Red** |
| `--color-red-20` | `#a31035` | |
| `--color-red-10` | `#8f0e2e` | Darkest |

### Yellow
| Token | Hex | Swatch |
|-------|-----|--------|
| `--color-yellow-99` | `#fffdf5` | Lightest |
| `--color-yellow-95` | `#fff8e2` | |
| `--color-yellow-90` | `#fff4cf` | |
| `--color-yellow-80` | `#ffeba8` | |
| `--color-yellow-70` | `#ffe282` | |
| `--color-yellow-60` | `#ffd95b` | |
| `--color-yellow-50` | `#ffd035` | |
| `--color-yellow-40` | `#ffc70e` | |
| `--color-yellow-30` | `#e6b30d` | **Primary Yellow** |
| `--color-yellow-20` | `#cc9f0b` | |
| `--color-yellow-10` | `#b38b0a` | Darkest |

### Green
| Token | Hex | Swatch |
|-------|-----|--------|
| `--color-green-99` | `#f5fbf9` | Lightest |
| `--color-green-95` | `#e1f2ed` | |
| `--color-green-90` | `#cee9e2` | |
| `--color-green-80` | `#a6d8ca` | |
| `--color-green-70` | `#7fc6b3` | |
| `--color-green-60` | `#57b59c` | |
| `--color-green-50` | `#2fa384` | |
| `--color-green-40` | `#08926d` | |
| `--color-green-30` | `#078362` | |
| `--color-green-20` | `#067557` | |
| `--color-green-10` | `#06664c` | Darkest |

### Grey Variant
| Token | Hex | Swatch |
|-------|-----|--------|
| `--color-grey-variant-99` | `#e8ebf3` | Lightest |
| `--color-grey-variant-95` | `#dedfe8` | |
| `--color-grey-variant-90` | `#c8cad4` | |
| `--color-grey-variant-80` | `#b1b5c0` | |
| `--color-grey-variant-70` | `#9b9fac` | |
| `--color-grey-variant-60` | `#858997` | |
| `--color-grey-variant-50` | `#707382` | |
| `--color-grey-variant-40` | `#5a5d6e` | |
| `--color-grey-variant-30` | `#434859` | |
| `--color-grey-variant-20` | `#2d3345` | |
| `--color-grey-variant-10` | `#171d30` | Darkest |

### Grey
| Token | Hex | Swatch |
|-------|-----|--------|
| `--color-grey-99` | `#f3f4f4` | Lightest |
| `--color-grey-95` | `#e8e8e9` | |
| `--color-grey-90` | `#d1d1d4` | |
| `--color-grey-80` | `#b9bbbe` | |
| `--color-grey-70` | `#a2a4a9` | |
| `--color-grey-60` | `#8b8d93` | |
| `--color-grey-50` | `#74767d` | |
| `--color-grey-40` | `#5d5f68` | |
| `--color-grey-30` | `#454952` | |
| `--color-grey-20` | `#2e323d` | |
| `--color-grey-10` | `#171b27` | Darkest |

### Base
| Token | Hex |
|-------|-----|
| `--color-white` | `#fff` |
| `--color-black` | `#000` |

---

## Meerklets Factory Usage

### Meerklet Chassis & Vest Colors
| Element | Color | Hex | Source Token |
|---------|-------|-----|-------------|
| Core chassis (all Meerklets) | CTM Blue | `#2843d0` | `--color-cobalt-30` |
| Floor 1 vest (Infrastructure) | Bright Orange | `#e8722a` | Derived — sits between yellow and red |
| Floor 2 vest (Production) | CTM Yellow | `#e6b30d` | `--color-yellow-30` |
| Floor 3 vest (Orchestration) | CTM Magenta | `#d946a8` | Derived from AutoSergei stripe |

### Neon Accents (for cyberpunk glow effects)
| Purpose | Hex | Source Token |
|---------|-----|-------------|
| Data streams / pipes | `#6f85ef` | `--color-cobalt-60` |
| Holographic displays | `#b984ff` | `--color-purple-60` |
| Active / warning | `#ffc70e` | `--color-yellow-40` |
| Health / success | `#57b59c` | `--color-green-60` |
| Error / barrier | `#dc5f7e` | `--color-red-60` |
| Chimney golden beam | `#ffd035` | `--color-yellow-50` |

### Environmental Colors
| Element | Hex | Source Token |
|---------|-----|-------------|
| Concrete walls | `#434859` → `#5a5d6e` | `--color-grey-variant-30` → `40` |
| Floor surfaces | `#2d3345` | `--color-grey-variant-20` |
| Glass / windows | `#e8ebf3` | `--color-grey-variant-99` |
| Metal accents | `#b1b5c0` | `--color-grey-variant-80` |
| Digital grass | `#2fa384` | `--color-green-50` |
| Stone paths | `#e8e8e9` | `--color-grey-95` |
| Sky (upper) | `#d5dbfa` | `--color-cobalt-90` |

### Chimney Health States
| Phase | Colors | Source |
|-------|--------|--------|
| Soot / errors | `#171b27` (dark), `#dc5f7e` (red glow) | `--color-grey-10`, `--color-red-60` |
| Mixed / transition | `#dc5f7e` (red) + `#4e68eb` (blue) | `--color-red-60`, `--color-cobalt-50` |
| Full health / golden beam | `#ffd035` → `#ffc70e` | `--color-yellow-50` → `40` |

---

## CSS Custom Properties (Copy-Paste Ready)

```css
:root {
  /* Primary */
  --ctm-blue: #2843d0;
  --ctm-yellow: #e6b30d;
  --ctm-red: #b8123b;

  /* Derived (not in CTM palette) */
  --ctm-orange: #e8722a;         /* Floor 1 vest — Infrastructure */
  --ctm-orange-neon: #ff8c42;    /* Floor 1 glow */
  --ctm-magenta: #d946a8;        /* Floor 3 vest — Orchestration */
  --ctm-magenta-neon: #f06cc8;   /* Floor 3 glow */

  /* Cobalt */
  --color-cobalt-99: #f7f8fe;
  --color-cobalt-95: #e6e9fc;
  --color-cobalt-90: #d5dbfa;
  --color-cobalt-80: #b3bef6;
  --color-cobalt-70: #91a1f3;
  --color-cobalt-60: #6f85ef;
  --color-cobalt-50: #4e68eb;
  --color-cobalt-40: #2c4be7;
  --color-cobalt-30: #2843d0;
  --color-cobalt-20: #233cb9;
  --color-cobalt-10: #1f35a2;

  /* Purple */
  --color-purple-90: #6326b3;
  --color-purple-60: #b984ff;

  /* Red */
  --color-red-99: #fdf6f7;
  --color-red-95: #f9e3e8;
  --color-red-90: #f5d0d9;
  --color-red-80: #edaabb;
  --color-red-70: #e4859d;
  --color-red-60: #dc5f7e;
  --color-red-50: #d43a60;
  --color-red-40: #cc1442;
  --color-red-30: #b8123b;
  --color-red-20: #a31035;
  --color-red-10: #8f0e2e;

  /* Yellow */
  --color-yellow-99: #fffdf5;
  --color-yellow-95: #fff8e2;
  --color-yellow-90: #fff4cf;
  --color-yellow-80: #ffeba8;
  --color-yellow-70: #ffe282;
  --color-yellow-60: #ffd95b;
  --color-yellow-50: #ffd035;
  --color-yellow-40: #ffc70e;
  --color-yellow-30: #e6b30d;
  --color-yellow-20: #cc9f0b;
  --color-yellow-10: #b38b0a;

  /* Green */
  --color-green-99: #f5fbf9;
  --color-green-95: #e1f2ed;
  --color-green-90: #cee9e2;
  --color-green-80: #a6d8ca;
  --color-green-70: #7fc6b3;
  --color-green-60: #57b59c;
  --color-green-50: #2fa384;
  --color-green-40: #08926d;
  --color-green-30: #078362;
  --color-green-20: #067557;
  --color-green-10: #06664c;

  /* Grey Variant */
  --color-grey-variant-99: #e8ebf3;
  --color-grey-variant-95: #dedfe8;
  --color-grey-variant-90: #c8cad4;
  --color-grey-variant-80: #b1b5c0;
  --color-grey-variant-70: #9b9fac;
  --color-grey-variant-60: #858997;
  --color-grey-variant-50: #707382;
  --color-grey-variant-40: #5a5d6e;
  --color-grey-variant-30: #434859;
  --color-grey-variant-20: #2d3345;
  --color-grey-variant-10: #171d30;

  /* Grey */
  --color-grey-99: #f3f4f4;
  --color-grey-95: #e8e8e9;
  --color-grey-90: #d1d1d4;
  --color-grey-80: #b9bbbe;
  --color-grey-70: #a2a4a9;
  --color-grey-60: #8b8d93;
  --color-grey-50: #74767d;
  --color-grey-40: #5d5f68;
  --color-grey-30: #454952;
  --color-grey-20: #2e323d;
  --color-grey-10: #171b27;

  /* Base */
  --color-white: #fff;
  --color-black: #000;
}
```
