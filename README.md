# Transforma.ba Next.js website

## Lokalno pokretanje

1. Instaliraj Node.js LTS.
2. Otvori terminal u ovom folderu.
3. Pokreni:

```bash
npm install
npm run dev
```

4. Otvori http://localhost:3000

## Deploy na Vercel

1. Napravi GitHub repository.
2. Uploaduj sve fajlove iz ovog foldera.
3. Otvori vercel.com i izaberi Add New Project.
4. Spoji GitHub repository.
5. Klikni Deploy.

## Povezivanje domena transforma.ba

U Vercelu:
Project Settings > Domains > Add transforma.ba

Vercel će prikazati DNS zapise koje trebaš unijeti kod firme gdje je registrovan domen.

Tipično:
- A record za @ prema Vercel IP adresi
- CNAME za www prema cname.vercel-dns.com

## Kontakt forma

Trenutno je forma postavljena za Formspree:
`https://formspree.io/f/REPLACE_ME`

Na formspree.io napravi besplatan formular i zamijeni REPLACE_ME svojim ID-em.
