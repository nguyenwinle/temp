import { ThemeProvider } from "emotion-theming";
import { HomeProvider } from "../components/tedwomen2020/context";
import ContentPage from "../components/tedwomen2020/home";
import { fetchEntries } from '../lib/contentfulFetch'
// import TedWomen2020 from './tedwomen2020'
// import TedWomen2021 from './tedwomen2021'
import Ted2022 from './ted2022'
import Head from "next/head";
import { theme } from "../components/tedwomen2020/theme";
import { prependOnceListener } from "process";

export const confPage = process.env.NEXT_PUBLIC_TED_EVENT;

export default function Home(props) {
  const selectPage = staticPage(props);
  
  return (
    <div>
      {selectPage}
    </div>
  )
}

function staticPage(props) {
  switch(confPage) {
    // case 'tedwomen2020':
    //   return <TedWomen2020 page={props.page}/>;
    // case 'tedwomen2021':
    //   return <TedWomen2021 page={props.page}/>;
    case 'ted2022':
      return <Ted2022 page={props.page}/>;
    default:
      return '';
  }
}

export async function getStaticProps() {
  const page = await fetchEntries("home", confPage)
  return {
    props: {
      page,
    },
    revalidate: 60, // 1 minute
  };
}