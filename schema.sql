-- Enable necessary extensions
create extension if not exists "uuid-ossp";

-- Profiles table (extends default auth.users)
create table profiles (
  id uuid references auth.users on delete cascade,
  full_name text,
  avatar_url text,
  company_name text,
  role text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (id)
);

-- Brands table
create table brands (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  cnpj text unique not null,
  logo_url text,
  website text,
  description text,
  category text not null,
  status text default 'pending' check (status in ('pending', 'verified', 'rejected', 'suspended')),
  trust_score numeric(3,2) default 0.00,
  owner_id uuid references auth.users,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Verifications table
create table verifications (
  id uuid default uuid_generate_v4() primary key,
  brand_id uuid references brands on delete cascade,
  type text not null check (type in ('initial', 'renewal', 'update')),
  status text default 'pending' check (status in ('pending', 'in_review', 'approved', 'rejected')),
  reviewer_id uuid references auth.users,
  notes text,
  valid_until timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Verification Documents table
create table verification_documents (
  id uuid default uuid_generate_v4() primary key,
  verification_id uuid references verifications on delete cascade,
  document_type text not null,
  document_url text not null,
  status text default 'pending' check (status in ('pending', 'approved', 'rejected')),
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Reviews table
create table reviews (
  id uuid default uuid_generate_v4() primary key,
  brand_id uuid references brands on delete cascade,
  user_id uuid references auth.users,
  rating integer not null check (rating >= 1 and rating <= 5),
  content text,
  helpful_count integer default 0,
  status text default 'active' check (status in ('active', 'hidden', 'reported')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Review Reactions table
create table review_reactions (
  id uuid default uuid_generate_v4() primary key,
  review_id uuid references reviews on delete cascade,
  user_id uuid references auth.users,
  reaction_type text not null check (reaction_type in ('helpful', 'report')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(review_id, user_id, reaction_type)
);

-- Reports table
create table reports (
  id uuid default uuid_generate_v4() primary key,
  brand_id uuid references brands on delete cascade,
  reporter_id uuid references auth.users,
  type text not null check (type in ('fraud', 'impersonation', 'inappropriate', 'other')),
  status text default 'open' check (status in ('open', 'investigating', 'resolved', 'dismissed')),
  priority text default 'medium' check (priority in ('low', 'medium', 'high')),
  description text not null,
  resolution_notes text,
  assigned_to uuid references auth.users,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Report Evidence table
create table report_evidence (
  id uuid default uuid_generate_v4() primary key,
  report_id uuid references reports on delete cascade,
  evidence_url text not null,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Subscriptions table
create table subscriptions (
  id uuid default uuid_generate_v4() primary key,
  brand_id uuid references brands on delete cascade,
  plan_id text not null,
  status text default 'active' check (status in ('active', 'cancelled', 'expired')),
  started_at timestamp with time zone default timezone('utc'::text, now()) not null,
  expires_at timestamp with time zone not null,
  cancelled_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Notifications table
create table notifications (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users,
  type text not null check (type in ('verification', 'review', 'report', 'subscription', 'system')),
  title text not null,
  message text not null,
  read boolean default false,
  data jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- User Preferences table
create table user_preferences (
  user_id uuid references auth.users primary key,
  email_notifications boolean default true,
  push_notifications boolean default true,
  notification_types jsonb default '{"verification": true, "review": true, "report": true}'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Metrics table (for analytics)
create table brand_metrics (
  id uuid default uuid_generate_v4() primary key,
  brand_id uuid references brands on delete cascade,
  metric_date date not null,
  trust_score numeric(3,2),
  total_reviews integer,
  average_rating numeric(3,2),
  response_time interval,
  resolution_rate numeric(5,2),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(brand_id, metric_date)
);

-- Create indexes for better performance
create index idx_brands_status on brands(status);
create index idx_brands_trust_score on brands(trust_score);
create index idx_verifications_status on verifications(status);
create index idx_reviews_brand_id on reviews(brand_id);
create index idx_reports_status on reports(status);
create index idx_notifications_user_id on notifications(user_id);
create index idx_brand_metrics_brand_id_date on brand_metrics(brand_id, metric_date);

-- Create function to update updated_at timestamp
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

-- Create triggers for updated_at
create trigger update_profiles_updated_at
  before update on profiles
  for each row
  execute function update_updated_at_column();

create trigger update_brands_updated_at
  before update on brands
  for each row
  execute function update_updated_at_column();

create trigger update_verifications_updated_at
  before update on verifications
  for each row
  execute function update_updated_at_column();

create trigger update_reviews_updated_at
  before update on reviews
  for each row
  execute function update_updated_at_column();

create trigger update_reports_updated_at
  before update on reports
  for each row
  execute function update_updated_at_column();

create trigger update_subscriptions_updated_at
  before update on subscriptions
  for each row
  execute function update_updated_at_column();

create trigger update_user_preferences_updated_at
  before update on user_preferences
  for each row
  execute function update_updated_at_column();

-- Create function to update brand trust score
create or replace function update_brand_trust_score()
returns trigger as $$
begin
  update brands
  set trust_score = (
    select avg(rating)::numeric(3,2)
    from reviews
    where brand_id = new.brand_id
    and status = 'active'
  )
  where id = new.brand_id;
  return new;
end;
$$ language plpgsql;

-- Create trigger for updating trust score
create trigger update_brand_trust_score_on_review
  after insert or update on reviews
  for each row
  execute function update_brand_trust_score();

-- RLS Policies
alter table profiles enable row level security;
alter table brands enable row level security;
alter table verifications enable row level security;
alter table verification_documents enable row level security;
alter table reviews enable row level security;
alter table review_reactions enable row level security;
alter table reports enable row level security;
alter table report_evidence enable row level security;
alter table subscriptions enable row level security;
alter table notifications enable row level security;
alter table user_preferences enable row level security;
alter table brand_metrics enable row level security;

-- Example RLS policies (customize based on your needs)
create policy "Public profiles are viewable by everyone"
  on profiles for select
  using (true);

create policy "Users can insert their own profile"
  on profiles for insert
  with check (auth.uid() = id);

create policy "Users can update own profile"
  on profiles for update
  using (auth.uid() = id);

-- Add more RLS policies as needed for other tables
