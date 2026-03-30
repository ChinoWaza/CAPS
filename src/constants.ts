export interface Player {
  name: string;
  country: string;
}

export interface Title {
  name: string;
  date: string;
}

export const HAXBALL_ROSTER: Player[] = [
  { name: 'Praiz', country: 'Uruguay' },
  { name: 'Th!', country: 'Uruguay' },
  { name: 'Noir', country: 'Uruguay' },
  { name: 'Allways', country: 'Argentina' },
  { name: 'Daniuk', country: 'Argentina' },
  { name: 'Skaper', country: 'Argentina' },
  { name: 'Hosungryn', country: 'Argentina' },
];

export const ROCKET_LEAGUE_ROSTER: Player[] = [
  { name: 'Coco', country: 'Francia' },
  { name: 'Infinithy', country: 'Argentina' },
  { name: 'Mark', country: 'Perú' },
  { name: 'Dryoid', country: 'Uruguay' },
  { name: 'Jimxss', country: 'Uruguay' },
  { name: 'Lara', country: 'Chile' },
];

export const HAXBALL_TITLES: Title[] = [
  { name: 'Hax365 League 4ta Division Temporada 2', date: '26/4/2025' },
  { name: 'Hax365 League Copa Sudamericana Temporada 1', date: '26/5/2025' },
  { name: 'Hax365 League Recopa Sudamericana Temporada 2', date: '8/6/2025' },
  { name: 'Haxball Uruguay Liga Sorianista Temporada 1', date: '5/8/2025' },
  { name: 'Hax365 League Primera Division Temporada 6', date: '18/1/2026' },
];

export const ROCKET_LEAGUE_TITLES: Title[] = [
  { name: 'Liga Sorianista Temporada 1', date: '24/1/2026' },
  { name: 'Liga Turbo Temporada 1', date: '25/1/2026' },
];

export const SOCIAL_LINKS = {
  tiktok: 'https://www.tiktok.com/@caps.esports',
  instagram: 'https://www.instagram.com/c.a.palmar.soriano/',
  youtube: 'https://www.youtube.com/@CAPS_TV_117',
  kick: 'https://kick.com/caps-tv',
  discord: 'https://discord.com/invite/5phf3qwPbu',
};
