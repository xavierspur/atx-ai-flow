
-- Create leads table for capturing signups and inquiries
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL,
    full_name TEXT,
    phone TEXT,
    status TEXT DEFAULT 'new',
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow public to insert leads (for sign-up forms)
CREATE POLICY "Anyone can insert leads" 
ON public.leads FOR INSERT 
WITH CHECK (true);

-- Only authenticated users (admins) can view leads
-- In a real app, you'd check for an admin role
CREATE POLICY "Authenticated users can view leads" 
ON public.leads FOR SELECT 
USING (auth.role() = 'authenticated');

-- Trigger for updated_at
CREATE TRIGGER update_leads_updated_at
    BEFORE UPDATE ON public.leads
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();
