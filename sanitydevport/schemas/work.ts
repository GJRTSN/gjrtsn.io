export default {
  name: 'project',
  title: 'Arbeid',
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
    //////////////////////////// CARD ///////////////////////////////

    //////////////////////////// BLOG ///////////////////////////////

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

    {
      name: 'blogtitle1',
      title: 'Blog Title 1',
      type: 'string',
    },
    {
      name: 'blogtext1',
      title: 'Blog Text 1',
      type: 'text',
    },

    {
      title: 'Blog Picture 1',
      name: 'blogpic1',
      type: 'image',
    },

    {
      name: 'blogtitle2',
      title: 'Blog Title 2',
      type: 'string',
    },
    {
      name: 'blogtext2',
      title: 'Blog Text 2',
      type: 'text',
    },

    {
      title: 'Blog Picture 2',
      name: 'blogpic2',
      type: 'image',
    },

    {
      name: 'blogtitle3',
      title: 'Blog Title 3',
      type: 'string',
    },
    {
      name: 'blogtext3',
      title: 'Blog Text 3',
      type: 'text',
    },

    {
      title: 'Blog Picture 3',
      name: 'blogpic3',
      type: 'image',
    },

    {
      name: 'blogtitle4',
      title: 'Blog Title 4',
      type: 'string',
    },
    {
      name: 'blogtext4',
      title: 'Blog Text 4',
      type: 'text',
    },

    {
      title: 'Blog Picture 4',
      name: 'blogpic4',
      type: 'image',
    },

    //////////////////////////// BLOG ///////////////////////////////
  ],
}

// {
//     name: 'gallery',
//     type: 'array',
//     options: {
//       hotspot: true,
//     },
//     of: [{type: 'image'}],
//   },
