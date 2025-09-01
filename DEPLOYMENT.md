# Deployment Guide for Kavita Cooler

This guide provides instructions for deploying the Kavita Cooler website to Vercel.

## Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Vercel account
- Git

## Environment Variables

Create a `.env` file in the project root based on `.env.example`:

```bash
cp .env.example .env
```

Update the following variables in your Vercel project settings:

- `VITE_API_URL` - Your API endpoint
- `VITE_ENABLE_ANALYTICS` - Set to "true" to enable analytics
- `VITE_GA_MEASUREMENT_ID` - Your Google Analytics ID (if using GA)

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:8080](http://localhost:8080) in your browser.

## Building for Production

1. Build the application:
   ```bash
   npm run build
   ```

2. Preview the production build locally:
   ```bash
   npm run preview
   ```

## Deploying to Vercel

1. Push your code to a Git repository.

2. Import the repository into Vercel:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New" → "Project"
   - Import your Git repository
   - Configure the project:
     - Framework Preset: Vite
     - Root Directory: (leave empty unless in a subdirectory)
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`
   - Add environment variables from your `.env` file
   - Click "Deploy"

## Vercel Configuration

The project includes a `vercel.json` file with the following configuration:

- Handles client-side routing with SPA fallback
- Configures proper caching headers for static assets
- Sets up build and deployment settings

## Troubleshooting

### White Screen on Refresh
- Ensure `vercel.json` is properly configured with the SPA fallback route
- Check browser console for any JavaScript errors
- Verify all environment variables are set in Vercel

### 404 Errors for Assets
- Ensure asset paths are using absolute URLs (starting with `/`)
- Check that files are properly cased (Linux servers are case-sensitive)
- Verify the `base` setting in `vite.config.ts` is correct

### Environment Variables
- All client-side variables must be prefixed with `VITE_`
- Rebuild and redeploy after changing environment variables
- Check Vercel's environment variables in project settings

## Performance Optimization

- Code splitting is configured in `vite.config.ts`
- Images are optimized during build
- Route-based code splitting is enabled

## Monitoring

- Error tracking is set up with error boundaries
- Consider adding monitoring tools like Sentry or LogRocket for production

## Security

- All sensitive keys should be stored in environment variables
- API keys should be server-side only when possible
- Enable HTTPS in production

## Maintenance

- Keep dependencies updated
- Monitor Vercel logs for errors
- Regularly test all critical user flows
