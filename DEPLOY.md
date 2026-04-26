# Aivio Website — Deployment Guide

## Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14 (App Router, TypeScript) |
| CMS | Sanity.io (Project ID: `tj308p6d`) |
| Hosting | Vercel |
| Versionierung | GitHub (pending: GRAAAAAA-39) |

---

## Einmaliges Setup (Board-Aktion erforderlich)

### 1. Vercel-Projekt erstellen

Das bereitgestellte Vercel API-Token (`vck_*`) hat nur Leseberechtigung.
Für die Ersteinrichtung muss das Board ein neues Token erstellen:

1. Login: https://vercel.com/login
2. Settings → Tokens → **Create Token** mit Scope: **Full Account**
3. Neues Token in Paperclip-Issue als Kommentar hinterlegen

**ODER**: Vercel-Projekt manuell über die UI erstellen:
1. https://vercel.com/new → "Import Git Repository" (oder "Deploy without Git" für direkten Upload)
2. Projektname: `aivio-website`
3. Framework: **Next.js**
4. Root Directory: `/` (dieses Verzeichnis)

### 2. Environment Variables in Vercel setzen

In Vercel-Projekt → Settings → Environment Variables:

| Variable | Value | Environment |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `tj308p6d` | All |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | All |
| `NEXT_PUBLIC_SANITY_API_VERSION` | `2024-01-01` | All |
| `SANITY_API_TOKEN` | `skrEJRX3IODCP4...` | Production, Preview |
| `NEXT_PUBLIC_SITE_URL` | `https://aivio.health` | Production |

### 3. Sanity Dataset erstellen

1. Login: https://www.sanity.io/manage
2. Projekt: **Aivio** (`tj308p6d`)
3. Datasets → **Add Dataset** → Name: `production` → Public: Nein
4. Schema wird automatisch beim ersten Studio-Aufruf geladen

### 4. GitHub verknüpfen (sobald GRAAAAAA-39 abgeschlossen)

Nach GitHub-Setup (GRAAAAAA-39):
1. Vercel-Projekt → Settings → Git → **Connect Git Repository**
2. Repo: `<org>/aivio-website`
3. Branch: `main` → Production, `develop` → Preview

---

## Lokale Entwicklung

```bash
# Repo klonen (nach GitHub-Setup)
git clone https://github.com/<org>/aivio-website.git
cd aivio-website

# Dependencies installieren
npm install

# .env.local erstellen
cp .env.local.example .env.local
# Werte ausfüllen (Sanity Token etc.)

# Dev-Server starten
npm run dev
# → http://localhost:3000

# Sanity Studio öffnen
# → http://localhost:3000/studio
```

---

## Content editieren (Board-Anleitung)

### Sanity Studio aufrufen

**Lokal:** http://localhost:3000/studio  
**Produktiv:** https://aivio-website.vercel.app/studio (nach Deployment)

### Inhalt bearbeiten

1. Studio öffnen → mit Sanity-Konto einloggen
2. Linke Navigation:
   - **Homepage** → Hero, Benefits, Social Proof, Testimonials
   - **Features Page** → Feature-Liste mit Beschreibungen
   - **Pricing Page** → Preispläne und FAQ
   - **Blog Post** → Neuen Beitrag erstellen (Titel → Slug automatisch)
3. Änderungen speichern → Website aktualisiert sich automatisch (ISR, max. 60s)

### Bilder hochladen

Im Sanity Studio → Klick auf Bild-Feld → **Upload** → Datei wählen.  
Bilder werden automatisch optimiert und via CDN ausgeliefert.

---

## Deployment-Ablauf (nach GitHub-Setup)

```
Code-Änderung → git push → GitHub Webhook → Vercel Build (~2 min) → Live
```

- `main` Branch → **Production** (https://aivio.health)
- Feature-Branches → **Preview URLs** (automatisch generiert)

---

## Architektur

```
Browser
  │
  ▼
Vercel Edge (CDN)
  │
  ├── Next.js App Router (SSR/ISR)
  │     ├── / (Homepage)
  │     ├── /features
  │     ├── /pricing
  │     ├── /blog (list + posts)
  │     └── /studio (Sanity Studio embedded)
  │
  └── Sanity CDN (Bilder, Content via GROQ)
        └── Projekt: tj308p6d / Dataset: production
```
