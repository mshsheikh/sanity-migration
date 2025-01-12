"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
var client_1 = require("@sanity/client");
exports.client = (0, client_1.createClient)({
    projectId: 'cturxqmc', // Replace with your project ID
    dataset: 'production', // Or your dataset name
    apiVersion: '2024-01-04', // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token: "skX6JGp5Jn4UvUh1CrMTyOo0ll6JCYddLeuEQvvNQh64HtGhLh5hKiAwGLNxwAog9Yz4rnfPj3ayd6Xt3V9I5sZnmjRAsuDjvCBIdSwCBE7JT426MBs8jast7XjV5g5Q3qB0XlNgMraD9ygL9lcz0e9xWQonixXaxIjdVv0J1jLxfzLMB0sb"
});
