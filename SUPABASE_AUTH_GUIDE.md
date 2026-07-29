# ⚡ Easy Supabase Auth Guide for FIXSSET

A simple, 4-step beginner guide to integrate **Supabase Authentication** into your Next.js project and deploy it to Vercel.

---

## 📋 Step 1: Create a Free Supabase Project (2 Mins)

1. Go to **[supabase.com](https://supabase.com)** and log in with GitHub.
2. Click **"New Project"**.
3. Set a Project Name (e.g. `FIXSSET Portal`) and a Database Password.
4. Once created, go to **Project Settings ➔ API**.
5. Copy these **2 keys**:
   - `Project URL` (e.g. `https://xyz.supabase.co`)
   - `anon / public` API Key

---

## 📦 Step 2: Install Supabase in Next.js

In your project terminal, run:

```bash
npm install @supabase/supabase-js
```

Create a file named `.env.local` in your project root folder:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
```

---

## 🛠️ Step 3: Create the Supabase Client Helper

Create a file at `src/lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

---

## 🔑 Step 4: Update Your Login Modal Code

Inside `src/components/LoginModal.tsx`, replace the mock login handler with Supabase Auth:

```typescript
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export function LoginModal() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // 1. Authenticate with Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    // 2. Successful Login -> Redirect to Dashboard
    if (data.session) {
      router.push('/dashboard');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Company Email" 
        required 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
        required 
      />
      <button type="submit">Sign In</button>
    </form>
  );
}
```

---

## 🌐 Step 5: Add Keys to Vercel (For Production)

When deploying to Vercel:

1. Go to your project on **[Vercel Dashboard](https://vercel.com)**.
2. Go to **Settings ➔ Environment Variables**.
3. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Click **Save** and **Redeploy**!

---

### 🎉 That's It!
Your users are now authenticated using Supabase's secure PostgreSQL Auth Database!
