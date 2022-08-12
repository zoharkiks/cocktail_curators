import Document, {
    Html,
    Head,
    Main,
    NextScript,
  } from 'next/document'
  
  class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
  
      return initialProps
    }
  
    render() {
      return (
        <Html>
          <Head>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
          <link
            rel="preload"
            href="/fonts/Blooming Elegant Sans.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />
            <link
            rel="preload"
            href="/fonts/WorldwideHeadline.ttf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }

  export default MyDocument
