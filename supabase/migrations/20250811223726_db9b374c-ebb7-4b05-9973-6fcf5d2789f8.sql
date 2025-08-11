-- Ensure required extension for UUID generation
create extension if not exists pgcrypto;

-- Shared updated_at trigger function (idempotent)
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- CONTACT MESSAGES TABLE
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  phone text,
  company text,
  subject text,
  message text,
  source_page text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  consent boolean default false,
  user_agent text,
  ip_address text,
  status text default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.contact_messages is 'Inbound messages from the website contact form.';
comment on column public.contact_messages.status is 'Pipeline status: new, read, replied, archived, etc.';

-- EMAIL SUBSCRIPTIONS TABLE
create table if not exists public.email_subscriptions (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  subscribed boolean not null default true,
  confirmed boolean not null default false,
  confirmed_at timestamptz,
  unsubscribed_at timestamptz,
  tags text[] not null default '{}',
  source_page text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint email_subscriptions_email_unique unique(email)
);

comment on table public.email_subscriptions is 'Newsletter or marketing email subscribers collected via the site.';

-- Enable RLS
alter table public.contact_messages enable row level security;
alter table public.email_subscriptions enable row level security;

-- Policies: allow anonymous inserts from the website, restrict reads to authenticated users
-- Contact Messages
drop policy if exists "Anon can insert contact messages" on public.contact_messages;
create policy "Anon can insert contact messages"
  on public.contact_messages
  for insert
  to anon
  with check (true);

drop policy if exists "Authenticated can read contact messages" on public.contact_messages;
create policy "Authenticated can read contact messages"
  on public.contact_messages
  for select
  to authenticated
  using (true);

-- Email Subscriptions
drop policy if exists "Anon can insert email subscriptions" on public.email_subscriptions;
create policy "Anon can insert email subscriptions"
  on public.email_subscriptions
  for insert
  to anon
  with check (true);

drop policy if exists "Authenticated can read email subscriptions" on public.email_subscriptions;
create policy "Authenticated can read email subscriptions"
  on public.email_subscriptions
  for select
  to authenticated
  using (true);

-- Optional: allow authenticated updates (e.g., marking read/unread, unsubscribes handled by admins)
drop policy if exists "Authenticated can update messages" on public.contact_messages;
create policy "Authenticated can update messages"
  on public.contact_messages
  for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Authenticated can update subscriptions" on public.email_subscriptions;
create policy "Authenticated can update subscriptions"
  on public.email_subscriptions
  for update
  to authenticated
  using (true)
  with check (true);

-- Indexes
create index if not exists idx_contact_messages_created_at on public.contact_messages (created_at desc);
create index if not exists idx_contact_messages_status on public.contact_messages (status);
create index if not exists idx_email_subscriptions_email on public.email_subscriptions (email);
create index if not exists idx_email_subscriptions_created_at on public.email_subscriptions (created_at desc);

-- Triggers for updated_at
create or replace trigger trg_contact_messages_updated_at
before update on public.contact_messages
for each row execute function public.update_updated_at_column();

create or replace trigger trg_email_subscriptions_updated_at
before update on public.email_subscriptions
for each row execute function public.update_updated_at_column();