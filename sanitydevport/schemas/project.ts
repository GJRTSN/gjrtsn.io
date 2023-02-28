export default {
  name: 'projectdata',
  title: 'Prosjekt',
  type: 'document',
  fields: [
    //////////////////////////// CARD ///////////////////////////////

    {
      title: 'Vis på forsiden',
      name: 'spotlight',
      type: 'boolean',
    },
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Kategori',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
    },
    {
      name: 'tech',
      title: 'Teknologi',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'tech'}],
        },
      ],
    },
    {
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image',
    },
    {
      name: 'date',
      title: 'Dato',
      type: 'string',
    },

    {
      name: 'demo',
      title: 'Demo',
      type: 'string',
    },
    {
      name: 'git',
      title: 'GitHub',
      type: 'string',
    },
    //////////////////////////// CARD ///////////////////////////////

    //////////////////////////// BLOG ///////////////////////////////

    {
      name: 'article',
      title: 'Article',
      type: 'object',
      fields: [
        {
          name: 'articleSections',
          title: 'Artikkel',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'blogTitle',
                  title: 'Tittel',
                  type: 'string',
                },
                {
                  name: 'bodyPortableText',
                  title: 'Body',
                  type: 'array',
                  of: [{type: 'block'}],
                },
                {
                  name: 'blogPic',
                  title: 'Blog Picture',
                  type: 'image',
                },
              ],
              preview: {
                select: {
                  title: 'blogTitle',
                  subtitle: 'bodyPortableText',
                  media: 'blogPic',
                },
                prepare(selection: any) {
                  const {title, subtitle, media} = selection
                  return {
                    title: title || 'No title',
                    subtitle: subtitle ? subtitle[0].children[0].text : 'No body',
                    media: media,
                  }
                },
              },
            },
          ],
        },
      ],
    },

    //////////////////////////// BLOG ///////////////////////////////
  ],
}
