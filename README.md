# SMIT Installatie Techniek — Website

Next.js 16 / TypeScript website voor SMIT Installatie Techniek, Kortenhoef.  
Live op: **https://www.smit-installatie-techniek.nl**

---

## Lokale ontwikkeling

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy naar VPS

### Eenmalige setup op de VPS

Voer deze stappen **één keer** uit nadat u voor het eerst inlogt op de VPS.

```bash
# 1. Inloggen via SSH
ssh root@UW_VPS_IP

# 2. Node.js 20 installeren
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# 3. PM2 installeren
npm install -g pm2

# 4. Nginx installeren
apt install -y nginx

# 5. Log-map aanmaken voor PM2
mkdir -p /var/log/pm2

# 6. Projectmap aanmaken en code klonen
mkdir -p /var/www/smit-site
cd /var/www/smit-site
git clone https://github.com/UW_GITHUB_GEBRUIKERSNAAM/smit-nextjs.git .

# 7. Eerste build en start
npm ci --omit=dev
npm run build
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup   # volg de instructie die PM2 toont (copy-paste het sudo-commando)

# 8. Nginx configureren
nano /etc/nginx/sites-available/smit-site
```

Plak dit in het Nginx-configuratiebestand:

```nginx
server {
    listen 80;
    server_name smit-installatie-techniek.nl www.smit-installatie-techniek.nl;

    location / {
        proxy_pass         http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection 'upgrade';
        proxy_set_header   Host $host;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Nginx activeren
ln -s /etc/nginx/sites-available/smit-site /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx

# 9. SSL-certificaat instellen (HTTPS)
apt install -y certbot python3-certbot-nginx
certbot --nginx -d smit-installatie-techniek.nl -d www.smit-installatie-techniek.nl
```

---

### Daarna deployen na elke wijziging

```bash
# Op de VPS uitvoeren:
bash /var/www/smit-site/scripts/deploy-vps.sh
```

Of als u SSH-toegang heeft vanaf uw lokale machine:

```bash
ssh root@UW_VPS_IP "bash /var/www/smit-site/scripts/deploy-vps.sh"
```

Het script doet automatisch:
1. `git pull` van de `main` branch
2. `npm ci` — dependencies bijwerken
3. `npm run build` — productie build
4. `pm2 reload smit-site` — herstart zonder downtime

---

### Handige PM2-commando's

```bash
pm2 status                  # status van alle apps
pm2 logs smit-site          # live logs bekijken
pm2 logs smit-site --lines 50  # laatste 50 regels
pm2 restart smit-site       # handmatig herstarten
pm2 stop smit-site          # stoppen
```

---

## Projectstructuur

```
smit-nextjs/
├── app/                    # Next.js App Router pagina's
│   ├── [dienst]/           # Dynamische dienstpagina's
│   │   └── [plaats]/       # Combo dienst + plaats pagina's
│   ├── werkgebied/         # Werkgebied overzicht + plaatspagina's
│   ├── offerte/            # Offerte pagina's
│   ├── contact/
│   ├── sitemap.ts          # Automatische sitemap.xml
│   └── robots.ts           # robots.txt
├── components/             # Gedeelde UI-componenten
├── lib/
│   └── data/
│       ├── services.ts     # Data voor 5 diensten
│       ├── locations.ts    # Data voor 21 plaatsen
│       └── combo-content.ts  # Unieke content per dienst+plaats
├── public/                 # Statische bestanden (afbeeldingen, logo)
├── ecosystem.config.cjs    # PM2 configuratie
└── scripts/
    └── deploy-vps.sh       # Deploy script
```
