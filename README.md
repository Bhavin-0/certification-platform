# NPTEL Certificate Verification Platform (Replica)

A minimal, static Next.js application that replicates the exact URL structure and UI flow of the NPTEL certificate verification system. Designed for easy deployment to Vercel.

## Features

- **Exact Routing**: Matches the `/?q=<certificate-id>` query parameter logic.
- **Minimal Style**: Exact button dimensions, colors, and layout matching the legacy platform. No modern tailwind components or over-engineering.
- **Static PDFs**: PDFs are loaded directly from the `/public` folder without a database.
- **Simple Mapping File**: Easily update certificates through a single configuration file (`src/lib/certificates.ts`).
- **No Backend**: 100% static routing and file serving. Zero dependencies on Node.js fs modules or databases.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the app in your browser and verify the flow:
   - Root page: `http://localhost:3000/`
   - Example verification: `http://localhost:3000/noc/Ecertificate/?q=NPTEL24CS118S105310114304042426`

## Adding a New Certificate

1. Place the PDF in the target folder structure inside `/public`:
   ```text
   public/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs118/Course/YOUR_CERT_ID.pdf
   ```
2. Open `src/lib/certificates.ts`.
3. Add the mapping using the exact query ID and its public path:
   ```typescript
   "YOUR_CERT_ID": {
     pdfPath: "/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs118/Course/YOUR_CERT_ID.pdf"
   }
   ```

## Vercel Deployment

Deploying to Vercel requires zero configuration because this is a standard Next.js application.

1. Push your repository to GitHub.
2. Log into [Vercel](https://vercel.com/) and click **Add New Project**.
3. Select your GitHub repository.
4. Keep the default settings (Framework Preset: Next.js).
5. Click **Deploy**.
6. Once deployed, QR codes can point directly to `https://<your-vercel-domain>/noc/Ecertificate/?q=...`.

## Architecture Details

- **Routing System**: `src/app/noc/Ecertificate/page.tsx` captures the query parameters using standard Next.js `searchParams`. It reads the `q` param and cross-references it with the static dictionary inside `src/lib/certificates.ts`.
- **Certificate Mapping System**: To prevent the need for a database, we use a simple JavaScript object mapping. When a certificate `q` value is requested, the system returns the mapped `pdfPath` value which is directly accessible over HTTP.
- **Error Handling**: A plain white screen with "Certificate not found" is displayed if the query parameter is missing or the ID is unmapped, exactly mimicking legacy system constraints.
