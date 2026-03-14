/**
 * Experience calculation from career start (Aug 2021).
 * Display uses floor bands: 4.0–4.3 → "4+", 4.4–4.8 → "4.5+", 4.9–5.3 → "5+", etc.
 */

const CAREER_START = new Date(2021, 7, 1); // 1 Aug 2021 (month is 0-indexed)

/**
 * Years since career start (fractional).
 */
function getExperienceYearsRaw(): number {
  const now = new Date();
  const diffMs = now.getTime() - CAREER_START.getTime();
  const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);
  return Math.max(0, diffYears);
}

/**
 * Display band (floor concept):
 * - [X.0, X.4) → "X+"
 * - [X.4, X.9) → "X.5+"
 * - [X.9, X+1.4) → "(X+1)+"
 */
function getExperienceDisplayBand(years: number): { display: string; numeric: number } {
  const intPart = Math.floor(years);
  const frac = years - intPart;

  if (frac < 0.4) {
    return { display: `${intPart}+`, numeric: intPart };
  }
  if (frac < 0.9) {
    return { display: `${intPart}.5+`, numeric: intPart + 0.5 };
  }
  return { display: `${intPart + 1}+`, numeric: intPart + 1 };
}

function compute() {
  const raw = getExperienceYearsRaw();
  const { display, numeric } = getExperienceDisplayBand(raw);
  return { raw, display, numeric };
}

/**
 * Display string for experience (e.g. "4+", "4.5+", "5+").
 * Use for copy like "4+ years of experience".
 */
export function getExperienceDisplay(): string {
  return compute().display;
}

/**
 * Numeric value for counters/animations (4, 4.5, or 5, etc.).
 */
export function getExperienceYearsForCounter(): number {
  return compute().numeric;
}

/**
 * Full label e.g. "4+ years" (for "X+ years of experience").
 */
export function getExperienceYearsLabel(): string {
  const { display } = compute();
  return `${display} years`;
}
