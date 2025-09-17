# Environment Setup Guide

## Issue: Products Not Loading (Line 50 Error)

The error on line 50 is caused by missing Supabase environment variables. Here's how to fix it:

## Step 1: Create Environment File

Create a `.env.local` file in your project root with the following content:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_supabase_anon_key_here
```

## Step 2: Get Your Supabase Credentials

1. Go to [supabase.com](https://supabase.com) and sign in
2. Create a new project or select an existing one
3. Go to Settings > API
4. Copy the following values:
   - **Project URL** → use as `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → use as `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY`

## Step 3: Set Up Your Database

Make sure your Supabase database has the following tables:

- `products`
- `companies`
- `categories`
- `tags`
- `product_category_jnc` (junction table)
- `product_tags_jnc` (junction table)

## Step 4: Test the Application

1. Save the `.env.local` file
2. Restart your development server (`npm run dev`)
3. The products should now load without errors

## Troubleshooting

If you still see errors:

1. Check the browser console for detailed error messages
2. Verify your Supabase credentials are correct
3. Ensure your database tables exist and have data
4. Check that your Supabase project is active and not paused

## Example .env.local

```env
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```
