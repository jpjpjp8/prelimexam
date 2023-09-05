import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
  During my internship, I, Jose Paulo Mendoza, had the opportunity to work at Social Rhino Media, 
a Canadian-based company with an office located in San Fernando, Pampanga. My job within the company 
was content researcher and a graphics designer. This role allowed me to gain a experience understanding
of the media industry and develop a skills. One of the reasons I chose to intern at Social Rhino Media 
is because I already work there since 2021 and so that I would not have a conflict in my schedule. This helped 
me to gain exposure in a work environment and learned to socialize with different types of people.
</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}