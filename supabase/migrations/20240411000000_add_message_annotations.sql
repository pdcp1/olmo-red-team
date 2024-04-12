--------------- MESSAGE ANNOTATIONS ---------------

-- TABLE --

CREATE TABLE IF NOT EXISTS message_annotations (
    -- ID
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    -- REQUIRED RELATIONSHIPS
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    message_id UUID NOT NULL REFERENCES messages(id) ON DELETE CASCADE,

     -- REQUIRED
    reason TEXT NOT NULL CHECK (char_length(reason) <= 1000000),

    -- METADATA
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ
);

-- INDEXES --

CREATE INDEX idx_message_annotations_message_id ON message_annotations (message_id);

-- RLS --

ALTER TABLE message_annotations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow full access to own message_annotations"
    ON message_annotations
    USING (user_id = auth.uid())
    WITH CHECK (user_id = auth.uid());

-- TRIGGERS --

CREATE TRIGGER update_message_annotations_updated_at
BEFORE UPDATE ON message_annotations 
FOR EACH ROW 
EXECUTE PROCEDURE update_updated_at_column();