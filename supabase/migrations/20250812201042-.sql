-- Secure contact_messages: restrict access to admin and support only

-- Ensure RLS is enabled (safe if already enabled)
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Drop overly permissive policies
DROP POLICY IF EXISTS "Authenticated can read contact messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Authenticated can update messages" ON public.contact_messages;

-- Keep existing anon insert policy as-is (assumed present):
--   "Anon can insert contact messages" FOR INSERT TO anon WITH CHECK (true)
-- If it didn't exist, you could re-create it like this (commented out):
-- CREATE POLICY "Anon can insert contact messages"
-- ON public.contact_messages
-- FOR INSERT
-- TO anon
-- WITH CHECK (true);

-- Restrict SELECT to support and admins
CREATE POLICY "Support and Admin can read contact messages"
ON public.contact_messages
FOR SELECT
TO authenticated
USING (
  public.has_role(auth.uid(), 'admin'::public.app_role)
  OR public.has_role(auth.uid(), 'support'::public.app_role)
);

-- Restrict UPDATE to support and admins
CREATE POLICY "Support and Admin can update contact messages"
ON public.contact_messages
FOR UPDATE
TO authenticated
USING (
  public.has_role(auth.uid(), 'admin'::public.app_role)
  OR public.has_role(auth.uid(), 'support'::public.app_role)
)
WITH CHECK (
  public.has_role(auth.uid(), 'admin'::public.app_role)
  OR public.has_role(auth.uid(), 'support'::public.app_role)
);
