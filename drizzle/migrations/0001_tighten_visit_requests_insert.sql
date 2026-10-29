DROP POLICY IF EXISTS "Anyone can request a visit" ON public.visit_requests;
CREATE POLICY "Anyone can request a visit" ON public.visit_requests
FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(btrim(name)) BETWEEN 2 AND 100
  AND char_length(btrim(phone)) BETWEEN 8 AND 30
  AND char_length(btrim(child_age)) BETWEEN 1 AND 50
  AND char_length(btrim(shift)) BETWEEN 1 AND 50
  AND (message IS NULL OR char_length(message) <= 1000)
);