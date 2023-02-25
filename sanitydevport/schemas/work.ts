export default {
  name: 'project',
  title: 'Arbeid',
  type: 'document',
  fields: [
    {
      //////////////////////////// CARD ///////////////////////////////
      name: 'title',
      title: 'Prosjekttittel',
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
      type: 'string',
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
      name: 'blogtext1',
      title: 'Blog Text 1',
      type: 'string',
    },

    {
      title: 'Blog Picture 1',
      name: 'blogpic1',
      type: 'image',
    },

    {
      name: 'blogtext2',
      title: 'Blog Text 2',
      type: 'string',
    },

    {
      title: 'Blog Picture 2',
      name: 'blogpic2',
      type: 'image',
    },

    {
      name: 'blogtext3',
      title: 'Blog Text 3',
      type: 'string',
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
