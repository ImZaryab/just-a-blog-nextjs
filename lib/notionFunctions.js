import "server-only";

import { Client } from "@notionhq/client";
import React from "react";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// Returns the entire pages data
export const fetchPages_legacy = React.cache(() => {
  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "Status",
      select: {
        equals: "Published",
      },
    },
  });
});

// Returns a smaller object of all pages in the BlogPost Database with only useful information
// Only useful information is mapped and returned
export const fetchPages = async () => {
    const retrievedPosts = [];
    const result = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: "Status",
        select: {
          equals: "Published",
        },
      },
    });
    result.results.map((item) => {
      //Get the id for the post
      let id = item?.id;
  
      //Get the title for the post
      let title = item?.properties?.Title?.title?.[0]?.text?.content;
  
      //Get the slug for the post
      let slug = item?.properties?.Slug?.formula?.string;
  
      //Get the tags for the post
      let tags = [];
      item?.properties?.Tags?.multi_select.map((item) => tags.push(item.name));
  
      //Get the publishing date for the post
      let publishedDate = item?.created_time;
  
      //Create an object with retrieved values and push it into the array to be returned
      let newObj = {
        id: id,
        title: title,
        slug: slug,
        tags: tags,
        publishDate: publishedDate,
      };
      retrievedPosts.push(newObj);
    });
    return retrievedPosts;
  };

export const fetchPageBySlug = React.cache(async (slug) => {
  const res = await notion.databases
        .query({
            database_id: process.env.NOTION_DATABASE_ID,
            filter: {
                property: "Slug",
                rich_text: {
                    equals: slug,
                },
            },
        });
    return res.results[0];
});

export const fetchPageBlocks = React.cache(async (pageId) => {
  const res = await notion.blocks.children
        .list({ block_id: pageId });
    return res.results;
});

export const fetchHello = () => {
    return process.env.HELLO
}