import { NextResponse } from 'next/server'
import { Client } from '@notionhq/client'
import slugify from 'slugify'

const notion = new Client({ auth: process.env.NOTION_TOKEN })

export async function GET() {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID!
    const response = await notion.databases.query({ database_id: databaseId })

    const posts = response.results.map((page: any) => {
      const title = page.properties.Name?.title?.[0]?.plain_text || 'Untitled'
      const slug = slugify(title, { lower: true })

      // Извлекаем дату из свойства "Date"
      const date = page.properties["Date"]?.date?.start || null

      return {
        id: page.id,
        title,
        slug,
        date,
        url: page.url,
        cover: page.cover?.external?.url || page.cover?.file?.url || null,
      }
    })

    return NextResponse.json(posts)
  } catch (err) {
    console.error('❌ Error fetching blog posts:', err)
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}