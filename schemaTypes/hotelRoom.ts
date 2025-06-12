import {defineField} from 'sanity'

const roomTypes = [
  {
    title: 'Basic',
    value: 'basic',
  },
  {
    title: 'Deluxe',
    value: 'deluxe',
  },
  {
    title: 'Suite',
    value: 'suite',
  },
]

export const hotelRoom = {
  name: 'hotelRoom',
  title: 'Hotel Room',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().max(50).error('Maximum 50 characters'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().max(100).error('Maximum 100 characters'),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(100).error('Minimum 100€'),
    }),
    defineField({
      name: 'discount',
      title: 'Discount',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      description:
        'Minimum 3 images required. The images should be at least 400x400px and of a good quality for better results',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'url', type: 'url', title: 'Image URL'},
            {name: 'file', type: 'file', title: 'Image File'},
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(3).error('Minimum 3 images required'),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'object',
      fields: [
        {name: 'url', type: 'url', title: 'Image URL'},
        {name: 'file', type: 'file', title: 'Image File'},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Room Type',
      type: 'string',
      options: {
        list: roomTypes,
      },
      validation: (Rule) => Rule.required(),
      description: 'You can select three types of rooms: Basic, Deluxe and Suite',
      initialValue: 'basic',
    }),
    defineField({
      name: 'specialNote',
      title: 'Special Note',
      type: 'text',
      validation: (Rule) => Rule.required(),
      initialValue:
        'Check-in time is 12:00 PM, check-out time is 11:00 AM. If you leave behind any items, please contact the front desk.',
    }),
    defineField({
      name: 'dimension',
      title: 'Dimension',
      description: 'Dimension of the room',
      type: 'string',
    }),
    defineField({
      name: 'numberOfBeds',
      title: 'Number of Beds',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).error('Minimum 1 bed required'),
      initialValue: 1,
    }),
    defineField({
      name: 'offeredAmenities',
      title: 'Offered Amenities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'icon', title: 'Icon', type: 'string'},
            {name: 'amenity', title: 'Amenity', type: 'string'},
          ],
        },
      ],
    }),
    defineField({
      name: 'isBooked',
      title: 'Is Booked',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isFeatured',
      title: 'Is Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [{type: 'review'}],
    }),
  ],
}
