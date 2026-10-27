const iconShapes: Record<string, string> = {
  experience: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18M8 16l2 2 5-5"/>',
  local: '<path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3ZM8 13c2.2 0 4-1.8 4-4S10.2 5 8 5 4 6.8 4 9s1.8 4 4 4ZM2 21v-2c0-2.2 2.7-4 6-4 1.2 0 2.3.2 3.2.6M14 15h7M17.5 11.5v7"/>',
  discretion: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
  technology: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4M8 11h6M11 8v6"/>',
  warranty: '<path d="m12 3 8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4Z"/><path d="m8.5 12 2.3 2.3 4.7-4.8"/>',
  'same-day': '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  residential: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1V10Z"/>',
  commercial: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h2m2 0h2M9 11h2m2 0h2M9 15h2m2 0h2M10 21v-3h4v3"/>',
  eco: '<path d="M20 4c-8 0-14 4-14 11a5 5 0 0 0 5 5c7 0 11-6 9-16Z"/><path d="M4 22c2-5 6-8 12-11"/>',
  penetration: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  single: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
};

export function iconDataUrl(key?: string, label?: string) {
  const value = `${key ?? ''} ${label ?? ''}`.toLowerCase();
  const aliases: Array<[string, string]> = [
    ['eco', 'eco'], ['penetration', 'penetration'], ['turnaround', 'same-day'], ['single', 'single'],
    ['experience', 'experience'], ['local', 'local'], ['discretion', 'discretion'], ['technology', 'technology'],
    ['warranty', 'warranty'], ['residential', 'residential'], ['commercial', 'commercial'],
  ];
  const iconKey = aliases.find(([alias]) => value.includes(alias))?.[1];
  const shape = value.includes('heat')
    ? '<path d="M12 22a5 5 0 0 0 5-5c0-3-5-8-5-8s-5 5-5 8a5 5 0 0 0 5 5ZM12 2v3m7.1.9-2.1 2.1M4.9 5.9 7 8"/>'
    : value.includes('chemical')
      ? '<path d="M10 2h4m-3 0v7L5 20a1 1 0 0 0 1 2h12a1 1 0 0 0 1-2l-6-11V2M8 16h8"/>'
      : iconShapes[iconKey ?? ''] ?? '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#1d5539" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${shape}</svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
