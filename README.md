
# Terribly Tiny Tales Frontend Assignment

Frontend Assignment given by Terribly Tiny Tales



## Explanation of components and libraries used

**Frontend:** Next.js, React.js, CSS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### Axios for fetching the data
#### Chart.js and react-chartjs-2 for plotting the histogram
#### Chart.js and react-chartjs-2 for plotting the histogram

### Workflow

1. I started with a fetchData() function which is called when submit button is clicked
there i fetched the data using axios from the link [https://www.terriblytinytales.com/test.txt](https://www.terriblytinytales.com/test.txt)

2. Then I parsed the data and transformed the data using regular expressions to remove all the spaces and linebreaks and specials characters

3. After that I converted the string to array of string using split() method

4. I mapped the data using Map() data structure that stores [key , value] pairs where the key is the word and value is the count of how many times the word has been encountered and sorted that map in the decreasing order based on the values

5. I created 2 temp arrays for key and values respectively and to find the first 20 words i sliced the arrays and stored it in the started

6. Lastly I passed the state to the chart component that displays the words on the X-axis and count on the Y-axis in the decreasing order

7. On the frontend I conditionally rendered the chart component based on the state array value
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.