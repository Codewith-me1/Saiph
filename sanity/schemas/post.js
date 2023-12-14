


// schemas/post.js



import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),

        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),

        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [{
                name: 'alt',
                title: 'Alt',
                type: 'string'
            }]
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
        
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'blockContent',
        }),

        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
    
        }),
    
    ]
})