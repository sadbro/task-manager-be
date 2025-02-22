CREATE TABLE IF NOT EXISTS users (
                       id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                       name TEXT NOT NULL,
                       email TEXT NOT NULL UNIQUE,
                       password TEXT NOT NULL,
                       created_at TIMESTAMP DEFAULT NOW(),
                       updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS tasks (
                       id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                       title TEXT NOT NULL,
                       description TEXT NOT NULL,
                       hex_color TEXT NOT NULL,
                       uid UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
                       due_at TIMESTAMP DEFAULT (NOW() + INTERVAL '7 days'),
                       created_at TIMESTAMP DEFAULT NOW(),
                       updated_at TIMESTAMP DEFAULT NOW()
);
