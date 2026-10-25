CREATE TABLE public.visit_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 8 AND 30),
  child_age text NOT NULL CHECK (char_length(child_age) <= 50),
  shift text NOT NULL CHECK (char_length(shift) <= 50),
  message text CHECK (char_length(message) <= 1000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.visit_requests TO anon, authenticated;
GRANT ALL ON public.visit_requests TO service_role;
ALTER TABLE public.visit_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can request a visit" ON public.visit_requests FOR INSERT TO anon, authenticated WITH CHECK (true);