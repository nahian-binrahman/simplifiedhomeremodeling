"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { SiteContent, BlogPost } from "@/lib/cms-types";
import { DEFAULT_SITE_CONTENT } from "@/lib/cms-defaults";

interface ContentContextType {
  content: SiteContent;
  loading: boolean;
  refreshContent: () => Promise<void>;
  getImage: (originalPath: string) => string;
}

const ContentContext = createContext<ContentContextType>({
  content: DEFAULT_SITE_CONTENT,
  loading: false,
  refreshContent: async () => {},
  getImage: (p: string) => p,
});

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(DEFAULT_SITE_CONTENT);
  const [loading, setLoading] = useState(true);

  const fetchContent = async () => {
    try {
      const res = await fetch("/api/admin/content", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.content) {
          setContent(data.content);
        }
      }
    } catch (e) {
      console.warn("Could not load dynamic CMS content, using defaults.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const getImage = (originalPath: string) => {
    if (content.mediaReplacements && content.mediaReplacements[originalPath]) {
      return content.mediaReplacements[originalPath];
    }
    return originalPath;
  };

  return (
    <ContentContext.Provider
      value={{
        content,
        loading,
        refreshContent: fetchContent,
        getImage,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useSiteContent() {
  return useContext(ContentContext);
}
