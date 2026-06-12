export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      founders: {
        Row: {
          id: string;
          slug: string;
          name: string;
          initials: string;
          title: string;
          company: string;
          quote: string | null;
          bio: string | null;
          tags: string[];
          created_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          name: string;
          initials: string;
          title: string;
          company: string;
          quote?: string | null;
          bio?: string | null;
          tags?: string[];
          created_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          name?: string;
          initials?: string;
          title?: string;
          company?: string;
          quote?: string | null;
          bio?: string | null;
          tags?: string[];
          created_at?: string;
        };
        Relationships: [];
      };
      content: {
        Row: {
          id: string;
          founder_id: string;
          title: string;
          type: "book" | "essay" | "letter" | "interview" | "talk" | "thread";
          year: number | null;
          url: string | null;
          raw_text: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          founder_id: string;
          title: string;
          type: "book" | "essay" | "letter" | "interview" | "talk" | "thread";
          year?: number | null;
          url?: string | null;
          raw_text?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          founder_id?: string;
          title?: string;
          type?: "book" | "essay" | "letter" | "interview" | "talk" | "thread";
          year?: number | null;
          url?: string | null;
          raw_text?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      chunks: {
        Row: {
          id: string;
          content_id: string;
          founder_id: string;
          text: string;
          embedding: number[] | null;
          metadata: Json | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          content_id: string;
          founder_id: string;
          text: string;
          embedding?: number[] | null;
          metadata?: Json | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          content_id?: string;
          founder_id?: string;
          text?: string;
          embedding?: number[] | null;
          metadata?: Json | null;
          created_at?: string;
        };
        Relationships: [];
      };
      waitlist: {
        Row: {
          id: string;
          email: string;
          created_at: string;
          source: string | null;
        };
        Insert: {
          id?: string;
          email: string;
          created_at?: string;
          source?: string | null;
        };
        Update: {
          id?: string;
          email?: string;
          created_at?: string;
          source?: string | null;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: {
      match_chunks: {
        Args: {
          query_embedding: number[];
          match_threshold: number;
          match_count: number;
          founder_ids?: string[];
        };
        Returns: Array<{
          id: string;
          founder_id: string;
          content_id: string;
          text: string;
          metadata: Json;
          similarity: number;
        }>;
      };
    };
  };
}
