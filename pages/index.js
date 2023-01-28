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
My name is Jose Paulo E. Mendoza, I live in San Agustin, CIty of San Fernando, Pampanga. My hobbies are spending time with my family and friends. 
I took up Computer ENgineering because I want to learn about the hardware and software of a computer.
I see myself five years from now as a Computer Engineer working in a well known company.
I expect to  learn about the process of making software.
The topics that I want to be tackled in the subject is the basics first, I would like to master it first so that It would not be difficult when moving to other topics.
</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}