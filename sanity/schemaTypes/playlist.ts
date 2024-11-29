import {defineField, defineType} from "sanity";

export const playlist = defineType({
    name: "playlist",
    title: "Playlists",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title",
            },
        }),
        defineField({
            name: "select",
            type: "array",
            of: [{type: "reference", to: [{type: "startup"}]}],
            validation: (Rule) =>
                Rule.required().min(1).error("At least one startup must be selected."),
        }),
    ],
});